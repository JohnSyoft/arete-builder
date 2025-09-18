import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface SpaService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  category: "massage" | "facial" | "body" | "wellness" | "couples";
  featured: boolean;
  benefits: string[];
}

interface SpaPackage {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  originalPrice?: string;
  services: string[];
  image: string;
  popular: boolean;
}

interface HospitalitySpaWellness1Props extends SectionProps {
  // Spa specific props
  title?: string;
  subtitle?: string;
  description?: string;
  services?: SpaService[];
  packages?: SpaPackage[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showPackages?: boolean;
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  showBooking?: boolean;
}

export function HospitalitySpaWellness1({
  title = "Spa & Wellness",
  subtitle = "Rejuvenate Your Soul",
  description = "Indulge in our world-class spa and wellness services designed to restore balance, promote healing, and provide the ultimate relaxation experience.",
  services = [
    {
      id: "signature-massage",
      name: "Signature Massage",
      description: "Our signature therapeutic massage combining Swedish and deep tissue techniques",
      duration: "90 minutes",
      price: "$180",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
      category: "massage",
      featured: true,
      benefits: ["Stress Relief", "Muscle Tension", "Improved Circulation", "Deep Relaxation"]
    },
    {
      id: "anti-aging-facial",
      name: "Anti-Aging Facial",
      description: "Advanced facial treatment with premium skincare products and techniques",
      duration: "75 minutes",
      price: "$150",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "facial",
      featured: true,
      benefits: ["Skin Rejuvenation", "Fine Line Reduction", "Hydration", "Radiance"]
    },
    {
      id: "hot-stone-therapy",
      name: "Hot Stone Therapy",
      description: "Heated volcanic stones provide deep muscle relaxation and stress relief",
      duration: "120 minutes",
      price: "$220",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop",
      category: "massage",
      featured: false,
      benefits: ["Deep Relaxation", "Muscle Relief", "Improved Sleep", "Detoxification"]
    },
    {
      id: "couples-retreat",
      name: "Couples Retreat",
      description: "Side-by-side massage experience in our private couples suite",
      duration: "90 minutes",
      price: "$320",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      category: "couples",
      featured: false,
      benefits: ["Bonding Experience", "Shared Relaxation", "Private Suite", "Romantic Setting"]
    },
    {
      id: "detox-body-wrap",
      name: "Detox Body Wrap",
      description: "Purifying body treatment with mineral-rich clay and essential oils",
      duration: "60 minutes",
      price: "$140",
      image: "https://images.unsplash.com/photo-1507525428034-b69928b1d9587?w=400&h=300&fit=crop",
      category: "body",
      featured: false,
      benefits: ["Detoxification", "Skin Softening", "Cellulite Reduction", "Improved Texture"]
    },
    {
      id: "meditation-session",
      name: "Guided Meditation",
      description: "Peaceful meditation session in our tranquil meditation garden",
      duration: "45 minutes",
      price: "$80",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "wellness",
      featured: false,
      benefits: ["Mental Clarity", "Stress Reduction", "Inner Peace", "Mindfulness"]
    }
  ],
  packages = [
    {
      id: "ultimate-wellness",
      name: "Ultimate Wellness Package",
      description: "Complete wellness experience including massage, facial, and wellness session",
      duration: "4 hours",
      price: "$450",
      originalPrice: "$550",
      services: ["Signature Massage", "Anti-Aging Facial", "Detox Body Wrap", "Guided Meditation"],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      popular: true
    },
    {
      id: "couples-escape",
      name: "Couples Escape",
      description: "Romantic spa experience for two with private suite and champagne",
      duration: "3 hours",
      price: "$580",
      originalPrice: "$680",
      services: ["Couples Massage", "Side-by-Side Facial", "Private Suite", "Champagne Service"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      popular: false
    },
    {
      id: "renewal-retreat",
      name: "Renewal Retreat",
      description: "Full-day wellness retreat with multiple treatments and healthy lunch",
      duration: "6 hours",
      price: "$750",
      originalPrice: "$900",
      services: ["Hot Stone Therapy", "Anti-Aging Facial", "Detox Body Wrap", "Healthy Lunch", "Meditation Session"],
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
      popular: false
    }
  ],
  primaryButtonText = "Book Treatment",
  secondaryButtonText = "View Packages",
  showPackages = true,
  showCategories = true,
  categories = ["All", "Massage", "Facial", "Body", "Wellness", "Couples"],
  selectedCategory = "All",
  showBooking = true,
  ...props
}: HospitalitySpaWellness1Props) {
  // Set section defaults for spa
  const spaProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter services by category
  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory.toLowerCase());

  // Separate featured and regular services
  const featuredServices = filteredServices.filter(service => service.featured);
  const regularServices = filteredServices.filter(service => !service.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "massage": return "bg-green-100 text-green-700";
      case "facial": return "bg-pink-100 text-pink-700";
      case "body": return "bg-purple-100 text-purple-700";
      case "wellness": return "bg-blue-100 text-blue-700";
      case "couples": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "massage": return "💆‍♀️";
      case "facial": return "✨";
      case "body": return "🧖‍♀️";
      case "wellness": return "🧘‍♀️";
      case "couples": return "💑";
      default: return "🌸";
    }
  };

