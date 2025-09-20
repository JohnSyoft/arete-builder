import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

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
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: backgroundColor,
        color: textColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      minWidth={300}
      minHeight={400}
    >
      <section
        ref={(ref) => connect(drag(ref))}
        className="py-16 lg:py-12"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-red-600 uppercase mb-4 block">
              <span className="w-1 h-0.5 bg-red-600 inline-block align-middle mr-1"></span>
              {subtitle}
              <span className="w-1 h-0.5 bg-red-600 inline-block align-middle ml-1"></span>
            </span>
            <h2 className="text-4xl font-bold text-gray-800">
              {title}
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                    activeTab === category.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-2xl mb-2">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
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
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </span>
                        <span className="text-lg font-semibold text-gray-800">
                          {item.price}
                        </span>
                      </div>
                      <div className="w-full h-px bg-gray-300 my-2"></div>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {activeCategory?.items.slice(Math.ceil(activeCategory.items.length / 2)).map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </span>
                        <span className="text-lg font-semibold text-gray-800">
                          {item.price}
                        </span>
                      </div>
                      <div className="w-full h-px bg-gray-300 my-2"></div>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Masterchef
              </div>
              <div className="text-lg font-medium text-gray-800">
                Unique and delicious dishes from the worlds{" "}
                <span className="underline decoration-2 underline-offset-4 font-semibold">
                  best masterchefs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Resizer>
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
};
