"use client";

import React, { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Editor, Frame, Element } from "@craftjs/core";
import { getCurrentResolver } from "@/components/editor/craft-components";
import { useUserBlocksStore } from "@/lib/store/user-blocks-store";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { db, type Template } from "@/lib/db";
import { useViewportStore } from "@/lib/store/viewport-store";
import { toast } from "sonner";
import { projectsApi } from "@/lib/api/projects";

export default function TemplatePreviewPage() {
  const params = useParams();
  const router = useRouter();
  const { initializeComponents, blocks } = useUserBlocksStore();
  const { currentViewport } = useViewportStore();
  const [isUsingTemplate, setIsUsingTemplate] = useState(false);

  const templateId = params.templateId as string;
  const [template, setTemplate] = useState<Template | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageSlug, setCurrentPageSlug] = useState<string>("");
console.log({template, templateId, currentPageSlug, currentPage: template?.pages?.find(page => page.slug === currentPageSlug)});
  // Initialize user components
  React.useEffect(() => {
    initializeComponents();
  }, [initializeComponents]);

  // Fetch template data
  React.useEffect(() => {
    const fetchTemplate = () => {
      try {
        setIsLoading(true);
        const template = db.templates.getById(templateId);
        if (template) {
          setTemplate(template);
          // Set initial page to home page or first page
          const homePage = template.pages.find(page => page.isHomePage);
          const initialPage = homePage || template.pages[0];
          if (initialPage) {
            setCurrentPageSlug(initialPage.slug);
          }
        } else {
          toast.error('Template not found');
        }
      } catch (error) {
        console.error('Error fetching template:', error);
        toast.error('Failed to load template');
      } finally {
        setIsLoading(false);
      }
    };

    if (templateId) {
      fetchTemplate();
    }
  }, [templateId]);

  // Get the current resolver
  const currentResolver = useMemo(() => {
    return getCurrentResolver();
  }, [blocks]);

  // Get current page data
  const currentPage = useMemo(() => {
    if (!template || !currentPageSlug) return null;
    return template.pages.find(page => page.slug === currentPageSlug) || template.pages.find(page => page.isHomePage) || template.pages[0];
  }, [template, currentPageSlug]);

  // Get current page layout data
  const currentPageLayout = useMemo(() => {
    if (!currentPage) return {};
    try {
      return JSON.parse(currentPage.layout);
    } catch (error) {
      console.error('Error parsing page layout:', error);
      return {};
    }
  }, [currentPage]);

  const handleUseTemplate = async () => {
    if (!template) return;
    
    setIsUsingTemplate(true);
    alert(templateId)
    try {
      // Create a new project from template using backend API
      const response = await projectsApi.createProjectFromTemplate(templateId, {
        name: `${template.name} Project`,
        description: `Project created from ${template.name} template`
      });
      
      toast.success('Project created successfully!');
      // Navigate to editor with the new project
      router.push(`/editor/${response.data.project._id}/home`);
    } catch (error) {
      console.error("Error creating project from template:", error);
      toast.error('Failed to create project from template');
    } finally {
      setIsUsingTemplate(false);
    }
  };

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
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "100vh",
          position: "relative" as const
        };
    }
  }, [currentViewport]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading template...</p>
        </div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Template not found
          </h2>
          <p className="text-gray-600 mb-4">
            The template you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/dashboard/templates")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/dashboard/templates")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Templates
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {template.name}
                </h1>
                <p className="text-sm text-gray-500">{template.description}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="capitalize">
                {template.category}
              </Badge>
              <Button
                onClick={handleUseTemplate}
                disabled={isUsingTemplate}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isUsingTemplate ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Creating Project...
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Use This Template
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Template Preview */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-medium text-gray-900">Live Preview</h2>
                  
                  {/* Page Switcher */}
                  {template && template.pages && template.pages.length > 1 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Page:</span>
                      <Select value={currentPageSlug} onValueChange={setCurrentPageSlug}>
                        <SelectTrigger className="w-[180px] h-8 text-sm">
                          <SelectValue placeholder="Select page" />
                        </SelectTrigger>
                        <SelectContent>
                          {template.pages.map((page) => (
                            <SelectItem key={page.slug} value={page.slug}>
                              {page.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={currentViewport === "desktop" ? "default" : "outline"}
                      size="sm"
                      onClick={() => useViewportStore.getState().setViewport("desktop")}
                    >
                      Desktop
                    </Button>
                    <Button
                      variant={currentViewport === "tablet" ? "default" : "outline"}
                      size="sm"
                      onClick={() => useViewportStore.getState().setViewport("tablet")}
                    >
                      Tablet
                    </Button>
                    <Button
                      variant={currentViewport === "mobile" ? "default" : "outline"}
                      size="sm"
                      onClick={() => useViewportStore.getState().setViewport("mobile")}
                    >
                      Mobile
                    </Button>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {currentViewport === "mobile" ? "375px" : 
                   currentViewport === "tablet" ? "768px" : "Desktop"}
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div
                className="mx-auto bg-white shadow-lg rounded-lg overflow-visible"
                style={viewportStyles}
              >
                <Editor resolver={currentResolver} enabled={false}>
                  <Frame key={currentPageSlug} data={currentPageLayout}>
                    <Element
                      is="Container"
                      canvas
                      className="min-h-[800px] p-6 w-full relative"
                    >
                      <div className="text-center text-xs text-gray-400 mb-4 py-2 bg-gray-100 rounded">
                        {currentViewport !== "desktop" && (
                          <div className="mb-1">
                            {currentViewport === "mobile"
                              ? "Mobile View (375px)"
                              : "Tablet View (768px)"}
                          </div>
                        )}
                        <div className="font-medium">
                          {currentPage?.name || "Home"} Page
                        </div>
                      </div>
                    </Element>
                  </Frame>
                </Editor>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
