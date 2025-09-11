import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { ChevronDown, Database } from "@/components/icons";
import {
  FileText,
  FolderPlus,
  AlertTriangle,
  Trash2 as Trash2Icon,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import type { Page } from "./types";

interface PagesDropdownProps {
  pageName: string;
  pages: Page[];
  currentPageSlug?: string;
  collections: any[];
  onPageChange?: (pageSlug: string) => void;
  onAddPage: () => void;
  onAddCMSPage: (
    collectionId: string,
    collectionName: string,
    pageType: "index" | "detail"
  ) => void;
  onAdd404Page: () => void;
  onDeletePage: () => void;
}

export function PagesDropdown({
  pageName,
  pages,
  currentPageSlug,
  collections,
  onPageChange,
  onAddPage,
  onAddCMSPage,
  onAdd404Page,
  onDeletePage,
}: PagesDropdownProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  // Group pages by CMS collection
  const { cmsGroups, regularPages } = pages.reduce((acc, page) => {
    if (page.pageType === "cms" && page.collection) {
      const collection = collections.find(c => c._id === page.collection);
      const collectionName = collection?.name || "Unknown Collection";
      
      if (!acc.cmsGroups[page.collection]) {
        acc.cmsGroups[page.collection] = {
          collectionId: page.collection,
          collectionName,
          pages: []
        };
      }
      acc.cmsGroups[page.collection].pages.push(page);
    } else {
      acc.regularPages.push(page);
    }
    return acc;
  }, { cmsGroups: {} as Record<string, { collectionId: string; collectionName: string; pages: Page[] }>, regularPages: [] as Page[] });

  const toggleGroup = (collectionId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(collectionId)) {
      newExpanded.delete(collectionId);
    } else {
      newExpanded.add(collectionId);
    }
    setExpandedGroups(newExpanded);
  };

  return (
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
      <DropdownMenuContent align="start" className="w-64">
        {/* Regular pages */}
        {regularPages.map((page) => (
          <DropdownMenuItem
            key={page.id}
            onClick={() => onPageChange && onPageChange(page.slug)}
            className={currentPageSlug === page.slug ? "bg-gray-100" : ""}
          >
            <FileText className="w-4 h-4 mr-2" />
            {page.name}
            {currentPageSlug === page.slug && (
              <Badge variant="secondary" className="ml-auto text-xs">
                Current
              </Badge>
            )}
          </DropdownMenuItem>
        ))}
        
        {/* Separator between regular pages and CMS groups */}
        {regularPages.length > 0 && Object.keys(cmsGroups).length > 0 && (
          <DropdownMenuSeparator />
        )}
        
        {/* CMS page groups */}
        {Object.values(cmsGroups).map((group) => {
          const isExpanded = expandedGroups.has(group.collectionId);
          const sortedPages = group.pages.sort((a, b) => {
            // Sort so index pages come before detail pages
            if (a.cmsPageType === "index" && b.cmsPageType === "detail") return -1;
            if (a.cmsPageType === "detail" && b.cmsPageType === "index") return 1;
            return a.name.localeCompare(b.name);
          });

          return (
            <div key={group.collectionId}>
              <div
                onClick={() => toggleGroup(group.collectionId)}
                className="flex items-center justify-between px-2 py-1.5 text-sm cursor-pointer hover:bg-blue-50 focus:bg-blue-50 rounded-sm mx-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleGroup(group.collectionId);
                  }
                }}
              >
                <div className="flex items-center">
                  <Database className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="font-medium text-blue-900">{group.collectionName}</span>
                  <Badge variant="outline" className="ml-2 text-xs border-blue-200 text-blue-700">
                    {group.pages.length}
                  </Badge>
                </div>
                <ChevronRight 
                  className={`w-3 h-3 transition-transform text-blue-600 ${isExpanded ? 'rotate-90' : ''}`} 
                />
              </div>
              
              {isExpanded && sortedPages.map((page) => (
                <DropdownMenuItem
                  key={page.id}
                  onClick={() => onPageChange && onPageChange(page.slug)}
                  className={`ml-6 pl-8 border-l-2 border-gray-200 ${
                    currentPageSlug === page.slug 
                      ? "bg-blue-50 border-l-blue-300" 
                      : "hover:bg-gray-50"
                  }`}
                >
                  <FileText className="w-3 h-3 mr-2 text-gray-500" />
                  <span className="text-sm">
                    {page.cmsPageType === "index" ? (
                      <span className="text-green-700 font-medium">Index</span>
                    ) : (
                      <span className="text-orange-700 font-medium">Detail</span>
                    )}
                    {page.slug.includes("/:id") && (
                      <span className="text-xs text-muted-foreground ml-1">
                        (/{page.slug.split("/").pop()})
                      </span>
                    )}
                  </span>
                  {currentPageSlug === page.slug && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      Current
                    </Badge>
                  )}
                </DropdownMenuItem>
              ))}
            </div>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onAddPage}>
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
                            onAddCMSPage(
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
                            onAddCMSPage(
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
        <DropdownMenuItem onClick={onAdd404Page}>
          <AlertTriangle className="w-4 h-4 mr-2" />
          New 404 Page
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={onDeletePage}
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
        <DropdownMenuItem disabled>Sort Alphabetically</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
