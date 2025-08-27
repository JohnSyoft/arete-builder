import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalHowItWorks1Props extends SectionProps {
  // How It Works specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  doctorImage?: string;
  step1Number?: string;
  step1Title?: string;
  step1Description?: string;
  step2Number?: string;
  step2Title?: string;
  step2Description?: string;
  step3Number?: string;
  step3Title?: string;
  step3Description?: string;
  step4Number?: string;
  step4Title?: string;
  step4Description?: string;
}

export function MedicalHowItWorks1({
  sectionTag = "HOW IT WORKS",
  mainTitle = "How It Works in 4 Easy Steps",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  doctorImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
  step1Number = "01",
  step1Title = "Choose Your Service",
  step1Description = "Browse our range of medical specialties",
  step2Number = "02",
  step2Title = "Book Your Appointment",
  step2Description = "Pick a time that fits your schedule",
  step3Number = "03",
  step3Title = "Consult with Our Experts",
  step3Description = "In-person or via telemedicine",
  step4Number = "04",
  step4Title = "Get Personalized Treatment",
  step4Description = "Receive care that fits your unique needs",
  ...props
}: MedicalHowItWorks1Props) {
  // Set section defaults for how it works
  const howItWorksProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...howItWorksProps}>
      <Element
        id="medicalHowItWorksContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Content Grid */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="320px"
          gap="64px"
          autoRows="auto"
        >
          {/* Left Column - Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="start"
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
                textAlign="text-left"
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
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-left"
                margin="mb-6"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 48px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-lg sm:text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                lineHeight="leading-relaxed"
                margin="mb-12"
              />
            </Element>

            {/* Steps Grid */}
            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="200px"
              gap="24px"
              autoRows="auto"
            >
              {/* Step 1 */}
              <Element
                is={Card}
                variant="flat"
                shadow="none"
                borderRadius="16px"
                backgroundColor="#d1fae5"
                borderColor="transparent"
                padding="24px"
                margin="0"
                hoverable={false}
                clickable={false}
                overflow="visible"
                canvas
              >
                {/* Step Number */}
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  padding="12px 16px"
                  margin="0 0 16px 0"
                  display="inline-block"
                  borderRadius="8px"
                  width="auto"
                  canvas={false}
                >
                  <CraftText
                    text={step1Number}
                    tagName="span"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                  />
                </Element>

                {/* Step Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step1Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Step Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step1Description}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>

              {/* Step 2 */}
              <Element
                is={Card}
                variant="flat"
                shadow="none"
                borderRadius="16px"
                backgroundColor="#d1fae5"
                borderColor="transparent"
                padding="24px"
                margin="0"
                hoverable={false}
                clickable={false}
                overflow="visible"
                canvas
              >
                {/* Step Number */}
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  padding="12px 16px"
                  margin="0 0 16px 0"
                  display="inline-block"
                  borderRadius="8px"
                  width="auto"
                  canvas={false}
                >
                  <CraftText
                    text={step2Number}
                    tagName="span"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                  />
                </Element>

                {/* Step Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step2Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Step Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step2Description}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>

              {/* Step 3 */}
              <Element
                is={Card}
                variant="flat"
                shadow="none"
                borderRadius="16px"
                backgroundColor="#d1fae5"
                borderColor="transparent"
                padding="24px"
                margin="0"
                hoverable={false}
                clickable={false}
                overflow="visible"
                canvas
              >
                {/* Step Number */}
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  padding="12px 16px"
                  margin="0 0 16px 0"
                  display="inline-block"
                  borderRadius="8px"
                  width="auto"
                  canvas={false}
                >
                  <CraftText
                    text={step3Number}
                    tagName="span"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                  />
                </Element>

                {/* Step Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step3Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Step Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step3Description}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>

              {/* Step 4 */}
              <Element
                is={Card}
                variant="flat"
                shadow="none"
                borderRadius="16px"
                backgroundColor="#d1fae5"
                borderColor="transparent"
                padding="24px"
                margin="0"
                hoverable={false}
                clickable={false}
                overflow="visible"
                canvas
              >
                {/* Step Number */}
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  padding="12px 16px"
                  margin="0 0 16px 0"
                  display="inline-block"
                  borderRadius="8px"
                  width="auto"
                  canvas={false}
                >
                  <CraftText
                    text={step4Number}
                    tagName="span"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                  />
                </Element>

                {/* Step Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step4Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Step Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={step4Description}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>
          </Element>

          {/* Right Column - Doctor Image */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
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
                src={doctorImage}
                alt="Medical Professional at Work"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-lg"
                margin=""
                padding=""
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MedicalHowItWorks1.craft = {
  displayName: "Medical How It Works 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // How It Works specific props
    sectionTag: "HOW IT WORKS",
    mainTitle: "How It Works in 4 Easy Steps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    doctorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
    step1Number: "01",
    step1Title: "Choose Your Service",
    step1Description: "Browse our range of medical specialties",
    step2Number: "02",
    step2Title: "Book Your Appointment",
    step2Description: "Pick a time that fits your schedule",
    step3Number: "03",
    step3Title: "Consult with Our Experts",
    step3Description: "In-person or via telemedicine",
    step4Number: "04",
    step4Title: "Get Personalized Treatment",
    step4Description: "Receive care that fits your unique needs",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
