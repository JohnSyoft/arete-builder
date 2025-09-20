import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface FeatureItem {
  title: string;
  description: string;
}

interface ElderCareFeatures1Props {
  badge?: string;
  title?: string;
  description?: string;
  features?: FeatureItem[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  callText?: string;
  phoneNumber?: string;
  phoneLink?: string;
  mainImage?: string;
  decorationImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareFeatures1({
  badge = "# Professional elder care",
  title = "Compassionate care, tailored for you.",
  description = "It has survived not only centuries, but also the leap into electronic, remaining essentially unchanged.",
  features = [
    {
      title: "Focus on symptom management.",
      description: "",
    },
    {
      title: "Improving the quality of elder life.",
      description: "",
    },
    {
      title: "Convenient one story design.",
      description: "",
    },
  ],
  primaryButtonText = "Discover more",
  primaryButtonLink = "#",
  callText = "Schedule your appointment for today.",
  phoneNumber = "1 800 222 000",
  phoneLink = "tel:1800222000",
  mainImage = "https://placehold.co/657x626/87CEEB/FFFFFF?text=Senior+Care",
  decorationImage = "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareFeatures1Props) {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="bg-blue-50 p-8 lg:p-12 rounded-lg">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
                {badge}
              </span>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                {title}
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                {description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-800 font-semibold text-lg">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Discover Button */}
              <a
                href={primaryButtonLink}
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors group"
              >
                <span className="mr-2">{primaryButtonText}</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div
                className="w-full h-96 lg:h-[500px] rounded-lg bg-cover bg-center relative"
                style={{ backgroundImage: `url(${mainImage})` }}
              >
                {/* Decoration Image */}
                <img
                  src={decorationImage}
                  alt="Decoration"
                  className="absolute -bottom-16 -right-8 w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="mt-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4">
              <i className="bi bi-calendar-check text-blue-600 text-2xl"></i>
              <span className="text-lg text-gray-800">
                {callText}{" "}
                <a
                  href={phoneLink}
                  className="text-gray-800 hover:text-blue-600 font-semibold underline"
                >
                  Call on {phoneNumber}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareFeatures1.craft = {
  displayName: "Elder Care Features 1",
  props: {
    badge: "# Professional elder care",
    title: "Compassionate care, tailored for you.",
    description: "It has survived not only centuries, but also the leap into electronic, remaining essentially unchanged.",
    features: [
      {
        title: "Focus on symptom management.",
        description: "",
      },
      {
        title: "Improving the quality of elder life.",
        description: "",
      },
      {
        title: "Convenient one story design.",
        description: "",
      },
    ],
    primaryButtonText: "Discover more",
    primaryButtonLink: "#",
    callText: "Schedule your appointment for today.",
    phoneNumber: "1 800 222 000",
    phoneLink: "tel:1800222000",
    mainImage: "https://placehold.co/657x626/87CEEB/FFFFFF?text=Senior+Care",
    decorationImage: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
