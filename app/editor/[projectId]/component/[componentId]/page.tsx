"use client";

import { useMemo, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import { EditorSidebar } from "@/components/editor/sidebar";
import { EditorToolbar } from "@/components/editor/toolbar";
import { GlobalPropertiesPanel } from "@/components/editor/global-properties-panel";
import { Modals } from "@/components/dialogs/Modals";
import { getCurrentResolver } from "@/components/editor/craft-components";
import { useUserBlocksStore } from "@/lib/store/user-blocks-store";
import { useViewportStore } from "@/lib/store/viewport-store";
import { useSidebarStore } from "@/lib/store/sidebar-store";
import { useComponentEditorStore } from "@/lib/store/component-editor-store";
import { useProject } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "@/components/icons";

// Component to handle editor actions inside the Editor context
function ComponentEditorContent({
  project,
  componentId,
  componentName,
  layoutData,
  onSave,
  onBack,
}: {
  project: any;
  componentId: string;
  componentName: string;
  layoutData: any;
  onSave: (layout: any) => void;
  onBack: () => void;
}) {
  const { query } = useEditor();
  const { currentViewport } = useViewportStore();
  const { isOpen: sidebarOpen } = useSidebarStore();
  const { updateComponentLayout, saveComponent } = useComponentEditorStore();

  const handleSave = () => {
    const layout = query.serialize();
    updateComponentLayout(layout);
    saveComponent(layout);
    onSave(layout);
  };

  const viewportStyles = useMemo(() => {
    switch (currentViewport) {
      case "mobile":
        return { width: "375px", margin: "0 auto" };
      case "tablet":
        return { width: "768px", margin: "0 auto" };
      case "desktop":
      default:
        return { width: "100%", maxWidth: "none" };
    }
  }, [currentViewport]);

  return (
    <>
      {/* Custom toolbar for component editor */}
      <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Page
          </Button>
          <div className="h-6 w-px bg-gray-300" />
          <h1 className="text-lg font-semibold text-gray-900">
            Edit Component: {componentName}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            className="flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Component
          </Button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)] relative">
        {/* <EditorSidebar /> */}

        <div
          className={`flex-1 overflow-auto transition-all duration-300 ${
            sidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          <div className="">
            <div
              className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden pt-[28px] min-h-[100vh]"
              style={viewportStyles}
            >
              <Frame data={layoutData}>
                <Element
                  is="Container"
                  canvas
                  className="min-h-[600px] p-4"
                  data-testid="component-canvas-root"
                >
                  {currentViewport !== "desktop" && (
                    <div className="text-center text-xs text-gray-400 mb-4 py-2 bg-gray-100 rounded">
                      {currentViewport === "mobile"
                        ? "Mobile View (375px)"
                        : "Tablet View (768px)"}
                    </div>
                  )}
                </Element>
              </Frame>
            </div>
          </div>
        </div>

        <GlobalPropertiesPanel />
      </div>
    </>
  );
}

export default function ComponentEditorPage() {
  const params = useParams();
  const router = useRouter();
  const { toggleSidebar } = useSidebarStore();
  const { initializeComponents, blocks } = useUserBlocksStore();
  const { 
    componentId, 
    componentName, 
    componentLayout, 
    projectId,
    closeComponentEditor 
  } = useComponentEditorStore();

  const projectIdParam = params.projectId as string;
  const componentIdParam = params.componentId as string;

  // Initialize user components on page load
  useEffect(() => {
    initializeComponents();
  }, [initializeComponents]);

  // Get the current resolver (will include any newly registered components)
  const currentResolver = useMemo(() => {
    console.log("Creating resolver with blocks:", blocks);
    const resolver = getCurrentResolver();
    console.log("Resolver keys:", Object.keys(resolver));
    return resolver;
  }, [blocks]);

  // Add keyboard shortcut for toggling sidebar
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + B to toggle sidebar
      if ((event.metaKey || event.ctrlKey) && event.key === "b") {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // API hooks
  const {
    data: projectResponse,
    isLoading: projectLoading,
    error: projectError,
  } = useProject(projectIdParam);

  const project = projectResponse?.data?.project;
  const isLoading = projectLoading;
  const error = projectError;

  const handleSave = async (layout: any) => {
    console.log("Component saved:", layout);
    // TODO: Implement actual save logic
  };

  const handleBack = () => {
    // Navigate back to the main editor
    if (projectIdParam) {
      router.push(`/editor/${projectIdParam}`);
    }
  };

  const layoutData = useMemo(() => {
    if (componentLayout) {
      return componentLayout;
    }

    // Default empty layout for new components
    return {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    };
  }, [componentLayout]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading component editor...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Project not found
          </h2>
          <p className="text-gray-600 mb-4">
            The project you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/dashboard")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Editor resolver={currentResolver} enabled={true}>
        <ComponentEditorContent
          project={project}
          componentId={componentIdParam}
          componentName={componentName || "Untitled Component"}
          layoutData={layoutData}
          onSave={handleSave}
          onBack={handleBack}
        />
      </Editor>
      <Modals />
    </div>
  );
}
