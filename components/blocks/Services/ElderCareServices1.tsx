import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Grid } from "../Basic/Grid";
import { Icon } from "../Basic/Icon";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ElderCareServices1Props {
  badge?: string;
  title?: string;
  description?: string;
  services?: ServiceItem[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareServices1({
  badge = "# Rise your hand",
  title = "Our hospitality",
  description = "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text.",
  services = [
    {
      title: "Health facilities",
      description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
      image: "https://placehold.co/600x400/87CEEB/FFFFFF?text=Health+Facilities",
      link: "#",
    },
    {
      title: "Personal care",
      description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
      image: "https://placehold.co/600x400/98FB98/FFFFFF?text=Personal+Care",
      link: "#",
    },
    {
      title: "Medical checkup",
      description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
      image: "https://placehold.co/600x400/FFB6C1/FFFFFF?text=Medical+Checkup",
      link: "#",
    },
    {
      title: "Health consultation",
      description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
      image: "https://placehold.co/600x400/DDA0DD/FFFFFF?text=Health+Consultation",
      link: "#",
    },
    {
      title: "Skilled nursing",
      description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
      image: "https://placehold.co/600x400/F0E68C/FFFFFF?text=Skilled+Nursing",
      link: "#",
    },
    {
      title: "Eldery nutrition",
      description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
      image: "https://placehold.co/600x400/FFA07A/FFFFFF?text=Elder+Nutrition",
      link: "#",
    },
  ],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareServices1Props) {
  return (
    <Element id="eldercare-services-container" is={Section} canvas>
      <Element
        id="eldercare-services-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <div className="inline-block uppercase tracking-wide mb-2">
                <Element
                  id="eldercare-services-badge"
                  is={Text}
                  text={badge}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  color="text-blue-600"
                />
              </div>
              <Element
                id="eldercare-services-title"
                is={Text}
                text={title}
                tagName="h2"
                fontSize="text-4xl"
                fontWeight="font-bold"
                color="text-gray-800"
                margin="mb-4"
              />
            </div>
            
            <div className="lg:w-1/3 text-center lg:text-left">
              <Element
                id="eldercare-services-description"
                is={Text}
                text={description}
                tagName="p"
                color="text-gray-600"
                margin="mb-6"
              />
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Element
                  id="eldercare-services-left-arrow"
                  is={Icon}
                  iconName="chevronLeft"
                  size={16}
                  color="text-gray-600"
                />
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Element
                  id="eldercare-services-right-arrow"
                  is={Icon}
                  iconName="chevronRight"
                  size={16}
                  color="text-gray-600"
                />
              </button>
            </div>
          </div>

        {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <a href={service.link}>
                    <div className="group-hover:scale-105 transition-transform duration-300">
                      <Element
                        id={`eldercare-service-image-${index}`}
                        is={Image}
                        src={service.image}
                        alt={service.title}
                        width="100%"
                        height="192px"
                        objectFit="object-cover"
                        borderRadius="rounded-t-lg"
                      />
                    </div>
                  </a>
                </div>

                {/* Service Content */}
                <div className="p-6 text-center">
                  <div className="hover:text-blue-600 transition-colors block mb-3">
                    <Element
                      id={`eldercare-service-title-${index}`}
                      is={Text}
                      text={service.title}
                      tagName="h3"
                      fontSize="text-xl"
                      fontWeight="font-bold"
                      color="text-gray-800"
                    />
                  </div>
                  <div className="leading-relaxed mb-6">
                    <Element
                      id={`eldercare-service-description-${index}`}
                      is={Text}
                      text={service.description}
                      tagName="p"
                      fontSize="text-sm"
                      color="text-gray-600"
                    />
                  </div>

                  {/* Explore Button */}
                  <div className="border-t border-gray-200 pt-4">
                    <a href={service.link} className="inline-flex items-center text-gray-800 hover:text-blue-600 font-medium group-hover:translate-x-1 transition-all">
                      <span className="mr-2">
                        <Element
                          id={`eldercare-service-link-text-${index}`}
                          is={Text}
                          text="Explore service"
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-gray-800"
                        />
                      </span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </Element>
  );
}

ElderCareServices1.craft = {
  displayName: "Elder Care Services 1",
  props: {
    badge: "# Rise your hand",
    title: "Our hospitality",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text.",
    services: [
      {
        title: "Health facilities",
        description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
        image: "https://placehold.co/600x400/87CEEB/FFFFFF?text=Health+Facilities",
        link: "#",
      },
      {
        title: "Personal care",
        description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
        image: "https://placehold.co/600x400/98FB98/FFFFFF?text=Personal+Care",
        link: "#",
      },
      {
        title: "Medical checkup",
        description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
        image: "https://placehold.co/600x400/FFB6C1/FFFFFF?text=Medical+Checkup",
        link: "#",
      },
      {
        title: "Health consultation",
        description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
        image: "https://placehold.co/600x400/DDA0DD/FFFFFF?text=Health+Consultation",
        link: "#",
      },
      {
        title: "Skilled nursing",
        description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
        image: "https://placehold.co/600x400/F0E68C/FFFFFF?text=Skilled+Nursing",
        link: "#",
      },
      {
        title: "Eldery nutrition",
        description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
        image: "https://placehold.co/600x400/FFA07A/FFFFFF?text=Elder+Nutrition",
        link: "#",
      },
    ],
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};