"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCollections } from "@/hooks/useCollections";

export default function CollectionsIndexPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;
  const { data: collectionsResponse, isLoading } = useCollections(projectId);

  const collections = collectionsResponse?.collections || [];

  // Redirect to first collection
  useEffect(() => {
    if (!isLoading && collections.length > 0) {
      router.replace(`/cms/${projectId}/collections/${collections[0]._id}`);
    } else if (!isLoading && collections.length === 0) {
      // Redirect to main CMS page if no collections
      router.replace(`/cms/${projectId}`);
    }
  }, [collections, isLoading, projectId, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse">Loading collections...</div>
    </div>
  );
}
