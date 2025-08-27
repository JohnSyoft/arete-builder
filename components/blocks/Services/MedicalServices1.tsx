import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalServices1Props extends SectionProps {
  // MedicalServices1 can inherit all Section properties and add any specific ones if needed
}

export function MedicalServices1(props: MedicalServices1Props) {
  // Set section defaults for medical services
  const servicesProps = {
    backgroundColor: "#f8fafc", // light gray background
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
        id="medicalServicesContent"
        is="div"
        canvas
        className="text-center"
      >
        {/* Section Header */}
        <Element is="div" className="mb-4" canvas={false}>
          <CraftText
            text="WHAT WE OFFER"
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
        <Element is="div" className="mb-6 max-w-4xl mx-auto" canvas={false}>
          <CraftText
            text="Comprehensive Medical Services for Every Stage of Life"
            tagName="h2"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-bold"
            color="text-gray-900"
            textAlign="text-center"
            margin="mb-6"
            lineHeight="leading-tight"
          />
        </Element>

        {/* Description and CTA Container */}
        <Element
          is="div"
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6"
          canvas
        >
          {/* Description */}
          <Element
            is="div"
            className="flex-1 text-left max-w-2xl"
            canvas={false}
          >
            <CraftText
              text="We are committed to delivering world-class healthcare that is accessible, efficient, and patient-centered."
              tagName="p"
              fontSize="text-lg sm:text-xl"
              fontWeight="font-normal"
              color="text-gray-600"
              textAlign="text-left"
              lineHeight="leading-relaxed"
            />
          </Element>

          {/* View More Button */}
          <Element is="div" className="flex-shrink-0" canvas={false}>
            <CraftButton
              text="View More"
              size="lg"
              backgroundColor="#14b8a6" // teal-500
              textColor="#ffffff"
              borderRadius="25px"
              padding="px-8 py-3"
              width="w-auto"
            />
          </Element>
        </Element>

        {/* Services Cards Grid */}
        <Element
          is="div"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          canvas
        >
          {/* General Health Checkups Card */}
          <Element
            is="div"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            canvas
          >
            {/* Card Header with Icon */}
            <Element
              is="div"
              className="bg-teal-500 text-white p-6"
              canvas={false}
            >
              <Element
                is="div"
                className="flex items-center gap-4 mb-4"
                canvas={false}
              >
                <Element
                  is="div"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                  canvas={false}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-4v-4H6v-4h4V5h4v4h4v4h-4v4z" />
                  </svg>
                </Element>
                <CraftText
                  text="General Health Checkups"
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Card Image */}
            <Element
              is="div"
              className="h-48 bg-gray-200 relative overflow-hidden"
              canvas={false}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Doctor Consultation Image
                </span>
              </div>
            </Element>

            {/* Card Content */}
            <Element is="div" className="p-6" canvas>
              <CraftText
                text="Regular health assessments for early disease detection. Lorem ipsum dolor sit amet."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                margin="mb-4"
                lineHeight="leading-relaxed"
              />

              <Element is="div" className="pt-2" canvas={false}>
                <CraftButton
                  text="View Details"
                  variant="link"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  padding="p-0"
                />
              </Element>
            </Element>
          </Element>

          {/* Emergency & Urgent Care Card */}
          <Element
            is="div"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            canvas
          >
            {/* Card Header with Icon */}
            <Element
              is="div"
              className="bg-teal-500 text-white p-6"
              canvas={false}
            >
              <Element
                is="div"
                className="flex items-center gap-4 mb-4"
                canvas={false}
              >
                <Element
                  is="div"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                  canvas={false}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                </Element>
                <CraftText
                  text="Emergency & Urgent Care"
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Card Image */}
            <Element
              is="div"
              className="h-48 bg-gray-200 relative overflow-hidden"
              canvas={false}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Hospital Corridor Image
                </span>
              </div>
            </Element>

            {/* Card Content */}
            <Element is="div" className="p-6" canvas>
              <CraftText
                text="Regular health assessments for early disease detection. Lorem ipsum dolor sit amet."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                margin="mb-4"
                lineHeight="leading-relaxed"
              />

              <Element is="div" className="pt-2" canvas={false}>
                <CraftButton
                  text="View Details"
                  variant="link"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  padding="p-0"
                />
              </Element>
            </Element>
          </Element>

          {/* Cardiology & Heart Health Card */}
          <Element
            is="div"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            canvas
          >
            {/* Card Header with Icon */}
            <Element
              is="div"
              className="bg-teal-500 text-white p-6"
              canvas={false}
            >
              <Element
                is="div"
                className="flex items-center gap-4 mb-4"
                canvas={false}
              >
                <Element
                  is="div"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                  canvas={false}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </Element>
                <CraftText
                  text="Cardiology & Heart Health"
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Card Image */}
            <Element
              is="div"
              className="h-48 bg-gray-200 relative overflow-hidden"
              canvas={false}
            >
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Female Doctor Image
                </span>
              </div>
            </Element>

            {/* Card Content */}
            <Element is="div" className="p-6" canvas>
              <CraftText
                text="Regular health assessments for early disease detection. Lorem ipsum dolor sit amet."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                margin="mb-4"
                lineHeight="leading-relaxed"
              />

              <Element is="div" className="pt-2" canvas={false}>
                <CraftButton
                  text="View Details"
                  variant="link"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  padding="p-0"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MedicalServices1.craft = {
  displayName: "Medical Services 1",
  props: {
    backgroundColor: "#f8fafc", // light gray background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
