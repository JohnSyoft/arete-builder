import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface WeddingEventsProps extends SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  heroImage?: string;
  venue1Name?: string;
  venue1Capacity?: string;
  venue1Description?: string;
  venue1Features?: string;
  venue1Image?: string;
  venue2Name?: string;
  venue2Capacity?: string;
  venue2Description?: string;
  venue2Features?: string;
  venue2Image?: string;
  venue3Name?: string;
  venue3Capacity?: string;
  venue3Description?: string;
  venue3Features?: string;
  venue3Image?: string;
  package1Name?: string;
  package1Price?: string;
  package1Features?: string;
  package2Name?: string;
  package2Price?: string;
  package2Features?: string;
  package3Name?: string;
  package3Price?: string;
  package3Features?: string;
  consultationText?: string;
  brochureText?: string;
  contactNumber?: string;
  plannerName?: string;
  plannerTitle?: string;
}

export function WeddingEvents({
  sectionTitle = "Unforgettable Wedding & Events",
  sectionSubtitle = "Create magical moments in our stunning venues with personalized planning services",
  heroImage = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  venue1Name = "Grand Ballroom",
  venue1Capacity = "300 guests",
  venue1Description = "Elegant ballroom with crystal chandeliers and panoramic garden views",
  venue1Features = "Dance floor • Stage • Full catering • Bridal suite",
  venue1Image = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  venue2Name = "Ocean Terrace",
  venue2Capacity = "150 guests",
  venue2Description = "Spectacular oceanfront terrace perfect for romantic ceremonies",
  venue2Features = "Ocean views • Sunset ceremony • Cocktail reception • Garden access",
  venue2Image = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  venue3Name = "Garden Pavilion",
  venue3Capacity = "100 guests",
  venue3Description = "Intimate garden setting surrounded by tropical landscaping",
  venue3Features = "Garden ceremony • Intimate dining • Outdoor bar • Fairy lights",
  venue3Image = "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  package1Name = "Platinum Package",
  package1Price = "Starting at $25,000",
  package1Features = "Full venue • 4-course dinner • Premium bar • Photography • Flowers • Coordinator",
  package2Name = "Gold Package",
  package2Price = "Starting at $15,000",
  package2Features = "Venue rental • 3-course dinner • Standard bar • Basic flowers • Day-of coordination",
  package3Name = "Silver Package",
  package3Price = "Starting at $8,000",
  package3Features = "Venue rental • Cocktail reception • Limited bar • Simple decorations",
  consultationText = "Book Consultation",
  brochureText = "Download Brochure",
  contactNumber = "+1 (555) 123-4567",
  plannerName = "Sarah Mitchell",
  plannerTitle = "Senior Wedding Planner",
  ...props
}: WeddingEventsProps) {
  const sectionProps = {
    backgroundColor: "#FDF8F5",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: false,
    ...props,
  };

  const venues = [
    {
      name: venue1Name,
      capacity: venue1Capacity,
      description: venue1Description,
      features: venue1Features,
      image: venue1Image,
    },
    {
      name: venue2Name,
      capacity: venue2Capacity,
      description: venue2Description,
      features: venue2Features,
      image: venue2Image,
    },
    {
      name: venue3Name,
      capacity: venue3Capacity,
      description: venue3Description,
      features: venue3Features,
      image: venue3Image,
    },
  ];

  const packages = [
    {
      name: package1Name,
      price: package1Price,
      features: package1Features.split(" • "),
    },
    {
      name: package2Name,
      price: package2Price,
      features: package2Features.split(" • "),
    },
    {
      name: package3Name,
      price: package3Price,
      features: package3Features.split(" • "),
    },
  ];

  return (
    <Section {...sectionProps}>
      <Element
        id="weddingEvents"
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
          height="600px"
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
                alt="Wedding Venue"
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
                  margin="0 0 40px 0"
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
                    text={consultationText}
                    backgroundColor="#E91E63"
                    textColor="#FFFFFF"
                    borderRadius="8px"
                    padding="px-8 py-4"
                    width="w-auto"
                  />
                  <Button
                    text={brochureText}
                    backgroundColor="transparent"
                    textColor="#FFFFFF"
                    borderRadius="8px"
                    padding="px-8 py-4"
                    width="w-auto"
                  />
                </Element>
              </div>
            </div>
          </div>
        </Element>

        {/* Venues Section */}
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
            {/* Section Header */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 48px 0"
              display="block"
              width="100%"
              canvas
            >
              <div className="text-center">
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 16px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text="Stunning Venues"
                    tagName="h2"
                    fontSize="text-4xl"
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
                    text="Choose from our collection of breathtaking venues"
                    tagName="p"
                    fontSize="text-lg"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                  />
                </Element>
              </div>
            </Element>

            {/* Venues Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {venues.map((venue, index) => (
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
                    {/* Venue Image */}
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
                      <div className="relative overflow-hidden">
                        <Image
                          src={venue.image}
                          alt={venue.name}
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          margin=""
                          padding=""
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                        {/* Capacity Badge */}
                        <div className="absolute top-4 right-4">
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
                              text={venue.capacity}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-white"
                              textAlign="text-center"
                            />
                          </Element>
                        </div>
                      </div>
                    </Element>

                    {/* Venue Details */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="24px"
                      margin="0"
                      display="block"
                      width="100%"
                      canvas
                    >
                      {/* Venue Name */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 12px 0"
                        display="block"
                        canvas={false}
                      >
                        <Text
                          text={venue.name}
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
                          text={venue.description}
                          tagName="p"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Features */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 20px 0"
                        display="block"
                        canvas={false}
                      >
                        <Text
                          text={venue.features}
                          tagName="p"
                          fontSize="text-xs"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Action Button */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <Button
                          text="View Details"
                          backgroundColor="#E91E63"
                          textColor="#FFFFFF"
                          borderRadius="8px"
                          padding="px-6 py-3"
                          width="w-full"
                        />
                      </Element>
                    </Element>
                  </div>
                </Element>
              ))}
            </div>
          </div>
        </Element>

        {/* Wedding Packages Section */}
        <Element
          is={Box}
          backgroundColor="#F8F9FA"
          padding="80px 32px"
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
              margin="0 0 48px 0"
              display="block"
              width="100%"
              canvas
            >
              <div className="text-center">
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 16px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text="Wedding Packages"
                    tagName="h2"
                    fontSize="text-4xl"
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
                    text="Comprehensive packages tailored to your dream wedding"
                    tagName="p"
                    fontSize="text-lg"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                  />
                </Element>
              </div>
            </Element>

            {/* Packages Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="#FFFFFF"
                  padding="40px"
                  margin="0"
                  borderRadius="16px"
                  display="block"
                  width="100%"
                  canvas
                >
                  <div
                    className={`text-center ${
                      index === 1 ? "ring-2 ring-pink-500" : ""
                    }`}
                  >
                    {/* Package Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 16px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={pkg.name}
                        tagName="h3"
                        fontSize="text-2xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-center"
                        lineHeight="leading-tight"
                      />
                    </Element>

                    {/* Package Price */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 32px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={pkg.price}
                        tagName="p"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="#E91E63"
                        textAlign="text-center"
                      />
                    </Element>

                    {/* Features List */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 32px 0"
                      display="block"
                      canvas
                    >
                      <div className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <Element
                            key={featureIndex}
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="flex"
                            alignItems="center"
                            justifyContent="start"
                            canvas={false}
                          >
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                              <Text
                                text={feature}
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-normal"
                                color="text-gray-600"
                                textAlign="text-left"
                              />
                            </div>
                          </Element>
                        ))}
                      </div>
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
                        text="Choose Package"
                        backgroundColor={
                          index === 1 ? "#E91E63" : "transparent"
                        }
                        textColor={index === 1 ? "#FFFFFF" : "#E91E63"}
                        borderRadius="8px"
                        padding="px-8 py-3"
                        width="w-full"
                      />
                    </Element>
                  </div>
                </Element>
              ))}
            </div>
          </div>
        </Element>

        {/* Contact Section */}
        <Element
          is={Box}
          backgroundColor="#E91E63"
          padding="60px 32px"
          margin="0"
          display="block"
          width="100%"
          canvas
        >
          <div className="max-w-4xl mx-auto text-center">
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 16px 0"
              display="block"
              canvas={false}
            >
              <Text
                text="Let's Plan Your Perfect Day"
                tagName="h2"
                fontSize="text-3xl"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 12px 0"
              display="block"
              canvas={false}
            >
              <Text
                text={plannerName}
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-white"
                textAlign="text-center"
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
                text={plannerTitle}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-pink-100"
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
                text={`Call ${contactNumber}`}
                backgroundColor="#FFFFFF"
                textColor="#E91E63"
                borderRadius="8px"
                padding="px-8 py-4"
                width="w-auto"
              />
              <Button
                text="Schedule Tour"
                backgroundColor="transparent"
                textColor="#FFFFFF"
                borderRadius="8px"
                padding="px-8 py-4"
                width="w-auto"
              />
            </Element>
          </div>
        </Element>
      </Element>
    </Section>
  );
}

