import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface RestaurantAbout1Props {
  sinceYear?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  phoneNumber?: string;
  phoneLink?: string;
  features?: Feature[];
  mainImage?: string;
  backgroundText?: string;
  decorativeImage1?: string;
  decorativeImage2?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantAbout1({
  sinceYear = "since 1988",
  title = "Wonderful dining experience & food.",
  description = "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
  buttonText = "About restaurant",
  buttonLink = "#",
  phoneNumber = "1-800-222-000",
  phoneLink = "tel:1800222000",
  features = [
    {
      icon: "📦",
      title: "fast delivery",
      description: "Within 30 minutes"
    },
    {
      icon: "🏆",
      title: "absolute dining",
      description: "Best buffet restaurant"
    },
    {
      icon: "🛍️",
      title: "pickup delivery",
      description: "Grab your food order"
    }
  ],
  mainImage = "https://placehold.co/650x625/FFFFFF/333333?text=Restaurant+Image",
  backgroundText = "experience",
  decorativeImage1 = "https://placehold.co/248x244/FFFFFF/333333?text=Decorative",
  decorativeImage2 = "https://placehold.co/346x345/FFFFFF/333333?text=Decorative",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantAbout1Props) {
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
        position: "relative",
        overflow: "hidden",
      }}
      minWidth={300}
      minHeight={400}
    >
      <section
        ref={(ref) => connect(drag(ref))}
        className="relative py-16 lg:py-12"
      >
        {/* Background Text */}
        <div className="absolute left-0 w-full text-center -top-20 lg:-top-16 xs:-top-5 opacity-5 text-8xl lg:text-6xl xs:text-5xl font-bold tracking-wider uppercase whitespace-nowrap">
          {backgroundText}
        </div>

        {/* Decorative Images */}
        <div className="absolute -left-12 mt-4 hidden xl:block">
          <img 
            src={decorativeImage1} 
            alt="Decorative" 
            className="animate-pulse"
          />
        </div>
        <div className="absolute -right-12 xl:-right-12 xxl:-right-24 xl:w-56 hidden xl:block">
          <img 
            src={decorativeImage2} 
            alt="Decorative" 
            className="animate-pulse"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center mb-16 lg:mb-12 lg:mt-8">
            <div className="w-full xl:w-7/12 lg:w-6/12 text-center relative md:mb-12 xs:mb-8">
              <img 
                src={mainImage} 
                alt="Restaurant" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full xl:w-5/12 lg:w-6/12 xl:pl-8">
              <span className="text-sm font-semibold text-red-600 uppercase mb-6 block">
                <span className="w-16 h-0.5 bg-red-600 inline-block align-middle mr-4"></span>
                {sinceYear}
              </span>
              
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {title}
              </h1>
              
              <p className="text-gray-600 mb-6 w-11/12">
                {description}
              </p>
              
              <div className="flex flex-wrap items-center mt-4">
                <a
                  href={buttonLink}
                  className="bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 mr-8 xs:mr-4 xs:mb-4"
                >
                  {buttonText}
                </a>
                <div className="text-2xl font-bold text-gray-800 xs:mb-4">
                  <i className="mr-2 text-red-600">📞</i>
                  <a href={phoneLink} className="hover:text-red-600 transition-colors">
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center md:mb-12 sm:mb-8">
                <div className="w-24 h-24 rounded-full bg-white shadow-lg mr-6 flex items-center justify-center">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <div className="flex-grow">
                  <span className="block text-2xl font-bold text-gray-800 mb-1">
                    {feature.title}
                  </span>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Resizer>
  );
}

RestaurantAbout1.craft = {
  displayName: "Restaurant About 1",
  props: {
    sinceYear: "since 1988",
    title: "Wonderful dining experience & food.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
    buttonText: "About restaurant",
    buttonLink: "#",
    phoneNumber: "1-800-222-000",
    phoneLink: "tel:1800222000",
    features: [
      {
        icon: "📦",
        title: "fast delivery",
        description: "Within 30 minutes"
      },
      {
        icon: "🏆",
        title: "absolute dining",
        description: "Best buffet restaurant"
      },
      {
        icon: "🛍️",
        title: "pickup delivery",
        description: "Grab your food order"
      }
    ],
    mainImage: "https://placehold.co/650x625/FFFFFF/333333?text=Restaurant+Image",
    backgroundText: "experience",
    decorativeImage1: "https://placehold.co/248x244/FFFFFF/333333?text=Decorative",
    decorativeImage2: "https://placehold.co/346x345/FFFFFF/333333?text=Decorative",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
