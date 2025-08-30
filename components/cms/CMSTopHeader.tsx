"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Edit3, Settings, Database, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface Collection {
  _id: string;
  name: string;
  description: string;
  fields: any[];
  itemCount: number;
}

interface CMSTopHeaderProps {
  projectId: string;
  currentMode: "design" | "cms";
  onModeChange: (mode: "design" | "cms") => void;
  collection?: Collection;
  onCreateItem?: () => void;
  onManageFields?: () => void;
  onEditCollection?: () => void;
}

export function CMSTopHeader({
  projectId,
  currentMode,
  onModeChange,
  collection,
  onCreateItem,
  onManageFields,
  onEditCollection,
}: CMSTopHeaderProps) {
  const router = useRouter();

  const handleBackToEditor = () => {
    router.push(`/editor/${projectId}/home`);
  };

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="w-full border-b bg-background shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left side - Navigation */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToDashboard}
            className="text-muted-foreground hover:text-foreground"
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <div className="h-4 w-px bg-border"></div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToEditor}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Editor
          </Button>
        </div>

        {/* Center - Collection Info and Mode Toggle */}
        <div className="flex items-center space-x-6">
          {/* {collection && (
            <div className="text-center">
              <h1 className="text-lg font-semibold">{collection.name}</h1>
              <p className="text-xs text-muted-foreground">
                {collection.description}
              </p>
            </div>
          )} */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            <Button
              variant={currentMode === "design" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleBackToEditor()}
              className="rounded-md"
            >
              <Edit3 className="mr-2 h-4 w-4" />
              Design
            </Button>
            <Button
              variant={currentMode === "cms" ? "default" : "ghost"}
              size="sm"
              onClick={() => onModeChange("cms")}
              className="rounded-md"
            >
              <Database className="mr-2 h-4 w-4" />
              CMS
            </Button>
          </div>
        </div>

        {/* Right side - Collection Actions */}
        <div className="flex items-center space-x-2">
          {collection ? (
            <>
              <Button size="sm" onClick={onCreateItem}>
                <Plus className="mr-2 h-4 w-4" />
                Add Item
              </Button>
              <Button variant="outline" size="sm" onClick={onManageFields}>
                <Settings className="mr-2 h-4 w-4" />
                Manage Fields
              </Button>
              <Button variant="outline" size="sm" onClick={onEditCollection}>
                Edit Collection
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
