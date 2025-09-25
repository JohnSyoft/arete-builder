import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const BeautySalonAbout1 = () => {
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
      className={`py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://placehold.co/960x630"
              alt="Beauty salon interior"
              className="w-full h-auto rounded-br-[50px] object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
                About the salon
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Body treatments. Skin care beauty.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              With over 35 years of experience footprint of over 400+ salons in 125 cities across the length and breadth of the country. We have developed a deep understanding of the beauty industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  About story
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Luxury salon
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BeautySalonAbout1.craft = {
  displayName: "Beauty Salon About 1",
  props: {},
  related: {
    settings: () => null,
  },
};
