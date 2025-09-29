import React, { useState } from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
  thumbImage: string;
}

interface RestaurantTestimonials1Props {
  testimonials?: Testimonial[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantTestimonials1({
  testimonials = [
    {
      quote: "Food for us comes from our relatives whether they have wings or fins or roots that is how we consider food has a culture It has history it has a story it has relationships.",
      author: "Herman miller",
      avatar: "https://placehold.co/148x148/FFFFFF/333333?text=Avatar",
      thumbImage: "https://placehold.co/210x210/FFFFFF/333333?text=Thumb"
    },
    {
      quote: "It was a lovely place with great ambience. Loved the service of the staff. The dishes are priced very high as compared to the quality. Thank you so much to all staff.",
      author: "Matthew taylor",
      avatar: "https://placehold.co/148x148/FFFFFF/333333?text=Avatar",
      thumbImage: "https://placehold.co/148x148/FFFFFF/333333?text=Thumb"
    },
    {
      quote: "Good communication and the food was great the facilities were good. Love the desserts and there way of presenting. We came here for a family dinner and this place won my heart.",
      author: "Leonel mooney",
      avatar: "https://placehold.co/148x148/FFFFFF/333333?text=Avatar",
      thumbImage: "https://placehold.co/200x200/FFFFFF/333333?text=Thumb"
    }
  ],
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantTestimonials1Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Element id="restaurant-testimonials-container" is={Section} canvas>
      <Element
        id="restaurant-testimonials-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16 lg:py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full xl:w-1/2 lg:w-2/3 md:w-4/5">
              <div className="relative">
                {/* Testimonial Content */}
                <div className="text-center">
                  <div className="mb-8">
                    <Element
                      id={`restaurant-testimonial-avatar-${currentSlide}`}
                      is={Image}
                      src={testimonials[currentSlide]?.avatar}
                      alt={testimonials[currentSlide]?.author}
                      width="w-24"
                      height="h-24"
                      borderRadius="rounded-full"
                      className="mx-auto mb-8"
                    />
                  </div>
                  
                  <Element
                    id={`restaurant-testimonial-quote-${currentSlide}`}
                    is={Text}
                    text={`"${testimonials[currentSlide]?.quote}"`}
                    tagName="h4"
                    fontSize="text-2xl lg:text-xl"
                    fontWeight="font-medium"
                    color="text-gray-800"
                    className="leading-relaxed mb-4"
                  />
                  
                  <Element
                    id={`restaurant-testimonial-author-${currentSlide}`}
                    is={Text}
                    text={testimonials[currentSlide]?.author}
                    tagName="span"
                    fontSize="text-xl"
                    fontWeight="font-medium"
                    color="text-red-600"
                    className="block"
                  />
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-red-600 scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <i className="text-gray-600">←</i>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <i className="text-gray-600">→</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
}

RestaurantTestimonials1.craft = {
  displayName: "Restaurant Testimonials 1",
  props: {
    testimonials: [
      {
        quote: "Food for us comes from our relatives whether they have wings or fins or roots that is how we consider food has a culture It has history it has a story it has relationships.",
        author: "Herman miller",
        avatar: "https://placehold.co/148x148/FFFFFF/333333?text=Avatar",
        thumbImage: "https://placehold.co/210x210/FFFFFF/333333?text=Thumb"
      },
      {
        quote: "It was a lovely place with great ambience. Loved the service of the staff. The dishes are priced very high as compared to the quality. Thank you so much to all staff.",
        author: "Matthew taylor",
        avatar: "https://placehold.co/148x148/FFFFFF/333333?text=Avatar",
        thumbImage: "https://placehold.co/148x148/FFFFFF/333333?text=Thumb"
      },
      {
        quote: "Good communication and the food was great the facilities were good. Love the desserts and there way of presenting. We came here for a family dinner and this place won my heart.",
        author: "Leonel mooney",
        avatar: "https://placehold.co/148x148/FFFFFF/333333?text=Avatar",
        thumbImage: "https://placehold.co/200x200/FFFFFF/333333?text=Thumb"
      }
    ],
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
