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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
  DropdownMenuPortal,
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
  Settings,
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
import {
  Home,
  ChevronRight,
  FileText,
  FolderPlus,
  AlertTriangle,
  Trash2 as Trash2Icon,
} from "lucide-react";
import { useCollections } from "@/hooks/useCollections";
import { useCreatePage, useDeletePage, useUpdatePage } from "@/hooks/usePages";
import { useCollectionItems } from "@/hooks/useCollectionItems";

interface Page {
  id: string;
  name: string;
  slug: string;
  pageType?: "normal" | "cms" | "404";
  collection?: string;
  cmsPageType?: "index" | "detail";
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
  const { data: collectionsResponse } = useCollections(projectId);
  const createPageMutation = useCreatePage();
  const deletePageMutation = useDeletePage();
  const updatePageMutation = useUpdatePage();

  const collections = collectionsResponse?.collections || [];

  // Check if there are any CMS pages in the project and get connected collections
  const cmsPages = pages.filter((page) => page.pageType === "cms");
  const currentPage = pages.find((page) => page.slug === currentPageSlug);

  // Only show items dropdown when on a CMS detail page
  const isCurrentPageCMSDetail =
    currentPage?.pageType === "cms" && currentPage?.cmsPageType === "detail";

  // Get unique collection IDs from CMS pages
  const connectedCollectionIds = Array.from(
    new Set(cmsPages.map((page) => page.collection).filter(Boolean))
  );

  // Get connected collections
  const connectedCollections = collections.filter((collection) =>
    connectedCollectionIds.includes(collection._id)
  );

  // Fetch items for the current page's collection, but only if current page is CMS detail
  const collectionItemsQuery = useCollectionItems(
    currentPage?.collection || "",
    {
      limit: 10,
      status: "published",
    }
  );

  // Only use the data if we're on a CMS detail page and have items
  const allCollectionItems =
    isCurrentPageCMSDetail && collectionItemsQuery.data?.items
      ? collectionItemsQuery.data.items.map((item: any) => {
          const collection = collections.find(
            (c) => c._id === currentPage?.collection
          );
          return {
            ...item,
            collectionName: collection?.name || "Unknown Collection",
            collectionId: collection?._id || "",
          };
        })
      : [];
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

  const handleAddCMSPage = async (
    collectionId: string,
    collectionName: string,
    pageType: "index" | "detail"
  ) => {
    try {
      // Generate slug and name based on collection and page type
      const collectionSlug = collectionName.toLowerCase().replace(/\s+/g, "-");
      const pageSlug =
        pageType === "index" ? collectionSlug : `${collectionSlug}-detail`;
      const pageName =
        pageType === "index" ? collectionName : `${collectionName} Detail`;

      // Check if page with this slug already exists
      const existingPage = pages.find((p) => p.slug === pageSlug);
      if (existingPage) {
        alert(
          `A page with slug "${pageSlug}" already exists. Please choose a different page type or rename the existing page.`
        );
        return;
      }

      // Create the page directly
      const newPage = await createPageMutation.mutateAsync({
        project: projectId,
        name: pageName,
        slug: pageSlug,
        isHomePage: false,
        collection: collectionId, // Changed from collectionId to collection
        pageType: "cms",
        cmsPageType: pageType,
        layout: JSON.stringify({
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
        }),
      });

      // Navigate to the new page
      if (onPageChange && newPage.data.page) {
        onPageChange(newPage.data.page.slug);
      }
    } catch (error) {
      console.error("Error creating CMS page:", error);
      alert("Failed to create CMS page. Please try again.");
    }
  };

  const handleCollectionAction = (collectionId: string) => {
    // Navigate to the collection in CMS mode
    router.push(`/cms/${projectId}/collections/${collectionId}`);
  };

  const handleItemAction = (itemId: string, collectionId: string) => {
    // Navigate to the specific item in CMS mode
    router.push(
      `/cms/${projectId}/collections/${collectionId}/items/${itemId}`
    );
  };

  const handleEditInCMS = () => {
    if (currentPage?.collection) {
      // Navigate to the collection in CMS mode
      router.push(`/cms/${projectId}/collections/${currentPage.collection}`);
    }
  };

  const handleSwapCollection = async (
    newCollectionId: string,
    newCollectionName: string
  ) => {
    if (!currentPage) return;

    const confirmSwap = confirm(
      `Are you sure you want to change this page from "${
        collections.find((c) => c._id === currentPage.collection)?.name
      }" collection to "${newCollectionName}" collection? This will update the page settings.`
    );

    if (!confirmSwap) return;

    try {
      // Update the current page with the new collection
      await updatePageMutation.mutateAsync({
        id: currentPage.id,
        pageData: {
          collection: newCollectionId,
        },
      });

      // The page will automatically refresh with the new collection data
      console.log("Collection swapped successfully!");
    } catch (error) {
      console.error("Error swapping collection:", error);
      alert("Failed to swap collection. Please try again.");
    }
  };

