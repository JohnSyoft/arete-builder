import React from "react";
import { useNode } from "@craftjs/core";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const BarberTeam1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const teamMembers = [
    {
      name: "John Smith",
      role: "Master Barber",
      image: "https://placehold.co/300x400",
      experience: "15+ years",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Mike Johnson",
      role: "Senior Barber",
      image: "https://placehold.co/300x400",
      experience: "10+ years",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "David Wilson",
      role: "Barber",
      image: "https://placehold.co/300x400",
      experience: "8+ years",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-white py-20 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Our{" "}
            <span className="relative">
              Barbers
              <span className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our talented team of professional barbers who bring years of experience and passion to every cut.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.facebook}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                    >
                      <Facebook className="w-5 h-5 text-gray-800" />
                    </a>
                    <a 
                      href={member.social.instagram}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5 text-gray-800" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5 text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-yellow-600 font-semibold mb-1">{member.role}</p>
              <p className="text-gray-600">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};