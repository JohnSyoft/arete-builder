import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

interface DividerProps {
  style?: "solid" | "dashed" | "dotted";
  thickness?: string;
  color?: string;
  width?: string;
  height?: string;
  margin?: string;
}

export function Divider({
  style = "solid",
  thickness = "border-t",
  color = "border-gray-300",
  width = "w-full",
  height = "auto",
  margin = "my-4",
}: DividerProps) {
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

  const handleShowProperties = () => {
    openPanel(
      "divider",
      {
        style,
        thickness,
        color,
        width,
        margin,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: DividerProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const handleStyleChange = () => {
    handleShowProperties();
  };

  const borderStyle = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  }[style];

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`
        relative 
        ${width} 
        ${margin}
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
      `}
    >
      <hr
        className={`
          ${thickness} 
          ${color} 
          ${borderStyle}
          cursor-pointer
          hover:border-gray-400
          transition-colors
        `}
        onClick={handleStyleChange}
      />

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="container"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Divider
        </div>
      )}
    </div>
  );
}

Divider.craft = {
  displayName: "Divider",
  props: {
    style: "solid",
    thickness: "border-t",
    color: "border-gray-300",
    width: "w-full",
    margin: "my-4",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
