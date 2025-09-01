"use client";

import { Button } from "@/components/ui/button";
import { Home, Settings, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Database, Layout } from "../icons";
import { useProject } from "@/hooks/useProjects";
import { useDeleteCollection } from "@/hooks/useCollections";
import { useModalStore } from "@/lib/store/modalStore";

interface Collection {
  _id: string;
  name: string;
  description: string;
  fields: any[];
  itemCount: number;
}

interface CMSTopHeaderProps {
  projectId: string;
  currentMode: "design" | "cms";
  onModeChange: (mode: "design" | "cms") => void;
  collection?: Collection;
  onCreateItem?: () => void;
  onManageFields?: () => void;
  onEditCollection?: () => void;
  onDeleteCollection?: () => void;
}

export function CMSTopHeader({
  projectId,
  currentMode,
  onModeChange,
  collection,
  onCreateItem,
  onManageFields,
  onEditCollection,
  onDeleteCollection,
}: CMSTopHeaderProps) {
  const router = useRouter();
  const deleteCollectionMutation = useDeleteCollection();
  const { openModal } = useModalStore();

  const handleBackToEditor = () => {
    router.push(`/editor/${projectId}/home`);
  };

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };
  const handleDeleteCollection = async () => {
    if (!collection || !onDeleteCollection) return;

    openModal("confirmation", {
      title: "Delete Collection",
      message: `Are you sure you want to delete the collection "${collection.name}"? This will permanently delete the collection and all its items. This action cannot be undone.`,
      onConfirm: async () => {
        try {
          await deleteCollectionMutation.mutateAsync(collection._id);
          onDeleteCollection();
        } catch (error) {
          console.error("Failed to delete collection:", error);
          // You could show another modal here for error handling if needed
        }
      },
    });
  };

  const {
    data: projectResponse,
    isLoading: projectLoading,
    error: projectError,
  } = useProject(projectId);

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        {/* Back to Dashboard Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBackToDashboard}
          className="text-gray-600 hover:text-gray-900"
          title="Back to Dashboard"
        >
          <Home className="w-4 h-4" />
        </Button>
        <h1 className="font-semibold text-gray-900">
          {projectResponse?.data?.project?.name}
        </h1>

        {/* Mode Toggle */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-xs ${
              currentMode === "design" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleBackToEditor()}
            title="Design Mode"
          >
            <Layout className="w-3 h-3 mr-1" />
            Design
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-xs ${
              currentMode === "cms" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => onModeChange("cms")}
            title="CMS Mode"
          >
            <Database className="w-3 h-3 mr-1" />
            CMS
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Collection Actions */}
        {collection ? (
          <>
            <Button size="sm" onClick={onCreateItem}>
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
            <Button variant="outline" size="sm" onClick={onManageFields}>
              <Settings className="mr-2 h-4 w-4" />
              Manage Fields
            </Button>
            <Button variant="outline" size="sm" onClick={onEditCollection}>
              Edit Collection
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeleteCollection}
              disabled={deleteCollectionMutation.isPending}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {deleteCollectionMutation.isPending ? "Deleting..." : "Delete"}
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
