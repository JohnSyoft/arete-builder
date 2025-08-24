import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"
import { CraftButton } from "../../editor/craft-components"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface Products1Props extends SectionProps {
  title?: string
  subtitle?: string
  products?: Product[]
}

export function Products1({
  title = "Our Products",
  subtitle = "Discover our carefully curated collection of premium products",
  products = [
    { id: 1, name: "Premium Product 1", description: "High-quality product with excellent features and design.", price: "$99.99", image: "/placeholder.svg?height=300&width=300&query=product 1" },
    { id: 2, name: "Premium Product 2", description: "High-quality product with excellent features and design.", price: "$149.99", image: "/placeholder.svg?height=300&width=300&query=product 2" },
    { id: 3, name: "Premium Product 3", description: "High-quality product with excellent features and design.", price: "$199.99", image: "/placeholder.svg?height=300&width=300&query=product 3" },
    { id: 4, name: "Premium Product 4", description: "High-quality product with excellent features and design.", price: "$129.99", image: "/placeholder.svg?height=300&width=300&query=product 4" },
    { id: 5, name: "Premium Product 5", description: "High-quality product with excellent features and design.", price: "$179.99", image: "/placeholder.svg?height=300&width=300&query=product 5" },
    { id: 6, name: "Premium Product 6", description: "High-quality product with excellent features and design.", price: "$89.99", image: "/placeholder.svg?height=300&width=300&query=product 6" },
  ],
  ...props
}: Products1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    padding: "py-16",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="products1Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-muted">
                  <CraftImage
                    src={product.image}
                    alt={product.name}
                    width="300"
                    height="300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <CraftText
                      text={product.name}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <CraftText
                      text={product.description}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">
                      <CraftText
                        text={product.price}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                    <CraftButton
                      text="Add to Cart"
                      variant="default"
                      size="default"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Products1.craft = {
  displayName: "Products 1",
  props: {
    title: "Our Products",
    subtitle: "Discover our carefully curated collection of premium products",
    products: [
      { id: 1, name: "Premium Product 1", description: "High-quality product with excellent features and design.", price: "$99.99", image: "/placeholder.svg?height=300&width=300&query=product 1" },
      { id: 2, name: "Premium Product 2", description: "High-quality product with excellent features and design.", price: "$149.99", image: "/placeholder.svg?height=300&width=300&query=product 2" },
      { id: 3, name: "Premium Product 3", description: "High-quality product with excellent features and design.", price: "$199.99", image: "/placeholder.svg?height=300&width=300&query=product 3" },
      { id: 4, name: "Premium Product 4", description: "High-quality product with excellent features and design.", price: "$129.99", image: "/placeholder.svg?height=300&width=300&query=product 4" },
      { id: 5, name: "Premium Product 5", description: "High-quality product with excellent features and design.", price: "$179.99", image: "/placeholder.svg?height=300&width=300&query=product 5" },
      { id: 6, name: "Premium Product 6", description: "High-quality product with excellent features and design.", price: "$89.99", image: "/placeholder.svg?height=300&width=300&query=product 6" },
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
