# Collection Wrapper Cards Documentation

## Overview

The Collection Wrapper component now supports 8 different card designs, each optimized for different content types and use cases. All cards are fully responsive and performance-optimized with memoization and lazy loading.

## Available Card Designs

### 1. Default Card
- **Use Case**: General purpose content (blogs, news, etc.)
- **Layout**: Medium image, title, description, date, category
- **Responsive**: 1-3 columns based on screen size
- **Fields Used**: title, description, image, date, category

### 2. Minimal Card
- **Use Case**: Clean, text-focused content
- **Layout**: Title, description, date only
- **Responsive**: 1-3 columns based on screen size
- **Fields Used**: title, description, date

### 3. Detailed Card
- **Use Case**: Rich content with multiple metadata
- **Layout**: Large image, title, author, description, date, link, tags
- **Responsive**: 1-2 columns based on screen size
- **Fields Used**: title, description, image, date, link, author, category, tags

### 4. Image Focused Card
- **Use Case**: Visual content (galleries, portfolios)
- **Layout**: Large image with overlay text
- **Responsive**: 1-3 columns based on screen size
- **Fields Used**: title, description, image, date, category

### 5. Text Focused Card
- **Use Case**: Articles, blog posts, long-form content
- **Layout**: Emphasis on title and description, minimal imagery
- **Responsive**: 1-2 columns based on screen size
- **Fields Used**: title, description, author, date, category, link

### 6. Compact Card
- **Use Case**: List views, feeds, quick scanning
- **Layout**: Horizontal layout with small image and text
- **Responsive**: Full-width stacked layout
- **Fields Used**: title, description, image, date, category

### 7. Grid Card
- **Use Case**: Product catalogs, e-commerce
- **Layout**: Square aspect ratio with price and rating
- **Responsive**: 1-4 columns based on screen size
- **Fields Used**: title, image, price, rating

### 8. Timeline Card
- **Use Case**: Chronological content, events, updates
- **Layout**: Vertical timeline with date markers
- **Responsive**: Single column with timeline styling
- **Fields Used**: title, description, date

## Field Mapping

Each card design can be customized with field mapping to match your collection structure:

- **titleField**: Main heading (default: "title")
- **descriptionField**: Body text (default: "description")
- **imageField**: Image URL (default: "image")
- **dateField**: Date/timestamp (default: "date")
- **linkField**: External URL (default: "link")
- **categoryField**: Category/type (default: "category")
- **authorField**: Author/creator (default: "author")
- **priceField**: Price for products (default: "price")
- **ratingField**: Rating 0-5 (default: "rating")
- **tagsField**: Comma-separated tags (default: "tags")

## Performance Features

### Memoization
- Card data is memoized to prevent unnecessary re-calculations
- Field value extraction is optimized with case-insensitive fallbacks
- Layout classes are computed once per render

### Responsive Design
- Cards automatically adapt to screen size
- Grid layouts use CSS Grid for optimal performance
- Images use lazy loading with loading="lazy"

### Error Handling
- Graceful fallbacks for missing images
- Safe parsing of numeric fields (rating, price)
- Robust tag parsing (supports arrays or comma-separated strings)

## Usage Example

```tsx
<CollectionWrapper
  collectionId="your-collection-id"
  cardDesign="detailed"
  maxItems={6}
  titleField="headline"
  descriptionField="summary"
  imageField="thumbnail"
  authorField="writer"
  flexDirection="row"
  gap="gap-6"
  justifyContent="start"
/>
```

## Customization

Cards can be further customized by:
1. Modifying the `CollectionCards.tsx` component
2. Adding new card designs to the `cardComponents` object
3. Updating the `CardDesignType` to include new designs
4. Adding corresponding layout utilities in `CardLayoutUtils.ts`

## Best Practices

1. **Choose the right card design** for your content type
2. **Map fields correctly** to ensure data displays properly
3. **Set appropriate maxItems** based on card design and layout
4. **Test responsive behavior** across different screen sizes
5. **Consider loading states** for slow networks
