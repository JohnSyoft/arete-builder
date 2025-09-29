import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { Resizer } from "../Resizer";

interface ImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  animation?: string;
  animationDirection?: string;
  animationDuration?: string;
  animationIteration?: string;
  animationDelay?: string;
  spinDirection?: string;
  // Advanced styling
  className?: string;
  filter?: string;
  filterBrightness?: string;
  filterContrast?: string;
  filterSaturate?: string;
  filterHueRotate?: string;
  filterBlur?: string;
  filterGrayscale?: string;
  filterSepia?: string;
  filterInvert?: string;
  filterOpacity?: string;
  // Overlay effects
  overlay?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  overlayBlendMode?: string;
  // Hover effects
  hoverFilter?: string;
  hoverTransform?: string;
  hoverScale?: string;
  hoverRotate?: string;
  hoverBrightness?: string;
  hoverContrast?: string;
  hoverSaturate?: string;
  hoverBlur?: string;
  hoverGrayscale?: string;
  hoverSepia?: string;
  hoverInvert?: string;
  hoverOpacity?: string;
  hoverOverlay?: string;
  hoverOverlayColor?: string;
  hoverOverlayOpacity?: string;
  hoverOverlayBlendMode?: string;
  transitionDuration?: string;
  // Responsive images
  responsive?: boolean;
  sizes?: string;
  srcSet?: string;
  // Lazy loading
  lazy?: boolean;
  loading?: "lazy" | "eager" | "auto";
  // Accessibility
  ariaLabel?: string;
  role?: string;
  tabIndex?: string;
  // Layout
  display?: string;
  position?: string;
  zIndex?: string;
  // Visual effects
  opacity?: string;
  visibility?: string;
  clipPath?: string;
  mask?: string;
  // Box shadow
  boxShadow?: string;
  hoverBoxShadow?: string;
  // Border
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  // Transform
  transform?: string;
  transformOrigin?: string;
  // Transition
  transition?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
  // Interaction
  cursor?: string;
  pointerEvents?: string;
  userSelect?: string;
  // CMS props
  cmsField?: string;
  cmsFieldType?: string;
  cmsFieldId?: string;
  cmsCollectionId?: string;
  cmsFieldLabel?: string;
  // Non-editable prop
  nonEditable?: boolean;
}

