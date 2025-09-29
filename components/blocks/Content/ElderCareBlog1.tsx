import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

interface BlogItem {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author: string;
  likes: number;
  link: string;
}

interface ElderCareBlog1Props {
  badge?: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  blogItems?: BlogItem[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareBlog1({
  badge = "# Latest news",
  title = "Top care articles",
  buttonText = "Read articles",
  buttonLink = "#",
  blogItems = [
    {
      title: "Beautiful with senior person",
      description: "Lorem ipsum is simply dummy text printing typesetting industry.",
      image: "https://placehold.co/600x430/87CEEB/FFFFFF?text=Senior+Care",
      category: "Health",
      date: "30 August 2024",
      author: "Den viliamson",
      likes: 25,
      link: "#",
    },
    {
      title: "Always happy and satisfied",
      description: "Lorem ipsum is simply dummy text printing typesetting industry.",
      image: "https://placehold.co/600x430/98FB98/FFFFFF?text=Happy+Senior",
      category: "Care",
      date: "28 August 2024",
      author: "Hugh macleod",
      likes: 54,
      link: "#",
    },
    {
      title: "Good to talk & feel creative",
      description: "Lorem ipsum is simply dummy text printing typesetting industry.",
      image: "https://placehold.co/600x430/FFB6C1/FFFFFF?text=Creative+Senior",
      category: "Bliss",
      date: "26 August 2024",
      author: "Walton smith",
      likes: 42,
      link: "#",
    },
  ],
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: ElderCareBlog1Props) {
  return (
    <Element id="eldercare-blog-container" is={Section} canvas>
      <Element
        id="eldercare-blog-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <div className="mb-6 sm:mb-0">
              <Element
                id="eldercare-blog-badge"
                is={Text}
                text={badge}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-blue-600"
                className="inline-block uppercase tracking-wide mb-2"
              />
              <Element
                id="eldercare-blog-title"
                is={Text}
                text={title}
                tagName="h2"
                fontSize="text-4xl"
                fontWeight="font-bold"
                color="text-gray-800"
              />
            </div>
            
            <Element
              id="eldercare-blog-button"
              is={Button}
              text={buttonText}
              href={buttonLink}
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors group"
            />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <a href={item.link}>
                    <Element
                      id={`eldercare-blog-image-${index}`}
                      is={Image}
                      src={item.image}
                      alt={item.title}
                      width="100%"
                      height="192px"
                      objectFit="object-cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Element
                      id={`eldercare-blog-category-${index}`}
                      is={Text}
                      text={item.category}
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-bold"
                      color="text-gray-800"
                      className="inline-block px-3 py-1 bg-white uppercase rounded-full"
                    />
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <Element
                    id={`eldercare-blog-item-title-${index}`}
                    is={Text}
                    text={item.title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-800"
                    className="hover:text-blue-600 transition-colors block mb-3"
                  />
                  <Element
                    id={`eldercare-blog-item-description-${index}`}
                    is={Text}
                    text={item.description}
                    tagName="p"
                    fontSize="text-sm"
                    color="text-gray-600"
                    margin="mb-6"
                    className="leading-relaxed"
                  />

                  {/* Author and Meta */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex-1">
                      <Element
                        id={`eldercare-blog-date-${index}`}
                        is={Text}
                        text={item.date}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-bold"
                        color="text-gray-600"
                      />
                      <div className="text-gray-600">
                        By{" "}
                        <Element
                          id={`eldercare-blog-author-${index}`}
                          is={Text}
                          text={item.author}
                          tagName="a"
                          href="#"
                          fontSize="text-sm"
                          color="text-gray-800"
                          className="hover:text-blue-600 underline"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Element
                        id={`eldercare-blog-like-${index}`}
                        is={Icon}
                        iconName="heart"
                        size={16}
                        color="text-red-500"
                        className="hover:text-red-600"
                      />
                      <Element
                        id={`eldercare-blog-likes-${index}`}
                        is={Text}
                        text={item.likes.toString()}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-bold"
                        color="text-gray-600"
                        className="ml-1"
                      />
                    </div>
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

ElderCareBlog1.craft = {
  displayName: "Elder Care Blog 1",
  props: {
    badge: "# Latest news",
    title: "Top care articles",
    buttonText: "Read articles",
    buttonLink: "#",
    blogItems: [
      {
        title: "Beautiful with senior person",
        description: "Lorem ipsum is simply dummy text printing typesetting industry.",
        image: "https://placehold.co/600x430/87CEEB/FFFFFF?text=Senior+Care",
        category: "Health",
        date: "30 August 2024",
        author: "Den viliamson",
        likes: 25,
        link: "#",
      },
      {
        title: "Always happy and satisfied",
        description: "Lorem ipsum is simply dummy text printing typesetting industry.",
        image: "https://placehold.co/600x430/98FB98/FFFFFF?text=Happy+Senior",
        category: "Care",
        date: "28 August 2024",
        author: "Hugh macleod",
        likes: 54,
        link: "#",
      },
      {
        title: "Good to talk & feel creative",
        description: "Lorem ipsum is simply dummy text printing typesetting industry.",
        image: "https://placehold.co/600x430/FFB6C1/FFFFFF?text=Creative+Senior",
        category: "Bliss",
        date: "26 August 2024",
        author: "Walton smith",
        likes: 42,
        link: "#",
      },
    ],
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
