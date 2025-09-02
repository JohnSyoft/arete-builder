import { useNode, Element } from "@craftjs/core";
import { Box } from "../Basic/Box";
import { Text as CraftText } from "../Basic/Text";
import { Image as CraftImage } from "../Basic/Image";
import { Button as CraftButton } from "../Basic/Button";
import { Section } from "../Basic/Section";

export const HospitalityHero1 = () => {
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
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Element
        id="hospitalityHero1-section"
        is={Section}
        canvas
        backgroundColor="#fafafa"
        padding="0px"
      >
        <div className="mx-auto">
          {/* Clean minimal hero layout */}
          <Element
            id="hospitalityHero1-content"
            is={Box}
            display="flex"
            alignItems="center"
            gap="80px"
            minHeight="600px"
          >
            {/* Left side - Content */}
            <Element
              id="hospitalityHero1-textContent"
              is={Box}
              display="block"
              width="50%"
            >
              <Element
                id="hospitalityHero1-title"
                is={CraftText}
                text="Excellence"
                fontSize="text-8xl"
                fontWeight="font-thin"
                color="text-black"
                margin="0 0 32px 0"
                lineHeight="leading-tight"
                letterSpacing="tracking-tight"
              />

              <Element
                id="hospitalityHero1-subtitle"
                is={CraftText}
                text="Redefining hospitality through contemporary design and uncompromising service standards"
                fontSize="text-xl"
                color="rgba(0, 0, 0, 0.6)"
                margin="0 0 48px 0"
                lineHeight="leading-relaxed"
                fontWeight="font-light"
                letterSpacing="tracking-wide"
              />

              <Element
                id="hospitalityHero1-button"
                is={CraftButton}
                text="Experience More"
                backgroundColor="#000000"
                textColor="#ffffff"
                padding="16px 48px"
                borderRadius="0px"
                width="fit-content"
              />
            </Element>

            {/* Right side - Image */}
            <Element
              id="hospitalityHero1-image"
              is={CraftImage}
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
              alt="Modern hotel lobby"
              width="50%"
              height="600px"
              borderRadius="0px"
            />
          </Element>

          {/* Minimal stats below */}
          <Element
            id="hospitalityHero1-stats"
            is={Box}
            display="flex"
            justifyContent="center"
            gap="80px"
            margin="0px auto 0 auto"
          >
            <Element id="hospitalityHero1-stat1" is={Box} display="block">
              <Element
                id="hospitalityHero1-statNumber1"
                is={CraftText}
                text="95%"
                fontSize="text-4xl"
                fontWeight="font-thin"
                color="text-black"
                margin="0 0 8px 0"
                letterSpacing="tracking-tight"
              />
              <Element
                id="hospitalityHero1-statLabel1"
                is={CraftText}
                text="Guest Satisfaction"
                fontSize="text-sm"
                color="rgba(0, 0, 0, 0.5)"
                margin="0"
                letterSpacing="tracking-wide"
                fontWeight="font-light"
              />
            </Element>

            <Element id="hospitalityHero1-stat2" is={Box} display="block">
              <Element
                id="hospitalityHero1-statNumber2"
                is={CraftText}
                text="24/7"
                fontSize="text-4xl"
                fontWeight="font-thin"
                color="text-black"
                margin="0 0 8px 0"
                letterSpacing="tracking-tight"
              />
              <Element
                id="hospitalityHero1-statLabel2"
                is={CraftText}
                text="Concierge Service"
                fontSize="text-sm"
                color="rgba(0, 0, 0, 0.5)"
                margin="0"
                letterSpacing="tracking-wide"
                fontWeight="font-light"
              />
            </Element>
          </Element>
        </div>
      </Element>
    </div>
  );
};

HospitalityHero1.craft = {
  displayName: "Hospitality Hero 1",
  props: {},
  rules: {
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
