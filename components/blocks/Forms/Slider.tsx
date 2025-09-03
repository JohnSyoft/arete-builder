import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  className = "",
}: SliderProps) {
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
      "slider",
      {
        value,
        min,
        max,
        step,
        disabled,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: SliderProps) => {
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
      className={`relative p-4 ${className} ${
        selected ? "ring-2 ring-blue-500 rounded" : ""
      } ${hovered ? "ring-1 ring-blue-300 rounded" : ""}`}
    >
      <div className="w-full">
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => {
            setProp((props: SliderProps) => {
              props.value = parseInt(e.target.value);
            });
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{value}</span>
          <span>{max}</span>
        </div>
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
          <FloatingToolbar
            elementType="input"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-indigo-500 text-white text-xs px-2 py-1 rounded z-10">
          Slider
        </div>
      )}
    </div>
  );
}

Slider.craft = {
  displayName: "Slider",
  props: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
