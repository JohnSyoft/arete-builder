import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface SpaWellnessProps extends SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  heroImage?: string;
  service1Title?: string;
  service1Description?: string;
  service1Duration?: string;
  service1Price?: string;
  service1Image?: string;
  service2Title?: string;
  service2Description?: string;
  service2Duration?: string;
  service2Price?: string;
  service2Image?: string;
  service3Title?: string;
  service3Description?: string;
  service3Duration?: string;
  service3Price?: string;
  service3Image?: string;
  service4Title?: string;
  service4Description?: string;
  service4Duration?: string;
  service4Price?: string;
  service4Image?: string;
  bookTreatmentText?: string;
  viewMenuText?: string;
  hoursText?: string;
  openingHours?: string;
  contactText?: string;
  phoneNumber?: string;
}

export function SpaWellness({
  sectionTitle = "Tranquil Spa & Wellness Sanctuary",
  sectionSubtitle = "Rejuvenate your mind, body, and soul with our world-class spa treatments",
  heroImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  service1Title = "Signature Deep Tissue Massage",
  service1Description = "Therapeutic massage targeting deep muscle tension with aromatic oils",
  service1Duration = "90 minutes",
  service1Price = "$280",
  service1Image = "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  service2Title = "Royal Couples Retreat",
  service2Description = "Luxurious side-by-side spa experience with champagne and chocolate",
  service2Duration = "120 minutes",
  service2Price = "$650",
  service2Image = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  service3Title = "Himalayan Salt Body Scrub",
  service3Description = "Exfoliating treatment with mineral-rich salts and moisturizing oils",
  service3Duration = "60 minutes",
  service3Price = "$180",
  service3Image = "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  service4Title = "Anti-Aging Facial Therapy",
  service4Description = "Advanced skincare treatment with collagen and vitamin-rich serums",
  service4Duration = "75 minutes",
  service4Price = "$220",
  service4Image = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  bookTreatmentText = "Book Treatment",
  viewMenuText = "View Full Menu",
  hoursText = "Spa Hours",
  openingHours = "Daily: 8:00 AM - 10:00 PM",
  contactText = "Reservations",
  phoneNumber = "+1 (555) 123-4567",
  ...props
}: SpaWellnessProps) {
  const sectionProps = {
    backgroundColor: "#F7F5F3",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: false,
    ...props,
  };

  const services = [
    {
      title: service1Title,
      description: service1Description,
      duration: service1Duration,
      price: service1Price,
      image: service1Image,
    },
    {
      title: service2Title,
      description: service2Description,
      duration: service2Duration,
      price: service2Price,
      image: service2Image,
    },
    {
      title: service3Title,
      description: service3Description,
      duration: service3Duration,
      price: service3Price,
      image: service3Image,
    },
    {
      title: service4Title,
      description: service4Description,
      duration: service4Duration,
      price: service4Price,
      image: service4Image,
    },
  ];

  return (
    <Section {...sectionProps}>
      <Element
        id="spaWellness"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        width="100%"
        canvas
      >
        {/* Hero Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 80px 0"
          display="block"
          width="100%"
          height="500px"
          canvas
        >
          <div className="relative h-full">
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              height="100%"
              canvas={false}
            >
              <Image
                src={heroImage}
                alt="Spa Sanctuary"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                margin=""
                padding=""
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </Element>

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-6">
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 20px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={sectionTitle}
                    tagName="h1"
                    fontSize="text-5xl lg:text-6xl"
                    fontWeight="font-light"
                    color="text-white"
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
                    fontSize="text-xl"
                    fontWeight="font-normal"
                    color="text-gray-200"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </div>
            </div>
          </div>
        </Element>

        {/* Services Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0 32px 80px"
          margin="0"
          display="block"
          width="100%"
          canvas
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
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
                  <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="grid md:grid-cols-2">
                      {/* Service Image */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        width="100%"
                        height="250px"
                        canvas={false}
                      >
                        <div className="relative h-full overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width="w-full"
                            height="h-full"
                            objectFit="object-cover"
                            margin=""
                            padding=""
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                        </div>
                      </Element>

                      {/* Service Details */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="32px"
                        margin="0"
                        display="flex"
                        flexDirection="column"
                        justifyContent="between"
                        height="250px"
                        canvas
                      >
                        <div>
                          {/* Service Title */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0 0 12px 0"
                            display="block"
                            canvas={false}
                          >
                            <Text
                              text={service.title}
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
                            margin="0 0 16px 0"
                            display="block"
                            canvas={false}
                          >
                            <Text
                              text={service.description}
                              tagName="p"
                              fontSize="text-sm"
                              fontWeight="font-normal"
                              color="text-gray-600"
                              textAlign="text-left"
                              lineHeight="leading-relaxed"
                            />
                          </Element>

                          {/* Duration and Price */}
                          <Element
                            is={Flex}
                            flexDirection="row"
                            justifyContent="between"
                            alignItems="center"
                            gap="0"
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
                              <Text
                                text={service.duration}
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-medium"
                                color="text-gray-500"
                                textAlign="text-left"
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
                                text={service.price}
                                tagName="span"
                                fontSize="text-lg"
                                fontWeight="font-bold"
                                color="#B8860B"
                                textAlign="text-right"
                              />
                            </Element>
                          </Element>
                        </div>

                        {/* Book Button */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="16px 0 0 0"
                          display="block"
                          canvas={false}
                        >
                          <Button
                            text={bookTreatmentText}
                            backgroundColor="#B8860B"
                            textColor="#FFFFFF"
                            borderRadius="8px"
                            padding="px-6 py-3"
                            width="w-full"
                          />
                        </Element>
                      </Element>
                    </div>
                  </div>
                </Element>
              ))}
            </div>
          </div>
        </Element>

        {/* Bottom CTA Section */}
        <Element
          is={Box}
          backgroundColor="#2D2D2D"
          padding="60px 32px"
          margin="0"
          display="block"
          width="100%"
          canvas
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Spa Hours */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={hoursText}
                    tagName="h3"
                    fontSize="text-lg"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center md:text-left"
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
                    text={openingHours}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-300"
                    textAlign="text-center md:text-left"
                  />
                </Element>
              </Element>

              {/* Contact */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={contactText}
                    tagName="h3"
                    fontSize="text-lg"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
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
                    text={phoneNumber}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-300"
                    textAlign="text-center"
                  />
                </Element>
              </Element>

              {/* CTA Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <Button
                  text={viewMenuText}
                  backgroundColor="#B8860B"
                  textColor="#FFFFFF"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </div>
          </div>
        </Element>
      </Element>
    </Section>
  );
}

SpaWellness.craft = {
  displayName: "Spa & Wellness",
  props: {
    sectionTitle: "Tranquil Spa & Wellness Sanctuary",
    sectionSubtitle:
      "Rejuvenate your mind, body, and soul with our world-class spa treatments",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    service1Title: "Signature Deep Tissue Massage",
    service1Description:
      "Therapeutic massage targeting deep muscle tension with aromatic oils",
    service1Duration: "90 minutes",
    service1Price: "$280",
    service1Image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    service2Title: "Royal Couples Retreat",
    service2Description:
      "Luxurious side-by-side spa experience with champagne and chocolate",
    service2Duration: "120 minutes",
    service2Price: "$650",
    service2Image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    service3Title: "Himalayan Salt Body Scrub",
    service3Description:
      "Exfoliating treatment with mineral-rich salts and moisturizing oils",
    service3Duration: "60 minutes",
    service3Price: "$180",
    service3Image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    service4Title: "Anti-Aging Facial Therapy",
    service4Description:
      "Advanced skincare treatment with collagen and vitamin-rich serums",
    service4Duration: "75 minutes",
    service4Price: "$220",
    service4Image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bookTreatmentText: "Book Treatment",
    viewMenuText: "View Full Menu",
    hoursText: "Spa Hours",
    openingHours: "Daily: 8:00 AM - 10:00 PM",
    contactText: "Reservations",
    phoneNumber: "+1 (555) 123-4567",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
