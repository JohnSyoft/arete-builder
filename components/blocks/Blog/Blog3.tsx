import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
}

interface Blog3Props extends SectionProps {
  title?: string
  subtitle?: string
  posts?: BlogPost[]
}

export function Blog3({
  title = "Developer Insights",
  subtitle = "Deep dives into technology and development practices",
  posts = [
    {
      title: "Advanced React Patterns",
      excerpt: "Master advanced React patterns including render props, higher-order components, and custom hooks...",
      category: "Tutorial",
      date: "March 11, 2024"
    },
    {
      title: "Microservices Architecture",
      excerpt: "Learn how to design and implement scalable microservices using modern architectural patterns...",
      category: "Architecture",
      date: "March 12, 2024"
    },
    {
      title: "Performance Optimization",
      excerpt: "Discover proven techniques to optimize your application performance and user experience...",
      category: "Performance",
      date: "March 13, 2024"
    },
    {
      title: "DevOps Best Practices",
      excerpt: "Implement CI/CD pipelines and infrastructure as code for scalable deployment strategies...",
      category: "DevOps",
      date: "March 14, 2024"
    }
  ],
  backgroundColor = "#111827",
  ...props
}: Blog3Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#ffffff",
    padding: "py-16",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="blog3Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
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
            <p className="text-lg text-gray-300">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <CraftText
                        text={post.category}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                    <span className="text-gray-400 text-sm ml-4">
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
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
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
                  <p className="text-gray-300 mb-4">
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
                  <CraftButton
                    text="Continue Reading →"
                    href="#"
                    variant="link"
                    size="default"
                    backgroundColor="transparent"
                    textColor="#60a5fa"
                    borderRadius=""
                    margin=""
                    padding=""
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Blog3.craft = {
  displayName: "Blog 3",
  props: {
    title: "Developer Insights",
    subtitle: "Deep dives into technology and development practices",
    posts: [
      {
        title: "Advanced React Patterns",
        excerpt: "Master advanced React patterns including render props, higher-order components, and custom hooks...",
        category: "Tutorial",
        date: "March 11, 2024"
      },
      {
        title: "Microservices Architecture",
        excerpt: "Learn how to design and implement scalable microservices using modern architectural patterns...",
        category: "Architecture",
        date: "March 12, 2024"
      },
      {
        title: "Performance Optimization",
        excerpt: "Discover proven techniques to optimize your application performance and user experience...",
        category: "Performance",
        date: "March 13, 2024"
      },
      {
        title: "DevOps Best Practices",
        excerpt: "Implement CI/CD pipelines and infrastructure as code for scalable deployment strategies...",
        category: "DevOps",
        date: "March 14, 2024"
      }
    ],
    backgroundColor: "#111827"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
