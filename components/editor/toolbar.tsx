"use client";

import { useRouter } from "next/navigation";
import { useEditor } from "@craftjs/core";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Save,
  Eye,
  Undo,
  Redo,
  Trash2,
  Settings,
  Database,
  Layout,
} from "@/components/icons";
import { Home } from "lucide-react";

// Import our split components and hooks
import type { EditorToolbarProps } from "./toolbar/types";
import { useToolbarState } from "./toolbar/useToolbarState";
import { usePageHandlers } from "./toolbar/usePageHandlers";
import { useCMSHandlers } from "./toolbar/useCMSHandlers";
import { PagesDropdown } from "./toolbar/PagesDropdown";
import { CollectionsDropdown } from "./toolbar/CollectionsDropdown";
import { ItemsDropdown } from "./toolbar/ItemsDropdown";
import { ViewportControls } from "./toolbar/ViewportControls";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";

export function EditorToolbar({
  onSave,
  onPreview,
  projectName,
  pageName,
  projectId,
  currentPageId,
  pages = [],
  currentPageSlug,
  onPageChange,
  mode = "design",
  onModeChange,
  onItemChange,
  selectedItem,
}: EditorToolbarProps) {
  const router = useRouter();
  const { setCollectionContext, clearContext } = useCMSContextStore();

  // Wrapper function to handle page changes and update CMS context
  const handlePageChangeWithContext = (pageSlug: string) => {
    const targetPage = pages.find((page) => page.slug === pageSlug);

    if (
      targetPage?.pageType === "cms" &&
      targetPage?.cmsPageType === "detail" &&
      targetPage?.collection
    ) {
      // When navigating to a CMS detail page, we'll let the useEffect handle context setting
      // since we need to wait for the selected item to be determined
    } else {
      // Clear context when navigating to non-CMS pages
      clearContext();
    }

    // Call the original page change handler
    if (onPageChange) {
      onPageChange(pageSlug);
    }
  };

  // Use our custom hooks (need to define these before using cmsHandlers)
  const toolbarState = useToolbarState(
    projectId,
    pages,
    currentPageSlug,
    mode,
    selectedItem,
    onItemChange
  );

  const pageHandlers = usePageHandlers({
    projectId,
    pages,
    currentPageSlug,
    onPageChange,
    deletePageMutation: toolbarState.deletePageMutation,
  });

  // CraftJS editor hooks
  const { actions, query, canUndo, canRedo, selected } = useEditor(
    (state, query) => ({
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
      selected: state.events.selected,
    })
  );

  // Function to handle layout updates from CMS handlers
  const handleLayoutUpdate = (newLayout: any) => {
    try {
      // Deserialize the layout and apply it to the editor
      actions.deserialize(newLayout);
      console.log("Layout updated successfully");
    } catch (error) {
      console.error("Error applying layout update:", error);
    }
  };

  const cmsHandlers = useCMSHandlers({
    projectId,
    pages,
    currentPage: toolbarState.currentPage,
    collections: toolbarState.collections,
    onPageChange,
    onItemChange,
    createPageMutation: toolbarState.createPageMutation,
    updatePageMutation: toolbarState.updatePageMutation,
    onLayoutUpdate: handleLayoutUpdate,
  });

  // Handle layout regeneration when switching to CMS detail pages
  useEffect(() => {
    if (
      toolbarState.isCurrentPageCMSDetail &&
      toolbarState.currentPage &&
      selectedItem &&
      cmsHandlers.handleRegenerateLayout
    ) {
      cmsHandlers.handleRegenerateLayout(selectedItem);
    }
  }, [currentPageSlug, toolbarState.isCurrentPageCMSDetail, selectedItem]);

  // Update CMS context when page changes
  useEffect(() => {
    if (
      toolbarState.isCurrentPageCMSDetail &&
      toolbarState.currentPage?.collection
    ) {
      // Set collection context when on CMS detail page
      setCollectionContext(toolbarState.currentPage.collection, selectedItem);
    } else {
      // Clear context when not on CMS detail page
      clearContext();
    }
  }, [
    currentPageSlug,
    toolbarState.isCurrentPageCMSDetail,
    toolbarState.currentPage?.collection,
    selectedItem,
    setCollectionContext,
    clearContext,
  ]);

  // Update CMS context when selected item changes
  useEffect(() => {
    if (
      toolbarState.isCurrentPageCMSDetail &&
      toolbarState.currentPage?.collection &&
      selectedItem
    ) {
      setCollectionContext(toolbarState.currentPage.collection, selectedItem);
    }
  }, [
    selectedItem,
    toolbarState.isCurrentPageCMSDetail,
    toolbarState.currentPage?.collection,
    setCollectionContext,
  ]);

  // Simple handlers that don't need extraction
  const handleModeSwitch = (newMode: "design" | "cms") => {
    toolbarState.setCurrentMode(newMode);
    onModeChange?.(newMode);

    if (newMode === "cms") {
      router.push(`/cms/${projectId}`);
    }
  };

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  const handleDelete = () => {
    if (selected.size > 0) {
      selected.forEach((nodeId) => {
        actions.delete(nodeId);
      });
    }
  };

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

        <h1 className="font-semibold text-gray-900">{projectName}</h1>

        {/* Mode Toggle */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-xs ${
              toolbarState.currentMode === "design" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleModeSwitch("design")}
            title="Design Mode"
          >
            <Layout className="w-3 h-3 mr-1" />
            Design
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-xs ${
              toolbarState.currentMode === "cms" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleModeSwitch("cms")}
            title="CMS Mode"
          >
            <Database className="w-3 h-3 mr-1" />
            CMS
          </Button>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            {pages.length > 0 && onPageChange ? (
              <div className="flex space-x-1">
                <PagesDropdown
                  pageName={pageName}
                  pages={pages}
                  currentPageSlug={currentPageSlug}
                  collections={toolbarState.collections}
                  onPageChange={handlePageChangeWithContext}
                  onAddPage={pageHandlers.handleAddPage}
                  onAddCMSPage={cmsHandlers.handleAddCMSPage}
                  onAdd404Page={pageHandlers.handleAdd404Page}
                  onDeletePage={pageHandlers.handleDeletePage}
                />

                {/* Collections Dropdown - Only show if current page is a CMS detail page */}
                {toolbarState.isCurrentPageCMSDetail && (
                  <CollectionsDropdown
                    currentPage={toolbarState.currentPage}
                    collections={toolbarState.collections}
                    onEditInCMS={cmsHandlers.handleEditInCMS}
                    onSwapCollection={cmsHandlers.handleSwapCollection}
                  />
                )}

                {/* Items Dropdown - Only show if current page is a CMS detail page */}
                {toolbarState.isCurrentPageCMSDetail && (
                  <ItemsDropdown
                    selectedItem={selectedItem}
                    allCollectionItems={toolbarState.allCollectionItems}
                    onItemAction={cmsHandlers.handleItemAction}
                    onRegenerateLayout={() =>
                      selectedItem &&
                      cmsHandlers.handleRegenerateLayout(selectedItem)
                    }
                  />
                )}
              </div>
            ) : (
              <span className="text-sm text-gray-500">{pageName}</span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={pageHandlers.handleEditPage}
              className="text-xs h-6 px-2"
            >
              <Settings className="w-3 h-3 mr-1" />
              Edit
            </Button>
            <Badge variant="secondary" className="text-xs">
              Draft
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* History Controls */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => actions.history.undo()}
          disabled={!canUndo}
        >
          <Undo className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => actions.history.redo()}
          disabled={!canRedo}
        >
          <Redo className="w-4 h-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Viewport Controls */}
        <ViewportControls />

        <Separator orientation="vertical" className="h-6" />

        {/* Delete Button */}
        {selected.size > 0 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
          </>
        )}

        <Separator orientation="vertical" className="h-6" />

        {/* Action Buttons */}
        <Button variant="outline" onClick={onPreview}>
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <Button onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
}
