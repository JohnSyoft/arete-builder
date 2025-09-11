# Toolbar Components

This folder contains the split components from the original `EditorToolbar` function. The large monolithic component has been broken down into smaller, focused components and custom hooks for better maintainability.

## Structure

### Core Files

- **`types.ts`** - TypeScript interfaces and types used across toolbar components
- **`index.ts`** - Barrel export file for easy importing

### Custom Hooks

- **`useToolbarState.ts`** - Manages toolbar state including collections, current page, CMS detail detection, and collection items
- **`usePageHandlers.ts`** - Handles all page-related operations (add, edit, delete pages)
- **`useCMSHandlers.ts`** - Handles CMS-specific operations (add CMS pages, collection management, item selection)

### UI Components

- **`PagesDropdown.tsx`** - Dropdown menu for page navigation and page management
- **`CollectionsDropdown.tsx`** - Dropdown for collection operations (edit, swap collection)
- **`ItemsDropdown.tsx`** - Dropdown for selecting collection items on CMS detail pages
- **`ViewportControls.tsx`** - Responsive viewport toggle controls (mobile, tablet, desktop)

### Main Component

- **`../toolbar.tsx`** - The main simplified toolbar component that orchestrates all the sub-components

## Benefits of This Split

1. **Single Responsibility** - Each file has a clear, focused purpose
2. **Reusability** - Components and hooks can be reused in other parts of the application
3. **Testability** - Smaller components are easier to unit test
4. **Maintainability** - Changes are isolated to specific areas of functionality
5. **Readability** - The main toolbar component is now much more readable and easier to understand

## Usage

```tsx
import { EditorToolbar } from "@/components/editor/toolbar";

// Or import specific components/hooks
import {
  PagesDropdown,
  useToolbarState,
  type EditorToolbarProps,
} from "@/components/editor/toolbar";
```

## File Size Reduction

- **Original**: ~859 lines in a single file
- **Split**: ~200 lines across 8 focused files
- **Main component**: Now only ~200 lines (75% reduction)
