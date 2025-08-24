import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface BlogPost {
  title: string
  excerpt: string
  category: string
  author: string
  authorImage: string
  readTime: string
  image: string
  imageAlt: string
}

interface PopularPost {
  title: string
  date: string
  image: string
  imageAlt: string
}

interface Blog4Props extends SectionProps {
  mainPosts?: BlogPost[]
  popularPosts?: PopularPost[]
}

export function Blog4({
  mainPosts = [
    {
      title: "Scaling Your Startup in 2024",
      excerpt: "Essential strategies for growing your startup, from product-market fit to scaling operations and building a strong team...",
      category: "Business",
      author: "Alex Chen",
      authorImage: "/placeholder.svg?height=32&width=32",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300&query=blog post 1 thumbnail",
      imageAlt: "Post 1"
    },
    {
      title: "The Future of Remote Work",
      excerpt: "How distributed teams are reshaping the workplace and what tools and practices enable successful remote collaboration...",
      category: "Technology",
      author: "Sarah Kim",
      authorImage: "/placeholder.svg?height=32&width=32",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300&query=blog post 2 thumbnail",
      imageAlt: "Post 2"
    },
    {
      title: "AI-Powered Development Tools",
      excerpt: "Discover how artificial intelligence is transforming software development with smarter code completion and automation...",
      category: "AI",
      author: "Mike Johnson",
      authorImage: "/placeholder.svg?height=32&width=32",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300&query=blog post 3 thumbnail",
      imageAlt: "Post 3"
    }
  ],
  popularPosts = [
    {
      title: "Getting Started with AI",
      date: "March 1, 2024",
      image: "/placeholder.svg?height=60&width=60&query=popular post 1",
      imageAlt: "Popular 1"
    },
    {
      title: "Building Better APIs",
      date: "March 2, 2024",
      image: "/placeholder.svg?height=60&width=60&query=popular post 2",
      imageAlt: "Popular 2"
    },
    {
      title: "DevOps Best Practices",
      date: "March 3, 2024",
      image: "/placeholder.svg?height=60&width=60&query=popular post 3",
      imageAlt: "Popular 3"
    },
    {
      title: "Modern React Patterns",
      date: "March 4, 2024",
      image: "/placeholder.svg?height=60&width=60&query=popular post 4",
      imageAlt: "Popular 4"
    }
  ],
  backgroundColor = "#ffffff",
  ...props
}: Blog4Props) {
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
      <Element id="blog4Content" is="div" canvas>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {mainPosts.map((post, index) => (
                  <article key={index} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 last:border-b-0">
                    <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden">
                      <CraftImage
                        src={post.image}
                        alt={post.imageAlt}
                        width="300"
                        height="200"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-green-600 font-medium mb-2">
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
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
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
                            <CraftImage
                              src={post.authorImage}
                              alt={`${post.author} profile`}
                              width="32"
                              height="32"
                            />
                          </div>
                          <span className="text-sm text-gray-700">
                            <CraftText
                              text={post.author}
                              tagName="span"
                              fontSize=""
                              fontWeight=""
                              color=""
                              margin=""
                              padding=""
                            />
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          <CraftText
                            text={post.readTime}
                            tagName="span"
                            fontSize=""
                            fontWeight=""
                            color=""
                            margin=""
                            padding=""
                          />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">
                  <CraftText
                    text="Popular Posts"
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </h4>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-12 h-12 rounded overflow-hidden">
                        <CraftImage
                          src={post.image}
                          alt={post.imageAlt}
                          width="60"
                          height="60"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-1">
                          <CraftText
                            text={post.title}
                            tagName="span"
                            fontSize=""
                            fontWeight=""
                            color=""
                            margin=""
                            padding=""
                          />
                        </h5>
                        <p className="text-xs text-gray-500">
                          <CraftText
                            text={post.date}
                            tagName="span"
                            fontSize=""
                            fontWeight=""
                            color=""
                            margin=""
                            padding=""
                          />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Blog4.craft = {
  displayName: "Blog 4",
  props: {
    mainPosts: [
      {
        title: "Scaling Your Startup in 2024",
        excerpt: "Essential strategies for growing your startup, from product-market fit to scaling operations and building a strong team...",
        category: "Business",
        author: "Alex Chen",
        authorImage: "/placeholder.svg?height=32&width=32",
        readTime: "8 min read",
        image: "/placeholder.svg?height=200&width=300&query=blog post 1 thumbnail",
        imageAlt: "Post 1"
      },
      {
        title: "The Future of Remote Work",
        excerpt: "How distributed teams are reshaping the workplace and what tools and practices enable successful remote collaboration...",
        category: "Technology",
        author: "Sarah Kim",
        authorImage: "/placeholder.svg?height=32&width=32",
        readTime: "6 min read",
        image: "/placeholder.svg?height=200&width=300&query=blog post 2 thumbnail",
        imageAlt: "Post 2"
      },
      {
        title: "AI-Powered Development Tools",
        excerpt: "Discover how artificial intelligence is transforming software development with smarter code completion and automation...",
        category: "AI",
        author: "Mike Johnson",
        authorImage: "/placeholder.svg?height=32&width=32",
        readTime: "10 min read",
        image: "/placeholder.svg?height=200&width=300&query=blog post 3 thumbnail",
        imageAlt: "Post 3"
      }
    ],
    popularPosts: [
      {
        title: "Getting Started with AI",
        date: "March 1, 2024",
        image: "/placeholder.svg?height=60&width=60&query=popular post 1",
        imageAlt: "Popular 1"
      },
      {
        title: "Building Better APIs",
        date: "March 2, 2024",
        image: "/placeholder.svg?height=60&width=60&query=popular post 2",
        imageAlt: "Popular 2"
      },
      {
        title: "DevOps Best Practices",
        date: "March 3, 2024",
        image: "/placeholder.svg?height=60&width=60&query=popular post 3",
        imageAlt: "Popular 3"
      },
      {
        title: "Modern React Patterns",
        date: "March 4, 2024",
        image: "/placeholder.svg?height=60&width=60&query=popular post 4",
        imageAlt: "Popular 4"
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
