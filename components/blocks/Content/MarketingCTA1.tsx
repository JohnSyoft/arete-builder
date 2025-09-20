import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface MarketingCTA1Props {
  title?: string;
  email?: string;
  emailLink?: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingCTA1({
  title = "Let's talk about how we can transform your business!",
  email = "hello@domain.com",
  emailLink = "mailto:hello@domain.com",
  icon = "bi bi-envelope",
  backgroundColor = "#4A90E2",
  textColor = "#ffffff",
  nonEditable = true,
}: MarketingCTA1Props) {
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
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left - Title */}
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-semibold text-gray-800 mb-0">
                  {title}
                </h4>
              </div>

              {/* Right - Contact Info */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className={`${icon} text-2xl text-gray-600`}></i>
                </div>
                <div>
                  <span className="block text-gray-600 text-lg mb-1">
                    Interested in working?
                  </span>
                  <a
                    href={emailLink}
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600 underline"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingCTA1.craft = {
  displayName: "Marketing CTA 1",
  props: {
    title: "Let's talk about how we can transform your business!",
    email: "hello@domain.com",
    emailLink: "mailto:hello@domain.com",
    icon: "bi bi-envelope",
    backgroundColor: "#4A90E2",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

