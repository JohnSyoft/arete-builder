"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCollections } from "@/hooks/useCollections";
import { useBulkDeleteCollectionItems } from "@/hooks/useCollectionItems";
import { useModalStore } from "@/lib/store/modalStore";
import { useDrawerStore } from "@/lib/store/drawerStore";
import { CMSTopHeader } from "@/components/cms/CMSTopHeader";
import { CollectionsSidebar } from "@/components/cms/CollectionsSidebar";
import { CMSHeader } from "@/components/cms/CMSHeader";
import { ContentTable } from "@/components/cms/ContentTable";
import {
  EmptyCollectionsState,
  EmptyFieldsState,
} from "@/components/cms/EmptyStates";
import { CMSLoadingState } from "@/components/cms/CMSLoadingState";

interface Collection {
  _id: string;
  name: string;
  description: string;
  fields: any[];
  itemCount: number;
}

export default function CMSPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const { data: collectionsResponse, isLoading } = useCollections(projectId);
  const { openModal } = useModalStore();
  const { openDrawer } = useDrawerStore();

  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [currentMode, setCurrentMode] = useState<"design" | "cms">("cms");

  const collections = collectionsResponse?.collections || [];
  const currentCollection =
    collections.find((c: Collection) => c._id === selectedCollection) ||
    collections[0];

  const bulkDeleteMutation = useBulkDeleteCollectionItems();

  const handleCreateCollection = () => {
    openModal("createEditCollection", {
      projectId,
      collection: null,
      mode: "create",
      onSave: () => {
        window.location.reload();
      },
    });
  };

  const handleEditCollection = (collection: any) => {
    openModal("createEditCollection", {
      projectId,
      collection,
      onSave: () => {
        window.location.reload();
      },
    });
  };

  const handleManageFields = (collection: any) => {
    openModal("manageFields", {
      collection,
      onSave: () => {
        window.location.reload();
      },
    });
  };

  const handleCreateItem = () => {
    if (!currentCollection) return;
    openDrawer("collectionItem", {
      collection: currentCollection,
      item: null,
      onSave: () => {
        // Refresh handled by React Query
      },
    });
  };

  const handleBulkDelete = async () => {
    if (!currentCollection || selectedItems.size === 0) return;

    try {
      await bulkDeleteMutation.mutateAsync({
        collectionId: currentCollection._id,
        itemIds: Array.from(selectedItems),
      });
      setSelectedItems(new Set());
    } catch (error) {
      console.error("Failed to delete items:", error);
    }
  };

  const handleClearSelection = () => {
    setSelectedItems(new Set());
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-[100vh]">
        <CMSTopHeader
          projectId={projectId}
          currentMode={currentMode}
          onModeChange={setCurrentMode}
        />
        <CMSLoadingState />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[100vh]">
      <CMSTopHeader
        projectId={projectId}
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        collection={currentCollection}
        onCreateItem={handleCreateItem}
        onManageFields={() =>
          currentCollection && handleManageFields(currentCollection)
        }
        onEditCollection={() =>
          currentCollection && handleEditCollection(currentCollection)
        }
      />
      <div className="flex flex-1 overflow-hidden">
        <CollectionsSidebar
          collections={collections}
          selectedCollection={selectedCollection}
          onSelectCollection={setSelectedCollection}
          onCreateCollection={handleCreateCollection}
        />

        <div className="flex-1 flex flex-col">
          {collections.length === 0 ? (
            <EmptyCollectionsState
              onCreateCollection={handleCreateCollection}
            />
          ) : currentCollection ? (
            <>
              <CMSHeader
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCount={selectedItems.size}
                onBulkDelete={handleBulkDelete}
                onClearSelection={handleClearSelection}
                isDeleting={bulkDeleteMutation.isPending}
              />

              <div className="flex-1 overflow-auto">
                <div className="p-0 min-h-0">
                  {currentCollection.fields &&
                  currentCollection.fields.length > 0 ? (
                    <ContentTable
                      collection={currentCollection}
                      searchQuery={searchQuery}
                      onCreateItem={handleCreateItem}
                      selectedItems={selectedItems}
                      onSelectionChange={setSelectedItems}
                    />
                  ) : (
                    <EmptyFieldsState
                      onManageFields={() =>
                        handleManageFields(currentCollection)
                      }
                    />
                  )}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
