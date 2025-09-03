import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Star } from "lucide-react";

export interface RatingBarProps {
  rating?: number;
  maxRating?: number;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export function RatingBar({
  rating = 0,
  maxRating = 5,
  disabled = false,
  size = "md",
  color = "#fbbf24",
  className = "",
}: RatingBarProps) {
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
      "ratingbar",
      {
        rating,
        maxRating,
        disabled,
        size,
        color,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: RatingBarProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-8 h-8";
      default:
        return "w-6 h-6";
    }
  };

  const handleStarClick = (starIndex: number) => {
    if (!disabled) {
      setProp((props: RatingBarProps) => {
        props.rating = starIndex + 1;
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
      className={`relative inline-flex items-center space-x-1 ${className} ${
        selected ? "ring-2 ring-blue-500 rounded" : ""
      } ${hovered ? "ring-1 ring-blue-300 rounded" : ""}`}
    >
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={`${getSizeClass()} cursor-pointer transition-colors ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          style={{ color: index < rating ? color : undefined }}
          onClick={() => handleStarClick(index)}
        />
      ))}

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
        <div className="absolute -top-6 left-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded z-10">
          RatingBar
        </div>
      )}
    </div>
  );
}

RatingBar.craft = {
  displayName: "RatingBar",
  props: {
    rating: 0,
    maxRating: 5,
    disabled: false,
    size: "md",
    color: "#fbbf24",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
