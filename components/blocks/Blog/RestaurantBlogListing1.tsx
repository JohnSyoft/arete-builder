"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime?: string;
  featured?: boolean;
}

interface RestaurantBlogListing1Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  blogPosts?: BlogPost[];
  cardDesign?: string;
  itemsPerRow?: number;
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showCategory?: boolean;
  showReadTime?: boolean;
}

export function RestaurantBlogListing1(props: RestaurantBlogListing1Props = {}) {
  const {
    title = "Latest blog",
    subtitle = "Stories from restaurant",
    backgroundImage = "https://placehold.co/1920x400",
    cardDesign = "default",
    itemsPerRow = 3,
    showExcerpt = true,
    showAuthor = true,
    showDate = true,
    showCategory = true,
    showReadTime = true,
    blogPosts = [
      {
        id: "1",
        title: "A recipe has no soul. You, as the cook, must bring soul to the recipe",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x400",
        author: "Jackson",
        date: "26 November 2021",
        category: "Cooking",
        readTime: "5 min read",
        featured: true
      },
      {
        id: "2",
        title: "The secret to great cooking is being present",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x500",
        author: "Sarah",
        date: "24 November 2021",
        category: "Recipes",
        readTime: "3 min read"
      },
      {
        id: "3",
        title: "Cooking is like love. It should be entered into with abandon",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x400",
        author: "Michael",
        date: "22 November 2021",
        category: "Tips",
        readTime: "4 min read"
      },
      {
        id: "4",
        title: "The discovery of a new dish does more for human happiness",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x500",
        author: "Emma",
        date: "20 November 2021",
        category: "Innovation",
        readTime: "6 min read"
      },
      {
        id: "5",
        title: "Good food is the foundation of genuine happiness",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x400",
        author: "David",
        date: "18 November 2021",
        category: "Philosophy",
        readTime: "7 min read"
      },
      {
        id: "6",
        title: "Cooking is an art, but all art requires knowing something",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x500",
        author: "Lisa",
        date: "16 November 2021",
        category: "Education",
        readTime: "5 min read"
      }
    ]
  } = props;
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="restaurant-blog-listing" is={Section} canvas>
      {/* Page Title Section */}
      <Element id="blog-title-section" is={Section}>
        <Box
          backgroundImage={backgroundImage}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="py-20 px-0"
          minHeight="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%" padding="px-4">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Element id="blog-title" is={Text}>
                <Text
                  text={title}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  textTransform="uppercase"
                  margin="mb-4"
                />
              </Element>
              <Element id="blog-subtitle" is={Text}>
                <Text
                  text={subtitle}
                  tagName="h2"
                  fontSize="text-xl md:text-2xl"
                  fontWeight="font-semibold"
                  color="text-red-600"
                  textTransform="uppercase"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Blog Grid Section */}
      <Element id="blog-grid-section" is={Section}>
        <Box padding="py-16 px-4">
          <Box width="100%" margin="mx-auto">
            <Box
              display="grid"
              gap="gap-6"
            >
              {blogPosts.map((post, index) => (
                <Element key={post.id} id={`blog-post-${post.id}`} is={Box}>
                  <Box
                    backgroundColor="bg-white"
                    borderRadius="rounded-lg"
                  >
                    <Element id={`blog-post-image-${post.id}`} is={Image}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width="100%"
                        height="250px"
                        objectFit="object-cover"
                        borderRadius="rounded-t-lg"
                      />
                    </Element>
                    
                    <Box padding="p-6">
                      {showCategory && (
                        <Element id={`blog-post-category-${post.id}`} is={Text}>
                          <Text
                            text={post.category}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-semibold"
                            color="text-red-600"
                            textTransform="uppercase"
                            margin="mb-2"
                          />
                        </Element>
                      )}
                      
                      <Element id={`blog-post-title-${post.id}`} is={Text}>
                        <Text
                          text={post.title}
                          tagName="h3"
                          fontSize="text-lg"
                          fontWeight="font-bold"
                          color="text-gray-800"
                          margin="mb-3"
                        />
                      </Element>
                      
                      {showExcerpt && (
                        <Element id={`blog-post-excerpt-${post.id}`} is={Text}>
                          <Text
                            text={post.excerpt}
                            tagName="p"
                            fontSize="text-sm"
                            color="text-gray-600"
                            margin="mb-4"
                          />
                        </Element>
                      )}
                      
                      <Box display="flex" alignItems="center" justifyContent="between">
                        <Element id={`blog-post-button-${post.id}`} is={Button}>
                          <Button
                            text="Read more"
                            variant="outline"
                            size="sm"
                            href="#"
                          />
                        </Element>
                        
                        {showReadTime && post.readTime && (
                          <Element id={`blog-post-readtime-${post.id}`} is={Text}>
                            <Text
                              text={post.readTime}
                              tagName="span"
                              fontSize="text-xs"
                              color="text-gray-500"
                            />
                          </Element>
                        )}
                      </Box>
                      
                      {showAuthor && showDate && (
                        <Element id={`blog-post-meta-${post.id}`} is={Text}>
                          <Text
                            text={`By ${post.author} on ${post.date}`}
                            tagName="p"
                            fontSize="text-xs"
                            color="text-gray-500"
                            margin="mt-3"
                          />
                        </Element>
                      )}
                    </Box>
                  </Box>
                </Element>
              ))}
            </Box>
          </Box>
        </Box>
      </Element>
    </Element>
  );
}

RestaurantBlogListing1.craft = {
  displayName: "Restaurant Blog Listing 1",
  props: {
    title: "Latest blog",
    subtitle: "Stories from restaurant",
    backgroundImage: "https://placehold.co/1920x400",
    cardDesign: "default",
    itemsPerRow: 3,
    showExcerpt: true,
    showAuthor: true,
    showDate: true,
    showCategory: true,
    showReadTime: true,
    blogPosts: [
      {
        id: "1",
        title: "A recipe has no soul. You, as the cook, must bring soul to the recipe",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam.",
        image: "https://placehold.co/600x400",
        author: "Jackson",
        date: "26 November 2021",
        category: "Cooking",
        readTime: "5 min read",
        featured: true
      }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
