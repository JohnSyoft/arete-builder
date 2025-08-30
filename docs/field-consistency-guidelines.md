# Field Consistency Guidelines

## Important: Maintain Consistency Across Field Components

When making changes to field rendering, validation, or behavior in any of the following components, ensure ALL related components are updated consistently:

### Primary Field Components to Keep in Sync:

1. **DefaultValueField.tsx** (`components/dialogs/manage-fields/DefaultValueField.tsx`)

   - Used when creating/editing field definitions
   - Handles default value setting for each field type

2. **CollectionItemDrawer.tsx** (`components/cms/CollectionItemDrawer.tsx`)

   - Used when creating/editing actual collection items
   - Renders the actual data entry forms

3. **SharedFieldRenderer.tsx** (`components/ui/shared-field-renderer.tsx`)
   - Shared component used across the application for field rendering
   - Should contain reusable field logic

### Consistency Rules:

#### When Adding New Field Types:

- Add handling in **ALL THREE** components above
- Ensure the same field type behaves identically across contexts
- Use the same validation rules and UI patterns

#### When Enhancing Existing Fields:

- **Reference Fields**: If you improve reference handling (like smart dropdowns), apply the same logic to both DefaultValueField and CollectionItemDrawer
- **Multi-Reference Fields**: Ensure both components handle array values and multi-selection consistently
- **Validation**: Apply the same validation rules across all components
- **UI/UX**: Use identical styling and interaction patterns

#### Specific Examples:

- **Reference Field Dropdowns**: Both DefaultValueField and CollectionItemDrawer should use the same `getDisplayName` logic (title → slug → ID fallback)
- **Multi-Reference Handling**: Both should support array values and provide similar multi-selection UI
- **Default Values**: CollectionItemDrawer should respect default values set via DefaultValueField
- **Validation Messages**: Use consistent error messaging across components

### Testing Checklist:

When making field-related changes, test:

1. Creating a new field with the field type
2. Setting default values for the field type
3. Creating a new collection item using that field
4. Editing an existing collection item with that field
5. Ensuring data is saved and displayed correctly

### Code Sharing Opportunities:

- Extract common field logic into SharedFieldRenderer when possible
- Create shared utility functions for field validation, formatting, and display
- Use consistent type definitions across all field components

## Remember:

**Any improvement made to field handling in one component should be evaluated for application to all related components to maintain a consistent user experience.**
