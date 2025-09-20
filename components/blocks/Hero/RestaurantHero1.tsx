import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface RestaurantHero1Props {
  backgroundImage?: string;
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  buttonText?: string;
  buttonLink?: string;
  floatingImage?: string;
  patternImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantHero1({
  backgroundImage = "https://placehold.co/1920x1303/1a1a1a/FFFFFF?text=Restaurant+Hero",
  subtitle = "Experience the taste of italy",
  title = "Great dining",
  titleHighlight = "experience",
  buttonText = "Authentic experience",
  buttonLink = "#",
  floatingImage = "https://placehold.co/300x200/FFFFFF/333333?text=Food+Image",
  patternImage = "https://placehold.co/700x700/FFFFFF/333333?text=Pattern",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  nonEditable = true,
}: RestaurantHero1Props) {
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
        height: "100vh",
        minHeight: "600px",
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
      minWidth={300}
      minHeight={600}
    >
      <section
        ref={(ref) => connect(drag(ref))}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center h-full">
            <div className="text-center relative">
              {/* Circular Background */}
              <div className="w-[700px] h-[700px] lg:w-[550px] lg:h-[550px] sm:w-[450px] sm:h-[450px] xs:w-[320px] xs:h-[320px] mx-auto relative flex justify-center items-center rounded-full bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-20">
                <div className="text-center">
                  <p className="text-black text-2xl xs:text-lg xs:leading-6 font-semibold tracking-wider uppercase mb-6 sm:mb-4 mt-2">
                    {subtitle}
                  </p>
                  
                  <div className="text-8xl lg:text-7xl xs:text-6xl xs:leading-tight mb-8 xs:mb-4 font-bold">
                    <span 
                      className="text-white"
                      style={{
                        WebkitTextStroke: "1px white",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {title}
                    </span>
                    <span className="text-white ml-4 tracking-tight">
                      {titleHighlight}
                    </span>
                  </div>
                  
                  <a
                    href={buttonLink}
                    className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                  >
                    {buttonText}
                    <i className="ml-2">→</i>
                  </a>
                  
                  {/* Floating Image */}
                  <img
                    src={floatingImage}
                    alt="Restaurant food"
                    className="absolute -right-12 -bottom-12 lg:-bottom-4 lg:w-48 sm:w-36 hidden sm:block animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Resizer>
  );
}

RestaurantHero1.craft = {
  displayName: "Restaurant Hero 1",
  props: {
    backgroundImage: "https://placehold.co/1920x1303/1a1a1a/FFFFFF?text=Restaurant+Hero",
    subtitle: "Experience the taste of italy",
    title: "Great dining",
    titleHighlight: "experience",
    buttonText: "Authentic experience",
    buttonLink: "#",
    floatingImage: "https://placehold.co/300x200/FFFFFF/333333?text=Food+Image",
    patternImage: "https://placehold.co/200x200/FFFFFF/333333?text=Pattern",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};