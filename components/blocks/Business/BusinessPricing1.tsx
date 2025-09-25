import React, { useState } from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export const BusinessPricing1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [activeAccordion, setActiveAccordion] = useState(0);

  const pricingPlans = [
    {
      id: "basic",
      title: "Basic plan",
      price: "$19.99",
      period: "/ Monthly",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      features: ["Basic features", "Email support", "5GB storage"]
    },
    {
      id: "standard",
      title: "Standard plan",
      price: "$29.99",
      period: "/ Monthly",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      features: ["All basic features", "Priority support", "50GB storage", "Advanced analytics"]
    },
    {
      id: "premium",
      title: "Premium plan",
      price: "$39.99",
      period: "/ Monthly",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      features: ["All standard features", "24/7 support", "Unlimited storage", "Premium analytics", "Custom integrations"]
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Flexible pricing
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tailored pricing plans for everyone.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent solutions.
            </p>
            
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg shadow-lg">
              View all plans
            </Button>
          </div>
          
          {/* Right Content - Pricing Accordion */}
          <div className="space-y-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  activeAccordion === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center">
                      {activeAccordion === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-xl font-semibold text-gray-900">{plan.title}</span>
                  </div>
                </button>
                
                {activeAccordion === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-white">{plan.price}</span>
                          <span className="text-lg text-white/60">{plan.period}</span>
                        </div>
                      </div>
                      
                      <Button className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 rounded-lg">
                        Get started
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessPricing1.craft = {
  displayName: "Business Pricing",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
