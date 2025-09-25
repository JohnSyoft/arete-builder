import React from "react";
import { Node, useNode } from "@craftjs/core";

export const BeautySalonProcess1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

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
    <section
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-white border-b border-gray-200 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                index < steps.length - 1 ? "md:border-r border-gray-200" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900">
                  {step.number}
                </span>
                <div className="w-5 h-0.5 bg-pink-500"></div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

BeautySalonProcess1.craft = {
  displayName: "Beauty Salon Process 1",
  props: {},
  related: {
    settings: () => null,
  },
};
