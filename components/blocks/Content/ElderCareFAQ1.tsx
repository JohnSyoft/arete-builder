import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface ElderCareFAQ1Props {
  badge?: string;
  title?: string;
  description?: string;
  supportText?: string;
  supportImage?: string;
  faqItems?: FAQItem[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareFAQ1({
  badge = "# Frequently asked questions",
  title = "A short brief of with our senior citizens.",
  description = "Expert support available 24/7.",
  supportText = "Expert support available 24/7.",
  supportImage = "https://placehold.co/156x113/FFB6C1/FFFFFF?text=Support",
  faqItems = [
    {
      question: "What is senior living?",
      answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable.",
      isOpen: true,
    },
    {
      question: "How much does senior living cost?",
      answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable.",
      isOpen: false,
    },
    {
      question: "Is transportation available?",
      answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable.",
      isOpen: false,
    },
  ],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareFAQ1Props) {
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
    faqItems.map((item, index) => (item.isOpen ? index : -1)).filter(i => i !== -1)
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Header */}
            <div className="space-y-6">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {badge}
              </span>
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                {title}
              </h2>
              <div className="flex items-center gap-4">
                <img
                  src={supportImage}
                  alt="Support"
                  className="w-16 h-12 object-contain"
                />
                <span className="text-lg font-medium text-gray-800">
                  {supportText}
                </span>
              </div>
            </div>

            {/* Right - FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-800 pr-4">
                      {item.question}
                    </span>
                    <i
                      className={`fa-solid ${
                        openItems.includes(index) ? "fa-angle-up" : "fa-angle-down"
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
          </div>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareFAQ1.craft = {
  displayName: "Elder Care FAQ 1",
  props: {
    badge: "# Frequently asked questions",
    title: "A short brief of with our senior citizens.",
    description: "Expert support available 24/7.",
    supportText: "Expert support available 24/7.",
    supportImage: "https://placehold.co/156x113/FFB6C1/FFFFFF?text=Support",
    faqItems: [
      {
        question: "What is senior living?",
        answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable.",
        isOpen: true,
      },
      {
        question: "How much does senior living cost?",
        answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable.",
        isOpen: false,
      },
      {
        question: "Is transportation available?",
        answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable.",
        isOpen: false,
      },
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
