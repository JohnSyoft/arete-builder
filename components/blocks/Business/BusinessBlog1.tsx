import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Calendar, User } from "lucide-react";

export const BusinessBlog1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const blogPosts = [
    {
      id: 1,
      title: "The best way to predict the secure future is to create it",
      category: "Business",
      date: "26 August 2023",
      image: "https://placehold.co/600x430",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Recognizing the need is the primary condition for design",
      category: "Marketing",
      date: "24 August 2023",
      image: "https://placehold.co/600x430",
      author: "Jane Smith"
    },
    {
      id: 3,
      title: "Make business easy with beautiful application store",
      category: "Design",
      date: "22 August 2023",
      image: "https://placehold.co/600x430",
      author: "Mike Johnson"
    },
    {
      id: 4,
      title: "Computers are to design as microwaves are to cooking",
      category: "Business",
      date: "20 August 2023",
      image: "https://placehold.co/600x430",
      author: "Sarah Wilson"
    }
  ];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Latest news
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Stay updated with the latest trends and business news
          </h2>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

BusinessBlog1.craft = {
  displayName: "Business Blog",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
