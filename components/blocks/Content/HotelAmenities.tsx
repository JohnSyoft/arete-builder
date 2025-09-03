import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface HotelAmenitiesProps extends SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  amenity1Name?: string;
  amenity1Description?: string;
  amenity1Hours?: string;
  amenity1Image?: string;
  amenity1Icon?: string;
  amenity2Name?: string;
  amenity2Description?: string;
  amenity2Hours?: string;
  amenity2Image?: string;
  amenity2Icon?: string;
  amenity3Name?: string;
  amenity3Description?: string;
  amenity3Hours?: string;
  amenity3Image?: string;
  amenity3Icon?: string;
  amenity4Name?: string;
  amenity4Description?: string;
  amenity4Hours?: string;
  amenity4Image?: string;
  amenity4Icon?: string;
  amenity5Name?: string;
  amenity5Description?: string;
  amenity5Hours?: string;
  amenity5Image?: string;
  amenity5Icon?: string;
  amenity6Name?: string;
  amenity6Description?: string;
  amenity6Hours?: string;
  amenity6Image?: string;
  amenity6Icon?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature3Title?: string;
  feature3Description?: string;
  feature4Title?: string;
  feature4Description?: string;
  contactText?: string;
  brochureText?: string;
}

export function HotelAmenities({
  sectionTitle = "World-Class Amenities",
  sectionSubtitle = "Experience exceptional facilities designed for your comfort and enjoyment",
  amenity1Name = "Fitness Center",
  amenity1Description = "State-of-the-art equipment and personal training services available 24/7",
  amenity1Hours = "24/7",
  amenity1Image = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  amenity1Icon = "🏋️",
  amenity2Name = "Swimming Pool",
  amenity2Description = "Olympic-sized pool with poolside service and cabanas",
  amenity2Hours = "6:00 AM - 10:00 PM",
  amenity2Image = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  amenity2Icon = "🏊",
  amenity3Name = "Business Center",
  amenity3Description = "Fully equipped workspace with meeting rooms and conference facilities",
  amenity3Hours = "24/7",
  amenity3Image = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  amenity3Icon = "💼",
  amenity4Name = "Spa & Wellness",
  amenity4Description = "Rejuvenating treatments and relaxation in our luxury spa",
  amenity4Hours = "9:00 AM - 9:00 PM",
  amenity4Image = "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  amenity4Icon = "🧘",
  amenity5Name = "Concierge Services",
  amenity5Description = "Personal assistance for reservations, tours, and local recommendations",
  amenity5Hours = "24/7",
  amenity5Image = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  amenity5Icon = "🎯",
  amenity6Name = "Valet Parking",
  amenity6Description = "Complimentary valet service with secure covered parking",
  amenity6Hours = "24/7",
  amenity6Image = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  amenity6Icon = "🚗",
  feature1Title = "Free WiFi",
  feature1Description = "High-speed internet throughout the property",
  feature2Title = "Pet Friendly",
  feature2Description = "Welcome amenities for your furry companions",
  feature3Title = "Airport Shuttle",
  feature3Description = "Complimentary transportation to/from airport",
  feature4Title = "24/7 Room Service",
  feature4Description = "Full menu available around the clock",
  contactText = "Contact Concierge",
  brochureText = "View All Amenities",
  ...props
}: HotelAmenitiesProps) {
  const sectionProps = {
    backgroundColor: "#FFFFFF",
    padding: "80px 0",
    minHeight: "auto",
    hasContentWrapper: false,
    ...props,
  };

  const amenities = [
    {
      name: amenity1Name,
      description: amenity1Description,
      hours: amenity1Hours,
      image: amenity1Image,
      icon: amenity1Icon,
    },
    {
      name: amenity2Name,
      description: amenity2Description,
      hours: amenity2Hours,
      image: amenity2Image,
      icon: amenity2Icon,
    },
    {
      name: amenity3Name,
      description: amenity3Description,
      hours: amenity3Hours,
      image: amenity3Image,
      icon: amenity3Icon,
    },
    {
      name: amenity4Name,
      description: amenity4Description,
      hours: amenity4Hours,
      image: amenity4Image,
      icon: amenity4Icon,
    },
    {
      name: amenity5Name,
      description: amenity5Description,
      hours: amenity5Hours,
      image: amenity5Image,
      icon: amenity5Icon,
    },
    {
      name: amenity6Name,
      description: amenity6Description,
      hours: amenity6Hours,
      image: amenity6Image,
      icon: amenity6Icon,
    },
  ];

  const features = [
    {
      title: feature1Title,
      description: feature1Description,
    },
    {
      title: feature2Title,
      description: feature2Description,
    },
    {
      title: feature3Title,
      description: feature3Description,
    },
    {
      title: feature4Title,
      description: feature4Description,
    },
  ];

  return (
    <Section {...sectionProps}>
      <Element
        id="hotelAmenities"
        is={Box}
        backgroundColor="transparent"
        padding="0 32px"
        margin="0"
        display="block"
        width="100%"
        canvas
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 64px 0"
            display="block"
            width="100%"
            canvas
          >
            <div className="text-center max-w-3xl mx-auto">
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={sectionTitle}
                  tagName="h2"
                  fontSize="text-4xl lg:text-5xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <Text
                  text={sectionSubtitle}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>
            </div>
          </Element>

          {/* Amenities Grid */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 80px 0"
            display="block"
            width="100%"
            canvas
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="#FFFFFF"
                  padding="0"
                  margin="0"
                  borderRadius="16px"
                  display="block"
                  width="100%"
                  canvas
                >
                  <div className="group overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                    {/* Amenity Image */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="100%"
                      height="200px"
                      canvas={false}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={amenity.image}
                          alt={amenity.name}
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          margin=""
                          padding=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Icon */}
                        <div className="absolute top-4 left-4">
                          <Element
                            is={Box}
                            backgroundColor="rgba(255, 255, 255, 0.9)"
                            padding="12px"
                            margin="0"
                            borderRadius="12px"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            canvas={false}
                          >
                            <Text
                              text={amenity.icon}
                              tagName="span"
                              fontSize="text-2xl"
                              fontWeight="font-normal"
                              color="text-gray-800"
                              textAlign="text-center"
                            />
                          </Element>
                        </div>

                        {/* Hours Badge */}
                        <div className="absolute bottom-4 right-4">
                          <Element
                            is={Box}
                            backgroundColor="rgba(0, 0, 0, 0.7)"
                            padding="px-3 py-1"
                            margin="0"
                            borderRadius="12px"
                            display="inline-block"
                            canvas={false}
                          >
                            <Text
                              text={amenity.hours}
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-medium"
                              color="text-white"
                              textAlign="text-center"
                            />
                          </Element>
                        </div>
                      </div>
                    </Element>

                    {/* Amenity Details */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="24px"
                      margin="0"
                      display="block"
                      width="100%"
                      canvas
                    >
                      {/* Amenity Name */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 12px 0"
                        display="block"
                        canvas={false}
                      >
                        <Text
                          text={amenity.name}
                          tagName="h3"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                          lineHeight="leading-tight"
                        />
                      </Element>

                      {/* Description */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 20px 0"
                        display="block"
                        canvas={false}
                      >
                        <Text
                          text={amenity.description}
                          tagName="p"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Learn More Button */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <Button
                          text="Learn More"
                          backgroundColor="transparent"
                          textColor="#D4AF37"
                          borderRadius="8px"
                          padding="px-4 py-2"
                          width="w-auto"
                        />
                      </Element>
                    </Element>
                  </div>
                </Element>
              ))}
            </div>
          </Element>

          {/* Additional Features */}
          <Element
            is={Box}
            backgroundColor="#F8F9FA"
            padding="48px"
            margin="0 0 64px 0"
            borderRadius="24px"
            display="block"
            width="100%"
            canvas
          >
            <div className="text-center mb-8">
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text="Additional Services"
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text="Complimentary services to enhance your stay"
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                />
              </Element>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="#FFFFFF"
                  padding="24px"
                  margin="0"
                  borderRadius="12px"
                  display="block"
                  width="100%"
                  canvas
                >
                  <div className="text-center">
                    {/* Feature Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 8px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={feature.title}
                        tagName="h4"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-center"
                        lineHeight="leading-tight"
                      />
                    </Element>

                    {/* Feature Description */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={feature.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-center"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  </div>
                </Element>
              ))}
            </div>
          </Element>

          {/* CTA Section */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            width="100%"
            canvas
          >
            <div className="text-center">
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text="Need More Information?"
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                />
              </Element>
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text="Our concierge team is available 24/7 to assist with any questions about our amenities"
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                />
              </Element>
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                justifyContent="center"
                gap="16px"
                canvas={false}
              >
                <Button
                  text={contactText}
                  backgroundColor="#D4AF37"
                  textColor="#FFFFFF"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
                <Button
                  text={brochureText}
                  backgroundColor="transparent"
                  textColor="#D4AF37"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </div>
          </Element>
        </div>
      </Element>
    </Section>
  );
}

