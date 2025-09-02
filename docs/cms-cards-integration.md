# CMS Cards Integration Guide

## Overview

The CMS Cards system allows users to create dynamic card layouts that automatically pull content from CMS collections. This guide covers the complete integration workflow.

## Architecture

### 1. Component Layer

- **CMS Card Components**: `CosmeticCard1`, `HospitalityCard1`, `ModernCard1`
- **Properties Panel**: `CMSCardPropertiesPanel` for configuration
- **Status Components**: `CMSIntegrationStatus` for feedback

### 2. Data Layer

- **Data Hook**: `useCMSCardData` - fetches and transforms CMS data
- **API Integration**: Uses existing `useCollectionItems` and `useCollection` hooks
- **Field Mapping**: Transforms CMS fields to card display fields

### 3. Configuration Layer

- **Field Mappings**: Map CMS collection fields to card properties
- **Display Options**: Control what elements to show/hide
- **Auto-detection**: Smart field mapping based on field names and types

## Integration Workflow

### Step 1: Collection Setup

1. Create a CMS collection with appropriate fields
2. Add content items to the collection
3. Ensure fields have descriptive names (e.g., `title`, `description`, `image`)

### Step 2: Card Configuration

1. Drag a CMS card component to the page
2. Open the properties panel (right sidebar)
3. Select a CMS collection from the dropdown
4. Use "Auto-detect" for smart field mapping or configure manually

### Step 3: Field Mapping

Map card elements to collection fields:

- **Image Field**: Visual content (image/gallery fields)
- **Title Field**: Main heading (text fields)
- **Excerpt Field**: Description content (text/textarea fields)
- **Date Field**: Publication dates (date/datetime fields)
- **Author Field**: Creator information (text/reference fields)
- **Category Field**: Classification (select/reference fields)
- **URL Field**: Link destinations (url/text fields)

### Step 4: Display Options

Configure what elements to show:

- Toggle visibility for images, dates, authors, categories, excerpts
- Set number of items to display
- Choose column layout (1-4 columns)
- Adjust excerpt length

## Field Mapping Examples

### Blog Collection

```javascript
fieldMappings: {
  image: "featured_image",    // Image field
  title: "post_title",        // Text field
  excerpt: "excerpt",         // Textarea field
  date: "published_date",     // Date field
  author: "author",           // Reference to Users collection
  category: "category",       // Select field
  url: "slug"                 // Text field (auto-generated)
}
```

### Product Collection

```javascript
fieldMappings: {
  image: "product_image",     // Image field
  title: "product_name",      // Text field
  excerpt: "description",     // Textarea field
  price: "price",             // Number field
  category: "product_category", // Select field
  url: "product_slug"         // Text field
}
```

### Services Collection

```javascript
fieldMappings: {
  image: "service_photo",     // Image field
  title: "service_name",      // Text field
  excerpt: "service_description", // Textarea field
  category: "service_type",   // Select field
  url: "service_page"         // URL field
}
```

## Auto-Detection Rules

The system automatically suggests field mappings based on:

1. **Field Names**: Matches common patterns

   - `title`, `name`, `heading` → Title Field
   - `description`, `excerpt`, `summary` → Excerpt Field
   - `image`, `photo`, `picture` → Image Field
   - `date`, `published`, `created` → Date Field
   - `author`, `creator`, `writer` → Author Field
   - `category`, `tag`, `type` → Category Field
   - `url`, `link`, `slug` → URL Field

2. **Field Types**: Matches by data type
   - `image` type → Image Field
   - `date`/`datetime` type → Date Field
   - `number` type → Price Field
   - `url` type → URL Field
   - `reference` type → Author/Category Field

## Data Transformation

The `useCMSCardData` hook handles:

### Input Processing

- Fetches collection items with pagination
- Populates reference fields
- Filters by status (published/draft/archived)
- Sorts by specified criteria

### Output Transformation

- Maps CMS fields to standardized card properties
- Handles different data types (text, images, dates, numbers)
- Provides fallback values for missing data
- Includes metadata (ID, slug, status, timestamps)

### Error Handling

- Loading states during data fetch
- Error states for failed requests
- Fallback to preview data when CMS unavailable
- Graceful degradation for missing fields

## Status Indicators

The system provides visual feedback:

### Connection Status

- **Connected**: Live CMS data is being displayed
- **Preview Mode**: Using static preview data
- **No Collection**: No CMS collection selected

### Data Status

- **Item Count**: Number of available items in collection
- **Mapped Fields**: Number of successfully mapped fields
- **Loading**: Data fetch in progress
- **Error**: Display error messages and retry options

## Performance Considerations

### Optimization Strategies

1. **Pagination**: Limit items fetched (default: 6 items)
2. **Selective Population**: Only populate needed reference fields
3. **Image Optimization**: Use appropriate image sizes
4. **Caching**: React Query handles response caching
5. **Lazy Loading**: Consider implementing for large datasets

### Best Practices

1. **Field Mapping**: Use descriptive field names for auto-detection
2. **Content Strategy**: Consistent field usage across collection items
3. **Image Assets**: Optimize images for web display
4. **Preview Data**: Maintain realistic preview content for design mode

## Troubleshooting

### Common Issues

#### No Items Displayed

- Check collection has published items
- Verify field mappings are correct
- Ensure collection permissions allow read access

#### Images Not Loading

- Verify image field contains valid URLs
- Check image permissions and accessibility
- Confirm image field mapping is correct

#### Field Mapping Issues

- Use auto-detect feature for initial setup
- Check field names match exactly (case-sensitive)
- Verify field types are compatible

#### Performance Issues

- Reduce number of items displayed
- Optimize image sizes
- Check for unnecessary field population

### Debug Information

Enable debug logging in development:

```javascript
// In useCMSCardData hook
console.log("CMS Data:", { items, collection, fieldMappings });
```

Check browser network tab for API request details.

## Advanced Configuration

### Custom Field Transformations

Extend the data transformation logic for complex field types:

```javascript
// In useCMSCardData hook
const transformFieldValue = (field, value) => {
  switch (field.type) {
    case "richText":
      return stripHtml(value);
    case "reference":
      return value?.data?.title || value?.title || value;
    case "multiReference":
      return value?.map((item) => item.data?.title || item.title).join(", ");
    default:
      return value;
  }
};
```

### Custom Card Templates

Create new card templates following the established pattern:

1. Create component in `/components/blocks/CMS/`
2. Implement field mapping interface
3. Add to craft-components registry
4. Include in sidebar categories
5. Add properties panel integration

## Future Enhancements

### Planned Features

1. **Dynamic Templates**: User-created card layouts
2. **Filter Options**: Category/tag filtering in cards
3. **Search Integration**: Search within displayed items
4. **Sorting Options**: User-controlled sorting
5. **Pagination**: Load more functionality
6. **Real-time Updates**: Live content updates
7. **Template Marketplace**: Shared card templates

### API Extensions

1. **Custom Endpoints**: Collection-specific APIs
2. **Aggregation**: Summary statistics
3. **Relationships**: Cross-collection references
4. **Webhooks**: Real-time content notifications
