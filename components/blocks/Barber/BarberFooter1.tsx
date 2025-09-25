import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Dribbble } from "lucide-react";

export const BarberFooter1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <footer
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-cover bg-center bg-no-repeat ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
      style={{
        backgroundImage: "url('https://placehold.co/1920x585')",
        minHeight: "400px"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl text-center">
            {/* Logo */}
            <a href="#" className="inline-block relative z-10 mb-8">
              <img 
                src="/images/demo-barber-logo-black.png" 
                alt="Barber Studio Logo" 
                className="h-12 w-auto mx-auto"
              />
            </a>
            
            {/* Award Text */}
            <span className="block text-6xl md:text-8xl font-bold text-yellow-400 opacity-40 -mt-12 mb-8 tracking-tight">
              Award winning barber studio
            </span>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="http://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="http://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="http://www.dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Dribbble className="w-5 h-5 text-white" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-white text-base">
              &copy; 2025 Crafto is proudly powered by{" "}
              <a 
                href="https://www.themezaa.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline hover:text-yellow-400 transition-colors duration-300"
              >
                ThemeZaa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};