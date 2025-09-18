import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  featured: boolean;
  width: number;
  height: number;
}

interface HospitalityGallery1Props extends SectionProps {
  // Gallery specific props
  title?: string;
  subtitle?: string;
  description?: string;
  images?: GalleryImage[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Gallery settings
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  layout?: "masonry" | "grid" | "carousel";
  showLightbox?: boolean;
}

export function HospitalityGallery1({
  title = "Property Gallery",
  subtitle = "Visual Experience",
  description = "Take a virtual tour of our stunning property through our carefully curated photo gallery showcasing every detail of your perfect stay.",
  images = [
    {
      id: "gallery-1",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      alt: "Luxury hotel exterior",
      title: "Grand Entrance",
      category: "Exterior",
      featured: true,
      width: 800,
      height: 600
    },
    {
      id: "gallery-2",
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=800&fit=crop",
      alt: "Elegant lobby",
      title: "Luxury Lobby",
      category: "Interior",
      featured: true,
      width: 600,
      height: 800
    },
    {
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1611892440501-80c6e516f8d8?w=600&h=400&fit=crop",
      alt: "Deluxe room",
      title: "Deluxe Suite",
      category: "Rooms",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-4",
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      alt: "Fine dining restaurant",
      title: "Fine Dining",
      category: "Dining",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-5",
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      alt: "Spa and wellness center",
      title: "Spa & Wellness",
      category: "Amenities",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-6",
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      alt: "Infinity pool",
      title: "Infinity Pool",
      category: "Amenities",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-7",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      alt: "Business center",
      title: "Business Center",
      category: "Amenities",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-8",
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      alt: "Gourmet kitchen",
      title: "Gourmet Kitchen",
      category: "Dining",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-9",
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop",
      alt: "Rooftop bar",
      title: "Rooftop Bar",
      category: "Dining",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-10",
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
      alt: "Conference room",
      title: "Conference Room",
      category: "Amenities",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-11",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Fitness center",
      title: "Fitness Center",
      category: "Amenities",
      featured: false,
      width: 600,
      height: 400
    },
    {
      id: "gallery-12",
      src: "https://images.unsplash.com/photo-1507525428034-b69928b1d9587?w=600&h=400&fit=crop",
      alt: "Beach view",
      title: "Ocean View",
      category: "Exterior",
      featured: false,
      width: 600,
      height: 400
    }
  ],
  primaryButtonText = "View All Photos",
  secondaryButtonText = "Virtual Tour",
  showCategories = true,
  categories = ["All", "Exterior", "Interior", "Rooms", "Dining", "Amenities"],
  selectedCategory = "All",
  layout = "masonry",
  showLightbox = true,
  ...props
}: HospitalityGallery1Props) {
  // Set section defaults for gallery
  const galleryProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter images by category
  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  // Separate featured and regular images
  const featuredImages = filteredImages.filter(img => img.featured);
  const regularImages = filteredImages.filter(img => !img.featured);

  return (
    <Section {...galleryProps}>
      <Element
        id="galleryContent"
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
                backgroundColor="bg-gray-50"
                padding="py-6 px-8"
                margin="mb-12"
                display="block"
                borderRadius="rounded-2xl"
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

        {/* Featured Images Section */}
        {featuredImages.length > 0 && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-12"
            display="block"
            canvas
          >
            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="300px"
              gap="gap-6"
              autoRows="auto"
            >
              {featuredImages.map((image, index) => (
                <Element
                  key={image.id}
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
                    height="h-80 sm:h-96"
                    canvas={false}
                  >
                    <CraftImage
                      src={image.src}
                      alt={image.alt}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-2xl"
                      margin=""
                      padding=""
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </Element>

                  {/* Image Overlay */}
                  <Element
                    is={Box}
                    backgroundColor="bg-gradient-to-t from-black/60 to-transparent"
                    padding="p-6"
                    margin=""
                    display="block"
                    position="absolute"
                    bottom="bottom-0"
                    left="left-0"
                    right="right-0"
                    borderRadius="rounded-b-2xl"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="end"
                      alignItems="start"
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
                          text={image.title}
                          tagName="h3"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-left"
                        />
                      </Element>

                      <Element
                        is={Box}
                        backgroundColor="bg-amber-500"
                        padding="px-3 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        canvas={false}
                      >
                        <CraftText
                          text={image.category}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-medium"
                          color="text-white"
                          textAlign="text-center"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* Regular Images Grid */}
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
            columns={4}
            autoFit={true}
            minColumnWidth="250px"
            gap="gap-6"
            autoRows="auto"
          >
            {regularImages.map((image, index) => (
              <Element
                key={image.id}
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
                  height="h-64"
                  canvas={false}
                >
                  <CraftImage
                    src={image.src}
                    alt={image.alt}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-xl"
                    margin=""
                    padding=""
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </Element>

                {/* Image Info */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-4"
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
                        text={image.title}
                        tagName="h4"
                        fontSize="text-base"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="bg-gray-100"
                      padding="px-2 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-fit"
                      canvas={false}
                    >
                      <CraftText
                        text={image.category}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-medium"
                        color="text-gray-600"
                        textAlign="text-center"
                      />
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
                text="Experience Our Property"
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

HospitalityGallery1.craft = {
  displayName: "Hospitality Gallery 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Gallery specific props
    title: "Property Gallery",
    subtitle: "Visual Experience",
    description: "Take a virtual tour of our stunning property through our carefully curated photo gallery showcasing every detail of your perfect stay.",
    primaryButtonText: "View All Photos",
    secondaryButtonText: "Virtual Tour",
    showCategories: true,
    categories: ["All", "Exterior", "Interior", "Rooms", "Dining", "Amenities"],
    selectedCategory: "All",
    layout: "masonry",
    showLightbox: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
