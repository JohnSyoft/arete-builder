"use client";

import { Button } from "@/components/ui/button";
import { Database, Plus } from "lucide-react";

interface EmptyCollectionsStateProps {
  onCreateCollection: () => void;
}

export function EmptyCollectionsState({
  onCreateCollection,
}: EmptyCollectionsStateProps) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <Database className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No Collections</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get started by creating your first collection.
        </p>
        <Button onClick={onCreateCollection}>
          <Plus className="mr-2 h-4 w-4" />
          Create Collection
        </Button>
      </div>
    </div>
  );
}

interface EmptyFieldsStateProps {
  onManageFields: () => void;
}

export function EmptyFieldsState({ onManageFields }: EmptyFieldsStateProps) {
  return (
    <div className="text-center py-12">
      <Database className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium mb-2">No Fields</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Add fields to this collection to start managing content.
      </p>
      <Button onClick={onManageFields}>
        <Plus className="mr-2 h-4 w-4" />
        Add Fields
      </Button>
    </div>
  );
}
