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
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

interface DoctorPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function DoctorProperties({
  elementProps,
  onPropChange,
}: DoctorPropertiesProps) {
  const [newSpecialty, setNewSpecialty] = useState("");

  const handleSpecialtyAdd = () => {
    if (newSpecialty.trim()) {
      const currentSpecialties = elementProps.specialties || [];
      onPropChange("specialties", [...currentSpecialties, newSpecialty.trim()]);
      setNewSpecialty("");
    }
  };

  const handleSpecialtyRemove = (index: number) => {
    const currentSpecialties = elementProps.specialties || [];
    onPropChange(
      "specialties",
      currentSpecialties.filter((_: any, i: number) => i !== index)
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Doctor Card Properties</h3>

      {/* Basic Information */}
      <div className="space-y-3">
        <div>
          <Label>Doctor Name</Label>
          <Input
            value={elementProps.name || ""}
            onChange={(e) => onPropChange("name", e.target.value)}
            placeholder="Dr. John Smith"
          />
        </div>

        <div>
          <Label>Title/Position</Label>
          <Input
            value={elementProps.title || ""}
            onChange={(e) => onPropChange("title", e.target.value)}
            placeholder="Chief Surgeon"
          />
        </div>

        <div>
          <Label>Bio/Description</Label>
          <Textarea
            value={elementProps.bio || ""}
            onChange={(e) => onPropChange("bio", e.target.value)}
            placeholder="Brief description of the doctor's background and expertise"
            rows={3}
          />
        </div>

        <div>
          <Label>Profile Image URL</Label>
          <Input
            value={elementProps.avatar || ""}
            onChange={(e) => onPropChange("avatar", e.target.value)}
            placeholder="https://example.com/doctor-photo.jpg"
          />
        </div>
      </div>

      {/* Specialties */}
      <div className="space-y-3">
        <Label>Specialties</Label>
        <div className="flex gap-2">
          <Input
            value={newSpecialty}
            onChange={(e) => setNewSpecialty(e.target.value)}
            placeholder="Add specialty"
            onKeyPress={(e) => e.key === "Enter" && handleSpecialtyAdd()}
          />
          <Button onClick={handleSpecialtyAdd} size="sm">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(elementProps.specialties || []).map(
            (specialty: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {specialty}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleSpecialtyRemove(index)}
                />
              </Badge>
            )
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3">
        <div>
          <Label>Phone Number</Label>
          <Input
            value={elementProps.phone || ""}
            onChange={(e) => onPropChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={elementProps.email || ""}
            onChange={(e) => onPropChange("email", e.target.value)}
            placeholder="doctor@hospital.com"
          />
        </div>

        <div>
          <Label>Location</Label>
          <Input
            value={elementProps.location || ""}
            onChange={(e) => onPropChange("location", e.target.value)}
            placeholder="New York, NY"
          />
        </div>
      </div>

      {/* Professional Details */}
      <div className="space-y-3">
        <div>
          <Label>Years of Experience</Label>
          <Input
            type="number"
            value={elementProps.experience || ""}
            onChange={(e) =>
              onPropChange("experience", parseInt(e.target.value) || 0)
            }
            placeholder="15"
          />
        </div>

        <div>
          <Label>Education</Label>
          <Input
            value={elementProps.education || ""}
            onChange={(e) => onPropChange("education", e.target.value)}
            placeholder="Harvard Medical School"
          />
        </div>

        <div>
          <Label>Hospital/Clinic</Label>
          <Input
            value={elementProps.hospital || ""}
            onChange={(e) => onPropChange("hospital", e.target.value)}
            placeholder="General Hospital"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-3">
        <div>
          <Label>Rating (1-5)</Label>
          <Input
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={elementProps.rating || ""}
            onChange={(e) =>
              onPropChange("rating", parseFloat(e.target.value) || 0)
            }
            placeholder="4.8"
          />
        </div>

        <div>
          <Label>Number of Reviews</Label>
          <Input
            type="number"
            value={elementProps.reviewCount || ""}
            onChange={(e) =>
              onPropChange("reviewCount", parseInt(e.target.value) || 0)
            }
            placeholder="150"
          />
        </div>
      </div>

      {/* Display Options */}
      <div className="space-y-3">
        <div>
          <Label>Layout Style</Label>
          <Select
            value={elementProps.layout || "card"}
            onValueChange={(value) => onPropChange("layout", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="list">List</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showSpecialties !== false}
            onCheckedChange={(checked) =>
              onPropChange("showSpecialties", checked)
            }
          />
          <Label>Show Specialties</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showContact !== false}
            onCheckedChange={(checked) => onPropChange("showContact", checked)}
          />
          <Label>Show Contact Info</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showRating !== false}
            onCheckedChange={(checked) => onPropChange("showRating", checked)}
          />
          <Label>Show Rating</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showBooking !== false}
            onCheckedChange={(checked) => onPropChange("showBooking", checked)}
          />
          <Label>Show Booking Button</Label>
        </div>
      </div>
    </div>
  );
}
