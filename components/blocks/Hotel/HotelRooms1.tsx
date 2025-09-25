import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const HotelRooms1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const rooms = [
    {
      image: "https://placehold.co/400x300",
      title: "Superior Room",
      price: "$199",
      description: "Comfortable and elegant room with modern amenities",
      features: ["King Size Bed", "City View", "Free WiFi", "Mini Bar"],
      rating: 4.8
    },
    {
      image: "https://placehold.co/400x300",
      title: "Deluxe Room",
      price: "$249",
      description: "Spacious room with premium furnishings and services",
      features: ["Queen Size Bed", "Ocean View", "Free WiFi", "Room Service"],
      rating: 4.9
    },
    {
      image: "https://placehold.co/400x300",
      title: "Signature Room",
      price: "$300",
      description: "Luxury room with exclusive amenities and personalized service",
      features: ["King Size Bed", "Balcony", "Butler Service", "Premium Amenities"],
      rating: 5.0
    },
    {
      image: "https://placehold.co/400x300",
      title: "Luxury Suite",
      price: "$350",
      description: "Ultimate luxury with separate living and bedroom areas",
      features: ["Separate Living Room", "Private Balcony", "24/7 Butler", "Premium Views"],
      rating: 5.0
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-white py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Our{" "}
            <span className="relative">
              Rooms
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed rooms and suites, each offering unique comfort and luxury.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">{room.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{room.title}</h3>
                  <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
                
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};