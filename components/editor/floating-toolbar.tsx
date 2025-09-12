"use client";

import React from "react";
import { Edit, Sparkles, Settings, Move, Link, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolbarButton {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  show: boolean;
  className?: string;
}

interface FloatingToolbarProps {
  elementType:
    | "text"
    | "formattedText"
    | "button"
    | "image"
    | "container"
    | "columns"
    | "link"
    | "video"
    | "map"
    | "row"
    | "card"
    | "heading"
    | "select"
    | "checkbox"
    | "textarea"
    | "linebreak"
    | "icon"
    | "grid"
    | "flex"
    | "navigation"
    | "list"
    | "alert"
    | "spacer"
    | "divider"
    | "badge"
    | "input"
    | "section"
    | "headerWrapper";
  onEdit?: () => void;
  onGenerateAI?: () => void;
  onSettings: () => void;
  onMove: () => void;
  onLink: () => void;
  onDelete: () => void;
  onHelp?: () => void;
  position: { x: number; y: number };
}

export function FloatingToolbar({
  elementType,
  onEdit,
  onGenerateAI,
  onSettings,
  onMove,
  onLink,
  onDelete,
  onHelp,
  position,
}: FloatingToolbarProps) {
  const getToolbarButtons = (): ToolbarButton[] => {
    const baseButtons: ToolbarButton[] = [
      {
        icon: Settings,
        label: "Settings",
        onClick: onSettings,
        show: true,
      },
      {
        icon: Move,
        label: "Move",
        onClick: onMove,
        show: true,
      },
      {
        icon: Link,
        label: "Link",
        onClick: onLink,
        show: true,
      },
      {
        icon: Trash2,
        label: "Delete",
        onClick: onDelete,
        show: true,
        className: "hover:bg-red-100 hover:text-red-600",
      },
    ];

    const typeSpecificButtons: Record<string, ToolbarButton[]> = {
      text: [
        {
          icon: Edit,
          label: "Edit Text",
          onClick: onEdit,
          show: true,
        },
        {
          icon: Sparkles,
          label: "Generate AI",
          onClick: onGenerateAI,
          show: true,
        },
      ],
      button: [
        {
          icon: Edit,
          label: "Edit",
          onClick: onEdit,
          show: true,
        },
      ],
      image: [
        {
          icon: Edit,
          label: "Edit",
          onClick: onEdit,
          show: true,
        },
      ],
      container: [],
      columns: [
        {
          icon: Edit,
          label: "Edit Columns",
          onClick: onEdit,
          show: true,
        },
      ],
      link: [
        {
          icon: Edit,
          label: "Edit Link",
          onClick: onEdit,
          show: true,
        },
      ],
      video: [
        {
          icon: Edit,
          label: "Edit Video",
          onClick: onEdit,
          show: true,
        },
      ],
      map: [
        {
          icon: Edit,
          label: "Edit Map",
          onClick: onEdit,
          show: true,
        },
      ],
      grid: [
        {
          icon: Edit,
          label: "Edit Grid",
          onClick: onEdit,
          show: true,
        },
      ],
      flex: [
        {
          icon: Edit,
          label: "Edit Flex",
          onClick: onEdit,
          show: true,
        },
      ],
      card: [
        {
          icon: Edit,
          label: "Edit Card",
          onClick: onEdit,
          show: true,
        },
      ],
    };

    return [...(typeSpecificButtons[elementType] || []), ...baseButtons].filter(
      (btn) => btn.show
    );
  };

  const buttons = getToolbarButtons();

  return (
    <div
      className="absolute z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-1 flex gap-1"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 hover:bg-gray-100 text-gray-700 hover:text-gray-900 ${
            button.className || ""
          }`}
          onClick={button.onClick}
          title={button.label}
        >
          <button.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}
