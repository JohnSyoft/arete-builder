"use client"

import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { usePropertiesPanelStore } from '@/lib/store/properties-panel-store'
import {
  TextProperties,
  ImageProperties,
  ButtonProperties,
  ContainerProperties,
  VideoProperties,
  SpacerProperties,
  DividerProperties,
  ColumnsProperties,
  LinkProperties,
  MapProperties,
  BadgeProperties,
  InputProperties,
  FlexRowProperties,
  FlexProperties,
  CardProperties,
  GridProperties,
  AlertProperties,
  NavigationProperties
} from "./property-panels"

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-200 shadow-lg z-50 transform transition-transform duration-300 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Properties</h3>
        <Button variant="ghost" size="sm" onClick={closePanel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1 h-0">
        <div className="p-4">
          {elementType === 'text' && <TextProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'button' && <ButtonProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'container' && <ContainerProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'image' && <ImageProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'video' && <VideoProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'spacer' && <SpacerProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'divider' && <DividerProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'columns' && <ColumnsProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'link' && <LinkProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'map' && <MapProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'badge' && <BadgeProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'input' && <InputProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {/* Components with specific property panels */}
          {elementType === 'row' && <FlexRowProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'card' && <CardProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'heading' && <TextProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'select' && <InputProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'checkbox' && <InputProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'textarea' && <InputProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'linebreak' && <SpacerProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'icon' && <ButtonProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'grid' && <GridProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'navigation' && <NavigationProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'list' && <TextProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'alert' && <AlertProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'flexrow' && <FlexRowProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {elementType === 'flex' && <FlexProperties elementProps={elementProps} onPropChange={handlePropChange} />}
          {!elementType && (
            <div className="text-center text-gray-500 mt-8">
              <p>Select an element to edit its properties</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
