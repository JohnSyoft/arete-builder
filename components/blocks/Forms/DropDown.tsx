import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface DropDownProps {
  placeholder?: string;
  options?: { value: string; label: string }[];
  value?: string;
  disabled?: boolean;
  width?: string;
  className?: string;
}

export function DropDown({
  placeholder = "Select an option...",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value = "",
  disabled = false,
  width = "100%",
  className = "",
}: DropDownProps) {
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
      "dropdown",
      {
        placeholder,
        options,
        value,
        disabled,
        width,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: DropDownProps) => {
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
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
      style={{ width }}
    >
      <Select value={value} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
          <FloatingToolbar
            elementType="select"
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
          DropDown
        </div>
      )}
    </div>
  );
}

DropDown.craft = {
  displayName: "DropDown",
  props: {
    placeholder: "Select an option...",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    value: "",
    disabled: false,
    width: "100%",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
