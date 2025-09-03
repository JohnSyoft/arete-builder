import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import {
  Badge as UIBadge,
  type BadgeProps as UIBadgeProps,
} from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Resizer } from "../Resizer";

interface BadgeProps extends Omit<UIBadgeProps, "children"> {
  text?: string;
  margin?: string;
  width?: string;
  height?: string;
}

export function Badge({
  text = "Badge",
  variant = "default",
  className = "",
  margin = "my-1",
  width = "auto",
  height = "auto",
  ...props
}: BadgeProps) {
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
    console.log("Badge handleShowProperties called", {
      text,
      variant,
      className,
      margin,
      width,
      height,
      id,
    });
    openPanel(
      "badge",
      {
        text,
        variant,
        className,
        margin,
        width,
        height,
      },
      id,
      (newProps) => {
        console.log("Badge props change callback called", newProps);
        Object.keys(newProps).forEach((key) => {
          setProp((props: BadgeProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      width={width}
      height={height}
      onResize={(newWidth, newHeight) => {
        setProp((props: BadgeProps) => {
          props.width = newWidth;
          props.height = newHeight;
        });
      }}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className={`relative group inline-block ${
          selected ? "ring-2 ring-blue-500" : ""
        } ${hovered ? "ring-1 ring-blue-300" : ""}`}
      >
        <UIBadge
          variant={variant}
          className={cn(
            margin === "none" ? "" : margin,
            "cursor-pointer min-w-[2rem] min-h-[1.5rem]",
            className
          )}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e: React.FocusEvent<HTMLDivElement>) =>
            setProp(
              (props: BadgeProps) =>
                (props.text = e.currentTarget.textContent || "")
            )
          }
          dangerouslySetInnerHTML={{ __html: text }}
          {...props}
        />

        {/* Floating toolbar shown on hover/selection */}
        {(selected || hovered) && (
          <div className="absolute -top-12 left-0 z-50">
            <FloatingToolbar
              elementType="text"
              onEdit={() => {}}
              onGenerateAI={() => {}}
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
            Badge
          </div>
        )}
      </div>
    </Resizer>
  );
}

Badge.craft = {
  displayName: "Badge",
  props: {
    text: "Badge",
    variant: "default",
    className: "",
    margin: "my-1",
    width: "auto",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
