import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { useCollection } from "@/hooks/useCollections";
import { autoDetectFieldMappings } from "@/hooks/useCMSCards";
import { useParams } from "next/navigation";

interface CMSCardPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function CMSCardProperties({
  elementProps,
  onPropChange,
}: CMSCardPropertiesProps) {
  const params = useParams();
  const projectId = params.projectId as string;

  console.log("CMSCardProperties - projectId:", projectId);
  console.log("CMSCardProperties - elementProps:", elementProps);

  const {
    collection = "",
    fieldMappings = {},
    displayOptions = {},
    itemsToShow = 3,
    columns = 3,
    gap = "gap-8",
    backgroundColor = "#fdf7f3",
    cardBackground = "#ffffff",
    primaryColor = "#481E0B",
    accentColor = "#E67E22",
    textColor = "#333333",
  } = elementProps;

  // Get all collections for this project
  const { data: collectionsResponse } = useCollections(projectId);
  const collections = collectionsResponse?.collections || [];
  console.log("CMSCardProperties - collectionsResponse:", collectionsResponse);
  console.log("CMSCardProperties - collections:", collections);

  // Get selected collection details
  const { data: collectionResponse } = useCollection(collection || "");
  console.log("CMSCardProperties - collectionResponse:", collectionResponse);
  const selectedCollection = collectionResponse?.collection;

  const handleCollectionChange = (newCollectionId: string) => {
    console.log("handleCollectionChange called with:", newCollectionId);
    console.log("Available collections:", collections);

    if (!newCollectionId || newCollectionId === "no-collections") {
      // Clear collection - update both at once
      console.log("Clearing collection");
      const clearedProps = {
        ...elementProps,
        collection: "",
        fieldMappings: {},
      };
      onPropChange("_batch", clearedProps);
      return;
    }

    // Auto-detect field mappings for the new collection
    const newCollection = collections.find(
      (c: any) => c._id === newCollectionId
    );
    console.log({ newCollection });

    console.log("Found collection:", newCollection);

    if (newCollection) {
      const autoMappings = autoDetectFieldMappings(newCollection.fields || []);
      console.log("Auto-detected mappings:", autoMappings);

      console.log("Setting collection and field mappings together");
      // Update both collection and fieldMappings at once
      const updatedProps = {
        ...elementProps,
        collection: newCollectionId,
        fieldMappings: autoMappings,
      };
      onPropChange("_batch", updatedProps);
    } else {
      console.warn("Collection not found in available collections");
      console.log(
        "Calling onPropChange for collection (not found):",
        newCollectionId
      );
      onPropChange("collection", newCollectionId);
    }
  };

  const handleFieldMappingChange = (
    targetField: string,
    sourceField: string
  ) => {
    const newMappings = {
      ...fieldMappings,
      [targetField]: sourceField || undefined,
    };
    // Remove undefined values
    Object.keys(newMappings).forEach((key) => {
      if (newMappings[key] === undefined) {
        delete newMappings[key];
      }
    });

    onPropChange("fieldMappings", newMappings);
  };

  const handleDisplayOptionChange = (option: string, value: any) => {
    onPropChange("displayOptions", {
      ...displayOptions,
      [option]: value,
    });
  };

  const availableFields = selectedCollection?.fields || [];
  const fieldOptions = [
    { value: "none", label: "None" },
    ...availableFields.map((field: any) => ({
      value: field.name,
      label: `${field.name} (${field.type})`,
    })),
  ];

  // Common field mappings for card components
  const cardFieldMappings = [
    {
      key: "image",
      label: "Image Field",
      description: "Main image for the card",
    },
    { key: "title", label: "Title Field", description: "Main heading text" },
    {
      key: "excerpt",
      label: "Excerpt Field",
      description: "Description or summary text",
    },
    {
      key: "date",
      label: "Date Field",
      description: "Publication or creation date",
    },
    {
      key: "author",
      label: "Author Field",
      description: "Creator or author name",
    },
    {
      key: "category",
      label: "Category Field",
      description: "Category or tag classification",
    },
    { key: "url", label: "URL Field", description: "Link destination" },
  ];

  return (
    <div className="space-y-6">
      {/* Collection Selection */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">CMS Collection</Label>
        <Select value={collection || ""} onValueChange={handleCollectionChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a collection" />
          </SelectTrigger>
          <SelectContent>
            {collections.length > 0 ? (
              collections.map((col: any) => (
                <SelectItem key={col._id} value={col._id}>
                  {col.name} ({col.itemCount || 0} items)
                </SelectItem>
              ))
            ) : (
              <SelectItem value="no-collections" disabled>
                No collections found
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Choose which CMS collection to display data from
        </p>
        {collections.length === 0 && (
          <p className="text-xs text-orange-600">
            No collections found for this project. Create a collection first.
          </p>
        )}
      </div>

      {/* Field Mappings */}
      {collection && (
        <>
          <Separator />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Field Mappings</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const autoMappings = autoDetectFieldMappings(availableFields);
                  onPropChange("fieldMappings", autoMappings);
                }}
              >
                Auto-detect
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Map card elements to collection fields
            </p>

            {cardFieldMappings.map((mapping) => (
              <div key={mapping.key} className="space-y-1">
                <Label className="text-xs">{mapping.label}</Label>
                <Select
                  value={fieldMappings[mapping.key] || ""}
                  onValueChange={(value) =>
                    handleFieldMappingChange(mapping.key, value)
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    {fieldOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {mapping.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Display Options */}
      <Separator />
      <div className="space-y-3">
        <Label className="text-sm font-medium">Display Options</Label>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label className="text-xs">Items to Show</Label>
            <Input
              type="number"
              min="1"
              max="20"
              value={itemsToShow || 3}
              onChange={(e) =>
                onPropChange("itemsToShow", parseInt(e.target.value) || 3)
              }
              className="h-8"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs">Columns</Label>
            <Select
              value={columns?.toString() || "3"}
              onValueChange={(value) =>
                onPropChange("columns", parseInt(value))
              }
            >
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Column</SelectItem>
                <SelectItem value="2">2 Columns</SelectItem>
                <SelectItem value="3">3 Columns</SelectItem>
                <SelectItem value="4">4 Columns</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Toggle Options */}
        <div className="space-y-2">
          {[
            { key: "showImage", label: "Show Images" },
            { key: "showDate", label: "Show Dates" },
            { key: "showAuthor", label: "Show Authors" },
            { key: "showCategory", label: "Show Categories" },
            { key: "showExcerpt", label: "Show Excerpts" },
          ].map((option) => (
            <div key={option.key} className="flex items-center justify-between">
              <Label className="text-xs">{option.label}</Label>
              <Switch
                checked={displayOptions[option.key] !== false}
                onCheckedChange={(checked) =>
                  handleDisplayOptionChange(option.key, checked)
                }
              />
            </div>
          ))}
        </div>

        {/* Excerpt Length */}
        {displayOptions.showExcerpt !== false && (
          <div className="space-y-1">
            <Label className="text-xs">Excerpt Length</Label>
            <Input
              type="number"
              min="50"
              max="500"
              value={displayOptions.excerptLength || 120}
              onChange={(e) =>
                handleDisplayOptionChange(
                  "excerptLength",
                  parseInt(e.target.value) || 120
                )
              }
              className="h-8"
            />
          </div>
        )}
      </div>

      {/* Style Options */}
      <Separator />
      <div className="space-y-3">
        <Label className="text-sm font-medium">Style Options</Label>

        <div className="space-y-2">
          <div className="space-y-1">
            <Label className="text-xs">Background Color</Label>
            <Input
              type="color"
              value={backgroundColor}
              onChange={(e) => onPropChange("backgroundColor", e.target.value)}
              className="h-8 w-full"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs">Card Background</Label>
            <Input
              type="color"
              value={cardBackground}
              onChange={(e) => onPropChange("cardBackground", e.target.value)}
              className="h-8 w-full"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs">Primary Color</Label>
            <Input
              type="color"
              value={primaryColor}
              onChange={(e) => onPropChange("primaryColor", e.target.value)}
              className="h-8 w-full"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs">Accent Color</Label>
            <Input
              type="color"
              value={accentColor}
              onChange={(e) => onPropChange("accentColor", e.target.value)}
              className="h-8 w-full"
            />
          </div>
        </div>
      </div>

      {/* Status Badge */}
      {collection && selectedCollection && (
        <>
          <Separator />
          <div className="space-y-2">
            <Label className="text-sm font-medium">Collection Info</Label>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{selectedCollection.name}</Badge>
              <Badge variant="outline">
                {selectedCollection.itemCount || 0} items
              </Badge>
              <Badge variant="outline">
                {Object.keys(fieldMappings).length} mapped fields
              </Badge>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
