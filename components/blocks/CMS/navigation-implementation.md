# Collection Card Navigation Implementation

## Overview

Collection cards now support automatic navigation to item detail pages using the Next.js routing pattern: `/site/{projectId}/{collectionSlug}/{itemSlug}`.

## Navigation Logic

### **Internal Navigation (Default)**
- **Pattern**: `/site/{projectId}/{collectionSlug}/{itemSlug}`
- **Uses**: Next.js `Link` component for client-side navigation
- **Behavior**: Stays within the same tab/window
- **Example**: `/site/123/blog/my-first-post`

### **External Links (When linkField is provided)**
- **Pattern**: Any external URL from collection item data
- **Uses**: Standard `<a>` tag with `target="_blank"`
- **Behavior**: Opens in new tab
- **Example**: `https://external-site.com/article`

## Implementation Details

### **Runtime Component** (`CollectionWrapperRuntime.tsx`)
- ✅ Detects current project ID from route params
- ✅ Builds navigation URLs using collection and item slugs
- ✅ Prioritizes external links over internal navigation
- ✅ Passes link type information to cards

### **Editor Component** (`CollectionWrapper.tsx`)
- ✅ Disables navigation in editor preview mode
- ✅ Shows card layouts without functional links
- ✅ Prevents accidental navigation during editing

### **Card Components** (`CollectionCards.tsx`)
- ✅ Smart link detection (internal vs external)
- ✅ Automatic Next.js Link usage for internal navigation
- ✅ External link handling with security attributes
- ✅ Hover effects and visual feedback

## Link Priority

1. **External Link** (from `linkField`) - Takes precedence
2. **Internal Navigation** - Generated automatically if no external link
3. **No Link** - Card is not clickable

## Security Features

- ✅ **`rel="noopener noreferrer"`** for external links
- ✅ **`target="_blank"`** for external links
- ✅ **Automatic protocol detection** (http, https, mailto, tel)
- ✅ **Client-side navigation** for internal routes

## User Experience

### **Visual Feedback**
- 🎯 **Hover effects**: Scale transform and shadow changes
- 🎯 **Cursor changes**: Pointer cursor for clickable cards
- 🎯 **Smooth transitions**: 300ms duration for all effects

### **Accessibility**
- ♿ **Semantic HTML**: Proper `<a>` and `<Link>` usage
- ♿ **Keyboard navigation**: Full keyboard support
- ♿ **Screen readers**: Proper link context and descriptions

## Configuration

### **Field Mapping**
- **`linkField`**: External URL field name (default: "link")
- **Collection slug**: Automatically detected from collection data
- **Item slug**: Uses `item.slug` property from collection items

### **Route Requirements**
- Collection must have a `slug` property
- Collection items must have a `slug` property
- Project must be accessible via `[projectId]` route

## Examples

```tsx
// Automatic internal navigation
<CollectionWrapper
  collectionId="blog-posts"
  cardDesign="default"
  // Will create links like: /site/project123/blog/post-slug
/>

// External links take precedence
<CollectionWrapper
  collectionId="external-resources"
  linkField="externalUrl"
  // Will use external URLs from linkField if available
/>
```

This implementation provides seamless navigation while maintaining security and performance best practices! 🚀
