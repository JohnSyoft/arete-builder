import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface TestimonialItem {
  name: string;
  company: string;
  text: string;
  image: string;
  rating: number;
}

interface MarketingTestimonials1Props {
  title?: string;
  subtitle?: string;
  rating?: string;
  testimonials?: TestimonialItem[];
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingTestimonials1({
  title = "25,000+ Happy customers",
  subtitle = "2,488 Rating",
  rating = "2,488",
  testimonials = [
    {
      name: "Herman Miller",
      company: "ThemeZaa",
      text: "Team of ThemeZaa has worked closely with us and never failed to follow our perfect business requirements.",
      image: "https://placehold.co/200x200/4A90E2/FFFFFF?text=HM",
      rating: 5,
    },
    {
      name: "Matthew Taylor",
      company: "LinkSture",
      text: "I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",
      image: "https://placehold.co/200x200/87CEEB/FFFFFF?text=MT",
      rating: 5,
    },
    {
      name: "Shoko Mugikura",
      company: "Google",
      text: "They have provided superior quality of content marketing services. Very satisfied by choosing them. Thank you so much!",
      image: "https://placehold.co/200x200/98FB98/FFFFFF?text=SM",
      rating: 5,
    },
    {
      name: "Leonel Mooney",
      company: "Apple",
      text: "Trust us we looked for a very long time and wasted thousands of dollars testing other teams and outsource companies.",
      image: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=LM",
      rating: 5,
    },
  ],
  ctaText = "Let's make something great work together. Got a project in mind?",
  ctaLink = "#",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: MarketingTestimonials1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      minWidth={300}
      minHeight={400}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Header Stats */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
            <div className="text-center lg:text-right mb-6 lg:mb-0">
              <h6 className="text-xl font-semibold text-gray-800">{title}</h6>
            </div>
            
            <div className="text-center mb-6 lg:mb-0">
              <img
                src="https://placehold.co/140x132/4A90E2/FFFFFF?text=Logo"
                alt="Logo"
                className="mx-auto"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-xl"></i>
                  ))}
                </div>
                <h6 className="text-xl font-semibold text-gray-800">
                  <span className="underline font-bold">{rating}</span> Rating
                </h6>
              </div>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  {/* Testimonial Content */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {testimonial.name}, {testimonial.company}
                      </span>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg mb-4">
              <span className="text-sm font-bold text-gray-800 uppercase">Hurray</span>
            </div>
            <div className="text-lg text-gray-800">
              {ctaText.split("Got a project in mind?").map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <a
                      href={ctaLink}
                      className="text-gray-800 hover:text-blue-600 font-semibold underline ml-1"
                    >
                      Got a project in mind?
                    </a>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingTestimonials1.craft = {
  displayName: "Marketing Testimonials 1",
  props: {
    title: "25,000+ Happy customers",
    subtitle: "2,488 Rating",
    rating: "2,488",
    testimonials: [
      {
        name: "Herman Miller",
        company: "ThemeZaa",
        text: "Team of ThemeZaa has worked closely with us and never failed to follow our perfect business requirements.",
        image: "https://placehold.co/200x200/4A90E2/FFFFFF?text=HM",
        rating: 5,
      },
      {
        name: "Matthew Taylor",
        company: "LinkSture",
        text: "I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",
        image: "https://placehold.co/200x200/87CEEB/FFFFFF?text=MT",
        rating: 5,
      },
      {
        name: "Shoko Mugikura",
        company: "Google",
        text: "They have provided superior quality of content marketing services. Very satisfied by choosing them. Thank you so much!",
        image: "https://placehold.co/200x200/98FB98/FFFFFF?text=SM",
        rating: 5,
      },
      {
        name: "Leonel Mooney",
        company: "Apple",
        text: "Trust us we looked for a very long time and wasted thousands of dollars testing other teams and outsource companies.",
        image: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=LM",
        rating: 5,
      },
    ],
    ctaText: "Let's make something great work together. Got a project in mind?",
    ctaLink: "#",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

