import { useNode, Element } from "@craftjs/core";
import { Box } from "../Basic/Box";
import { Text as CraftText } from "../Basic/Text";
import { Image as CraftImage } from "../Basic/Image";
import { Section } from "../Basic/Section";
import { Grid } from "../Basic/Grid";

export const HospitalityTestimonials1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const testimonials = [
    {
      quote:
        "An exceptional experience that exceeded every expectation. The attention to detail is remarkable.",
      name: "Sarah Johnson",
      title: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c3?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "Impeccable service and stunning facilities. This has become our preferred destination for luxury stays.",
      name: "Michael Chen",
      title: "Business Executive",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "The perfect blend of contemporary design and warm hospitality. Truly unforgettable.",
      name: "Emma Williams",
      title: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
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
      <Element
        id="hospitalityTestimonials1-section"
        is={Section}
        canvas
        backgroundColor="#fafafa"
        padding="0px"
      >
        {/* Minimal header */}
        <Element
          id="hospitalityTestimonials1-header"
          is={Box}
          width="100%"
          margin="0 auto 0px auto"
          display="block"
        >
          <Element
            id="hospitalityTestimonials1-title"
            is={CraftText}
            text="Testimonials"
            fontSize="text-6xl"
            fontWeight="font-thin"
            color="text-black"
            margin="0 auto 16px auto"
            textAlign="center"
            letterSpacing="tracking-tight"
          />

          <Element
            id="hospitalityTestimonials1-subtitle"
            is={CraftText}
            text="Experiences shared by our guests"
            fontSize="text-lg"
            color="rgba(0, 0, 0, 0.5)"
            margin="0 auto"
            textAlign="center"
            fontWeight="font-light"
            letterSpacing="tracking-wide"
          />
        </Element>

        {/* Clean testimonials grid */}
        <Element
          id="hospitalityTestimonials1-grid"
          is={Grid}
          columns={3}
          gap="24px"
        >
          {testimonials.map((testimonial, index) => (
            <Element
              key={`testimonial-${index}`}
              id={`hospitalityTestimonials1-card-${index}`}
              is={Box}
              backgroundColor="#ffffff"
              borderRadius="0px"
              display="block"
              border="none"
              padding="48px 32px"
            >
              <Element
                id={`hospitalityTestimonials1-quote-${index}`}
                is={CraftText}
                text={testimonial.quote}
                fontSize="text-lg"
                color="text-black"
                margin="0 0 32px 0"
                lineHeight="leading-relaxed"
                fontWeight="font-light"
                letterSpacing="tracking-wide"
              />

              <Element
                id={`hospitalityTestimonials1-author-${index}`}
                is={Box}
                display="flex"
                alignItems="center"
                gap="16px"
              >
                <Element
                  id={`hospitalityTestimonials1-avatar-${index}`}
                  is={CraftImage}
                  src={testimonial.image}
                  alt={testimonial.name}
                  width="48px"
                  height="48px"
                  borderRadius="50%"
                />

                <Element
                  id={`hospitalityTestimonials1-authorInfo-${index}`}
                  is={Box}
                  display="block"
                >
                  <Element
                    id={`hospitalityTestimonials1-name-${index}`}
                    is={CraftText}
                    text={testimonial.name}
                    fontSize="text-base"
                    fontWeight="font-light"
                    color="text-black"
                    margin="0 0 4px 0"
                    letterSpacing="tracking-wide"
                  />
                  <Element
                    id={`hospitalityTestimonials1-title-${index}`}
                    is={CraftText}
                    text={testimonial.title}
                    fontSize="text-sm"
                    color="rgba(0, 0, 0, 0.5)"
                    margin="0"
                    fontWeight="font-light"
                    letterSpacing="tracking-wide"
                  />
                </Element>
              </Element>
            </Element>
          ))}
        </Element>

        {/* Clean stats section */}
        <Element
          id="hospitalityTestimonials1-stats"
          is={Box}
          display="flex"
          justifyContent="center"
          gap="80px"
          margin="80px auto 0 auto"
        >
          <Element id="hospitalityTestimonials1-stat1" is={Box} display="block">
            <Element
              id="hospitalityTestimonials1-statNumber1"
              is={CraftText}
              text="4.9"
              fontSize="text-4xl"
              fontWeight="font-thin"
              color="text-black"
              margin="0 0 8px 0"
              textAlign="center"
              letterSpacing="tracking-tight"
            />
            <Element
              id="hospitalityTestimonials1-statLabel1"
              is={CraftText}
              text="Average Rating"
              fontSize="text-sm"
              color="rgba(0, 0, 0, 0.5)"
              margin="0"
              textAlign="center"
              letterSpacing="tracking-wide"
              fontWeight="font-light"
            />
          </Element>

          <Element id="hospitalityTestimonials1-stat2" is={Box} display="block">
            <Element
              id="hospitalityTestimonials1-statNumber2"
              is={CraftText}
              text="100%"
              fontSize="text-4xl"
              fontWeight="font-thin"
              color="text-black"
              margin="0 0 8px 0"
              textAlign="center"
              letterSpacing="tracking-tight"
            />
            <Element
              id="hospitalityTestimonials1-statLabel2"
              is={CraftText}
              text="Satisfaction"
              fontSize="text-sm"
              color="rgba(0, 0, 0, 0.5)"
              margin="0"
              textAlign="center"
              letterSpacing="tracking-wide"
              fontWeight="font-light"
            />
          </Element>
        </Element>
      </Element>
    </div>
  );
};

HospitalityTestimonials1.craft = {
  displayName: "Hospitality Testimonials 1",
  props: {},
  rules: {
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
