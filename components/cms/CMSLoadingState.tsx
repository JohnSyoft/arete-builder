"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function CMSLoadingState() {
  return (
    <div className="flex h-full">
      <div className="w-64 border-r bg-muted/10 p-4">
        <Skeleton className="h-8 w-32 mb-4" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      </div>
      <div className="flex-1 p-6">
        <Skeleton className="h-8 w-64 mb-6" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
