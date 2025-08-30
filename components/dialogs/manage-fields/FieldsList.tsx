"use client";

import { Type } from "lucide-react";
import { Field } from "@/hooks/useCollections";
import { FieldItem } from "./FieldItem";

interface FieldsListProps {
  fields: Field[];
  selectedFieldId: string | null;
  collectionName: string;
  onFieldSelect: (field: Field) => void;
}

export function FieldsList({
  fields,
  selectedFieldId,
  collectionName,
  onFieldSelect,
}: FieldsListProps) {
  return (
    <div className="w-64 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-sm text-muted-foreground">
          {collectionName} Fields
        </h3>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto">
        {fields.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            <Type className="h-6 w-6 mx-auto mb-2 opacity-50" />
            <p className="text-xs">
              No fields yet. Add your first field to get started.
            </p>
          </div>
        ) : (
          fields.map((field: Field) => {
            const isSelected =
              selectedFieldId === field.id ||
              (!selectedFieldId && field === fields[0]);

            return (
              <FieldItem
                key={field.id}
                field={field}
                isSelected={isSelected}
                onClick={() => onFieldSelect(field)}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
