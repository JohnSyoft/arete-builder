import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface ElderCareHero1Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  volunteerText?: string;
  volunteerCount?: string;
  volunteerLink?: string;
  backgroundImage?: string;
  heroImage?: string;
  decorationImage1?: string;
  decorationImage2?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareHero1({
  badge = "#1 Care for your loved ones",
  title = "Welcome to our home.",
  subtitle = "our",
  description = "Our elder care services go beyond the traditional scope of nursing offering personalized support.",
  primaryButtonText = "Get a free care",
  primaryButtonLink = "#",
  secondaryButtonText = "Ask questions?",
  secondaryButtonLink = "#",
  volunteerText = "500+ Volunteers - Register as volunteers?",
  volunteerCount = "500+",
  volunteerLink = "#",
  backgroundImage = "https://placehold.co/1920x1080/4A90E2/FFFFFF?text=Elder+Care+Hero",
  heroImage = "https://placehold.co/1070x950/87CEEB/FFFFFF?text=Senior+Care",
  decorationImage1 = "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
  decorationImage2 = "https://placehold.co/30x30/98FB98/FFFFFF?text=+",
  backgroundColor = "#1a1a1a",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const openPanel = (elementType: string, props: any, id: string, onPropChange: (props: any) => void) => {
    if (nonEditable) return;
    // Implementation for opening properties panel
  };

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
        {/* Decoration Image 1 */}
        <div className="absolute left-0 top-32 hidden lg:block">
          <img
            src={decorationImage1}
            alt="Decoration"
            className="w-32 h-32 object-contain"
          />
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-2 bg-white/90 rounded-full text-sm font-bold text-gray-800">
                <i className="bi bi-megaphone text-gray-800 mr-2"></i>
                {badge}
              </div>

              {/* Title */}
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-800">
                {title.split(" ").map((word, index) => {
                  if (word === "our") {
                    return (
                      <span key={index} className="relative">
                        {word}
                        <span className="absolute -right-6 -top-4">
                          <img
                            src={decorationImage2}
                            alt=""
                            className="w-8 h-8"
                          />
                        </span>
                      </span>
                    );
                  }
                  return <span key={index}>{word} </span>;
                })}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href={primaryButtonLink}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors group"
                >
                  <span className="mr-2">{primaryButtonText}</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a
                  href={secondaryButtonLink}
                  className="text-gray-800 font-semibold underline hover:text-blue-600 transition-colors"
                >
                  {secondaryButtonText}
                </a>
              </div>

              {/* Volunteer Info */}
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src={decorationImage2}
                  alt=""
                  className="w-8 h-8 mr-2"
                />
                <span className="text-gray-800 font-bold">
                  {volunteerCount} Volunteers -{" "}
                  <a
                    href={volunteerLink}
                    className="text-gray-800 hover:text-blue-600 underline"
                  >
                    Register as volunteers?
                  </a>
                </span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Elder Care"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareHero1.craft = {
  displayName: "Elder Care Hero 1",
  props: {
    badge: "#1 Care for your loved ones",
    title: "Welcome to our home.",
    subtitle: "our",
    description: "Our elder care services go beyond the traditional scope of nursing offering personalized support.",
    primaryButtonText: "Get a free care",
    primaryButtonLink: "#",
    secondaryButtonText: "Ask questions?",
    secondaryButtonLink: "#",
    volunteerText: "500+ Volunteers - Register as volunteers?",
    volunteerCount: "500+",
    volunteerLink: "#",
    backgroundImage: "https://placehold.co/1920x1080/4A90E2/FFFFFF?text=Elder+Care+Hero",
    heroImage: "https://placehold.co/1070x950/87CEEB/FFFFFF?text=Senior+Care",
    decorationImage1: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Deco1",
    decorationImage2: "https://placehold.co/30x30/98FB98/FFFFFF?text=+",
    backgroundColor: "#1a1a1a",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
