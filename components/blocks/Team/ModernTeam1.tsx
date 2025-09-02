import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernTeam1Props extends SectionProps {
  // Header content
  sectionTitle?: string;
  sectionDescription?: string;
  
  // Team members
  teamMembers?: Array<{
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socialLinks?: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  }>;
  
  // Stats
  companyStats?: Array<{
    id: string;
    number: string;
    label: string;
  }>;
  
  // Company info
  companyDescription?: string;
  joinTeamText?: string;
  joinTeamDescription?: string;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function ModernTeam1({
  sectionTitle = "Meet Our Amazing Team",
  sectionDescription = "We're a diverse group of passionate individuals working together to build the future of technology.",
  teamMembers = [
    {
      id: "ceo",
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech. Previously VP of Engineering at Google.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "Twitter", url: "https://twitter.com", icon: "𝕏" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
      ]
    },
    {
      id: "cto",
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect passionate about scalable systems and AI. Former Tesla lead engineer.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "GitHub", url: "https://github.com", icon: "🐙" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
      ]
    },
    {
      id: "head-design",
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "UX/UI expert creating beautiful, user-centered experiences. Design lead at Airbnb for 5 years.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "Dribbble", url: "https://dribbble.com", icon: "🎨" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
      ]
    },
    {
      id: "head-marketing",
      name: "David Thompson",
      role: "Head of Marketing",
      bio: "Growth hacker and brand strategist. Scaled 3 startups from 0 to 100M+ users.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "Twitter", url: "https://twitter.com", icon: "𝕏" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
      ]
    },
    {
      id: "head-product",
      name: "Lisa Wang",
      role: "Head of Product",
      bio: "Product visionary focused on user-driven innovation. Former PM at Spotify and Netflix.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "Medium", url: "https://medium.com", icon: "📝" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
      ]
    },
    {
      id: "head-engineering",
      name: "Alex Kumar",
      role: "Head of Engineering",
      bio: "Backend systems expert and team leader. Built infrastructure serving 500M+ users at Meta.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "GitHub", url: "https://github.com", icon: "🐙" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
      ]
    }
  ],
  companyStats = [
    { id: "team-size", number: "50+", label: "Team Members" },
    { id: "countries", number: "12", label: "Countries" },
    { id: "experience", number: "100+", label: "Years Combined Experience" },
    { id: "projects", number: "200+", label: "Projects Delivered" }
  ],
  companyDescription = "We believe in building not just great products, but a great culture. Our team combines deep technical expertise with creative problem-solving to deliver exceptional results for our clients.",
  joinTeamText = "Join Our Team",
  joinTeamDescription = "We're always looking for talented individuals to join our growing team.",
  primaryColor = "#4F46E5",
  accentColor = "#F59E0B",
  ...props
}: ModernTeam1Props) {
  
  // Set section defaults
  const teamProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...teamProps}>
      <Element
        id="modernTeamContent"
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
          margin="0 0 64px 0"
          display="block"
          canvas
        >
          {/* Section Title */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 16px 0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <CraftText
              text={sectionTitle}
              tagName="h2"
              fontSize="text-4xl sm:text-5xl lg:text-6xl"
              fontWeight="font-black"
              color="text-gray-900"
              textAlign="text-center"
              margin="0"
              lineHeight="leading-tight"
            />
          </Element>

          {/* Section Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <div className="max-w-3xl">
              <CraftText
                text={sectionDescription}
                tagName="p"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </div>
          </Element>
        </Element>

        {/* Company Stats */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 96px 0"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={4}
            autoFit={true}
            minColumnWidth="200px"
            gap="32px"
            autoRows="auto"
          >
            {companyStats.map((stat) => (
              <Element
                key={stat.id}
                id={`companyStat-${stat.id}`}
                is={Box}
                backgroundColor="transparent"
                padding="32px"
                margin="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="20px"
                border="1px solid rgba(0, 0, 0, 0.1)"
                canvas
              >
                {/* Stat Number */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={stat.number}
                    tagName="div"
                    fontSize="text-4xl sm:text-5xl"
                    fontWeight="font-black"
                    color={primaryColor}
                    textAlign="text-center"
                    margin="0"
                  />
                </Element>

                {/* Stat Label */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={stat.label}
                    tagName="div"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-600"
                    textAlign="text-center"
                    margin="0"
                  />
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Team Members Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="350px"
          gap="32px"
          autoRows="auto"
          margin="0 0 96px 0"
        >
          {teamMembers.map((member) => (
            <Element
              key={member.id}
              id={`teamMember-${member.id}`}
              is={Card}
              variant="flat"
              shadow="lg"
              borderRadius="24px"
              backgroundColor="#ffffff"
              borderColor="rgba(0, 0, 0, 0.1)"
              padding="32px"
              margin="0"
              hoverable={true}
              clickable={false}
              canvas
            >
              {/* Member Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="flex"
                justifyContent="center"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="120px"
                  height="120px"
                  borderRadius="50%"
                  border="4px solid rgba(79, 70, 229, 0.1)"
                  canvas
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
              </Element>

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
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  margin="0"
                />
              </Element>

              {/* Member Role */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={member.role}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color={primaryColor}
                  textAlign="text-center"
                  margin="0"
                />
              </Element>

              {/* Member Bio */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
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
                  margin="0"
                />
              </Element>

              {/* Social Links */}
              {member.socialLinks && (
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-3"
                  margin="0"
                  wrap="wrap"
                >
                  {member.socialLinks.map((social, index) => (
                    <Element
                      key={`${member.id}-social-${index}`}
                      is={Box}
                      backgroundColor="rgba(79, 70, 229, 0.1)"
                      padding="8px"
                      margin="0"
                      borderRadius="8px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="36px"
                      height="36px"
                      hoverable={true}
                      canvas={false}
                    >
                      <div className="text-sm">{social.icon}</div>
                    </Element>
                  ))}
                </Element>
              )}
            </Element>
          ))}
        </Element>

        {/* Company Description & Join CTA */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="400px"
          gap="64px"
          autoRows="auto"
        >
          {/* Company Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            canvas
          >
            {/* Company Values Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Our Culture & Values"
                tagName="h3"
                fontSize="text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-left"
                margin="0"
              />
            </Element>

            {/* Company Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={companyDescription}
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </Element>
          </Element>

          {/* Join Team CTA */}
          <Element
            is={Card}
            variant="flat"
            shadow="xl"
            borderRadius="24px"
            backgroundColor={primaryColor}
            borderColor="transparent"
            padding="48px"
            margin="0"
            hoverable={false}
            clickable={false}
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              canvas
            >
              {/* Join Team Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={joinTeamText}
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                  margin="0"
                />
              </Element>

              {/* Join Team Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={joinTeamDescription}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="rgba(255, 255, 255, 0.9)"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </Element>

              {/* Join Team Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text="View Open Positions"
                  size="lg"
                  backgroundColor="#ffffff"
                  textColor={primaryColor}
                  borderRadius="12px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernTeam1.craft = {
  displayName: "Modern Team 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Team specific props
    sectionTitle: "Meet Our Amazing Team",
    sectionDescription: "We're a diverse group of passionate individuals working together to build the future of technology.",
    teamMembers: [
      {
        id: "ceo",
        name: "Sarah Johnson",
        role: "CEO & Founder",
        bio: "Visionary leader with 15+ years in tech. Previously VP of Engineering at Google.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=400&h=400&fit=crop&crop=face",
        socialLinks: [
          { platform: "Twitter", url: "https://twitter.com", icon: "𝕏" },
          { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
        ]
      },
      {
        id: "cto",
        name: "Michael Chen",
        role: "CTO & Co-Founder",
        bio: "Full-stack architect passionate about scalable systems and AI. Former Tesla lead engineer.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        socialLinks: [
          { platform: "GitHub", url: "https://github.com", icon: "🐙" },
          { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
        ]
      },
      {
        id: "head-design",
        name: "Emily Rodriguez",
        role: "Head of Design",
        bio: "UX/UI expert creating beautiful, user-centered experiences. Design lead at Airbnb for 5 years.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        socialLinks: [
          { platform: "Dribbble", url: "https://dribbble.com", icon: "🎨" },
          { platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" }
        ]
      }
    ],
    companyStats: [
      { id: "team-size", number: "50+", label: "Team Members" },
      { id: "countries", number: "12", label: "Countries" },
      { id: "experience", number: "100+", label: "Years Combined Experience" },
      { id: "projects", number: "200+", label: "Projects Delivered" }
    ],
    companyDescription: "We believe in building not just great products, but a great culture. Our team combines deep technical expertise with creative problem-solving to deliver exceptional results for our clients.",
    joinTeamText: "Join Our Team",
    joinTeamDescription: "We're always looking for talented individuals to join our growing team.",
    primaryColor: "#4F46E5",
    accentColor: "#F59E0B",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};