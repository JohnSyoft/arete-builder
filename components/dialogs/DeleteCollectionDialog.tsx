"use client";

import { useState } from "react";
import { Trash2, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collection, useDeleteCollection } from "@/hooks/useCollections";
import { toast } from "sonner";

interface DeleteCollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Collection;
}

export function DeleteCollectionDialog({
  isOpen,
  onClose,
  collection,
}: DeleteCollectionDialogProps) {
  const [confirmText, setConfirmText] = useState("");
  const deleteMutation = useDeleteCollection();

  const isConfirmed = confirmText === collection.name;
  const isLoading = deleteMutation.isPending;

  const handleDelete = async () => {
    if (!isConfirmed) return;

    try {
      await deleteMutation.mutateAsync(collection._id);
      toast.success("Collection deleted successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to delete collection");
    }
  };

  const handleClose = () => {
    setConfirmText("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Delete Collection
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            collection and all its content items.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Collection Info */}
          <div className="rounded-lg border p-4 bg-muted/50">
            <div className="flex items-center gap-3">
              {collection.settings?.icon && (
                <span className="text-lg">{collection.settings.icon}</span>
              )}
              <div>
                <h4 className="font-semibold">{collection.name}</h4>
                {collection.description && (
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Badge variant="outline">
                {collection.fields.length} field
                {collection.fields.length !== 1 ? "s" : ""}
              </Badge>
              <Badge variant="outline">
                {collection.itemCount || 0} item
                {collection.itemCount !== 1 ? "s" : ""}
              </Badge>
            </div>
          </div>

          {/* Warning */}
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="font-medium text-destructive">Warning</h4>
                <p className="text-sm text-muted-foreground">
                  Deleting this collection will:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Permanently remove all {collection.itemCount || 0} content
                    items
                  </li>
                  <li>Delete the collection schema and field definitions</li>
                  <li>
                    Remove any references to this collection from other
                    collections
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Confirmation Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Type{" "}
              <Badge variant="secondary" className="font-mono">
                {collection.name}
              </Badge>{" "}
              to confirm deletion:
            </label>
            <Input
              placeholder="Enter collection name to confirm..."
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className={
                confirmText && !isConfirmed ? "border-destructive" : ""
              }
            />
            {confirmText && !isConfirmed && (
              <p className="text-sm text-destructive">
                Collection name doesn't match. Please type "{collection.name}"
                exactly.
              </p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={!isConfirmed || isLoading}
            className="gap-2"
          >
            <Trash2 className="h-4 w-4" />
            {isLoading ? "Deleting..." : "Delete Collection"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
