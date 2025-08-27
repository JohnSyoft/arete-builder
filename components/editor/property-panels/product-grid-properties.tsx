"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search, X, RefreshCw, DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductGridPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

// Mock product data for demonstration
const mockProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    brand: "TechBrand",
    rating: 4.5,
    stock: 25,
    featured: true,
    onSale: true,
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    price: 449.99,
    originalPrice: null,
    category: "Furniture",
    brand: "ComfortCo",
    rating: 4.2,
    stock: 12,
    featured: false,
    onSale: false,
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    category: "Electronics",
    brand: "FitTech",
    rating: 4.7,
    stock: 0,
    featured: true,
    onSale: true,
  },
  {
    id: "4",
    name: "Organic Coffee Beans (1kg)",
    price: 24.99,
    originalPrice: null,
    category: "Food & Beverage",
    brand: "BrewMaster",
    rating: 4.8,
    stock: 150,
    featured: false,
    onSale: false,
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    price: 1299.99,
    originalPrice: 1499.99,
    category: "Photography",
    brand: "LensCraft",
    rating: 4.9,
    stock: 5,
    featured: true,
    onSale: true,
  },
];

export function ProductGridProperties({
  elementProps,
  onPropChange,
}: ProductGridPropertiesProps) {
  const {
    selectedProducts = ["1", "2", "3"],
    showPrice = true,
    showRating = true,
    showStock = true,
    showBrand = true,
    showSalePrice = true,
    itemsToShow = 3,
    priceFormat = "currency",
  } = elementProps;

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // Filter products based on search, category, and stock
  useEffect(() => {
    let filtered = mockProducts;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    if (stockFilter === "inStock") {
      filtered = filtered.filter((product) => product.stock > 0);
    } else if (stockFilter === "outOfStock") {
      filtered = filtered.filter((product) => product.stock === 0);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, stockFilter]);

  const categories = Array.from(
    new Set(mockProducts.map((product) => product.category))
  );

  const handleProductToggle = (
    productId: string,
    checked: boolean | "indeterminate"
  ) => {
    const isChecked = checked === true;
    const newSelection = isChecked
      ? [...selectedProducts, productId]
      : selectedProducts.filter((id: string) => id !== productId);
    onPropChange("selectedProducts", newSelection);
  };

  const handleSelectAll = () => {
    const allIds = filteredProducts.map((product) => product.id);
    onPropChange("selectedProducts", allIds);
  };

  const handleDeselectAll = () => {
    onPropChange("selectedProducts", []);
  };

  const handleRefresh = () => {
    // In a real app, this would refetch from API
    console.log("Refreshing product data...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Grid Properties</h3>
      </div>

      {/* Product Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Select Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
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

              <Select value={stockFilter} onValueChange={setStockFilter}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Stock status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stock</SelectItem>
                  <SelectItem value="inStock">In Stock</SelectItem>
                  <SelectItem value="outOfStock">Out of Stock</SelectItem>
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

          {/* Product List */}
          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50"
              >
                <Checkbox
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={(checked) =>
                    handleProductToggle(product.id, checked)
                  }
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">
                      {product.name}
                    </p>
                    {product.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                    {product.onSale && (
                      <Badge variant="destructive" className="text-xs">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-sm font-semibold">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs">★ {product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      by {product.brand}
                    </span>
                    <span
                      className={`text-xs ${
                        product.stock > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              <p>No products found matching your criteria.</p>
            </div>
          )}

          {/* Selected Count */}
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm text-gray-600">
              {selectedProducts.length} product(s) selected
            </span>
            {selectedProducts.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPropChange("selectedProducts", [])}
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
            <Label>Price Format</Label>
            <Select
              value={priceFormat}
              onValueChange={(value) => onPropChange("priceFormat", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="currency">Currency ($99.99)</SelectItem>
                <SelectItem value="compact">Compact (99.99)</SelectItem>
                <SelectItem value="rounded">Rounded ($100)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Show Price</Label>
              <Switch
                checked={showPrice}
                onCheckedChange={(checked) =>
                  onPropChange("showPrice", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Sale Price</Label>
              <Switch
                checked={showSalePrice}
                onCheckedChange={(checked) =>
                  onPropChange("showSalePrice", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Rating</Label>
              <Switch
                checked={showRating}
                onCheckedChange={(checked) =>
                  onPropChange("showRating", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Stock</Label>
              <Switch
                checked={showStock}
                onCheckedChange={(checked) =>
                  onPropChange("showStock", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Brand</Label>
              <Switch
                checked={showBrand}
                onCheckedChange={(checked) =>
                  onPropChange("showBrand", checked)
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
