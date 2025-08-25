import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FlexPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function FlexProperties({ elementProps, onPropChange }: FlexPropertiesProps) {
  return (
    <Accordion type="multiple" defaultValue={["layout", "spacing", "advanced"]} className="w-full">
      {/* Layout Section */}
      <AccordionItem value="layout">
        <AccordionTrigger className="text-sm font-medium">Layout</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="flexDirection">Direction</Label>
            <Select value={elementProps?.flexDirection || 'row'} onValueChange={(value) => onPropChange('flexDirection', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="row">Row (→)</SelectItem>
                <SelectItem value="column">Column (↓)</SelectItem>
                <SelectItem value="row-reverse">Row Reverse (←)</SelectItem>
                <SelectItem value="column-reverse">Column Reverse (↑)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="gap">Gap Between Items</Label>
            <Select value={elementProps?.gap || 'gap-4'} onValueChange={(value) => onPropChange('gap', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gap-0">No Gap (0px)</SelectItem>
                <SelectItem value="gap-px">1px</SelectItem>
                <SelectItem value="gap-0.5">2px</SelectItem>
                <SelectItem value="gap-1">4px</SelectItem>
                <SelectItem value="gap-1.5">6px</SelectItem>
                <SelectItem value="gap-2">8px</SelectItem>
                <SelectItem value="gap-2.5">10px</SelectItem>
                <SelectItem value="gap-3">12px</SelectItem>
                <SelectItem value="gap-3.5">14px</SelectItem>
                <SelectItem value="gap-4">16px</SelectItem>
                <SelectItem value="gap-5">20px</SelectItem>
                <SelectItem value="gap-6">24px</SelectItem>
                <SelectItem value="gap-7">28px</SelectItem>
                <SelectItem value="gap-8">32px</SelectItem>
                <SelectItem value="gap-9">36px</SelectItem>
                <SelectItem value="gap-10">40px</SelectItem>
                <SelectItem value="gap-11">44px</SelectItem>
                <SelectItem value="gap-12">48px</SelectItem>
                <SelectItem value="gap-14">56px</SelectItem>
                <SelectItem value="gap-16">64px</SelectItem>
                <SelectItem value="gap-20">80px</SelectItem>
                <SelectItem value="gap-24">96px</SelectItem>
                <SelectItem value="gap-28">112px</SelectItem>
                <SelectItem value="gap-32">128px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="justifyContent">Main Axis Alignment</Label>
            <Select value={elementProps?.justifyContent || 'start'} onValueChange={(value) => onPropChange('justifyContent', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="between">Space Between</SelectItem>
                <SelectItem value="around">Space Around</SelectItem>
                <SelectItem value="evenly">Space Evenly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="alignItems">Cross Axis Alignment</Label>
            <Select value={elementProps?.alignItems || 'center'} onValueChange={(value) => onPropChange('alignItems', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="stretch">Stretch</SelectItem>
                <SelectItem value="baseline">Baseline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="wrap">Flex Wrap</Label>
            <Select value={elementProps?.wrap || 'nowrap'} onValueChange={(value) => onPropChange('wrap', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nowrap">No Wrap</SelectItem>
                <SelectItem value="wrap">Wrap</SelectItem>
                <SelectItem value="wrap-reverse">Wrap Reverse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Advanced Flex Properties */}
      <AccordionItem value="advanced">
        <AccordionTrigger className="text-sm font-medium">Advanced Flex</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="flexGrow">Flex Grow (for child items)</Label>
            <Select value={elementProps?.flexGrow || 'default'} onValueChange={(value) => onPropChange('flexGrow', value === 'default' ? '' : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="grow-0">No Growth (0)</SelectItem>
                <SelectItem value="grow">Grow (1)</SelectItem>
                <SelectItem value="grow-[2]">Grow 2x</SelectItem>
                <SelectItem value="grow-[3]">Grow 3x</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="flexShrink">Flex Shrink (for child items)</Label>
            <Select value={elementProps?.flexShrink || 'default'} onValueChange={(value) => onPropChange('flexShrink', value === 'default' ? '' : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="shrink-0">No Shrink (0)</SelectItem>
                <SelectItem value="shrink">Shrink (1)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="flexBasis">Flex Basis (initial size)</Label>
            <Select value={elementProps?.flexBasis || 'default'} onValueChange={(value) => onPropChange('flexBasis', value === 'default' ? '' : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Auto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Auto</SelectItem>
                <SelectItem value="basis-0">0</SelectItem>
                <SelectItem value="basis-1/2">50%</SelectItem>
                <SelectItem value="basis-1/3">33.33%</SelectItem>
                <SelectItem value="basis-2/3">66.66%</SelectItem>
                <SelectItem value="basis-1/4">25%</SelectItem>
                <SelectItem value="basis-3/4">75%</SelectItem>
                <SelectItem value="basis-full">100%</SelectItem>
                <SelectItem value="basis-[100px]">100px</SelectItem>
                <SelectItem value="basis-[200px]">200px</SelectItem>
                <SelectItem value="basis-[300px]">300px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="order">Flex Order</Label>
            <Select value={elementProps?.order || 'default'} onValueChange={(value) => onPropChange('order', value === 'default' ? '' : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="order-first">First (-9999)</SelectItem>
                <SelectItem value="order-last">Last (9999)</SelectItem>
                <SelectItem value="order-1">1</SelectItem>
                <SelectItem value="order-2">2</SelectItem>
                <SelectItem value="order-3">3</SelectItem>
                <SelectItem value="order-4">4</SelectItem>
                <SelectItem value="order-5">5</SelectItem>
                <SelectItem value="order-6">6</SelectItem>
                <SelectItem value="order-7">7</SelectItem>
                <SelectItem value="order-8">8</SelectItem>
                <SelectItem value="order-9">9</SelectItem>
                <SelectItem value="order-10">10</SelectItem>
                <SelectItem value="order-11">11</SelectItem>
                <SelectItem value="order-12">12</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Spacing Section */}
      <AccordionItem value="spacing">
        <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="padding">Padding</Label>
            <Select value={elementProps?.padding || 'p-4'} onValueChange={(value) => onPropChange('padding', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p-0">No Padding (0px)</SelectItem>
                <SelectItem value="p-px">1px</SelectItem>
                <SelectItem value="p-0.5">2px</SelectItem>
                <SelectItem value="p-1">4px</SelectItem>
                <SelectItem value="p-1.5">6px</SelectItem>
                <SelectItem value="p-2">8px</SelectItem>
                <SelectItem value="p-2.5">10px</SelectItem>
                <SelectItem value="p-3">12px</SelectItem>
                <SelectItem value="p-3.5">14px</SelectItem>
                <SelectItem value="p-4">16px</SelectItem>
                <SelectItem value="p-5">20px</SelectItem>
                <SelectItem value="p-6">24px</SelectItem>
                <SelectItem value="p-7">28px</SelectItem>
                <SelectItem value="p-8">32px</SelectItem>
                <SelectItem value="p-9">36px</SelectItem>
                <SelectItem value="p-10">40px</SelectItem>
                <SelectItem value="p-11">44px</SelectItem>
                <SelectItem value="p-12">48px</SelectItem>
                <SelectItem value="p-14">56px</SelectItem>
                <SelectItem value="p-16">64px</SelectItem>
                <SelectItem value="p-20">80px</SelectItem>
                <SelectItem value="p-24">96px</SelectItem>
                <SelectItem value="px-4">Horizontal 16px</SelectItem>
                <SelectItem value="py-4">Vertical 16px</SelectItem>
                <SelectItem value="px-6 py-4">H: 24px, V: 16px</SelectItem>
                <SelectItem value="px-8 py-6">H: 32px, V: 24px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="margin">Margin</Label>
            <Select value={elementProps?.margin || 'my-4'} onValueChange={(value) => onPropChange('margin', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="m-0">No Margin (0px)</SelectItem>
                <SelectItem value="m-px">1px All</SelectItem>
                <SelectItem value="m-0.5">2px All</SelectItem>
                <SelectItem value="m-1">4px All</SelectItem>
                <SelectItem value="m-2">8px All</SelectItem>
                <SelectItem value="m-3">12px All</SelectItem>
                <SelectItem value="m-4">16px All</SelectItem>
                <SelectItem value="m-5">20px All</SelectItem>
                <SelectItem value="m-6">24px All</SelectItem>
                <SelectItem value="m-8">32px All</SelectItem>
                <SelectItem value="m-10">40px All</SelectItem>
                <SelectItem value="m-12">48px All</SelectItem>
                <SelectItem value="mx-0">No Horizontal</SelectItem>
                <SelectItem value="mx-1">4px Horizontal</SelectItem>
                <SelectItem value="mx-2">8px Horizontal</SelectItem>
                <SelectItem value="mx-4">16px Horizontal</SelectItem>
                <SelectItem value="mx-6">24px Horizontal</SelectItem>
                <SelectItem value="mx-8">32px Horizontal</SelectItem>
                <SelectItem value="mx-auto">Auto Horizontal</SelectItem>
                <SelectItem value="my-0">No Vertical</SelectItem>
                <SelectItem value="my-1">4px Vertical</SelectItem>
                <SelectItem value="my-2">8px Vertical</SelectItem>
                <SelectItem value="my-4">16px Vertical</SelectItem>
                <SelectItem value="my-6">24px Vertical</SelectItem>
                <SelectItem value="my-8">32px Vertical</SelectItem>
                <SelectItem value="my-12">48px Vertical</SelectItem>
                <SelectItem value="mt-4">Top 16px</SelectItem>
                <SelectItem value="mb-4">Bottom 16px</SelectItem>
                <SelectItem value="ml-4">Left 16px</SelectItem>
                <SelectItem value="mr-4">Right 16px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="minHeight">Minimum Height</Label>
            <Select value={elementProps?.minHeight || 'min-h-[60px]'} onValueChange={(value) => onPropChange('minHeight', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="min-h-0">No Min Height</SelectItem>
                <SelectItem value="min-h-[20px]">20px</SelectItem>
                <SelectItem value="min-h-[30px]">30px</SelectItem>
                <SelectItem value="min-h-[40px]">40px</SelectItem>
                <SelectItem value="min-h-[50px]">50px</SelectItem>
                <SelectItem value="min-h-[60px]">60px</SelectItem>
                <SelectItem value="min-h-[80px]">80px</SelectItem>
                <SelectItem value="min-h-[100px]">100px</SelectItem>
                <SelectItem value="min-h-[120px]">120px</SelectItem>
                <SelectItem value="min-h-[150px]">150px</SelectItem>
                <SelectItem value="min-h-[200px]">200px</SelectItem>
                <SelectItem value="min-h-[250px]">250px</SelectItem>
                <SelectItem value="min-h-[300px]">300px</SelectItem>
                <SelectItem value="min-h-[400px]">400px</SelectItem>
                <SelectItem value="min-h-[500px]">500px</SelectItem>
                <SelectItem value="min-h-screen">Full Screen</SelectItem>
                <SelectItem value="min-h-[50vh]">50% Viewport</SelectItem>
                <SelectItem value="min-h-[75vh]">75% Viewport</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
