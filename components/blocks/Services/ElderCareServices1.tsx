import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ElderCareServices1Props extends SectionProps {
  // Services specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  services?: {
    title: string;
    description: string;
    icon: string;
    features: string[];
    buttonText: string;
  }[];
}

export function ElderCareServices1({
  sectionTag = "Services",
  mainTitle = "Services tailored to meet the unique needs of each senior.",
  description = "Our experienced team is dedicated to providing compassionate care that promotes comfort, dignity, and independence.",
  services = [
    {
      title: "Hospice Care",
      description:
        "Compassionate end-of-life care that focuses on providing comfort and dignity, supporting both the senior and their family during this difficult time.",
      icon: "https://cdn.prod.website-files.com/682477be57026b85bf30914c/68259f75932f43f3c22ee94c_Frame%20(62).svg",
      features: [
        "Compassionate and Personalized Care",
        "Pain and Symptom Management",
        "Emotional and Psychological Support",
      ],
      buttonText: "Learn more",
    },
    {
      title: "Assisted Living",
      description:
        "A safe and supportive environment for seniors who require assistance with daily living but still wish to maintain their independence.",
      icon: "https://cdn.prod.website-files.com/682477be57026b85bf30914c/68259f75932f43f3c22ee94c_Frame%20(62).svg",
      features: [
        "Safe and Secure Environment",
        "Social Engagement and Community",
        "Housekeeping and Maintenance Services",
      ],
      buttonText: "Learn more",
    },
    {
      title: "Palliative Care",
      description:
        "Focused on providing relief from the symptoms and stress of serious illness, palliative care enhances quality of life by addressing physical, emotional, and spiritual needs.",
      icon: "https://cdn.prod.website-files.com/682477be57026b85bf30914c/68259f75932f43f3c22ee94c_Frame%20(62).svg",
      features: [
        "Comprehensive Symptom Management",
        "Emotional and Psychological Support",
        "Support for Families and Caregivers",
      ],
      buttonText: "Learn more",
    },
  ],
  ...props
}: ElderCareServices1Props) {
  // Set section defaults for services
  const servicesProps = {
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
    <Section {...servicesProps}>
      <Element
        id="elderCareServicesContent"
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

        {/* Services Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="300px"
          gap="32px"
          autoRows="auto"
        >
          {services.map((service, index) => (
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
              {/* Service Icon */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                width="64px"
                height="64px"
                canvas
              >
                <CraftImage
                  src={service.icon}
                  alt="Service Icon"
                  width="w-full"
                  height="h-full"
                  objectFit="object-contain"
                  borderRadius="rounded-none"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Service Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={service.title}
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Service Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={service.description}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Service Features */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas
              >
                {service.features.map((feature, featureIndex) => (
                  <Element
                    key={featureIndex}
                    is={Box}
                    backgroundColor="transparent"
                    padding="8px 0"
                    margin="0"
                    display="flex"
                    alignItems="center"
                    canvas
                  >
                    {/* Check Icon */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 12px 0 0"
                      display="block"
                      width="20px"
                      height="20px"
                      canvas
                    >
                      <CraftImage
                        src={service.icon}
                        alt="Check Icon"
                        width="w-full"
                        height="h-full"
                        objectFit="object-contain"
                        borderRadius="rounded-none"
                        margin=""
                        padding=""
                      />
                    </Element>

                    {/* Feature Text */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={feature}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color="text-gray-700"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                ))}
              </Element>

              {/* Service Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={service.buttonText}
                  size="default"
                  backgroundColor="#14b8a6"
                  textColor="#ffffff"
                  borderRadius="8px"
                  padding="px-6 py-3"
                  width="w-full"
                />
              </Element>
            </Element>
          ))}
        </Element>
      </Element>
    </Section>
  );
}

ElderCareServices1.craft = {
  displayName: "Elder Care Services 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Services specific props
    sectionTag: "Services",
    mainTitle: "Services tailored to meet the unique needs of each senior.",
    description:
      "Our experienced team is dedicated to providing compassionate care that promotes comfort, dignity, and independence.",
    services: [
      {
        title: "Hospice Care",
        description:
          "Compassionate end-of-life care that focuses on providing comfort and dignity, supporting both the senior and their family during this difficult time.",
        icon: "https://cdn.prod.website-files.com/682477be57026b85bf30914c/68259f75932f43f3c22ee94c_Frame%20(62).svg",
        features: [
          "Compassionate and Personalized Care",
          "Pain and Symptom Management",
          "Emotional and Psychological Support",
        ],
        buttonText: "Learn more",
      },
      {
        title: "Assisted Living",
        description:
          "A safe and supportive environment for seniors who require assistance with daily living but still wish to maintain their independence.",
        icon: "https://cdn.prod.website-files.com/682477be57026b85bf30914c/68259f75932f43f3c22ee94c_Frame%20(62).svg",
        features: [
          "Safe and Secure Environment",
          "Social Engagement and Community",
          "Housekeeping and Maintenance Services",
        ],
        buttonText: "Learn more",
      },
      {
        title: "Palliative Care",
        description:
          "Focused on providing relief from the symptoms and stress of serious illness, palliative care enhances quality of life by addressing physical, emotional, and spiritual needs.",
        icon: "https://cdn.prod.website-files.com/682477be57026b85bf30914c/68259f75932f43f3c22ee94c_Frame%20(62).svg",
        features: [
          "Comprehensive Symptom Management",
          "Emotional and Psychological Support",
          "Support for Families and Caregivers",
        ],
        buttonText: "Learn more",
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