HotelAmenities.craft = {
  displayName: "Hotel Amenities",
  props: {
    sectionTitle: "World-Class Amenities",
    sectionSubtitle:
      "Experience exceptional facilities designed for your comfort and enjoyment",
    amenity1Name: "Fitness Center",
    amenity1Description:
      "State-of-the-art equipment and personal training services available 24/7",
    amenity1Hours: "24/7",
    amenity1Image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenity1Icon: "🏋️",
    amenity2Name: "Swimming Pool",
    amenity2Description: "Olympic-sized pool with poolside service and cabanas",
    amenity2Hours: "6:00 AM - 10:00 PM",
    amenity2Image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenity2Icon: "🏊",
    amenity3Name: "Business Center",
    amenity3Description:
      "Fully equipped workspace with meeting rooms and conference facilities",
    amenity3Hours: "24/7",
    amenity3Image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenity3Icon: "💼",
    amenity4Name: "Spa & Wellness",
    amenity4Description:
      "Rejuvenating treatments and relaxation in our luxury spa",
    amenity4Hours: "9:00 AM - 9:00 PM",
    amenity4Image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenity4Icon: "🧘",
    amenity5Name: "Concierge Services",
    amenity5Description:
      "Personal assistance for reservations, tours, and local recommendations",
    amenity5Hours: "24/7",
    amenity5Image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenity5Icon: "🎯",
    amenity6Name: "Valet Parking",
    amenity6Description:
      "Complimentary valet service with secure covered parking",
    amenity6Hours: "24/7",
    amenity6Image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenity6Icon: "🚗",
    feature1Title: "Free WiFi",
    feature1Description: "High-speed internet throughout the property",
    feature2Title: "Pet Friendly",
    feature2Description: "Welcome amenities for your furry companions",
    feature3Title: "Airport Shuttle",
    feature3Description: "Complimentary transportation to/from airport",
    feature4Title: "24/7 Room Service",
    feature4Description: "Full menu available around the clock",
    contactText: "Contact Concierge",
    brochureText: "View All Amenities",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
