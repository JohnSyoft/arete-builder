import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Input } from "@/components/blocks/Basic/Input";
import { Textarea } from "@/components/blocks/Basic/Textarea";
import { Checkbox } from "@/components/blocks/Basic/Checkbox";

interface ContactInfo {
  id: string;
  icon: string;
  title: string;
  value: string;
  link?: string;
}

interface AccountingContact1Props extends SectionProps {
  // Contact specific props
  pageTitle?: string;
  pageSubtitle?: string;
  backgroundImage?: string;
  mainTitle?: string;
  description?: string;
  contactInfo?: ContactInfo[];
  formTitle?: string;
  // Settings
  showPageTitle?: boolean;
  showMainTitle?: boolean;
  showContactInfo?: boolean;
  showContactForm?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingContact1({
  pageTitle = "Contact us",
  pageSubtitle = "Get in touch with our team",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop",
  mainTitle = "Ready to get started?",
  description = "We're here to help you with all your accounting needs. Get in touch with our expert team today.",
  contactInfo = [
    {
      id: "phone",
      icon: "📞",
      title: "Phone",
      value: "0222 8899900",
      link: "tel:02228899900"
    },
    {
      id: "email",
      icon: "📧",
      title: "Email",
      value: "info@crafto.com",
      link: "mailto:info@crafto.com"
    },
    {
      id: "address",
      icon: "📍",
      title: "Address",
      value: "Broadway, 24th Floor, San Francisco",
      link: "https://maps.google.com"
    },
    {
      id: "hours",
      icon: "🕒",
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: undefined
    }
  ],
  formTitle = "Send us a message",
  showPageTitle = true,
  showMainTitle = true,
  showContactInfo = true,
  showContactForm = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingContact1Props) {
  // Set section defaults for contact
  const contactProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...contactProps}>
      <Element
        id="accountingContactContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Page Title Section */}
        {showPageTitle && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-16"
            display="block"
            position="relative"
            width="w-full"
            height="h-96"
            overflow="hidden"
            canvas={false}
          >
            {/* Background Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-0"
              left="left-0"
              right="right-0"
              bottom="bottom-0"
              canvas={false}
            >
              <CraftImage
                src={backgroundImage}
                alt="Contact Us"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                margin=""
                padding=""
              />
            </Element>

            {/* Dark Overlay */}
            <Element
              is={Box}
              backgroundColor="bg-black"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-0"
              left="left-0"
              right="right-0"
              bottom="bottom-0"
              className="opacity-60"
              canvas={false}
            />

            {/* Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="relative"
              width="w-full"
              height="h-full"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                gap="gap-4"
                margin="h-full px-8 py-16"
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
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-yellow-400"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-8"
                      height="h-1"
                      canvas={false}
                    />
                    
                    <CraftText
                      text={pageTitle}
                      tagName="h1"
                      fontSize="text-2xl sm:text-3xl"
                      fontWeight="font-semibold"
                      color="text-white"
                      textAlign="text-left"
                      className="drop-shadow-lg"
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
                  <CraftText
                    text={pageSubtitle}
                    tagName="h2"
                    fontSize="text-4xl sm:text-5xl"
                    fontWeight="font-medium"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                    className="drop-shadow-lg"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        )}

        {/* Main Content */}
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
            alignItems="start"
            gap="gap-12"
            margin=""
          >
            {/* Left Side - Contact Info and Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-1/2"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap="gap-8"
                margin=""
              >
                {/* Main Title and Description */}
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
                    alignItems="start"
                    gap="gap-4"
                    margin=""
                  >
                    <CraftText
                      text={mainTitle}
                      tagName="h2"
                      fontSize="text-3xl sm:text-4xl"
                      fontWeight="font-bold"
                      color={textColor}
                      textAlign="text-left"
                      lineHeight="leading-tight"
                    />
                    
                    <CraftText
                      text={description}
                      tagName="p"
                      fontSize="text-lg"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                    />
                  </Element>
                </Element>

                {/* Contact Information */}
                {showContactInfo && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    canvas={false}
                  >
                    <Element
                      is={Grid}
                      canvas
                      columns={2}
                      autoFit={false}
                      minColumnWidth="200px"
                      gap="gap-6"
                      autoRows="auto"
                    >
                      {contactInfo.map((info) => (
                        <Element
                          key={info.id}
                          is={Card}
                          variant="flat"
                          shadow="sm"
                          borderRadius="rounded-lg"
                          backgroundColor="bg-gray-50"
                          borderColor=""
                          padding="p-6"
                          margin=""
                          hoverable={true}
                          clickable={!!info.link}
                          overflow="visible"
                          border={false}
                          className="group hover:shadow-lg transition-all duration-200"
                          canvas
                        >
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="column"
                            justifyContent="start"
                            alignItems="start"
                            gap="gap-3"
                            margin=""
                          >
                            <Element
                              is={Box}
                              backgroundColor="bg-yellow-100"
                              padding="p-3"
                              margin=""
                              display="block"
                              width="w-12"
                              height="h-12"
                              borderRadius="rounded-lg"
                              canvas={false}
                            >
                              <CraftText
                                text={info.icon}
                                tagName="span"
                                fontSize="text-xl"
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
                                alignItems="start"
                                gap="gap-1"
                                margin=""
                              >
                                <CraftText
                                  text={info.title}
                                  tagName="h4"
                                  fontSize="text-sm"
                                  fontWeight="font-semibold"
                                  color="text-gray-500"
                                  textAlign="text-left"
                                  className="uppercase tracking-wider"
                                />
                                
                                <CraftText
                                  text={info.value}
                                  tagName={info.link ? "a" : "span"}
                                  href={info.link}
                                  fontSize="text-base"
                                  fontWeight="font-medium"
                                  color={textColor}
                                  textAlign="text-left"
                                  className={info.link ? "hover:text-blue-600 transition-colors duration-200" : ""}
                                />
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

            {/* Right Side - Contact Form */}
            {showContactForm && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                width="w-1/2"
                canvas={false}
              >
                <Element
                  is={Card}
                  variant="flat"
                  shadow="2xl"
                  borderRadius="rounded-lg"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-8"
                  margin=""
                  hoverable={false}
                  clickable={false}
                  overflow="visible"
                  border={false}
                  className="w-full"
                  canvas
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-6"
                    margin=""
                  >
                    {/* Form Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={formTitle}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-semibold"
                        color={textColor}
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Form Fields */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-full"
                      canvas={false}
                    >
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="column"
                        justifyContent="start"
                        alignItems="stretch"
                        gap="gap-4"
                        margin=""
                      >
                        {/* Name Field */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Input
                            placeholder="Your name*"
                            type="text"
                            size="md"
                            backgroundColor="bg-gray-50"
                            textColor="text-gray-800"
                            borderColor="border-gray-200"
                            borderRadius="rounded-lg"
                            padding="px-4 py-3"
                            width="w-full"
                          />
                        </Element>

                        {/* Email Field */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Input
                            placeholder="Your email address*"
                            type="email"
                            size="md"
                            backgroundColor="bg-gray-50"
                            textColor="text-gray-800"
                            borderColor="border-gray-200"
                            borderRadius="rounded-lg"
                            padding="px-4 py-3"
                            width="w-full"
                          />
                        </Element>

                        {/* Phone Field */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Input
                            placeholder="Your phone number"
                            type="tel"
                            size="md"
                            backgroundColor="bg-gray-50"
                            textColor="text-gray-800"
                            borderColor="border-gray-200"
                            borderRadius="rounded-lg"
                            padding="px-4 py-3"
                            width="w-full"
                          />
                        </Element>

                        {/* Subject Field */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Input
                            placeholder="Subject"
                            type="text"
                            size="md"
                            backgroundColor="bg-gray-50"
                            textColor="text-gray-800"
                            borderColor="border-gray-200"
                            borderRadius="rounded-lg"
                            padding="px-4 py-3"
                            width="w-full"
                          />
                        </Element>

                        {/* Message Field */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Textarea
                            placeholder="Your message*"
                            rows={4}
                            backgroundColor="bg-gray-50"
                            textColor="text-gray-800"
                            borderColor="border-gray-200"
                            borderRadius="rounded-lg"
                            padding="px-4 py-3"
                            width="w-full"
                          />
                        </Element>

                        {/* Terms Checkbox */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Checkbox
                            label="I agree to the terms of service and privacy policy."
                            checked={false}
                            size="md"
                            textColor="text-gray-700"
                          />
                        </Element>

                        {/* Submit Button */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <CraftButton
                            text="Send Message"
                            size="lg"
                            backgroundColor="#1f40af"
                            textColor="#ffffff"
                            borderRadius="rounded-lg"
                            padding="px-6 py-4"
                            width="w-full"
                            className="hover:bg-blue-700 transition-colors duration-200"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingContact1.craft = {
  displayName: "Accounting Contact 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Contact specific props
    pageTitle: "Contact us",
    pageSubtitle: "Get in touch with our team",
    mainTitle: "Ready to get started?",
    description: "We're here to help you with all your accounting needs. Get in touch with our expert team today.",
    formTitle: "Send us a message",
    showPageTitle: true,
    showMainTitle: true,
    showContactInfo: true,
    showContactForm: true,
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#fbbf24",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
