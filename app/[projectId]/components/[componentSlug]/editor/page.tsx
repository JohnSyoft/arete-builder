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
import { useProject } from "@/hooks/useProjects";
import { useComponentBySlug, useCreateComponent, useUpdateComponent } from "@/hooks/useComponents";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/components/icons";
import { generateUniqueSlug, generateCMSCollectionSlug } from "@/lib/utils/slugGenerator";

// Component to handle editor actions inside the Editor context
function ComponentEditorContent({
  project,
  component,
  layoutData,
  onSave,
  onBack,
}: {
  project: any;
  component: any;
  layoutData: any;
  onSave: (layout: any) => void;
  onBack: () => void;
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
            Back to Project
          </Button>
          <div className="h-6 w-px bg-gray-300" />
          <h1 className="text-lg font-semibold text-gray-900">
            Edit Component: {component?.name || "Untitled Component"}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            className="flex items-center gap-2"
          >
            Save Component
          </Button>
        </div>
      </div>

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

  const projectId = params.projectId as string;
  const componentSlug = params.componentSlug as string;

  // No need to extract component ID - we'll use the slug directly

  // Initialize user components on page load
  useEffect(() => {
    initializeComponents();
  }, [initializeComponents]);

  // Get the current resolver (will include any newly registered components)
  const currentResolver = useMemo(() => {
    console.log("Creating resolver with blocks:", blocks);
    const resolver = getCurrentResolver();
    console.log("Resolver keys:", Object.keys(resolver));
    
    // Filter out page-level components for component editor
    const pageLevelComponents = [
      'Navigation', 'NavigationItem', 'SimpleHeader', 'MegaMenuHeader',
      'MedicalHero1', 'CosmeticHero1', 'HealthcareGridHero1', 'CollaborationHero1',
      'LearningPlatformHero', 'ProductivityHero', 'ExpenseTrackingHero', 'CommunityResourcesHero',
      'MiniMaxHero1', 'ModernSaaSHero1', 'EnvironmentalHero1', 'ResortBookingHero',
      'HospitalityHero1', 'MedicalFooter1', 'CosmeticFooter1', 'HospitalityFooter1',
      'ModernFooter1', 'CMSCollectionWrapper' // Also exclude CMS collection wrapper
    ];
    
    const filteredResolver = { ...resolver };
    pageLevelComponents.forEach(componentName => {
      delete filteredResolver[componentName];
    });
    
    console.log("Filtered resolver keys:", Object.keys(filteredResolver));
    return filteredResolver;
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
  } = useProject(projectId);
  
  const {
    data: componentResponse,
    isLoading: componentLoading,
    error: componentError,
  } = useComponentBySlug(componentSlug, projectId);

  const createComponentMutation = useCreateComponent();
  const updateComponentMutation = useUpdateComponent();

  const project = projectResponse?.data?.project;
  const existingComponent = componentResponse?.data?.component;
  
  // Use existing component or create a new one
  const currentComponent = useMemo(() => {
    if (existingComponent) {
      // Component exists, use it
      return {
        ...existingComponent,
        isNew: false,
      };
    }
    
    // Component doesn't exist, create a new one based on the slug
    if (componentSlug.startsWith('cms-')) {
      // Extract collection info from slug
      const parts = componentSlug.split('-');
      const collectionId = parts[parts.length - 1]; // Last part should be collection ID
      const collectionName = parts.slice(1, -1).join(' '); // Everything between 'cms' and last part
      
      return {
        _id: `temp-${Date.now()}`,
        name: `${collectionName} Component`,
        slug: componentSlug,
        type: 'cms-collection',
        layout: null,
        config: {
          collection: collectionId,
          collectionName: collectionName,
        },
        isNew: true, // Flag to indicate this is a new component
      };
    } else {
      // Regular component - generate a unique slug
      const baseName = componentSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const uniqueSlug = generateUniqueSlug(baseName, 'custom');
      
      return {
        _id: `temp-${Date.now()}`,
        name: baseName,
        slug: uniqueSlug,
        type: 'custom',
        layout: null,
        isNew: true,
      };
    }
  }, [componentSlug, existingComponent]);
  
  const isLoading = projectLoading || componentLoading;
  const error = projectError || componentError;

  // Ensure CMS field nodes maintain nonEditable: true when saving
  const processLayoutForSave = (layout: any) => {
    const processedLayout = { ...layout };
    
    Object.keys(processedLayout).forEach(nodeId => {
      const node = processedLayout[nodeId];
      if (node && typeof node === 'object' && node.props) {
        // Check if this is a CMS field node
        const isCMSField = node.props.cmsField || 
          node.props.cmsFieldId || 
          node.props.cmsCollectionId ||
          node.props.cmsFieldType;
        
        if (isCMSField) {
          // Ensure CMS field nodes are non-editable
          processedLayout[nodeId] = {
            ...node,
            props: {
              ...node.props,
              nonEditable: true,
            }
          };
        }
      }
    });
    
    return processedLayout;
  };

  const handleSave = async (layout: any) => {
    try {
      // Process layout to ensure CMS fields remain non-editable
      const processedLayout = processLayoutForSave(layout);
      
      if (currentComponent?.isNew) {
        // Create new component
        await createComponentMutation.mutateAsync({
          projectId,
          name: currentComponent.name,
          type: currentComponent.type as "card" | "section" | "custom" | "cms-collection" | "hero",
          layout: JSON.stringify(processedLayout),
          config: currentComponent.config,
        });
        console.log("Component created successfully");
      } else if (currentComponent?._id && !currentComponent._id.startsWith('temp-')) {
        // Update existing component (only if it's not a temporary ID)
        await updateComponentMutation.mutateAsync({
          id: currentComponent._id,
          data: {
            layout: JSON.stringify(processedLayout),
          },
        });
        console.log("Component updated successfully");
      }
    } catch (error) {
      console.error("Error saving component:", error);
      alert("Failed to save component. Please try again.");
    }
  };

  const handleBack = () => {
    // Navigate back to the project dashboard
    if (projectId) {
      router.push(`/dashboard`);
    }
  };

  const layoutData = useMemo(() => {
    if (currentComponent?.layout) {
      // If component has existing layout, use it but make all fields editable
      const layout = typeof currentComponent.layout === 'string' 
        ? JSON.parse(currentComponent.layout) 
        : currentComponent.layout;
        
      // Recursively make nodes editable, but preserve nonEditable: true for CMS field nodes
      const makeNodesEditable = (layoutObj: any) => {
        const editableLayout = { ...layoutObj };
        console.log({editableLayout})
        Object.keys(editableLayout).forEach(nodeId => {
          const node = editableLayout[nodeId];
          if (node && typeof node === 'object') {
            // Check if this is a CMS field node (has CMS field properties)
            const isCMSField = node.props && (
              node.props.cmsField || 
              node.props.cmsFieldId || 
              node.props.cmsCollectionId ||
              node.props.cmsFieldType
            );
            
            // Only make non-CMS field nodes editable
            editableLayout[nodeId] = {
              ...node,
              props: {
                ...node.props,
                nonEditable: isCMSField ? true : false, // Keep CMS fields non-editable
              }
            };
          }
        });
        
        return editableLayout;
      };
      
      return makeNodesEditable(layout);
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
  }, [currentComponent]);

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
          component={currentComponent}
          layoutData={layoutData}
          onSave={handleSave}
          onBack={handleBack}
        />
      </Editor>
      <Modals />
    </div>
  );
}
