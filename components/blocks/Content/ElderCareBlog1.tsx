import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

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
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <div className="mb-6 sm:mb-0">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                {badge}
              </span>
              <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            </div>
            
            <a
              href={buttonLink}
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors group"
            >
              <span className="mr-2">{buttonText}</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white text-gray-800 text-xs font-bold uppercase rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <a
                    href={item.link}
                    className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors block mb-3"
                  >
                    {item.title}
                  </a>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Author and Meta */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex-1">
                      <span className="text-gray-600 font-bold">{item.date}</span>
                      <div className="text-gray-600">
                        By{" "}
                        <a
                          href="#"
                          className="text-gray-800 hover:text-blue-600 underline"
                        >
                          {item.author}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <a href={item.link} className="text-red-500 hover:text-red-600">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                      <span className="text-gray-600 font-bold ml-1">{item.likes}</span>
                    </div>
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
};
