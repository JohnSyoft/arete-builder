import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const SpaSalonBenefits1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const benefits = [
    "Increased happiness",
    "Promotes radiant skin",
    "Promotes a better sleep",
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="md:mb-8">
            <img
              src="https://placehold.co/480x630"
              alt="Spa Benefits"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8 md:pl-4">
            <span className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-2 block">
              Benefits of spa
            </span>
            <h3 className="text-4xl lg:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              100% natural and organic products.
            </h3>
            <p className="w-4/5 xl:w-11/12 md:w-full mb-6 text-gray-600 leading-relaxed">
              Everybody is looking for places where to relax and get more energy. Revitalize your senses and refresh your mind.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="border-t border-gray-300 pt-4 pb-4 text-gray-800 text-lg font-medium"
                >
                  {benefit}
                </li>
              ))}
            </ul>

            <Button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 font-medium transition-all duration-300">
              <span className="flex items-center gap-2">
                View treatments
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
