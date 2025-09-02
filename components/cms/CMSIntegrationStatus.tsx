import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, ExternalLink, Settings } from "lucide-react";

interface CMSIntegrationStatusProps {
  collection?: string;
  collectionName?: string;
  itemCount?: number;
  fieldMappings?: any;
  isConnected?: boolean;
  onConfigureMapping?: () => void;
  onViewCollection?: () => void;
}

export function CMSIntegrationStatus({
  collection,
  collectionName,
  itemCount = 0,
  fieldMappings = {},
  isConnected = false,
  onConfigureMapping,
  onViewCollection,
}: CMSIntegrationStatusProps) {
  const mappedFieldsCount = Object.keys(fieldMappings).filter(
    (key) => fieldMappings[key]
  ).length;

  if (!collection) {
    return (
      <div className="p-6 border-2 border-dashed border-gray-200 rounded-lg text-center bg-gray-50">
        <div className="flex flex-col items-center space-y-2">
          <Info className="h-8 w-8 text-gray-400" />
          <h3 className="text-sm font-medium text-gray-900">
            No CMS Collection Connected
          </h3>
          <p className="text-sm text-gray-500">
            Select a collection to display dynamic content
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={onConfigureMapping}
            className="mt-2"
          >
            <Settings className="h-4 w-4 mr-2" />
            Configure Collection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Badge variant={isConnected ? "default" : "secondary"}>
            {isConnected ? "Connected" : "Preview Mode"}
          </Badge>
          <h4 className="font-medium text-sm">{collectionName}</h4>
        </div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" onClick={onConfigureMapping}>
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onViewCollection}>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant="outline">{itemCount} items</Badge>
        <Badge variant="outline">{mappedFieldsCount} fields mapped</Badge>
        {!isConnected && <Badge variant="destructive">Design mode only</Badge>}
      </div>

      <p className="text-xs text-gray-600 mt-2">
        {isConnected
          ? "Displaying live data from your CMS collection"
          : "Showing preview data - configure field mappings to connect live data"}
      </p>
    </div>
  );
}

// Loading state component for CMS cards
export function CMSCardLoadingState({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border animate-pulse"
        >
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="flex justify-between items-center mt-4">
              <div className="h-3 bg-gray-200 rounded w-20"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Error state component for CMS cards
export function CMSCardErrorState({
  error,
  onRetry,
}: {
  error?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="p-6 border border-red-200 rounded-lg text-center bg-red-50">
      <div className="flex flex-col items-center space-y-2">
        <div className="h-8 w-8 text-red-500">⚠️</div>
        <h3 className="text-sm font-medium text-red-900">
          Error Loading CMS Content
        </h3>
        <p className="text-sm text-red-700">
          {error || "Unable to load content from the CMS collection"}
        </p>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            className="mt-2"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}
