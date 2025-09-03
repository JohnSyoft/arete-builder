import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Minus, Plus } from "lucide-react";

export interface CounterButtonProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
  className?: string;
}

export function CounterButton({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  size = "md",
  variant = "default",
  className = "",
}: CounterButtonProps) {
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
      "counterbutton",
      {
        value,
        min,
        max,
        step,
        disabled,
        size,
        variant,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: CounterButtonProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return { button: "w-6 h-6 text-xs", text: "text-sm px-2" };
      case "lg":
        return { button: "w-10 h-10 text-lg", text: "text-lg px-4" };
      default:
        return { button: "w-8 h-8 text-sm", text: "text-base px-3" };
    }
  };

  const getVariantClasses = () => {
    const base = "flex items-center justify-center rounded transition-colors";
    switch (variant) {
      case "outline":
        return `${base} border border-gray-300 text-gray-700 hover:bg-gray-50`;
      default:
        return `${base} bg-blue-500 text-white hover:bg-blue-600`;
    }
  };

  const sizeClasses = getSizeClasses();
  const variantClasses = getVariantClasses();

  const increment = () => {
    if (!disabled && value + step <= max) {
      setProp((props: CounterButtonProps) => {
        props.value = (props.value || 0) + step;
      });
    }
  };

  const decrement = () => {
    if (!disabled && value - step >= min) {
      setProp((props: CounterButtonProps) => {
        props.value = (props.value || 0) - step;
      });
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
      <button
        className={`${variantClasses} ${sizeClasses.button} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={decrement}
        disabled={disabled || value <= min}
      >
        <Minus className="w-3 h-3" />
      </button>

      <span className={`${sizeClasses.text} min-w-[3rem] text-center`}>
        {value}
      </span>

      <button
        className={`${variantClasses} ${sizeClasses.button} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={increment}
        disabled={disabled || value >= max}
      >
        <Plus className="w-3 h-3" />
      </button>

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
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
        <div className="absolute -top-6 left-0 bg-purple-500 text-white text-xs px-2 py-1 rounded z-10">
          Counter
        </div>
      )}
    </div>
  );
}

CounterButton.craft = {
  displayName: "CounterButton",
  props: {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    size: "md",
    variant: "default",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
