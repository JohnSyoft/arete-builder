import React from "react";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Scissors, ArrowRight } from "lucide-react";

export const BarberAbout1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-yellow-50 py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-0 text-8xl lg:text-6xl font-bold text-yellow-400 opacity-20 leading-none">
        2023
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <div className="w-full lg:w-5/12 xl:w-5/12">
            <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-4 leading-tight">
              Award{" "}
              <span className="relative">
                winning
                <span className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
              </span>{" "}
              barber studio.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our barbers are carefully hand-picked to ensure the finest service in our barbershops around London the UK and the world. We're well trusted to deliver excellence with over 5000+ customer reviews.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg">
                <Scissors className="w-4 h-4 mr-2" />
                Explore services
              </Button>
              <Button variant="link" className="text-gray-800 text-lg p-0 hover:text-yellow-600">
                Our barbers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-6/12 xl:w-6/12 lg:ml-8 relative">
            <div className="relative w-3/5 md:w-3/5">
              <img 
                src="https://placehold.co/410x535" 
                alt="Barber at work" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -right-32 md:-right-24 top-8 text-right">
                <span className="text-2xl font-light text-gray-800 block">since</span>
                <span className="text-7xl font-bold text-yellow-400 block">1998</span>
              </div>
            </div>
            <div className="absolute right-4 -bottom-16 rounded-lg overflow-hidden w-3/5 lg:w-2/5">
              <img 
                src="https://placehold.co/375x375" 
                alt="Barber studio" 
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};