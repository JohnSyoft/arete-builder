import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface LineBreakProps {
  height?: string;
  margin?: string;
  width?: string;
  clear?: "none" | "left" | "right" | "both";
  lineHeight?: string;
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
  opacity?: number;
  visibility?: "visible" | "hidden" | "collapse";
  display?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  zIndex?: number;
  className?: string;
  style?: string;
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
}

export function LineBreak({
  height = "h-4", // Smaller default height for line breaks
  margin = "my-1",
  width = "w-full",
  clear = "none",
  lineHeight = "",
  padding = "",
  backgroundColor = "",
  borderColor = "",
  borderWidth = "",
  borderStyle = "",
  borderRadius = "",
  opacity = 1,
  visibility = "visible",
  display = "",
  position = "static",
  zIndex = 0,
  className = "",
  style = "",
  ariaLabel = "",
  role = "",
  tabIndex = 0,
}: LineBreakProps) {
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

  const lineBreakProps = { 
    height, 
    margin, 
    width, 
    clear, 
    lineHeight, 
    padding, 
    backgroundColor, 
    borderColor, 
    borderWidth, 
    borderStyle, 
    borderRadius, 
    opacity, 
    visibility, 
    display, 
    position, 
    zIndex, 
    className, 
    style, 
    ariaLabel, 
    role, 
    tabIndex 
  };

  const updateProps = (newProps: Partial<LineBreakProps>) => {
    setProp((props: LineBreakProps) => {
      Object.assign(props, newProps);
    });
  };

  const handleOpenPanel = () => {
    openPanel("linebreak", lineBreakProps, id, updateProps);
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative ${margin} ${className}`}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className={`
          w-full 
          ${height} 
          ${clear}
          ${lineHeight}
          ${padding}
          ${backgroundColor}
          ${borderRadius}
          ${display}
          ${position}
          ${selected ? "ring-2 ring-blue-500" : ""} 
          ${hovered ? "ring-1 ring-blue-300" : ""}
          cursor-pointer
          transition-all
          hover:bg-gray-50
        `}
        style={{
          borderColor: borderColor || undefined,
          borderWidth: borderWidth || undefined,
          borderStyle: borderStyle || undefined,
          opacity: opacity !== 1 ? opacity : undefined,
          visibility: visibility !== "visible" ? visibility : undefined,
          zIndex: zIndex !== 0 ? zIndex : undefined,
          ...(style && JSON.parse(style)),
        }}
        onClick={handleOpenPanel}
        role={role}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      >
        {/* Floating toolbar shown on hover/selection */}
        {(selected || hovered) && (
          <div className="absolute -top-12 left-0 z-50">
            <FloatingToolbar
              elementType="container"
              onSettings={handleOpenPanel}
              onMove={() => {}}
              onLink={() => {}}
              onDelete={() => actions.delete(id)}
              position={{ x: 0, y: 0 }}
            />
          </div>
        )}

        {(selected || hovered) && (
          <>
            <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
              Line Break
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs text-gray-400 bg-white px-2 py-1 rounded shadow border">
                ↵ Line Break
              </div>
            </div>
          </>
        )}

        {/* Actual line break representation */}
        {!selected && !hovered && (
          <div className="w-full h-full flex items-center">
            <div className="w-full border-t border-dashed border-gray-200"></div>
          </div>
        )}
      </div>
    </Resizer>
  );
}

LineBreak.craft = {
  displayName: "Line Break",
  props: {
    height: "h-4",
    margin: "my-1",
    width: "w-full",
    clear: "none",
    lineHeight: "",
    padding: "",
    backgroundColor: "",
    borderColor: "",
    borderWidth: "",
    borderStyle: "",
    borderRadius: "",
    opacity: 1,
    visibility: "visible",
    display: "",
    position: "static",
    zIndex: 0,
    className: "",
    style: "",
    ariaLabel: "",
    role: "",
    tabIndex: 0,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
