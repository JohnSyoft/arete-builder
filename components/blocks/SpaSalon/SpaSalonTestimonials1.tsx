import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SpaSalonTestimonials1 = () => {
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
      text: "The wonderful services you offer locally are great for our community. People are tired of having to travel out of town for things.",
      author: "Jonsan donner",
      service: "Relax massage",
    },
    {
      text: "This place is beautiful. The outside, the inside, staff communication is all on point! The staff is very friendly, informative and patient.",
      author: "Lauren cruikshank",
      service: "Relax massage",
    },
    {
      text: "The ambiance as soon as you enter puts you at ease immediately. The staff is so sweet and generous and the services they offer are to die for!",
      author: "Rosemary downing",
      service: "Scalp massage",
    },
  ];

  const clients = [
    "https://placehold.co/165x205",
    "https://placehold.co/165x205",
    "https://placehold.co/165x205",
    "https://placehold.co/165x205",
    "https://placehold.co/165x205",
    "https://placehold.co/165x205",
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h6 className="text-2xl leading-10 text-gray-800 mb-5 font-medium">
              {testimonials[0].text}
            </h6>
            <div className="mb-8">
              <span className="text-sm text-blue-600 font-medium uppercase tracking-wider block mb-1">
                {testimonials[0].author}
              </span>
              <span className="text-sm text-gray-800 font-medium uppercase tracking-wider">
                {testimonials[0].service}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <button className="text-sm uppercase text-gray-800 font-medium hover:text-blue-600 transition-colors">
                prev
              </button>
              <button className="text-sm uppercase text-gray-800 font-medium hover:text-blue-600 transition-colors">
                next
              </button>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 gap-8 text-center">
          {clients.map((client, index) => (
            <div key={index} className="md:mb-8">
              <div className="hover:opacity-70 transition-opacity">
                <a href="#">
                  <img
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="h-28 mx-auto"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
