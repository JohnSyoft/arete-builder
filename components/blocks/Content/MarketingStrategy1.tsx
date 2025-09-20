import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface AccordionItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

interface MarketingStrategy1Props {
  badge?: string;
  title?: string;
  accordionItems?: AccordionItem[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  videoButtonText?: string;
  videoLink?: string;
  mainImage?: string;
  floatingImage?: string;
  stats?: StatItem[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingStrategy1({
  badge = "Our business strategy",
  title = "We have helped businesses revenue.",
  accordionItems = [
    {
      question: "Unique and bold website design",
      answer: "We deliver customized marketing campaign to use your audience to make a positive move.",
      isOpen: true,
    },
    {
      question: "We're ready to start marketing now",
      answer: "We deliver customized marketing campaign to use your audience to make a positive move.",
      isOpen: false,
    },
    {
      question: "Something marketing for everyone",
      answer: "We deliver customized marketing campaign to use your audience to make a positive move.",
      isOpen: false,
    },
  ],
  primaryButtonText = "How it works",
  primaryButtonLink = "#",
  videoButtonText = "Play video",
  videoLink = "https://www.youtube.com/watch?v=cfXHhfNy7tU",
  mainImage = "https://placehold.co/525x741/4A90E2/FFFFFF?text=Strategy+Image",
  floatingImage = "https://placehold.co/235x244/87CEEB/FFFFFF?text=Floating",
  stats = [
    { value: "353", label: "Revenue increasing", icon: "bi bi-arrow-up" },
    { value: "642", label: "Company growth", icon: "bi bi-arrow-up" },
    { value: "376", label: "Clients enhanced", icon: "bi bi-arrow-up" },
    { value: "285", label: "Convert traffic", icon: "bi bi-arrow-up" },
  ],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: MarketingStrategy1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [openItems, setOpenItems] = useState<number[]>(
    accordionItems.map((item, index) => (item.isOpen ? index : -1)).filter(i => i !== -1)
  );

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
            <div className="space-y-8">
              {/* Badge */}
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {badge}
              </span>

              {/* Title */}
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                {title}
              </h2>

              {/* Accordion */}
              <div className="space-y-4">
                {accordionItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-800 pr-4">
                        {item.question}
                      </span>
                      <i
                        className={`feather ${
                          openItems.includes(index) ? "icon-feather-minus" : "icon-feather-plus"
                        } text-gray-600 transition-transform`}
                      ></i>
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
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
                  href={videoLink}
                  className="inline-flex items-center text-gray-800 hover:text-blue-600 font-semibold group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">{videoButtonText}</span>
                  <i className="bi bi-caret-right-fill group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src={mainImage}
                  alt="Strategy"
                  className="w-full rounded-lg shadow-lg"
                />
                {/* Floating Image */}
                <div className="absolute -bottom-20 -right-4">
                  <img
                    src={floatingImage}
                    alt="Floating Image"
                    className="w-60 h-60 object-cover rounded-lg shadow-xl animate-float"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-4xl font-bold text-gray-800 mr-2">
                    {stat.value}%
                  </h3>
                  {stat.icon && (
                    <i className={`${stat.icon} text-green-600 text-2xl`}></i>
                  )}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingStrategy1.craft = {
  displayName: "Marketing Strategy 1",
  props: {
    badge: "Our business strategy",
    title: "We have helped businesses revenue.",
    accordionItems: [
      {
        question: "Unique and bold website design",
        answer: "We deliver customized marketing campaign to use your audience to make a positive move.",
        isOpen: true,
      },
      {
        question: "We're ready to start marketing now",
        answer: "We deliver customized marketing campaign to use your audience to make a positive move.",
        isOpen: false,
      },
      {
        question: "Something marketing for everyone",
        answer: "We deliver customized marketing campaign to use your audience to make a positive move.",
        isOpen: false,
      },
    ],
    primaryButtonText: "How it works",
    primaryButtonLink: "#",
    videoButtonText: "Play video",
    videoLink: "https://www.youtube.com/watch?v=cfXHhfNy7tU",
    mainImage: "https://placehold.co/525x741/4A90E2/FFFFFF?text=Strategy+Image",
    floatingImage: "https://placehold.co/235x244/87CEEB/FFFFFF?text=Floating",
    stats: [
      { value: "353", label: "Revenue increasing", icon: "bi bi-arrow-up" },
      { value: "642", label: "Company growth", icon: "bi bi-arrow-up" },
      { value: "376", label: "Clients enhanced", icon: "bi bi-arrow-up" },
      { value: "285", label: "Convert traffic", icon: "bi bi-arrow-up" },
    ],
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

