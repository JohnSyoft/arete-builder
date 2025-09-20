import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface ClientItem {
  name: string;
  logo: string;
  link?: string;
}

interface MarketingClients1Props {
  title?: string;
  clients?: ClientItem[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingClients1({
  title = "More than the 30000+ companies trusting crafto",
  clients = [
    { name: "Monday", logo: "https://placehold.co/120x50/0066CC/FFFFFF?text=Monday" },
    { name: "GitHub", logo: "https://placehold.co/120x50/333333/FFFFFF?text=GitHub" },
    { name: "Dropbox", logo: "https://placehold.co/120x50/0061FF/FFFFFF?text=Dropbox" },
    { name: "Twitter", logo: "https://placehold.co/120x50/1DA1F2/FFFFFF?text=Twitter" },
    { name: "Slack", logo: "https://placehold.co/120x50/4A154B/FFFFFF?text=Slack" },
  ],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: MarketingClients1Props) {
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
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      minWidth={300}
      minHeight={120}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-gray-800">
              {title}
            </h2>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
                <a
                  href={client.link || "#"}
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Resizer>
  );
}

MarketingClients1.craft = {
  displayName: "Marketing Clients 1",
  props: {
    title: "More than the 30000+ companies trusting crafto",
    clients: [
      { name: "Monday", logo: "https://placehold.co/120x50/0066CC/FFFFFF?text=Monday" },
      { name: "GitHub", logo: "https://placehold.co/120x50/333333/FFFFFF?text=GitHub" },
      { name: "Dropbox", logo: "https://placehold.co/120x50/0061FF/FFFFFF?text=Dropbox" },
      { name: "Twitter", logo: "https://placehold.co/120x50/1DA1F2/FFFFFF?text=Twitter" },
      { name: "Slack", logo: "https://placehold.co/120x50/4A154B/FFFFFF?text=Slack" },
    ],
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

