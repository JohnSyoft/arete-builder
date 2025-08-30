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

- Frontend stores JWT in localStorage as "areteToken"
- API client automatically adds `Authorization: Bearer {token}` headers
- Backend `protect` middleware validates JWT and adds `req.user`
- 401 responses trigger automatic redirect to `/login`

## Development Workflows

### Starting Development

```bash
# Backend (terminal 1)
cd arete-backend && npm run dev  # Starts on :5001

# Frontend (terminal 2)
cd arete-builder && npm run dev  # Starts on :3000
```

### Environment Configuration

- Frontend: `NEXT_PUBLIC_API_URL=http://localhost:5001` in `.env.local`
- Backend: MongoDB connection, JWT secret, Cloudinary keys in `.env`

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

```typescript
// Good: Use React Query hooks with correct data access
const { data: projectsResponse, isLoading } = useProjects();
const projects = projectsResponse?.data?.projects || [];

// Good: Single resource access
const { data: pageResponse } = usePage(pageId);
const page = pageResponse?.data?.page;

// Bad: Direct API calls or wrong nested structure
const projects = await projectsApi.getProjects();
const projects = projectsResponse?.data || []; // Wrong - data contains nested object
```

### Modal Usage Pattern

```typescript
// Open modal with props
modalStore.openModal("createProject", {
  project: null,
  onSave: handleCreate,
  isLoading: mutation.isPending,
});
```

### Backend Route Pattern

```javascript
// routes/example/index.js
router.post(
  "/",
  protect,
  createValidation,
  handleValidationErrors,
  createController
);

// routes/example/controller.js
export const createController = async (req, res) => {
  const result = await Model.create(req.body);
  return sendResponse.created(res, {
    message: "Resource created successfully",
    data: result,
  });
};
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
- **When removing features/code sections**: Delete entire files and directories if they're no longer used. Don't leave empty stubs or unused files in the codebase. This includes model files, route directories, controller files, validation files, and any associated assets. If instructed to remove sections of code, delete the complete files and folders when they become unused - this maintains a clean codebase and prevents confusion.

## Available CraftJS Components

### Hero Components

- **MedicalHero1**: Healthcare-focused hero with medical imagery and statistics
- **MiniMaxHero1**: Multi-slide carousel for AI models with automatic transitions, navigation arrows, and dot indicators

### Component Creation Guidelines

- CraftJS components must use only supported props from the base components (Box, Text, Button, etc.)
- Avoid unsupported CSS properties like `position`, `opacity`, `fontWeight` on buttons, `maxWidth` on boxes
- Use Element wrapper with `is={Component}` and appropriate `canvas` prop
- Include `.craft` configuration with `displayName`, `props`, and `rules`
- **Every Element component must have a unique `id` prop** - use descriptive names like `componentName-elementPurpose-dynamicId` (e.g., `researchCard-${card.id}`, `heroTitle`, `navigationMenu`)
- **Complex components (non-basic blocks) should NOT use global properties panels** - only basic components (Box, Text, Button, Flex, Card, Section) should have global panel integration. Complex components like ResearchCards, PhotoGallery, Hero sections should handle their own properties internally through their craft configuration

## Key File References

- `/app/dashboard/page.tsx` - Main projects dashboard showing full API integration
- `/components/dialogs/Modals.tsx` - Central modal registry system
- `/lib/store/modalStore.ts` - Zustand modal state management
- `/routes/projects/` - Complete backend route example with controller/validation pattern
- `/lib/api/apiClient.ts` - Axios configuration with auth interceptors
- `/hooks/useProjects.ts` - React Query integration example
