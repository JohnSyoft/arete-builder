import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Pricing1Props extends SectionProps {
  title?: string
  subtitle?: string
  plans?: Array<{
    name: string
    price: string
    period: string
    features: string[]
    popular?: boolean
    buttonText: string
    buttonHref: string
  }>
}

export function Pricing1({
  title = "Simple Pricing",
  subtitle = "Choose the plan that works best for you",
  plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      features: ["5 Projects", "10GB Storage", "Email Support"],
      buttonText: "Get Started",
      buttonHref: "/signup?plan=basic"
    },
    {
      name: "Pro",
      price: "$29", 
      period: "/month",
      features: ["25 Projects", "100GB Storage", "Priority Support", "Advanced Analytics"],
      popular: true,
      buttonText: "Get Started",
      buttonHref: "/signup?plan=pro"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month", 
      features: ["Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Integrations"],
      buttonText: "Contact Sales",
      buttonHref: "/contact?plan=enterprise"
    }
  ],
  backgroundColor = "#ffffff",
  ...props
}: Pricing1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#111827",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="pricing1Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Element 
                key={index} 
                is="div" 
                className={`bg-white rounded-lg border ${
                  plan.popular ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-200"
                } p-8 relative`}
                canvas
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  {/* Plan Name */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <CraftText
                      text={plan.name}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      <CraftText
                        text={plan.price}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                    <span className="text-gray-600">
                      <CraftText
                        text={plan.period}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-600">
                          <CraftText
                            text={feature}
                            tagName="span"
                            fontSize=""
                            fontWeight=""
                            color=""
                            margin=""
                            padding=""
                          />
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <CraftButton
                    text={plan.buttonText}
                    href={plan.buttonHref}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    backgroundColor={plan.popular ? "#2563eb" : "transparent"}
                    textColor={plan.popular ? "#ffffff" : "#2563eb"}
                    borderRadius="8px"
                    margin=""
                    padding="px-8 py-3"
                    width="w-full"
                  />
                </div>
              </Element>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Pricing1.craft = {
  displayName: "Pricing 1",
  props: {
    title: "Simple Pricing",
    subtitle: "Choose the plan that works best for you",
    plans: [
      {
        name: "Basic",
        price: "$9",
        period: "/month",
        features: ["5 Projects", "10GB Storage", "Email Support"],
        buttonText: "Get Started",
        buttonHref: "/signup?plan=basic"
      },
      {
        name: "Pro",
        price: "$29", 
        period: "/month",
        features: ["25 Projects", "100GB Storage", "Priority Support", "Advanced Analytics"],
        popular: true,
        buttonText: "Get Started",
        buttonHref: "/signup?plan=pro"
      },
      {
        name: "Enterprise",
        price: "$99",
        period: "/month", 
        features: ["Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Integrations"],
        buttonText: "Contact Sales",
        buttonHref: "/contact?plan=enterprise"
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
