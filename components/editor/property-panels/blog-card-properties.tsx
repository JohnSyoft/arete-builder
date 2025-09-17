"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ColorPickerComponent } from "@/components/ui/color-picker";
import { Search, RefreshCw, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogCardPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

// Mock blog data for blog selection
const mockBlogs = [
  {
    id: "blog-1",
    title: "How to Build Amazing Websites",
    excerpt: "Learn the fundamentals of web design and development...",
    category: "Web Design",
    author: "John Doe",
    publishedAt: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&q=80",
  },
  {
    id: "blog-2",
    title: "Modern JavaScript Best Practices",
    excerpt: "Discover the latest JavaScript techniques and patterns...",
    category: "JavaScript",
    author: "Jane Smith",
    publishedAt: "2024-03-12",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
  },
  {
    id: "blog-3",
    title: "CSS Grid vs Flexbox Guide",
    excerpt: "A comprehensive comparison of CSS Grid and Flexbox layouts...",
    category: "CSS",
    author: "Mike Johnson",
    publishedAt: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80",
  },
];

export function BlogCardProperties({
  elementProps,
  onPropChange,
}: BlogCardPropertiesProps) {
  const {
    // Data Selection
    blogId = "blog-1",

    // Content Overrides
    customTitle = "",
    customDescription = "",
    customImage = "",
    customAuthor = "",
    customDate = "",
    customCategory = "",

    // Display Options
    showAuthor = true,
    showDate = true,
    showCategory = true,
    showDescription = true,
    showReadMoreButton = true,

    // Design Customization
    imageHeight = "200px",
    titleFontSize = "text-xl",
    titleColor = "text-gray-900",
    descriptionFontSize = "text-sm",
    descriptionColor = "text-gray-600",
    cardBackgroundColor = "#ffffff",
    cardBorderRadius = "8px",

    // Layout Options
    layout = "vertical",
    imagePosition = "top",

    // Button Customization
    buttonText = "Read More",
    buttonVariant = "default",

    // Link Settings
    linkUrl = "",
    openInNewTab = false,
  } = elementProps;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(mockBlogs);

  // Filter blogs based on search
  useEffect(() => {
    let filtered = mockBlogs;
    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredBlogs(filtered);
  }, [searchTerm]);

  const selectedBlog = mockBlogs.find((blog) => blog.id === blogId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Blog Card Properties</h3>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          {/* Blog Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Select Blog</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Blog Selection */}
              <Select
                value={blogId}
                onValueChange={(value) => onPropChange("blogId", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a blog" />
                </SelectTrigger>
                <SelectContent>
                  {filteredBlogs.map((blog) => (
                    <SelectItem key={blog.id} value={blog.id}>
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-8 h-8 rounded object-cover"
                        />
                        <div>
                          <div className="font-medium">{blog.title}</div>
                          <div className="text-xs text-gray-500">
                            {blog.category}
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Selected Blog Preview */}
              {selectedBlog && (
                <div className="p-3 border rounded-lg bg-gray-50">
                  <div className="flex gap-3">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">
                        {selectedBlog.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {selectedBlog.excerpt}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {selectedBlog.category}
                        </Badge>
                        <span className="text-xs text-gray-400">
                          by {selectedBlog.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button variant="outline" size="sm" className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Blog List
              </Button>
            </CardContent>
          </Card>

          {/* Content Overrides */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Content Overrides</CardTitle>
              <p className="text-sm text-gray-500">
                Override API content with custom content
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Custom Title</Label>
                <Input
                  value={customTitle}
                  onChange={(e) => onPropChange("customTitle", e.target.value)}
                  placeholder="Leave empty to use blog title"
                />
              </div>

              <div>
                <Label>Custom Description</Label>
                <Textarea
                  value={customDescription}
                  onChange={(e) =>
                    onPropChange("customDescription", e.target.value)
                  }
                  placeholder="Leave empty to use blog excerpt"
                  rows={3}
                />
              </div>

              <div>
                <Label>Custom Image URL</Label>
                <Input
                  value={customImage}
                  onChange={(e) => onPropChange("customImage", e.target.value)}
                  placeholder="Leave empty to use blog image"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Custom Author</Label>
                  <Input
                    value={customAuthor}
                    onChange={(e) =>
                      onPropChange("customAuthor", e.target.value)
                    }
                    placeholder="Author name"
                  />
                </div>
                <div>
                  <Label>Custom Category</Label>
                  <Input
                    value={customCategory}
                    onChange={(e) =>
                      onPropChange("customCategory", e.target.value)
                    }
                    placeholder="Category"
                  />
                </div>
              </div>

              <div>
                <Label>Custom Date</Label>
                <Input
                  type="date"
                  value={customDate}
                  onChange={(e) => onPropChange("customDate", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Display Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Display Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
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
                <Label>Show Date</Label>
                <Switch
                  checked={showDate}
                  onCheckedChange={(checked) =>
                    onPropChange("showDate", checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Show Category</Label>
                <Switch
                  checked={showCategory}
                  onCheckedChange={(checked) =>
                    onPropChange("showCategory", checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Show Description</Label>
                <Switch
                  checked={showDescription}
                  onCheckedChange={(checked) =>
                    onPropChange("showDescription", checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Show Read More Button</Label>
                <Switch
                  checked={showReadMoreButton}
                  onCheckedChange={(checked) =>
                    onPropChange("showReadMoreButton", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design" className="space-y-4">
          {/* Design Customization */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Styling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Image Height</Label>
                <Input
                  value={imageHeight}
                  onChange={(e) => onPropChange("imageHeight", e.target.value)}
                  placeholder="e.g., 200px, 12rem"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Title Font Size</Label>
                  <Select
                    value={titleFontSize}
                    onValueChange={(value) =>
                      onPropChange("titleFontSize", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-sm">Small</SelectItem>
                      <SelectItem value="text-base">Base</SelectItem>
                      <SelectItem value="text-lg">Large</SelectItem>
                      <SelectItem value="text-xl">XL</SelectItem>
                      <SelectItem value="text-2xl">2XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Description Font Size</Label>
                  <Select
                    value={descriptionFontSize}
                    onValueChange={(value) =>
                      onPropChange("descriptionFontSize", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-xs">XS</SelectItem>
                      <SelectItem value="text-sm">Small</SelectItem>
                      <SelectItem value="text-base">Base</SelectItem>
                      <SelectItem value="text-lg">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Title Color</Label>
                  <Input
                    value={titleColor}
                    onChange={(e) => onPropChange("titleColor", e.target.value)}
                    placeholder="e.g., text-gray-900"
                  />
                </div>
                <div>
                  <Label>Description Color</Label>
                  <Input
                    value={descriptionColor}
                    onChange={(e) =>
                      onPropChange("descriptionColor", e.target.value)
                    }
                    placeholder="e.g., text-gray-600"
                  />
                </div>
              </div>

              <ColorPickerComponent
                value={cardBackgroundColor}
                onChange={(value) => onPropChange("cardBackgroundColor", value)}
                label="Card Background Color"
                placeholder="Select card background color"
              />

              <div>
                <Label>Border Radius</Label>
                <Input
                  value={cardBorderRadius}
                  onChange={(e) =>
                    onPropChange("cardBorderRadius", e.target.value)
                  }
                  placeholder="e.g., 8px, 0.5rem"
                />
              </div>
            </CardContent>
          </Card>

          {/* Button Customization */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Button Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Button Text</Label>
                <Input
                  value={buttonText}
                  onChange={(e) => onPropChange("buttonText", e.target.value)}
                />
              </div>

              <div>
                <Label>Button Style</Label>
                <Select
                  value={buttonVariant}
                  onValueChange={(value) =>
                    onPropChange("buttonVariant", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="outline">Outline</SelectItem>
                    <SelectItem value="ghost">Ghost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          {/* Layout Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Layout Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Layout Type</Label>
                <Select
                  value={layout}
                  onValueChange={(value) => onPropChange("layout", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vertical">Vertical</SelectItem>
                    <SelectItem value="horizontal">Horizontal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {layout === "horizontal" && (
                <div>
                  <Label>Image Position</Label>
                  <Select
                    value={imagePosition}
                    onValueChange={(value) =>
                      onPropChange("imagePosition", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Link Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Link Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Custom Link URL</Label>
                <Input
                  value={linkUrl}
                  onChange={(e) => onPropChange("linkUrl", e.target.value)}
                  placeholder="Leave empty to use blog URL"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Open in New Tab</Label>
                <Switch
                  checked={openInNewTab}
                  onCheckedChange={(checked) =>
                    onPropChange("openInNewTab", checked)
                  }
                />
              </div>

              {(linkUrl || selectedBlog?.id) && (
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Test Link
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
