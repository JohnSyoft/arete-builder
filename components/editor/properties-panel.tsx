"use client"

import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface PropertiesPanelProps {
  isOpen: boolean
  onClose: () => void
  elementType: 'text' | 'button' | 'image' | 'container' | null
  elementProps: any
  onPropsChange: (props: any) => void
}

export function PropertiesPanel({
  isOpen,
  onClose,
  elementType,
  elementProps,
  onPropsChange
}: PropertiesPanelProps) {
  const handlePropChange = (key: string, value: any) => {
    onPropsChange({ ...elementProps, [key]: value })
  }

  const renderTextProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Text Content</Label>
        <Textarea
          id="text"
          value={elementProps?.text || ''}
          onChange={(e) => handlePropChange('text', e.target.value)}
          placeholder="Enter text content"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="tagName">Tag Type</Label>
        <Select value={elementProps?.tagName || 'p'} onValueChange={(value) => handlePropChange('tagName', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h1">Heading 1</SelectItem>
            <SelectItem value="h2">Heading 2</SelectItem>
            <SelectItem value="h3">Heading 3</SelectItem>
            <SelectItem value="h4">Heading 4</SelectItem>
            <SelectItem value="h5">Heading 5</SelectItem>
            <SelectItem value="h6">Heading 6</SelectItem>
            <SelectItem value="p">Paragraph</SelectItem>
            <SelectItem value="span">Span</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="fontSize">Font Size</Label>
        <Select value={elementProps?.fontSize || 'text-base'} onValueChange={(value) => handlePropChange('fontSize', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-xs">Extra Small</SelectItem>
            <SelectItem value="text-sm">Small</SelectItem>
            <SelectItem value="text-base">Base</SelectItem>
            <SelectItem value="text-lg">Large</SelectItem>
            <SelectItem value="text-xl">Extra Large</SelectItem>
            <SelectItem value="text-2xl">2X Large</SelectItem>
            <SelectItem value="text-3xl">3X Large</SelectItem>
            <SelectItem value="text-4xl">4X Large</SelectItem>
            <SelectItem value="text-5xl">5X Large</SelectItem>
            <SelectItem value="text-6xl">6X Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="fontWeight">Font Weight</Label>
        <Select value={elementProps?.fontWeight || 'font-normal'} onValueChange={(value) => handlePropChange('fontWeight', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="font-thin">Thin</SelectItem>
            <SelectItem value="font-light">Light</SelectItem>
            <SelectItem value="font-normal">Normal</SelectItem>
            <SelectItem value="font-medium">Medium</SelectItem>
            <SelectItem value="font-semibold">Semibold</SelectItem>
            <SelectItem value="font-bold">Bold</SelectItem>
            <SelectItem value="font-extrabold">Extra Bold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="color">Text Color</Label>
        <Select value={elementProps?.color || 'text-gray-900'} onValueChange={(value) => handlePropChange('color', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-white">White</SelectItem>
            <SelectItem value="text-black">Black</SelectItem>
            <SelectItem value="text-gray-900">Gray 900</SelectItem>
            <SelectItem value="text-gray-700">Gray 700</SelectItem>
            <SelectItem value="text-gray-500">Gray 500</SelectItem>
            <SelectItem value="text-blue-600">Blue</SelectItem>
            <SelectItem value="text-blue-100">Light Blue</SelectItem>
            <SelectItem value="text-red-600">Red</SelectItem>
            <SelectItem value="text-green-600">Green</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderButtonProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="buttonText">Button Text</Label>
        <Input
          id="buttonText"
          value={elementProps?.text || ''}
          onChange={(e) => handlePropChange('text', e.target.value)}
          placeholder="Button text"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="variant">Button Style</Label>
        <Select value={elementProps?.variant || 'default'} onValueChange={(value) => handlePropChange('variant', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="link">Link</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="size">Button Size</Label>
        <Select value={elementProps?.size || 'default'} onValueChange={(value) => handlePropChange('size', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="href">Link URL</Label>
        <Input
          id="href"
          value={elementProps?.href || ''}
          onChange={(e) => handlePropChange('href', e.target.value)}
          placeholder="https://example.com"
          className="mt-1"
        />
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-200 shadow-lg z-40 transform transition-transform duration-300">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Properties</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {elementType === 'text' && renderTextProperties()}
        {elementType === 'button' && renderButtonProperties()}
        {!elementType && (
          <div className="text-center text-gray-500 mt-8">
            <p>Select an element to edit its properties</p>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
