"use client";

import { useRouter } from "next/navigation";
import { useEditor } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Save,
  Eye,
  Undo,
  Redo,
  Smartphone,
  Monitor,
  Tablet,
  Trash2,
  ChevronDown,
  Plus,
  Settings,
  ArrowLeft,
  Database,
  Layout,
} from "@/components/icons";
import {
  useViewportStore,
  type ViewportType,
} from "@/lib/store/viewport-store";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { useModalStore } from "@/lib/store/modalStore";
import { useState } from "react";

interface Page {
  id: string;
  name: string;
  slug: string;
}

interface EditorToolbarProps {
  onSave: () => void;
  onPreview: () => void;
  projectName: string;
  pageName: string;
  projectId: string;
  currentPageId: string;
  pages?: Page[];
  currentPageSlug?: string;
  onPageChange?: (pageSlug: string) => void;
  mode?: "design" | "cms";
  onModeChange?: (mode: "design" | "cms") => void;
}

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
}: EditorToolbarProps) {
  const router = useRouter();
  const { openModal } = useModalStore();
  const [currentMode, setCurrentMode] = useState<"design" | "cms">(mode);

  const { actions, query, canUndo, canRedo, selected } = useEditor(
    (state, query) => ({
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
      selected: state.events.selected,
    })
  );

  const { currentViewport, setViewport } = useViewportStore();
  const { openPanel } = usePropertiesPanelStore();

  const handleModeSwitch = (newMode: "design" | "cms") => {
    setCurrentMode(newMode);
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

  const handleViewportChange = (viewport: ViewportType) => {
    setViewport(viewport);
  };

  const handleAddPage = () => {
    openModal("createPage", {
      projectId,
      pages: pages.map((p) => ({ _id: p.id, name: p.name, slug: p.slug })), // Convert to API format
      onSave: (page: any) => {
        // Navigate to the new page after creation
        if (onPageChange) {
          onPageChange(page.slug);
        }
      },
    });
  };

  const handleEditPage = () => {
    // Find the current page object from pages array
    const currentPage = pages.find((page) => page.slug === currentPageSlug);
    if (currentPage) {
      // We need to convert our toolbar page to the API page format
      // Since the toolbar doesn't have full page data, we'll let the dialog handle loading
      openModal("editPage", {
        projectId,
        pages: pages.map((p) => ({ _id: p.id, name: p.name, slug: p.slug })), // Convert to API format
        page: {
          _id: currentPage.id,
          name: currentPage.name,
          slug: currentPage.slug,
        }, // Minimal page object
        onSave: (page: any) => {
          // Navigate to the updated page if slug changed
          if (onPageChange && page.slug !== currentPageSlug) {
            onPageChange(page.slug);
          }
        },
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
          <ArrowLeft className="w-4 h-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Separator orientation="vertical" className="h-6" />

        {/* Mode Toggle */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-xs ${
              currentMode === "design" ? "bg-white shadow-sm" : ""
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
              currentMode === "cms" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleModeSwitch("cms")}
            title="CMS Mode"
          >
            <Database className="w-3 h-3 mr-1" />
            CMS
          </Button>
        </div>

        <div>
          <h1 className="font-semibold text-gray-900">{projectName}</h1>
          <div className="flex items-center space-x-2">
            {pages.length > 0 && onPageChange ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {pageName}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {pages.map((page) => (
                    <DropdownMenuItem
                      key={page.id}
                      onClick={() => onPageChange && onPageChange(page.slug)}
                      className={
                        currentPageSlug === page.slug ? "bg-gray-100" : ""
                      }
                    >
                      {page.name}
                      {currentPageSlug === page.slug && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          Current
                        </Badge>
                      )}
                    </DropdownMenuItem>
                  ))}
                  <Separator className="my-1" />
                  <DropdownMenuItem onClick={handleAddPage}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Page
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <span className="text-sm text-gray-500">{pageName}</span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEditPage}
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
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${
              currentViewport === "mobile" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleViewportChange("mobile")}
            title="Mobile View (375px)"
          >
            <Smartphone className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${
              currentViewport === "tablet" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleViewportChange("tablet")}
            title="Tablet View (768px)"
          >
            <Tablet className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${
              currentViewport === "desktop" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleViewportChange("desktop")}
            title="Desktop View (100%)"
          >
            <Monitor className="w-4 h-4" />
          </Button>
        </div>

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

        {/* Test Properties Panel Button */}
        {/* <Button 
          variant="outline" 
          size="sm" 
          onClick={() => openPanel('text', { text: 'Test text', tagName: 'p' }, 'test-id', () => {})}
          className="bg-yellow-100 hover:bg-yellow-200"
        >
          Test Panel
        </Button> */}

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
