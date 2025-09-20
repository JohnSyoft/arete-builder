import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface Dish {
  image: string;
  name: string;
  ingredients: string[];
  price: string;
}

interface RestaurantDishes1Props {
  subtitle?: string;
  title?: string;
  dishes?: Dish[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantDishes1({
  subtitle = "Specials choice",
  title = "Popular dishes",
  dishes = [
    {
      image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+1",
      name: "Chicken breast burger",
      ingredients: ["Capsicum", "Parmesan", "Paneer"],
      price: "Just $35.00"
    },
    {
      image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+2",
      name: "Chicken breast burger",
      ingredients: ["Tomatoes", "Parmesan", "Basil"],
      price: "Just $35.00"
    },
    {
      image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+3",
      name: "Medium spicy chips",
      ingredients: ["Cheese", "Capsicum", "Basil"],
      price: "Just $35.00"
    },
    {
      image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+4",
      name: "Appeteaser blatter",
      ingredients: ["Cucumber", "Mushroom", "Basil"],
      price: "Just $35.00"
    },
    {
      image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+5",
      name: "Appeteaser blatter",
      ingredients: ["Mushroom", "Parmesan", "Paneer"],
      price: "Just $35.00"
    }
  ],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantDishes1Props) {
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
      <section
        ref={(ref) => connect(drag(ref))}
        className="py-16 lg:py-12 relative overflow-hidden"
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

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                      <span className="text-red-600 text-2xl font-bold text-center px-4">
                        {dish.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {dish.name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    {dish.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="flex items-center">
                        {ingredient}
                        {idx < dish.ingredients.length - 1 && (
                          <span className="mx-2 text-gray-400">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Resizer>
  );
}

RestaurantDishes1.craft = {
  displayName: "Restaurant Dishes 1",
  props: {
    subtitle: "Specials choice",
    title: "Popular dishes",
    dishes: [
      {
        image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+1",
        name: "Chicken breast burger",
        ingredients: ["Capsicum", "Parmesan", "Paneer"],
        price: "Just $35.00"
      },
      {
        image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+2",
        name: "Chicken breast burger",
        ingredients: ["Tomatoes", "Parmesan", "Basil"],
        price: "Just $35.00"
      },
      {
        image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+3",
        name: "Medium spicy chips",
        ingredients: ["Cheese", "Capsicum", "Basil"],
        price: "Just $35.00"
      },
      {
        image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+4",
        name: "Appeteaser blatter",
        ingredients: ["Cucumber", "Mushroom", "Basil"],
        price: "Just $35.00"
      },
      {
        image: "https://placehold.co/800x605/FFFFFF/333333?text=Dish+5",
        name: "Appeteaser blatter",
        ingredients: ["Mushroom", "Parmesan", "Paneer"],
        price: "Just $35.00"
      }
    ],
    backgroundColor: "#ffffff",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
