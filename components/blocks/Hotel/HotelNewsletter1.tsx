import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const HotelNewsletter1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-blue-600 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Stay Updated with Our{" "}
            <span className="relative">
              Newsletter
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-white"></span>
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get exclusive offers, resort updates, and special promotions delivered to your inbox.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
          
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};