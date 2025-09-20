import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface TimelineItem {
  year: string;
  amount: string;
  description: string;
}

interface ElderCareTimeline1Props {
  title?: string;
  description?: string;
  totalAmount?: string;
  totalDescription?: string;
  iconImage?: string;
  timelineItems?: TimelineItem[];
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareTimeline1({
  title = "Donated money counts.",
  description = "Lorem ipsum dolor sit amet consectetur adipiscing.",
  totalAmount = "$175,990",
  totalDescription = "Collected in the many years",
  iconImage = "https://placehold.co/72x64/FFB6C1/FFFFFF?text=Icon",
  timelineItems = [
    { year: "1998", amount: "10k", description: "Total collected this year" },
    { year: "2008", amount: "18k", description: "Total collected this year" },
    { year: "2014", amount: "23k", description: "Total collected this year" },
    { year: "2017", amount: "32k", description: "Total collected this year" },
    { year: "2022", amount: "39k", description: "Total collected this year" },
    { year: "2024", amount: "42k", description: "Total collected this year" },
  ],
  backgroundImage = "https://placehold.co/1920x700/4A90E2/FFFFFF?text=Donation+Timeline",
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareTimeline1Props) {
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      minWidth={300}
      minHeight={400}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="py-16 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="flex items-center gap-6 mb-6 lg:mb-0">
              <img
                src={iconImage}
                alt="Donation Icon"
                className="w-16 h-14 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h2 className="text-4xl font-semibold text-gray-800 mb-2">{totalAmount}</h2>
              <p className="text-gray-600">{totalDescription}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="text-center group hover:bg-white/10 rounded-lg p-4 transition-colors">
                {/* Timeline Line */}
                <div className="relative mb-6">
                  <div className="w-full h-px bg-gray-800 absolute top-1/2 left-0"></div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:bg-blue-200 transition-colors">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.year}</h4>
                <p className="text-sm text-gray-600 max-w-20 mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareTimeline1.craft = {
  displayName: "Elder Care Timeline 1",
  props: {
    title: "Donated money counts.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    totalAmount: "$175,990",
    totalDescription: "Collected in the many years",
    iconImage: "https://placehold.co/72x64/FFB6C1/FFFFFF?text=Icon",
    timelineItems: [
      { year: "1998", amount: "10k", description: "Total collected this year" },
      { year: "2008", amount: "18k", description: "Total collected this year" },
      { year: "2014", amount: "23k", description: "Total collected this year" },
      { year: "2017", amount: "32k", description: "Total collected this year" },
      { year: "2022", amount: "39k", description: "Total collected this year" },
      { year: "2024", amount: "42k", description: "Total collected this year" },
    ],
    backgroundImage: "https://placehold.co/1920x700/4A90E2/FFFFFF?text=Donation+Timeline",
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
