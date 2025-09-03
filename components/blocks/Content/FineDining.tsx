import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface FineDiningProps extends SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  restaurant1Name?: string;
  restaurant1Cuisine?: string;
  restaurant1Description?: string;
  restaurant1Hours?: string;
  restaurant1Image?: string;
  restaurant2Name?: string;
  restaurant2Cuisine?: string;
  restaurant2Description?: string;
  restaurant2Hours?: string;
  restaurant2Image?: string;
  chefName?: string;
  chefTitle?: string;
  chefDescription?: string;
  chefImage?: string;
  signatureDish?: string;
  dishDescription?: string;
  dishPrice?: string;
  dishImage?: string;
  reservationText?: string;
  viewMenuText?: string;
  awardText?: string;
  ratingText?: string;
}

export function FineDining({
  sectionTitle = "Exceptional Culinary Experiences",
  sectionSubtitle = "Savor exquisite flavors crafted by our award-winning chefs",
  restaurant1Name = "Azure Rooftop",
  restaurant1Cuisine = "Modern Mediterranean",
  restaurant1Description = "Elevated dining with panoramic ocean views and innovative Mediterranean cuisine",
  restaurant1Hours = "6:00 PM - 11:00 PM",
  restaurant1Image = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  restaurant2Name = "The Chef's Table",
  restaurant2Cuisine = "Contemporary French",
  restaurant2Description = "Intimate chef's table experience with seasonal tasting menus and wine pairings",
  restaurant2Hours = "7:00 PM - 10:00 PM",
  restaurant2Image = "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  chefName = "Chef Marcus Beaumont",
  chefTitle = "Executive Chef",
  chefDescription = "Michelin-starred chef with 20 years of culinary excellence",
  chefImage = "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  signatureDish = "Lobster Thermidor Royale",
  dishDescription = "Fresh Atlantic lobster with truffle cream sauce and caviar",
  dishPrice = "$85",
  dishImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  reservationText = "Make Reservation",
  viewMenuText = "View Full Menu",
  awardText = "Michelin Star Restaurant",
  ratingText = "AAA Five Diamond",
  ...props
}: FineDiningProps) {
  const sectionProps = {
    backgroundColor: "#1A1A1A",
    padding: "80px 0",
    minHeight: "auto",
    hasContentWrapper: true,
    ...props,
  };

  const restaurants = [
    {
      name: restaurant1Name,
      cuisine: restaurant1Cuisine,
      description: restaurant1Description,
      hours: restaurant1Hours,
      image: restaurant1Image,
    },
    {
      name: restaurant2Name,
      cuisine: restaurant2Cuisine,
      description: restaurant2Description,
      hours: restaurant2Hours,
      image: restaurant2Image,
    },
  ];

  return (
    <Section {...sectionProps}>
      <Element
        id="fineDining"
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
          <div className="text-center max-w-4xl mx-auto">
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
                color="text-white"
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
                text={sectionSubtitle}
                tagName="p"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-300"
                textAlign="text-center"
                lineHeight="leading-relaxed"
              />
            </Element>

            {/* Awards */}
            <Element
              is={Flex}
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="32px"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="#D4AF37"
                padding="px-4 py-2"
                margin="0"
                borderRadius="20px"
                display="inline-block"
                canvas={false}
              >
                <Text
                  text={awardText}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color="text-black"
                  textAlign="text-center"
                />
              </Element>
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.1)"
                padding="px-4 py-2"
                margin="0"
                borderRadius="20px"
                display="inline-block"
                canvas={false}
              >
                <Text
                  text={ratingText}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color="text-white"
                  textAlign="text-center"
                />
              </Element>
            </Element>
          </div>
        </Element>

        {/* Restaurants Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 80px 0"
          display="block"
          width="100%"
          canvas
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {restaurants.map((restaurant, index) => (
              <Element
                key={index}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                canvas
              >
                <div className="group overflow-hidden rounded-2xl bg-gray-900">
                  {/* Restaurant Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 24px 0"
                    display="block"
                    width="100%"
                    height="300px"
                    canvas={false}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        width="w-full"
                        height="h-75"
                        objectFit="object-cover"
                        margin=""
                        padding=""
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>

                      {/* Cuisine Badge */}
                      <div className="absolute top-4 left-4">
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
                            text={restaurant.cuisine}
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

                  {/* Restaurant Details */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="24px"
                    margin="0"
                    display="block"
                    width="100%"
                    canvas
                  >
                    {/* Restaurant Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 12px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={restaurant.name}
                        tagName="h3"
                        fontSize="text-2xl"
                        fontWeight="font-bold"
                        color="text-white"
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
                        text={restaurant.description}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-300"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Hours */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 20px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={`Hours: ${restaurant.hours}`}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color="#D4AF37"
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Actions */}
                    <Element
                      is={Flex}
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="center"
                      gap="12px"
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
                        <Button
                          text={reservationText}
                          backgroundColor="#D4AF37"
                          textColor="#000000"
                          borderRadius="8px"
                          padding="px-6 py-3"
                          width="w-auto"
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
                        <Button
                          text={viewMenuText}
                          backgroundColor="transparent"
                          textColor="#D4AF37"
                          borderRadius="8px"
                          padding="px-6 py-3"
                          width="w-auto"
                        />
                      </Element>
                    </Element>
                  </Element>
                </div>
              </Element>
            ))}
          </div>
        </Element>

        {/* Chef Spotlight */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 80px 0"
          display="block"
          width="100%"
          canvas
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Chef Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              canvas={false}
            >
              <div className="relative">
                <Image
                  src={chefImage}
                  alt={chefName}
                  width="w-full"
                  height="h-auto"
                  objectFit="object-cover"
                  margin=""
                  padding=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </Element>

            {/* Chef Details */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              canvas
            >
              {/* Chef Name */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 8px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={chefName}
                  tagName="h3"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Chef Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 20px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={chefTitle}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-medium"
                  color="#D4AF37"
                  textAlign="text-left"
                />
              </Element>

              {/* Chef Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={chefDescription}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-300"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Signature Dish */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.05)"
                padding="24px"
                margin="0"
                borderRadius="12px"
                display="block"
                width="100%"
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
                    text="Signature Dish"
                    tagName="h4"
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="#D4AF37"
                    textAlign="text-left"
                  />
                </Element>
                <Element
                  is={Flex}
                  flexDirection="row"
                  justifyContent="between"
                  alignItems="start"
                  gap="0"
                  canvas
                >
                  <div>
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 4px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={signatureDish}
                        tagName="h5"
                        fontSize="text-lg"
                        fontWeight="font-bold"
                        color="text-white"
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
                        text={dishDescription}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-400"
                        textAlign="text-left"
                      />
                    </Element>
                  </div>
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <Text
                      text={dishPrice}
                      tagName="span"
                      fontSize="text-xl"
                      fontWeight="font-bold"
                      color="#D4AF37"
                      textAlign="text-right"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>
          </div>
        </Element>
      </Element>
    </Section>
  );
}

FineDining.craft = {
  displayName: "Fine Dining Experience",
  props: {
    sectionTitle: "Exceptional Culinary Experiences",
    sectionSubtitle:
      "Savor exquisite flavors crafted by our award-winning chefs",
    restaurant1Name: "Azure Rooftop",
    restaurant1Cuisine: "Modern Mediterranean",
    restaurant1Description:
      "Elevated dining with panoramic ocean views and innovative Mediterranean cuisine",
    restaurant1Hours: "6:00 PM - 11:00 PM",
    restaurant1Image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    restaurant2Name: "The Chef's Table",
    restaurant2Cuisine: "Contemporary French",
    restaurant2Description:
      "Intimate chef's table experience with seasonal tasting menus and wine pairings",
    restaurant2Hours: "7:00 PM - 10:00 PM",
    restaurant2Image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    chefName: "Chef Marcus Beaumont",
    chefTitle: "Executive Chef",
    chefDescription:
      "Michelin-starred chef with 20 years of culinary excellence",
    chefImage:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    signatureDish: "Lobster Thermidor Royale",
    dishDescription:
      "Fresh Atlantic lobster with truffle cream sauce and caviar",
    dishPrice: "$85",
    dishImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    reservationText: "Make Reservation",
    viewMenuText: "View Full Menu",
    awardText: "Michelin Star Restaurant",
    ratingText: "AAA Five Diamond",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
