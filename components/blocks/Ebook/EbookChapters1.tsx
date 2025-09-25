import React, { useState } from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ShoppingBag, Star } from "lucide-react";

export const EbookChapters1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: "Basic elements of fashion",
      description: "Basic elements of design in fashion include lines, shapes, form, colour, and texture, whereas the primary principles."
    },
    {
      title: "Textile simple wet processing",
      description: "Basic elements of design in fashion include lines, shapes, form, colour, and texture, whereas the primary principles."
    },
    {
      title: "Fashion design art and colors",
      description: "Basic elements of design in fashion include lines, shapes, form, colour, and texture, whereas the primary principles."
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Chapters we've covered
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Chapters inside
            </h2>
            
            {/* Accordion */}
            <div className="space-y-4 mb-8">
              {chapters.map((chapter, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveChapter(activeChapter === index ? -1 : index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900">{chapter.title}</span>
                    {activeChapter === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {activeChapter === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{chapter.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-6">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Purchase now!
                </span>
              </Button>
              
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <Button variant="link" className="text-gray-600 hover:text-gray-900">
                  Readers saying?
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Content - Book Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://placehold.co/600x400" 
                alt="Book Chapters" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EbookChapters1.craft = {
  displayName: "Ebook Chapters",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};