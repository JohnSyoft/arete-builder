import React from "react"

interface HeadingRuntimeProps {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  fontSize?: string
  fontWeight?: string
  color?: string
  margin?: string
  padding?: string
  fontFamily?: string
  lineHeight?: string
  letterSpacing?: string
}

export function HeadingRuntime({
  text = "Enter your heading here",
  level = 1,
  textAlign = 'left',
  fontSize = '',
  fontWeight = '',
  color = 'text-gray-900',
  margin = 'my-4',
  padding = '',
  fontFamily = '',
  lineHeight = '',
  letterSpacing = ''
}: HeadingRuntimeProps) {
  const getDefaultFontSize = (headingLevel: number) => {
    if (fontSize) return fontSize
    switch (headingLevel) {
      case 1: return 'text-4xl md:text-5xl'
      case 2: return 'text-3xl md:text-4xl'
      case 3: return 'text-2xl md:text-3xl'
      case 4: return 'text-xl md:text-2xl'
      case 5: return 'text-lg md:text-xl'
      case 6: return 'text-base md:text-lg'
      default: return 'text-2xl'
    }
  }

  const getDefaultFontWeight = (headingLevel: number) => {
    if (fontWeight) return fontWeight
    switch (headingLevel) {
      case 1: return 'font-bold'
      case 2: return 'font-bold'
      case 3: return 'font-semibold'
      case 4: return 'font-semibold'
      case 5: return 'font-medium'
      case 6: return 'font-medium'
      default: return 'font-semibold'
    }
  }

  const getTextAlignClass = (align: string) => {
    switch (align) {
      case 'left': return 'text-left'
      case 'center': return 'text-center'
      case 'right': return 'text-right'
      case 'justify': return 'text-justify'
      default: return 'text-left'
    }
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  const headingClasses = `
    ${getDefaultFontSize(level)}
    ${getDefaultFontWeight(level)}
    ${getTextAlignClass(textAlign)}
    ${color}
    ${margin}
    ${padding}
    ${fontFamily}
    ${lineHeight}
    ${letterSpacing}
  `.trim()

  return (
    <HeadingTag
      className={headingClasses}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}
