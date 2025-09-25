import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Award, Users, TreePine, Leaf } from "lucide-react";

export const SpaSalonFeatures1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const features = [
    {
      icon: Award,
      title: "Ultra luxury studio",
      description: "Modern infrastructure",
    },
    {
      icon: Users,
      title: "Certified manpower",
      description: "Amazing experience",
    },
    {
      icon: TreePine,
      title: "Natural environment",
      description: "Unwind and discover joy",
    },
    {
      icon: Leaf,
      title: "Ayurvedic therapy",
      description: "Herbal remedies",
    },
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-8 xl:p-2 ${
                index < features.length - 1 ? "border-r border-gray-300" : ""
              } ${index < 2 ? "md:border-r-0" : ""} ${
                index === 2 ? "xs:border-r-0 xs:mb-8" : ""
              }`}
            >
              <div className="mb-5">
                <feature.icon className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
