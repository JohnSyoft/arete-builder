import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

export interface RadioButtonProps {
  name?: string;
  options?: { value: string; label: string }[];
  selectedValue?: string;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
  className?: string;
}

export function RadioButton({
  name = "radio-group",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  selectedValue = "",
  disabled = false,
  direction = "vertical",
  className = "",
}: RadioButtonProps) {
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
      "radiobutton",
      {
        name,
        options,
        selectedValue,
        disabled,
        direction,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: RadioButtonProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${className} ${
        selected ? "ring-2 ring-blue-500 rounded" : ""
      } ${hovered ? "ring-1 ring-blue-300 rounded" : ""}`}
    >
      <div
        className={`space-${direction === "horizontal" ? "x" : "y"}-3 ${
          direction === "horizontal" ? "flex" : "block"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              disabled={disabled}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              onChange={() => {
                setProp((props: RadioButtonProps) => {
                  props.selectedValue = option.value;
                });
              }}
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>

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
        <div className="absolute -top-6 left-0 bg-orange-500 text-white text-xs px-2 py-1 rounded z-10">
          RadioButton
        </div>
      )}
    </div>
  );
}

RadioButton.craft = {
  displayName: "RadioButton",
  props: {
    name: "radio-group",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    selectedValue: "",
    disabled: false,
    direction: "vertical",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
