import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

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
    <Element id="restaurant-dishes-container" is={Section} canvas>
      <Element
        id="restaurant-dishes-background"
        is={Box}
        backgroundColor={backgroundColor}
        width="100%"
        minHeight="400px"
        className="py-16 lg:py-12 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-red-600 uppercase mb-4 block">
              <span className="w-1 h-0.5 bg-red-600 inline-block align-middle mr-1"></span>
              <Element
                id="restaurant-dishes-subtitle"
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
              id="restaurant-dishes-title"
              is={Text}
              text={title}
              tagName="h2"
              fontSize="text-4xl"
              fontWeight="font-bold"
              color="text-gray-800"
            />
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {dishes.map((dish, index) => (
              <Element
                key={index}
                id={`restaurant-dish-card-${index}`}
                is={Box}
                backgroundColor="bg-white"
                borderRadius="rounded-lg"
                boxShadow="shadow-lg"
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Element
                    id={`restaurant-dish-image-${index}`}
                    is={Image}
                    src={dish.image}
                    alt={dish.name}
                    width="w-full"
                    height="h-48"
                    objectFit="object-cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                      <Element
                        id={`restaurant-dish-price-${index}`}
                        is={Text}
                        text={dish.price}
                        tagName="span"
                        fontSize="text-2xl"
                        fontWeight="font-bold"
                        color="text-red-600"
                        className="text-center px-4"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <Element
                    id={`restaurant-dish-name-${index}`}
                    is={Text}
                    text={dish.name}
                    tagName="h3"
                    fontSize="text-lg"
                    fontWeight="font-semibold"
                    color="text-gray-800"
                    margin="mb-3"
                  />
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    {dish.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="flex items-center">
                        <Element
                          id={`restaurant-dish-ingredient-${index}-${idx}`}
                          is={Text}
                          text={ingredient}
                          tagName="span"
                          fontSize="text-sm"
                          color="text-gray-600"
                        />
                        {idx < dish.ingredients.length - 1 && (
                          <span className="mx-2 text-gray-400">•</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Element>
            ))}
          </div>
        </div>
      </Element>
    </Element>
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
  isCanvas: true,
};
