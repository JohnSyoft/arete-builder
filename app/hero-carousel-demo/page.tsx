"use client";

import { Editor, Frame, Element } from "@craftjs/core";
import { HeroCarouselSimple } from "@/components/blocks/Hero/HeroCarouselSimple";

// Import all the basic components
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Section } from "@/components/blocks/Basic/Section";
import { Box } from "@/components/blocks/Basic/Box";
import { Image } from "@/components/blocks/Basic/Image";

export default function HeroCarouselDemo() {
  return (
    <div className="h-screen">
      <Editor
        resolver={{
          HeroCarouselSimple,
          Text,
          Button,
          Section,
          Box,
          Image,
        }}
      >
        <Frame>
          <Element
            is={HeroCarouselSimple}
            title="MiniMax M1"
            description="Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance."
            primaryButtonText="Learn more"
            secondaryButtonText="Try Now"
            gradientFrom="#ff6b6b"
            gradientTo="#ee5a24"
            canvas
          />
        </Frame>
      </Editor>
    </div>
  );
}
