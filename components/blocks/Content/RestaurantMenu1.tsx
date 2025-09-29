import React, { useState } from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface MenuItem {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

interface RestaurantMenu1Props {
  subtitle?: string;
  title?: string;
  categories?: MenuCategory[];
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantMenu1({
  subtitle = "Choose delicious",
  title = "Popular menu",
  categories = [
    {
      id: "starters",
      name: "Starters",
      icon: "🥢",
      items: [
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Boiled organic egg",
          description: "Lorem ipsum has been the industry.",
          price: "$12.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Chicken breast burger",
          description: "Lorem ipsum has been the industry.",
          price: "$10.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Medium spicy chips",
          description: "Lorem ipsum has been the industry.",
          price: "$08.00"
        }
      ]
    },
    {
      id: "nonveg",
      name: "Nonveg",
      icon: "🍖",
      items: [
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Grilled chicken",
          description: "Lorem ipsum has been the industry.",
          price: "$15.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Beef steak",
          description: "Lorem ipsum has been the industry.",
          price: "$18.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Fish curry",
          description: "Lorem ipsum has been the industry.",
          price: "$14.00"
        }
      ]
    },
    {
      id: "vegetarian",
      name: "Vegetarian",
      icon: "🥗",
      items: [
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Veggie burger",
          description: "Lorem ipsum has been the industry.",
          price: "$9.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Pasta primavera",
          description: "Lorem ipsum has been the industry.",
          price: "$11.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Caesar salad",
          description: "Lorem ipsum has been the industry.",
          price: "$8.00"
        }
      ]
    },
    {
      id: "dessert",
      name: "Dessert",
      icon: "🧁",
      items: [
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Chocolate cake",
          description: "Lorem ipsum has been the industry.",
          price: "$6.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Ice cream",
          description: "Lorem ipsum has been the industry.",
          price: "$4.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Tiramisu",
          description: "Lorem ipsum has been the industry.",
          price: "$7.00"
        }
      ]
    },
    {
      id: "drinks",
      name: "Drinks",
      icon: "🍺",
      items: [
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Fresh juice",
          description: "Lorem ipsum has been the industry.",
          price: "$3.00"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Coffee",
          description: "Lorem ipsum has been the industry.",
          price: "$2.50"
        },
        {
          image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
          name: "Wine",
          description: "Lorem ipsum has been the industry.",
          price: "$12.00"
        }
      ]
    }
  ],
  backgroundImage = "https://placehold.co/1920x1151/FFFFFF/333333?text=Menu+Background",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantMenu1Props) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id || "");
  
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0];

  return (
    <Element id="restaurant-menu-container" is={Section} canvas>
      <Element
        id="restaurant-menu-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16 lg:py-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-red-600 uppercase mb-4 block">
              <span className="w-1 h-0.5 bg-red-600 inline-block align-middle mr-1"></span>
              <Element
                id="restaurant-menu-subtitle"
                is={Text}
                text={subtitle}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-red-600"
                textTransform="uppercase"
              />
              <span className="w-1 h-0.5 bg-red-600 inline-block align-middle ml-1"></span>
            </div>
            <Element
              id="restaurant-menu-title"
              is={Text}
              text={title}
              tagName="h2"
              fontSize="text-4xl"
              fontWeight="font-bold"
              color="text-gray-800"
            />
          </div>

          {/* Tab Navigation */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Element
                  key={category.id}
                  id={`restaurant-menu-tab-${category.id}`}
                  is={Button}
                  text=""
                  variant={activeTab === category.id ? "default" : "outline"}
                  backgroundColor={activeTab === category.id ? "bg-red-600" : "bg-gray-100"}
                  textColor={activeTab === category.id ? "text-white" : "text-gray-700"}
                  borderRadius="rounded-lg"
                  padding="p-4"
                  className="flex flex-col items-center transition-all duration-300 hover:bg-gray-200"
                  onClick={() => setActiveTab(category.id)}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <Element
                    id={`restaurant-menu-tab-name-${category.id}`}
                    is={Text}
                    text={category.name}
                    tagName="span"
                    fontSize="text-sm"
                    fontWeight="font-medium"
                  />
                </Element>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {activeCategory?.items.slice(0, Math.ceil(activeCategory.items.length / 2)).map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Element
                      id={`restaurant-menu-item-image-left-${index}`}
                      is={Image}
                      src={item.image}
                      alt={item.name}
                      width="w-20"
                      height="h-20"
                      borderRadius="rounded-full"
                      objectFit="object-cover"
                      className="flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <Element
                          id={`restaurant-menu-item-name-left-${index}`}
                          is={Text}
                          text={item.name}
                          tagName="span"
                          fontSize="text-lg"
                          fontWeight="font-semibold"
                          color="text-gray-800"
                        />
                        <Element
                          id={`restaurant-menu-item-price-left-${index}`}
                          is={Text}
                          text={item.price}
                          tagName="span"
                          fontSize="text-lg"
                          fontWeight="font-semibold"
                          color="text-gray-800"
                        />
                      </div>
                      <div className="w-full h-px bg-gray-300 my-2"></div>
                      <Element
                        id={`restaurant-menu-item-description-left-${index}`}
                        is={Text}
                        text={item.description}
                        tagName="p"
                        fontSize="text-sm"
                        color="text-gray-600"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {activeCategory?.items.slice(Math.ceil(activeCategory.items.length / 2)).map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Element
                      id={`restaurant-menu-item-image-right-${index}`}
                      is={Image}
                      src={item.image}
                      alt={item.name}
                      width="w-20"
                      height="h-20"
                      borderRadius="rounded-full"
                      objectFit="object-cover"
                      className="flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <Element
                          id={`restaurant-menu-item-name-right-${index}`}
                          is={Text}
                          text={item.name}
                          tagName="span"
                          fontSize="text-lg"
                          fontWeight="font-semibold"
                          color="text-gray-800"
                        />
                        <Element
                          id={`restaurant-menu-item-price-right-${index}`}
                          is={Text}
                          text={item.price}
                          tagName="span"
                          fontSize="text-lg"
                          fontWeight="font-semibold"
                          color="text-gray-800"
                        />
                      </div>
                      <div className="w-full h-px bg-gray-300 my-2"></div>
                      <Element
                        id={`restaurant-menu-item-description-right-${index}`}
                        is={Text}
                        text={item.description}
                        tagName="p"
                        fontSize="text-sm"
                        color="text-gray-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2">
              <Element
                id="restaurant-menu-badge"
                is={Text}
                text="Masterchef"
                tagName="div"
                fontSize="text-sm"
                fontWeight="font-medium"
                color="text-white"
                backgroundColor="bg-red-600"
                padding="px-4 py-2"
                borderRadius="rounded-full"
              />
              <div className="text-lg font-medium text-gray-800">
                <Element
                  id="restaurant-menu-bottom-text"
                  is={Text}
                  text="Unique and delicious dishes from the worlds best masterchefs."
                  tagName="div"
                  fontSize="text-lg"
                  fontWeight="font-medium"
                  color="text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
}

RestaurantMenu1.craft = {
  displayName: "Restaurant Menu 1",
  props: {
    subtitle: "Choose delicious",
    title: "Popular menu",
    categories: [
      {
        id: "starters",
        name: "Starters",
        icon: "🥢",
        items: [
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Boiled organic egg",
            description: "Lorem ipsum has been the industry.",
            price: "$12.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Chicken breast burger",
            description: "Lorem ipsum has been the industry.",
            price: "$10.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Medium spicy chips",
            description: "Lorem ipsum has been the industry.",
            price: "$08.00"
          }
        ]
      },
      {
        id: "nonveg",
        name: "Nonveg",
        icon: "🍖",
        items: [
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Grilled chicken",
            description: "Lorem ipsum has been the industry.",
            price: "$15.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Beef steak",
            description: "Lorem ipsum has been the industry.",
            price: "$18.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Fish curry",
            description: "Lorem ipsum has been the industry.",
            price: "$14.00"
          }
        ]
      },
      {
        id: "vegetarian",
        name: "Vegetarian",
        icon: "🥗",
        items: [
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Veggie burger",
            description: "Lorem ipsum has been the industry.",
            price: "$9.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Pasta primavera",
            description: "Lorem ipsum has been the industry.",
            price: "$11.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Caesar salad",
            description: "Lorem ipsum has been the industry.",
            price: "$8.00"
          }
        ]
      },
      {
        id: "dessert",
        name: "Dessert",
        icon: "🧁",
        items: [
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Chocolate cake",
            description: "Lorem ipsum has been the industry.",
            price: "$6.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Ice cream",
            description: "Lorem ipsum has been the industry.",
            price: "$4.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Tiramisu",
            description: "Lorem ipsum has been the industry.",
            price: "$7.00"
          }
        ]
      },
      {
        id: "drinks",
        name: "Drinks",
        icon: "🍺",
        items: [
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Fresh juice",
            description: "Lorem ipsum has been the industry.",
            price: "$3.00"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Coffee",
            description: "Lorem ipsum has been the industry.",
            price: "$2.50"
          },
          {
            image: "https://placehold.co/105x105/FFFFFF/333333?text=Food",
            name: "Wine",
            description: "Lorem ipsum has been the industry.",
            price: "$12.00"
          }
        ]
      }
    ],
    backgroundImage: "https://placehold.co/1920x1151/FFFFFF/333333?text=Menu+Background",
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
