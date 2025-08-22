"use client"

import React from 'react'
import { Edit, Sparkles, Settings, Move, Link, HelpCircle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FloatingToolbarProps {
  elementType: 'text' | 'button' | 'image' | 'container' | 'columns' | 'link' | 'video' | 'map'
  onEdit?: () => void
  onGenerateAI?: () => void
  onSettings: () => void
  onMove: () => void
  onLink: () => void
  onDelete?: () => void
  onHelp?: () => void
  position: { x: number; y: number }
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
  position
}: FloatingToolbarProps) {
  const getToolbarButtons = () => {
    const baseButtons = [
      {
        icon: Settings,
        label: "Settings",
        onClick: onSettings,
        show: true,
        variant: undefined as "ghost" | "destructive" | undefined
      },
      {
        icon: Move,
        label: "Move",
        onClick: onMove,
        show: true,
        variant: undefined as "ghost" | "destructive" | undefined
      },
      {
        icon: Link,
        label: "Link",
        onClick: onLink,
        show: true,
        variant: undefined as "ghost" | "destructive" | undefined
      },
      {
        icon: Trash2,
        label: "Delete",
        onClick: onDelete,
        show: !!onDelete,
        variant: "destructive" as "ghost" | "destructive" | undefined
      }
    ]

    const typeSpecificButtons = {
      text: [
        {
          icon: Edit,
          label: "Edit Text",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        },
        {
          icon: Sparkles,
          label: "Generate AI",
          onClick: onGenerateAI,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ],
      button: [
        {
          icon: Edit,
          label: "Edit",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ],
      image: [
        {
          icon: Edit,
          label: "Edit",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ],
      container: [],
      columns: [
        {
          icon: Edit,
          label: "Edit Columns",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ],
      link: [
        {
          icon: Edit,
          label: "Edit Link",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ],
      video: [
        {
          icon: Edit,
          label: "Edit Video",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ],
      map: [
        {
          icon: Edit,
          label: "Edit Map",
          onClick: onEdit,
          show: true,
          variant: undefined as "ghost" | "destructive" | undefined
        }
      ]
    }

    return [...(typeSpecificButtons[elementType] || []), ...baseButtons].filter(btn => btn.show)
  }

  const buttons = getToolbarButtons()

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
          className={`h-8 w-8 p-0 ${
            button.variant === "destructive" 
              ? "hover:bg-gray-100 text-red-600 hover:text-red-700" 
              : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
          }`}
          onClick={button.onClick}
          title={button.label}
        >
          <button.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  )
}
