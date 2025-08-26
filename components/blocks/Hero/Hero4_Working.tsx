import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface TemplateComponentProps extends SectionProps {
  // Template component can inherit all Section properties
}

/**
 * Template-based component that creates properly draggable elements
 * following the Hero1.tsx pattern but with a more systematic approach
 */
export function createTemplateComponent(config: {
  name: string;
  displayName: string;
  defaultProps?: Partial<SectionProps>;
  structure: TemplateElement[];
}) {
  function TemplateComponent(props: TemplateComponentProps) {
    const componentProps = {
      gradient: "linear-gradient(to right, #2563eb, #9333ea)",
      padding: "0",
      minHeight: "auto",
      overflow: "hidden",
      className: "text-white relative",
      hasOverlay: true,
      overlayColor: "#000000",
      overlayOpacity: "0.2",
      hasContentWrapper: true,
      contentMaxWidth: "7xl",
      contentPadding:
        "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
      ...config.defaultProps,
      ...props,
    };

    const renderElement = (
      element: TemplateElement,
      index: number
    ): JSX.Element => {
      const elementId = `${config.name.toLowerCase()}_${element.type}_${index}`;

      switch (element.type) {
        case "text":
          return (
            <Element
              key={elementId}
              is="div"
              className="p-2 rounded"
              canvas={false}
            >
              <CraftText
                text={element.content || ""}
                tagName={(element.tagName as any) || "p"}
                fontSize={element.props?.fontSize || "text-base"}
                fontWeight={element.props?.fontWeight || "font-normal"}
                color={element.props?.color || "text-white"}
                textAlign={element.props?.textAlign || "text-left"}
                margin={element.props?.margin || ""}
                padding={element.props?.padding || ""}
                lineHeight={element.props?.lineHeight || "leading-normal"}
              />
            </Element>
          );

        case "button":
          return (
            <Element
              key={elementId}
              is="div"
              className="p-2 rounded"
              canvas={false}
            >
              <CraftButton
                text={element.content || "Button"}
                size={element.props?.size || "md"}
                variant={element.props?.variant || "default"}
                backgroundColor={element.props?.backgroundColor || "#2563eb"}
                textColor={element.props?.textColor || "#ffffff"}
                borderRadius={element.props?.borderRadius || "8px"}
                margin={element.props?.margin || ""}
                padding={element.props?.padding || "px-6 py-3"}
                width={element.props?.width || "w-auto"}
              />
            </Element>
          );

        case "container":
          return (
            <Element
              key={elementId}
              is="div"
              canvas
              className={element.props?.className || ""}
            >
              {element.children?.map((child, childIndex) =>
                renderElement(child, childIndex)
              )}
            </Element>
          );

        case "grid":
          return (
            <Element
              key={elementId}
              is="div"
              canvas
              className={`grid ${element.props?.gridCols || "grid-cols-1"} ${
                element.props?.gap || "gap-4"
              } ${element.props?.className || ""}`}
            >
              {element.children?.map((child, childIndex) =>
                renderElement(child, childIndex)
              )}
            </Element>
          );

        default:
          return (
            <div key={elementId}>Unknown element type: {element.type}</div>
          );
      }
    };

    return (
      <Section {...componentProps}>
        <Element
          id={`${config.name.toLowerCase()}Content`}
          is="div"
          canvas
          className="text-center"
        >
          {config.structure.map((element, index) =>
            renderElement(element, index)
          )}
        </Element>
      </Section>
    );
  }

  TemplateComponent.craft = {
    displayName: config.displayName,
    props: {
      gradient: "linear-gradient(to right, #2563eb, #9333ea)",
      padding: "0",
      minHeight: "auto",
      overflow: "hidden",
      className: "text-white relative",
      hasOverlay: true,
      overlayColor: "#000000",
      overlayOpacity: "0.2",
      hasContentWrapper: true,
      contentMaxWidth: "7xl",
      contentPadding:
        "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
      ...config.defaultProps,
    },
    rules: {
      canDrag: () => true,
      canMoveIn: () => true,
      canMoveOut: () => true,
    },
    isCanvas: false,
  };

  return TemplateComponent;
}

