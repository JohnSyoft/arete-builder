import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Facebook, Instagram, Twitter, Dribbble, Star } from "lucide-react";

export const BeautySalonTeam1 = () => {
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
      name: "Jeremy dupont",
      position: "Director",
      image: "https://placehold.co/550x670",
      social: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
        dribbble: "http://www.dribbble.com",
      },
    },
    {
      name: "Matthew taylor",
      position: "Makeup",
      image: "https://placehold.co/550x670",
      social: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
        dribbble: "http://www.dribbble.com",
      },
    },
    {
      name: "Herman miller",
      position: "Therapist",
      image: "https://placehold.co/550x670",
      social: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
        dribbble: "http://www.dribbble.com",
      },
    },
    {
      name: "Johncy parker",
      position: "Consultant",
      image: "https://placehold.co/550x670",
      social: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
        dribbble: "http://www.dribbble.com",
      },
    },
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      className={`py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
              Our specialists
            </span>
            <div className="w-8 h-0.5 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl font-light text-gray-900">
            Beauty experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="relative mb-8 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Dribbble className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>25,000+ Beauty lovers visited our beauty salon.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

BeautySalonTeam1.craft = {
  displayName: "Beauty Salon Team 1",
  props: {},
  related: {
    settings: () => null,
  },
};
