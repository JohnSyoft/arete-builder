import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  experience: string;
  specialties: string[];
}

interface Statistic {
  id: string;
  number: string;
  label: string;
  description: string;
}

interface HospitalityAbout1Props extends SectionProps {
  // About specific props
  title?: string;
  subtitle?: string;
  description?: string;
  story?: string;
  mission?: string;
  vision?: string;
  values?: string[];
  teamMembers?: TeamMember[];
  statistics?: Statistic[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showTeam?: boolean;
  showStats?: boolean;
  showValues?: boolean;
}

export function HospitalityAbout1({
  title = "About Our Hotel",
  subtitle = "Our Story",
  description = "Discover the rich history and commitment to excellence that has made us a premier destination for luxury hospitality.",
  story = "Founded in 1985, our hotel has been a beacon of luxury and hospitality for over three decades. What started as a small family business has grown into one of the most prestigious hospitality destinations, known for our unwavering commitment to guest satisfaction and attention to detail.",
  mission = "To provide exceptional hospitality experiences that create lasting memories for our guests while maintaining the highest standards of service, comfort, and luxury.",
  vision = "To be the world's most beloved luxury hotel brand, recognized for our innovative approach to hospitality and our commitment to sustainable luxury.",
  values = [
    "Excellence in Service",
    "Guest-Centric Approach",
    "Sustainable Luxury",
    "Cultural Heritage",
    "Innovation & Tradition"
  ],
  teamMembers = [
    {
      id: "ceo",
      name: "Sarah Mitchell",
      position: "Chief Executive Officer",
      bio: "With over 20 years in luxury hospitality, Sarah leads our team with passion and vision.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      experience: "20+ Years",
      specialties: ["Strategic Leadership", "Guest Relations", "Brand Development"]
    },
    {
      id: "gm",
      name: "Michael Chen",
      position: "General Manager",
      bio: "Michael ensures every guest experience exceeds expectations through meticulous attention to detail.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "15+ Years",
      specialties: ["Operations", "Team Management", "Quality Assurance"]
    },
    {
      id: "chef",
      name: "Elena Rodriguez",
      position: "Executive Chef",
      bio: "Elena creates culinary masterpieces that celebrate local flavors and international cuisine.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "12+ Years",
      specialties: ["Fine Dining", "Menu Development", "Culinary Innovation"]
    },
    {
      id: "concierge",
      name: "James Wilson",
      position: "Head Concierge",
      bio: "James has been creating unforgettable experiences for our guests for over a decade.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "10+ Years",
      specialties: ["Guest Services", "Event Planning", "Local Expertise"]
    }
  ],
  statistics = [
    {
      id: "years",
      number: "35+",
      label: "Years of Excellence",
      description: "Three decades of providing exceptional hospitality"
    },
    {
      id: "guests",
      number: "500K+",
      label: "Happy Guests",
      description: "Guests who have experienced our luxury service"
    },
    {
      id: "awards",
      number: "25+",
      label: "Awards Won",
      description: "International recognition for our service excellence"
    },
    {
      id: "countries",
      number: "50+",
      label: "Countries Served",
      description: "Guests from around the world choose our hotel"
    }
  ],
  primaryButtonText = "Book Your Stay",
  secondaryButtonText = "Contact Us",
  showTeam = true,
  showStats = true,
  showValues = true,
  ...props
}: HospitalityAbout1Props) {
  // Set section defaults for about
  const aboutProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...aboutProps}>
      <Element
        id="aboutContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-4"
            margin="text-center"
          >
            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-2"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-amber-600"
                textAlign="text-center"
              />
            </Element>

