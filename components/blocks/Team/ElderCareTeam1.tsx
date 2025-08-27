import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ElderCareTeam1Props extends SectionProps {
  // Team specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  teamMembers?: {
    name: string;
    position: string;
    image: string;
    linkedinUrl?: string;
  }[];
}

export function ElderCareTeam1({
  sectionTag = "Our team",
  mainTitle = "Our team is dedicated to providing compassionate care and support to every senior.",
  description = "Meet the professionals who make a difference in the lives of our residents every day.",
  teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Executive Director",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Michael Adams",
      position: "Head Nurse",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Emily Roberts",
      position: "Caregiver",
      image:
        "https://images.unsplash.com/photo-1594824375914-c983e806a39d?w=400&h=400&fit=crop&crop=face",
      linkedinUrl: "https://www.linkedin.com/",
    },
  ],
  ...props
}: ElderCareTeam1Props) {
  // Set section defaults for team
  const teamProps = {
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
    <Section {...teamProps}>
      <Element
        id="elderCareTeamContent"
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

        {/* Team Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="280px"
          gap="32px"
          autoRows="auto"
        >
          {teamMembers.map((member, index) => (
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
              {/* Member Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                width="100%"
                height="280px"
                canvas
              >
                <CraftImage
                  src={member.image}
                  alt={member.name}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Member Info */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas
              >
                {/* Member Name */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={member.name}
                    tagName="h3"
                    fontSize="text-xl sm:text-2xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-center"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Member Position */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={member.position}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-teal-600"
                    textAlign="text-center"
                  />
                </Element>
              </Element>

              {/* LinkedIn Link */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="gap-0"
                margin="0"
                wrap="nowrap"
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="8px"
                  margin="0"
                  display="block"
                  borderRadius="50%"
                  border="1px solid #e5e7eb"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="20px"
                    height="20px"
                    canvas={false}
                  >
                    <CraftText
                      text="in"
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-bold"
                      color="text-teal-600"
                      textAlign="text-center"
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

ElderCareTeam1.craft = {
  displayName: "Elder Care Team 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Team specific props
    sectionTag: "Our team",
    mainTitle:
      "Our team is dedicated to providing compassionate care and support to every senior.",
    description:
      "Meet the professionals who make a difference in the lives of our residents every day.",
    teamMembers: [
      {
        name: "Sarah Johnson",
        position: "Executive Director",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        linkedinUrl: "https://www.linkedin.com/",
      },
      {
        name: "Michael Adams",
        position: "Head Nurse",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
        linkedinUrl: "https://www.linkedin.com/",
      },
      {
        name: "Emily Roberts",
        position: "Caregiver",
        image:
          "https://images.unsplash.com/photo-1594824375914-c983e806a39d?w=400&h=400&fit=crop&crop=face",
        linkedinUrl: "https://www.linkedin.com/",
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
