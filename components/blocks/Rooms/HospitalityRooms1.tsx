import { useNode, Element } from "@craftjs/core";
import { Box } from "../Basic/Box";
import { Text as CraftText } from "../Basic/Text";
import { Image as CraftImage } from "../Basic/Image";
import { Button as CraftButton } from "../Basic/Button";
import { Section } from "../Basic/Section";
import { Grid } from "../Basic/Grid";

export const HospitalityRooms1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const rooms = [
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      title: "Signature Suite",
      area: "85 m²",
      price: "From $450",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      title: "Urban Loft",
      area: "65 m²",
      price: "From $320",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      title: "Penthouse",
      area: "120 m²",
      price: "From $650",
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
          id="hospitalityRooms1-content-wrapper"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Minimal header */}
          <Element
            id="hospitalityRooms1-header"
            is={Box}
            width="100%"
            margin="0 auto 0px auto"
            display="block"
          >
            <Element
              id="hospitalityRooms1-title"
              is={CraftText}
              text="Spaces"
              fontSize="text-6xl"
              fontWeight="font-thin"
              color="text-black"
              margin="0 auto 16px auto"
              textAlign="center"
              letterSpacing="tracking-tight"
            />

            <Element
              id="hospitalityRooms1-subtitle"
              is={CraftText}
              text="Meticulously designed sanctuaries"
              fontSize="text-lg"
              color="rgba(0, 0, 0, 0.5)"
              margin="0 auto"
              textAlign="center"
              fontWeight="font-light"
              letterSpacing="tracking-wide"
            />
          </Element>

          {/* Ultra-modern room grid */}
          <Element id="hospitalityRooms1-grid" is={Grid} columns={3} gap="24px">
            {rooms.map((room, index) => (
              <Element
                key={`room-${index}`}
                id={`hospitalityRooms1-card-${index}`}
                is={Box}
                backgroundColor="#ffffff"
                borderRadius="0px"
                display="block"
                border="none"
              >
                <Element
                  id={`hospitalityRooms1-image-${index}`}
                  is={CraftImage}
                  src={room.image}
                  alt={room.title}
                  width="100%"
                  height="400px"
                  borderRadius="0px"
                />

                <Element
                  id={`hospitalityRooms1-content-${index}`}
                  is={Box}
                  padding="32px 0"
                  display="block"
                >
                  <Element
                    id={`hospitalityRooms1-roomHeader-${index}`}
                    is={Box}
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    margin="0 0 16px 0"
                  >
                    <Element
                      id={`hospitalityRooms1-roomTitle-${index}`}
                      is={CraftText}
                      text={room.title}
                      fontSize="text-2xl"
                      fontWeight="font-light"
                      color="text-black"
                      margin="0"
                      letterSpacing="tracking-wide"
                    />
                    <Element
                      id={`hospitalityRooms1-area-${index}`}
                      is={CraftText}
                      text={room.area}
                      fontSize="text-sm"
                      color="rgba(0, 0, 0, 0.5)"
                      margin="0"
                      fontWeight="font-light"
                    />
                  </Element>

                  <Element
                    id={`hospitalityRooms1-price-${index}`}
                    is={CraftText}
                    text={room.price}
                    fontSize="text-base"
                    color="rgba(0, 0, 0, 0.7)"
                    margin="0 0 24px 0"
                    fontWeight="font-light"
                    letterSpacing="tracking-wide"
                  />

                  <Element
                    id={`hospitalityRooms1-button-${index}`}
                    is={CraftButton}
                    text="Reserve"
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

HospitalityRooms1.craft = {
  displayName: "Hospitality Rooms 1",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