            {/* Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-4"
              display="block"
              canvas={false}
            >
              <CraftText
                text={title}
                tagName="h2"
                fontSize="text-4xl sm:text-5xl md:text-6xl"
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
              margin="mb-8"
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
                className="max-w-3xl mx-auto"
              />
            </Element>
          </Element>
        </Element>

        {/* Story Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-20"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={2}
            autoFit={false}
            minColumnWidth="400px"
            gap="gap-12"
            autoRows="auto"
          >
            {/* Story Text */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="stretch"
                gap="gap-6"
                margin=""
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text="Our Story"
                    tagName="h3"
                    fontSize="text-2xl sm:text-3xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    margin="mb-4"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={story}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={mission}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    className="italic"
                  />
                </Element>
              </Element>
            </Element>

            {/* Story Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <Element
                is={Card}
                variant="flat"
                shadow="xl"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={false}
                clickable={false}
                overflow="hidden"
                border={false}
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height="h-80 sm:h-96"
                  canvas={false}
                >
                  <CraftImage
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
                    alt="Hotel exterior"
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-2xl"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Statistics Section */}
        {showStats && (
          <Element
            is={Box}
            backgroundColor="bg-amber-50"
            padding="py-16 px-8"
            margin="mb-20"
            display="block"
            borderRadius="rounded-2xl"
            canvas
          >
            <Element
              is={Grid}
              canvas
              columns={4}
              autoFit={true}
              minColumnWidth="200px"
              gap="gap-8"
              autoRows="auto"
            >
              {statistics.map((stat, index) => (
                <Element
                  key={stat.id}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-2"
                    margin="text-center"
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={stat.number}
                        tagName="span"
                        fontSize="text-4xl sm:text-5xl"
                        fontWeight="font-bold"
                        color="text-amber-600"
                        textAlign="text-center"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={stat.label}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-center"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={stat.description}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* Values Section */}
        {showValues && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-20"
            display="block"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-12"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Our Values"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
              />
            </Element>

            <Element
              is={Grid}
              canvas
              columns={3}
              autoFit={true}
              minColumnWidth="250px"
              gap="gap-6"
              autoRows="auto"
            >
              {values.map((value, index) => (
                <Element
                  key={index}
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="rounded-xl"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-6"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="visible"
                  border={false}
                  className="hover:shadow-xl transition-all duration-300"
                  canvas
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-4"
                    margin="text-center"
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-4"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-16"
                      height="h-16"
                      canvas={false}
                    >
                      <CraftText
                        text="⭐"
                        tagName="span"
                        fontSize="text-2xl"
                        textAlign="text-center"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={value}
                        tagName="h4"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* Team Section */}
        {showTeam && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-20"
            display="block"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-12"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Meet Our Team"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
              />
            </Element>

            <Element
              is={Grid}
              canvas
              columns={4}
              autoFit={true}
              minColumnWidth="250px"
              gap="gap-8"
              autoRows="auto"
            >
              {teamMembers.map((member, index) => (
                <Element
                  key={member.id}
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="rounded-2xl"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-6"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="visible"
                  border={false}
                  className="hover:shadow-xl transition-all duration-300"
                  canvas
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-4"
                    margin="text-center"
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-24"
                      height="h-24"
                      canvas={false}
                    >
                      <CraftImage
                        src={member.image}
                        alt={member.name}
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-full"
                        margin=""
                        padding=""
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={member.name}
                        tagName="h4"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-center"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={member.position}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-semibold"
                        color="text-amber-600"
                        textAlign="text-center"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={member.bio}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-center"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="bg-gray-50"
                      padding="px-3 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      canvas={false}
                    >
                      <CraftText
                        text={member.experience}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-medium"
                        color="text-gray-700"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* CTA Section */}
        <Element
          is={Box}
          backgroundColor="bg-amber-50"
          padding="py-16 px-8"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-6"
            margin="text-center"
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftText
                text="Experience Our Hospitality"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
              />
            </Element>

            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-4"
              margin=""
              wrap="wrap"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={primaryButtonText}
                  size="lg"
                  backgroundColor="#d97706"
                  textColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-amber-600 transition-colors duration-300"
                />
              </Element>

              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={secondaryButtonText}
                  variant="outline"
                  size="lg"
                  backgroundColor="transparent"
                  textColor="#d97706"
                  borderColor="#d97706"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-amber-100 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityAbout1.craft = {
  displayName: "Hospitality About 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // About specific props
    title: "About Our Hotel",
    subtitle: "Our Story",
    description: "Discover the rich history and commitment to excellence that has made us a premier destination for luxury hospitality.",
    primaryButtonText: "Book Your Stay",
    secondaryButtonText: "Contact Us",
    showTeam: true,
    showStats: true,
    showValues: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
