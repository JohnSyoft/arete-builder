import React from "react";
import { useNode } from "@craftjs/core";
import { Star } from "lucide-react";

export const BarberTestimonials1 = () => {
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
      text: "The Barbers is an affordable, convenient and good quality place to get my hair cut. It is a friendly, laid back environment with great professionals. It is also friendly for all ages from kids to adults!",
      author: "Herman Miller",
      location: "Switzerland",
      rating: 5
    },
    {
      text: "Excellent service and attention to detail. The barbers here really know their craft and take pride in their work. I've been coming here for years and always leave satisfied.",
      author: "James Wilson",
      location: "London",
      rating: 5
    },
    {
      text: "Professional service with a personal touch. The atmosphere is welcoming and the barbers are skilled professionals who listen to what you want and deliver exactly that.",
      author: "Michael Brown",
      location: "Manchester",
      rating: 5
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-yellow-200 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Satisfied{" "}
            <span className="relative">
              customers
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
            </span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                "{testimonials[0].text}"
              </blockquote>
              <div className="text-gray-800 font-semibold">
                {testimonials[0].author} - {testimonials[0].location}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="text-gray-800 font-semibold text-sm">
                  {testimonial.author} - {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};