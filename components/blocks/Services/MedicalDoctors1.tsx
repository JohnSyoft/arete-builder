import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalDoctors1Props extends SectionProps {
  // Medical Doctors specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  doctor1Name?: string;
  doctor1Specialty?: string;
  doctor1Description?: string;
  doctor1Image?: string;
  doctor2Name?: string;
  doctor2Specialty?: string;
  doctor2Description?: string;
  doctor2Image?: string;
  doctor3Name?: string;
  doctor3Specialty?: string;
  doctor3Description?: string;
  doctor3Image?: string;
  doctor4Name?: string;
  doctor4Specialty?: string;
  doctor4Description?: string;
  doctor4Image?: string;
}

export function MedicalDoctors1({
  sectionTag = "OUR MEDICAL EXPERTS",
  mainTitle = "Your Health in the Hands of Trusted Experts",
  description = "Meet our team of experienced medical professionals dedicated to providing exceptional healthcare with compassion and expertise.",
  doctor1Name = "Dr. James Whitman",
  doctor1Specialty = "Pediatric Specialist",
  doctor1Description = "Over 15 years of experience in pediatric care with expertise in child development and family medicine.",
  doctor1Image = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  doctor2Name = "Dr. Laura Bennett",
  doctor2Specialty = "Cardiologist",
  doctor2Description = "Leading cardiologist specializing in heart disease prevention and advanced cardiac treatments.",
  doctor2Image = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  doctor3Name = "Dr. Michael Anderson",
  doctor3Specialty = "Physiotherapy Consultant",
  doctor3Description = "Expert in rehabilitation medicine helping patients recover and regain mobility after injuries.",
  doctor3Image = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
  doctor4Name = "Dr. William Hayes",
  doctor4Specialty = "OB-GYN Specialist",
  doctor4Description = "Dedicated to women's health with comprehensive obstetric and gynecological care services.",
  doctor4Image = "https://images.unsplash.com/photo-1594824804732-ca8db7c6e6f1?w=400&h=400&fit=crop&crop=face",
  ...props
}: MedicalDoctors1Props) {
  // Set section defaults for medical doctors
  const doctorsProps = {
    backgroundColor: "#ffffff", // white background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...doctorsProps}>
      <Element
        id="medicalDoctorsContent"
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
          margin="0 auto 24px auto"
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

        {/* Description */}
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
            text={description}
            tagName="p"
            fontSize="text-lg sm:text-xl"
            fontWeight="font-normal"
            color="text-gray-600"
            textAlign="text-center"
            lineHeight="leading-relaxed"
          />
        </Element>

        {/* Doctors Cards Grid */}
        <Element
          is={Grid}
          canvas
          columns={4}
          autoFit={true}
          minColumnWidth="280px"
          gap="32px"
          autoRows="auto"
        >
          {/* Doctor 1 Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="20px"
            backgroundColor="#ffffff"
            borderColor="#e5e7eb"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Doctor Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="320px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src={doctor1Image}
                alt={`${doctor1Name} - ${doctor1Specialty}`}
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              {/* Doctor Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor1Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Doctor Specialty */}
              <Element
                is={Box}
                margin="0 0 16px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor1Specialty}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-center"
                />
              </Element>

              {/* Doctor Description */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor1Description}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* View Profile Button */}
              <Element
                is={Box}
                padding="0"
                margin="0"
                display="flex"
                justifyContent="center"
                canvas={false}
              >
                <CraftButton
                  text="View Profile"
                  variant="outline"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  borderRadius="25px"
                  padding="px-6 py-2"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>

          {/* Doctor 2 Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="20px"
            backgroundColor="#ffffff"
            borderColor="#e5e7eb"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Doctor Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="320px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src={doctor2Image}
                alt={`${doctor2Name} - ${doctor2Specialty}`}
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              {/* Doctor Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor2Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Doctor Specialty */}
              <Element
                is={Box}
                margin="0 0 16px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor2Specialty}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-center"
                />
              </Element>

              {/* Doctor Description */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor2Description}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* View Profile Button */}
              <Element
                is={Box}
                padding="0"
                margin="0"
                display="flex"
                justifyContent="center"
                canvas={false}
              >
                <CraftButton
                  text="View Profile"
                  variant="outline"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  borderRadius="25px"
                  padding="px-6 py-2"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>

          {/* Doctor 3 Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="20px"
            backgroundColor="#ffffff"
            borderColor="#e5e7eb"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Doctor Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="320px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src={doctor3Image}
                alt={`${doctor3Name} - ${doctor3Specialty}`}
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              {/* Doctor Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor3Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Doctor Specialty */}
              <Element
                is={Box}
                margin="0 0 16px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor3Specialty}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-center"
                />
              </Element>

              {/* Doctor Description */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor3Description}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* View Profile Button */}
              <Element
                is={Box}
                padding="0"
                margin="0"
                display="flex"
                justifyContent="center"
                canvas={false}
              >
                <CraftButton
                  text="View Profile"
                  variant="outline"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  borderRadius="25px"
                  padding="px-6 py-2"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>

          {/* Doctor 4 Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="20px"
            backgroundColor="#ffffff"
            borderColor="#e5e7eb"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Doctor Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="320px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src={doctor4Image}
                alt={`${doctor4Name} - ${doctor4Specialty}`}
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              {/* Doctor Name */}
              <Element
                is={Box}
                margin="0 0 8px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor4Name}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Doctor Specialty */}
              <Element
                is={Box}
                margin="0 0 16px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor4Specialty}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-teal-600"
                  textAlign="text-center"
                />
              </Element>

              {/* Doctor Description */}
              <Element
                is={Box}
                margin="0 0 20px 0"
                padding="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={doctor4Description}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* View Profile Button */}
              <Element
                is={Box}
                padding="0"
                margin="0"
                display="flex"
                justifyContent="center"
                canvas={false}
              >
                <CraftButton
                  text="View Profile"
                  variant="outline"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  borderRadius="25px"
                  padding="px-6 py-2"
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

MedicalDoctors1.craft = {
  displayName: "Medical Doctors 1",
  props: {
    // Section props
    backgroundColor: "#ffffff", // white background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Medical Doctors specific props
    sectionTag: "OUR MEDICAL EXPERTS",
    mainTitle: "Your Health in the Hands of Trusted Experts",
    description:
      "Meet our team of experienced medical professionals dedicated to providing exceptional healthcare with compassion and expertise.",
    doctor1Name: "Dr. James Whitman",
    doctor1Specialty: "Pediatric Specialist",
    doctor1Description:
      "Over 15 years of experience in pediatric care with expertise in child development and family medicine.",
    doctor1Image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    doctor2Name: "Dr. Laura Bennett",
    doctor2Specialty: "Cardiologist",
    doctor2Description:
      "Leading cardiologist specializing in heart disease prevention and advanced cardiac treatments.",
    doctor2Image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    doctor3Name: "Dr. Michael Anderson",
    doctor3Specialty: "Physiotherapy Consultant",
    doctor3Description:
      "Expert in rehabilitation medicine helping patients recover and regain mobility after injuries.",
    doctor3Image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    doctor4Name: "Dr. William Hayes",
    doctor4Specialty: "OB-GYN Specialist",
    doctor4Description:
      "Dedicated to women's health with comprehensive obstetric and gynecological care services.",
    doctor4Image:
      "https://images.unsplash.com/photo-1594824804732-ca8db7c6e6f1?w=400&h=400&fit=crop&crop=face",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
