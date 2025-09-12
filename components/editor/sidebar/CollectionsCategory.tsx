"use client";

import React from "react";
import { useCollections } from "@/hooks/useCollections";
import { useProjects } from "@/hooks/useProjects";
import { CollectionSidebarCard } from "./CollectionSidebarCard";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Loader2 } from "lucide-react";

interface CollectionsCategoryProps {
  projectId?: string;
}

export function CollectionsCategory({ projectId }: CollectionsCategoryProps) {
  // Get current project if not provided
  const { data: projectsResponse } = useProjects();
  const currentProject = projectsResponse?.data?.projects?.[0];
  const actualProjectId = projectId || currentProject?._id;

  // Get collections for the current project
  const { data: collectionsResponse, isLoading, error } = useCollections(actualProjectId);
  console.log("CollectionsCategory - collectionsResponse:", collectionsResponse);
  const collections = collectionsResponse?.collections || [];

  if (isLoading) {
    return (
      <Card className="border-2 border-dashed border-gray-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Loading collections...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !collections || collections.length === 0) {
    return (
      <Card className="border-2 border-dashed border-gray-300">
        <CardContent className="p-4">
          <div className="text-center text-gray-500">
            <Database className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm">
              {error ? "Failed to load collections" : "No collections found"}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Create collections in the CMS to see them here
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      {collections.map((collection: any) => (
        <CollectionSidebarCard
          key={collection._id}
          collection={collection}
          projectId={actualProjectId}
        />
      ))}
    </div>
  );
}