export function Image({
  src = "/placeholder.svg?height=200&width=300",
  alt = "Image",
  width = "300px",
  height = "200px",
  objectFit = "object-cover",
  borderRadius = "rounded-lg",
  margin = "my-2",
  padding = "p-0",
  animation = "",
  animationDirection = "normal",
  animationDuration = "150ms",
  animationIteration = "infinite",
  animationDelay = "0ms",
  spinDirection = "clockwise",
  // Advanced styling
  className = "",
  filter = "",
  filterBrightness = "",
  filterContrast = "",
  filterSaturate = "",
  filterHueRotate = "",
  filterBlur = "",
  filterGrayscale = "",
  filterSepia = "",
  filterInvert = "",
  filterOpacity = "",
  // Overlay effects
  overlay = "",
  overlayColor = "",
  overlayOpacity = "",
  overlayBlendMode = "",
  // Hover effects
  hoverFilter = "",
  hoverTransform = "",
  hoverScale = "",
  hoverRotate = "",
  hoverBrightness = "",
  hoverContrast = "",
  hoverSaturate = "",
  hoverBlur = "",
  hoverGrayscale = "",
  hoverSepia = "",
  hoverInvert = "",
  hoverOpacity = "",
  hoverOverlay = "",
  hoverOverlayColor = "",
  hoverOverlayOpacity = "",
  hoverOverlayBlendMode = "",
  transitionDuration = "300ms",
  // Responsive images
  responsive = false,
  sizes = "",
  srcSet = "",
  // Lazy loading
  lazy = true,
  loading = "lazy",
  // Accessibility
  ariaLabel = "",
  role = "",
  tabIndex = "",
  // Layout
  display = "",
  position = "",
  zIndex = "",
  // Visual effects
  opacity = "",
  visibility = "",
  clipPath = "",
  mask = "",
  // Box shadow
  boxShadow = "",
  hoverBoxShadow = "",
  // Border
  border = "",
  borderWidth = "",
  borderStyle = "",
  borderColor = "",
  borderTop = "",
  borderRight = "",
  borderBottom = "",
  borderLeft = "",
  // Transform
  transform = "",
  transformOrigin = "",
  // Transition
  transition = "",
  transitionProperty = "",
  transitionTimingFunction = "",
  // Interaction
  cursor = "",
  pointerEvents = "",
  userSelect = "",
  // CMS props
  cmsField,
  cmsFieldType,
  cmsFieldId,
  cmsCollectionId,
  cmsFieldLabel,
  // Non-editable prop
  nonEditable = false,
}: ImageProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const { actions } = useEditor();
  const { openPanel } = usePropertiesPanelStore();
  const { currentItemData } = useCMSContextStore();

  // If this is a CMS field and we have item data, use the CMS data
  const displaySrc = React.useMemo(() => {
    if (cmsField && currentItemData?.data?.[cmsField]) {
      const value = currentItemData.data[cmsField];

      // Handle different field types
      if (cmsFieldType === "image" && value) {
        return value;
      }
      if (cmsFieldType === "gallery" && Array.isArray(value) && value.length > 0) {
        return value[0]; // Use first image from gallery
      }
    }
    return src;
  }, [cmsField, currentItemData, src, cmsFieldType]);

  const displayAlt = React.useMemo(() => {
    if (cmsField && cmsFieldLabel) {
      return `${cmsFieldLabel} image`;
    }
    return alt;
  }, [cmsField, cmsFieldLabel, alt]);

  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(cmsField && cmsFieldId && cmsCollectionId);

  const handleShowProperties = () => {
    openPanel(
      "image",
      {
        src,
        alt,
        width,
        height,
        objectFit,
        borderRadius,
        margin,
        padding,
        animation,
        animationDirection,
        animationDuration,
        animationIteration,
        animationDelay,
        spinDirection,
        // Advanced styling
        className,
        filter,
        filterBrightness,
        filterContrast,
        filterSaturate,
        filterHueRotate,
        filterBlur,
        filterGrayscale,
        filterSepia,
        filterInvert,
        filterOpacity,
        // Overlay effects
        overlay,
        overlayColor,
        overlayOpacity,
        overlayBlendMode,
        // Hover effects
        hoverFilter,
        hoverTransform,
        hoverScale,
        hoverRotate,
        hoverBrightness,
        hoverContrast,
        hoverSaturate,
        hoverBlur,
        hoverGrayscale,
        hoverSepia,
        hoverInvert,
        hoverOpacity,
        hoverOverlay,
        hoverOverlayColor,
        hoverOverlayOpacity,
        hoverOverlayBlendMode,
        transitionDuration,
        // Responsive images
        responsive,
        sizes,
        srcSet,
        // Lazy loading
        lazy,
        loading,
        // Accessibility
        ariaLabel,
        role,
        tabIndex,
        // Layout
        display,
        position,
        zIndex,
        // Visual effects
        opacity,
        visibility,
        clipPath,
        mask,
        // Box shadow
        boxShadow,
        hoverBoxShadow,
        // Border
        border,
        borderWidth,
        borderStyle,
        borderColor,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        // Transform
        transform,
        transformOrigin,
        // Transition
        transition,
        transitionProperty,
        transitionTimingFunction,
        // Interaction
        cursor,
        pointerEvents,
        userSelect,
        // CMS props
        cmsField,
        cmsFieldType,
        cmsFieldId,
        cmsCollectionId,
        cmsFieldLabel,
        // CMS context data for the properties panel
        _cmsContext: {
          currentCollectionId: currentItemData?.collection || null,
          currentItemData,
          projectId: window.location.pathname.split('/')[2], // Extract projectId from URL
        }
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          if (key !== '_cmsContext') { // Don't update the context data
            setProp((props: ImageProps) => {
              (props as any)[key] = newProps[key];
            });
          }
        });
      }
    );
  };

  const handleImageClick = () => {
    handleShowProperties();
  };

  const handleAltClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleShowProperties();
  };

  // Build filter styles
  const filterStyles = React.useMemo(() => {
    const filters = [];
    if (filterBrightness) filters.push(`brightness(${filterBrightness})`);
    if (filterContrast) filters.push(`contrast(${filterContrast})`);
    if (filterSaturate) filters.push(`saturate(${filterSaturate})`);
    if (filterHueRotate) filters.push(`hue-rotate(${filterHueRotate})`);
    if (filterBlur) filters.push(`blur(${filterBlur})`);
    if (filterGrayscale) filters.push(`grayscale(${filterGrayscale})`);
    if (filterSepia) filters.push(`sepia(${filterSepia})`);
    if (filterInvert) filters.push(`invert(${filterInvert})`);
    if (filterOpacity) filters.push(`opacity(${filterOpacity})`);
    if (filter) filters.push(filter);
    return filters.length > 0 ? filters.join(' ') : '';
  }, [filter, filterBrightness, filterContrast, filterSaturate, filterHueRotate, filterBlur, filterGrayscale, filterSepia, filterInvert, filterOpacity]);

  // Build hover filter styles
  const hoverFilterStyles = React.useMemo(() => {
    const filters = [];
    if (hoverBrightness) filters.push(`brightness(${hoverBrightness})`);
    if (hoverContrast) filters.push(`contrast(${hoverContrast})`);
    if (hoverSaturate) filters.push(`saturate(${hoverSaturate})`);
    if (hoverBlur) filters.push(`blur(${hoverBlur})`);
    if (hoverGrayscale) filters.push(`grayscale(${hoverGrayscale})`);
    if (hoverSepia) filters.push(`sepia(${hoverSepia})`);
    if (hoverInvert) filters.push(`invert(${hoverInvert})`);
    if (hoverOpacity) filters.push(`opacity(${hoverOpacity})`);
    if (hoverFilter) filters.push(hoverFilter);
    return filters.length > 0 ? filters.join(' ') : '';
  }, [hoverFilter, hoverBrightness, hoverContrast, hoverSaturate, hoverBlur, hoverGrayscale, hoverSepia, hoverInvert, hoverOpacity]);

  // Build transform styles
  const transformStyles = React.useMemo(() => {
    const transforms = [];
    if (hoverScale) transforms.push(`scale(${hoverScale})`);
    if (hoverRotate) transforms.push(`rotate(${hoverRotate})`);
    if (hoverTransform) transforms.push(hoverTransform);
    if (transform) transforms.push(transform);
    return transforms.length > 0 ? transforms.join(' ') : '';
  }, [hoverScale, hoverRotate, hoverTransform, transform]);

  // Build border styles
  const borderStyles = React.useMemo(() => {
    const borders = [];
    if (borderWidth) borders.push(`border-width: ${borderWidth}`);
    if (borderStyle) borders.push(`border-style: ${borderStyle}`);
    if (borderColor) borders.push(`border-color: ${borderColor}`);
    if (borderTop) borders.push(`border-top: ${borderTop}`);
    if (borderRight) borders.push(`border-right: ${borderRight}`);
    if (borderBottom) borders.push(`border-bottom: ${borderBottom}`);
    if (borderLeft) borders.push(`border-left: ${borderLeft}`);
    if (border) borders.push(`border: ${border}`);
    return borders.length > 0 ? borders.join('; ') : '';
  }, [border, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft]);

  // Build transition styles
  const transitionStyles = React.useMemo(() => {
    const transitions = [];
    if (transitionDuration) transitions.push(`duration: ${transitionDuration}`);
    if (transitionProperty) transitions.push(`property: ${transitionProperty}`);
    if (transitionTimingFunction) transitions.push(`timing-function: ${transitionTimingFunction}`);
    if (transition) transitions.push(transition);
    return transitions.length > 0 ? transitions.join('; ') : '';
  }, [transitionDuration, transitionProperty, transitionTimingFunction, transition]);

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`
        relative 
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
        ${margin}
        ${display}
        ${position}
        ${zIndex}
        ${className}
      `}
    >
      <div className="relative w-full h-full">
        <img
          src={displaySrc}
          alt={displayAlt}
          sizes={responsive ? sizes : undefined}
          srcSet={responsive ? srcSet : undefined}
          loading={lazy ? loading : undefined}
          style={{
            width: "100%",
            height: "100%",
            ...(animation && {
              animation: `${animation} ${animationDuration} ${animationDelay} ${animationIteration} ${animationDirection}`,
              transform: spinDirection === "counter-clockwise" && animation?.includes("spin") ? "scaleX(-1)" : undefined,
            }),
            ...(filterStyles && { filter: filterStyles }),
            ...(opacity && { opacity }),
            ...(visibility && { visibility }),
            ...(clipPath && { clipPath }),
            ...(mask && { mask }),
            ...(boxShadow && { boxShadow }),
            ...(borderStyles && { [borderStyles.split(':')[0]]: borderStyles.split(':')[1] }),
            ...(transformOrigin && { transformOrigin }),
            ...(transitionStyles && { transition: transitionStyles }),
            ...(cursor && { cursor }),
            ...(pointerEvents && { pointerEvents }),
            ...(userSelect && { userSelect }),
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(role && { role }),
            ...(tabIndex && { tabIndex: parseInt(tabIndex) }),
          }}
          className={`
            ${objectFit} 
            ${borderRadius}
            ${padding}
            cursor-pointer
            transition-all
            ${transitionDuration ? `duration-${transitionDuration.replace('ms', '')}` : 'duration-300'}
            ${hoverFilterStyles ? 'hover:filter' : ''}
            ${hoverBoxShadow ? 'hover:shadow-lg' : ''}
            ${hoverOpacity ? 'hover:opacity-80' : ''}
            ${transformStyles ? 'hover:transform' : ''}
            ${className}
          `}
          onClick={handleImageClick}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "/placeholder.svg?height=200&width=300&text=Image+Not+Found";
          }}
        />

        {/* Overlay effects */}
        {(overlay || hoverOverlay) && (
          <div
            className={`
              absolute inset-0
              ${overlay ? `bg-${overlayColor || 'black'}` : ''}
              ${overlayOpacity ? `opacity-${overlayOpacity}` : 'opacity-50'}
              ${overlayBlendMode ? `mix-blend-${overlayBlendMode}` : ''}
              ${hoverOverlay ? `hover:bg-${hoverOverlayColor || 'black'}` : ''}
              ${hoverOverlayOpacity ? `hover:opacity-${hoverOverlayOpacity}` : ''}
              ${hoverOverlayBlendMode ? `hover:mix-blend-${hoverOverlayBlendMode}` : ''}
              transition-all
              ${transitionDuration ? `duration-${transitionDuration.replace('ms', '')}` : 'duration-300'}
            `}
            style={{
              ...(overlayColor && { backgroundColor: overlayColor }),
              ...(overlayOpacity && { opacity: parseFloat(overlayOpacity) }),
              ...(overlayBlendMode && { mixBlendMode: overlayBlendMode }),
            }}
          />
        )}
      </div>

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="image"
            onEdit={() => handleImageClick()}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {/* Alt text edit button */}
      {(selected || hovered) && (
        <>
          <div className={`absolute top-0 left-0 text-white text-xs px-2 py-1 rounded-br z-10 ${
            isCMSField ? "bg-green-500" : "bg-blue-500"
          }`}>
            {isCMSField ? `CMS Field: ${cmsFieldLabel || cmsField}` : "Image"}
            {isCMSField && <span className="ml-1 opacity-75">(read-only)</span>}
          </div>
          <button
            onClick={handleAltClick}
            className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-70"
          >
            Edit Alt
          </button>
        </>
      )}
    </Resizer>
  );
}

