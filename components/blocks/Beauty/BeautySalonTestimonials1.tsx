import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Icon } from "../Basic/Icon";

export const BeautySalonTestimonials1 = () => {
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
    <Element id="beauty-salon-testimonials-container" is={Section} canvas>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 items-start">
            {/* Header */}
            <Element id="beauty-salon-testimonials-header" is={Box} className="lg:col-span-1">
              <Element id="beauty-salon-testimonials-badge" is={Box} className="inline-block mb-4">
                <Element
                  id="beauty-salon-testimonials-badge-text"
                  is={Text}
                  text="Testimonial"
                  className="text-sm font-bold text-pink-600 uppercase tracking-wider"
                />
              </Element>
              <Element
                id="beauty-salon-testimonials-title"
                is={Text}
                text="Our happy beauty lovers."
                className="text-3xl font-light text-gray-900 mb-8"
              />
              <Element id="beauty-salon-testimonials-navigation" is={Box} className="flex gap-2">
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <Element
                    id="beauty-salon-testimonials-prev-button"
                    is={Icon}
                    icon="chevron-left"
                    className="w-5 h-5 text-gray-600"
                  />
                </button>
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <Element
                    id="beauty-salon-testimonials-next-button"
                    is={Icon}
                    icon="chevron-right"
                    className="w-5 h-5 text-gray-600"
                  />
                </button>
              </Element>
            </Element>

            {/* Testimonials Grid */}
            <Element id="beauty-salon-testimonials-grid" is={Box} className="lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Element
                    key={index}
                    id={`beauty-salon-testimonial-${index}`}
                    is={Box}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Element id={`beauty-salon-testimonial-avatar-${index}`} is={Box} className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                          <Element
                            id={`beauty-salon-testimonial-avatar-text-${index}`}
                            is={Text}
                            text={testimonial.name.charAt(0)}
                            className="text-pink-600 font-bold text-sm"
                          />
                        </div>
                      </Element>
                      <Element id={`beauty-salon-testimonial-content-${index}`} is={Box} className="flex-1">
                        <Element
                          id={`beauty-salon-testimonial-name-${index}`}
                          is={Text}
                          text={testimonial.name}
                          className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2"
                        />
                        <Element
                          id={`beauty-salon-testimonial-text-${index}`}
                          is={Text}
                          text={testimonial.text}
                          className="text-gray-600 text-sm leading-relaxed mb-3"
                        />
                        <Element id={`beauty-salon-testimonial-rating-${index}`} is={Box} className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Element
                              key={i}
                              id={`beauty-salon-testimonial-star-${index}-${i}`}
                              is={Icon}
                              icon="star"
                              className="w-4 h-4 text-pink-500 fill-current"
                            />
                          ))}
                        </Element>
                      </Element>
                    </div>
                  </Element>
                ))}
              </div>
            </Element>
          </div>
        </div>
      </div>
    </Element>
  );
};

BeautySalonTestimonials1.craft = {
  displayName: "Beauty Salon Testimonials 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
