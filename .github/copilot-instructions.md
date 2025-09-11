# Arete Website Builder - AI Coding Instructions

## Architecture Overview

This is a full-stack website builder platform with separate frontend (`arete-builder`) and backend (`arete-backend`) services.

**Frontend**: Next.js 14 with TypeScript, using shadcn/ui + Radix components, TanStack Query for API state management, and Zustand for client state.
**Backend**: Express.js with MongoDB, following a controller/validation/route pattern, JWT authentication, and standardized response handling.

## Key Patterns & Conventions

### Frontend Patterns

- **API Integration**: Use React Query hooks from `/hooks/useProjects.ts`, `/hooks/useAuth.ts` etc. - never call `apiClient` directly in components
- **Data Access**: API responses follow `response.data` pattern: `projectsResponse?.data?.projects` (array), `userResponse?.data?.user`, `pageResponse?.data?.page`
- **Modal System**: Register modals in `/components/dialogs/Modals.tsx` registry, open via Zustand store: `useModalStore().openModal("modalName", props)`
- **Component Structure**: Components use shadcn/ui base + custom extensions in `/components/ui/`. Theme variables in CSS for dark/light mode support
- **Component Size Management**: Split large components (>200-300 lines) into smaller, focused components. Extract sub-components, custom hooks, and utility functions into separate files
- **State Management**: Zustand for UI state (modals, temporary data), React Query for server state, local state for component-specific data

### Backend Patterns

- **Route Structure**: Every route folder has `index.js` (Express routes), `controller.js` (business logic), `validation.js` (input validation)
- **Middleware Chain**: Routes use: `protect` (auth) → `validation` → `handleValidationErrors` → `controller`
- **Response Format**: Use functions from `/responses/responseHandler.js`: `sendResponse.success(res, { message, data })`, `sendResponse.error(res, { status, message })`, `sendResponse.created(res, { message, data })`, etc. Always include descriptive messages and wrap data in objects.
- **Database Access**: Controllers interact with Mongoose models in `/models/`. Always populate related fields for API responses

### Authentication Flow

#### JWT Token Management
- **Frontend**: JWT stored in localStorage as "areteToken"
- **API Client**: [lib/api/apiClient.ts](mdc:lib/api/apiClient.ts) automatically adds `Authorization: Bearer {token}` headers
- **Backend**: `protect` middleware in [middleware/auth.js](mdc:middleware/auth.js) validates JWT and adds `req.user`
- **Error Handling**: 401 responses trigger automatic redirect to `/login`

#### Authentication Patterns
- **Frontend Auth State**: Use [hooks/useAuth.ts](mdc:hooks/useAuth.ts) for all authentication operations
- **Backend Route Protection**: Apply `protect` middleware to secured endpoints
- **User Access**: Controllers access authenticated user via `req.user._id` and `req.user.email`
- **Resource Ownership**: Always validate `resource.owner.toString() === req.user._id.toString()`
- **Security**: Hash passwords with bcrypt, implement rate limiting on auth endpoints

## Development Workflows

### Starting Development

```bash
# Backend (terminal 1)
cd arete-backend && npm run dev  # Starts on port 5001

# Frontend (terminal 2)  
cd arete-builder && npm run dev  # Starts on port 3000
```

### Environment Configuration

#### Frontend Configuration (`.env.local`)
- `NEXT_PUBLIC_API_URL=http://localhost:5001` - Backend API URL
- Additional environment-specific variables as needed

#### Backend Configuration (`.env`)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT token signing  
- `CLOUDINARY_*` - Cloudinary configuration for file uploads
- `NODE_ENV` - Environment (development/production)

### Database Setup

#### MongoDB Connection
- Configuration in `/config/database.js`
- Mongoose ODM for schema definitions and queries
- Models defined in `/models/` directory

#### Seeding Development Data
- Seed utilities in `/utils/seedData.js`
- Run seed scripts for development data setup

### Build and Deployment

#### Frontend Build Process
```bash
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint checking
```

#### Backend Deployment
- Express server configured in `/server.js`
- MongoDB connection required
- Environment variables must be set in production

### Adding New Features

1. **New API Endpoint**: Create controller function → validation rules → add route in `index.js`
2. **New Frontend Feature**: Create API functions in `/lib/api/` → React Query hook in `/hooks/` → component integration
3. **New Modal**: Create dialog component → register in `/components/dialogs/Modals.tsx` → use `useModalStore().openModal()` → use `CreteEditDialog*Name*`

### Component Splitting Guidelines

When components exceed 200-300 lines or handle multiple responsibilities, split them using these strategies:

