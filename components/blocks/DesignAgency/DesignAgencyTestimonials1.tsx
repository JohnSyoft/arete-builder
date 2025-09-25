import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export const DesignAgencyTestimonials1 = () => {
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
      author: "@ Herman miller",
      text: "From the day one, Themezaa has delivered all possible outcomes as demanded. I must say that all the developers are dedicated.",
    },
    {
      author: "@ Shoko mugikura",
      text: "Being an educator, I always thrive for my own blog and so I found Themezaa as my saviour. They have superior quality of marketing services.",
    },
    {
      author: "@ Matthew taylor",
      text: "Worked closely with us and never failed to follow our business requirements. We must recommend these guys as they are passionate to deliver.",
    },
    {
      author: "@ Leonel mooney",
      text: "There are design companies and then there are user experience, design, consulting, interface design. Simply the great designs and best theme.",
    },
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="xl:mb-0 xs:mb-8">
            <span className="text-gray-800 font-bold text-sm mb-5 uppercase block">
              <span className="text-red-500">♥</span> Around the globe
            </span>
            <h1 className="text-4xl font-bold text-gray-800 mb-0 leading-tight">
              Hear from clients.
            </h1>
          </div>

          {/* Right Column - Testimonials */}
          <div className="outside-box-right-35 xs:outside-box-right-0">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="last:mb-0">
                  <span className="text-sm font-semibold uppercase mb-2 block text-gray-600">
                    {testimonial.author}
                  </span>
                  <p className="text-xl leading-9 text-gray-800 w-11/12 lg:w-full">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation and Rating */}
            <div className="mt-12">
              <div className="border-t border-gray-300 pt-12 mt-12 xs:mt-8 xs:pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Navigation */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="flex gap-2">
                      <button className="w-16 h-16 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button className="w-16 h-16 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center sm:justify-end xs:mt-8">
                    <div className="text-6xl font-bold text-gray-800 me-4">
                      4.82
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full px-5 py-2 text-sm font-semibold mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-800 text-sm font-bold uppercase">
                        Clutch review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
