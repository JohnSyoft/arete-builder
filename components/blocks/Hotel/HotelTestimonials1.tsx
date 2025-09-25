import React from "react";
import { useNode } from "@craftjs/core";
import { Star, Quote } from "lucide-react";

export const HotelTestimonials1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const testimonials = [
    {
      text: "Absolutely amazing experience! The staff was incredibly friendly and the room was perfect. The view from our balcony was breathtaking. We'll definitely be back!",
      author: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      image: "https://placehold.co/80x80"
    },
    {
      text: "This resort exceeded all our expectations. The service was impeccable, the facilities were top-notch, and the location was perfect for our family vacation.",
      author: "Michael Chen",
      location: "London, UK",
      rating: 5,
      image: "https://placehold.co/80x80"
    },
    {
      text: "A truly luxurious experience from start to finish. The attention to detail in every aspect of our stay was remarkable. Highly recommended!",
      author: "Emma Williams",
      location: "Sydney, Australia",
      rating: 5,
      image: "https://placehold.co/80x80"
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-gray-50 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Guest{" "}
            <span className="relative">
              Reviews
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our guests have to say about their unforgettable experiences at our resort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};