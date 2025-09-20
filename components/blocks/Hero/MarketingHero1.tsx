import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface MarketingHero1Props {
  title?: string;
  animatedWords?: string[];
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features?: Array<{
    text: string;
  }>;
  heroImage?: string;
  floatingImage?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingHero1({
  title = "Business",
  animatedWords = ["strategy", "approach", "planning"],
  description = "We do our best to implement your ideas into the project to make it successful & profitable.",
  primaryButtonText = "Discover crafto",
  primaryButtonLink = "#",
  secondaryButtonText = "Get started",
  secondaryButtonLink = "#",
  features = [
    { text: "Conversion strategy" },
    { text: "Targeted growth" },
  ],
  heroImage = "https://placehold.co/950x970/4A90E2/FFFFFF?text=Marketing+Hero",
  floatingImage = "https://placehold.co/400x300/87CEEB/FFFFFF?text=Floating+Image",
  backgroundImage = "https://placehold.co/1920x1080/1a1a1a/FFFFFF?text=Marketing+Background",
  backgroundColor = "#1a1a1a",
  textColor = "#333333",
  nonEditable = true,
}: MarketingHero1Props) {
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
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      minWidth={300}
      minHeight={400}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="relative w-full h-full flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-green-900 opacity-80"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Animated Title */}
              <div className="text-8xl lg:text-9xl font-medium leading-none">
                <span className="block">{title}</span>
                <span className="block font-bold">
                  <span className="inline-block animate-pulse">
                    {animatedWords[0]}
                  </span>
                </span>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={primaryButtonLink}
                  className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <span className="mr-2">{primaryButtonText}</span>
                  <i className="feather icon-feather-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a
                  href={secondaryButtonLink}
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {secondaryButtonText}
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-300 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Marketing Hero"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Floating Image */}
              <div className="absolute -top-8 -right-8 hidden lg:block">
                <img
                  src={floatingImage}
                  alt="Floating Image"
                  className="w-64 h-48 object-cover rounded-lg shadow-xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingHero1.craft = {
  displayName: "Marketing Hero 1",
  props: {
    title: "Business",
    animatedWords: ["strategy", "approach", "planning"],
    description: "We do our best to implement your ideas into the project to make it successful & profitable.",
    primaryButtonText: "Discover crafto",
    primaryButtonLink: "#",
    secondaryButtonText: "Get started",
    secondaryButtonLink: "#",
    features: [
      { text: "Conversion strategy" },
      { text: "Targeted growth" },
    ],
    heroImage: "https://placehold.co/950x970/4A90E2/FFFFFF?text=Marketing+Hero",
    floatingImage: "https://placehold.co/400x300/87CEEB/FFFFFF?text=Floating+Image",
    backgroundImage: "https://placehold.co/1920x1080/1a1a1a/FFFFFF?text=Marketing+Background",
    backgroundColor: "#1a1a1a",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

