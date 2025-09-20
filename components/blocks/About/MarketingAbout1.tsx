import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface MarketingAbout1Props {
  badge?: string;
  title?: string;
  animatedWords?: string[];
  features?: FeatureItem[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  mainImage?: string;
  floatingImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingAbout1({
  badge = "About marketing agency",
  title = "Marketing solutions for all",
  animatedWords = ["business", "industry", "enterprise"],
  features = [
    {
      title: "Strategic marketing",
      description: "Digital marketing that helps you to promote your brand the world.",
      icon: "https://placehold.co/90x84/4A90E2/FFFFFF?text=Icon1",
    },
    {
      title: "Marketing campaigns",
      description: "Digital marketing that helps you to promote your brand the world.",
      icon: "https://placehold.co/90x84/87CEEB/FFFFFF?text=Icon2",
    },
  ],
  primaryButtonText = "Learn more",
  primaryButtonLink = "#",
  secondaryButtonText = "Our services",
  secondaryButtonLink = "#",
  mainImage = "https://placehold.co/539x739/4A90E2/FFFFFF?text=Marketing+About",
  floatingImage = "https://placehold.co/266x141/87CEEB/FFFFFF?text=Floating",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: MarketingAbout1Props) {
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
                  alt="Marketing About"
                  className="w-full rounded-lg shadow-lg"
                />
                {/* Floating Image */}
                <div className="absolute -bottom-20 -left-4">
                  <img
                    src={floatingImage}
                    alt="Floating Image"
                    className="w-64 h-32 object-cover rounded-lg shadow-xl animate-float"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {badge}
              </span>

              {/* Title with Animation */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {title}{" "}
                <span className="inline-block animate-pulse">
                  {animatedWords[0]}
                </span>
              </h2>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-20 h-16 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
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
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href={primaryButtonLink}
                  className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <span className="mr-2">{primaryButtonText}</span>
                  <i className="feather icon-feather-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a
                  href={secondaryButtonLink}
                  className="inline-flex items-center text-gray-800 hover:text-blue-600 font-semibold group"
                >
                  <span className="mr-2">{secondaryButtonText}</span>
                  <i className="bi bi-caret-right-fill group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingAbout1.craft = {
  displayName: "Marketing About 1",
  props: {
    badge: "About marketing agency",
    title: "Marketing solutions for all",
    animatedWords: ["business", "industry", "enterprise"],
    features: [
      {
        title: "Strategic marketing",
        description: "Digital marketing that helps you to promote your brand the world.",
        icon: "https://placehold.co/90x84/4A90E2/FFFFFF?text=Icon1",
      },
      {
        title: "Marketing campaigns",
        description: "Digital marketing that helps you to promote your brand the world.",
        icon: "https://placehold.co/90x84/87CEEB/FFFFFF?text=Icon2",
      },
    ],
    primaryButtonText: "Learn more",
    primaryButtonLink: "#",
    secondaryButtonText: "Our services",
    secondaryButtonLink: "#",
    mainImage: "https://placehold.co/539x739/4A90E2/FFFFFF?text=Marketing+About",
    floatingImage: "https://placehold.co/266x141/87CEEB/FFFFFF?text=Floating",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