Image.craft = {
  displayName: "Image",
  props: {
    src: "/placeholder.svg?height=200&width=300",
    alt: "Image",
    width: "300px",
    height: "200px",
    objectFit: "object-cover",
    borderRadius: "rounded-lg",
    margin: "my-2",
    padding: "p-0",
    animation: "",
    animationDirection: "normal",
    animationDuration: "150ms",
    animationIteration: "infinite",
    animationDelay: "0ms",
    spinDirection: "clockwise",
    // Advanced styling
    className: "",
    filter: "",
    filterBrightness: "",
    filterContrast: "",
    filterSaturate: "",
    filterHueRotate: "",
    filterBlur: "",
    filterGrayscale: "",
    filterSepia: "",
    filterInvert: "",
    filterOpacity: "",
    // Overlay effects
    overlay: "",
    overlayColor: "",
    overlayOpacity: "",
    overlayBlendMode: "",
    // Hover effects
    hoverFilter: "",
    hoverTransform: "",
    hoverScale: "",
    hoverRotate: "",
    hoverBrightness: "",
    hoverContrast: "",
    hoverSaturate: "",
    hoverBlur: "",
    hoverGrayscale: "",
    hoverSepia: "",
    hoverInvert: "",
    hoverOpacity: "",
    hoverOverlay: "",
    hoverOverlayColor: "",
    hoverOverlayOpacity: "",
    hoverOverlayBlendMode: "",
    transitionDuration: "300ms",
    // Responsive images
    responsive: false,
    sizes: "",
    srcSet: "",
    // Lazy loading
    lazy: true,
    loading: "lazy",
    // Accessibility
    ariaLabel: "",
    role: "",
    tabIndex: "",
    // Layout
    display: "",
    position: "",
    zIndex: "",
    // Visual effects
    opacity: "",
    visibility: "",
    clipPath: "",
    mask: "",
    // Box shadow
    boxShadow: "",
    hoverBoxShadow: "",
    // Border
    border: "",
    borderWidth: "",
    borderStyle: "",
    borderColor: "",
    borderTop: "",
    borderRight: "",
    borderBottom: "",
    borderLeft: "",
    // Transform
    transform: "",
    transformOrigin: "",
    // Transition
    transition: "",
    transitionProperty: "",
    transitionTimingFunction: "",
    // Interaction
    cursor: "",
    pointerEvents: "",
    userSelect: "",
    // CMS props
    cmsField: "",
    cmsFieldType: "",
    cmsFieldId: "",
    cmsCollectionId: "",
    cmsFieldLabel: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
