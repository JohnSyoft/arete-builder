import React from "react"

interface ImageProps {
  src?: string
  alt?: string
  width?: string
  height?: string
  objectFit?: string
  borderRadius?: string
  margin?: string
  padding?: string
  // CMS props
  cmsField?: string
  cmsFieldType?: string
  cmsFieldId?: string
  cmsCollectionId?: string
  cmsFieldLabel?: string
  // Non-editable prop
  nonEditable?: boolean
}

export function ImageRuntime({
  src = "/placeholder.svg?height=200&width=300",
  alt = "Image",
  width = "300px",
  height = "200px",
  objectFit = "object-cover",
  borderRadius = "rounded-lg",
  margin = "my-2",
  padding = "p-0",
  cmsField,
  cmsFieldType,
  cmsFieldId,
  cmsCollectionId,
  cmsFieldLabel,
  nonEditable = false,
}: ImageProps) {
  // Smart styling functions to handle both Tailwind classes and raw CSS values
  const getCustomStyles = (value: string, property: string): React.CSSProperties => {
    if (!value) return {};
    
    // Check if it's a Tailwind class (starts with a letter and contains hyphens or brackets)
    const isTailwindClass = /^[a-zA-Z][a-zA-Z0-9-\[\]]*$/.test(value) && 
      (value.includes('-') || value.includes('[') || value.includes(']'));
    
    if (isTailwindClass) {
      return {}; // Return empty object for Tailwind classes (handled in className)
    }
    
    // Handle raw CSS values
    switch (property) {
      case 'width':
        return { width: value };
      case 'height':
        return { height: value };
      case 'objectFit':
        return { objectFit: value as React.CSSProperties['objectFit'] };
      case 'borderRadius':
        return { borderRadius: value };
      case 'margin':
        return { margin: value };
      case 'padding':
        return { padding: value };
      default:
        return {};
    }
  };

  const getCustomClasses = (value: string, property: string): string => {
    if (!value) return '';
    
    // Check if it's a Tailwind class
    const isTailwindClass = /^[a-zA-Z][a-zA-Z0-9-\[\]]*$/.test(value) && 
      (value.includes('-') || value.includes('[') || value.includes(']'));
    
    if (isTailwindClass) {
      return value;
    }
    
    // Return empty string for raw CSS values (handled in style)
    return '';
  };

  // Get display source (could be from CMS or regular src)
  const displaySrc = React.useMemo(() => {
    // For now, just return the src prop
    // In a real implementation, you might want to fetch CMS data here
    return src;
  }, [src]);

  // Get display alt text
  const displayAlt = React.useMemo(() => {
    if (cmsField && cmsFieldLabel) {
      return `${cmsFieldLabel} image`;
    }
    return alt;
  }, [cmsField, cmsFieldLabel, alt]);

  // Check if this is a CMS field
  const isCMSField = !!(cmsField && cmsFieldId && cmsCollectionId);

  // Get object fit class
  const getObjectFitClass = (fit: string) => {
    if (fit.startsWith('object-')) {
      return fit; // Already has object- prefix
    }
    return `object-${fit}`;
  };

  const containerStyles = {
    ...getCustomStyles(width, 'width'),
    ...getCustomStyles(height, 'height'),
    ...getCustomStyles(margin, 'margin'),
    ...getCustomStyles(padding, 'padding'),
  };

  const containerClasses = [
    getCustomClasses(width, 'width'),
    getCustomClasses(height, 'height'),
    getCustomClasses(margin, 'margin'),
    getCustomClasses(padding, 'padding'),
  ].filter(Boolean).join(' ');

  const imageStyles = {
    ...getCustomStyles(objectFit, 'objectFit'),
    ...getCustomStyles(borderRadius, 'borderRadius'),
  };

  const imageClasses = [
    getCustomClasses(objectFit, 'objectFit'),
    getCustomClasses(borderRadius, 'borderRadius'),
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={`relative ${containerClasses}`}
      style={containerStyles}
    >
      <img
        src={displaySrc}
        alt={displayAlt}
        className={`w-full h-full ${getObjectFitClass(objectFit)} ${imageClasses}`}
        style={{
          ...imageStyles,
          width: "100%",
          height: "100%",
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/placeholder.svg?height=200&width=300&text=Image+Not+Found";
        }}
      />
      
      {/* CMS field indicator */}
      {isCMSField && (
        <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded-br z-10">
          {cmsFieldLabel || cmsField}
        </div>
      )}
    </div>
  )
}
