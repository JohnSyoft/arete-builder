import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
  imageUrl: string
  imageAlt: string
}

interface Blog1Props extends SectionProps {
  title?: string
  subtitle?: string
  posts?: BlogPost[]
}

export function Blog1({
  title = "Latest Articles",
  subtitle = "Stay updated with our latest insights and news",
  posts = [
    {
      title: "The Future of Web Development",
      excerpt: "Explore the latest trends and technologies shaping the future of web development...",
      category: "Technology",
      date: "March 15, 2024",
      imageUrl: "/placeholder.svg?height=200&width=400&query=blog post 1 featured image",
      imageAlt: "Blog post 1"
    },
    {
      title: "Design Systems at Scale",
      excerpt: "Learn how to build and maintain design systems for large-scale applications...",
      category: "Design",
      date: "March 12, 2024",
      imageUrl: "/placeholder.svg?height=200&width=400&query=blog post 2 featured image",
      imageAlt: "Blog post 2"
    },
    {
      title: "Performance Optimization Tips",
      excerpt: "Discover proven techniques to optimize your website's performance and user experience...",
      category: "Performance",
      date: "March 10, 2024",
      imageUrl: "/placeholder.svg?height=200&width=400&query=blog post 3 featured image",
      imageAlt: "Blog post 3"
    }
  ],
  backgroundColor = "#ffffff",
  ...props
}: Blog1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    padding: "py-16",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="blog1Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <CraftText
                text={title}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </h2>
            <p className="text-lg text-gray-600">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 overflow-hidden">
                  <CraftImage
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    width="400"
                    height="200"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    <CraftText
                      text={post.category}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <CraftText
                      text={post.title}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <CraftText
                      text={post.excerpt}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <CraftText
                        text={post.date}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                    <CraftButton
                      text="Read More"
                      href="#"
                      variant="link"
                      size="default"
                      backgroundColor="transparent"
                      textColor="#2563eb"
                      borderRadius=""
                      margin=""
                      padding=""
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Blog1.craft = {
  displayName: "Blog 1",
  props: {
    title: "Latest Articles",
    subtitle: "Stay updated with our latest insights and news",
    posts: [
      {
        title: "The Future of Web Development",
        excerpt: "Explore the latest trends and technologies shaping the future of web development...",
        category: "Technology",
        date: "March 15, 2024",
        imageUrl: "/placeholder.svg?height=200&width=400&query=blog post 1 featured image",
        imageAlt: "Blog post 1"
      },
      {
        title: "Design Systems at Scale",
        excerpt: "Learn how to build and maintain design systems for large-scale applications...",
        category: "Design",
        date: "March 12, 2024",
        imageUrl: "/placeholder.svg?height=200&width=400&query=blog post 2 featured image",
        imageAlt: "Blog post 2"
      },
      {
        title: "Performance Optimization Tips",
        excerpt: "Discover proven techniques to optimize your website's performance and user experience...",
        category: "Performance",
        date: "March 10, 2024",
        imageUrl: "/placeholder.svg?height=200&width=400&query=blog post 3 featured image",
        imageAlt: "Blog post 3"
      }
    ],
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
