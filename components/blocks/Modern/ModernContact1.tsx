import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernContact1Props extends SectionProps {
  // Header content
  sectionTitle?: string;
  sectionDescription?: string;
  
  // Contact methods
  contactMethods?: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    contactInfo: string;
    buttonText?: string;
  }>;
  
  // Form fields
  formTitle?: string;
  formDescription?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  submitButtonText?: string;
  
  // Contact info
  officeInfo?: {
    title: string;
    address: string;
    hours: string;
    phone: string;
    email: string;
  };
  
  // Map/Image
  mapImage?: string;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function ModernContact1({
  sectionTitle = "Get in Touch",
  sectionDescription = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  contactMethods = [
    {
      id: "email",
      icon: "✉️",
      title: "Email Us",
      description: "Send us an email anytime",
      contactInfo: "hello@company.com",
      buttonText: "Send Email"
    },
    {
      id: "phone",
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contactInfo: "+1 (555) 123-4567",
      buttonText: "Call Now"
    },
    {
      id: "chat",
      icon: "💬",
      title: "Live Chat",
      description: "We're online right now",
      contactInfo: "Start a conversation",
      buttonText: "Chat Now"
    }
  ],
  formTitle = "Send us a Message",
  formDescription = "Fill out the form below and we'll get back to you within 24 hours.",
  nameLabel = "Full Name",
  emailLabel = "Email Address",
  messageLabel = "Message",
  submitButtonText = "Send Message",
  officeInfo = {
    title: "Visit Our Office",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94105",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    phone: "+1 (555) 123-4567",
    email: "hello@company.com"
  },
  mapImage = "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&h=400&fit=crop",
  primaryColor = "#4F46E5",
  accentColor = "#F59E0B",
  ...props
}: ModernContact1Props) {
  
  // Set section defaults
  const contactProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...contactProps}>
      <Element
        id="modernContactContent"
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

        {/* Contact Methods */}
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
            columns={3}
            autoFit={true}
            minColumnWidth="300px"
            gap="32px"
            autoRows="auto"
          >
            {contactMethods.map((method) => (
              <Element
                key={method.id}
                id={`contactMethod-${method.id}`}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="20px"
                backgroundColor="#ffffff"
                borderColor="rgba(0, 0, 0, 0.1)"
                padding="32px"
                margin="0"
                hoverable={true}
                clickable={false}
                
                canvas
              >
                {/* Icon */}
                <Element
                  is={Box}
                  backgroundColor={primaryColor}
                  padding="16px"
                  margin="0 0 24px 0"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="16px"
                  width="64px"
                  height="64px"
                  canvas={false}
                >
                  <div className="text-2xl text-white">{method.icon}</div>
                </Element>

                {/* Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 12px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={method.title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 16px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={method.description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    margin="0"
                  />
                </Element>

                {/* Contact Info */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 24px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={method.contactInfo}
                    tagName="div"
                    fontSize="text-lg"
                    fontWeight="font-semibold"
                    color={primaryColor}
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* CTA Button */}
                {method.buttonText && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftButton
                      text={method.buttonText}
                      variant="outline"
                      size="sm"
                      backgroundColor="transparent"
                      textColor={primaryColor}
                      borderRadius="8px"
                      padding="px-4 py-2"
                      width="w-full"
                    />
                  </Element>
                )}
              </Element>
            ))}
          </Element>
        </Element>

        {/* Main Contact Section */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="400px"
          gap="64px"
          autoRows="auto"
        >
          {/* Contact Form */}
          <Element
            is={Card}
            variant="flat"
            shadow="xl"
            borderRadius="24px"
            backgroundColor="#ffffff"
            borderColor="rgba(0, 0, 0, 0.1)"
            padding="48px"
            margin="0"
            hoverable={false}
            clickable={false}
            
            canvas
          >
            {/* Form Header */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 32px 0"
              display="block"
              canvas
            >
              {/* Form Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={formTitle}
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              {/* Form Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={formDescription}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </Element>
            </Element>

            {/* Form Fields */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              gap="gap-6"
              canvas
            >
              {/* Name Field */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                gap="gap-2"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={nameLabel}
                    tagName="label"
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="text-gray-700"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="#f9fafb"
                  padding="16px 20px"
                  margin="0"
                  borderRadius="12px"
                  display="flex"
                  alignItems="center"
                  border="1px solid #e5e7eb"
                  canvas={false}
                >
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent text-gray-900 placeholder-gray-500 outline-none w-full"
                  />
                </Element>
              </Element>

              {/* Email Field */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                gap="gap-2"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={emailLabel}
                    tagName="label"
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="text-gray-700"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="#f9fafb"
                  padding="16px 20px"
                  margin="0"
                  borderRadius="12px"
                  display="flex"
                  alignItems="center"
                  border="1px solid #e5e7eb"
                  canvas={false}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-transparent text-gray-900 placeholder-gray-500 outline-none w-full"
                  />
                </Element>
              </Element>

              {/* Message Field */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                gap="gap-2"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={messageLabel}
                    tagName="label"
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="text-gray-700"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="#f9fafb"
                  padding="16px 20px"
                  margin="0"
                  borderRadius="12px"
                  display="flex"
                  alignItems="flex-start"
                  border="1px solid #e5e7eb"
                  canvas={false}
                >
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or ask a question..."
                    className="bg-transparent text-gray-900 placeholder-gray-500 outline-none w-full resize-none"
                  />
                </Element>
              </Element>

              {/* Submit Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="16px 0 0 0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={submitButtonText}
                  size="lg"
                  backgroundColor={primaryColor}
                  textColor="#ffffff"
                  borderRadius="12px"
                  padding="px-8 py-4"
                  width="w-full"
                />
              </Element>
            </Element>
          </Element>

          {/* Office Info & Map */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="gap-8"
            canvas
          >
            {/* Office Info Card */}
            <Element
              is={Card}
              variant="flat"
              shadow="lg"
              borderRadius="24px"
              backgroundColor="#f8fafc"
              borderColor="transparent"
              padding="32px"
              margin="0"
              hoverable={false}
              clickable={false}
              
              canvas
            >
              {/* Office Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={officeInfo.title}
                  tagName="h3"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              {/* Office Details */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                gap="gap-4"
                canvas
              >
                {/* Address */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={`📍 ${officeInfo.address}`}
                    tagName="div"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    margin="0"
                  />
                </Element>

                {/* Hours */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={`⏰ ${officeInfo.hours}`}
                    tagName="div"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* Phone */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={`📞 ${officeInfo.phone}`}
                    tagName="div"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* Email */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={`✉️ ${officeInfo.email}`}
                    tagName="div"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>
              </Element>
            </Element>

            {/* Map/Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              height="300px"
              borderRadius="24px"
              
              canvas
            >
              <CraftImage
                src={mapImage}
                alt="Office Location"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-24"
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

ModernContact1.craft = {
  displayName: "Modern Contact 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Contact specific props
    sectionTitle: "Get in Touch",
    sectionDescription: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    contactMethods: [
      {
        id: "email",
        icon: "✉️",
        title: "Email Us",
        description: "Send us an email anytime",
        contactInfo: "hello@company.com",
        buttonText: "Send Email"
      },
      {
        id: "phone",
        icon: "📞",
        title: "Call Us",
        description: "Mon-Fri from 8am to 5pm",
        contactInfo: "+1 (555) 123-4567",
        buttonText: "Call Now"
      },
      {
        id: "chat",
        icon: "💬",
        title: "Live Chat",
        description: "We're online right now",
        contactInfo: "Start a conversation",
        buttonText: "Chat Now"
      }
    ],
    formTitle: "Send us a Message",
    formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    submitButtonText: "Send Message",
    officeInfo: {
      title: "Visit Our Office",
      address: "123 Business Ave, Suite 100, San Francisco, CA 94105",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      phone: "+1 (555) 123-4567",
      email: "hello@company.com"
    },
    mapImage: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&h=400&fit=crop",
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