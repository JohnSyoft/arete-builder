"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search, X, RefreshCw, MapPin, Phone } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DoctorGridPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

// Mock doctor data for demonstration
const mockDoctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    experience: 12,
    rating: 4.8,
    location: "New York, NY",
    phone: "(555) 123-4567",
    available: true,
    featured: true,
    consultationFee: 200,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    experience: 8,
    rating: 4.6,
    location: "Los Angeles, CA",
    phone: "(555) 234-5678",
    available: false,
    featured: false,
    consultationFee: 250,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrics",
    experience: 15,
    rating: 4.9,
    location: "Chicago, IL",
    phone: "(555) 345-6789",
    available: true,
    featured: true,
    consultationFee: 180,
  },
  {
    id: "4",
    name: "Dr. David Thompson",
    specialization: "Orthopedics",
    experience: 20,
    rating: 4.7,
    location: "Houston, TX",
    phone: "(555) 456-7890",
    available: true,
    featured: false,
    consultationFee: 220,
  },
  {
    id: "5",
    name: "Dr. Lisa Anderson",
    specialization: "Dermatology",
    experience: 10,
    rating: 4.5,
    location: "Miami, FL",
    phone: "(555) 567-8901",
    available: false,
    featured: false,
    consultationFee: 190,
  },
];

export function DoctorGridProperties({
  elementProps,
  onPropChange,
}: DoctorGridPropertiesProps) {
  const {
    selectedDoctors = ["1", "2", "3"],
    showSpecialization = true,
    showExperience = true,
    showRating = true,
    showLocation = true,
    showPhone = true,
    showAvailability = true,
    showFee = true,
    itemsToShow = 3,
  } = elementProps;

  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);

  // Filter doctors based on search, specialization, and availability
  useEffect(() => {
    let filtered = mockDoctors;

    if (searchTerm) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialization
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (specializationFilter !== "all") {
      filtered = filtered.filter(
        (doctor) => doctor.specialization === specializationFilter
      );
    }

    if (availabilityFilter === "available") {
      filtered = filtered.filter((doctor) => doctor.available);
    } else if (availabilityFilter === "unavailable") {
      filtered = filtered.filter((doctor) => !doctor.available);
    }

    setFilteredDoctors(filtered);
  }, [searchTerm, specializationFilter, availabilityFilter]);

  const specializations = Array.from(
    new Set(mockDoctors.map((doctor) => doctor.specialization))
  );

  const handleDoctorToggle = (
    doctorId: string,
    checked: boolean | "indeterminate"
  ) => {
    const isChecked = checked === true;
    const newSelection = isChecked
      ? [...selectedDoctors, doctorId]
      : selectedDoctors.filter((id: string) => id !== doctorId);
    onPropChange("selectedDoctors", newSelection);
  };

  const handleSelectAll = () => {
    const allIds = filteredDoctors.map((doctor) => doctor.id);
    onPropChange("selectedDoctors", allIds);
  };

  const handleDeselectAll = () => {
    onPropChange("selectedDoctors", []);
  };

  const handleRefresh = () => {
    // In a real app, this would refetch from API
    console.log("Refreshing doctor data...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Doctor Grid Properties</h3>
      </div>

      {/* Doctor Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Select Doctors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select
                value={specializationFilter}
                onValueChange={setSpecializationFilter}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Filter by specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  {specializations.map((specialization) => (
                    <SelectItem key={specialization} value={specialization}>
                      {specialization}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={availabilityFilter}
                onValueChange={setAvailabilityFilter}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Doctors</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="unavailable">Unavailable</SelectItem>
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

          {/* Doctor List */}
          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50"
              >
                <Checkbox
                  checked={selectedDoctors.includes(doctor.id)}
                  onCheckedChange={(checked) =>
                    handleDoctorToggle(doctor.id, checked)
                  }
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">
                      {doctor.name}
                    </p>
                    {doctor.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                    <Badge
                      variant={doctor.available ? "default" : "outline"}
                      className={`text-xs ${
                        doctor.available
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {doctor.available ? "Available" : "Busy"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {doctor.specialization}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {doctor.experience} years exp.
                    </span>
                    <span className="text-xs">★ {doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{doctor.phone}</span>
                    </div>
                    <span className="font-semibold">
                      ${doctor.consultationFee}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              <p>No doctors found matching your criteria.</p>
            </div>
          )}

          {/* Selected Count */}
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm text-gray-600">
              {selectedDoctors.length} doctor(s) selected
            </span>
            {selectedDoctors.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPropChange("selectedDoctors", [])}
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

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Show Specialization</Label>
              <Switch
                checked={showSpecialization}
                onCheckedChange={(checked) =>
                  onPropChange("showSpecialization", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Experience</Label>
              <Switch
                checked={showExperience}
                onCheckedChange={(checked) =>
                  onPropChange("showExperience", checked)
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
              <Label>Show Location</Label>
              <Switch
                checked={showLocation}
                onCheckedChange={(checked) =>
                  onPropChange("showLocation", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Phone</Label>
              <Switch
                checked={showPhone}
                onCheckedChange={(checked) =>
                  onPropChange("showPhone", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Availability</Label>
              <Switch
                checked={showAvailability}
                onCheckedChange={(checked) =>
                  onPropChange("showAvailability", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Show Consultation Fee</Label>
              <Switch
                checked={showFee}
                onCheckedChange={(checked) => onPropChange("showFee", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
