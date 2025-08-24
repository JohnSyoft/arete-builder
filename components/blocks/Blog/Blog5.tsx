import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface EcoPost {
  title: string
  excerpt: string
  readTime: string
  impact: string
  image: string
  imageAlt: string
}

interface Blog5Props extends SectionProps {
  badge?: string
  title?: string
  subtitle?: string
  posts?: EcoPost[]
}

export function Blog5({
  badge = "🌱 Sustainability Blog",
  title = "Green Living Tips",
  subtitle = "Discover eco-friendly practices for a sustainable lifestyle",
  posts = [
    {
      title: "Reduce Plastic Waste at Home",
      excerpt: "Simple steps to minimize plastic consumption and create a more sustainable household...",
      readTime: "2 min read",
      impact: "Impact: -50% plastic",
      image: "/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip 1",
      imageAlt: "Eco tip 1"
    },
    {
      title: "Energy-Efficient Home Solutions",
      excerpt: "Transform your home with sustainable energy practices that reduce costs and environmental impact...",
      readTime: "3 min read",
      impact: "Impact: -30% energy",
      image: "/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip 2",
      imageAlt: "Eco tip 2"
    },
    {
      title: "Sustainable Transportation",
      excerpt: "Explore green commuting options that reduce your carbon footprint while saving money...",
      readTime: "4 min read",
      impact: "Impact: -40% emissions",
      image: "/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip 3",
      imageAlt: "Eco tip 3"
    }
  ],
  backgroundColor = "linear-gradient(to bottom right, #f0fdf4, #ecfdf5)",
  ...props
}: Blog5Props) {
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
      <Element id="blog5Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <CraftText
                text={badge}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 overflow-hidden">
                  <CraftImage
                    src={post.image}
                    alt={post.imageAlt}
                    width="400"
                    height="200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      <CraftText
                        text="Eco-Tip"
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
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
                        text={post.impact}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                    <CraftButton
                      text="Learn More"
                      href="#"
                      variant="link"
                      size="default"
                      backgroundColor="transparent"
                      textColor="#16a34a"
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

Blog5.craft = {
  displayName: "Blog 5",
  props: {
    badge: "🌱 Sustainability Blog",
    title: "Green Living Tips",
    subtitle: "Discover eco-friendly practices for a sustainable lifestyle",
    posts: [
      {
        title: "Reduce Plastic Waste at Home",
        excerpt: "Simple steps to minimize plastic consumption and create a more sustainable household...",
        readTime: "2 min read",
        impact: "Impact: -50% plastic",
        image: "/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip 1",
        imageAlt: "Eco tip 1"
      },
      {
        title: "Energy-Efficient Home Solutions",
        excerpt: "Transform your home with sustainable energy practices that reduce costs and environmental impact...",
        readTime: "3 min read",
        impact: "Impact: -30% energy",
        image: "/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip 2",
        imageAlt: "Eco tip 2"
      },
      {
        title: "Sustainable Transportation",
        excerpt: "Explore green commuting options that reduce your carbon footprint while saving money...",
        readTime: "4 min read",
        impact: "Impact: -40% emissions",
        image: "/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip 3",
        imageAlt: "Eco tip 3"
      }
    ],
    backgroundColor: "linear-gradient(to bottom right, #f0fdf4, #ecfdf5)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
