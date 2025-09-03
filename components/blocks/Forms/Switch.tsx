import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Switch as ShadcnSwitch } from "@/components/ui/switch";

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Switch({
  checked = false,
  disabled = false,
  size = "md",
  className = "",
}: SwitchProps) {
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
      "switch",
      {
        checked,
        disabled,
        size,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: SwitchProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "h-4 w-7";
      case "lg":
        return "h-7 w-12";
      default:
        return "h-5 w-9";
    }
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative inline-flex items-center ${className} ${
        selected ? "ring-2 ring-blue-500 rounded" : ""
      } ${hovered ? "ring-1 ring-blue-300 rounded" : ""}`}
    >
      <ShadcnSwitch
        checked={checked}
        disabled={disabled}
        className={getSizeClass()}
      />

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
          <FloatingToolbar
            elementType="checkbox"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
          Switch
        </div>
      )}
    </div>
  );
}

Switch.craft = {
  displayName: "Switch",
  props: {
    checked: false,
    disabled: false,
    size: "md",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
