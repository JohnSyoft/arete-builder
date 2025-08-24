import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface Blog2Props extends SectionProps {
  title?: string
  excerpt?: string
  category?: string
  readTime?: string
  authorName?: string
  authorTitle?: string
  authorImage?: string
  featuredImage?: string
  featuredImageAlt?: string
}

export function Blog2({
  title = "Building Scalable Applications with Modern Architecture",
  excerpt = "Learn how to design and implement scalable applications using microservices, containerization, and cloud-native technologies.",
  category = "Featured",
  readTime = "5 min read",
  authorName = "Sarah Johnson",
  authorTitle = "Senior Developer",
  authorImage = "/placeholder.svg?height=40&width=40",
  featuredImage = "/placeholder.svg?height=300&width=800",
  featuredImageAlt = "Featured post",
  backgroundColor = "#f9fafb",
  ...props
}: Blog2Props) {
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
      <Element id="blog2Content" is="div" canvas>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 overflow-hidden">
              <CraftImage
                src={featuredImage}
                alt={featuredImageAlt}
                width="800"
                height="300"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  <CraftText
                    text={category}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
                <span className="text-gray-500 text-sm ml-4">
                  <CraftText
                    text={readTime}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                <CraftText
                  text={title}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                <CraftText
                  text={excerpt}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                  <CraftImage
                    src={authorImage}
                    alt={`${authorName} profile`}
                    width="40"
                    height="40"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    <CraftText
                      text={authorName}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    <CraftText
                      text={authorTitle}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Element>
    </Section>
  )
}

Blog2.craft = {
  displayName: "Blog 2",
  props: {
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "Learn how to design and implement scalable applications using microservices, containerization, and cloud-native technologies.",
    category: "Featured",
    readTime: "5 min read",
    authorName: "Sarah Johnson",
    authorTitle: "Senior Developer",
    authorImage: "/placeholder.svg?height=40&width=40",
    featuredImage: "/placeholder.svg?height=300&width=800",
    featuredImageAlt: "Featured post",
    backgroundColor: "#f9fafb"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
