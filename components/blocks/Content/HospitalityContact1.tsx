import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ContactInfo {
  id: string;
  type: "phone" | "email" | "address" | "hours";
  label: string;
  value: string;
  icon: string;
  description?: string;
}

interface Department {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  icon: string;
}

interface HospitalityContact1Props extends SectionProps {
  // Contact specific props
  title?: string;
  subtitle?: string;
  description?: string;
  contactInfo?: ContactInfo[];
  departments?: Department[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showMap?: boolean;
  showDepartments?: boolean;
  showContactForm?: boolean;
}

export function HospitalityContact1({
  title = "Contact Us",
  subtitle= "Get in Touch",
  description = "We're here to help make your stay perfect. Reach out to us through any of the channels below, and our team will be happy to assist you.",
  contactInfo = [
    {
      id: "phone",
      type: "phone",
      label: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📞",
      description: "24/7 Guest Services"
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      value: "info@luxuryhotel.com",
      icon: "✉️",
      description: "General Inquiries"
    },
    {
      id: "address",
      type: "address",
      label: "Address",
      value: "123 Luxury Boulevard, Suite 100, Miami, FL 33101",
      icon: "📍",
      description: "Visit Our Hotel"
    },
    {
      id: "hours",
      type: "hours",
      label: "Reception Hours",
      value: "24/7",
      icon: "🕒",
      description: "Always Available"
    }
  ],
  departments = [
    {
      id: "reservations",
      name: "Reservations",
      email: "reservations@luxuryhotel.com",
      phone: "+1 (555) 123-4568",
      description: "Book your stay and manage reservations",
      icon: "🏨"
    },
    {
      id: "concierge",
      name: "Concierge",
      email: "concierge@luxuryhotel.com",
      phone: "+1 (555) 123-4569",
      description: "Personal assistance and recommendations",
      icon: "🎩"
    },
    {
      id: "events",
      name: "Events & Weddings",
      email: "events@luxuryhotel.com",
      phone: "+1 (555) 123-4570",
      description: "Plan your special occasions",
      icon: "💍"
    },
    {
      id: "spa",
      name: "Spa & Wellness",
      email: "spa@luxuryhotel.com",
      phone: "+1 (555) 123-4571",
      description: "Relaxation and wellness services",
      icon: "🧘"
    }
  ],
  primaryButtonText = "Send Message",
  secondaryButtonText = "Call Now",
  showMap = true,
  showDepartments = true,
  showContactForm = true,
  ...props
}: HospitalityContact1Props) {
  // Set section defaults for contact
  const contactProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...contactProps}>
      <Element
        id="contactContent"
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

