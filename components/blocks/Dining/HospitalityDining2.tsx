import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  hours: string;
  image: string;
  menuItems: MenuItem[];
}

interface HospitalityDining2Props extends SectionProps {
  // Dining Experience specific props
  title?: string;
  subtitle?: string;
  description?: string;
  restaurants?: Restaurant[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Features
  feature1Title?: string;
  feature1Description?: string;
  feature1Icon?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature2Icon?: string;
  feature3Title?: string;
  feature3Description?: string;
  feature3Icon?: string;
}

export function HospitalityDining2({
  title = "Culinary Excellence",
  subtitle = "Fine Dining Experience",
  description = "Discover a medley of flavors from around the world, crafted by our award-winning chefs using the finest ingredients.",
  restaurants = [
    {
      id: "main-restaurant",
      name: "The Grand Dining Room",
      description: "An elegant fine dining experience featuring contemporary cuisine with international influences.",
      cuisine: "Contemporary International",
      rating: 4.8,
      priceRange: "$$$$",
      hours: "6:00 PM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      menuItems: [
        {
          id: "lobster-thermidor",
          name: "Lobster Thermidor",
          description: "Fresh Maine lobster with cognac, cream, and gruyere cheese",
          price: "45",
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop",
          isPopular: true
        },
        {
          id: "wagyu-beef",
          name: "Wagyu Beef Tenderloin",
          description: "Premium A5 wagyu with truffle jus and seasonal vegetables",
          price: "85",
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
          isPopular: true
        },
        {
          id: "chocolate-souffle",
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with vanilla ice cream",
          price: "18",
          category: "Dessert",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      id: "rooftop-bar",
      name: "Sky Lounge",
      description: "Rooftop bar with panoramic views and craft cocktails.",
      cuisine: "Cocktails & Light Bites",
      rating: 4.6,
      priceRange: "$$$",
      hours: "5:00 PM - 1:00 AM",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop",
      menuItems: [
        {
          id: "signature-cocktail",
          name: "Sunset Martini",
          description: "Gin, elderflower, and citrus with a twist",
          price: "16",
          category: "Cocktail",
          image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop",
          isPopular: true
        },
        {
          id: "truffle-fries",
          name: "Truffle Parmesan Fries",
          description: "Crispy fries with truffle oil and parmesan",
          price: "12",
          category: "Appetizer",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      id: "cafe",
      name: "Garden Café",
      description: "Casual dining with fresh, locally-sourced ingredients.",
      cuisine: "Farm to Table",
      rating: 4.5,
      priceRange: "$$",
      hours: "7:00 AM - 9:00 PM",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      menuItems: [
        {
          id: "avocado-toast",
          name: "Avocado Toast",
          description: "Smashed avocado on sourdough with poached egg",
          price: "14",
          category: "Breakfast",
          image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop",
          isVegetarian: true
        },
        {
          id: "quinoa-bowl",
          name: "Quinoa Power Bowl",
          description: "Quinoa, roasted vegetables, and tahini dressing",
          price: "16",
          category: "Lunch",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
          isVegetarian: true
        }
      ]
    }
  ],
  primaryButtonText = "Make Reservation",
  secondaryButtonText = "View Full Menu",
  feature1Title = "Award-Winning Chefs",
  feature1Description= "Our culinary team brings decades of experience from Michelin-starred restaurants.",
  feature1Icon = "👨‍🍳",
  feature2Title = "Fresh Ingredients",
  feature2Description= "We source the finest ingredients from local farms and international suppliers.",
  feature2Icon = "🥬",
  feature3Title = "Wine Selection",
  feature3Description= "Curated wine list featuring rare vintages and local favorites.",
  feature3Icon= "🍷",
  ...props
}: HospitalityDining2Props) {
  // Set section defaults for dining experience
  const diningProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...diningProps}>
      <Element
        id="diningExperienceContent"
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

        {/* Features Section */}
        <Element
          is={Box}
          backgroundColor="bg-gray-50"
          padding="py-16 px-6"
          margin="mb-16"
          display="block"
          borderRadius="rounded-2xl"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={true}
            minColumnWidth="250px"
            gap="gap-8"
            autoRows="auto"
          >
            {/* Feature 1 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature1Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature1Title}
                    tagName="h3"
                    fontSize="text-xl"
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
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature1Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>

            {/* Feature 2 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                  backgroundColor="bg-green-100"
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature2Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature2Title}
                    tagName="h3"
                    fontSize="text-xl"
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
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature2Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>

            {/* Feature 3 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                  backgroundColor="bg-purple-100"
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature3Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature3Title}
                    tagName="h3"
                    fontSize="text-xl"
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
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature3Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Restaurants Section */}
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
            justifyContent="start"
            alignItems="stretch"
            gap="gap-12"
            margin=""
          >
            {restaurants.map((restaurant, index) => (
              <Element
                key={restaurant.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={false}
                canvas
              >
                <Element
                  is={Grid}
                  canvas
                  columns={2}
                  autoFit={false}
                  minColumnWidth="300px"
                  gap="gap-0"
                  autoRows="auto"
                  className={index % 2 === 1 ? "flex-row-reverse" : ""}
                >
                  {/* Restaurant Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="100%"
                    height="h-80 sm:h-96"
                    canvas={false}
                  >
                    <CraftImage
                      src={restaurant.image}
                      alt={restaurant.name}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-none"
                      margin=""
                      padding=""
                    />
                  </Element>

                  {/* Restaurant Details */}
                  <Element
                    is={Box}
                    backgroundColor="bg-gray-50"
                    padding="p-8 sm:p-12"
                    margin=""
                    display="block"
                    canvas
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="stretch"
                      gap="gap-6"
                      margin="h-full"
                    >
                      {/* Restaurant Info */}
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
                            text={restaurant.cuisine}
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
                          margin="mb-4"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={restaurant.name}
                            tagName="h3"
                            fontSize="text-2xl sm:text-3xl"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-left"
                            lineHeight="leading-tight"
                          />
                        </Element>

                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-4"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={restaurant.description}
                            tagName="p"
                            fontSize="text-base sm:text-lg"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-left"
                            lineHeight="leading-relaxed"
                          />
                        </Element>

                        {/* Restaurant Stats */}
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-6"
                          margin="mb-4"
                          wrap="wrap"
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
                              text={`⭐ ${restaurant.rating}/5`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-600"
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
                              text={restaurant.priceRange}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-600"
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
                              text={`🕒 ${restaurant.hours}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-600"
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>

                        {/* Featured Menu Items */}
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
                            gap="gap-3"
                            margin=""
                          >
                            {restaurant.menuItems.slice(0, 2).map((item, itemIndex) => (
                              <Element
                                key={item.id}
                                is={Box}
                                backgroundColor="bg-white"
                                padding="p-4"
                                margin=""
                                display="block"
                                borderRadius="rounded-lg"
                                canvas={false}
                              >
                                <Element
                                  is={Flex}
                                  canvas
                                  flexDirection="row"
                                  justifyContent="space-between"
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
                                      text={item.name}
                                      tagName="h4"
                                      fontSize="text-base"
                                      fontWeight="font-semibold"
                                      color="text-gray-900"
                                      textAlign="text-left"
                                      margin="mb-1"
                                    />
                                    <CraftText
                                      text={item.description}
                                      tagName="p"
                                      fontSize="text-sm"
                                      fontWeight="font-normal"
                                      color="text-gray-600"
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
                                      text={`$${item.price}`}
                                      tagName="span"
                                      fontSize="text-lg"
                                      fontWeight="font-bold"
                                      color="text-amber-600"
                                      textAlign="text-right"
                                    />
                                  </Element>
                                </Element>
                              </Element>
                            ))}
                          </Element>
                        </Element>
                      </Element>

                      {/* CTA Buttons */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="pt-6"
                        margin=""
                        display="block"
                        borderTop="border-t border-gray-200"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="gap-4"
                          margin=""
                          wrap="wrap"
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
                              padding="px-6 py-3"
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
                              padding="px-6 py-3"
                              width="w-auto"
                              className="hover:bg-amber-50 transition-colors duration-300"
                            />
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* CTA Section */}
        <Element
          is={Box}
          backgroundColor="bg-amber-50"
          padding="py-16 px-8"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-6"
            margin="text-center"
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
                text="Ready to experience our culinary excellence?"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
              />
            </Element>

            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-4"
              margin=""
              wrap="wrap"
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
    </Section>
  );
}

HospitalityDining2.craft = {
  displayName: "Hospitality Dining 2",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Dining Experience specific props
    title: "Culinary Excellence",
    subtitle: "Fine Dining Experience",
    description: "Discover a medley of flavors from around the world, crafted by our award-winning chefs using the finest ingredients.",
    primaryButtonText: "Make Reservation",
    secondaryButtonText: "View Full Menu",
    feature1Title: "Award-Winning Chefs",
    feature1Description: "Our culinary team brings decades of experience from Michelin-starred restaurants.",
    feature1Icon: "👨‍🍳",
    feature2Title: "Fresh Ingredients",
    feature2Description: "We source the finest ingredients from local farms and international suppliers.",
    feature2Icon: "🥬",
    feature3Title: "Wine Selection",
    feature3Description: "Curated wine list featuring rare vintages and local favorites.",
    feature3Icon: "🍷",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
