import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface PropertyGalleryProps extends SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  gallery1Image?: string;
  gallery1Title?: string;
  gallery1Category?: string;
  gallery2Image?: string;
  gallery2Title?: string;
  gallery2Category?: string;
  gallery3Image?: string;
  gallery3Title?: string;
  gallery3Category?: string;
  gallery4Image?: string;
  gallery4Title?: string;
  gallery4Category?: string;
  gallery5Image?: string;
  gallery5Title?: string;
  gallery5Category?: string;
  gallery6Image?: string;
  gallery6Title?: string;
  gallery6Category?: string;
  gallery7Image?: string;
  gallery7Title?: string;
  gallery7Category?: string;
  gallery8Image?: string;
  gallery8Title?: string;
  gallery8Category?: string;
  virtualTourTitle?: string;
  virtualTourDescription?: string;
  tourButtonText?: string;
  galleryButtonText?: string;
  downloadButtonText?: string;
  totalPhotos?: string;
  totalRooms?: string;
  totalAmenities?: string;
}

export function PropertyGallery({
  sectionTitle = "Explore Our Property",
  sectionSubtitle = "Take a virtual tour and discover the beauty of our luxury hotel",
  gallery1Image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery1Title = "Grand Lobby",
  gallery1Category = "Public Spaces",
  gallery2Image = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery2Title = "Presidential Suite",
  gallery2Category = "Accommodations",
  gallery3Image = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery3Title = "Rooftop Restaurant",
  gallery3Category = "Dining",
  gallery4Image = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery4Title = "Infinity Pool",
  gallery4Category = "Recreation",
  gallery5Image = "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery5Title = "Luxury Spa",
  gallery5Category = "Wellness",
  gallery6Image = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery6Title = "Business Center",
  gallery6Category = "Business",
  gallery7Image = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery7Title = "Fitness Center",
  gallery7Category = "Fitness",
  gallery8Image = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery8Title = "Event Ballroom",
  gallery8Category = "Events",
  virtualTourTitle = "360° Virtual Tour",
  virtualTourDescription = "Experience our hotel from the comfort of your home with our immersive virtual tour",
  tourButtonText = "Start Virtual Tour",
  galleryButtonText = "View Full Gallery",
  downloadButtonText = "Download Brochure",
  totalPhotos = "150+",
  totalRooms = "350",
  totalAmenities = "25",
  ...props
}: PropertyGalleryProps) {
  const sectionProps = {
    backgroundColor: "#F8F9FA",
    padding: "80px 0",
    minHeight: "auto",
    hasContentWrapper: false,
    ...props,
  };

  const galleryItems = [
    {
      image: gallery1Image,
      title: gallery1Title,
      category: gallery1Category,
    },
    {
      image: gallery2Image,
      title: gallery2Title,
      category: gallery2Category,
    },
    {
      image: gallery3Image,
      title: gallery3Title,
      category: gallery3Category,
    },
    {
      image: gallery4Image,
      title: gallery4Title,
      category: gallery4Category,
    },
    {
      image: gallery5Image,
      title: gallery5Title,
      category: gallery5Category,
    },
    {
      image: gallery6Image,
      title: gallery6Title,
      category: gallery6Category,
    },
    {
      image: gallery7Image,
      title: gallery7Title,
      category: gallery7Category,
    },
    {
      image: gallery8Image,
      title: gallery8Title,
      category: gallery8Category,
    },
  ];

  return (
    <Section {...sectionProps}>
      <Element
        id="propertyGallery"
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

          {/* Stats Section */}
          <Element
            is={Box}
            backgroundColor="#FFFFFF"
            padding="40px"
            margin="0 0 64px 0"
            borderRadius="20px"
            display="block"
            width="100%"
            canvas
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Total Photos */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
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
                    text={totalPhotos}
                    tagName="span"
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="#D4AF37"
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
                    text="High-Quality Photos"
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-600"
                    textAlign="text-center"
                  />
                </Element>
              </Element>

              {/* Total Rooms */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
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
                    text={totalRooms}
                    tagName="span"
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="#D4AF37"
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
                    text="Luxury Rooms & Suites"
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-600"
                    textAlign="text-center"
                  />
                </Element>
              </Element>

              {/* Total Amenities */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
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
                    text={totalAmenities}
                    tagName="span"
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="#D4AF37"
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
                    text="World-Class Amenities"
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-600"
                    textAlign="text-center"
                  />
                </Element>
              </Element>
            </div>
          </Element>

          {/* Gallery Grid */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 64px 0"
            display="block"
            width="100%"
            canvas
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryItems.map((item, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  borderRadius="12px"
                  display="block"
                  width="100%"
                  canvas
                >
                  <div
                    className={`group overflow-hidden rounded-xl cursor-pointer ${
                      index === 0 || index === 3
                        ? "md:col-span-2 md:row-span-2"
                        : ""
                    } ${index === 0 ? "h-80" : index === 3 ? "h-80" : "h-40"}`}
                  >
                    {/* Image */}
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
                      <div className="relative h-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          margin=""
                          padding=""
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-end p-4">
                          <div className="text-white">
                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0 0 4px 0"
                              display="block"
                              canvas={false}
                            >
                              <Text
                                text={item.category}
                                tagName="span"
                                fontSize="text-xs"
                                fontWeight="font-medium"
                                color="rgba(212, 175, 55, 1)"
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
                                text={item.title}
                                tagName="h4"
                                fontSize={
                                  index === 0 || index === 3
                                    ? "text-lg"
                                    : "text-sm"
                                }
                                fontWeight="font-semibold"
                                color="text-white"
                                textAlign="text-left"
                                lineHeight="leading-tight"
                              />
                            </Element>
                          </div>
                        </div>

                        {/* View Icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Element
                            is={Box}
                            backgroundColor="rgba(255, 255, 255, 0.9)"
                            padding="8px"
                            margin="0"
                            borderRadius="50%"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            canvas={false}
                          >
                            <Text
                              text="👁️"
                              tagName="span"
                              fontSize="text-lg"
                              fontWeight="font-normal"
                              color="text-gray-800"
                              textAlign="text-center"
                            />
                          </Element>
                        </div>
                      </div>
                    </Element>
                  </div>
                </Element>
              ))}
            </div>
          </Element>

          {/* Virtual Tour Section */}
          <Element
            is={Box}
            backgroundColor="#D4AF37"
            padding="60px 40px"
            margin="0 0 64px 0"
            borderRadius="24px"
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
                  text={virtualTourTitle}
                  tagName="h3"
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
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={virtualTourDescription}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="rgba(255, 255, 255, 0.9)"
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
                canvas={false}
              >
                <Button
                  text={tourButtonText}
                  backgroundColor="#FFFFFF"
                  textColor="#D4AF37"
                  borderRadius="12px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </div>
          </Element>

          {/* Action Buttons */}
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
                  text="Discover More"
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
                  text="Browse our complete gallery or download our property brochure"
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
                  text={galleryButtonText}
                  backgroundColor="#D4AF37"
                  textColor="#FFFFFF"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
                <Button
                  text={downloadButtonText}
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

PropertyGallery.craft = {
  displayName: "Property Gallery",
  props: {
    sectionTitle: "Explore Our Property",
    sectionSubtitle:
      "Take a virtual tour and discover the beauty of our luxury hotel",
    gallery1Image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery1Title: "Grand Lobby",
    gallery1Category: "Public Spaces",
    gallery2Image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery2Title: "Presidential Suite",
    gallery2Category: "Accommodations",
    gallery3Image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery3Title: "Rooftop Restaurant",
    gallery3Category: "Dining",
    gallery4Image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery4Title: "Infinity Pool",
    gallery4Category: "Recreation",
    gallery5Image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery5Title: "Luxury Spa",
    gallery5Category: "Wellness",
    gallery6Image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery6Title: "Business Center",
    gallery6Category: "Business",
    gallery7Image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery7Title: "Fitness Center",
    gallery7Category: "Fitness",
    gallery8Image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery8Title: "Event Ballroom",
    gallery8Category: "Events",
    virtualTourTitle: "360° Virtual Tour",
    virtualTourDescription:
      "Experience our hotel from the comfort of your home with our immersive virtual tour",
    tourButtonText: "Start Virtual Tour",
    galleryButtonText: "View Full Gallery",
    downloadButtonText: "Download Brochure",
    totalPhotos: "150+",
    totalRooms: "350",
    totalAmenities: "25",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
