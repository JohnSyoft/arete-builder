# Carousel Component Documentation

## Overview

The Carousel component is a comprehensive, feature-rich slider component designed for the Arete Builder. It supports multiple variants, advanced navigation, autoplay functionality, and full responsive design.

## Features

### 🎨 **Multiple Variants**

- **Image Carousel**: Perfect for photo galleries and hero images
- **Card Carousel**: Structured content with titles and descriptions
- **Content Carousel**: Flexible content containers
- **Testimonial Carousel**: Optimized for customer reviews and quotes

### 🎛️ **Advanced Navigation**

- **Arrow Navigation**: Previous/Next buttons with hover animations
- **Dot Navigation**: Clickable indicators showing current position
- **Thumbnail Navigation**: Image-based navigation for visual content
- **Keyboard Support**: Arrow key navigation (coming soon)

### ⚡ **Smart Autoplay**

- **Configurable Timing**: 1-10 seconds between slides
- **Pause on Hover**: Automatic pause when user hovers
- **Play/Pause Control**: Manual control button
- **Infinite Loop**: Seamless continuous scrolling

### 📱 **Responsive Design**

- **Breakpoint Configuration**: Different settings for mobile, tablet, and desktop
- **Adaptive Slides**: Automatically adjust number of visible slides
- **Touch/Swipe Support**: Mobile-friendly gesture navigation (coming soon)

### 🎭 **Animation Effects**

- **Slide Transition**: Classic sliding animation
- **Fade Transition**: Smooth opacity-based transitions
- **Scale Transition**: Dynamic scaling effects
- **Configurable Duration**: 100ms to 2 seconds

### 🎨 **Full Customization**

- **Colors**: Background, dots, arrows, active states
- **Spacing**: Gap between slides, padding, margins
- **Sizing**: Height, thumbnail size, border radius
- **Layout**: Slides to show/scroll, responsive breakpoints

## Component Variants

### 1. Image Carousel

```typescript
variant: "image";
```

- Optimized for photo galleries
- Overlay text support (title + description)
- Gradient overlays for text readability
- Perfect for hero sections and portfolios

### 2. Card Carousel

```typescript
variant: "card";
```

- Structured content layout
- Image thumbnails with text content
- Ideal for product showcases and feature highlights
- Professional business presentation

### 3. Content Carousel

```typescript
variant: "content";
```

- Flexible content containers
- Custom content support
- Great for mixed media presentations
- Fully customizable layouts

### 4. Testimonial Carousel

```typescript
variant: "testimonial";
```

- Quote-focused design
- Customer photo display
- Attribution support
- Perfect for social proof sections

## Usage in Editor

### Adding a Carousel

1. Open the **Component Sidebar**
2. Navigate to **Basic Components**
3. Drag and drop the **Carousel** component
4. The component appears with default image slides

### Configuring Properties

1. **Select** the carousel component
2. Click the **Settings** button in the floating toolbar
3. The **Properties Panel** opens with comprehensive options

### Managing Slides

1. In the properties panel, scroll to **Slides** section
2. **Add Slide**: Click the "+" button to add new slides
3. **Remove Slide**: Click the trash icon on any slide
4. **Edit Content**: Modify title, description, image URL for each slide

## Property Categories

### Basic Settings

- **Variant**: Choose carousel type
- **Height**: Set carousel container height
- **Slides to Show**: Number of visible slides
- **Slides to Scroll**: Number of slides to move per navigation

### Navigation & Controls

- **Show Arrows**: Enable/disable arrow navigation
- **Show Dots**: Enable/disable dot indicators
- **Show Thumbnails**: Enable/disable thumbnail navigation
- **Infinite Loop**: Enable seamless continuous scrolling

### Autoplay Settings

- **Enable Autoplay**: Turn on automatic progression
- **Autoplay Delay**: Time between slides (1-10 seconds)
- **Pause on Hover**: Pause when user hovers over carousel

### Animation Settings

- **Transition Effect**: Slide, Fade, or Scale
- **Transition Duration**: Animation speed (100ms-2s)

### Responsive Settings

Configure different behavior for each breakpoint:

- **Mobile** (< 768px): Typically 1 slide
- **Tablet** (768px - 1024px): Usually 2-3 slides
- **Desktop** (> 1024px): 3+ slides for optimal viewing

### Styling Options

- **Colors**: Background, dots, arrows, active states
- **Spacing**: Gaps, padding, margins
- **Borders**: Radius, colors
- **Thumbnails**: Size configuration

## Best Practices

### Performance

- **Image Optimization**: Use appropriately sized images
- **Slide Count**: Keep reasonable number of slides (< 20)
- **Autoplay**: Use sparingly on content-heavy pages

### Accessibility

- **Alt Text**: Provide meaningful image descriptions
- **Navigation Labels**: Clear button labeling
- **Color Contrast**: Ensure readable text overlays

### UX Guidelines

- **Mobile First**: Configure mobile experience first
- **Load Times**: Optimize images for fast loading
- **Content Length**: Keep text concise in overlays
- **Navigation**: Provide multiple navigation methods

## Common Use Cases

### 1. Hero Section

```typescript
variant: "image";
height: "60vh";
autoplay: true;
showDots: true;
showArrows: false;
```

### 2. Product Gallery

```typescript
variant: 'card'
slidesToShow: 3
responsive: {
  mobile: { slidesToShow: 1 },
  tablet: { slidesToShow: 2 },
  desktop: { slidesToShow: 3 }
}
```

### 3. Testimonials

```typescript
variant: "testimonial";
autoplay: true;
autoplayDelay: 5000;
showDots: true;
transition: "fade";
```

### 4. Portfolio Showcase

```typescript
variant: "image";
showThumbnails: true;
showArrows: true;
infinite: true;
```

## Technical Implementation

### Editor Integration

- Full CraftJS support with drag & drop
- Real-time property updates
- Floating toolbar integration
- Comprehensive properties panel

### Runtime Performance

- Optimized DOM manipulation
- Smooth CSS transitions
- Responsive breakpoint handling
- Memory-efficient slide management

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch event support (coming soon)
- Progressive enhancement approach

## Future Enhancements

### Planned Features

- **Touch/Swipe Navigation**: Mobile gesture support
- **Keyboard Navigation**: Arrow key support
- **Video Support**: Auto-pause video slides
- **Lazy Loading**: Performance optimization for large galleries
- **Animation Presets**: Pre-configured animation combinations
- **Advanced Layouts**: Masonry and staggered layouts

## Troubleshooting

### Common Issues

1. **Images not loading**: Check image URLs and CORS settings
2. **Responsive not working**: Verify breakpoint configuration
3. **Autoplay not starting**: Check autoplay settings and browser policies
4. **Performance issues**: Optimize image sizes and reduce slide count

### Support

For technical support and feature requests, please refer to the Arete Builder documentation or contact the development team.
