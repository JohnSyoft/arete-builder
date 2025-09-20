import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface ElderCareAbout1Props {
  badge?: string;
  title?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  callText?: string;
  phoneNumber?: string;
  phoneLink?: string;
  mainImage?: string;
  decorationImage1?: string;
  decorationImage2?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareAbout1({
  badge = "# Happy elder care",
  title = "Provides the best services for you.",
  features = [
    {
      title: "Professional care",
      description: "The place we call home is the place that feels most comfortable. A sense of home can especially.",
    },
    {
      title: "Affordable price",
      description: "There is no higher praise for us than the smile of happy patient, the thanks of engaged resident.",
    },
  ],
  primaryButtonText = "Discover more",
  primaryButtonLink = "#",
  callText = "Call Anytime",
  phoneNumber = "1 800 222 000",
  phoneLink = "tel:1800222000",
  mainImage = "https://placehold.co/504x589/87CEEB/FFFFFF?text=Senior+Care",
  decorationImage1 = "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
  decorationImage2 = "https://placehold.co/385x424/98FB98/FFFFFF?text=Deco2",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareAbout1Props) {
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
            {/* Left - Images */}
            <div className="relative">
              <div className="relative">
                <img
                  src={mainImage}
                  alt="Elder Care"
                  className="w-full rounded-lg shadow-lg"
                />
                {/* Decoration Image 1 */}
                <div className="absolute -right-16 top-16 hidden md:block">
                  <img
                    src={decorationImage1}
                    alt="Decoration"
                    className="w-32 h-32 object-contain animate-spin-slow"
                  />
                </div>
              </div>
              {/* Decoration Image 2 */}
              <div className="absolute -right-4 -bottom-12 lg:-bottom-16 w-48 lg:w-56">
                <img
                  src={decorationImage2}
                  alt="Decoration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {badge}
              </span>

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {title}
              </h2>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <a
                  href={primaryButtonLink}
                  className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors group"
                >
                  <span className="mr-2">{primaryButtonText}</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>

                {/* Call Section */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <i className="feather icon-feather-phone text-2xl text-gray-800"></i>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600">{callText}</span>
                    <a
                      href={phoneLink}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareAbout1.craft = {
  displayName: "Elder Care About 1",
  props: {
    badge: "# Happy elder care",
    title: "Provides the best services for you.",
    features: [
      {
        title: "Professional care",
        description: "The place we call home is the place that feels most comfortable. A sense of home can especially.",
      },
      {
        title: "Affordable price",
        description: "There is no higher praise for us than the smile of happy patient, the thanks of engaged resident.",
      },
    ],
    primaryButtonText: "Discover more",
    primaryButtonLink: "#",
    callText: "Call Anytime",
    phoneNumber: "1 800 222 000",
    phoneLink: "tel:1800222000",
    mainImage: "https://placehold.co/504x589/87CEEB/FFFFFF?text=Senior+Care",
    decorationImage1: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
    decorationImage2: "https://placehold.co/385x424/98FB98/FFFFFF?text=Deco2",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
