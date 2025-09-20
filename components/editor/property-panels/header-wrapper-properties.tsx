"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColorPickerComponent } from "@/components/ui/color-picker";
import { Plus, Trash2, GripVertical, Link, Loader2 } from "lucide-react";
import { FlexProperties } from "./flex-properties";
import { ImageUpload } from "@/components/ui/image-upload";
import { useUpload } from "@/hooks/useUpload";
import { useProjectPages } from "@/hooks/usePages";
import { useProjects } from "@/hooks/useProjects";
import { toast } from "sonner";

interface HeaderWrapperPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function HeaderWrapperProperties({ elementProps, onPropChange }: HeaderWrapperPropertiesProps) {
  const [localProps, setLocalProps] = useState(elementProps);
  const [showManualInput, setShowManualInput] = useState(false);
  const { uploadSingle, isUploading } = useUpload();
  
  // Get current project and pages
  const { data: projectsResponse } = useProjects();
  const currentProject = projectsResponse?.data?.projects?.[0];
  const projectId = currentProject?._id;
  
  const { data: pagesResponse } = useProjectPages(projectId);
  const pages = pagesResponse?.data?.pages || [];

  useEffect(() => {
    setLocalProps(elementProps);
  }, [elementProps]);

  const handlePropChange = (key: string, value: any) => {
    const newProps = { ...localProps, [key]: value };
    setLocalProps(newProps);
    onPropChange(key, value);
  };

