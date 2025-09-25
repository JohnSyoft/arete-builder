import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const EbookReviews1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const reviews = [
    {
      name: "Herman Miller",
      company: "ThemeZaa",
      content: "Team of ThemeZaa has worked closely with us and never failed to follow our perfect business requirements.",
      avatar: "https://placehold.co/200x200",
      rating: 5
    },
    {
      name: "Matthew Taylor",
      company: "ThemeZaa",
      content: "I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",
      avatar: "https://placehold.co/200x200",
      rating: 5
    },
    {
      name: "Shoko Mugikura",
      company: "ThemeZaa",
      content: "They have provided superior quality of content marketing services. Very satisfied by choosing them. Thank you so much!",
      avatar: "https://placehold.co/148x148",
      rating: 5
    },
    {
      name: "Leonel Mooney",
      company: "ThemeZaa",
      content: "Trust us we looked for a very long time and wasted thousands of dollars testing other teams and outsource companies.",
      avatar: "https://placehold.co/148x148",
      rating: 5
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
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why you should buy this?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Readers Reviews
          </h2>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.content}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.company}</div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-gray-900 text-white px-4 py-2 rounded flex items-center gap-2">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
            </div>
            <div className="text-gray-900">
              Check all <span className="font-bold">3,583</span> readers reviews on{" "}
              <a href="https://www.amazon.com/" target="_blank" className="text-blue-600 hover:text-blue-800">
                <img src="https://placehold.co/142x70" alt="Amazon" className="inline-block ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

EbookReviews1.craft = {
  displayName: "Ebook Reviews",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};