1. **Extract Sub-components**: Move JSX sections with clear boundaries into separate components (e.g., `ProjectCard`, `ProjectHeader`, `ProjectActions`)
2. **Extract Custom Hooks**: Move complex state logic and side effects into custom hooks (e.g., `useProjectActions`, `useProjectForm`)
3. **Extract Utility Functions**: Move data transformation and helper functions into separate utility files
4. **Create Component Folders**: For complex features, create a folder structure like `/components/projects/ProjectDashboard/` with `index.tsx`, `ProjectCard.tsx`, `ProjectActions.tsx`, etc.
5. **Maintain Single Responsibility**: Each component should have one clear purpose and reason to change

## Component Integration Examples

### API Integration Pattern

#### Frontend Data Access (CRITICAL)
**ALWAYS use React Query hooks from `/hooks/` - never call `apiClient` directly in components**

```typescript
// ✅ Correct: Use React Query hooks with proper data access
const { data: projectsResponse, isLoading } = useProjects();
const projects = projectsResponse?.data?.projects || [];

// ✅ Correct: Single resource access
const { data: pageResponse } = usePage(pageId);
const page = pageResponse?.data?.page;

// ❌ Wrong: Direct API calls
const projects = await projectsApi.getProjects();

// ❌ Wrong: Incorrect data structure (missing nested object)
const projects = projectsResponse?.data || [];
```

#### Backend Response Structure
All backend responses follow this standardized format:
```javascript
// Success responses
{
  success: true,
  message: "Descriptive success message",
  data: {
    projects: [...],    // For collections
    project: {...},     // For single resources
    user: {...},
    page: {...}
  }
}

// Error responses
{
  success: false,
  message: "Descriptive error message",
  error: "Additional details" // optional
}
```

#### Response Handler Usage (Backend)
Always use functions from `/responses/responseHandler.js`:
```javascript
// Success responses
sendResponse.success(res, { message: "Operation successful", data: { item } });
sendResponse.created(res, { message: "Resource created", data: { newItem } });

// Error responses
sendResponse.notFound(res, "Resource not found");
sendResponse.badRequest(res, { message: "Invalid data", error: validationErrors });
sendResponse.forbidden(res, "Access denied");
sendResponse.unauthorized(res, "Authentication required");
```

### Modal System Pattern

#### Modal Registration (Required)
All modals must be registered in `/components/dialogs/Modals.tsx`:
```typescript
export const modalRegistry = {
  createProject: CreateEditProjectDialog,
  editProject: CreateEditProjectDialog,
  createPage: CreateEditPageDialog,
  // Add new modals here
} as const;
```

#### Opening Modals
Use `/lib/store/modalStore.ts` Zustand store:
```typescript
const modalStore = useModalStore();

// Open modal with props
modalStore.openModal("createProject", {
  project: null,
  onSave: handleCreate,
  isLoading: mutation.isPending,
});

// Close modal
modalStore.closeModal();
```

#### Modal Component Pattern
```typescript
interface ExampleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  // Props passed from openModal
  item?: Item;
  onSave: (data: ItemData) => void;
  isLoading?: boolean;
}

export function ExampleDialog({ isOpen, onClose, item, onSave, isLoading }: ExampleDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {/* Dialog content */}
      </DialogContent>
    </Dialog>
  );
}
```

#### Modal Naming Conventions
- Use `CreateEdit*Dialog` pattern for create/edit modals
- Modal keys: `createProject`, `editPage`, `deleteConfirm`, etc.
- Props passed through Zustand store, not direct component props

### Backend Route Pattern

#### Route Structure (Every Route Follows This)
```javascript
// routes/[feature]/index.js
router.post(
  "/",
  protect,                // Authentication middleware
  validation,             // Input validation
  handleValidationErrors, // Validation error handling  
  controller              // Business logic
);
```

#### Controller Pattern
```javascript
// routes/[feature]/controller.js
export const createController = async (req, res) => {
  // Access authenticated user
  const userId = req.user._id;
  
  // Validate ownership for user-specific resources
  if (resource.owner.toString() !== userId.toString()) {
    return sendResponse.forbidden(res, "Access denied");
  }
  
  // Create resource with user context
  const result = await Model.create({
    ...req.body,
    owner: userId
  }).populate('owner', 'name email');
  
  return sendResponse.created(res, {
    message: "Resource created successfully",
    data: { item: result }
  });
};
```

#### Validation Pattern
```javascript
// routes/[feature]/validation.js
export const createValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
];
```

### Response Structure Patterns

