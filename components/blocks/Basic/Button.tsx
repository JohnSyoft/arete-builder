import { Button as UIButton } from "@/components/ui/button";
import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface ButtonProps {
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
  target?: "_self" | "_blank";
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}

export function Button({
  text = "Click me",
  variant = "default",
  size = "default",
  href = "#",
  target = "_self",
  backgroundColor = "",
  textColor = "",
  borderRadius = "",
  margin = "my-2",
  padding = "",
  width = "w-auto",
  height = "h-auto",
}: ButtonProps) {
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
      "button",
      {
        text,
        variant,
        size,
        href,
        target,
        backgroundColor,
        textColor,
        borderRadius,
        margin,
        padding,
        width,
        height,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: ButtonProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const handleHrefClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleShowProperties();
  };

  const customStyles = {
    backgroundColor: backgroundColor || undefined,
    color: textColor || undefined,
    borderRadius: borderRadius || undefined,
    padding: padding || undefined,
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        margin: margin,
      }}
      className={`
        relative 
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
      `}
    >
      <UIButton
        variant={variant}
        size={size}
        asChild
        style={customStyles}
        className={`w-full h-full ${borderRadius}`}
      >
        <a href={href} target={target}>
          <span
            contentEditable
            suppressContentEditableWarning
            onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
              setProp(
                (props: ButtonProps) =>
                  (props.text = e.currentTarget.textContent || "")
              )
            }
            style={{ outline: "none", cursor: "text" }}
            className="rounded"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </a>
      </UIButton>

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="button"
            onEdit={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => handleHrefClick({} as React.MouseEvent)}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <>
          <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
            Button
          </div>
          <button
            onClick={handleHrefClick}
            className="absolute -bottom-6 left-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-70"
          >
            Edit Link
          </button>
        </>
      )}
    </Resizer>
  );
}

Button.craft = {
  displayName: "Button",
  props: {
    text: "Click me",
    variant: "default",
    size: "default",
    href: "#",
    target: "_self",
    backgroundColor: "",
    textColor: "",
    borderRadius: "",
    margin: "my-2",
    padding: "",
    width: "w-auto",
    height: "h-auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};
