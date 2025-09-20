"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface Chef {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  specialties?: string[];
  experience?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface RestaurantChefs1Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  mainChef?: Chef;
  otherChefs?: Chef[];
  description?: string;
  cardDesign?: string;
  itemsPerRow?: number;
  showSpecialties?: boolean;
  showExperience?: boolean;
  showSocialLinks?: boolean;
}

export const RestaurantChefs1: React.FC<RestaurantChefs1Props> = ({
  title = "Best chef",
  subtitle = "Meet professionals",
  backgroundImage = "https://placehold.co/1920x400",
  cardDesign = "default",
  itemsPerRow = 3,
  showSpecialties = true,
  showExperience = true,
  showSocialLinks = true,
  mainChef = {
    id: "1",
    name: "Chef Michael Johnson",
    position: "Head Chef",
    image: "https://placehold.co/682x613",
    description: "With over 15 years of culinary experience, Chef Michael brings passion and creativity to every dish. His expertise in French and Italian cuisine has earned him recognition in the culinary world.",
    specialties: ["French Cuisine", "Italian Cuisine", "Molecular Gastronomy"],
    experience: "15+ years",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  otherChefs = [
    {
      id: "2",
      name: "Chef Sarah Williams",
      position: "Sous Chef",
      image: "https://placehold.co/300x300",
      description: "Specializing in Asian fusion cuisine with a modern twist.",
      specialties: ["Asian Fusion", "Sushi", "Thai Cuisine"],
      experience: "8 years"
    },
    {
      id: "3",
      name: "Chef David Chen",
      position: "Pastry Chef",
      image: "https://placehold.co/300x300",
      description: "Master of desserts and baked goods with artistic presentation.",
      specialties: ["Pastry", "Desserts", "Bread Making"],
      experience: "12 years"
    },
    {
      id: "4",
      name: "Chef Emma Rodriguez",
      position: "Grill Master",
      image: "https://placehold.co/300x300",
      description: "Expert in grilling techniques and meat preparation.",
      specialties: ["Grilling", "BBQ", "Meat Preparation"],
      experience: "10 years"
    }
  ],
  description = "Our talented team of professional chefs brings years of experience and passion to create exceptional dining experiences for our guests."
}) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="restaurant-chefs" is={Section} canvas>
      {/* Page Title Section */}
      <Element id="chefs-title-section" is={Section}>
        <Box
          backgroundImage={backgroundImage}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="py-20 px-0"
          minHeight="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%" padding="px-4">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Element id="chefs-title" is={Text}>
                <Text
                  text={title}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  textTransform="uppercase"
                  margin="mb-4"
                />
              </Element>
              <Element id="chefs-subtitle" is={Text}>
                <Text
                  text={subtitle}
                  tagName="h2"
                  fontSize="text-xl md:text-2xl"
                  fontWeight="font-semibold"
                  color="text-red-600"
                  textTransform="uppercase"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Main Chef Section */}
      <Element id="main-chef-section" is={Section}>
        <Box padding="py-16 px-4">
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="row" gap="gap-8" alignItems="flex-end">
              <Box width="60%">
                <Element id="main-chef-image" is={Image}>
                  <Image
                    src={mainChef.image}
                    alt={mainChef.name}
                    width="100%"
                    height="500px"
                    objectFit="object-cover"
                    borderRadius="rounded-lg"
                  />
                </Element>
              </Box>
              
              <Box width="40%" backgroundColor="bg-white" padding="p-8" borderRadius="rounded-lg" className="shadow-lg">
                <Box display="flex" alignItems="center" margin="mb-5">
                  <Box margin="me-5">
                    <Image
                      src="https://placehold.co/80x80"
                      alt={mainChef.name}
                      width="80px"
                      height="80px"
                      borderRadius="rounded-full"
                    />
                  </Box>
                  <Box>
                    <Element id="main-chef-name" is={Text}>
                      <Text
                        text={mainChef.name}
                        tagName="h4"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-800"
                        margin="mb-1"
                      />
                    </Element>
                    <Element id="main-chef-position" is={Text}>
                      <Text
                        text={mainChef.position}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-semibold"
                        color="text-red-600"
                        textTransform="uppercase"
                      />
                    </Element>
                  </Box>
                </Box>
                
                <Element id="main-chef-description" is={Text}>
                  <Text
                    text={mainChef.description}
                    tagName="p"
                    fontSize="text-sm"
                    color="text-gray-600"
                    margin="mb-5"
                  />
                </Element>
                
                {showSpecialties && mainChef.specialties && (
                  <Box margin="mb-5">
                    <Element id="main-chef-specialties-title" is={Text}>
                      <Text
                        text="Specialties:"
                        tagName="h6"
                        fontSize="text-sm"
                        fontWeight="font-semibold"
                        color="text-gray-800"
                        margin="mb-2"
                      />
                    </Element>
                    <Box display="flex" flexWrap="wrap" gap="gap-2">
                      {mainChef.specialties.map((specialty, index) => (
                        <Element key={index} id={`main-chef-specialty-${index}`} is={Text}>
                          <Text
                            text={specialty}
                            tagName="span"
                            fontSize="text-xs"
                            color="text-gray-600"
                            className="bg-gray-100 px-2 py-1 rounded"
                          />
                        </Element>
                      ))}
                    </Box>
                  </Box>
                )}
                
                {showExperience && mainChef.experience && (
                  <Element id="main-chef-experience" is={Text}>
                    <Text
                      text={`Experience: ${mainChef.experience}`}
                      tagName="p"
                      fontSize="text-sm"
                      color="text-gray-600"
                      margin="mb-5"
                    />
                  </Element>
                )}
                
                {showSocialLinks && mainChef.socialLinks && (
                  <Box display="flex" gap="gap-4">
                    {mainChef.socialLinks.facebook && (
                      <Element id="main-chef-facebook" is={Button}>
                        <Button
                          text=""
                          variant="outline"
                          size="sm"
                          href={mainChef.socialLinks.facebook}
                          className="w-8 h-8 p-0"
                        />
                      </Element>
                    )}
                    {mainChef.socialLinks.twitter && (
                      <Element id="main-chef-twitter" is={Button}>
                        <Button
                          text=""
                          variant="outline"
                          size="sm"
                          href={mainChef.socialLinks.twitter}
                          className="w-8 h-8 p-0"
                        />
                      </Element>
                    )}
                    {mainChef.socialLinks.instagram && (
                      <Element id="main-chef-instagram" is={Button}>
                        <Button
                          text=""
                          variant="outline"
                          size="sm"
                          href={mainChef.socialLinks.instagram}
                          className="w-8 h-8 p-0"
                        />
                      </Element>
                    )}
                    {mainChef.socialLinks.linkedin && (
                      <Element id="main-chef-linkedin" is={Button}>
                        <Button
                          text=""
                          variant="outline"
                          size="sm"
                          href={mainChef.socialLinks.linkedin}
                          className="w-8 h-8 p-0"
                        />
                      </Element>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Other Chefs Section */}
      <Element id="other-chefs-section" is={Section}>
        <Box padding="py-16 px-4">
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="column" alignItems="center" margin="mb-8">
              <Element id="team-title" is={Text}>
                <Text
                  text="Our Culinary Team"
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  margin="mb-4"
                />
              </Element>
              <Element id="team-description" is={Text}>
                <Text
                  text={description}
                  tagName="p"
                  fontSize="text-base"
                  color="text-gray-600"
                  textAlign="center"
                />
              </Element>
            </Box>
            
            <Box
              display="grid"
              gap="gap-8"
            >
              {otherChefs.map((chef) => (
                <Element key={chef.id} id={`chef-${chef.id}`} is={Box}>
                  <Box
                    backgroundColor="bg-white"
                    borderRadius="rounded-lg"
                    className="group relative transition-all duration-300 hover:shadow-xl"
                  >
                    <Element id={`chef-image-${chef.id}`} is={Image}>
                      <Image
                        src={chef.image}
                        alt={chef.name}
                        width="100%"
                        height="300px"
                        objectFit="object-cover"
                        borderRadius="rounded-t-lg"
                      />
                    </Element>
                    
                    <Box 
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      padding="p-8"
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                    >
                      {showSocialLinks && (
                        <Box display="flex" gap="gap-4" margin="mb-4">
                          <Element id={`chef-facebook-${chef.id}`} is={Button}>
                            <Button
                              text=""
                              variant="secondary"
                              size="sm"
                              href="#"
                              className="w-8 h-8 p-0 rounded-full bg-white text-gray-800"
                            />
                          </Element>
                          <Element id={`chef-twitter-${chef.id}`} is={Button}>
                            <Button
                              text=""
                              variant="secondary"
                              size="sm"
                              href="#"
                              className="w-8 h-8 p-0 rounded-full bg-white text-gray-800"
                            />
                          </Element>
                          <Element id={`chef-instagram-${chef.id}`} is={Button}>
                            <Button
                              text=""
                              variant="secondary"
                              size="sm"
                              href="#"
                              className="w-8 h-8 p-0 rounded-full bg-white text-gray-800"
                            />
                          </Element>
                          <Element id={`chef-linkedin-${chef.id}`} is={Button}>
                            <Button
                              text=""
                              variant="secondary"
                              size="sm"
                              href="#"
                              className="w-8 h-8 p-0 rounded-full bg-white text-gray-800"
                            />
                          </Element>
                        </Box>
                      )}
                    </Box>
                    
                    <Box padding="p-6" textAlign="center">
                      <Element id={`chef-name-${chef.id}`} is={Text}>
                        <Text
                          text={chef.name}
                          tagName="h5"
                          fontSize="text-lg"
                          fontWeight="font-bold"
                          color="text-gray-800"
                          margin="mb-1"
                        />
                      </Element>
                      <Element id={`chef-position-${chef.id}`} is={Text}>
                        <Text
                          text={chef.position}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-red-600"
                          textTransform="uppercase"
                        />
                      </Element>
                      <Element id={`chef-description-${chef.id}`} is={Text}>
                        <Text
                          text={chef.description}
                          tagName="p"
                          fontSize="text-sm"
                          color="text-gray-600"
                          margin="mt-4"
                        />
                      </Element>
                      
                      {showSpecialties && chef.specialties && (
                        <Box margin="mt-4">
                          {chef.specialties.map((specialty, index) => (
                            <Element key={index} id={`chef-specialty-${chef.id}-${index}`} is={Text}>
                              <Text
                                text={specialty}
                                tagName="span"
                                fontSize="text-xs"
                                color="text-gray-500"
                                className="bg-gray-100 px-2 py-1 rounded me-1 mb-1 inline-block"
                              />
                            </Element>
                          ))}
                        </Box>
                      )}
                      
                      {showExperience && chef.experience && (
                        <Element id={`chef-experience-${chef.id}`} is={Text}>
                          <Text
                            text={`${chef.experience} experience`}
                            tagName="small"
                            fontSize="text-xs"
                            color="text-gray-500"
                            margin="mt-2"
                          />
                        </Element>
                      )}
                    </Box>
                  </Box>
                </Element>
              ))}
            </Box>
          </Box>
        </Box>
      </Element>
    </Element>
  );
};

RestaurantChefs1.craft = {
  displayName: "Restaurant Chefs 1",
  props: {
    title: "Best chef",
    subtitle: "Meet professionals",
    backgroundImage: "https://placehold.co/1920x400",
    cardDesign: "default",
    itemsPerRow: 3,
    showSpecialties: true,
    showExperience: true,
    showSocialLinks: true,
    mainChef: {
      id: "1",
      name: "Chef Michael Johnson",
      position: "Head Chef",
      image: "https://placehold.co/682x613",
      description: "With over 15 years of culinary experience, Chef Michael brings passion and creativity to every dish. His expertise in French and Italian cuisine has earned him recognition in the culinary world.",
      specialties: ["French Cuisine", "Italian Cuisine", "Molecular Gastronomy"],
      experience: "15+ years",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    otherChefs: [
      {
        id: "2",
        name: "Chef Sarah Williams",
        position: "Sous Chef",
        image: "https://placehold.co/300x300",
        description: "Specializing in Asian fusion cuisine with a modern twist.",
        specialties: ["Asian Fusion", "Sushi", "Thai Cuisine"],
        experience: "8 years"
      }
    ],
    description: "Our talented team of professional chefs brings years of experience and passion to create exceptional dining experiences for our guests."
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
