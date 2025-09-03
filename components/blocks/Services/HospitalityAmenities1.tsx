import { useNode, Element } from "@craftjs/core";
import { Box } from "../Basic/Box";
import { Text as CraftText } from "../Basic/Text";
import { Image as CraftImage } from "../Basic/Image";
import { Section } from "../Basic/Section";
import { Grid } from "../Basic/Grid";

export const HospitalityAmenities1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const amenities = [
    {
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=500&q=80",
      title: "Spa & Wellness",
      description: "Complete relaxation center",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=500&q=80",
      title: "Fine Dining",
      description: "Michelin-starred cuisine",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=500&q=80",
      title: "Swimming Pool",
      description: "Infinity rooftop pool",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
      title: "Fitness Center",
      description: "State-of-the-art equipment",
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
          id="hospitalityAmenities1-content-wrapper"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Minimal header */}
          <Element
            id="hospitalityAmenities1-header"
            is={Box}
            width="100%"
            margin="0 auto 0px auto"
            display="block"
          >
            <Element
              id="hospitalityAmenities1-title"
              is={CraftText}
              text="Amenities"
              fontSize="text-6xl"
              fontWeight="font-thin"
              color="text-black"
              margin="0 auto 16px auto"
              textAlign="center"
              letterSpacing="tracking-tight"
            />

            <Element
              id="hospitalityAmenities1-subtitle"
              is={CraftText}
              text="Premium facilities designed for your comfort"
              fontSize="text-lg"
              color="rgba(0, 0, 0, 0.5)"
              margin="0 auto"
              textAlign="center"
              fontWeight="font-light"
              letterSpacing="tracking-wide"
            />
          </Element>

          {/* Clean amenities grid */}
          <Element
            id="hospitalityAmenities1-grid"
            is={Grid}
            columns={4}
            gap="24px"
          >
            {amenities.map((amenity, index) => (
              <Element
                key={`amenity-${index}`}
                id={`hospitalityAmenities1-card-${index}`}
                is={Box}
                backgroundColor="#ffffff"
                borderRadius="0px"
                display="block"
                border="none"
              >
                <Element
                  id={`hospitalityAmenities1-image-${index}`}
                  is={CraftImage}
                  src={amenity.image}
                  alt={amenity.title}
                  width="100%"
                  height="300px"
                  borderRadius="0px"
                />

                <Element
                  id={`hospitalityAmenities1-content-${index}`}
                  is={Box}
                  padding="32px 0"
                  display="block"
                >
                  <Element
                    id={`hospitalityAmenities1-title-${index}`}
                    is={CraftText}
                    text={amenity.title}
                    fontSize="text-xl"
                    fontWeight="font-light"
                    color="text-black"
                    margin="0 0 8px 0"
                    letterSpacing="tracking-wide"
                  />

                  <Element
                    id={`hospitalityAmenities1-desc-${index}`}
                    is={CraftText}
                    text={amenity.description}
                    fontSize="text-base"
                    color="rgba(0, 0, 0, 0.5)"
                    margin="0"
                    fontWeight="font-light"
                    letterSpacing="tracking-wide"
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

HospitalityAmenities1.craft = {
  displayName: "Hospitality Amenities 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
