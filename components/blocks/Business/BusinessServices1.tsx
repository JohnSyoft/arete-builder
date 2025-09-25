import React, { useState } from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Edit, Compass, Globe } from "lucide-react";

export const BusinessServices1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "business-planning",
      title: "Business planning",
      icon: Briefcase,
      heading: "Work together to make experience",
      description: "We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.",
      image: "https://placehold.co/600x730"
    },
    {
      id: "business-research",
      title: "Business research",
      icon: Edit,
      heading: "Help our clients succeed by brand",
      description: "We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.",
      image: "https://placehold.co/600x730"
    },
    {
      id: "tracking-operations",
      title: "Tracking operations",
      icon: Compass,
      heading: "Work together to make experience.",
      description: "We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.",
      image: "https://placehold.co/600x730"
    },
    {
      id: "business-campaign",
      title: "Business campaign",
      icon: Globe,
      heading: "Help our clients succeed by brand",
      description: "We always want our client grow with the product we have delivered and maintaining strong long-term good relationship.",
      image: "https://placehold.co/600x730"
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-blue-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Professional and highly dedicated business services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 ${
                    activeTab === index
                      ? "bg-white shadow-lg text-blue-600"
                      : "bg-transparent hover:bg-white/50 text-gray-700"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeTab === index ? "bg-blue-100" : "bg-gray-100"
                  }`}>
                    <service.icon className={`w-6 h-6 ${
                      activeTab === index ? "text-blue-600" : "text-gray-600"
                    }`} />
                  </div>
                  <span className="font-semibold">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div>
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title}
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
              
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {/* <services[activeTab].icon className="w-8 h-8 text-blue-600" /> */}
                  </div>
                  <span className="text-lg font-semibold text-blue-600">
                    {services[activeTab].title === "Business planning" ? "Grow and succeed" : 
                     services[activeTab].title === "Business research" ? "Identity strategy" :
                     services[activeTab].title === "Tracking operations" ? "Grow and succeed" : "Experience strategy"}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  <span className="font-semibold">{services[activeTab].heading.split(' ')[0]} {services[activeTab].heading.split(' ')[1]}</span> {services[activeTab].heading.split(' ').slice(2).join(' ')}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {services[activeTab].description}
                </p>
                
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg">
                  Explore now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessServices1.craft = {
  displayName: "Business Services",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
