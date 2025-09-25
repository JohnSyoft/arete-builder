import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const SEOContact1 = () => {
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
      className={`relative py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg shadow-2xl overflow-hidden">
          {/* Left Side - Contact Info */}
          <div className="bg-white p-8 lg:p-12 relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <img src="https://placehold.co/135x162" alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10">
              <span className="inline-block bg-gradient-to-r from-pink-100 to-red-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                Keep in touch
              </span>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Looking for help? Ready to help!
              </h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-1">Feel free to get in touch?</p>
                    <a href="tel:1234567890" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      123 456 7890
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-1">How can we help you?</p>
                    <a href="mailto:help@yourdomain.com" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      help@yourdomain.com
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-1">Are you ready for coffee?</p>
                    <p className="text-xl font-semibold text-gray-900">401 Broadway, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-gray-900 p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Say <span className="text-blue-400">hello!</span>
            </h1>
            
            <form className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name*"
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email address*"
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-4 top-6">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <textarea 
                  name="comment" 
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send message
                </span>
              </Button>
            </form>
            
            <p className="text-gray-400 text-sm mt-6 leading-relaxed">
              I accept the terms & conditions and i understand that my data will be hold securely in accordance with the privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SEOContact1.craft = {
  displayName: "SEO Contact",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
