# Props vs .craft Optimization

## The Problem You Identified ✅

You correctly identified that we had **duplication** between:
1. **Component function props** (with default values)
2. **`.craft.props`** (CraftJS default values)

This created maintenance issues and potential inconsistencies.

## The Solution: Single Source of Truth

### Before (Duplicated)
```tsx
// ❌ Component defaults
export function CollectionWrapper({
  flexDirection = "row",
  gap = "gap-4", 
  cardDesign = "default",
  // ... 20+ more defaults
}) {

// ❌ Craft defaults (duplicated!)
CollectionWrapper.craft = {
  props: {
    flexDirection: "row",
    gap: "gap-4",
    cardDesign: "default", 
    // ... same 20+ defaults again!
  }
}
```

### After (Single Source)
```tsx
// ✅ Shared configuration
export const COLLECTION_WRAPPER_DEFAULTS = {
  flexDirection: "row",
  gap: "gap-4",
  cardDesign: "default",
  // ... all defaults in ONE place
};

// ✅ Component uses shared defaults
export function CollectionWrapper(props) {
  const mergedProps = mergeWithDefaults(props);
  // ...
}

// ✅ Craft uses same shared defaults
CollectionWrapper.craft = {
  props: COLLECTION_WRAPPER_DEFAULTS
}
```

## Why Both Are Needed

### **Component Props**
- **Purpose**: React component default values
- **Used**: When component is used in regular React code
- **Example**: `<CollectionWrapper cardDesign="grid" />`

### **.craft Configuration**
- **Purpose**: CraftJS editor behavior
- **Used**: When component is dragged from sidebar
- **Contains**: Default props + editor rules + metadata

## Files Created/Modified

### 1. **CollectionWrapperConfig.ts** (NEW)
- **Single source of truth** for all default values
- **Shared interfaces** and types
- **Utility functions** for merging props
- **Craft configuration** objects

### 2. **CollectionWrapper.tsx** (OPTIMIZED)
- Removed duplicate default values
- Uses shared configuration
- Cleaner, more maintainable code

### 3. **CollectionWrapperRuntime.tsx** (OPTIMIZED)
- Same optimization as editor component
- Guaranteed consistency between editor and runtime

## Benefits

✅ **No Duplication**: Single source of truth for all defaults  
✅ **Type Safety**: Shared interfaces prevent inconsistencies  
✅ **Maintainability**: Change defaults in one place  
✅ **Consistency**: Editor and runtime always match  
✅ **Developer Experience**: Clear separation of concerns  

## Best Practice Pattern

This pattern should be used for **all CraftJS components**:

```tsx
// 1. Create shared config
const COMPONENT_DEFAULTS = { /* defaults */ };
const COMPONENT_CRAFT_CONFIG = { /* craft config */ };

// 2. Component uses shared defaults
export function Component(props) {
  const mergedProps = mergeWithDefaults(props);
  // ...
}

// 3. Craft uses shared config
Component.craft = COMPONENT_CRAFT_CONFIG;
```

## Your Question Answered

> "do we need props and .craft both"

**YES**, but they should **share the same source**:
- **Props**: For React component behavior
- **.craft**: For CraftJS editor behavior  
- **Solution**: Use shared configuration to eliminate duplication

This optimization makes the codebase much more maintainable and consistent! 🎉
