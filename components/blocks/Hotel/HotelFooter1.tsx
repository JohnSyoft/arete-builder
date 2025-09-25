import React from "react";
import { useNode } from "@craftjs/core";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export const HotelFooter1 = () => {
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
      className={`relative bg-gray-900 text-white py-16 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Luxury Resort</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience unparalleled luxury and comfort at our five-star resort. 
              We provide exceptional service and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Rooms & Suites</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Dining</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Spa & Wellness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Events</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Room Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Concierge</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Airport Transfer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Valet Parking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Business Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">123 Resort Avenue</p>
                  <p className="text-gray-300">Paradise Island, FL 33101</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-gray-300">info@luxuryresort.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Luxury Resort. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};