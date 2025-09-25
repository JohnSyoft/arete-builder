import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Award, Smartphone, Volume2, Users } from "lucide-react";

export const EbookAbout1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative py-20 bg-gray-50 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Author of the year
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            About The Book
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">10+ award achieved</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply printing typesetting.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Read on any device</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply printing typesetting.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Volume2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Audio included</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply printing typesetting.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">One million readers</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply printing typesetting.
            </p>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="https://placehold.co/100x100" 
              alt="Book" 
              className="w-20 h-20 rounded-lg"
            />
            <p className="text-2xl text-gray-700 italic">
              I read a book one day and <span className="font-semibold underline">my whole life was changed.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-yellow-500 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-4xl font-bold">4.98</div>
                <div>
                  <div className="flex text-yellow-200 mb-2">
                    <span>★★★★★</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold underline">2,488</span> based rating
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-4xl font-bold">98<sup className="text-2xl">%</sup></div>
                <div>
                  <div className="text-sm">
                    Genuine repeated <br />
                    <span className="font-semibold underline">happy readers.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-4xl font-bold">200<sup className="text-2xl">+</sup></div>
                <div>
                  <div className="text-sm">
                    Currently <span className="font-semibold underline">selling</span> <br />books per day.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EbookAbout1.craft = {
  displayName: "Ebook About",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};