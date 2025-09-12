"use client";

import React from "react";
import { useCollections } from "@/hooks/useCollections";
import { useProjects } from "@/hooks/useProjects";
import { CraftCollectionWrapper } from "@/components/editor/craft-components";

export function useCollectionsCategory(projectId?: string) {
  // Get current project if not provided
  const { data: projectsResponse } = useProjects();
  const currentProject = projectsResponse?.data?.projects?.[0];
  const actualProjectId = projectId || currentProject?._id;

  // Get collections for the current project
  const { data: collectionsResponse, isLoading, error } = useCollections(actualProjectId);
  const collections = collectionsResponse?.collections || [];

  // Create collection items for the sidebar
  const collectionItems = React.useMemo(() => {
    if (isLoading || error || !collections || collections.length === 0) {
      return [];
    }

    return collections.map((collection: any) => ({
      component: CraftCollectionWrapper,
      name: collection.name,
      description: `Display ${collection.name} collection items`,
      props: {
        collectionId: collection._id,
        projectId: actualProjectId,
        collectionName: collection.name,
        flexDirection: "row",
        gap: "gap-4",
        justifyContent: "start",
        alignItems: "start",
        wrap: "wrap",
        maxItems: 3,
        cardDesign: "default",
        titleField: "title",
        descriptionField: "description",
        imageField: "image",
        dateField: "date",
        linkField: "link",
        nonEditable: true,
      },
    }));
  }, [collections, actualProjectId, isLoading, error]);

  return {
    items: collectionItems,
    isLoading,
    error,
    hasCollections: collections.length > 0,
  };
}
