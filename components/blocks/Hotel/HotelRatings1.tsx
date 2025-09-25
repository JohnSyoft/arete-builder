import React from "react";
import { useNode } from "@craftjs/core";
import { Star } from "lucide-react";

export const HotelRatings1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const ratings = [
    { platform: "TripAdvisor", rating: 4.8, reviews: "2,847 reviews" },
    { platform: "Booking.com", rating: 4.9, reviews: "1,523 reviews" },
    { platform: "Google", rating: 4.7, reviews: "892 reviews" },
    { platform: "Expedia", rating: 4.8, reviews: "1,156 reviews" }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-blue-50 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Guest{" "}
            <span className="relative">
              Ratings
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            See what our guests say about their experience at our resort
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ratings.map((rating, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{rating.platform}</h3>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < Math.floor(rating.rating) 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                    }`} 
                  />
                ))}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{rating.rating}</div>
              <p className="text-gray-600 text-sm">{rating.reviews}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};