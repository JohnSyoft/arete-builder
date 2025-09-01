import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticTestimonials2Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  featuredTestimonial?: string;
  featuredAuthor?: string;
  featuredAuthorTitle?: string;
  featuredImage?: string;

  // Testimonial slider items
  testimonial1Quote?: string;
  testimonial1Author?: string;
  testimonial1AuthorTitle?: string;
  testimonial1Image?: string;

  testimonial2Quote?: string;
  testimonial2Author?: string;
  testimonial2AuthorTitle?: string;
  testimonial2Image?: string;

  testimonial3Quote?: string;
  testimonial3Author?: string;
  testimonial3AuthorTitle?: string;
  testimonial3Image?: string;

  testimonial4Quote?: string;
  testimonial4Author?: string;
  testimonial4AuthorTitle?: string;
  testimonial4Image?: string;

  // Colors and styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  cardBackgroundColor?: string;
  cardBorderColor?: string;
  [key: string]: any;
}

export const CosmeticTestimonials2 = ({
  sectionTag = "TESTIMONIALS",
  mainTitle = "Life-Changing results from our clients",
  featuredTestimonial = "The expertise and care I received here were outstanding. I couldn't be happier with my results Thanks to the team, I feel more confident than ever before. Highly recommend From consultation to aftercare, everything was perfect. My transformation exceeded my expectations.!",
  featuredAuthor = "Kristin Watson",
  featuredAuthorTitle = "Co. founder",
  featuredImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/testimonial-image.jpg",

  testimonial1Quote = "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
  testimonial1Author = "Kristin Watson",
  testimonial1AuthorTitle = "Co. founder",
  testimonial1Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-1.jpg",

  testimonial2Quote = "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
  testimonial2Author = "Brooklyn Simmons",
  testimonial2AuthorTitle = "Skin Experts",
  testimonial2Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-2.jpg",

  testimonial3Quote = "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
  testimonial3Author = "Darlene Robertson",
  testimonial3AuthorTitle = "Co. founder",
  testimonial3Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-3.jpg",

  testimonial4Quote = "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
  testimonial4Author = "Arlene McCoy",
  testimonial4AuthorTitle = "Co. founder",
  testimonial4Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-4.jpg",

  backgroundColor = "#8B4513",
  textColor = "#FFFFFF",
  accentColor = "#E67E22",
  cardBackgroundColor = "transparent",
  cardBorderColor = "rgba(255, 255, 255, 0.1)",
  ...props
}: CosmeticTestimonials2Props) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults
  const sectionProps = {
    backgroundColor: backgroundColor,
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    borderRadius: "20px",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  const testimonials = [
    {
      quote: testimonial1Quote,
      author: testimonial1Author,
      authorTitle: testimonial1AuthorTitle,
      image: testimonial1Image,
    },
    {
      quote: testimonial2Quote,
      author: testimonial2Author,
      authorTitle: testimonial2AuthorTitle,
      image: testimonial2Image,
    },
    {
      quote: testimonial3Quote,
      author: testimonial3Author,
      authorTitle: testimonial3AuthorTitle,
      image: testimonial3Image,
    },
    {
      quote: testimonial4Quote,
      author: testimonial4Author,
      authorTitle: testimonial4AuthorTitle,
      image: testimonial4Image,
    },
  ];

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`m-4 relative ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""
        }`}
    >
      <Section {...sectionProps}>
        <Element
          id="cosmeticTestimonials2Container"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Content Container */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="48px"
            margin="0"
            display="block"
            borderRadius="30px"
            canvas
          >
            {/* Main Layout - Two Columns */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="space-between"
              alignItems="stretch"
              gap="gap-12"
              margin="0"
              wrap="nowrap"
            >
              {/* Left Column - Featured Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="45%"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="100%"
                  height="600px"
                  canvas
                >
                  <CraftImage
                    src={featuredImage}
                    alt="Customer testimonial - satisfied client"
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-3xl"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>

              {/* Right Column - Content and Carousel */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                justifyContent="between"
                width="55%"
                canvas
              >
                {/* Top Section - Header Content */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 40px 0"
                  display="block"
                  canvas
                >
                  {/* Header Section */}
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin="mb-6"
                    wrap="nowrap"
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill={accentColor}
                          className="w-5 h-5"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={sectionTag}
                        tagName="h3"
                        fontSize="text-sm"
                        fontWeight="font-semibold"
                        color={`text-white`}
                        textAlign="text-left"
                        letterSpacing="tracking-[0.2em]"
                      />
                    </Element>
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
                      fontSize="text-3xl md:text-4xl lg:text-5xl"
                      fontWeight="font-bold"
                      color={`text-white`}
                      textAlign="text-left"
                      margin="0"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  {/* Featured Testimonial */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 24px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={`"${featuredTestimonial}"`}
                      tagName="p"
                      fontSize="text-base md:text-lg"
                      fontWeight="font-normal"
                      color={`text-white`}
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                      margin="0"
                    />
                  </Element>

                  {/* Featured Author */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 8px 0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={featuredAuthor}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color={`text-white`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={featuredAuthorTitle}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color={`text-white`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>


              </Element>

            </Element>
            {/* Bottom Section - Testimonials Carousel */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <Element
                is={Grid}
                canvas
                columns={3}
                autoFit={true}
                minColumnWidth="250px"
                gap="20px"
                autoRows="auto"
              >
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <Element
                    key={index}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    borderRadius="20px"
                    canvas
                  >
                    {/* Testimonial Card */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div
                        className="p-6 transition-all duration-300"
                        style={{
                          backgroundColor: 'transparent'
                        }}
                      >
                        {/* Quote */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0 0 16px 0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={`"${testimonial.quote}"`}
                            tagName="p"
                            fontSize="text-sm"
                            fontWeight="font-normal"
                            color={`text-white`}
                            textAlign="text-left"
                            lineHeight="leading-relaxed"
                            margin="0"
                          />
                        </Element>

                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                          {/* Author Image */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="block"
                            width="50px"
                            height="50px"
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
                          <div className="flex flex-col">
                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0"
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={testimonial.author}
                                tagName="h4"
                                fontSize="text-base"
                                fontWeight="font-bold"
                                color={`text-white`}
                                textAlign="text-left"
                                margin="0"
                              />
                            </Element>

                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0"
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={testimonial.authorTitle}
                                tagName="p"
                                fontSize="text-sm"
                                fontWeight="font-normal"
                                color={`text-white`}
                                textAlign="text-left"
                                margin="0"
                              />
                            </Element>
                          </div>
                        </div>
                      </div>
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Cosmetic Testimonials 2
        </div>
      )}
    </div>
  );
};

CosmeticTestimonials2.craft = {
  displayName: "Cosmetic Testimonials 2",
  props: {
    sectionTag: "TESTIMONIALS",
    mainTitle: "Life-Changing results from our clients",
    featuredTestimonial: "The expertise and care I received here were outstanding. I couldn't be happier with my results Thanks to the team, I feel more confident than ever before. Highly recommend From consultation to aftercare, everything was perfect. My transformation exceeded my expectations.!",
    featuredAuthor: "Kristin Watson",
    featuredAuthorTitle: "Co. founder",
    featuredImage: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/testimonial-image.jpg",

    testimonial1Quote: "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
    testimonial1Author: "Kristin Watson",
    testimonial1AuthorTitle: "Co. founder",
    testimonial1Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-1.jpg",

    testimonial2Quote: "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
    testimonial2Author: "Brooklyn Simmons",
    testimonial2AuthorTitle: "Skin Experts",
    testimonial2Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-2.jpg",

    testimonial3Quote: "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
    testimonial3Author: "Darlene Robertson",
    testimonial3AuthorTitle: "Co. founder",
    testimonial3Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-3.jpg",

    testimonial4Quote: "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance. The clinic truly understands beauty!",
    testimonial4Author: "Arlene McCoy",
    testimonial4AuthorTitle: "Co. founder",
    testimonial4Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-4.jpg",

    backgroundColor: "#8B4513",
    textColor: "#FFFFFF",
    accentColor: "#E67E22",
    cardBackgroundColor: "transparent",
    cardBorderColor: "rgba(255, 255, 255, 0.1)",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
