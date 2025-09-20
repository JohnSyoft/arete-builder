import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface ElderCareCTA1Props {
  title?: string;
  description?: string;
  phoneNumber?: string;
  phoneLink?: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareCTA1({
  title = "Need some help?",
  description = "Your generosity in whatever form it takes is deeply appreciated. Each act of kindness from you has a profound impact.",
  phoneNumber = "1 800 222 000",
  phoneLink = "tel:1800222000",
  buttonText = "Support us",
  buttonLink = "#",
  icon = "bi bi-headset",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  nonEditable = true,
}: ElderCareCTA1Props) {
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
      minHeight={120}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Help Section */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <i className={`${icon} text-2xl text-gray-800`}></i>
              </div>
              <div>
                <h5 className="text-xl font-bold text-white mb-1">{title}</h5>
                <span className="text-lg text-white/60">
                  Call now: <a href={phoneLink} className="text-white hover:text-blue-300">{phoneNumber}</a>
                </span>
              </div>
            </div>

            {/* Center - Description */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/60 max-w-md mx-auto md:mx-0">
                {description}
              </p>
            </div>

            {/* Right - Support Button */}
            <div className="flex-shrink-0">
              <a
                href={buttonLink}
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors group"
              >
                <i className="feather icon-feather-gift mr-2"></i>
                <span>{buttonText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareCTA1.craft = {
  displayName: "Elder Care CTA 1",
  props: {
    title: "Need some help?",
    description: "Your generosity in whatever form it takes is deeply appreciated. Each act of kindness from you has a profound impact.",
    phoneNumber: "1 800 222 000",
    phoneLink: "tel:1800222000",
    buttonText: "Support us",
    buttonLink: "#",
    icon: "bi bi-headset",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