        {/* Contact Information Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={4}
            autoFit={true}
            minColumnWidth="250px"
            gap="gap-6"
            autoRows="auto"
          >
            {contactInfo.map((info, index) => (
              <Element
                key={info.id}
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
                      text={info.icon}
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
                      text={info.label}
                      tagName="h4"
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
                      text={info.value}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color="text-amber-600"
                      textAlign="text-center"
                    />
                  </Element>

                  {info.description && (
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={info.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-center"
                      />
                    </Element>
                  )}
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Main Content Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
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
            alignItems="start"
          >
            {/* Contact Form */}
            {showContactForm && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas
              >
                <Element
                  is={Card}
                  variant="flat"
                  shadow="2xl"
                  borderRadius="rounded-2xl"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-8"
                  margin=""
                  hoverable={false}
                  clickable={false}
                  overflow="visible"
                  border={false}
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
                        text="Send us a Message"
                        tagName="h3"
                        fontSize="text-2xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-left"
                        margin="mb-4"
                      />
                    </Element>

                    {/* Form Fields */}
                    <Element
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
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        gap="gap-4"
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
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="mb-2"
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text="First Name"
                              tagName="label"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-gray-700"
                              textAlign="text-left"
                            />
                          </Element>
                          <Element
                            is={Box}
                            backgroundColor="bg-gray-50"
                            padding="p-4"
                            margin=""
                            display="block"
                            borderRadius="rounded-lg"
                            borderColor="border-gray-200"
                            borderWidth="border"
                            canvas={false}
                          >
                            <CraftText
                              text="Enter your first name"
                              tagName="span"
                              fontSize="text-base"
                              fontWeight="font-normal"
                              color="text-gray-500"
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>

                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="mb-2"
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text="Last Name"
                              tagName="label"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-gray-700"
                              textAlign="text-left"
                            />
                          </Element>
                          <Element
                            is={Box}
                            backgroundColor="bg-gray-50"
                            padding="p-4"
                            margin=""
                            display="block"
                            borderRadius="rounded-lg"
                            borderColor="border-gray-200"
                            borderWidth="border"
                            canvas={false}
                          >
                            <CraftText
                              text="Enter your last name"
                              tagName="span"
                              fontSize="text-base"
                              fontWeight="font-normal"
                              color="text-gray-500"
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>
                      </Element>
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="mb-2"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text="Email"
                          tagName="label"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-gray-700"
                          textAlign="text-left"
                        />
                      </Element>
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        borderColor="border-gray-200"
                        borderWidth="border"
                        canvas={false}
                      >
                        <CraftText
                          text="Enter your email address"
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="mb-2"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text="Subject"
                          tagName="label"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-gray-700"
                          textAlign="text-left"
                        />
                      </Element>
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        borderColor="border-gray-200"
                        borderWidth="border"
                        canvas={false}
                      >
                        <CraftText
                          text="What is this about?"
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="mb-2"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text="Message"
                          tagName="label"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-gray-700"
                          textAlign="text-left"
                        />
                      </Element>
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        borderColor="border-gray-200"
                        borderWidth="border"
                        height="h-32"
                        canvas={false}
                      >
                        <CraftText
                          text="Tell us how we can help you..."
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    </Element>

                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-4"
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
            )}

            {/* Map and Departments */}
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
                gap="gap-8"
                margin=""
              >
                {/* Map */}
                {showMap && (
                  <Element
                    is={Card}
                    variant="flat"
                    shadow="lg"
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
                      height="h-64"
                      canvas={false}
                    >
                      <CraftImage
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                        alt="Hotel location map"
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-2xl"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </Element>
                )}

                {/* Departments */}
                {showDepartments && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="mb-6"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Contact Departments"
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>

                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="stretch"
                      gap="gap-4"
                      margin=""
                    >
                      {departments.map((dept, index) => (
                        <Element
                          key={dept.id}
                          is={Card}
                          variant="flat"
                          shadow="sm"
                          borderRadius="rounded-xl"
                          backgroundColor="bg-white"
                          borderColor="border-gray-200"
                          padding="p-4"
                          margin=""
                          hoverable={true}
                          clickable={false}
                          overflow="visible"
                          border={true}
                          className="hover:shadow-md transition-all duration-200"
                          canvas
                        >
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="start"
                            alignItems="start"
                            gap="gap-4"
                            margin=""
                          >
                            <Element
                              is={Box}
                              backgroundColor="bg-amber-100"
                              padding="p-3"
                              margin=""
                              display="block"
                              borderRadius="rounded-lg"
                              width="w-12"
                              height="h-12"
                              canvas={false}
                            >
                              <CraftText
                                text={dept.icon}
                                tagName="span"
                                fontSize="text-lg"
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
                              <Element
                                is={Flex}
                                canvas
                                flexDirection="column"
                                justifyContent="start"
                                alignItems="stretch"
                                gap="gap-2"
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
                                    text={dept.name}
                                    tagName="h4"
                                    fontSize="text-lg"
                                    fontWeight="font-semibold"
                                    color="text-gray-900"
                                    textAlign="text-left"
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
                                    text={dept.description}
                                    tagName="p"
                                    fontSize="text-sm"
                                    fontWeight="font-normal"
                                    color="text-gray-600"
                                    textAlign="text-left"
                                  />
                                </Element>

                                <Element
                                  is={Flex}
                                  canvas
                                  flexDirection="row"
                                  justifyContent="start"
                                  alignItems="center"
                                  gap="gap-4"
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
                                      text={dept.email}
                                      tagName="span"
                                      fontSize="text-sm"
                                      fontWeight="font-medium"
                                      color="text-amber-600"
                                      textAlign="text-left"
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
                                      text={dept.phone}
                                      tagName="span"
                                      fontSize="text-sm"
                                      fontWeight="font-medium"
                                      color="text-amber-600"
                                      textAlign="text-left"
                                    />
                                  </Element>
                                </Element>
                              </Element>
                            </Element>
                          </Element>
                        </Element>
                      ))}
                    </Element>
                  </Element>
                )}
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityContact1.craft = {
  displayName: "Hospitality Contact 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Contact specific props
    title: "Contact Us",
    subtitle: "Get in Touch",
    description: "We're here to help make your stay perfect. Reach out to us through any of the channels below, and our team will be happy to assist you.",
    primaryButtonText: "Send Message",
    secondaryButtonText: "Call Now",
    showMap: true,
    showDepartments: true,
    showContactForm: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
