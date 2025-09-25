import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail } from "lucide-react";

export const DesignAgencyStats1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const stats = [
    {
      description: "Users on marketplaces we've created in 2023.",
      value: "8,500",
      suffix: "+",
    },
    {
      description: "Successfully finished projects with creativity.",
      value: "660",
      suffix: "+",
    },
    {
      description: "Monthly visitors on our e-Commerce platform.",
      value: "6,834",
      suffix: "+",
    },
    {
      description: "Onboarding conversions growth increased.",
      value: "300",
      suffix: "%",
    },
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-16 bg-yellow-400 overflow-hidden ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-yellow-400" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-orange-400" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="text-8xl xs:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Interesting
          </div>
          <div className="text-8xl xs:text-6xl font-bold text-blue-600 leading-tight text-center">
            facts figure
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <p className="w-3/4 mb-10 md:mb-6 lg:w-11/12 md:w-full text-gray-800">
              We combine human empathy and intelligent data to provide the{" "}
              <a href="#" className="text-white underline">
                highest level of satisfaction.
              </a>
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg">
              <span className="flex items-center gap-2">
                Let's talk now
                <Mail className="w-4 h-4" />
              </span>
            </Button>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white/10 backdrop-blur-sm p-8 lg:p-10 sm:p-6 hover:bg-white/20 transition-colors"
              >
                <p className="text-white mb-8 w-11/12 xl:w-full text-lg opacity-90">
                  {stat.description}
                </p>
                <div className="flex items-center">
                  <h3 className="text-4xl font-bold text-white leading-tight">
                    {stat.value}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </h3>
                  <ArrowUp className="w-6 h-6 text-blue-600 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
