"use client";

import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, Heart } from "lucide-react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  publishedAt: string;
  readTime?: number;
  views?: number;
  likes?: number;
  slug: string;
}

export interface BlogGridProps {
  selectedBlogs?: string[]; // Array of blog IDs to display
  showAuthor?: boolean;
  showMeta?: boolean;
  showExcerpt?: boolean;
  maxLength?: number;
  itemsToShow?: number;
}

// Mock data for demonstration
const mockBlogs: BlogItem[] = [
  {
    id: "1",
    title: "How to Build Amazing Websites",
    excerpt:
      "Learn the fundamentals of web design and development with our comprehensive guide that covers everything from basic HTML to advanced frameworks.",
    featuredImage:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    author: { name: "John Doe", avatar: "https://i.pravatar.cc/40?u=johndoe" },
    category: "Web Design",
    publishedAt: "2024-03-15",
    readTime: 5,
    views: 1250,
    likes: 45,
    slug: "how-to-build-amazing-websites",
  },
  {
    id: "2",
    title: "Modern JavaScript Best Practices",
    excerpt:
      "Discover the latest JavaScript techniques and patterns that will make your code more efficient, maintainable, and performant.",
    featuredImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    author: {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/40?u=janesmith",
    },
    category: "JavaScript",
    publishedAt: "2024-03-12",
    readTime: 8,
    views: 890,
    likes: 32,
    slug: "modern-javascript-best-practices",
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox layouts, helping you choose the right tool for your design needs.",
    featuredImage:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    author: {
      name: "Mike Johnson",
      avatar: "https://i.pravatar.cc/40?u=mikejohnson",
    },
    category: "CSS",
    publishedAt: "2024-03-10",
    readTime: 6,
    views: 2100,
    likes: 78,
    slug: "css-grid-vs-flexbox",
  },
];

export const BlogGrid = ({
  selectedBlogs = ["1", "2", "3"],
  showAuthor = true,
  showMeta = true,
  showExcerpt = true,
  maxLength = 150,
  itemsToShow = 3,
}: BlogGridProps) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const { openPanel } = usePropertiesPanelStore();

  const handleShowProperties = () => {
    openPanel(
      "BlogCard",
      {
        selectedBlogs,
        showAuthor,
        showMeta,
        showExcerpt,
        maxLength,
        itemsToShow,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: BlogGridProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const handleBlogClick = (slug: string) => {
    console.log(`Navigate to blog: ${slug}`);
  };

  // Filter blogs based on selection
  const displayBlogs = mockBlogs
    .filter((blog) => selectedBlogs.includes(blog.id))
    .slice(0, itemsToShow);

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`w-full relative ${
        selected ? "ring-2 ring-blue-500 ring-offset-2" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayBlogs.map((blog) => (
          <Card
            key={blog.id}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            onClick={() => handleBlogClick(blog.slug)}
          >
            <div className="relative">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Badge className="absolute top-3 left-3 bg-black/80 text-white">
                {blog.category}
              </Badge>
              {showMeta && (
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-white/90 text-gray-700"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    {blog.views?.toLocaleString()}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-white/90 text-gray-700"
                  >
                    <Heart className="w-3 h-3 mr-1" />
                    {blog.likes}
                  </Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4" />
                {formatDate(blog.publishedAt)}
                {showMeta && blog.readTime && (
                  <>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    {blog.readTime} min read
                  </>
                )}
              </div>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
              {showExcerpt && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {truncateText(blog.excerpt, maxLength)}
                </p>
              )}
              {showAuthor && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{blog.author.name}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {displayBlogs.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>
            No blogs selected. Use the properties panel to select blogs to
            display.
          </p>
        </div>
      )}

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="card"
            onEdit={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => {}}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Blog Grid
        </div>
      )}
    </div>
  );
};

// Craft.js configuration
BlogGrid.craft = {
  displayName: "Blog Grid",
  props: {
    selectedBlogs: ["1", "2", "3"],
    showAuthor: true,
    showMeta: true,
    showExcerpt: true,
    maxLength: 150,
    itemsToShow: 3,
  },
};
