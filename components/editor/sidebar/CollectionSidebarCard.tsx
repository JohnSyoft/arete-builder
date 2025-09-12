"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, FileText, Image, Calendar, Link } from "lucide-react";

interface CollectionSidebarCardProps {
  collection: {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    fields?: Array<{
      name: string;
      type: string;
    }>;
  };
  projectId: string;
}

export function CollectionSidebarCard({ collection, projectId }: CollectionSidebarCardProps) {
  // Get field type icons
  const getFieldIcon = (fieldType: string) => {
    switch (fieldType) {
      case 'image':
      case 'gallery':
        return <Image className="w-3 h-3" />;
      case 'date':
      case 'datetime':
        return <Calendar className="w-3 h-3" />;
      case 'link':
      case 'url':
        return <Link className="w-3 h-3" />;
      default:
        return <FileText className="w-3 h-3" />;
    }
  };

  // Get field count by type
  const getFieldCounts = () => {
    if (!collection.fields) return { total: 0, types: {} };
    
    const types: Record<string, number> = {};
    collection.fields.forEach(field => {
      types[field.type] = (types[field.type] || 0) + 1;
    });
    
    return {
      total: collection.fields.length,
      types
    };
  };

  const fieldCounts = getFieldCounts();

  return (
    <Card className="cursor-grab hover:shadow-md transition-shadow border-2 border-dashed border-gray-300 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardContent className="p-3">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Database className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 truncate">
              {collection.name}
            </h4>
            
            {collection.description && (
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {collection.description}
              </p>
            )}
            
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs text-gray-500">
                {fieldCounts.total} fields
              </span>
              
              {Object.entries(fieldCounts.types).slice(0, 3).map(([type, count]) => (
                <div key={type} className="flex items-center space-x-1 text-xs text-gray-500">
                  {getFieldIcon(type)}
                  <span>{count}</span>
                </div>
              ))}
              
              {Object.keys(fieldCounts.types).length > 3 && (
                <span className="text-xs text-gray-400">
                  +{Object.keys(fieldCounts.types).length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-2 text-xs text-blue-600 font-medium">
          Drag to add collection
        </div>
      </CardContent>
    </Card>
  );
}
