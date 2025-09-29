import React, { useState } from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

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
    <Element id="eldercare-faq-container" is={Section} canvas>
      <Element
        id="eldercare-faq-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Header */}
            <div className="space-y-6">
              <Element
                id="eldercare-faq-badge"
                is={Text}
                text={badge}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-blue-600"
                className="inline-block uppercase tracking-wide"
              />
              <Element
                id="eldercare-faq-title"
                is={Text}
                text={title}
                tagName="h2"
                fontSize="text-4xl"
                fontWeight="font-bold"
                color="text-gray-800"
                className="leading-tight"
              />
              <div className="flex items-center gap-4">
                <Element
                  id="eldercare-faq-support-image"
                  is={Image}
                  src={supportImage}
                  alt="Support"
                  width="64px"
                  height="48px"
                  objectFit="object-contain"
                />
                <Element
                  id="eldercare-faq-support-text"
                  is={Text}
                  text={supportText}
                  tagName="span"
                  fontSize="text-lg"
                  fontWeight="font-medium"
                  color="text-gray-800"
                />
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
                    <Element
                      id={`eldercare-faq-question-${index}`}
                      is={Text}
                      text={item.question}
                      tagName="span"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color="text-gray-800"
                      className="pr-4"
                    />
                    <Element
                      id={`eldercare-faq-arrow-${index}`}
                      is={Icon}
                      iconName={openItems.includes(index) ? "chevronUp" : "chevronDown"}
                      size={16}
                      color="text-gray-600"
                      className="transition-transform"
                    />
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="pb-4">
                      <Element
                        id={`eldercare-faq-answer-${index}`}
                        is={Text}
                        text={item.answer}
                        tagName="p"
                        color="text-gray-600"
                        className="leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </Element>
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
  isCanvas: true,
};
