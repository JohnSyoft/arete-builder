import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";

export const BrandingAgencyClients1 = () => {
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
      className={`py-16 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            BrandingAgency Clients
          </h2>
          <p className="text-gray-600 mb-8">
            This is a placeholder component for BrandingAgency Clients section.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};