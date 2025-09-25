import React from "react";
import { Node, useNode } from "@craftjs/core";

export const DesignAgencyProcess1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const processSteps = [
    {
      number: "01",
      title: "Web design",
      description: "We create compelling web designs which are the right fit for your target groups.",
    },
    {
      number: "02",
      title: "Web development",
      description: "We create compelling web designs which are the right fit for your target groups.",
    },
    {
      number: "03",
      title: "eCommerce solutions",
      description: "We create compelling web designs which are the right fit for your target groups.",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
          {processSteps.map((step, index) => (
            <div key={index} className="relative md:mb-16">
              <div className="flex items-start">
                <div className="bg-gray-200 col-auto flex-shrink-0">
                  <span className="text-5xl font-bold w-16 h-24 flex items-end justify-center text-gray-400 leading-5">
                    {step.number}
                  </span>
                </div>
                <div className="pl-8 xs:pl-6 col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="w-11/12 lg:w-full xs:w-full text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
