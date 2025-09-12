"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCollections } from "@/hooks/useCollections";
import { useProjects } from "@/hooks/useProjects";

interface CollectionWrapperPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function CollectionWrapperProperties({
  elementProps,
  onPropChange,
}: CollectionWrapperPropertiesProps) {
  const [localProps, setLocalProps] = useState(elementProps);
  
  // Get current project
  const { data: projectsResponse } = useProjects();
  const currentProject = projectsResponse?.data?.projects?.[0]; // Assuming single project for now
  const projectId = currentProject?._id;

  // Get collections for the current project
  const { data: collectionsResponse } = useCollections(projectId);
  const collections = collectionsResponse?.collections || [];

  useEffect(() => {
    setLocalProps(elementProps);
  }, [elementProps]);

  const handlePropChange = (key: string, value: any) => {
    const newProps = { ...localProps, [key]: value };
    setLocalProps(newProps);
    onPropChange(key, value);
  };

  const handleCollectionChange = (collectionId: string) => {
    const selectedCollection = collections.find((c: any) => c._id === collectionId);
    handlePropChange("collectionId", collectionId);
    if (selectedCollection) {
      handlePropChange("collectionName", selectedCollection.name);
    }
  };

  const cardDesigns = [
    { value: "default", label: "Default", description: "Simple card with image, title, and description" },
    { value: "minimal", label: "Minimal", description: "Clean design with just title and description" },
    { value: "detailed", label: "Detailed", description: "Full card with image, title, description, date, and link" },
    { value: "image-focused", label: "Image Focused", description: "Large image with text overlay" },
    { value: "text-focused", label: "Text Focused", description: "Emphasizes text content with minimal imagery" },
    { value: "compact", label: "Compact", description: "Horizontal layout with small image and text" },
    { value: "grid", label: "Grid", description: "Square cards perfect for product grids" },
    { value: "timeline", label: "Timeline", description: "Timeline-style cards with date markers" },
  ];

  return (
    <div className="space-y-6">
      {/* Collection Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Collection Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="collection">Collection</Label>
            <Select
              value={localProps.collectionId || ""}
              onValueChange={handleCollectionChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a collection" />
              </SelectTrigger>
              <SelectContent>
                {collections.map((collection: any) => (
                  <SelectItem key={collection._id} value={collection._id}>
                    {collection.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="maxItems">Max Items</Label>
            <Input
              id="maxItems"
              type="number"
              value={localProps.maxItems || 3}
              onChange={(e) => handlePropChange("maxItems", parseInt(e.target.value) || 3)}
              min="1"
              max="50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Card Design */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Card Design</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="cardDesign">Design Style</Label>
            <Select
              value={localProps.cardDesign || "default"}
              onValueChange={(value) => handlePropChange("cardDesign", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select card design" />
              </SelectTrigger>
              <SelectContent>
                {cardDesigns.map((design) => (
                  <SelectItem key={design.value} value={design.value}>
                    <div>
                      <div className="font-medium">{design.label}</div>
                      <div className="text-xs text-gray-500">{design.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Field Mapping */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Field Mapping</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="titleField">Title Field</Label>
            <Input
              id="titleField"
              value={localProps.titleField || "title"}
              onChange={(e) => handlePropChange("titleField", e.target.value)}
              placeholder="e.g., title, name, heading"
            />
          </div>

          <div>
            <Label htmlFor="descriptionField">Description Field</Label>
            <Input
              id="descriptionField"
              value={localProps.descriptionField || "description"}
              onChange={(e) => handlePropChange("descriptionField", e.target.value)}
              placeholder="e.g., description, content, summary"
            />
          </div>

          <div>
            <Label htmlFor="imageField">Image Field</Label>
            <Input
              id="imageField"
              value={localProps.imageField || "image"}
              onChange={(e) => handlePropChange("imageField", e.target.value)}
              placeholder="e.g., image, photo, thumbnail"
            />
          </div>

          <div>
            <Label htmlFor="dateField">Date Field</Label>
            <Input
              id="dateField"
              value={localProps.dateField || "date"}
              onChange={(e) => handlePropChange("dateField", e.target.value)}
              placeholder="e.g., date, createdAt, publishedAt"
            />
          </div>

          <div>
            <Label htmlFor="linkField">Link Field</Label>
            <Input
              id="linkField"
              value={localProps.linkField || "link"}
              onChange={(e) => handlePropChange("linkField", e.target.value)}
              placeholder="e.g., link, url, slug"
            />
          </div>

          <div>
            <Label htmlFor="categoryField">Category Field</Label>
            <Input
              id="categoryField"
              value={localProps.categoryField || "category"}
              onChange={(e) => handlePropChange("categoryField", e.target.value)}
              placeholder="e.g., category, type, tag"
            />
          </div>

          <div>
            <Label htmlFor="authorField">Author Field</Label>
            <Input
              id="authorField"
              value={localProps.authorField || "author"}
              onChange={(e) => handlePropChange("authorField", e.target.value)}
              placeholder="e.g., author, creator, by"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="priceField">Price Field</Label>
              <Input
                id="priceField"
                value={localProps.priceField || "price"}
                onChange={(e) => handlePropChange("priceField", e.target.value)}
                placeholder="e.g., price, cost"
              />
            </div>
            <div>
              <Label htmlFor="ratingField">Rating Field</Label>
              <Input
                id="ratingField"
                value={localProps.ratingField || "rating"}
                onChange={(e) => handlePropChange("ratingField", e.target.value)}
                placeholder="e.g., rating, stars"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="tagsField">Tags Field</Label>
            <Input
              id="tagsField"
              value={localProps.tagsField || "tags"}
              onChange={(e) => handlePropChange("tagsField", e.target.value)}
              placeholder="e.g., tags, keywords (comma-separated)"
            />
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Layout Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Layout Properties</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="flexDirection">Direction</Label>
              <Select
                value={localProps.flexDirection || "row"}
                onValueChange={(value) => handlePropChange("flexDirection", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">Row</SelectItem>
                  <SelectItem value="column">Column</SelectItem>
                  <SelectItem value="row-reverse">Row Reverse</SelectItem>
                  <SelectItem value="column-reverse">Column Reverse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="gap">Gap</Label>
              <Select
                value={localProps.gap || "gap-4"}
                onValueChange={(value) => handlePropChange("gap", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gap-0">No Gap</SelectItem>
                  <SelectItem value="gap-1">Small</SelectItem>
                  <SelectItem value="gap-2">Medium</SelectItem>
                  <SelectItem value="gap-4">Large</SelectItem>
                  <SelectItem value="gap-6">Extra Large</SelectItem>
                  <SelectItem value="gap-8">Huge</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="justifyContent">Justify Content</Label>
              <Select
                value={localProps.justifyContent || "start"}
                onValueChange={(value) => handlePropChange("justifyContent", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="start">Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="end">End</SelectItem>
                  <SelectItem value="between">Space Between</SelectItem>
                  <SelectItem value="around">Space Around</SelectItem>
                  <SelectItem value="evenly">Space Evenly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="alignItems">Align Items</Label>
              <Select
                value={localProps.alignItems || "start"}
                onValueChange={(value) => handlePropChange("alignItems", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="start">Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="end">End</SelectItem>
                  <SelectItem value="stretch">Stretch</SelectItem>
                  <SelectItem value="baseline">Baseline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="wrap">Wrap</Label>
            <Select
              value={localProps.wrap || "wrap"}
              onValueChange={(value) => handlePropChange("wrap", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nowrap">No Wrap</SelectItem>
                <SelectItem value="wrap">Wrap</SelectItem>
                <SelectItem value="wrap-reverse">Wrap Reverse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
