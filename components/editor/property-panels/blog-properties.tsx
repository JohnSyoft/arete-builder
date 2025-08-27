"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface BlogPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function BlogProperties({
  elementProps,
  onPropChange,
}: BlogPropertiesProps) {
  const {
    title = "How to Build Amazing Websites",
    excerpt = "Learn the fundamentals of web design and development with our comprehensive guide.",
    featuredImage = "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    author = { name: "John Doe", avatar: "https://i.pravatar.cc/40?u=johndoe" },
    category = "Web Design",
    publishedAt = "2024-03-15",
    readTime = 5,
    views = 1250,
    likes = 45,
    slug = "how-to-build-amazing-websites",
    layout = "card",
    showAuthor = true,
    showMeta = true,
    showExcerpt = true,
    maxLength = 150,
  } = elementProps;

  return (
    <div className="space-y-6">
      {/* Content Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Content
        </h3>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => onPropChange("title", e.target.value)}
            placeholder="Blog post title"
          />
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => onPropChange("excerpt", e.target.value)}
            placeholder="Blog post excerpt"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="featuredImage">Featured Image URL</Label>
          <Input
            id="featuredImage"
            value={featuredImage}
            onChange={(e) => onPropChange("featuredImage", e.target.value)}
            placeholder="https://..."
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => onPropChange("category", e.target.value)}
            placeholder="Blog category"
          />
        </div>

        <div>
          <Label htmlFor="slug">URL Slug</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => onPropChange("slug", e.target.value)}
            placeholder="url-friendly-slug"
          />
        </div>
      </div>

      {/* Author Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Author
        </h3>

        <div>
          <Label htmlFor="authorName">Author Name</Label>
          <Input
            id="authorName"
            value={author.name}
            onChange={(e) =>
              onPropChange("author", { ...author, name: e.target.value })
            }
            placeholder="Author name"
          />
        </div>

        <div>
          <Label htmlFor="authorAvatar">Author Avatar URL</Label>
          <Input
            id="authorAvatar"
            value={author.avatar}
            onChange={(e) =>
              onPropChange("author", { ...author, avatar: e.target.value })
            }
            placeholder="https://..."
          />
        </div>
      </div>

      {/* Metadata Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Metadata
        </h3>

        <div>
          <Label htmlFor="publishedAt">Published Date</Label>
          <Input
            id="publishedAt"
            type="date"
            value={publishedAt}
            onChange={(e) => onPropChange("publishedAt", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="readTime">Read Time (minutes)</Label>
          <Input
            id="readTime"
            type="number"
            value={readTime}
            onChange={(e) => onPropChange("readTime", parseInt(e.target.value))}
            min="1"
          />
        </div>

        <div>
          <Label htmlFor="views">Views</Label>
          <Input
            id="views"
            type="number"
            value={views}
            onChange={(e) => onPropChange("views", parseInt(e.target.value))}
            min="0"
          />
        </div>

        <div>
          <Label htmlFor="likes">Likes</Label>
          <Input
            id="likes"
            type="number"
            value={likes}
            onChange={(e) => onPropChange("likes", parseInt(e.target.value))}
            min="0"
          />
        </div>
      </div>

      {/* Layout Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Layout & Display
        </h3>

        <div>
          <Label htmlFor="layout">Layout Style</Label>
          <Select
            value={layout}
            onValueChange={(value) => onPropChange("layout", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="list">List</SelectItem>
              <SelectItem value="grid">Grid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showAuthor">Show Author</Label>
          <Switch
            id="showAuthor"
            checked={showAuthor}
            onCheckedChange={(checked) => onPropChange("showAuthor", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showMeta">Show Metadata</Label>
          <Switch
            id="showMeta"
            checked={showMeta}
            onCheckedChange={(checked) => onPropChange("showMeta", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showExcerpt">Show Excerpt</Label>
          <Switch
            id="showExcerpt"
            checked={showExcerpt}
            onCheckedChange={(checked) => onPropChange("showExcerpt", checked)}
          />
        </div>

        <div>
          <Label htmlFor="maxLength">Max Excerpt Length</Label>
          <Input
            id="maxLength"
            type="number"
            value={maxLength}
            onChange={(e) =>
              onPropChange("maxLength", parseInt(e.target.value))
            }
            min="50"
            max="500"
          />
        </div>
      </div>

      {/* Data Connection */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Data Connection
        </h3>
        <p className="text-sm text-gray-600">
          Connect this component to your blog data source to display dynamic
          content.
        </p>
        <Button variant="outline" className="w-full">
          Connect to Blog API
        </Button>
      </div>
    </div>
  );
}
