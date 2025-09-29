import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

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
  return (
    <Element id="eldercare-video-container" is={Section} canvas>
      <Element
        id="eldercare-video-background"
        is={Box}
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundColor={backgroundColor}
        width="100%"
        height={height}
        className="relative overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/30"></div>
        
        {/* Play Button */}
        <div className="relative z-10 text-center flex items-center justify-center w-full h-full">
          <Element
            id="eldercare-video-play-button"
            is={Button}
            href={videoUrl}
            className="inline-flex items-center justify-center w-20 h-20 border-2 border-white/30 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          >
            <Element
              id="eldercare-video-play-icon"
              is={Icon}
              iconName="play"
              size={24}
              color="text-white"
              className="group-hover:scale-110 transition-transform"
            />
          </Element>
          <Element
            id="eldercare-video-play-text"
            is={Text}
            text={playButtonText}
            tagName="p"
            fontSize="text-sm"
            fontWeight="font-semibold"
            color="text-white"
            className="absolute top-24 uppercase tracking-wider"
          />
        </div>
      </Element>
    </Element>
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
  isCanvas: true,
};
