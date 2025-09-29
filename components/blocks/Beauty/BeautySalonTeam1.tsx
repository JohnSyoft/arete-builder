import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Icon } from "../Basic/Icon";

export const BeautySalonTeam1 = () => {
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
    <Element id="beauty-salon-team-container" is={Section} canvas>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <Element id="beauty-salon-team-header" is={Box} className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-4">
              <Element
                id="beauty-salon-team-badge"
                is={Text}
                text="Our specialists"
                className="text-sm font-bold text-pink-600 uppercase tracking-wider"
              />
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
            <Element
              id="beauty-salon-team-title"
              is={Text}
              text="Beauty experts"
              className="text-4xl font-light text-gray-900"
            />
          </Element>

          {/* Team Grid */}
          <Element id="beauty-salon-team-grid" is={Box} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Element
                key={index}
                id={`beauty-salon-team-member-${index}`}
                is={Box}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-8 overflow-hidden rounded-lg">
                  <Element
                    id={`beauty-salon-team-member-${index}-image`}
                    is={Image}
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
                        <Element
                          id={`beauty-salon-team-member-${index}-social-facebook`}
                          is={Icon}
                          icon="facebook"
                          className="w-4 h-4"
                        />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <Element
                          id={`beauty-salon-team-member-${index}-social-instagram`}
                          is={Icon}
                          icon="instagram"
                          className="w-4 h-4"
                        />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <Element
                          id={`beauty-salon-team-member-${index}-social-twitter`}
                          is={Icon}
                          icon="twitter"
                          className="w-4 h-4"
                        />
                      </a>
                      <a
                        href={member.social.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <Element
                          id={`beauty-salon-team-member-${index}-social-dribbble`}
                          is={Icon}
                          icon="dribbble"
                          className="w-4 h-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <Element
                  id={`beauty-salon-team-member-${index}-name`}
                  is={Text}
                  text={member.name}
                  className="text-xl font-medium text-gray-900 mb-1"
                />
                <Element
                  id={`beauty-salon-team-member-${index}-position`}
                  is={Text}
                  text={member.position}
                  className="text-gray-600"
                />
              </Element>
            ))}
          </Element>

          {/* Stats */}
          <Element id="beauty-salon-team-stats" is={Box} className="text-center">
            <div className="inline-flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Element
                    key={i}
                    id={`beauty-salon-team-star-${i}`}
                    is={Icon}
                    icon="star"
                    className="w-4 h-4 fill-current"
                  />
                ))}
              </div>
              <Element
                id="beauty-salon-team-stats-text"
                is={Text}
                text="25,000+ Beauty lovers visited our beauty salon."
              />
            </div>
          </Element>
        </div>
      </section>
    </Element>
  );
};

BeautySalonTeam1.craft = {
  displayName: "Beauty Salon Team 1",
  props: {},
  isCanvas: true,
  related: {
    settings: () => null,
  },
};
