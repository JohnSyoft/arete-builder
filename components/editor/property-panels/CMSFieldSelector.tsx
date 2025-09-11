import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCollections } from "@/hooks/useCollections";
import { useProjectPages } from "@/hooks/usePages";
import { useParams } from "next/navigation";

interface CMSFieldSelectorProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
  fieldTypes?: string[]; // Which field types are compatible (e.g., ['plainText', 'formattedText'] for text components)
}

export function CMSFieldSelector({ elementProps, onPropChange, fieldTypes = [] }: CMSFieldSelectorProps) {
  // Debug logging to see when component re-renders
  console.log("CMSFieldSelector re-render:", {
    cmsField: elementProps?.cmsField,
    cmsFieldId: elementProps?.cmsFieldId,
    cmsCollectionId: elementProps?.cmsCollectionId,
    elementProps: elementProps
  });

  // Get CMS context data passed from the component
  const cmsContext = elementProps?._cmsContext;
  const currentCollectionId = cmsContext?.currentCollectionId;
  const projectId = cmsContext?.projectId;

  // Log when elementProps change
  useEffect(() => {
    console.log("CMSFieldSelector elementProps changed:", {
      cmsField: elementProps?.cmsField,
      cmsFieldId: elementProps?.cmsFieldId,
      cmsCollectionId: elementProps?.cmsCollectionId,
    });
  }, [elementProps?.cmsField, elementProps?.cmsFieldId, elementProps?.cmsCollectionId]);
  
  // If we have context data, use it; otherwise fall back to API calls
  const { data: collectionsResponse } = useCollections(projectId);
  const collections = collectionsResponse?.collections || [];
  
  const { data: pagesResponse } = useProjectPages(projectId);
  const pages = pagesResponse?.data?.pages || [];
  
  // Find current collection - prefer context data if available
  const currentCollection = currentCollectionId 
    ? collections.find(c => c._id === currentCollectionId)
    : collections.find(c => c._id === pages.find(page => window.location.pathname.includes(page.slug))?.collection);
  
  // Check if this is a CMS field
  const isCMSField = !!(elementProps?.cmsField && elementProps?.cmsFieldId && elementProps?.cmsCollectionId);
  
  // Get compatible fields from current collection
  const compatibleFields = currentCollection?.fields?.filter(field => {
    if (fieldTypes.length === 0) return true; // No restrictions
    return fieldTypes.includes(field.type);
  }) || [];

  const handleFieldChange = (fieldId: string) => {
    const selectedField = compatibleFields.find(f => f.id === fieldId);
    
    if (!selectedField) {
      // Clear CMS field binding
      onPropChange("_batch", {
        cmsField: "",
        cmsFieldType: "",
        cmsFieldId: "",
        cmsCollectionId: "",
        cmsFieldLabel: "",
      });
      return;
    }

    // Set CMS field binding
    onPropChange("_batch", {
      cmsField: selectedField.name,
      cmsFieldType: selectedField.type,
      cmsFieldId: selectedField.id,
      cmsCollectionId: currentCollection._id,
      cmsFieldLabel: selectedField.name.charAt(0).toUpperCase() + selectedField.name.slice(1),
    });
  };

  // Only show this selector if we're on a CMS page with a collection
  const currentPage = pages.find(page => window.location.pathname.includes(page.slug));
  if (!currentPage?.pageType || currentPage.pageType !== "cms" || !currentCollection) {
    return null;
  }

  return (
    <div className="space-y-3">
      {/* CMS Field Binding Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-800">CMS Data Binding</span>
        </div>
        
        <div>
          <Label htmlFor="cmsField">Bind to Field</Label>
          <Select 
            key={`cms-field-selector-${elementProps?.cmsFieldId || 'none'}`} 
            value={elementProps?.cmsFieldId || "none"} 
            onValueChange={handleFieldChange}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a field..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">
                <div className="flex items-center">
                  <span className="text-gray-500">No binding (static content)</span>
                </div>
              </SelectItem>
              {compatibleFields.map((field) => (
                <SelectItem key={field.id} value={field.id}>
                  <div className="flex items-center space-x-2">
                    <span className="capitalize">{field.name}</span>
                    <span className="text-xs text-gray-500">({field.type})</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {isCMSField && (
          <p className="text-xs text-blue-600 mt-2">
            Content will be dynamically populated from the "{elementProps?.cmsFieldLabel}" field.
          </p>
        )}
      </div>
    </div>
  );
}
