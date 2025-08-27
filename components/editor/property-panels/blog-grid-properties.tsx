"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search, X, RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogGridPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

// Mock blog data for demonstration
const mockBlogs = [
  {
    id: "1",
    title: "How to Build Amazing Websites",
    excerpt: "Learn the fundamentals of web design and development...",
    category: "Web Design",
    author: { name: "John Doe" },
    publishedAt: "2024-03-15",
    featured: true,
  },
  {
    id: "2",
    title: "Modern JavaScript Best Practices",
    excerpt: "Discover the latest JavaScript techniques and patterns...",
    category: "JavaScript",
    author: { name: "Jane Smith" },
    publishedAt: "2024-03-12",
    featured: false,
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt: "A comprehensive comparison of CSS Grid and Flexbox layouts...",
    category: "CSS",
    author: { name: "Mike Johnson" },
    publishedAt: "2024-03-10",
    featured: true,
  },
  {
    id: "4",
    title: "React Performance Optimization",
    excerpt: "Tips and techniques for optimizing React applications...",
    category: "React",
    author: { name: "Sarah Wilson" },
    publishedAt: "2024-03-08",
    featured: false,
  },
  {
    id: "5",
    title: "Introduction to TypeScript",
    excerpt: "Get started with TypeScript for better JavaScript development...",
    category: "TypeScript",
    author: { name: "David Chen" },
    publishedAt: "2024-03-05",
    featured: false,
  },
];

export function BlogGridProperties({
  elementProps,
  onPropChange,
}: BlogGridPropertiesProps) {
  const {
    selectedBlogs = ["1", "2", "3"],
    showAuthor = true,
    showMeta = true,
    showExcerpt = true,
    maxLength = 150,
    itemsToShow = 3,
  } = elementProps;

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState(mockBlogs);

  // Filter blogs based on search and category
  useEffect(() => {
    let filtered = mockBlogs;

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((blog) => blog.category === categoryFilter);
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, categoryFilter]);

  const categories = Array.from(
    new Set(mockBlogs.map((blog) => blog.category))
  );

  const handleBlogToggle = (
    blogId: string,
    checked: boolean | "indeterminate"
  ) => {
    const isChecked = checked === true;
    const newSelection = isChecked
      ? [...selectedBlogs, blogId]
      : selectedBlogs.filter((id: string) => id !== blogId);
    onPropChange("selectedBlogs", newSelection);
  };

  const handleSelectAll = () => {
    const allIds = filteredBlogs.map((blog) => blog.id);
    onPropChange("selectedBlogs", allIds);
  };

  const handleDeselectAll = () => {
    onPropChange("selectedBlogs", []);
  };

  const handleRefresh = () => {
    // In a real app, this would refetch from API
    console.log("Refreshing blog data...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Blog Grid Properties</h3>
      </div>

      {/* Blog Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Select Blogs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" onClick={handleRefresh}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Selection Controls */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleSelectAll}>
              Select All
            </Button>
            <Button variant="outline" size="sm" onClick={handleDeselectAll}>
              Clear All
            </Button>
          </div>

          {/* Blog List */}
          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50"
              >
                <Checkbox
                  checked={selectedBlogs.includes(blog.id)}
                  onCheckedChange={(checked) =>
                    handleBlogToggle(blog.id, checked)
                  }
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">{blog.title}</p>
                    {blog.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {blog.category}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      by {blog.author.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              <p>No blogs found matching your criteria.</p>
            </div>
          )}

          {/* Selected Count */}
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm text-gray-600">
              {selectedBlogs.length} blog(s) selected
            </span>
            {selectedBlogs.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPropChange("selectedBlogs", [])}
              >
                <X className="w-4 h-4" />
                Clear
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Display Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Display Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Items to Show</Label>
            <Select
              value={itemsToShow.toString()}
              onValueChange={(value) =>
                onPropChange("itemsToShow", parseInt(value))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 item</SelectItem>
                <SelectItem value="2">2 items</SelectItem>
                <SelectItem value="3">3 items</SelectItem>
                <SelectItem value="6">6 items</SelectItem>
                <SelectItem value="9">9 items</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Excerpt Length</Label>
            <Input
              type="number"
              value={maxLength}
              onChange={(e) =>
                onPropChange("maxLength", parseInt(e.target.value))
              }
              min={50}
              max={500}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Show Author</Label>
              <Switch
                checked={showAuthor}
                onCheckedChange={(checked) =>
                  onPropChange("showAuthor", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Meta Info</Label>
              <Switch
                checked={showMeta}
                onCheckedChange={(checked) => onPropChange("showMeta", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Excerpt</Label>
              <Switch
                checked={showExcerpt}
                onCheckedChange={(checked) =>
                  onPropChange("showExcerpt", checked)
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
