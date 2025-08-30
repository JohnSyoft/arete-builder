"use client";

import { GripVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Field } from "@/hooks/useCollections";
import { cn } from "@/lib/utils";
import { fieldTypes } from "./";

interface FieldItemProps {
  field: Field;
  isSelected: boolean;
  onClick: () => void;
}

export function FieldItem({ field, isSelected, onClick }: FieldItemProps) {
  const fieldType = fieldTypes.find((ft) => ft.value === field.type);
  const Icon = fieldType?.icon;

  const getFieldTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      plainText: "bg-gray-100 text-gray-800",
      formattedText: "bg-yellow-100 text-yellow-800",
      date: "bg-pink-100 text-pink-800",
      link: "bg-indigo-100 text-indigo-800",
      image: "bg-orange-100 text-orange-800",
      gallery: "bg-red-100 text-red-800",
      color: "bg-emerald-100 text-emerald-800",
      toggle: "bg-cyan-100 text-cyan-800",
      number: "bg-violet-100 text-violet-800",
      option: "bg-rose-100 text-rose-800",
      file: "bg-amber-100 text-amber-800",
      reference: "bg-teal-100 text-teal-800",
      multiReference: "bg-slate-100 text-slate-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div
      className={cn(
        "group flex items-center gap-2 p-2 rounded-md transition-colors cursor-pointer",
        isSelected ? "bg-muted" : "hover:bg-muted/50"
      )}
      onClick={onClick}
    >
      {/* Drag Handle - Smaller */}
      <GripVertical className="h-3 w-3 text-muted-foreground cursor-move" />

      {/* Field Icon - Smaller with reduced padding */}
      {Icon && (
        <div className={cn("p-1 rounded", getFieldTypeColor(field.type))}>
          <Icon className="h-3 w-3" />
        </div>
      )}

      {/* Field Name - Reduced font size and spacing */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="font-medium truncate text-sm">{field.name}</span>
          {field.required && (
            <Badge variant="destructive" className="text-xs px-1 py-0 h-4">
              *
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
