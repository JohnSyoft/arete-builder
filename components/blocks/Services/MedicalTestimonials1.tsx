import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalTestimonials1Props extends SectionProps {
  // Medical Testimonials specific props
  sectionTag?: string;
  mainTitle?: string;
  testimonial1Name?: string;
  testimonial1Designation?: string;
  testimonial1Text?: string;
  testimonial1Image?: string;
  testimonial2Name?: string;
  testimonial2Designation?: string;
  testimonial2Text?: string;
  testimonial2Image?: string;
  testimonial3Name?: string;
  testimonial3Designation?: string;
  testimonial3Text?: string;
  testimonial3Image?: string;
}

export function MedicalTestimonials1({
  sectionTag = "WHAT OUR PATIENTS SAY",
  mainTitle = "Patient Experiences That Speak for Themselves",
  testimonial1Name = "Testimonial #3",
  testimonial1Designation = "Designation",
  testimonial1Text = "Phasellus eget commodo diam. Maecenas gravida metus tristique dolor dignissim posuere. Duis in risus et neque auctor pellentesque sed dum.",
  testimonial1Image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  testimonial2Name = "Testimonial #4",
  testimonial2Designation = "Designation",
  testimonial2Text = "Suspendisse blandit nisl venenatis lacus ultrices, non ultrices nibh dapibus. Aenean non semper urna, sollicitudin scelerisque dolor. Maecenas quam ex.",
  testimonial2Image = "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=150&h=150&fit=crop&crop=face",
  testimonial3Name = "Testimonial #1",
  testimonial3Designation = "Designation",
  testimonial3Text = "Vivamus vel lacus vitae ante porta commodo nec in est. Vivamus mattis sollicitudin tincidunt. Aenean ac iaculis. Sed condimentum augue lacinia ut.",
  testimonial3Image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  ...props
}: MedicalTestimonials1Props) {
  // Set section defaults for medical testimonials
  const testimonialsProps = {
    backgroundColor: "#f1f5f9", // light gray background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...testimonialsProps}>
      <Element
        id="medicalTestimonialsContent"
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
          margin="0 0 16px 0"
          display="block"
          canvas={false}
        >
          <CraftText
            text={sectionTag}
            tagName="p"
            fontSize="text-sm sm:text-base"
            fontWeight="font-medium"
            color="text-teal-600"
            textAlign="text-center"
            margin="mb-2"
            letterSpacing="tracking-wider"
          />
        </Element>

        {/* Main Title */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 auto 48px auto"
          display="block"
          width="100%"
          canvas={false}
        >
          <CraftText
            text={mainTitle}
            tagName="h2"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-bold"
            color="text-gray-900"
            textAlign="text-center"
            margin="mb-6"
            lineHeight="leading-tight"
          />
        </Element>

        {/* Testimonials Cards Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="320px"
          gap="32px"
          autoRows="auto"
        >
          {/* Testimonial 1 Card */}
          <Element
            is={Card}
            variant="flat"
            shadow="none"
            borderRadius="16px"
            backgroundColor="#d1fae5"
            borderColor="transparent"
            padding="32px"
            margin="0"
            hoverable={false}
            clickable={false}
            overflow="visible"
            canvas
          >
            {/* Card Header with Profile and Quote */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="flex"
              alignItems="start"
              justifyContent="between"
              canvas
            >
              {/* Profile Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="80px"
                height="80px"
                borderRadius="50%"
                border="4px solid #ffffff"
                canvas
              >
                <CraftImage
                  src={testimonial1Image}
                  alt={testimonial1Name}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-full"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Quote Icon */}
              <Element
                is={Box}
                backgroundColor="#065f46"
                padding="16px"
                margin="0"
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="64px"
                height="64px"
                canvas={false}
              >
                <CraftText
                  text={'"'}
                  tagName="span"
                  fontSize="text-4xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                  margin=""
                />
              </Element>
            </Element>

            {/* Testimonial Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial1Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Designation */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial1Designation}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-left"
                />
              </Element>

              {/* Testimonial Text */}
              <Element
                is={Box}
                margin="0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial1Text}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>
            </Element>
          </Element>

          {/* Testimonial 2 Card */}
          <Element
            is={Card}
            variant="flat"
            shadow="none"
            borderRadius="16px"
            backgroundColor="#d1fae5"
            borderColor="transparent"
            padding="32px"
            margin="0"
            hoverable={false}
            clickable={false}
            overflow="visible"
            canvas
          >
            {/* Card Header with Profile and Quote */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="flex"
              alignItems="start"
              justifyContent="between"
              canvas
            >
              {/* Profile Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="80px"
                height="80px"
                borderRadius="50%"
                border="4px solid #ffffff"
                canvas
              >
                <CraftImage
                  src={testimonial2Image}
                  alt={testimonial2Name}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-full"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Quote Icon */}
              <Element
                is={Box}
                backgroundColor="#065f46"
                padding="16px"
                margin="0"
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="64px"
                height="64px"
                canvas={false}
              >
                <CraftText
                  text={'"'}
                  tagName="span"
                  fontSize="text-4xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                  margin=""
                />
              </Element>
            </Element>

            {/* Testimonial Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial2Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Designation */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial2Designation}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-left"
                />
              </Element>

              {/* Testimonial Text */}
              <Element
                is={Box}
                margin="0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial2Text}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>
            </Element>
          </Element>

          {/* Testimonial 3 Card */}
          <Element
            is={Card}
            variant="flat"
            shadow="none"
            borderRadius="16px"
            backgroundColor="#d1fae5"
            borderColor="transparent"
            padding="32px"
            margin="0"
            hoverable={false}
            clickable={false}
            overflow="visible"
            canvas
          >
            {/* Card Header with Profile and Quote */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="flex"
              alignItems="start"
              justifyContent="between"
              canvas
            >
              {/* Profile Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="80px"
                height="80px"
                borderRadius="50%"
                border="4px solid #ffffff"
                canvas
              >
                <CraftImage
                  src={testimonial3Image}
                  alt={testimonial3Name}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-full"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Quote Icon */}
              <Element
                is={Box}
                backgroundColor="#065f46"
                padding="16px"
                margin="0"
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="64px"
                height="64px"
                canvas={false}
              >
                <CraftText
                  text={'"'}
                  tagName="span"
                  fontSize="text-4xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                  margin=""
                />
              </Element>
            </Element>

            {/* Testimonial Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial3Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Designation */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial3Designation}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-left"
                />
              </Element>

              {/* Testimonial Text */}
              <Element
                is={Box}
                margin="0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={testimonial3Text}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MedicalTestimonials1.craft = {
  displayName: "Medical Testimonials 1",
  props: {
    // Section props
    backgroundColor: "#f1f5f9", // light gray background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Medical Testimonials specific props
    sectionTag: "WHAT OUR PATIENTS SAY",
    mainTitle: "Patient Experiences That Speak for Themselves",
    testimonial1Name: "Testimonial #3",
    testimonial1Designation: "Designation",
    testimonial1Text:
      "Phasellus eget commodo diam. Maecenas gravida metus tristique dolor dignissim posuere. Duis in risus et neque auctor pellentesque sed dum.",
    testimonial1Image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    testimonial2Name: "Testimonial #4",
    testimonial2Designation: "Designation",
    testimonial2Text:
      "Suspendisse blandit nisl venenatis lacus ultrices, non ultrices nibh dapibus. Aenean non semper urna, sollicitudin scelerisque dolor. Maecenas quam ex.",
    testimonial2Image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=150&h=150&fit=crop&crop=face",
    testimonial3Name: "Testimonial #1",
    testimonial3Designation: "Designation",
    testimonial3Text:
      "Vivamus vel lacus vitae ante porta commodo nec in est. Vivamus mattis sollicitudin tincidunt. Aenean ac iaculis. Sed condimentum augue lacinia ut.",
    testimonial3Image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
