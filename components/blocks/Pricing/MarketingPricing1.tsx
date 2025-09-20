import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  features: PricingFeature[];
  trialText?: string;
  trialLink?: string;
}

interface MarketingPricing1Props {
  badge?: string;
  title?: string;
  pricingPlans?: PricingPlan[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingPricing1({
  badge = "Predictable pricing plans",
  title = "We have tailored pricing plans for everyone.",
  pricingPlans = [
    {
      name: "Standard",
      price: "250",
      description: "All the basics for businesses that are just getting started.",
      buttonText: "Choose package",
      buttonLink: "#",
      features: [
        { text: "Marketing strategy", included: true },
        { text: "Competitive work analysis", included: false },
        { text: "Social media share audit", included: false },
      ],
      trialText: "Get your 30 day free trial",
      trialLink: "#",
    },
    {
      name: "Business",
      price: "350",
      description: "All the basics for businesses that are just getting started.",
      buttonText: "Choose package",
      buttonLink: "#",
      features: [
        { text: "Marketing strategy", included: true },
        { text: "Competitive work analysis", included: true },
        { text: "Social media share audit", included: false },
      ],
      trialText: "Get your 30 day free trial",
      trialLink: "#",
    },
    {
      name: "Ultimate",
      price: "450",
      description: "All the basics for businesses that are just getting started.",
      buttonText: "Choose package",
      buttonLink: "#",
      features: [
        { text: "Marketing strategy", included: true },
        { text: "Competitive work analysis", included: true },
        { text: "Social media share audit", included: true },
      ],
      trialText: "Get your 30 day free trial",
      trialLink: "#",
    },
  ],
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: MarketingPricing1Props) {
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
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
              {badge}
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {title}
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                {/* Plan Name */}
                <div className="inline-block px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-800 mb-8">
                  {plan.name}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <h3 className="text-4xl font-semibold text-gray-800">
                    <sup className="text-2xl">$</sup>
                    {plan.price}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Button */}
                <a
                  href={plan.buttonLink}
                  className="inline-block w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors mb-4"
                >
                  {plan.buttonText}
                </a>

                {/* Billing Info */}
                <p className="text-sm text-gray-500 mb-8">Monthly billing</p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className={`${feature.included ? "text-gray-800" : "text-gray-400"}`}>
                        {feature.text}
                      </span>
                      {feature.included && (
                        <i className="fa-solid fa-check text-green-600"></i>
                      )}
                    </div>
                  ))}
                </div>

                {/* Trial Link */}
                {plan.trialText && (
                  <a
                    href={plan.trialLink}
                    className="text-gray-800 hover:text-blue-600 font-medium underline"
                  >
                    {plan.trialText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingPricing1.craft = {
  displayName: "Marketing Pricing 1",
  props: {
    badge: "Predictable pricing plans",
    title: "We have tailored pricing plans for everyone.",
    pricingPlans: [
      {
        name: "Standard",
        price: "250",
        description: "All the basics for businesses that are just getting started.",
        buttonText: "Choose package",
        buttonLink: "#",
        features: [
          { text: "Marketing strategy", included: true },
          { text: "Competitive work analysis", included: false },
          { text: "Social media share audit", included: false },
        ],
        trialText: "Get your 30 day free trial",
        trialLink: "#",
      },
      {
        name: "Business",
        price: "350",
        description: "All the basics for businesses that are just getting started.",
        buttonText: "Choose package",
        buttonLink: "#",
        features: [
          { text: "Marketing strategy", included: true },
          { text: "Competitive work analysis", included: true },
          { text: "Social media share audit", included: false },
        ],
        trialText: "Get your 30 day free trial",
        trialLink: "#",
      },
      {
        name: "Ultimate",
        price: "450",
        description: "All the basics for businesses that are just getting started.",
        buttonText: "Choose package",
        buttonLink: "#",
        features: [
          { text: "Marketing strategy", included: true },
          { text: "Competitive work analysis", included: true },
          { text: "Social media share audit", included: true },
        ],
        trialText: "Get your 30 day free trial",
        trialLink: "#",
      },
    ],
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

