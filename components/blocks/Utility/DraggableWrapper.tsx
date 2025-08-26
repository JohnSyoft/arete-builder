import React from "react";
import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface DraggableWrapperProps extends SectionProps {
  children: React.ReactNode;
  enableAutoConversion?: boolean;
  preserveStructure?: boolean;
}

/**
 * Smart Wrapper that automatically converts static HTML elements
 * into draggable CraftJS components
 */
export function DraggableWrapper({
  children,
  enableAutoConversion = true,
  preserveStructure = true,
  ...sectionProps
}: DraggableWrapperProps) {
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    if (!enableAutoConversion) {
      return (
        <Element id="staticContent" is="div" canvas>
          {children}
        </Element>
      );
    }

    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      const elementType = child.type as string;
      const elementProps = child.props;

      // Convert text elements to CraftText
      if (
        ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"].includes(elementType)
      ) {
        const textContent = extractTextContent(child);
        const classProps = extractTailwindProps(elementProps.className || "");

        return (
          <Element
            key={index}
            is="div"
            className="p-1 rounded hover:bg-blue-50"
            canvas={false}
          >
            <CraftText
              text={textContent}
              tagName={
                elementType as
                  | "h1"
                  | "h2"
                  | "h3"
                  | "h4"
                  | "h5"
                  | "h6"
                  | "p"
                  | "span"
              }
              {...classProps}
            />
          </Element>
        );
      }

      // Convert buttons and links to CraftButton
      if (["button", "a"].includes(elementType)) {
        const buttonText = extractTextContent(child);
        const classProps = extractTailwindProps(elementProps.className || "");

        return (
          <Element
            key={index}
            is="div"
            className="p-1 rounded hover:bg-blue-50"
            canvas={false}
          >
            <CraftButton text={buttonText} {...classProps} />
          </Element>
        );
      }

      // For div containers, make them canvas areas
      if (elementType === "div" && child.props.children) {
        return (
          <Element
            key={index}
            is="div"
            canvas
            className={elementProps.className}
          >
            {processChildren(child.props.children)}
          </Element>
        );
      }

      // For other elements, wrap them in canvas but keep as-is
      return (
        <Element
          key={index}
          is="div"
          canvas={false}
          className="p-1 rounded hover:bg-blue-50"
        >
          {child}
        </Element>
      );
    });
  };

  return (
    <Section {...sectionProps}>
      <Element id="wrapperContent" is="div" canvas>
        {processChildren(children)}
      </Element>
    </Section>
  );
}

// Helper function to extract text content from React elements
function extractTextContent(element: React.ReactElement): string {
  if (typeof element.props.children === "string") {
    return element.props.children;
  }

  if (Array.isArray(element.props.children)) {
    return element.props.children
      .map((child: any) => {
        if (typeof child === "string") return child;
        if (React.isValidElement(child)) return extractTextContent(child);
        return "";
      })
      .join("");
  }

  if (React.isValidElement(element.props.children)) {
    return extractTextContent(element.props.children);
  }

  return "";
}

// Helper function to extract Tailwind classes into component props
function extractTailwindProps(className: string): Record<string, any> {
  if (!className) return {};

  const classes = className.split(" ");
  const props: Record<string, any> = {};

  // Extract text size
  const fontSize = classes.find((c) =>
    /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)$/.test(c)
  );
  if (fontSize) props.fontSize = fontSize;

  // Extract font weight
  const fontWeight = classes.find((c) =>
    /^font-(thin|light|normal|medium|semibold|bold|extrabold|black)$/.test(c)
  );
  if (fontWeight) props.fontWeight = fontWeight;

  // Extract text alignment
  const textAlign = classes.find((c) =>
    /^text-(left|center|right|justify)$/.test(c)
  );
  if (textAlign) props.textAlign = textAlign;

  // Extract text color
  const textColor = classes.find(
    (c) => /^text-\w+(-\d+)?$/.test(c) && !fontSize
  );
  if (textColor) props.color = textColor;

  // Extract background color
  const bgColor = classes.find((c) => /^bg-\w+(-\d+)?$/.test(c));
  if (bgColor) props.backgroundColor = bgColor;

  // Extract margin classes
  const marginClasses = classes.filter((c) => /^m[xytblr]?-/.test(c));
  if (marginClasses.length > 0) {
    props.margin = marginClasses.join(" ");
  }

  // Extract padding classes
  const paddingClasses = classes.filter((c) => /^p[xytblr]?-/.test(c));
  if (paddingClasses.length > 0) {
    props.padding = paddingClasses.join(" ");
  }

  return props;
}

DraggableWrapper.craft = {
  displayName: "Draggable Wrapper",
  props: {
    enableAutoConversion: true,
    preserveStructure: true,
    gradient: "linear-gradient(to right, #f8fafc, #e2e8f0)",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-8 sm:px-6 lg:px-8",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
