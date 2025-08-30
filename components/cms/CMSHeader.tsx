"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, X } from "lucide-react";

interface CMSHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCount?: number;
  onBulkDelete?: () => void;
  onClearSelection?: () => void;
  isDeleting?: boolean;
}

export function CMSHeader({
  searchQuery,
  onSearchChange,
  selectedCount = 0,
  onBulkDelete,
  onClearSelection,
  isDeleting = false,
}: CMSHeaderProps) {
  return (
    <div className="border-b bg-background px-6 py-4">
      <div className="flex items-center justify-between space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {selectedCount > 0 && (
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={onClearSelection}>
              <X className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={onBulkDelete}
              disabled={isDeleting}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete ({selectedCount})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
