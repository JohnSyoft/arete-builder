import React from "react";
import { Node, useNode } from "@craftjs/core";

export const DesignAgencyExpertise1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const expertiseItems = [
    {
      number: "01",
      title: "Liberalistic",
      description: "We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing solutions.",
    },
    {
      number: "02",
      title: "Knowledge",
      description: "Our team consists of industry's brightest digital geeks and that we are proud of. We are a one team consisting of passionate professionals.",
    },
    {
      number: "03",
      title: "Technology",
      description: "We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge.",
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
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="text-center lg:text-left self-end">
            <h1 className="text-4xl lg:text-3xl font-bold text-gray-800 mb-0 leading-tight">
              Why choose our design agency?
            </h1>
          </div>
          <div className="text-uppercase">
            <div className="outside-box-right-20 relative">
              <div className="text-9xl xl:text-8xl lg:text-7xl xs:text-6xl font-bold text-blue-600 leading-none">
                expertise
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Items */}
        <div className="space-y-0">
          {expertiseItems.map((item, index) => (
            <div key={index} className="border-t border-gray-300">
              <div className="grid grid-cols-12 items-center py-8">
                <div className="col-span-1 text-center">
                  <span className="text-gray-800 text-lg font-semibold">
                    {item.number}
                  </span>
                </div>
                <div className="col-span-3">
                  <span className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
                <div className="col-span-8 p-8 sm:p-6 xs:p-5">
                  <p className="w-11/12 sm:w-full text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300" />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-0">
            Let's make something great work together.{" "}
            <a
              href="#"
              className="text-gray-800 underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors"
            >
              Start a project
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
