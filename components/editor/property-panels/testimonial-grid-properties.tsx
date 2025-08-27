"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search, X, RefreshCw, Star, Shield } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TestimonialGridPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

// Mock testimonial data for demonstration
const mockTestimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "This service completely transformed our business operations. The team's expertise and dedication are unmatched.",
    rating: 5,
    verified: true,
    featured: true,
    category: "Business",
    date: "2024-03-15",
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    content:
      "Outstanding results and professional service. Would highly recommend to anyone looking for quality work.",
    rating: 4,
    verified: true,
    featured: false,
    category: "Marketing",
    date: "2024-03-12",
  },
  {
    id: "3",
    name: "David Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    content:
      "The attention to detail and customer service exceeded our expectations. Truly a game-changer for our product.",
    rating: 5,
    verified: false,
    featured: true,
    category: "Product",
    date: "2024-03-10",
  },
  {
    id: "4",
    name: "Sarah Thompson",
    role: "Freelancer",
    company: "Independent",
    content:
      "Professional, reliable, and delivers exactly what they promise. My go-to choice for all projects.",
    rating: 4,
    verified: true,
    featured: false,
    category: "Freelance",
    date: "2024-03-08",
  },
  {
    id: "5",
    name: "Michael Brown",
    role: "CTO",
    company: "Enterprise Solutions",
    content:
      "Exceptional technical expertise and project management. Delivered on time and within budget.",
    rating: 5,
    verified: true,
    featured: true,
    category: "Technology",
    date: "2024-03-05",
  },
];

export function TestimonialGridProperties({
  elementProps,
  onPropChange,
}: TestimonialGridPropertiesProps) {
  const {
    selectedTestimonials = ["1", "2", "3"],
    showRating = true,
    showRole = true,
    showCompany = true,
    showVerification = true,
    showDate = false,
    maxLength = 200,
    itemsToShow = 3,
  } = elementProps;

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [filteredTestimonials, setFilteredTestimonials] =
    useState(mockTestimonials);

  // Filter testimonials based on search, category, rating, and verification
  useEffect(() => {
    let filtered = mockTestimonials;

    if (searchTerm) {
      filtered = filtered.filter(
        (testimonial) =>
          testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          testimonial.company
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          testimonial.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (testimonial) => testimonial.category === categoryFilter
      );
    }

    if (ratingFilter !== "all") {
      const minRating = parseInt(ratingFilter);
      filtered = filtered.filter(
        (testimonial) => testimonial.rating >= minRating
      );
    }

    if (verificationFilter === "verified") {
      filtered = filtered.filter((testimonial) => testimonial.verified);
    } else if (verificationFilter === "unverified") {
      filtered = filtered.filter((testimonial) => !testimonial.verified);
    }

    setFilteredTestimonials(filtered);
  }, [searchTerm, categoryFilter, ratingFilter, verificationFilter]);

  const categories = Array.from(
    new Set(mockTestimonials.map((testimonial) => testimonial.category))
  );

  const handleTestimonialToggle = (
    testimonialId: string,
    checked: boolean | "indeterminate"
  ) => {
    const isChecked = checked === true;
    const newSelection = isChecked
      ? [...selectedTestimonials, testimonialId]
      : selectedTestimonials.filter((id: string) => id !== testimonialId);
    onPropChange("selectedTestimonials", newSelection);
  };

  const handleSelectAll = () => {
    const allIds = filteredTestimonials.map((testimonial) => testimonial.id);
    onPropChange("selectedTestimonials", allIds);
  };

  const handleDeselectAll = () => {
    onPropChange("selectedTestimonials", []);
  };

  const handleRefresh = () => {
    // In a real app, this would refetch from API
    console.log("Refreshing testimonial data...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Testimonial Grid Properties
        </h3>
      </div>

      {/* Testimonial Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Select Testimonials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search testimonials..."
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

              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Min rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={verificationFilter}
                onValueChange={setVerificationFilter}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Verification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="verified">Verified Only</SelectItem>
                  <SelectItem value="unverified">Unverified</SelectItem>
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

          {/* Testimonial List */}
          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50"
              >
                <Checkbox
                  checked={selectedTestimonials.includes(testimonial.id)}
                  onCheckedChange={(checked) =>
                    handleTestimonialToggle(testimonial.id, checked)
                  }
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">
                      {testimonial.name}
                    </p>
                    {testimonial.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                    {testimonial.verified && (
                      <Badge
                        variant="default"
                        className="text-xs bg-green-100 text-green-800"
                      >
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.category}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              <p>No testimonials found matching your criteria.</p>
            </div>
          )}

          {/* Selected Count */}
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm text-gray-600">
              {selectedTestimonials.length} testimonial(s) selected
            </span>
            {selectedTestimonials.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPropChange("selectedTestimonials", [])}
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
            <Label>Max Content Length</Label>
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
              <Label>Show Rating</Label>
              <Switch
                checked={showRating}
                onCheckedChange={(checked) =>
                  onPropChange("showRating", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Role</Label>
              <Switch
                checked={showRole}
                onCheckedChange={(checked) => onPropChange("showRole", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Company</Label>
              <Switch
                checked={showCompany}
                onCheckedChange={(checked) =>
                  onPropChange("showCompany", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Verification</Label>
              <Switch
                checked={showVerification}
                onCheckedChange={(checked) =>
                  onPropChange("showVerification", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Date</Label>
              <Switch
                checked={showDate}
                onCheckedChange={(checked) => onPropChange("showDate", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
