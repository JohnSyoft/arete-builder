"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";

interface BlogPost {
  title: string;
  author: string;
  category: string;
  date: string;
  featuredImage: string;
  content: string;
  tags?: string[];
  readTime?: string;
  socialShare?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    pinterest?: string;
  };
}

interface RelatedPost {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
}

interface RestaurantBlogSingle1Props {
  backgroundImage?: string;
  blogPost?: BlogPost;
  relatedPosts?: RelatedPost[];
}

export function RestaurantBlogSingle1(props: RestaurantBlogSingle1Props = {}) {
  const {
    backgroundImage = "https://placehold.co/1920x400",
    blogPost = {
      title: "A recipe has no soul. You, as the cook, must bring soul to the recipe",
      author: "Jackson",
      category: "Cooking",
      date: "26 November 2021",
      featuredImage: "https://placehold.co/1370x830",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      tags: ["Cooking", "Recipes", "Chef Tips", "Food Philosophy"],
      readTime: "5 min read",
      socialShare: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        pinterest: "#"
      }
    },
    relatedPosts = [
      {
        id: "1",
        title: "The secret to great cooking is being present",
        image: "https://placehold.co/400x300",
        date: "24 November 2021",
        category: "Recipes"
      },
      {
        id: "2",
        title: "Cooking is like love. It should be entered into with abandon",
        image: "https://placehold.co/400x300",
        date: "22 November 2021",
        category: "Tips"
      },
      {
        id: "3",
        title: "The discovery of a new dish does more for human happiness",
        image: "https://placehold.co/400x300",
        date: "20 November 2021",
        category: "Innovation"
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
    <Element id="restaurant-blog-single" is={Section} canvas>
      {/* Hero Section */}
      <Element id="blog-single-hero" is={Section}>
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
              <Element id="blog-single-meta" is={Text}>
                <Text
                  text={`By ${blogPost.author} in ${blogPost.category} on ${blogPost.date}`}
                  tagName="span"
                  fontSize="text-lg"
                  color="text-gray-600"
                  margin="mb-5"
                />
              </Element>
              <Element id="blog-single-title" is={Text}>
                <Text
                  text={blogPost.title}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl"
                  fontWeight="font-normal"
                  color="text-gray-800"
                />
              </Element>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Featured Image Section */}
      <Element id="blog-single-featured-image" is={Section}>
        <Box padding="py-0 px-4">
          <Box width="100%" margin="mx-auto">
            <Element id="blog-featured-image" is={Image}>
              <Image
                src={blogPost.featuredImage}
                alt={blogPost.title}
                width="100%"
                height="500px"
                objectFit="object-cover"
                borderRadius="rounded-lg"
              />
            </Element>
          </Box>
        </Box>
      </Element>

      {/* Content Section */}
      <Element id="blog-single-content" is={Section}>
        <Box padding="py-16 px-4">
          <Box width="100%" margin="mx-auto">
            <Box display="flex" flexDirection="column" gap="gap-8">
              {/* Meta and Share */}
              <Box display="flex" alignItems="center" justifyContent="between">
                <Box display="flex" alignItems="center" gap="gap-4">
                  <Element id="blog-read-time" is={Text}>
                    <Text
                      text={blogPost.readTime || ""}
                      tagName="span"
                      fontSize="text-sm"
                      color="text-gray-600"
                    />
                  </Element>
                  <Element id="blog-publish-date" is={Text}>
                    <Text
                      text={blogPost.date}
                      tagName="span"
                      fontSize="text-sm"
                      color="text-gray-600"
                    />
                  </Element>
                </Box>
                
                <Box display="flex" alignItems="center" gap="gap-2">
                  <Element id="blog-share-label" is={Text}>
                    <Text
                      text="Share:"
                      tagName="span"
                      fontSize="text-sm"
                      color="text-gray-600"
                    />
                  </Element>
                  {blogPost.socialShare?.facebook && (
                    <Element id="blog-share-facebook" is={Button}>
                      <Button
                        text=""
                        variant="outline"
                        size="sm"
                        href={blogPost.socialShare.facebook}
                      />
                    </Element>
                  )}
                  {blogPost.socialShare?.twitter && (
                    <Element id="blog-share-twitter" is={Button}>
                      <Button
                        text=""
                        variant="outline"
                        size="sm"
                        href={blogPost.socialShare.twitter}
                      />
                    </Element>
                  )}
                  {blogPost.socialShare?.linkedin && (
                    <Element id="blog-share-linkedin" is={Button}>
                      <Button
                        text=""
                        variant="outline"
                        size="sm"
                        href={blogPost.socialShare.linkedin}
                      />
                    </Element>
                  )}
                  {blogPost.socialShare?.pinterest && (
                    <Element id="blog-share-pinterest" is={Button}>
                      <Button
                        text=""
                        variant="outline"
                        size="sm"
                        href={blogPost.socialShare.pinterest}
                      />
                    </Element>
                  )}
                </Box>
              </Box>
              
              {/* Blog Content */}
              <Box>
                {blogPost.content.split('\n\n').map((paragraph, index) => (
                  <Element key={index} id={`blog-paragraph-${index}`} is={Text}>
                    <Text
                      text={paragraph}
                      tagName="p"
                      fontSize="text-base"
                      color="text-gray-700"
                      margin="mb-5"
                      lineHeight="leading-relaxed"
                    />
                  </Element>
                ))}
              </Box>

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <Box>
                  <Element id="blog-tags-title" is={Text}>
                    <Text
                      text="Tags:"
                      tagName="h6"
                      fontSize="text-sm"
                      fontWeight="font-semibold"
                      color="text-gray-800"
                      margin="mb-4"
                    />
                  </Element>
                  <Box display="flex" gap="gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <Element key={index} id={`blog-tag-${index}`} is={Button}>
                        <Button
                          text={tag}
                          variant="outline"
                          size="sm"
                          href="#"
                        />
                      </Element>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Element>

      {/* Related Posts Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <Element id="blog-related-posts" is={Section}>
          <Box padding="py-16 px-4">
            <Box width="100%" margin="mx-auto">
              <Element id="related-posts-title" is={Text}>
                <Text
                  text="Related Posts"
                  tagName="h4"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-800"
                  margin="mb-8"
                />
              </Element>
              
              <Box
                display="grid"
                gap="gap-6"
              >
                {relatedPosts.map((post) => (
                  <Element key={post.id} id={`related-post-${post.id}`} is={Box}>
                    <Box
                      backgroundColor="bg-white"
                      borderRadius="rounded-lg"
                    >
                      <Element id={`related-post-image-${post.id}`} is={Image}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width="100%"
                          height="200px"
                          objectFit="object-cover"
                          borderRadius="rounded-t-lg"
                        />
                      </Element>
                      
                      <Box padding="p-6">
                        <Element id={`related-post-meta-${post.id}`} is={Text}>
                          <Text
                            text={`${post.date} • ${post.category}`}
                            tagName="span"
                            fontSize="text-xs"
                            color="text-gray-500"
                            margin="mb-2"
                          />
                        </Element>
                        <Element id={`related-post-title-${post.id}`} is={Text}>
                          <Text
                            text={post.title}
                            tagName="h5"
                            fontSize="text-lg"
                            fontWeight="font-semibold"
                            color="text-gray-800"
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
      )}
    </Element>
  );
}

RestaurantBlogSingle1.craft = {
  displayName: "Restaurant Blog Single 1",
  props: {
    backgroundImage: "https://placehold.co/1920x400",
    blogPost: {
      title: "A recipe has no soul. You, as the cook, must bring soul to the recipe",
      author: "Jackson",
      category: "Cooking",
      date: "26 November 2021",
      featuredImage: "https://placehold.co/1370x830",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Cooking", "Recipes", "Chef Tips", "Food Philosophy"],
      readTime: "5 min read"
    },
    relatedPosts: [
      {
        id: "1",
        title: "The secret to great cooking is being present",
        image: "https://placehold.co/400x300",
        date: "24 November 2021",
        category: "Recipes"
      }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
