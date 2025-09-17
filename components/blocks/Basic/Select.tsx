import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  name?: string;
  placeholder?: string;
  options?: SelectOption[];
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "underlined";
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  placeholderColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
  borderRadius?: string;
  fontSize?: string;
  height?: string;
}

export function Select({
  name = "select",
  placeholder = "Choose an option",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  required = false,
  disabled = false,
  multiple = false,
  size = "md",
  variant = "default",
  backgroundColor = "bg-white",
  borderColor = "border-gray-300",
  textColor = "text-gray-900",
  placeholderColor = "text-gray-500",
  margin = "my-2",
  padding = "",
  width = "w-full",
  borderRadius = "rounded-md",
  fontSize = "",
  height = "auto",
}: SelectProps) {
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
      "select",
      {
        name,
        placeholder,
        options,
        required,
        disabled,
        multiple,
        size,
        variant,
        backgroundColor,
        borderColor,
        textColor,
        placeholderColor,
        margin,
        padding,
        width,
        borderRadius,
        fontSize,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: SelectProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getSizeClass = (selectSize: string) => {
    switch (selectSize) {
      case "sm":
        return "py-1 px-2 text-sm";
      case "md":
        return "py-2 px-3 text-base";
      case "lg":
        return "py-3 px-4 text-lg";
      default:
        return "py-2 px-3 text-base";
    }
  };

  const getVariantClass = (selectVariant: string) => {
    switch (selectVariant) {
      case "default":
        return `border ${borderColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`;
      case "filled":
        return `${backgroundColor} border-0 focus:ring-2 focus:ring-blue-500`;
      case "underlined":
        return "border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-blue-500 bg-transparent";
      default:
        return `border ${borderColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`;
    }
  };

  const selectClasses = `
    ${width}
    ${margin}
    ${padding}
    ${getSizeClass(size)}
    ${getVariantClass(variant)}
    ${backgroundColor}
    ${textColor}
    ${borderRadius}
    ${fontSize}
    transition-colors duration-200
    focus:outline-none
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
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
      >
        <select
          name={name}
          required={required}
          disabled={disabled}
          multiple={multiple}
          className={selectClasses}
          defaultValue=""
        >
          <option value="" disabled className={placeholderColor}>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
          Select {multiple ? "(Multiple)" : ""}
        </div>
      )}
    </Resizer>
  );
}

Select.craft = {
  displayName: "Select",
  props: {
    name: "select",
    placeholder: "Choose an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    required: false,
    disabled: false,
    multiple: false,
    size: "md",
    variant: "default",
    backgroundColor: "bg-white",
    borderColor: "border-gray-300",
    textColor: "text-gray-900",
    placeholderColor: "text-gray-500",
    margin: "my-2",
    padding: "",
    width: "w-full",
    borderRadius: "rounded-md",
    fontSize: "",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