  return (
    <Section {...spaProps}>
      <Element
        id="spaContent"
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

            {/* Category Filter */}
            {showCategories && (
              <Element
                is={Box}
                backgroundColor="bg-white"
                padding="py-6 px-8"
                margin="mb-12"
                display="block"
                borderRadius="rounded-2xl"
                shadow="lg"
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-2"
                  margin=""
                  wrap="wrap"
                >
                  {categories.map((category, index) => (
                    <Element
                      key={category}
                      is={Box}
                      backgroundColor={category === selectedCategory ? "bg-amber-100" : "bg-transparent"}
                      padding="px-6 py-3"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      className={`hover:bg-amber-50 transition-colors duration-200 cursor-pointer ${
                        category === selectedCategory ? "ring-2 ring-amber-500" : ""
                      }`}
                      canvas={false}
                    >
                      <CraftText
                        text={category}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight={category === selectedCategory ? "font-semibold" : "font-medium"}
                        color={category === selectedCategory ? "text-amber-700" : "text-gray-600"}
                        textAlign="text-center"
                        className="hover:text-amber-600 transition-colors duration-200"
                      />
                    </Element>
                  ))}
                </Element>
              </Element>
            )}
          </Element>
        </Element>

        {/* Featured Services Section */}
        {featuredServices.length > 0 && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-16"
            display="block"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Featured Treatments"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
              />
            </Element>

            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="400px"
              gap="gap-8"
              autoRows="auto"
            >
              {featuredServices.map((service, index) => (
                <Element
                  key={service.id}
                  is={Card}
                  variant="flat"
                  shadow="xl"
                  borderRadius="rounded-2xl"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-0"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="hidden"
                  border={false}
                  className="group hover:shadow-2xl transition-all duration-300"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    height="h-64"
                    canvas={false}
                  >
                    <CraftImage
                      src={service.image}
                      alt={service.name}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-t-2xl"
                      margin=""
                      padding=""
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-8"
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
                      gap="gap-4"
                      margin=""
                    >
                      {/* Category Badge */}
                      <Element
                        is={Box}
                        backgroundColor={getCategoryColor(service.category)}
                        padding="px-3 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-fit"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-2"
                          margin=""
                        >
                          <CraftText
                            text={getCategoryIcon(service.category)}
                            tagName="span"
                            fontSize="text-sm"
                            textAlign="text-center"
                          />
                          <CraftText
                            text={service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-semibold"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>

                      {/* Service Title */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={service.name}
                          tagName="h4"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                        />
                      </Element>

                      {/* Service Description */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={service.description}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Benefits */}
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="start"
                          alignItems="stretch"
                          gap="gap-2"
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
                              text="Benefits:"
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-gray-700"
                              textAlign="text-left"
                            />
                          </Element>

                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="start"
                            alignItems="start"
                            gap="gap-2"
                            margin=""
                            wrap="wrap"
                          >
                            {service.benefits.map((benefit, benefitIndex) => (
                              <Element
                                key={benefitIndex}
                                is={Box}
                                backgroundColor="bg-amber-100"
                                padding="px-2 py-1"
                                margin=""
                                display="block"
                                borderRadius="rounded-full"
                                canvas={false}
                              >
                                <CraftText
                                  text={benefit}
                                  tagName="span"
                                  fontSize="text-xs"
                                  fontWeight="font-medium"
                                  color="text-amber-700"
                                  textAlign="text-center"
                                />
                              </Element>
                            ))}
                          </Element>
                        </Element>
                      </Element>

                      {/* Price and Duration */}
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
                            text={service.price}
                            tagName="span"
                            fontSize="text-2xl"
                            fontWeight="font-bold"
                            color="text-amber-600"
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
                            text={service.duration}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-gray-500"
                            textAlign="text-right"
                          />
                        </Element>
                      </Element>

                      {/* Book Button */}
                      {showBooking && (
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftButton
                            text="Book Now"
                            size="sm"
                            backgroundColor="#d97706"
                            textColor="#ffffff"
                            borderRadius="rounded-full"
                            padding="px-6 py-2"
                            width="w-full"
                            className="hover:bg-amber-600 transition-colors duration-300"
                          />
                        </Element>
                      )}
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* Regular Services Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={true}
            minColumnWidth="300px"
            gap="gap-6"
            autoRows="auto"
          >
            {regularServices.map((service, index) => (
              <Element
                key={service.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={false}
                className="group hover:shadow-xl transition-all duration-300"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height="h-48"
                  canvas={false}
                >
                  <CraftImage
                    src={service.image}
                    alt={service.name}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-t-xl"
                    margin=""
                    padding=""
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-6"
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
                    {/* Category Badge */}
                    <Element
                      is={Box}
                      backgroundColor={getCategoryColor(service.category)}
                      padding="px-2 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-fit"
                      canvas={false}
                    >
                      <CraftText
                        text={service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-semibold"
                        textAlign="text-center"
                      />
                    </Element>

                    {/* Service Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={service.name}
                        tagName="h5"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Service Description */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={service.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Price and Duration */}
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="gap-2"
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
                          text={service.price}
                          tagName="span"
                          fontSize="text-lg"
                          fontWeight="font-bold"
                          color="text-amber-600"
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
                          text={service.duration}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-medium"
                          color="text-gray-500"
                          textAlign="text-right"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Packages Section */}
        {showPackages && packages.length > 0 && (
          <Element
            is={Box}
            backgroundColor="bg-amber-50"
            padding="py-16 px-8"
            margin="mb-16"
            display="block"
            borderRadius="rounded-2xl"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-12"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Wellness Packages"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
              />
            </Element>

            <Element
              is={Grid}
              canvas
              columns={3}
              autoFit={true}
              minColumnWidth="300px"
              gap="gap-8"
              autoRows="auto"
            >
              {packages.map((pkg, index) => (
                <Element
                  key={pkg.id}
                  is={Card}
                  variant="flat"
                  shadow="xl"
                  borderRadius="rounded-2xl"
                  backgroundColor="bg-white"
                  borderColor={pkg.popular ? "border-amber-500" : "border-gray-200"}
                  padding="p-0"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="hidden"
                  border={true}
                  className={`group hover:shadow-2xl transition-all duration-300 ${
                    pkg.popular ? "ring-2 ring-amber-500" : ""
                  }`}
                  canvas
                >
                  {pkg.popular && (
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-500"
                      padding="py-2 px-4"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Most Popular"
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-bold"
                        color="text-white"
                        textAlign="text-center"
                      />
                    </Element>
                  )}

                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    height="h-48"
                    canvas={false}
                  >
                    <CraftImage
                      src={pkg.image}
                      alt={pkg.name}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius={pkg.popular ? "rounded-t-2xl" : "rounded-t-2xl"}
                      margin=""
                      padding=""
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-8"
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
                      gap="gap-4"
                      margin=""
                    >
                      {/* Package Title */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={pkg.name}
                          tagName="h4"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                        />
                      </Element>

                      {/* Package Description */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={pkg.description}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Services List */}
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="start"
                          alignItems="stretch"
                          gap="gap-2"
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
                              text="Includes:"
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-gray-700"
                              textAlign="text-left"
                            />
                          </Element>

                          {pkg.services.map((service, serviceIndex) => (
                            <Element
                              key={serviceIndex}
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
                                gap="gap-2"
                                margin=""
                              >
                                <CraftText
                                  text="✓"
                                  tagName="span"
                                  fontSize="text-sm"
                                  color="text-green-600"
                                  textAlign="text-center"
                                />
                                <CraftText
                                  text={service}
                                  tagName="span"
                                  fontSize="text-sm"
                                  fontWeight="font-normal"
                                  color="text-gray-600"
                                  textAlign="text-left"
                                />
                              </Element>
                            </Element>
                          ))}
                        </Element>
                      </Element>

                      {/* Price and Duration */}
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
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="start"
                            alignItems="center"
                            gap="gap-2"
                            margin=""
                          >
                            <CraftText
                              text={pkg.price}
                              tagName="span"
                              fontSize="text-2xl"
                              fontWeight="font-bold"
                              color="text-amber-600"
                              textAlign="text-left"
                            />
                            {pkg.originalPrice && (
                              <CraftText
                                text={pkg.originalPrice}
                                tagName="span"
                                fontSize="text-lg"
                                fontWeight="font-normal"
                                color="text-gray-400"
                                textAlign="text-left"
                                className="line-through"
                              />
                            )}
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
                            text={pkg.duration}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-gray-500"
                            textAlign="text-right"
                          />
                        </Element>
                      </Element>

                      {/* Book Button */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftButton
                          text="Book Package"
                          size="sm"
                          backgroundColor={pkg.popular ? "#d97706" : "#6b7280"}
                          textColor="#ffffff"
                          borderRadius="rounded-full"
                          padding="px-6 py-2"
                          width="w-full"
                          className="hover:bg-amber-600 transition-colors duration-300"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* CTA Section */}
        <Element
          is={Box}
          backgroundColor="bg-gray-900"
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
                text="Ready to Rejuvenate?"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-white"
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
                  textColor="#ffffff"
                  borderColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-white hover:text-gray-900 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalitySpaWellness1.craft = {
  displayName: "Hospitality Spa Wellness 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Spa specific props
    title: "Spa & Wellness",
    subtitle: "Rejuvenate Your Soul",
    description: "Indulge in our world-class spa and wellness services designed to restore balance, promote healing, and provide the ultimate relaxation experience.",
    primaryButtonText: "Book Treatment",
    secondaryButtonText: "View Packages",
    showPackages: true,
    showCategories: true,
    categories: ["All", "Massage", "Facial", "Body", "Wellness", "Couples"],
    selectedCategory: "All",
    showBooking: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