WeddingEvents.craft = {
  displayName: "Wedding & Events",
  props: {
    sectionTitle: "Unforgettable Wedding & Events",
    sectionSubtitle:
      "Create magical moments in our stunning venues with personalized planning services",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    venue1Name: "Grand Ballroom",
    venue1Capacity: "300 guests",
    venue1Description:
      "Elegant ballroom with crystal chandeliers and panoramic garden views",
    venue1Features: "Dance floor • Stage • Full catering • Bridal suite",
    venue1Image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    venue2Name: "Ocean Terrace",
    venue2Capacity: "150 guests",
    venue2Description:
      "Spectacular oceanfront terrace perfect for romantic ceremonies",
    venue2Features:
      "Ocean views • Sunset ceremony • Cocktail reception • Garden access",
    venue2Image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    venue3Name: "Garden Pavilion",
    venue3Capacity: "100 guests",
    venue3Description:
      "Intimate garden setting surrounded by tropical landscaping",
    venue3Features:
      "Garden ceremony • Intimate dining • Outdoor bar • Fairy lights",
    venue3Image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    package1Name: "Platinum Package",
    package1Price: "Starting at $25,000",
    package1Features:
      "Full venue • 4-course dinner • Premium bar • Photography • Flowers • Coordinator",
    package2Name: "Gold Package",
    package2Price: "Starting at $15,000",
    package2Features:
      "Venue rental • 3-course dinner • Standard bar • Basic flowers • Day-of coordination",
    package3Name: "Silver Package",
    package3Price: "Starting at $8,000",
    package3Features:
      "Venue rental • Cocktail reception • Limited bar • Simple decorations",
    consultationText: "Book Consultation",
    brochureText: "Download Brochure",
    contactNumber: "+1 (555) 123-4567",
    plannerName: "Sarah Mitchell",
    plannerTitle: "Senior Wedding Planner",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
