import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";

export const BeautySalonProcess1 = () => {
  const steps = [
    {
      number: "01",
      title: "Excellent care",
      description: "No compromises",
    },
    {
      number: "02", 
      title: "Cruelty free",
      description: "No tested on animals",
    },
    {
      number: "03",
      title: "Certified experts", 
      description: "Professional people",
    },
  ];

  return (
    <Element id="beauty-salon-process-container" is={Section} canvas>
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Element
                key={index}
                id={`beauty-salon-process-step-${index}`}
                is={Box}
                className={`flex items-start gap-4 ${
                  index < steps.length - 1 ? "md:border-r border-gray-200" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Element
                    id={`beauty-salon-process-step-${index}-number`}
                    is={Text}
                    text={step.number}
                    className="text-2xl font-bold text-gray-900"
                  />
                  <div className="w-5 h-0.5 bg-pink-500"></div>
                </div>
                <div className="space-y-1">
                  <Element
                    id={`beauty-salon-process-step-${index}-title`}
                    is={Text}
                    text={step.title}
                    className="text-xl font-medium text-gray-900"
                  />
                  <Element
                    id={`beauty-salon-process-step-${index}-description`}
                    is={Text}
                    text={step.description}
                    className="text-gray-600"
                  />
                </div>
              </Element>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

BeautySalonProcess1.craft = {
  displayName: "Beauty Salon Process 1",
  props: {},
  isCanvas: true,
  related: {
    settings: () => null,
  },
};
