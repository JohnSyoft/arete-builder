import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Star } from "lucide-react";

export const SEOStats1 = () => {
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
      className={`relative py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-5xl lg:text-6xl font-bold text-gray-900">
                  99<sup className="text-2xl">%</sup>
                </div>
                <div>
                  <p className="text-lg text-gray-600">
                    Track and analyze <br />business reports.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-5xl lg:text-6xl font-bold text-gray-900">
                  4.98
                </div>
                <div>
                  <div className="flex justify-center md:justify-start text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-lg text-gray-600">Best rated agency</p>
                </div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-5xl lg:text-6xl font-bold text-gray-900">
                  98<sup className="text-2xl">%</sup>
                </div>
                <div>
                  <p className="text-lg text-gray-600">
                    Genuine repeated <br />happy customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SEOStats1.craft = {
  displayName: "SEO Stats",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
