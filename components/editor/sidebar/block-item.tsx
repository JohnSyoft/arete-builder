import React from "react";
import { useEditor } from "@craftjs/core";

export interface BlockItemProps {
  component: React.ComponentType;
  name: string;
  description?: string;
  image?: string;
}

export const BlockItem = ({
  component: Component,
  name,
  description,
  image,
}: BlockItemProps) => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <div
      ref={(ref) => {
        if (ref) {
          console.log(
            "BlockItem creating element for:",
            name,
            "Component:",
            Component
          );
          try {
            create(ref, React.createElement(Component));
          } catch (error) {
            console.error("Error creating BlockItem component:", error);
          }
        }
      }}
      className=" bg-gray-50 rounded-lg border border-gray-200 cursor-grab hover:bg-gray-100 transition-colors"
      draggable={false}
    >
      {image && (
        <div className="mb-2 w-full h-40 bg-gray-100 rounded overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}
      <h4 className="p-3 font-medium text-sm">{name}</h4>
      {description && (
        <p className="p-3 text-xs text-gray-600 mt-1">{description}</p>
      )}
    </div>
  );
};

// Simple block item for narrow sidebar
export const SimpleBlockItem = ({
  component: Component,
  name,
}: {
  component: any;
  name: string;
}) => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <div
      ref={(ref) => {
        if (ref) {
          console.log("Creating element for:", name, "Component:", Component);
          try {
            create(ref, React.createElement(Component));
          } catch (error) {
            console.error("Error creating component:", error);
          }
        }
      }}
      className="p-2 bg-gray-50 rounded border border-gray-200 cursor-grab hover:bg-gray-100 transition-colors"
      draggable={false}
    >
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
};
