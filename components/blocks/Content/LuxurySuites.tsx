import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface LuxurySuitesProps extends SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  suite1Name?: string;
  suite1Price?: string;
  suite1Features?: string;
  suite1Image?: string;
  suite2Name?: string;
  suite2Price?: string;
  suite2Features?: string;
  suite2Image?: string;
  suite3Name?: string;
  suite3Price?: string;
  suite3Features?: string;
  suite3Image?: string;
  viewAllText?: string;
  bookNowText?: string;
  perNightText?: string;
}

export function LuxurySuites({
  sectionTitle = "Luxury Suites & Accommodations",
  sectionSubtitle = "Experience ultimate comfort and elegance in our meticulously designed suites",
  suite1Name = "Ocean View Presidential Suite",
  suite1Price = "$1,200",
  suite1Features = "Private terrace • Ocean view • King bed • Living area • Marble bathroom",
  suite1Image = "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  suite2Name = "Garden Villa Penthouse",
  suite2Price = "$950",
  suite2Features = "Private garden • Infinity pool • 2 bedrooms • Gourmet kitchen • Butler service",
  suite2Image = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  suite3Name = "Royal Executive Suite",
  suite3Price = "$750",
  suite3Features = "City view • Executive lounge • Work area • Premium amenities • Concierge",
  suite3Image = "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  viewAllText = "View All Suites",
  bookNowText = "Book Now",
  perNightText = "per night",
  ...props
}: LuxurySuitesProps) {
  const sectionProps = {
    backgroundColor: "#F8F9FA",
    padding: "80px 0",
    minHeight: "auto",
    hasContentWrapper: true,
    ...props,
  };

  const suites = [
    {
      name: suite1Name,
      price: suite1Price,
      features: suite1Features,
      image: suite1Image,
    },
    {
      name: suite2Name,
      price: suite2Price,
      features: suite2Features,
      image: suite2Image,
    },
    {
      name: suite3Name,
      price: suite3Price,
      features: suite3Features,
      image: suite3Image,
    },
  ];

  return (
    <Section {...sectionProps}>
      <Element
        id="luxurySuites"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        width="100%"
        canvas
      >
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
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
              />
            </Element>
          </div>
        </Element>

        {/* Suites Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 48px 0"
          display="block"
          width="100%"
          canvas
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {suites.map((suite, index) => (
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
                <div className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Suite Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 24px 0"
                    borderRadius="16px 16px 0 0"
                    display="block"
                    width="100%"
                    height="300px"
                    canvas={false}
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        src={suite.image}
                        alt={suite.name}
                        width="w-full"
                        height="h-75"
                        objectFit="object-cover"
                        margin=""
                        padding=""
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <Element
                          is={Box}
                          backgroundColor="#D4AF37"
                          padding="px-4 py-2"
                          margin="0"
                          borderRadius="12px"
                          display="inline-block"
                          canvas={false}
                        >
                          <Text
                            text={`${suite.price} ${perNightText}`}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-center"
                          />
                        </Element>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="block"
                          canvas={false}
                        >
                          <Button
                            text={bookNowText}
                            backgroundColor="#FFFFFF"
                            textColor="#D4AF37"
                            borderRadius="8px"
                            padding="px-6 py-3"
                            width="w-auto"
                          />
                        </Element>
                      </div>
                    </div>
                  </Element>

                  {/* Suite Details */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="24px"
                    margin="0"
                    display="block"
                    width="100%"
                    canvas
                  >
                    {/* Suite Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 16px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={suite.name}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-left"
                        lineHeight="leading-tight"
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
                        text={suite.features}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
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

        {/* View All Button */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="flex"
          justifyContent="center"
          width="100%"
          canvas={false}
        >
          <Button
            text={viewAllText}
            backgroundColor="#D4AF37"
            textColor="#FFFFFF"
            borderRadius="8px"
            padding="px-8 py-4"
            width="w-auto"
          />
        </Element>
      </Element>
    </Section>
  );
}

LuxurySuites.craft = {
  displayName: "Luxury Suites",
  props: {
    sectionTitle: "Luxury Suites & Accommodations",
    sectionSubtitle:
      "Experience ultimate comfort and elegance in our meticulously designed suites",
    suite1Name: "Ocean View Presidential Suite",
    suite1Price: "$1,200",
    suite1Features:
      "Private terrace • Ocean view • King bed • Living area • Marble bathroom",
    suite1Image:
      "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    suite2Name: "Garden Villa Penthouse",
    suite2Price: "$950",
    suite2Features:
      "Private garden • Infinity pool • 2 bedrooms • Gourmet kitchen • Butler service",
    suite2Image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    suite3Name: "Royal Executive Suite",
    suite3Price: "$750",
    suite3Features:
      "City view • Executive lounge • Work area • Premium amenities • Concierge",
    suite3Image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    viewAllText: "View All Suites",
    bookNowText: "Book Now",
    perNightText: "per night",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
