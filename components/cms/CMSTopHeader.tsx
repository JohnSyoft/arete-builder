"use client";

import { Button } from "@/components/ui/button";
import { Home, Settings, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Database, Layout } from "../icons";
import { useProject } from "@/hooks/useProjects";

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
  const {
    data: projectResponse,
    isLoading: projectLoading,
    error: projectError,
  } = useProject(projectId);

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
        <h1 className="font-semibold text-gray-900">
          {projectResponse?.data?.project?.name}
        </h1>

        {/* Mode Toggle */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-xs ${
              currentMode === "design" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => handleBackToEditor()}
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
            onClick={() => onModeChange("cms")}
            title="CMS Mode"
          >
            <Database className="w-3 h-3 mr-1" />
            CMS
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Collection Actions */}
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
  );
}
