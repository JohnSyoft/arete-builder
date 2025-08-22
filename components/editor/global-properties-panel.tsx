"use client"

import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { usePropertiesPanelStore } from '@/lib/store/properties-panel-store'

export function GlobalPropertiesPanel() {
  const {
    isOpen,
    elementType,
    elementProps,
    closePanel,
    updateProps
  } = usePropertiesPanelStore()

  console.log('GlobalPropertiesPanel render', { isOpen, elementType, elementProps })

  const handlePropChange = (key: string, value: any) => {
    const newProps = { ...elementProps, [key]: value }
    updateProps(newProps)
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

  const renderColumnsProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="columnCount">Number of Columns</Label>
        <Select value={elementProps?.columnCount?.toString() || '2'} onValueChange={(value) => handlePropChange('columnCount', parseInt(value))}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Column</SelectItem>
            <SelectItem value="2">2 Columns</SelectItem>
            <SelectItem value="3">3 Columns</SelectItem>
            <SelectItem value="4">4 Columns</SelectItem>
            <SelectItem value="5">5 Columns</SelectItem>
            <SelectItem value="6">6 Columns</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="gap">Gap Between Columns</Label>
        <Select value={elementProps?.gap || 'gap-4'} onValueChange={(value) => handlePropChange('gap', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gap-0">No Gap</SelectItem>
            <SelectItem value="gap-2">Small (8px)</SelectItem>
            <SelectItem value="gap-4">Medium (16px)</SelectItem>
            <SelectItem value="gap-6">Large (24px)</SelectItem>
            <SelectItem value="gap-8">Extra Large (32px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="alignment">Column Alignment</Label>
        <Select value={elementProps?.alignment || 'stretch'} onValueChange={(value) => handlePropChange('alignment', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="start">Top</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="end">Bottom</SelectItem>
            <SelectItem value="stretch">Stretch</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="minHeight">Minimum Height</Label>
        <Select value={elementProps?.minHeight || 'min-h-[200px]'} onValueChange={(value) => handlePropChange('minHeight', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="min-h-[100px]">Small (100px)</SelectItem>
            <SelectItem value="min-h-[200px]">Medium (200px)</SelectItem>
            <SelectItem value="min-h-[300px]">Large (300px)</SelectItem>
            <SelectItem value="min-h-[400px]">Extra Large (400px)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderLinkProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="linkText">Link Text</Label>
        <Input
          id="linkText"
          value={elementProps?.text || ''}
          onChange={(e) => handlePropChange('text', e.target.value)}
          placeholder="Click here"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="linkHref">Link URL</Label>
        <Input
          id="linkHref"
          value={elementProps?.href || ''}
          onChange={(e) => handlePropChange('href', e.target.value)}
          placeholder="https://example.com"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="linkTarget">Open In</Label>
        <Select value={elementProps?.target || '_self'} onValueChange={(value) => handlePropChange('target', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="_self">Same Tab</SelectItem>
            <SelectItem value="_blank">New Tab</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="linkColor">Text Color</Label>
        <Select value={elementProps?.color || 'text-blue-600'} onValueChange={(value) => handlePropChange('color', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-blue-600">Blue</SelectItem>
            <SelectItem value="text-blue-100">Light Blue</SelectItem>
            <SelectItem value="text-purple-600">Purple</SelectItem>
            <SelectItem value="text-green-600">Green</SelectItem>
            <SelectItem value="text-red-600">Red</SelectItem>
            <SelectItem value="text-gray-900">Dark Gray</SelectItem>
            <SelectItem value="text-gray-600">Gray</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="textDecoration">Text Decoration</Label>
        <Select value={elementProps?.textDecoration || 'underline'} onValueChange={(value) => handlePropChange('textDecoration', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="underline">Underline</SelectItem>
            <SelectItem value="no-underline">No Underline</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderVideoProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="videoSrc">Video URL</Label>
        <Input
          id="videoSrc"
          value={elementProps?.src || ''}
          onChange={(e) => handlePropChange('src', e.target.value)}
          placeholder="https://example.com/video.mp4 or YouTube/Vimeo URL"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="videoPoster">Poster Image URL</Label>
        <Input
          id="videoPoster"
          value={elementProps?.poster || ''}
          onChange={(e) => handlePropChange('poster', e.target.value)}
          placeholder="https://example.com/poster.jpg"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="videoWidth">Width</Label>
        <Select value={elementProps?.width || 'w-full'} onValueChange={(value) => handlePropChange('width', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="w-full">Full Width</SelectItem>
            <SelectItem value="w-3/4">3/4 Width</SelectItem>
            <SelectItem value="w-1/2">Half Width</SelectItem>
            <SelectItem value="w-1/3">One Third</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="videoHeight">Height</Label>
        <Select value={elementProps?.height || 'h-64'} onValueChange={(value) => handlePropChange('height', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h-32">Small (128px)</SelectItem>
            <SelectItem value="h-48">Medium (192px)</SelectItem>
            <SelectItem value="h-64">Large (256px)</SelectItem>
            <SelectItem value="h-96">Extra Large (384px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Video Controls</Label>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.controls || true}
              onChange={(e) => handlePropChange('controls', e.target.checked)}
            />
            <span className="text-sm">Show Controls</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.autoplay || false}
              onChange={(e) => handlePropChange('autoplay', e.target.checked)}
            />
            <span className="text-sm">Autoplay</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.loop || false}
              onChange={(e) => handlePropChange('loop', e.target.checked)}
            />
            <span className="text-sm">Loop</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.muted || false}
              onChange={(e) => handlePropChange('muted', e.target.checked)}
            />
            <span className="text-sm">Muted</span>
          </label>
        </div>
      </div>
    </div>
  )

  const renderMapProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="mapAddress">Address or Location</Label>
        <Input
          id="mapAddress"
          value={elementProps?.address || ''}
          onChange={(e) => handlePropChange('address', e.target.value)}
          placeholder="1600 Amphitheatre Pkwy, Mountain View, CA"
          className="mt-1"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="mapLat">Latitude</Label>
          <Input
            id="mapLat"
            type="number"
            step="any"
            value={elementProps?.lat || ''}
            onChange={(e) => handlePropChange('lat', parseFloat(e.target.value))}
            placeholder="40.7128"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="mapLng">Longitude</Label>
          <Input
            id="mapLng"
            type="number"
            step="any"
            value={elementProps?.lng || ''}
            onChange={(e) => handlePropChange('lng', parseFloat(e.target.value))}
            placeholder="-74.0060"
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="mapZoom">Zoom Level</Label>
        <Select value={elementProps?.zoom?.toString() || '15'} onValueChange={(value) => handlePropChange('zoom', parseInt(value))}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 - City</SelectItem>
            <SelectItem value="13">13 - Neighborhood</SelectItem>
            <SelectItem value="15">15 - Street</SelectItem>
            <SelectItem value="17">17 - Building</SelectItem>
            <SelectItem value="20">20 - Close Up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="mapType">Map Type</Label>
        <Select value={elementProps?.mapType || 'roadmap'} onValueChange={(value) => handlePropChange('mapType', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="roadmap">Road Map</SelectItem>
            <SelectItem value="satellite">Satellite</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
            <SelectItem value="terrain">Terrain</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={elementProps?.showMarker || true}
            onChange={(e) => handlePropChange('showMarker', e.target.checked)}
          />
          <span className="text-sm">Show Marker</span>
        </label>
      </div>
    </div>
  )

  const renderContainerProperties = () => {
    console.log('renderContainerProperties called', { elementProps })
    return (
    <div className="space-y-4">
      {/* Background Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Background</h4>
        
        <div>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            id="backgroundColor"
            type="color"
            value={elementProps?.backgroundColor || '#ffffff'}
            onChange={(e) => handlePropChange('backgroundColor', e.target.value)}
            className="mt-1 h-10"
          />
        </div>

        <div>
          <Label htmlFor="backgroundImage">Background Image URL</Label>
          <Input
            id="backgroundImage"
            value={elementProps?.backgroundImage || ''}
            onChange={(e) => handlePropChange('backgroundImage', e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="gradient">Gradient (CSS)</Label>
          <Input
            id="gradient"
            value={elementProps?.gradient || ''}
            onChange={(e) => handlePropChange('gradient', e.target.value)}
            placeholder="linear-gradient(45deg, #ff0000, #0000ff)"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="backgroundSize">Background Size</Label>
          <Select value={elementProps?.backgroundSize || 'cover'} onValueChange={(value) => handlePropChange('backgroundSize', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cover">Cover</SelectItem>
              <SelectItem value="contain">Contain</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="100% 100%">Stretch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="backgroundPosition">Background Position</Label>
          <Select value={elementProps?.backgroundPosition || 'center'} onValueChange={(value) => handlePropChange('backgroundPosition', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="right">Right</SelectItem>
              <SelectItem value="top left">Top Left</SelectItem>
              <SelectItem value="top right">Top Right</SelectItem>
              <SelectItem value="bottom left">Bottom Left</SelectItem>
              <SelectItem value="bottom right">Bottom Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Border Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Border</h4>
        
        <div>
          <Label htmlFor="borderWidth">Border Width</Label>
          <Select value={elementProps?.borderWidth || '0px'} onValueChange={(value) => handlePropChange('borderWidth', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="1px">1px</SelectItem>
              <SelectItem value="2px">2px</SelectItem>
              <SelectItem value="4px">4px</SelectItem>
              <SelectItem value="8px">8px</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="borderStyle">Border Style</Label>
          <Select value={elementProps?.borderStyle || 'solid'} onValueChange={(value) => handlePropChange('borderStyle', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="dashed">Dashed</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
              <SelectItem value="double">Double</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="borderColor">Border Color</Label>
          <Input
            id="borderColor"
            type="color"
            value={elementProps?.borderColor || '#e5e7eb'}
            onChange={(e) => handlePropChange('borderColor', e.target.value)}
            className="mt-1 h-10"
          />
        </div>

        <div>
          <Label htmlFor="borderRadius">Border Radius</Label>
          <Select value={elementProps?.borderRadius || '0px'} onValueChange={(value) => handlePropChange('borderRadius', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="4px">Small</SelectItem>
              <SelectItem value="8px">Medium</SelectItem>
              <SelectItem value="12px">Large</SelectItem>
              <SelectItem value="16px">Extra Large</SelectItem>
              <SelectItem value="50%">Circle/Pill</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Spacing Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Spacing</h4>
        
        <div>
          <Label htmlFor="padding">Padding</Label>
          <Select value={elementProps?.padding || '16px'} onValueChange={(value) => handlePropChange('padding', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="4px">XS (4px)</SelectItem>
              <SelectItem value="8px">SM (8px)</SelectItem>
              <SelectItem value="12px">Base (12px)</SelectItem>
              <SelectItem value="16px">MD (16px)</SelectItem>
              <SelectItem value="20px">LG (20px)</SelectItem>
              <SelectItem value="24px">XL (24px)</SelectItem>
              <SelectItem value="32px">2XL (32px)</SelectItem>
              <SelectItem value="48px">3XL (48px)</SelectItem>
              <SelectItem value="4rem 1rem">Hero Default</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="margin">Margin</Label>
          <Select value={elementProps?.margin || '0px'} onValueChange={(value) => handlePropChange('margin', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="4px">XS (4px)</SelectItem>
              <SelectItem value="8px">SM (8px)</SelectItem>
              <SelectItem value="12px">Base (12px)</SelectItem>
              <SelectItem value="16px">MD (16px)</SelectItem>
              <SelectItem value="20px">LG (20px)</SelectItem>
              <SelectItem value="24px">XL (24px)</SelectItem>
              <SelectItem value="32px">2XL (32px)</SelectItem>
              <SelectItem value="48px">3XL (48px)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Size Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Size</h4>
        
        <div>
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            value={elementProps?.width || '100%'}
            onChange={(e) => handlePropChange('width', e.target.value)}
            placeholder="100%, 300px, auto"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || '200px'}
            onChange={(e) => handlePropChange('minHeight', e.target.value)}
            placeholder="200px, auto, 500px"
            className="mt-1"
          />
        </div>
      </div>

      {/* Effects Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Effects</h4>
        
        <div>
          <Label htmlFor="boxShadow">Box Shadow</Label>
          <Select value={elementProps?.boxShadow || 'none'} onValueChange={(value) => handlePropChange('boxShadow', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)">Small</SelectItem>
              <SelectItem value="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)">Medium</SelectItem>
              <SelectItem value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)">Large</SelectItem>
              <SelectItem value="0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="opacity">Opacity</Label>
          <Select value={elementProps?.opacity || '1'} onValueChange={(value) => handlePropChange('opacity', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0% (Invisible)</SelectItem>
              <SelectItem value="0.25">25%</SelectItem>
              <SelectItem value="0.5">50%</SelectItem>
              <SelectItem value="0.75">75%</SelectItem>
              <SelectItem value="1">100% (Opaque)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="overflow">Overflow</Label>
          <Select value={elementProps?.overflow || 'visible'} onValueChange={(value) => handlePropChange('overflow', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visible">Visible</SelectItem>
              <SelectItem value="hidden">Hidden</SelectItem>
              <SelectItem value="scroll">Scroll</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
  }

  const renderImageProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="src">Image URL</Label>
        <Input
          id="src"
          value={elementProps?.src || ''}
          onChange={(e) => handlePropChange('src', e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="alt">Alt Text</Label>
        <Input
          id="alt"
          value={elementProps?.alt || ''}
          onChange={(e) => handlePropChange('alt', e.target.value)}
          placeholder="Describe the image"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="width">Width</Label>
        <Select value={elementProps?.width || 'w-full'} onValueChange={(value) => handlePropChange('width', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="w-auto">Auto</SelectItem>
            <SelectItem value="w-full">Full Width</SelectItem>
            <SelectItem value="w-1/2">Half Width</SelectItem>
            <SelectItem value="w-1/3">One Third</SelectItem>
            <SelectItem value="w-1/4">One Quarter</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="height">Height</Label>
        <Select value={elementProps?.height || 'h-48'} onValueChange={(value) => handlePropChange('height', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h-auto">Auto</SelectItem>
            <SelectItem value="h-32">Small (128px)</SelectItem>
            <SelectItem value="h-48">Medium (192px)</SelectItem>
            <SelectItem value="h-64">Large (256px)</SelectItem>
            <SelectItem value="h-96">Extra Large (384px)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderSpacerProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="height">Height</Label>
        <Select value={elementProps?.height || 'h-8'} onValueChange={(value) => handlePropChange('height', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h-1">Extra Small (4px)</SelectItem>
            <SelectItem value="h-2">Small (8px)</SelectItem>
            <SelectItem value="h-4">Medium (16px)</SelectItem>
            <SelectItem value="h-8">Large (32px)</SelectItem>
            <SelectItem value="h-16">Extra Large (64px)</SelectItem>
            <SelectItem value="h-32">XXL (128px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="backgroundColor">Background Color</Label>
        <Select value={elementProps?.backgroundColor || 'bg-transparent'} onValueChange={(value) => handlePropChange('backgroundColor', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bg-transparent">Transparent</SelectItem>
            <SelectItem value="bg-gray-100">Light Gray</SelectItem>
            <SelectItem value="bg-gray-200">Gray</SelectItem>
            <SelectItem value="bg-blue-100">Light Blue</SelectItem>
            <SelectItem value="bg-green-100">Light Green</SelectItem>
            <SelectItem value="bg-red-100">Light Red</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Select value={elementProps?.margin || 'my-0'} onValueChange={(value) => handlePropChange('margin', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my-0">None</SelectItem>
            <SelectItem value="my-1">Small</SelectItem>
            <SelectItem value="my-2">Medium</SelectItem>
            <SelectItem value="my-4">Large</SelectItem>
            <SelectItem value="my-8">Extra Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderDividerProperties = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="color">Color</Label>
        <Select value={elementProps?.color || 'border-gray-200'} onValueChange={(value) => handlePropChange('color', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="border-gray-200">Light Gray</SelectItem>
            <SelectItem value="border-gray-400">Gray</SelectItem>
            <SelectItem value="border-gray-600">Dark Gray</SelectItem>
            <SelectItem value="border-blue-300">Blue</SelectItem>
            <SelectItem value="border-green-300">Green</SelectItem>
            <SelectItem value="border-red-300">Red</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="thickness">Thickness</Label>
        <Select value={elementProps?.thickness || 'border-t'} onValueChange={(value) => handlePropChange('thickness', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="border-t">Thin (1px)</SelectItem>
            <SelectItem value="border-t-2">Medium (2px)</SelectItem>
            <SelectItem value="border-t-4">Thick (4px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="style">Style</Label>
        <Select value={elementProps?.style || 'border-solid'} onValueChange={(value) => handlePropChange('style', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="border-solid">Solid</SelectItem>
            <SelectItem value="border-dashed">Dashed</SelectItem>
            <SelectItem value="border-dotted">Dotted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Select value={elementProps?.margin || 'my-4'} onValueChange={(value) => handlePropChange('margin', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my-0">None</SelectItem>
            <SelectItem value="my-2">Small</SelectItem>
            <SelectItem value="my-4">Medium</SelectItem>
            <SelectItem value="my-8">Large</SelectItem>
            <SelectItem value="my-12">Extra Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-200 shadow-lg z-50 transform transition-transform duration-300">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Properties</h3>
        <Button variant="ghost" size="sm" onClick={closePanel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {elementType === 'text' && renderTextProperties()}
        {elementType === 'button' && renderButtonProperties()}
        {elementType === 'container' && renderContainerProperties()}
        {elementType === 'image' && renderImageProperties()}
        {elementType === 'columns' && renderColumnsProperties()}
        {elementType === 'link' && renderLinkProperties()}
        {elementType === 'video' && renderVideoProperties()}
        {elementType === 'map' && renderMapProperties()}
        {!elementType && (
          <div className="text-center text-gray-500 mt-8">
            <p>Select an element to edit its properties</p>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
