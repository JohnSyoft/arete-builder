import React, { useState } from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Target, Share2, Mail } from "lucide-react";

export const SEOTabs1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "keyword-research",
      title: "Keyword research",
      icon: Search,
      heading: "Keywords lead to customers.",
      description: "We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.",
      image: "https://placehold.co/682x510"
    },
    {
      id: "target-analysis",
      title: "Target analysis",
      icon: Target,
      heading: "Power your online visibility.",
      description: "We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.",
      image: "https://placehold.co/682x510"
    },
    {
      id: "social-marketing",
      title: "Social marketing",
      icon: Share2,
      heading: "Brand identity and strategy.",
      description: "We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.",
      image: "https://placehold.co/682x510"
    },
    {
      id: "email-campaign",
      title: "Email campaign",
      icon: Mail,
      heading: "Tailor-made email campaign.",
      description: "We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.",
      image: "https://placehold.co/682x510"
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
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div>
            <img 
              src={tabs[activeTab].image} 
              alt={tabs[activeTab].title}
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Right Content - Text */}
          <div>
            <span className="inline-block bg-gradient-to-r from-pink-100 to-red-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              {tabs[activeTab].title}
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {tabs[activeTab].heading}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {tabs[activeTab].description}
            </p>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>learn more</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Choose the best package your business needs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
              <p className="text-gray-600 mb-6">Unlimited users</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">$22</span>
                  <span className="text-gray-600">per user/month billed annually</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Marketing strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Competitive work analysis</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Social media share audit</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Monthly management</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                Choose package
              </Button>
            </div>
            
            {/* Business Plan */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
              <p className="text-gray-600 mb-6">Unlimited users</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">$33</span>
                  <span className="text-gray-600">per user/month billed annually</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Marketing strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Competitive work analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Social media share audit</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Monthly management</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Choose package
              </Button>
            </div>
            
            {/* Ultimate Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ultimate</h3>
              <p className="text-gray-600 mb-6">Unlimited users</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">$44</span>
                  <span className="text-gray-600">per user/month billed annually</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Marketing strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Competitive work analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Social media share audit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Monthly management</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                Choose package
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SEOTabs1.craft = {
  displayName: "SEO Tabs",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
