# HTML Stripping in Collection Cards

## Problem
Collection item data sometimes contains HTML tags like:
```html
<p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p><p>asdfadfasdfa</p>
```

## Solution
The `getFieldValue` function now automatically strips HTML tags and handles common HTML entities.

### Examples

**Input:**
```html
<p>Hello <strong>World</strong></p><p>This is a test</p>
```

**Output:**
```text
Hello World This is a test
```

**Input:**
```html
<div>Product &amp; Services</div><p>Price: &lt;$100&gt;</p>
```

**Output:**
```text
Product & Services Price: <$100>
```

### Features
- ✅ Removes all HTML tags (`<p>`, `<div>`, `<strong>`, etc.)
- ✅ Converts HTML entities (`&amp;`, `&lt;`, `&gt;`, `&nbsp;`, etc.)
- ✅ Normalizes whitespace (multiple spaces become single space)
- ✅ Trims leading and trailing whitespace
- ✅ Preserves content while removing markup

### Implementation
The stripping happens automatically in the `getFieldValue` utility function, so all card designs benefit from clean, readable text content without HTML markup.

## Usage
No changes needed in component usage - HTML stripping is automatic when HTML tags are detected in field values.

```tsx
// This will automatically strip HTML tags
<CollectionWrapper
  collectionId="your-collection-id"
  titleField="htmlTitle"      // HTML will be stripped
  descriptionField="htmlDesc" // HTML will be stripped
  cardDesign="default"
/>
```
