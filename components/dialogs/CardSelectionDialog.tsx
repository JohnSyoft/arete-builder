"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardOption {
  id: string;
  name: string;
  description: string;
  preview: string;
  component: string;
  features: string[];
}

const cardOptions: CardOption[] = [
  {
    id: "cosmetic",
    name: "Cosmetic Card",
    description: "Perfect for beauty, wellness, and luxury brands",
    preview:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    component: "CosmeticCard1",
    features: [
      "Image-focused",
      "Elegant design",
      "Category tags",
      "Author info",
      "Date display",
    ],
  },
  {
    id: "modern",
    name: "Modern Card",
    description: "Clean, professional layout for business content",
    preview:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    component: "ModernCard1",
    features: [
      "Horizontal layout",
      "Read time",
      "Author display",
      "Professional styling",
      "Excerpt preview",
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality Card",
    description: "Designed for hotels, restaurants, and travel",
    preview:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    component: "HospitalityCard1",
    features: [
      "Price display",
      "Rating system",
      "Location info",
      "Booking focused",
      "Rich imagery",
    ],
  },
];

interface CardSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  collectionName: string;
  onCardSelect: (cardComponent: string) => void;
}

export function CardSelectionDialog({
  isOpen,
  onClose,
  collectionName,
  onCardSelect,
}: CardSelectionDialogProps) {
  const [selectedCard, setSelectedCard] = useState<CardOption | null>(null);

  const handleConfirm = () => {
    if (selectedCard) {
      onCardSelect(selectedCard.component);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedCard(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Choose Card Style for {collectionName}</DialogTitle>
          <DialogDescription>
            Select the card layout that best fits your {collectionName}{" "}
            collection. You can customize the appearance later.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          {cardOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedCard?.id === option.id
                  ? "ring-2 ring-blue-500 shadow-lg"
                  : "hover:ring-1 hover:ring-gray-300"
              }`}
              onClick={() => setSelectedCard(option)}
            >
              <CardHeader className="p-0">
                <div className="relative h-32 overflow-hidden rounded-t-lg">
                  <img
                    src={option.preview}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedCard?.id === option.id && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        ✓
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{option.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-3">
                  {option.description}
                </CardDescription>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-700">Features:</p>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {option.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={!selectedCard}>
            Create Index Page with {selectedCard?.name || "Selected Card"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