```javascript
// Success responses
sendResponse.success(res, { message: "Operation successful", data: { item } });
sendResponse.created(res, {
  message: "Resource created successfully",
  data: { item },
});

// Error responses
sendResponse.notFound(res, "Resource not found");
sendResponse.badRequest(res, {
  message: "Invalid data",
  error: validationErrors,
});
sendResponse.forbidden(res, "Access denied");
```

## Project-Specific Gotchas

- Use `project._id` not `project.id` - MongoDB uses `_id`
- Modal props are passed through Zustand store, not direct component props
- Backend validation happens in dedicated files, not inline in controllers
- Frontend API responses are auto-unwrapped by Axios interceptor: `response.data` not `response.data.data`
- CraftJS is used for drag-and-drop editor functionality in `/app/editor/`
- New CraftJS components must be added to both `/components/editor/craft-components.tsx` (resolver) and `/components/editor/sidebar.tsx` (sidebar menu)
- **Code Cleanup Rules**: When removing features or refactoring, perform COMPLETE cleanup:
  - **Delete entire files and directories** when they become unused - no empty stubs
  - **Frontend**: Remove from modal registries, CraftJS registrations, update imports and route configs
  - **Backend**: Delete route directories, model files, controller/validation files, associated utilities
  - **Dependencies**: Clean up unused npm packages, imports, and type definitions
  - **Assets**: Remove unused images, CSS classes, and static files
  - **References**: Update all imports and references throughout the codebase
- **CraftJS Component Rules**: All CraftJS components must have rules with `canDrag`, `canDrop`, `canMoveIn`, `canMoveOut` properties (typically set to `true` or appropriate functions)

## Available CraftJS Components

### Hero Components

- **MedicalHero1**: Healthcare-focused hero with medical imagery and statistics
- **MiniMaxHero1**: Multi-slide carousel for AI models with automatic transitions, navigation arrows, and dot indicators

### CraftJS Component Creation Guidelines

#### Component Structure Requirements
- **Element Wrapper**: Use `Element` wrapper with `is={Component}` and appropriate `canvas` prop
- **Unique IDs**: Every Element must have a unique `id` prop using descriptive naming: `componentName-elementPurpose-dynamicId` (e.g., `heroTitle`, `navigationMenu`, `productCard-${id}`)
- **Supported Props**: Only use supported props from base components (Box, Text, Button, etc.)
- **Avoid Unsupported CSS**: No `position`, `opacity`, `fontWeight` on buttons, `maxWidth` on boxes

#### Component Registration Process
1. **Add to Resolver**: Register in `/components/editor/craft-components.tsx` componentResolvers
2. **Add to Sidebar**: Include in `/components/editor/sidebar.tsx` for drag-and-drop availability
3. **Craft Configuration**: Include `.craft` object with `displayName`, `props`, and `rules`

#### Component Rules Configuration
```typescript
ComponentName.craft = {
  displayName: "Component Name",
  props: {
    // Default props
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
```

#### Global Properties Panel Guidelines
- **Basic Components ONLY**: Box, Text, Button, Flex, Card, Section use global properties panel
- **Complex Components**: Hero sections, galleries, custom cards handle properties internally
- **Never mix**: Complex components should not integrate with global property panels

#### Available Base Components
- `Container` - Main layout container with canvas support
- `Box` - Generic div wrapper for layout
- `Text` - Typography component with text editing
- `Button` - Interactive button component
- `Flex` - Flexbox container for layout
- `Card` - Card layout component
- `Section` - Page section wrapper

### UI Component Guidelines

#### SelectItem Components
- **Never use empty string `value=""`** - throws errors
- Use descriptive values: `"no-collections"`, `"none"`, `"not-selected"` for disabled placeholder items

#### Collections Data Access  
- Standard pattern: `collectionsResponse?.collections` not `collectionsResponse?.data?.collections`
- Exception: When API specifically nests under `.data`

#### Navigation Components
- **Navigation Structure**: Use navigation components from `/components/navigation/` for consistent navigation patterns
- **NavigationItem Pattern**: Individual navigation items with proper styling and interaction states
- **Property Panels**: Navigation components have dedicated property panels for configuration
- **Responsive Design**: Navigation components support responsive breakpoints and mobile patterns

## Key File References

- `/app/dashboard/page.tsx` - Main projects dashboard showing full API integration
- `/components/dialogs/Modals.tsx` - Central modal registry system
- `/lib/store/modalStore.ts` - Zustand modal state management
- `/routes/projects/` - Complete backend route example with controller/validation pattern
- `/lib/api/apiClient.ts` - Axios configuration with auth interceptors
- `/hooks/useProjects.ts` - React Query integration example
