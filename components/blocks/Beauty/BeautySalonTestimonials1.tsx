import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const BeautySalonTestimonials1 = () => {
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
      name: "Emma causer",
      text: "A wonderfully professional salon, beautiful location and beautifully kept. Great products knowledge.",
      rating: 5,
    },
    {
      name: "Lesley simms",
      text: "Perfection isn't just any other salon. It's a complete cut above the rest. Highly recommended!",
      rating: 5,
    },
    {
      name: "Nickie coombs",
      text: "Perfection should be everyones number one choice to relax and treat yourself or loved ones.",
      rating: 5,
    },
    {
      name: "Bella roberts",
      text: "Dedicated team will do their best to meet your needs and give you your ultimate treatment.",
      rating: 5,
    },
    {
      name: "Herman miller",
      text: "Perfection isn't just any other salon. It's a complete cut above the rest. Wonderfully professional.",
      rating: 5,
    },
    {
      name: "Shoko mugikura",
      text: "Dedicated team will do their best to meet your needs and give you your ultimate treatment.",
      rating: 5,
    },
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* Header */}
          <div className="lg:col-span-1">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
                Testimonial
              </span>
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Our happy beauty lovers.
            </h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-pink-600 font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {testimonial.text}
                      </p>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-pink-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BeautySalonTestimonials1.craft = {
  displayName: "Beauty Salon Testimonials 1",
  props: {},
  related: {
    settings: () => null,
  },
};
