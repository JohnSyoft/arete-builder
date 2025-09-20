import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

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
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      minWidth={300}
      minHeight={400}
    >
      <div
        ref={(ref) => connect(drag(ref))}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                {badge}
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            </div>
            
            <div className="lg:w-1/3 text-center lg:text-left">
              <p className="text-gray-600 mb-6">{description}</p>
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <i className="fa-solid fa-arrow-left text-gray-600"></i>
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <i className="fa-solid fa-arrow-right text-gray-600"></i>
              </button>
            </div>
          </div>

        {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Service Image */}
                <div className="relative overflow-hidden">
                  <a href={service.link}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>

                {/* Service Content */}
                <div className="p-6 text-center">
                  <a
                    href={service.link}
                    className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors block mb-3"
                  >
                    {service.title}
                  </a>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Explore Button */}
                  <div className="border-t border-gray-200 pt-4">
                    <a
                      href={service.link}
                      className="inline-flex items-center text-gray-800 hover:text-blue-600 font-medium group-hover:translate-x-1 transition-all"
                    >
                      <span className="mr-2">Explore service</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Resizer>
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
};