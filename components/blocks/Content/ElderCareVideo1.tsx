import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface ElderCareVideo1Props {
  videoUrl?: string;
  backgroundImage?: string;
  playButtonText?: string;
  height?: string;
  backgroundColor?: string;
  nonEditable?: boolean;
}

export function ElderCareVideo1({
  videoUrl = "https://www.youtube.com/watch?v=cfXHhfNy7tU",
  backgroundImage = "https://placehold.co/1920x700/4A90E2/FFFFFF?text=Video+Background",
  playButtonText = "Play",
  height = "700px",
  backgroundColor = "#1a1a1a",
  nonEditable = true,
}: ElderCareVideo1Props) {
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
        height: height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: backgroundColor,
        position: "relative",
        overflow: "hidden",
      }}
      minWidth={300}
      minHeight={400}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="relative w-full h-full flex items-center justify-center"
        style={{ minHeight: height }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/30"></div>
        
        {/* Play Button */}
        <div className="relative z-10 text-center">
          <a
            href={videoUrl}
            className="inline-flex items-center justify-center w-20 h-20 border-2 border-white/30 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1 group-hover:scale-110 transition-transform"></div>
            </div>
          </a>
          <p className="text-white text-sm font-semibold uppercase tracking-wider mt-4">
            {playButtonText}
          </p>
        </div>
      </div>
    </Resizer>
  );
}

ElderCareVideo1.craft = {
  displayName: "Elder Care Video 1",
  props: {
    videoUrl: "https://www.youtube.com/watch?v=cfXHhfNy7tU",
    backgroundImage: "https://placehold.co/1920x700/4A90E2/FFFFFF?text=Video+Background",
    playButtonText: "Play",
    height: "700px",
    backgroundColor: "#1a1a1a",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