  const handleImageUpload = async (files: File[]) => {
    if (!files || files.length === 0) return;

    try {
      const file = files[0];
      const uploadedFile = await uploadSingle(file);
      if (uploadedFile?.url) {
        onPropChange("logoUrl", uploadedFile.url);
        toast.success("Logo uploaded successfully!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload logo. Please try again.");
    }
  };

  const addNavigationItem = () => {
    const newItem = {
      id: `nav-${Date.now()}`,
      label: "New Item",
      href: "/",
      pageId: "",
      pageSlug: "",
      children: [],
    };
    const updatedItems = [...(localProps.navigationItems || []), newItem];
    handlePropChange("navigationItems", updatedItems);
  };

  const updateNavigationItem = (index: number, field: string, value: any) => {
    const updatedItems = [...(localProps.navigationItems || [])];
    
    // If updating the page selection, also set the href
    if (field === 'pageId') {
      if (value === 'custom') {
        // Custom URL selection - clear page-related fields
        updatedItems[index] = {
          ...updatedItems[index],
          [field]: value,
          href: '',
          pageSlug: ''
        };
      } else {
        // Page selection - set href and slug
        const selectedPage = pages.find(page => page._id === value);
        if (selectedPage) {
          updatedItems[index] = {
            ...updatedItems[index],
            [field]: value,
            href: `/${selectedPage.slug}`,
            pageSlug: selectedPage.slug
          };
        }
      }
    } else {
      updatedItems[index] = { ...updatedItems[index], [field]: value };
    }
    
    handlePropChange("navigationItems", updatedItems);
  };

  const removeNavigationItem = (index: number) => {
    const updatedItems = (localProps.navigationItems || []).filter((_, i) => i !== index);
    handlePropChange("navigationItems", updatedItems);
  };

  const addSubNavigationItem = (parentIndex: number) => {
    const updatedItems = [...(localProps.navigationItems || [])];
    const parentItem = { ...updatedItems[parentIndex] };
    if (!parentItem.children) {
      parentItem.children = [];
    }
    parentItem.children = [...parentItem.children, {
      id: `sub-${Date.now()}`,
      label: "New Sub Item",
      href: "/",
      pageId: "",
      pageSlug: "",
    }];
    updatedItems[parentIndex] = parentItem;
    handlePropChange("navigationItems", updatedItems);
  };

  const updateSubNavigationItem = (parentIndex: number, subIndex: number, field: string, value: any) => {
    const updatedItems = [...(localProps.navigationItems || [])];
    const parentItem = { ...updatedItems[parentIndex] };
    if (parentItem.children) {
      const updatedChildren = [...parentItem.children];
      
      // If updating the page selection, also set the href
      if (field === 'pageId') {
        if (value === 'custom') {
          // Custom URL selection - clear page-related fields
          updatedChildren[subIndex] = {
            ...updatedChildren[subIndex],
            [field]: value,
            href: '',
            pageSlug: ''
          };
        } else {
          // Page selection - set href and slug
          const selectedPage = pages.find(page => page._id === value);
          if (selectedPage) {
            updatedChildren[subIndex] = {
              ...updatedChildren[subIndex],
              [field]: value,
              href: `/${selectedPage.slug}`,
              pageSlug: selectedPage.slug
            };
          }
        }
      } else {
        updatedChildren[subIndex] = {
          ...updatedChildren[subIndex],
          [field]: value,
        };
      }
      
      parentItem.children = updatedChildren;
      updatedItems[parentIndex] = parentItem;
      handlePropChange("navigationItems", updatedItems);
    }
  };

  const removeSubNavigationItem = (parentIndex: number, subIndex: number) => {
    const updatedItems = [...(localProps.navigationItems || [])];
    const parentItem = { ...updatedItems[parentIndex] };
    if (parentItem.children) {
      parentItem.children = parentItem.children.filter((_, i) => i !== subIndex);
      updatedItems[parentIndex] = parentItem;
      handlePropChange("navigationItems", updatedItems);
    }
  };

  const logoSizes = [
    { value: "small", label: "Small", description: "32px height" },
    { value: "medium", label: "Medium", description: "40px height" },
    { value: "large", label: "Large", description: "48px height" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Header Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="logoUrl">Logo</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowManualInput(!showManualInput)}
                className="text-xs"
              >
                <Link className="w-3 h-3 mr-1" />
                {showManualInput ? "Upload" : "URL"}
              </Button>
            </div>

            {showManualInput ? (
              <Input
                id="logoUrl"
                value={localProps.logoUrl || ""}
                onChange={(e) => handlePropChange("logoUrl", e.target.value)}
                placeholder="https://example.com/logo.png"
                className="mt-1"
                disabled={isUploading}
              />
            ) : (
              <div className="relative">
                <ImageUpload
                  value={localProps.logoUrl || ""}
                  onChange={(url) => handlePropChange("logoUrl", url)}
                  onFilesSelected={handleImageUpload}
                  multiple={false}
                  maxFiles={1}
                  placeholder={isUploading ? "Uploading..." : "Upload a logo"}
                  variant="preview"
                  disabled={isUploading}
                />
                {isUploading && (
                  <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-lg">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="logoText">Logo Text</Label>
            <Input
              id="logoText"
              value={localProps.logoText || "Logo"}
              onChange={(e) => handlePropChange("logoText", e.target.value)}
              placeholder="Your Logo Text"
            />
          </div>

          <div>
            <Label htmlFor="logoSize">Logo Size</Label>
            <Select
              value={localProps.logoSize || "medium"}
              onValueChange={(value) => handlePropChange("logoSize", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select logo size" />
              </SelectTrigger>
              <SelectContent>
                {logoSizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    <div>
                      <div className="font-medium">{size.label}</div>
                      <div className="text-xs text-gray-500">{size.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ColorPickerComponent
            value={localProps.backgroundColor || "#ffffff"}
            onChange={(value) => handlePropChange("backgroundColor", value)}
            label="Background Color"
            placeholder="Select background color"
          />

          <ColorPickerComponent
            value={localProps.textColor || "#000000"}
            onChange={(value) => handlePropChange("textColor", value)}
            label="Text Color"
            placeholder="Select text color"
          />
        </CardContent>
      </Card>

      {/* Navigation Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Navigation Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(localProps.navigationItems || []).map((item, index) => (
            <div key={item.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GripVertical className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">Item {index + 1}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeNavigationItem(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor={`nav-label-${index}`}>Label</Label>
                  <Input
                    id={`nav-label-${index}`}
                    value={item.label}
                    onChange={(e) => updateNavigationItem(index, "label", e.target.value)}
                    placeholder="Menu Item"
                  />
                </div>
                <div>
                  <Label htmlFor={`nav-page-${index}`}>Page</Label>
                  <Select
                    value={item.pageId || ""}
                    onValueChange={(value) => updateNavigationItem(index, "pageId", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom URL...</SelectItem>
                      {pages.map((page) => (
                        <SelectItem key={page._id} value={page._id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{page.name}</span>
                            <span className="text-xs text-gray-500 ml-2">/{page.slug}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {item.pageId === "custom" && (
                    <Input
                      value={item.href || ""}
                      onChange={(e) => updateNavigationItem(index, "href", e.target.value)}
                      placeholder="Enter custom URL"
                      className="mt-2"
                    />
                  )}
                </div>
              </div>

              {/* Sub Navigation Items */}
              <div className="ml-4 space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-gray-600">Sub Items</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addSubNavigationItem(index)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add Sub Item
                  </Button>
                </div>

                {(item.children || []).map((subItem, subIndex) => (
                  <div key={subItem.id} className="flex items-center space-x-2 bg-gray-50 p-3 rounded">
                    <div className="flex-1 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          value={subItem.label}
                          onChange={(e) => updateSubNavigationItem(index, subIndex, "label", e.target.value)}
                          placeholder="Sub Item Label"
                          className="text-xs"
                        />
                        <Select
                          value={subItem.pageId || ""}
                          onValueChange={(value) => updateSubNavigationItem(index, subIndex, "pageId", value)}
                        >
                          <SelectTrigger className="text-xs">
                            <SelectValue placeholder="Select page" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="custom">Custom URL...</SelectItem>
                            {pages.map((page) => (
                              <SelectItem key={page._id} value={page._id}>
                                <div className="flex items-center justify-between w-full">
                                  <span className="text-xs">{page.name}</span>
                                  <span className="text-xs text-gray-500 ml-1">/{page.slug}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {subItem.pageId === "custom" && (
                        <Input
                          value={subItem.href || ""}
                          onChange={(e) => updateSubNavigationItem(index, subIndex, "href", e.target.value)}
                          placeholder="Enter custom URL"
                          className="text-xs"
                        />
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSubNavigationItem(index, subIndex)}
                      className="text-red-600 hover:text-red-700 p-1"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            onClick={addNavigationItem}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Navigation Item
          </Button>
        </CardContent>
      </Card>

      {/* Layout Properties */}
      <FlexProperties
        elementProps={elementProps}
        onPropChange={onPropChange}
      />
    </div>
  );
}
