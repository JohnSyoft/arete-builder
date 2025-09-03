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
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/components/icons";
import { useViewportStore } from "@/lib/store/viewport-store";
import { useSidebarStore } from "@/lib/store/sidebar-store";
import { useProject } from "@/hooks/useProjects";
import {
  useProjectPages,
  usePageBySlug,
  useUpdatePage,
} from "@/hooks/usePages";
import { type Project } from "@/lib/api/projects";
import { type Page as ApiPage } from "@/lib/api/pages";

// Local type for toolbar compatibility
interface ToolbarPage {
  id: string;
  name: string;
  slug: string;
}

// Component to handle editor actions inside the Editor context
function EditorContent({
  project,
  currentPage,
  pages,
  layoutData,
  onPreview,
  onPageChange,
  onSave,
  mode = "design",
  onModeChange,
}: {
  project: Project;
  currentPage: ApiPage;
  pages: ToolbarPage[];
  layoutData: any;
  onPreview: () => void;
  onPageChange: (pageSlug: string) => void;
  onSave: (layout: any) => void;
  mode?: "design" | "cms";
  onModeChange?: (mode: "design" | "cms") => void;
}) {
  const { query } = useEditor();
  const { currentViewport } = useViewportStore();
  const { isOpen: sidebarOpen } = useSidebarStore();

  const handleSave = () => {
    const layout = query.serialize();
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
      <EditorToolbar
        onSave={handleSave}
        onPreview={onPreview}
        projectName={project.name}
        pageName={currentPage.name}
        projectId={project._id}
        currentPageId={currentPage._id}
        pages={pages}
        currentPageSlug={currentPage.slug}
        onPageChange={onPageChange}
        mode={mode}
        onModeChange={onModeChange}
      />{" "}
      <div className="flex h-[calc(100vh-4rem)] relative">
        <EditorSidebar />

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
                  data-testid="canvas-root"
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

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const { toggleSidebar } = useSidebarStore();
  const { initializeComponents, blocks } = useUserBlocksStore();
  const { setCollectionContext, clearContext } = useCMSContextStore();
  const [mode, setMode] = useState<"design" | "cms">("design");

  const projectId = params.projectId as string;
  const pageSlug = params.pageSlug as string;

  // Initialize user components on page load
  useEffect(() => {
    initializeComponents();

    // Add test function to window for debugging
    if (typeof window !== "undefined") {
      (window as any).createTestBlock = () => {
        const testHtml =
          '<div class="p-4 bg-blue-100 rounded">Test Block Content</div>';
        if (blocks.length === 0) {
          useUserBlocksStore.getState().addBlock({
            name: "Test Block",
            description: "A simple test block",
            htmlSource: testHtml,
            component: () => null, // Will be replaced by converter
            tags: [],
          });
        }
      };

      (window as any).debugResolver = () => {
        console.log("Current resolver:", getCurrentResolver());
        console.log("Current blocks:", blocks);
      };
    }
  }, [initializeComponents]);

  // Get the current resolver (will include any newly registered components)
  const currentResolver = useMemo(() => {
    console.log("Creating resolver with blocks:", blocks);
    const resolver = getCurrentResolver();
    console.log("Resolver keys:", Object.keys(resolver));
    console.log("Resolver:", resolver);
    return resolver;
  }, [blocks]); // Re-create when blocks array changes

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

  console.log({ projectId });
  // API hooks
  const {
    data: projectResponse,
    isLoading: projectLoading,
    error: projectError,
  } = useProject(projectId);
  const {
    data: pagesResponse,
    isLoading: pagesLoading,
    error: pagesError,
  } = useProjectPages(projectId);
  const {
    data: pageResponse,
    isLoading: pageLoading,
    error: pageError,
  } = usePageBySlug(projectId, pageSlug);
  const updatePageMutation = useUpdatePage();

  const project = projectResponse?.data?.project;
  const pages = pagesResponse?.data?.pages || [];
  const currentPageData = pageResponse?.data?.page;
  console.log({ currentPageData });
  const isLoading = projectLoading || pagesLoading || pageLoading;
  const error = projectError || pagesError || pageError;

  const handleSave = async (layout: any) => {
    if (!currentPageData) return;

    try {
      await updatePageMutation.mutateAsync({
        id: currentPageData._id,
        pageData: { layout: layout },
      });
      console.log("Page saved successfully!");
    } catch (error) {
      console.error("Error saving page:", error);
    }
  };

  const handlePreview = () => {
    if (project && currentPageData) {
      window.open(`/site/${project._id}/${currentPageData.slug}`, "_blank");
    }
  };

  const handlePageChange = (newPageSlug: string) => {
    if (project) {
      router.push(`/editor/${project._id}/${newPageSlug}`);
    }
  };

  const handleModeChange = (newMode: "design" | "cms") => {
    setMode(newMode);
    if (newMode === "cms") {
      router.push(`/cms/${projectId}`);
    }
  };

  const layoutData = useMemo(() => {
    if (!currentPageData?.layout) {
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
    }

    // If layout is a string, parse it
    if (typeof currentPageData.layout === "string") {
      try {
        const parsedLayout = JSON.parse(currentPageData.layout);
        // If parsed layout is empty or invalid, return default
        if (!parsedLayout || Object.keys(parsedLayout).length === 0) {
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
        }
        return parsedLayout;
      } catch (error) {
        console.error("Error parsing layout JSON:", error);
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
      }
    }

    // If layout exists but is empty object, return default
    if (
      currentPageData.layout &&
      Object.keys(currentPageData.layout).length === 0
    ) {
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
    }

    // Return the actual saved layout data (backward compatibility for objects)
    return currentPageData.layout;
  }, [currentPageData]);

  // Set CMS collection context when on CMS detail page
  useEffect(() => {
    if (currentPageData) {
      if (
        currentPageData.pageType === "cms" &&
        currentPageData.cmsPageType === "detail" &&
        currentPageData.collection
      ) {
        setCollectionContext(currentPageData.collection);
      } else {
        clearContext();
      }
    }

    // Cleanup on unmount
    return () => clearContext();
  }, [currentPageData, setCollectionContext, clearContext]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
        </div>
      </div>
    );
  }

  if (!project || !currentPageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Project not found
          </h2>
          <p className="text-gray-600 mb-4">
            The project or page you're looking for doesn't exist.
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
        <EditorContent
          project={project}
          currentPage={currentPageData}
          pages={pages.map((p) => ({
            id: p._id,
            name: p.name,
            slug: p.slug,
            pageType: p.pageType,
            cmsPageType: p?.cmsPageType,
            collection: p?.collection,
          }))}
          layoutData={layoutData}
          onPreview={handlePreview}
          onPageChange={handlePageChange}
          onSave={handleSave}
          mode={mode}
          onModeChange={handleModeChange}
        />
      </Editor>
      <Modals />
    </div>
  );
}