  const handleAdd404Page = () => {
    openModal("createPage", {
      projectId,
      pages: pages.map((p) => ({ _id: p.id, name: p.name, slug: p.slug })),
      pageType: "404",
      onSave: (page: any) => {
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

  const handleDeletePage = async () => {
    const currentPage = pages.find((page) => page.slug === currentPageSlug);
    if (!currentPage) return;

    // Safety checks
    if (pages.length <= 1) {
      alert(
        "Cannot delete the last page. A project must have at least one page."
      );
      return;
    }

    // Check if this is the home page
    const isHomePage = currentPage.slug === "home" || currentPage.slug === "";
    if (isHomePage) {
      const confirmDelete = confirm(
        "You are about to delete the home page. This will make your website inaccessible to visitors. Are you sure you want to continue?"
      );
      if (!confirmDelete) return;
    } else {
      const confirmDelete = confirm(
        `Are you sure you want to delete the page "${currentPage.name}"? This action cannot be undone.`
      );
      if (!confirmDelete) return;
    }

    try {
      await deletePageMutation.mutateAsync(currentPage.id);

      // Navigate to the first available page after deletion
      const remainingPages = pages.filter((p) => p.id !== currentPage.id);
      if (remainingPages.length > 0 && onPageChange) {
        onPageChange(remainingPages[0].slug);
      }
    } catch (error) {
      console.error("Error deleting page:", error);
      alert("Failed to delete page. Please try again.");
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
        {/* <Divider /> */}
        <h1 className="font-semibold text-gray-900">{projectName}</h1>

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
          <div className="flex items-center space-x-2">
            {pages.length > 0 && onPageChange ? (
              <div className="flex space-x-1">
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
                          <Badge
                            variant="secondary"
                            className="ml-auto text-xs"
                          >
                            Current
                          </Badge>
                        )}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleAddPage}>
                      <FileText className="w-4 h-4 mr-2" />
                      New Page
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="bg-blue-500 text-white hover:bg-blue-600">
                        <Database className="w-4 h-4 mr-2" />
                        New CMS Page
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {collections.length > 0 ? (
                            collections.map((collection) => (
                              <DropdownMenuSub key={collection._id}>
                                <DropdownMenuSubTrigger>
                                  <Database className="w-4 h-4 mr-2" />
                                  {collection.name}
                                  <span className="ml-auto text-xs text-muted-foreground">
                                    {collection.itemCount || 0} items
                                  </span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent>
                                    <DropdownMenuItem
                                      onClick={() =>
                                        handleAddCMSPage(
                                          collection._id,
                                          collection.name,
                                          "index"
                                        )
                                      }
                                    >
                                      <FileText className="w-4 h-4 mr-2" />
                                      Index
                                      <span className="ml-auto text-xs text-muted-foreground">
                                        List page
                                      </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() =>
                                        handleAddCMSPage(
                                          collection._id,
                                          collection.name,
                                          "detail"
                                        )
                                      }
                                    >
                                      <FileText className="w-4 h-4 mr-2" />
                                      Detail Page
                                      <span className="ml-auto text-xs text-muted-foreground">
                                        Item page
                                      </span>
                                    </DropdownMenuItem>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>
                            ))
                          ) : (
                            <DropdownMenuItem disabled>
                              <Database className="w-4 h-4 mr-2" />
                              No collections found
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem onClick={handleAdd404Page}>
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      New 404 Page
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleDeletePage}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      disabled={pages.length <= 1}
                    >
                      <Trash2Icon className="w-4 h-4 mr-2" />
                      Delete Page
                      {pages.length <= 1 && (
                        <span className="ml-auto text-xs text-muted-foreground">
                          (Last page)
                        </span>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled>
                      <FolderPlus className="w-4 h-4 mr-2" />
                      New Folder
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled>
                      Sort Alphabetically
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Collections Dropdown - Only show if current page is a CMS detail page */}
                {isCurrentPageCMSDetail && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        {collections.find(
                          (c) => c._id === currentPage?.collection
                        )?.name || "Collections"}
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem
                        onClick={() => handleEditInCMS()}
                        className="flex items-center"
                      >
                        <Database className="w-4 h-4 mr-2" />
                        Edit in CMS
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Swap Collection...
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {collections
                              .filter((c) => c._id !== currentPage?.collection)
                              .map((collection) => (
                                <DropdownMenuItem
                                  key={collection._id}
                                  onClick={() =>
                                    handleSwapCollection(
                                      collection._id,
                                      collection.name
                                    )
                                  }
                                >
                                  <Database className="w-4 h-4 mr-2" />
                                  {collection.name}
                                  <span className="ml-auto text-xs text-muted-foreground">
                                    {collection.itemCount || 0} items
                                  </span>
                                </DropdownMenuItem>
                              ))}
                            {collections.filter(
                              (c) => c._id !== currentPage?.collection
                            ).length === 0 && (
                              <DropdownMenuItem disabled>
                                No other collections available
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}

                {/* Items Dropdown - Only show if current page is a CMS detail page */}
                {isCurrentPageCMSDetail && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Items
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {allCollectionItems.length > 0 ? (
                        allCollectionItems.map((item, index) => {
                          // Get the display title from the item data
                          const displayTitle =
                            item.data?.title ||
                            item.data?.name ||
                            item.slug ||
                            `Item ${item._id.slice(-6)}`;

                          return (
                            <DropdownMenuItem
                              key={item._id}
                              onClick={() =>
                                handleItemAction(item._id, item.collectionId)
                              }
                              className="flex flex-col items-start p-3"
                            >
                              <div className="flex items-center w-full">
                                <Database className="w-4 h-4 mr-2 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm truncate">
                                    {displayTitle}
                                  </div>
                                  <div className="text-xs text-muted-foreground truncate">
                                    {item.collectionName}
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 ml-2 flex-shrink-0" />
                              </div>
                            </DropdownMenuItem>
                          );
                        })
                      ) : (
                        <DropdownMenuItem disabled>
                          <Database className="w-4 h-4 mr-2" />
                          No items found
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
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
