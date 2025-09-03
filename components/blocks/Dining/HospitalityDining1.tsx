import { useNode, Element } from "@craftjs/core";
import { Box } from "../Basic/Box";
import { Text as CraftText } from "../Basic/Text";
import { Image as CraftImage } from "../Basic/Image";
import { Button as CraftButton } from "../Basic/Button";
import { Section } from "../Basic/Section";
import { Grid } from "../Basic/Grid";

export const HospitalityDining1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const diningOptions = [
    {
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
      title: "Fine Dining",
      description: "Michelin-starred cuisine",
      price: "From $120",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
      title: "Rooftop Lounge",
      description: "Craft cocktails & city views",
      price: "From $25",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
      title: "Café & Patisserie",
      description: "Artisanal coffee & pastries",
      price: "From $12",
    },
  ];

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
      <Section backgroundColor="#fafafa" padding="0px">
        <Element
          id="hospitalityDining1-content-wrapper"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Minimal header */}
          <Element
            id="hospitalityDining1-header"
            is={Box}
            width="100%"
            margin="0 auto 0px auto"
            display="block"
          >
            <Element
              id="hospitalityDining1-title"
              is={CraftText}
              text="Dining"
              fontSize="text-6xl"
              fontWeight="font-thin"
              color="text-black"
              margin="0 auto 16px auto"
              textAlign="center"
              letterSpacing="tracking-tight"
            />

            <Element
              id="hospitalityDining1-subtitle"
              is={CraftText}
              text="Culinary experiences crafted by master chefs"
              fontSize="text-lg"
              color="rgba(0, 0, 0, 0.5)"
              margin="0 auto"
              textAlign="center"
              fontWeight="font-light"
              letterSpacing="tracking-wide"
            />
          </Element>

          {/* Clean dining grid */}
          <Element
            id="hospitalityDining1-grid"
            is={Grid}
            columns={3}
            gap="24px"
          >
            {diningOptions.map((option, index) => (
              <Element
                key={`dining-${index}`}
                id={`hospitalityDining1-card-${index}`}
                is={Box}
                backgroundColor="#ffffff"
                borderRadius="0px"
                display="block"
                border="none"
              >
                <Element
                  id={`hospitalityDining1-image-${index}`}
                  is={CraftImage}
                  src={option.image}
                  alt={option.title}
                  width="100%"
                  height="400px"
                  borderRadius="0px"
                />

                <Element
                  id={`hospitalityDining1-content-${index}`}
                  is={Box}
                  padding="32px 0"
                  display="block"
                >
                  <Element
                    id={`hospitalityDining1-header-${index}`}
                    is={Box}
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    margin="0 0 16px 0"
                  >
                    <Element
                      id={`hospitalityDining1-title-${index}`}
                      is={CraftText}
                      text={option.title}
                      fontSize="text-2xl"
                      fontWeight="font-light"
                      color="text-black"
                      margin="0"
                      letterSpacing="tracking-wide"
                    />
                    <Element
                      id={`hospitalityDining1-price-${index}`}
                      is={CraftText}
                      text={option.price}
                      fontSize="text-sm"
                      color="rgba(0, 0, 0, 0.5)"
                      margin="0"
                      fontWeight="font-light"
                    />
                  </Element>

                  <Element
                    id={`hospitalityDining1-desc-${index}`}
                    is={CraftText}
                    text={option.description}
                    fontSize="text-base"
                    color="rgba(0, 0, 0, 0.7)"
                    margin="0 0 24px 0"
                    fontWeight="font-light"
                    letterSpacing="tracking-wide"
                  />

                  <Element
                    id={`hospitalityDining1-button-${index}`}
                    is={CraftButton}
                    text="Reserve Table"
                    backgroundColor="#000000"
                    textColor="#ffffff"
                    padding="12px 32px"
                    borderRadius="0px"
                    width="100%"
                  />
                </Element>
              </Element>
            ))}
          </Element>
        </Element>
      </Section>
    </div>
  );
};

HospitalityDining1.craft = {
  displayName: "Hospitality Dining 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
