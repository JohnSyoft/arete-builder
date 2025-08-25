import React from "react"

interface ListItem {
  id: string
  text: string
}

interface ListRuntimeProps {
  type?: 'ul' | 'ol'
  items?: ListItem[]
  listStyle?: 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-alpha' | 'upper-alpha' | 'none'
  spacing?: 'tight' | 'normal' | 'relaxed'
  textAlign?: 'left' | 'center' | 'right'
  fontSize?: string
  color?: string
  margin?: string
  padding?: string
  indent?: string
}

export function ListRuntime({
  type = 'ul',
  items = [
    { id: '1', text: 'First list item' },
    { id: '2', text: 'Second list item' },
    { id: '3', text: 'Third list item' }
  ],
  listStyle = 'disc',
  spacing = 'normal',
  textAlign = 'left',
  fontSize = 'text-base',
  color = 'text-gray-900',
  margin = 'my-4',
  padding = '',
  indent = 'ml-6'
}: ListRuntimeProps) {
  const getSpacingClass = (spacingType: string) => {
    switch (spacingType) {
      case 'tight': return 'space-y-1'
      case 'normal': return 'space-y-2'
      case 'relaxed': return 'space-y-3'
      default: return 'space-y-2'
    }
  }

  const getTextAlignClass = (align: string) => {
    switch (align) {
      case 'left': return 'text-left'
      case 'center': return 'text-center'
      case 'right': return 'text-right'
      default: return 'text-left'
    }
  }

  const getListStyleClass = (style: string) => {
    switch (style) {
      case 'disc': return 'list-disc'
      case 'circle': return 'list-circle'
      case 'square': return 'list-square'
      case 'decimal': return 'list-decimal'
      case 'decimal-leading-zero': return 'list-decimal-leading-zero'
      case 'lower-roman': return 'list-lower-roman'
      case 'upper-roman': return 'list-upper-roman'
      case 'lower-alpha': return 'list-lower-alpha'
      case 'upper-alpha': return 'list-upper-alpha'
      case 'none': return 'list-none'
      default: return 'list-disc'
    }
  }

  const ListTag = type as keyof JSX.IntrinsicElements

  const listClasses = `
    ${getListStyleClass(listStyle)}
    ${getSpacingClass(spacing)}
    ${getTextAlignClass(textAlign)}
    ${fontSize}
    ${color}
    ${margin}
    ${padding}
    ${indent}
  `.trim()

  return (
    <ListTag className={listClasses}>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
        </li>
      ))}
    </ListTag>
  )
}
