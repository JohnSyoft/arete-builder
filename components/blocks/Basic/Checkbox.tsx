import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface CheckboxProps {
  name?: string;
  label?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  labelPosition?: "left" | "right";
  margin?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
  height?: string;
}

export function Checkbox({
  name = "checkbox",
  label = "Checkbox Label",
  checked = false,
  required = false,
  disabled = false,
  size = "md",
  color = "text-blue-600",
  labelPosition = "right",
  margin = "my-2",
  padding = "",
  fontSize = "text-base",
  width = "auto",
  height = "auto",
}: CheckboxProps) {
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
      "checkbox",
      {
        name,
        label,
        checked,
        required,
        disabled,
        size,
        color,
        labelPosition,
        margin,
        padding,
        fontSize,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: CheckboxProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getSizeClass = (checkboxSize: string) => {
    switch (checkboxSize) {
      case "sm":
        return "h-3 w-3";
      case "md":
        return "h-4 w-4";
      case "lg":
        return "h-5 w-5";
      default:
        return "h-4 w-4";
    }
  };

  const checkboxClasses = `
    ${getSizeClass(size)}
    ${color}
    border-gray-300
    rounded
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-0
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `.trim();

  const labelClasses = `
    ${fontSize}
    text-gray-700
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    select-none
  `.trim();

  const containerClasses = `
    flex items-center
    ${labelPosition === "left" ? "flex-row-reverse" : "flex-row"}
    ${margin}
    ${padding}
    gap-2
  `.trim();

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${
        selected ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className={containerClasses}
      >
        <input
          type="checkbox"
          name={name}
          required={required}
          disabled={disabled}
          defaultChecked={checked}
          className={checkboxClasses}
        />
        <label className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="button"
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
          Checkbox
        </div>
      )}
    </Resizer>
  );
}

Checkbox.craft = {
  displayName: "Checkbox",
  props: {
    name: "checkbox",
    label: "Checkbox Label",
    checked: false,
    required: false,
    disabled: false,
    size: "md",
    color: "text-blue-600",
    labelPosition: "right",
    margin: "my-2",
    padding: "",
    fontSize: "text-base",
    width: "auto",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
