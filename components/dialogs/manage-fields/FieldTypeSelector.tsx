"use client";

import { useState } from "react";
import { Plus, Search, ChevronRight, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fieldTypes } from "./field-types";

interface FieldTypeSelectorProps {
  onFieldTypeSelect: (
    fieldType: string,
    referenceCollectionId?: string
  ) => void;
  allCollections?: any[];
}

export function FieldTypeSelector({
  onFieldTypeSelect,
  allCollections = [],
}: FieldTypeSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter field types based on search
  const filteredFieldTypes = fieldTypes.filter(
    (type) =>
      type.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Field
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 max-h-96 overflow-y-auto"
        side="bottom"
      >
        {/* Search Input */}
        <div className="relative mb-2 p-2">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-8"
          />
        </div>

        <DropdownMenuSeparator />

        {/* Field Types */}
        {filteredFieldTypes.map((fieldType) => {
          const Icon = fieldType.icon;

          // Handle reference fields with nested dropdown
          if (
            fieldType.value === "reference" ||
            fieldType.value === "multiReference"
          ) {
            return (
              <DropdownMenuSub key={fieldType.value}>
                <DropdownMenuSubTrigger className="flex items-center gap-3 p-3">
                  <Icon className="h-4 w-4" />
                  <div className="flex-1">
                    <div className="font-medium">{fieldType.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {fieldType.description}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-64">
                  {allCollections.length === 0 ? (
                    <div className="p-3 text-sm text-muted-foreground">
                      No collections available
                    </div>
                  ) : (
                    allCollections.map((col: any) => (
                      <DropdownMenuItem
                        key={col._id}
                        onClick={() =>
                          onFieldTypeSelect(fieldType.value, col._id)
                        }
                        className="flex items-center gap-3 p-3"
                      >
                        <Database className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{col.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {col.fields?.length || 0} fields
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))
                  )}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            );
          }

          // Regular field types
          return (
            <DropdownMenuItem
              key={fieldType.value}
              onClick={() => onFieldTypeSelect(fieldType.value)}
              className="flex items-center gap-3 p-3"
            >
              <Icon className="h-4 w-4" />
              <div className="flex-1">
                <div className="font-medium">{fieldType.label}</div>
                <div className="text-xs text-muted-foreground">
                  {fieldType.description}
                </div>
              </div>
            </DropdownMenuItem>
          );
        })}

        {filteredFieldTypes.length === 0 && searchTerm && (
          <div className="p-3 text-sm text-muted-foreground text-center">
            No field types found for "{searchTerm}"
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
