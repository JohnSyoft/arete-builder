import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Facebook, Instagram, Twitter, Dribbble } from "lucide-react";

export const SEOFooter1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-12 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0">
            <a href="#" className="inline-block">
              <img 
                src="https://placehold.co/200x60" 
                alt="SEO Agency Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300">
              What we do
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300">
              Process
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-600 text-sm leading-relaxed">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="text-gray-900 underline hover:text-blue-600 transition-colors duration-300">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-gray-900 underline hover:text-blue-600 transition-colors duration-300">
                terms of service
              </a>{" "}
              apply. You must not use this website if you disagree with any of these website standard terms and conditions.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="http://www.instagram.com" 
              target="_blank" 
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="http://www.twitter.com" 
              target="_blank" 
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="http://www.dribbble.com" 
              target="_blank" 
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Dribbble className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SEOFooter1.craft = {
  displayName: "SEO Footer",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
