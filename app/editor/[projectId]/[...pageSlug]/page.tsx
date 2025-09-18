"use client";

import React, { useMemo, useEffect, useState } from "react";
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
  selectedItem,
  onItemChange,
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
  selectedItem?: any;
  onItemChange?: (item: any) => void;
}) {
  const { query } = useEditor();
  const { currentViewport } = useViewportStore();
  const { isOpen: sidebarOpen } = useSidebarStore();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleSave = () => {
    const layout = query.serialize();
    onSave(layout);
  };

  // Auto-scroll functionality during drag operations
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isDragging = false;
    let dragInterval: NodeJS.Timeout | null = null;

    const handleDragStart = () => {
      isDragging = true;
    };

    const handleDragEnd = () => {
      isDragging = false;
      if (dragInterval) {
        clearInterval(dragInterval);
        dragInterval = null;
      }
    };

    const handleDragOver = (e: DragEvent) => {
      if (!isDragging || !scrollContainer) return;

      const rect = scrollContainer.getBoundingClientRect();
      const scrollThreshold = 80;
      const scrollSpeed = 8;

      // Vertical scrolling
      if (e.clientY < rect.top + scrollThreshold) {
        scrollContainer.scrollTop -= scrollSpeed;
      } else if (e.clientY > rect.bottom - scrollThreshold) {
        scrollContainer.scrollTop += scrollSpeed;
      }

      // Horizontal scrolling
      if (e.clientX < rect.left + scrollThreshold) {
        scrollContainer.scrollLeft -= scrollSpeed;
      } else if (e.clientX > rect.right - scrollThreshold) {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    // Add event listeners
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('dragend', handleDragEnd);
    scrollContainer.addEventListener('dragover', handleDragOver);

    return () => {
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('dragend', handleDragEnd);
      scrollContainer.removeEventListener('dragover', handleDragOver);
      if (dragInterval) {
        clearInterval(dragInterval);
      }
    };
  }, []);

  const viewportStyles = useMemo(() => {
    switch (currentViewport) {
      case "mobile":
        return { 
          width: "375px", 
          margin: "0 auto",
          minHeight: "100vh",
          position: "relative" as const
        };
      case "tablet":
        return { 
          width: "768px", 
          margin: "0 auto",
          minHeight: "100vh",
          position: "relative" as const
        };
      case "desktop":
      default:
        return { 
          width: "100%", 
          maxWidth: "none",
          minHeight: "100vh",
          position: "relative" as const
        };
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
        selectedItem={selectedItem}
        onItemChange={onItemChange}
      />{" "}
      <div className="flex h-[calc(100vh-4rem)] relative">
        <EditorSidebar />

        <div
          ref={scrollContainerRef}
          className={`flex-1 overflow-auto transition-all duration-300 ${
            sidebarOpen ? "ml-0" : "ml-0"
          }`}
          style={{
            scrollBehavior: "smooth",
            // Ensure proper scrolling behavior
            overscrollBehavior: "contain",
          }}
        >
          <div className="relative min-h-full">
            <div
              className="mx-auto bg-white shadow-lg rounded-lg overflow-visible pt-[28px]"
              style={viewportStyles}
            >
              <Frame data={layoutData}>
                <Element
                  is="Container"
                  canvas
                  className="min-h-[800px] p-6 w-full relative"
                  data-testid="canvas-root"
                >
                  {currentViewport !== "desktop" && (
                    <div className="text-center text-xs text-gray-400 mb-4 py-2 bg-gray-100 rounded">
                      {currentViewport === "mobile"
                        ? "Mobile View (375px)"
                        : "Tablet View (768px)"}
                    </div>
                  )}
                  
                  {/* Drop zone indicator for better UX */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full border-2 border-dashed border-transparent hover:border-blue-300 transition-colors duration-200 rounded-lg" />
                  </div>
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
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const projectId = params.projectId as string;
  const pageSlugSegments = params.pageSlug as string[];
  
  // Handle both single slug and CMS detail page patterns
  const pageSlug = useMemo(() => {
    if (pageSlugSegments.length === 1) {
      // Regular page: ['about'] -> 'about'
      return pageSlugSegments[0];
    } else if (pageSlugSegments.length === 2) {
      // CMS detail page: ['blog', 'item-id'] -> 'blog/:id'
      return `${pageSlugSegments[0]}/:id`;
    }
    // Fallback for other patterns
    return pageSlugSegments.join('/');
  }, [pageSlugSegments]);

  console.log("Editor pageSlugSegments:", pageSlugSegments);
  console.log("Editor resolved pageSlug:", pageSlug);

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
      // Check if we're in production (has subdomain) or development
      const isProduction = process.env.NODE_ENV === 'production' && project.slug;
      
      if (isProduction) {
        // Production: Use subdomain URL
        if (currentPageData.pageType === "cms" && currentPageData.cmsPageType === "detail") {
          if (selectedItem && selectedItem.slug) {
            const collectionSlug = pageSlugSegments[0];
            const previewUrl = `https://${project.slug}.hhola.app/${collectionSlug}/${selectedItem.slug}`;
            console.log("Production CMS Preview URL:", previewUrl);
            window.open(previewUrl, "_blank");
          } else {
            console.warn("No selected item for CMS detail page preview");
            if (pageSlugSegments.length === 2) {
              window.open(`https://${project.slug}.hhola.app/${pageSlugSegments[0]}/${pageSlugSegments[1]}`, "_blank");
            }
          }
        } else {
          const previewUrl = `https://${project.slug}.hhola.app/${currentPageData.slug}`;
          console.log("Production Preview URL:", previewUrl);
          window.open(previewUrl, "_blank");
        }
      } else {
        // Development: Use /site URL
        if (currentPageData.pageType === "cms" && currentPageData.cmsPageType === "detail") {
          if (selectedItem && selectedItem.slug) {
            const collectionSlug = pageSlugSegments[0];
            const previewUrl = `/site/${project._id}/${collectionSlug}/${selectedItem.slug}`;
            console.log("Development CMS Preview URL:", previewUrl);
            window.open(previewUrl, "_blank");
          } else {
            console.warn("No selected item for CMS detail page preview");
            if (pageSlugSegments.length === 2) {
              window.open(`/site/${project._id}/${pageSlugSegments[0]}/${pageSlugSegments[1]}`, "_blank");
            }
          }
        } else {
          const previewUrl = `/site/${project._id}/${currentPageData.slug}`;
          console.log("Development Preview URL:", previewUrl);
          window.open(previewUrl, "_blank");
        }
      }
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

  const handleItemChange = (item: any) => {
    setSelectedItem(item);
    // Set the collection context with the selected item data
    if (item && currentPageData?.collection) {
      setCollectionContext(currentPageData.collection, item);
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
        // Set collection context with selected item if available
        if (selectedItem) {
          setCollectionContext(currentPageData.collection, selectedItem);
        } else {
          setCollectionContext(currentPageData.collection);
        }
      } else {
        clearContext();
      }
    }

    // Cleanup on unmount
    return () => clearContext();
  }, [currentPageData, selectedItem, setCollectionContext, clearContext]);

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
      <style jsx global>{`
        /* Improve drag and drop experience */
        [data-cy="craftjs-editor"] {
          min-height: 100vh;
          position: relative;
        }
        
        /* Better scroll behavior for drag operations */
        .craftjs-editor-scroll-container {
          scroll-behavior: smooth;
          overscroll-behavior: contain;
        }
        
        /* Improve drop zone visibility */
        .craftjs-drop-zone {
          transition: all 0.2s ease;
        }
        
        .craftjs-drop-zone:hover {
          background-color: rgba(59, 130, 246, 0.05);
        }
        
        /* Better component selection feedback */
        .craftjs-selected {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px;
        }
        
        /* Improve resizing handles visibility */
        .craftjs-resize-handle {
          background-color: #3b82f6;
          border: 2px solid white;
          border-radius: 50%;
          width: 8px;
          height: 8px;
        }
      `}</style>
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
          selectedItem={selectedItem}
          onItemChange={handleItemChange}
        />
      </Editor>
      <Modals />
    </div>
  );
}
