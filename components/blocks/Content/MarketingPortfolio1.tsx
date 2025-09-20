import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  link: string;
  tags: string[];
}

interface MarketingPortfolio1Props {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  filterTabs?: Array<{
    label: string;
    filter: string;
  }>;
  portfolioItems?: PortfolioItem[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingPortfolio1({
  title = "Our Portfolio",
  buttonText = "Explore more",
  buttonLink = "#",
  filterTabs = [
    { label: "All", filter: "*" },
    { label: "Selected", filter: ".selected" },
    { label: "Digital", filter: ".digital" },
    { label: "Branding", filter: ".branding" },
    { label: "Web", filter: ".web" },
  ],
  portfolioItems = [
    {
      title: "Tailoring inteo",
      category: "Branding",
      image: "https://placehold.co/800x635/4A90E2/FFFFFF?text=Project+1",
      link: "#",
      tags: ["selected", "branding"],
    },
    {
      title: "Design blast",
      category: "Photography",
      image: "https://placehold.co/800x635/87CEEB/FFFFFF?text=Project+2",
      link: "#",
      tags: ["digital", "web"],
    },
    {
      title: "Herbal beauty",
      category: "Application",
      image: "https://placehold.co/800x635/98FB98/FFFFFF?text=Project+3",
      link: "#",
      tags: ["web", "selected", "branding"],
    },
    {
      title: "Cropo identity",
      category: "Packaging",
      image: "https://placehold.co/800x635/FFB6C1/FFFFFF?text=Project+4",
      link: "#",
      tags: ["web", "selected", "digital"],
    },
    {
      title: "Harddot stone",
      category: "Graphics",
      image: "https://placehold.co/800x635/DDA0DD/FFFFFF?text=Project+5",
      link: "#",
      tags: ["digital", "web", "branding"],
    },
    {
      title: "Violator series",
      category: "Digital",
      image: "https://placehold.co/800x635/F0E68C/FFFFFF?text=Project+6",
      link: "#",
      tags: ["web", "selected", "digital"],
    },
  ],
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: MarketingPortfolio1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [activeFilter, setActiveFilter] = useState("*");

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "*") return true;
    return item.tags.includes(activeFilter.replace(".", ""));
  });

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
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            </div>
            
            <a
              href={buttonLink}
              className="inline-flex items-center text-gray-800 hover:text-blue-600 font-semibold group"
            >
              <span className="mr-2">{buttonText}</span>
              <i className="feather icon-feather-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            {filterTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(tab.filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === tab.filter
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                {/* Portfolio Image */}
                <div className="relative overflow-hidden">
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>

                {/* Portfolio Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.link}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingPortfolio1.craft = {
  displayName: "Marketing Portfolio 1",
  props: {
    title: "Our Portfolio",
    buttonText: "Explore more",
    buttonLink: "#",
    filterTabs: [
      { label: "All", filter: "*" },
      { label: "Selected", filter: ".selected" },
      { label: "Digital", filter: ".digital" },
      { label: "Branding", filter: ".branding" },
      { label: "Web", filter: ".web" },
    ],
    portfolioItems: [
      {
        title: "Tailoring inteo",
        category: "Branding",
        image: "https://placehold.co/800x635/4A90E2/FFFFFF?text=Project+1",
        link: "#",
        tags: ["selected", "branding"],
      },
      {
        title: "Design blast",
        category: "Photography",
        image: "https://placehold.co/800x635/87CEEB/FFFFFF?text=Project+2",
        link: "#",
        tags: ["digital", "web"],
      },
      {
        title: "Herbal beauty",
        category: "Application",
        image: "https://placehold.co/800x635/98FB98/FFFFFF?text=Project+3",
        link: "#",
        tags: ["web", "selected", "branding"],
      },
      {
        title: "Cropo identity",
        category: "Packaging",
        image: "https://placehold.co/800x635/FFB6C1/FFFFFF?text=Project+4",
        link: "#",
        tags: ["web", "selected", "digital"],
      },
      {
        title: "Harddot stone",
        category: "Graphics",
        image: "https://placehold.co/800x635/DDA0DD/FFFFFF?text=Project+5",
        link: "#",
        tags: ["digital", "web", "branding"],
      },
      {
        title: "Violator series",
        category: "Digital",
        image: "https://placehold.co/800x635/F0E68C/FFFFFF?text=Project+6",
        link: "#",
        tags: ["web", "selected", "digital"],
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

