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

interface ProductPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function ProductProperties({
  elementProps,
  onPropChange,
}: ProductPropertiesProps) {
  const {
    name = "Premium Wireless Headphones",
    shortDescription = "High-quality wireless headphones with noise cancellation.",
    images = [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
        alt: "Premium Wireless Headphones",
        isPrimary: true,
      },
    ],
    price = { regular: 299.99, sale: 249.99, currency: "USD" },
    category = "Electronics",
    rating = { average: 4.5, count: 128 },
    inventory = { stock: 15, sku: "PWH-001" },
    slug = "premium-wireless-headphones",
    featured = false,
    layout = "card",
    showRating = true,
    showStock = true,
    showQuickActions = true,
  } = elementProps;

  const primaryImage = images.find((img: any) => img.isPrimary) || images[0];

  return (
    <div className="space-y-6">
      {/* Product Information */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Product Information
        </h3>

        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => onPropChange("name", e.target.value)}
            placeholder="Product name"
          />
        </div>

        <div>
          <Label htmlFor="shortDescription">Description</Label>
          <Textarea
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => onPropChange("shortDescription", e.target.value)}
            placeholder="Product description"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => onPropChange("category", e.target.value)}
            placeholder="Product category"
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

      {/* Images */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Product Images
        </h3>

        <div>
          <Label htmlFor="primaryImageUrl">Primary Image URL</Label>
          <Input
            id="primaryImageUrl"
            value={primaryImage?.url || ""}
            onChange={(e) => {
              const updatedImages = images.map((img: any) =>
                img.isPrimary ? { ...img, url: e.target.value } : img
              );
              onPropChange("images", updatedImages);
            }}
            placeholder="https://..."
          />
        </div>

        <div>
          <Label htmlFor="imageAlt">Image Alt Text</Label>
          <Input
            id="imageAlt"
            value={primaryImage?.alt || ""}
            onChange={(e) => {
              const updatedImages = images.map((img: any) =>
                img.isPrimary ? { ...img, alt: e.target.value } : img
              );
              onPropChange("images", updatedImages);
            }}
            placeholder="Image description"
          />
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Pricing
        </h3>

        <div>
          <Label htmlFor="regularPrice">Regular Price</Label>
          <Input
            id="regularPrice"
            type="number"
            step="0.01"
            value={price.regular}
            onChange={(e) =>
              onPropChange("price", {
                ...price,
                regular: parseFloat(e.target.value),
              })
            }
            min="0"
          />
        </div>

        <div>
          <Label htmlFor="salePrice">Sale Price (Optional)</Label>
          <Input
            id="salePrice"
            type="number"
            step="0.01"
            value={price.sale || ""}
            onChange={(e) =>
              onPropChange("price", {
                ...price,
                sale: e.target.value ? parseFloat(e.target.value) : undefined,
              })
            }
            min="0"
          />
        </div>

        <div>
          <Label htmlFor="currency">Currency</Label>
          <Select
            value={price.currency}
            onValueChange={(value) =>
              onPropChange("price", { ...price, currency: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD ($)</SelectItem>
              <SelectItem value="EUR">EUR (€)</SelectItem>
              <SelectItem value="GBP">GBP (£)</SelectItem>
              <SelectItem value="JPY">JPY (¥)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Inventory */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Inventory
        </h3>

        <div>
          <Label htmlFor="sku">SKU</Label>
          <Input
            id="sku"
            value={inventory.sku}
            onChange={(e) =>
              onPropChange("inventory", { ...inventory, sku: e.target.value })
            }
            placeholder="Product SKU"
          />
        </div>

        <div>
          <Label htmlFor="stock">Stock Quantity</Label>
          <Input
            id="stock"
            type="number"
            value={inventory.stock}
            onChange={(e) =>
              onPropChange("inventory", {
                ...inventory,
                stock: parseInt(e.target.value),
              })
            }
            min="0"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Reviews & Rating
        </h3>

        <div>
          <Label htmlFor="averageRating">Average Rating</Label>
          <Input
            id="averageRating"
            type="number"
            step="0.1"
            value={rating.average}
            onChange={(e) =>
              onPropChange("rating", {
                ...rating,
                average: parseFloat(e.target.value),
              })
            }
            min="0"
            max="5"
          />
        </div>

        <div>
          <Label htmlFor="reviewCount">Review Count</Label>
          <Input
            id="reviewCount"
            type="number"
            value={rating.count}
            onChange={(e) =>
              onPropChange("rating", {
                ...rating,
                count: parseInt(e.target.value),
              })
            }
            min="0"
          />
        </div>
      </div>

      {/* Display Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Display Settings
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
          <Label htmlFor="featured">Featured Product</Label>
          <Switch
            id="featured"
            checked={featured}
            onCheckedChange={(checked) => onPropChange("featured", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showRating">Show Rating</Label>
          <Switch
            id="showRating"
            checked={showRating}
            onCheckedChange={(checked) => onPropChange("showRating", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showStock">Show Stock</Label>
          <Switch
            id="showStock"
            checked={showStock}
            onCheckedChange={(checked) => onPropChange("showStock", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showQuickActions">Show Quick Actions</Label>
          <Switch
            id="showQuickActions"
            checked={showQuickActions}
            onCheckedChange={(checked) =>
              onPropChange("showQuickActions", checked)
            }
          />
        </div>
      </div>

      {/* Data Connection */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Data Connection
        </h3>
        <p className="text-sm text-gray-600">
          Connect this component to your product data source.
        </p>
        <Button variant="outline" className="w-full">
          Connect to Product API
        </Button>
      </div>
    </div>
  );
}
