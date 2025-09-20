import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Resizer } from "../Resizer";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface BlogPost {
  image: string;
  category: string;
  title: string;
  link: string;
}

interface RestaurantBlog1Props {
  subtitle?: string;
  title?: string;
  posts?: BlogPost[];
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
  cardDesign?: string;
  itemsPerRow?: number;
  showCategory?: boolean;
  showExcerpt?: boolean;
}

export function RestaurantBlog1({
  subtitle = "From our blog",
  title = "Recent articles",
  posts = [
    {
      image: "https://placehold.co/700x700/FFFFFF/333333?text=Blog+1",
      category: "Restaurant",
      title: "Never eat more than you can life.",
      link: "#"
    },
    {
      image: "https://placehold.co/700x700/FFFFFF/333333?text=Blog+2",
      category: "Restaurant",
      title: "Life is uncertain Eat dessert first.",
      link: "#"
    },
    {
      image: "https://placehold.co/700x700/FFFFFF/333333?text=Blog+3",
      category: "Restaurant",
      title: "Food simply isn't important to me.",
      link: "#"
    }
  ],
  backgroundColor = "#ffffff",
  textColor = "#333333",
  nonEditable = true,
  cardDesign = "default",
  itemsPerRow = 3,
  showCategory = true,
  showExcerpt = false,
}: RestaurantBlog1Props) {
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
      <Element id="restaurant-blog-section" is={Section}>
        <Box
          backgroundColor={backgroundColor}
          color={textColor}
          padding="py-16 px-4"
        >
          <Box width="100%" margin="mx-auto">
            {/* Header */}
            <Box display="flex" flexDirection="column" alignItems="center" margin="mb-16">
              <Element id="blog-subtitle" is={Text}>
                <Text
                  text={subtitle}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  color="text-red-600"
                  textTransform="uppercase"
                  margin="mb-4"
                />
              </Element>
              <Element id="blog-title" is={Text}>
                <Text
                  text={title}
                  tagName="h2"
                  fontSize="text-4xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                />
              </Element>
            </Box>

            {/* Blog Grid */}
            <Box
              display="grid"
              gap="gap-8"
            >
              {posts.map((post, index) => (
                <Element key={index} id={`blog-post-${index}`} is={Box}>
                  <Box
                    backgroundColor="bg-white"
                    borderRadius="rounded-lg"
                    className="group relative transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                  >
                    <Element id={`blog-post-image-${index}`} is={Image}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width="100%"
                        height="320px"
                        objectFit="object-cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </Element>
                    
                    <Box 
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      padding="p-8 lg:p-6"
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
                    >
                      <Box margin="mb-auto">
                        {showCategory && (
                          <Element id={`blog-post-category-${index}`} is={Button}>
                            <Button
                              text={post.category}
                              variant="secondary"
                              size="sm"
                              href={post.link}
                              className="bg-white text-gray-800 text-sm font-semibold uppercase px-4 py-2 rounded-full hover:bg-gray-100"
                            />
                          </Element>
                        )}
                      </Box>
                      
                      <Element id={`blog-post-title-${index}`} is={Text}>
                        <Text
                          text={post.title}
                          tagName="h3"
                          fontSize="text-2xl lg:text-xl"
                          fontWeight="font-bold"
                          color="text-white"
                          className="leading-tight w-3/5 xl:w-3/5 lg:w-4/5 md:w-3/5 hover:text-gray-200 transition-colors"
                        />
                      </Element>
                    </Box>
                  </Box>
                </Element>
              ))}
            </Box>
          </Box>
        </Box>
      </Element>
    </Resizer>
  );
}

RestaurantBlog1.craft = {
  displayName: "Restaurant Blog 1",
  props: {
    subtitle: "From our blog",
    title: "Recent articles",
    cardDesign: "default",
    itemsPerRow: 3,
    showCategory: true,
    showExcerpt: false,
    posts: [
      {
        image: "https://placehold.co/700x700/FFFFFF/333333?text=Blog+1",
        category: "Restaurant",
        title: "Never eat more than you can life.",
        link: "#"
      },
      {
        image: "https://placehold.co/700x700/FFFFFF/333333?text=Blog+2",
        category: "Restaurant",
        title: "Life is uncertain Eat dessert first.",
        link: "#"
      },
      {
        image: "https://placehold.co/700x700/FFFFFF/333333?text=Blog+3",
        category: "Restaurant",
        title: "Food simply isn't important to me.",
        link: "#"
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