// Type definitions for template structure
export interface TemplateElement {
  type: "text" | "button" | "container" | "grid";
  content?: string;
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  props?: Record<string, any>;
  children?: TemplateElement[];
}

// Easy-to-use Hero4 using the template system
export const Hero4_Template = createTemplateComponent({
  name: "Hero4Template",
  displayName: "Hero 4 Template",
  defaultProps: {
    className: "bg-gradient-to-br from-orange-50 to-pink-50 text-gray-900",
    hasOverlay: false,
    gradient: "linear-gradient(to bottom right, #fff7ed, #fdf2f8)",
  },
  structure: [
    {
      type: "container",
      props: { className: "max-w-7xl mx-auto" },
      children: [
        {
          type: "container",
          props: { className: "text-center mb-12" },
          children: [
            {
              type: "text",
              content: "Create. Launch. Succeed.",
              tagName: "h1",
              props: {
                fontSize: "text-4xl md:text-6xl",
                fontWeight: "font-bold",
                color: "text-gray-900",
                margin: "mb-6",
                textAlign: "text-center",
              },
            },
            {
              type: "text",
              content:
                "Join thousands of entrepreneurs who've built their dream websites with our platform. No technical skills needed.",
              tagName: "p",
              props: {
                fontSize: "text-xl",
                color: "text-gray-600",
                margin: "mb-8",
                textAlign: "text-center",
              },
            },
          ],
        },
        {
          type: "container",
          props: {
            className: "flex flex-col sm:flex-row gap-4 justify-center mb-12",
          },
          children: [
            {
              type: "button",
              content: "Start Building Free",
              props: {
                backgroundColor: "#ea580c",
                textColor: "#ffffff",
                padding: "px-8 py-3",
                borderRadius: "8px",
                size: "lg",
              },
            },
            {
              type: "button",
              content: "Watch Demo",
              props: {
                variant: "outline",
                backgroundColor: "transparent",
                textColor: "#ea580c",
                padding: "px-8 py-3",
                borderRadius: "8px",
                size: "lg",
              },
            },
          ],
        },
        {
          type: "grid",
          props: {
            gridCols: "md:grid-cols-3",
            gap: "gap-8",
            className: "mt-16",
          },
          children: [
            {
              type: "container",
              props: { className: "text-center" },
              children: [
                {
                  type: "text",
                  content: "Lightning Fast",
                  tagName: "h3",
                  props: {
                    fontWeight: "font-semibold",
                    color: "text-gray-900",
                    margin: "mb-2",
                    textAlign: "text-center",
                  },
                },
                {
                  type: "text",
                  content: "Build and deploy in minutes, not hours",
                  tagName: "p",
                  props: {
                    color: "text-gray-600",
                    textAlign: "text-center",
                  },
                },
              ],
            },
            {
              type: "container",
              props: { className: "text-center" },
              children: [
                {
                  type: "text",
                  content: "Beautiful Designs",
                  tagName: "h3",
                  props: {
                    fontWeight: "font-semibold",
                    color: "text-gray-900",
                    margin: "mb-2",
                    textAlign: "text-center",
                  },
                },
                {
                  type: "text",
                  content: "Professional templates that convert",
                  tagName: "p",
                  props: {
                    color: "text-gray-600",
                    textAlign: "text-center",
                  },
                },
              ],
            },
            {
              type: "container",
              props: { className: "text-center" },
              children: [
                {
                  type: "text",
                  content: "Mobile Ready",
                  tagName: "h3",
                  props: {
                    fontWeight: "font-semibold",
                    color: "text-gray-900",
                    margin: "mb-2",
                    textAlign: "text-center",
                  },
                },
                {
                  type: "text",
                  content: "Responsive on every device",
                  tagName: "p",
                  props: {
                    color: "text-gray-600",
                    textAlign: "text-center",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export { Hero4_Template as Hero4_Working };
