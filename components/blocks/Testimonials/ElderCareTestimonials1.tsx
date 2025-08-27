import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ElderCareTestimonials1Props extends SectionProps {
  // Testimonials specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  testimonials?: {
    quote: string;
    author: string;
    relationship: string;
    rating: number;
    image: string;
  }[];
}

export function ElderCareTestimonials1({
  sectionTag = "Testimonials",
  mainTitle = "Families trust us with their most precious loved ones",
  description = "Hear from families who have experienced our compassionate care and professional service firsthand.",
  testimonials = [
    {
      quote:
        "The staff at ElderHaven has been absolutely wonderful. My mother receives exceptional care and has made many friends. I can't imagine her anywhere else.",
      author: "Jennifer Martinez",
      relationship: "Daughter of Resident",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    {
      quote:
        "I was worried about transitioning my father to assisted living, but the team made it seamless. He's happier and healthier than ever before.",
      author: "Robert Chen",
      relationship: "Son of Resident",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      quote:
        "The compassionate care during my husband's final days was beyond anything I could have hoped for. They treated him with dignity and respect.",
      author: "Mary Thompson",
      relationship: "Spouse of Former Resident",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    },
  ],
  ...props
}: ElderCareTestimonials1Props) {
  // Set section defaults for testimonials
  const testimonialsProps = {
    backgroundColor: "#f8fffe",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  // Generate star rating
  const generateStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <Section {...testimonialsProps}>
      <Element
        id="elderCareTestimonialsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Section Header */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 64px 0"
          display="block"
          canvas
        >
          {/* Section Tag */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 16px 0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={sectionTag}
              tagName="p"
              fontSize="text-sm sm:text-base"
              fontWeight="font-semibold"
              color="text-teal-600"
              textAlign="text-center"
              letterSpacing="tracking-wider"
              textTransform="uppercase"
            />
          </Element>

          {/* Main Title */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 24px 0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={mainTitle}
              tagName="h2"
              fontSize="text-3xl sm:text-4xl md:text-5xl"
              fontWeight="font-bold"
              color="text-gray-900"
              textAlign="text-center"
              lineHeight="leading-tight"
            />
          </Element>

          {/* Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={description}
              tagName="p"
              fontSize="text-lg sm:text-xl"
              fontWeight="font-normal"
              color="text-gray-600"
              textAlign="text-center"
              lineHeight="leading-relaxed"
            />
          </Element>
        </Element>

        {/* Testimonials Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="320px"
          gap="32px"
          autoRows="auto"
        >
          {testimonials.map((testimonial, index) => (
            <Element
              key={index}
              is={Card}
              variant="flat"
              shadow="lg"
              borderRadius="16px"
              backgroundColor="#ffffff"
              borderColor="#e5e7eb"
              padding="32px"
              margin="0"
              hoverable={true}
              clickable={false}
              overflow="visible"
              canvas
            >
              {/* Star Rating */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={generateStars(testimonial.rating)}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-normal"
                  color="text-yellow-400"
                  textAlign="text-left"
                />
              </Element>

              {/* Quote */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={`"${testimonial.quote}"`}
                  tagName="p"
                  fontSize="text-base sm:text-lg"
                  fontWeight="font-normal"
                  color="text-gray-700"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Author Info */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-4"
                margin="0"
                wrap="nowrap"
              >
                {/* Author Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="60px"
                  height="60px"
                  borderRadius="50%"
                  canvas
                >
                  <CraftImage
                    src={testimonial.image}
                    alt={testimonial.author}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-full"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Author Details */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  {/* Author Name */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 4px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={testimonial.author}
                      tagName="p"
                      fontSize="text-base sm:text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                    />
                  </Element>

                  {/* Author Relationship */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={testimonial.relationship}
                      tagName="p"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-teal-600"
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>
          ))}
        </Element>
      </Element>
    </Section>
  );
}

ElderCareTestimonials1.craft = {
  displayName: "Elder Care Testimonials 1",
  props: {
    // Section props
    backgroundColor: "#f8fffe",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Testimonials specific props
    sectionTag: "Testimonials",
    mainTitle: "Families trust us with their most precious loved ones",
    description:
      "Hear from families who have experienced our compassionate care and professional service firsthand.",
    testimonials: [
      {
        quote:
          "The staff at ElderHaven has been absolutely wonderful. My mother receives exceptional care and has made many friends. I can't imagine her anywhere else.",
        author: "Jennifer Martinez",
        relationship: "Daughter of Resident",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
      {
        quote:
          "I was worried about transitioning my father to assisted living, but the team made it seamless. He's happier and healthier than ever before.",
        author: "Robert Chen",
        relationship: "Son of Resident",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
      {
        quote:
          "The compassionate care during my husband's final days was beyond anything I could have hoped for. They treated him with dignity and respect.",
        author: "Mary Thompson",
        relationship: "Spouse of Former Resident",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
