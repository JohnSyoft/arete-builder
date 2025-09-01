import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface HeadingPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function HeadingProperties({ elementProps, onPropChange }: HeadingPropertiesProps) {
  return (
    <div className="space-y-4">
      {/* Content Section */}
      <div>
        <Label htmlFor="text">Heading Text</Label>
        <Textarea
          id="text"
          value={elementProps?.text || ''}
          onChange={(e) => onPropChange('text', e.target.value)}
          placeholder="Enter heading text"
          className="mt-1"
          rows={2}
        />
      </div>
      
      <div>
        <Label htmlFor="level">Heading Level</Label>
        <Select value={elementProps?.level || 'h2'} onValueChange={(value) => onPropChange('level', value)}>
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
          </SelectContent>
        </Select>
      </div>

      <Accordion type="multiple" className="w-full">
        {/* Typography Section */}
        <AccordionItem value="typography">
          <AccordionTrigger className="text-sm font-medium">Typography</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="fontFamily">Font Family</Label>
              <Select value={elementProps?.fontFamily || 'default'} onValueChange={(value) => onPropChange('fontFamily', value === 'default' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="font-sans">Sans Serif</SelectItem>
                  <SelectItem value="font-serif">Serif</SelectItem>
                  <SelectItem value="font-mono">Monospace</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fontSize">Font Size</Label>
              <Select value={elementProps?.fontSize || 'text-2xl'} onValueChange={(value) => onPropChange('fontSize', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-xs">Extra Small (12px)</SelectItem>
                  <SelectItem value="text-sm">Small (14px)</SelectItem>
                  <SelectItem value="text-base">Base (16px)</SelectItem>
                  <SelectItem value="text-lg">Large (18px)</SelectItem>
                  <SelectItem value="text-xl">Extra Large (20px)</SelectItem>
                  <SelectItem value="text-2xl">2X Large (24px)</SelectItem>
                  <SelectItem value="text-3xl">3X Large (30px)</SelectItem>
                  <SelectItem value="text-4xl">4X Large (36px)</SelectItem>
                  <SelectItem value="text-5xl">5X Large (48px)</SelectItem>
                  <SelectItem value="text-6xl">6X Large (60px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fontWeight">Font Weight</Label>
              <Select value={elementProps?.fontWeight || 'font-semibold'} onValueChange={(value) => onPropChange('fontWeight', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="font-thin">Thin (100)</SelectItem>
                  <SelectItem value="font-light">Light (300)</SelectItem>
                  <SelectItem value="font-normal">Normal (400)</SelectItem>
                  <SelectItem value="font-medium">Medium (500)</SelectItem>
                  <SelectItem value="font-semibold">Semibold (600)</SelectItem>
                  <SelectItem value="font-bold">Bold (700)</SelectItem>
                  <SelectItem value="font-extrabold">Extra Bold (800)</SelectItem>
                  <SelectItem value="font-black">Black (900)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="textAlign">Text Alignment</Label>
              <Select value={elementProps?.textAlign || 'text-left'} onValueChange={(value) => onPropChange('textAlign', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-left">Left</SelectItem>
                  <SelectItem value="text-center">Center</SelectItem>
                  <SelectItem value="text-right">Right</SelectItem>
                  <SelectItem value="text-justify">Justify</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="lineHeight">Line Height</Label>
              <Select value={elementProps?.lineHeight || 'leading-normal'} onValueChange={(value) => onPropChange('lineHeight', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leading-none">None (1)</SelectItem>
                  <SelectItem value="leading-tight">Tight (1.25)</SelectItem>
                  <SelectItem value="leading-snug">Snug (1.375)</SelectItem>
                  <SelectItem value="leading-normal">Normal (1.5)</SelectItem>
                  <SelectItem value="leading-relaxed">Relaxed (1.625)</SelectItem>
                  <SelectItem value="leading-loose">Loose (2)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="letterSpacing">Letter Spacing</Label>
              <Select value={elementProps?.letterSpacing || 'tracking-normal'} onValueChange={(value) => onPropChange('letterSpacing', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tracking-tighter">Tighter (-0.05em)</SelectItem>
                  <SelectItem value="tracking-tight">Tight (-0.025em)</SelectItem>
                  <SelectItem value="tracking-normal">Normal (0em)</SelectItem>
                  <SelectItem value="tracking-wide">Wide (0.025em)</SelectItem>
                  <SelectItem value="tracking-wider">Wider (0.05em)</SelectItem>
                  <SelectItem value="tracking-widest">Widest (0.1em)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="textTransform">Text Transform</Label>
              <Select value={elementProps?.textTransform || 'normal-case'} onValueChange={(value) => onPropChange('textTransform', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal-case">Normal</SelectItem>
                  <SelectItem value="uppercase">Uppercase</SelectItem>
                  <SelectItem value="lowercase">Lowercase</SelectItem>
                  <SelectItem value="capitalize">Capitalize</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors Section */}
        <AccordionItem value="colors">
          <AccordionTrigger className="text-sm font-medium">Colors</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="textColor">Text Color</Label>
              <Select value={elementProps?.textColor || 'text-foreground'} onValueChange={(value) => onPropChange('textColor', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-foreground">Default</SelectItem>
                  <SelectItem value="text-primary">Primary</SelectItem>
                  <SelectItem value="text-secondary">Secondary</SelectItem>
                  <SelectItem value="text-muted-foreground">Muted</SelectItem>
                  <SelectItem value="text-accent-foreground">Accent</SelectItem>
                  <SelectItem value="text-destructive">Destructive</SelectItem>
                  <SelectItem value="text-black">Black</SelectItem>
                  <SelectItem value="text-white">White</SelectItem>
                  <SelectItem value="text-gray-500">Gray</SelectItem>
                  <SelectItem value="text-red-500">Red</SelectItem>
                  <SelectItem value="text-blue-500">Blue</SelectItem>
                  <SelectItem value="text-green-500">Green</SelectItem>
                  <SelectItem value="text-yellow-500">Yellow</SelectItem>
                  <SelectItem value="text-purple-500">Purple</SelectItem>
                  <SelectItem value="text-pink-500">Pink</SelectItem>
                  <SelectItem value="text-indigo-500">Indigo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Select value={elementProps?.backgroundColor || 'bg-transparent'} onValueChange={(value) => onPropChange('backgroundColor', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bg-transparent">Transparent</SelectItem>
                  <SelectItem value="bg-background">Background</SelectItem>
                  <SelectItem value="bg-card">Card</SelectItem>
                  <SelectItem value="bg-primary">Primary</SelectItem>
                  <SelectItem value="bg-secondary">Secondary</SelectItem>
                  <SelectItem value="bg-muted">Muted</SelectItem>
                  <SelectItem value="bg-accent">Accent</SelectItem>
                  <SelectItem value="bg-destructive">Destructive</SelectItem>
                  <SelectItem value="bg-black">Black</SelectItem>
                  <SelectItem value="bg-white">White</SelectItem>
                  <SelectItem value="bg-gray-100">Light Gray</SelectItem>
                  <SelectItem value="bg-gray-900">Dark Gray</SelectItem>
                  <SelectItem value="bg-red-100">Light Red</SelectItem>
                  <SelectItem value="bg-blue-100">Light Blue</SelectItem>
                  <SelectItem value="bg-green-100">Light Green</SelectItem>
                  <SelectItem value="bg-yellow-100">Light Yellow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Spacing & Dimensions Section */}
        <AccordionItem value="spacing">
          <AccordionTrigger className="text-sm font-medium">Spacing & Dimensions</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="width">Width</Label>
              <Select
                value={elementProps?.width || "w-auto"}
                onValueChange={(value) =>
                  onPropChange("width", value === "auto" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="w-full">Full Width</SelectItem>
                  <SelectItem value="w-1/2">Half Width</SelectItem>
                  <SelectItem value="w-1/3">One Third</SelectItem>
                  <SelectItem value="w-2/3">Two Thirds</SelectItem>
                  <SelectItem value="w-1/4">One Quarter</SelectItem>
                  <SelectItem value="w-3/4">Three Quarters</SelectItem>
                  <SelectItem value="w-fit">Fit Content</SelectItem>
                  <SelectItem value="w-48">Fixed (192px)</SelectItem>
                  <SelectItem value="w-64">Fixed (256px)</SelectItem>
                  <SelectItem value="w-80">Fixed (320px)</SelectItem>
                  <SelectItem value="w-96">Fixed (384px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="height">Height</Label>
              <Select
                value={elementProps?.height || "h-auto"}
                onValueChange={(value) =>
                  onPropChange("height", value === "auto" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="h-full">Full Height</SelectItem>
                  <SelectItem value="h-screen">Screen Height</SelectItem>
                  <SelectItem value="h-fit">Fit Content</SelectItem>
                  <SelectItem value="h-16">Fixed (64px)</SelectItem>
                  <SelectItem value="h-20">Fixed (80px)</SelectItem>
                  <SelectItem value="h-24">Fixed (96px)</SelectItem>
                  <SelectItem value="h-32">Fixed (128px)</SelectItem>
                  <SelectItem value="h-40">Fixed (160px)</SelectItem>
                  <SelectItem value="h-48">Fixed (192px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="margin">Margin</Label>
              <Select
                value={elementProps?.margin || "my-4"}
                onValueChange={(value) =>
                  onPropChange("margin", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="m-1">All Sides (4px)</SelectItem>
                  <SelectItem value="m-2">All Sides (8px)</SelectItem>
                  <SelectItem value="m-4">All Sides (16px)</SelectItem>
                  <SelectItem value="m-6">All Sides (24px)</SelectItem>
                  <SelectItem value="m-8">All Sides (32px)</SelectItem>
                  <SelectItem value="my-1">Top & Bottom (4px)</SelectItem>
                  <SelectItem value="my-2">Top & Bottom (8px)</SelectItem>
                  <SelectItem value="my-4">Top & Bottom (16px)</SelectItem>
                  <SelectItem value="my-6">Top & Bottom (24px)</SelectItem>
                  <SelectItem value="my-8">Top & Bottom (32px)</SelectItem>
                  <SelectItem value="mx-1">Left & Right (4px)</SelectItem>
                  <SelectItem value="mx-2">Left & Right (8px)</SelectItem>
                  <SelectItem value="mx-4">Left & Right (16px)</SelectItem>
                  <SelectItem value="mx-auto">Horizontal Center</SelectItem>
                  <SelectItem value="mt-4">Top (16px)</SelectItem>
                  <SelectItem value="mb-4">Bottom (16px)</SelectItem>
                  <SelectItem value="ml-4">Left (16px)</SelectItem>
                  <SelectItem value="mr-4">Right (16px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="padding">Padding</Label>
              <Select
                value={elementProps?.padding || "none"}
                onValueChange={(value) =>
                  onPropChange("padding", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="p-1">All Sides (4px)</SelectItem>
                  <SelectItem value="p-2">All Sides (8px)</SelectItem>
                  <SelectItem value="p-4">All Sides (16px)</SelectItem>
                  <SelectItem value="p-6">All Sides (24px)</SelectItem>
                  <SelectItem value="p-8">All Sides (32px)</SelectItem>
                  <SelectItem value="py-1 px-2">Vertical 4px, Horizontal 8px</SelectItem>
                  <SelectItem value="py-2 px-4">Vertical 8px, Horizontal 16px</SelectItem>
                  <SelectItem value="py-3 px-6">Vertical 12px, Horizontal 24px</SelectItem>
                  <SelectItem value="py-4 px-8">Vertical 16px, Horizontal 32px</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Effects Section */}
        <AccordionItem value="effects">
          <AccordionTrigger className="text-sm font-medium">Effects</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="shadow">Shadow</Label>
              <Select value={elementProps?.shadow || 'shadow-none'} onValueChange={(value) => onPropChange('shadow', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shadow-none">None</SelectItem>
                  <SelectItem value="shadow-sm">Small</SelectItem>
                  <SelectItem value="shadow">Default</SelectItem>
                  <SelectItem value="shadow-md">Medium</SelectItem>
                  <SelectItem value="shadow-lg">Large</SelectItem>
                  <SelectItem value="shadow-xl">Extra Large</SelectItem>
                  <SelectItem value="shadow-2xl">2X Large</SelectItem>
                  <SelectItem value="shadow-inner">Inner</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Select value={elementProps?.borderRadius || 'rounded-none'} onValueChange={(value) => onPropChange('borderRadius', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rounded-none">None</SelectItem>
                  <SelectItem value="rounded-sm">Small</SelectItem>
                  <SelectItem value="rounded">Default</SelectItem>
                  <SelectItem value="rounded-md">Medium</SelectItem>
                  <SelectItem value="rounded-lg">Large</SelectItem>
                  <SelectItem value="rounded-xl">Extra Large</SelectItem>
                  <SelectItem value="rounded-2xl">2X Large</SelectItem>
                  <SelectItem value="rounded-3xl">3X Large</SelectItem>
                  <SelectItem value="rounded-full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="border">Border</Label>
              <Select value={elementProps?.border || 'border-none'} onValueChange={(value) => onPropChange('border', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="border-none">None</SelectItem>
                  <SelectItem value="border">Default</SelectItem>
                  <SelectItem value="border-2">Medium (2px)</SelectItem>
                  <SelectItem value="border-4">Thick (4px)</SelectItem>
                  <SelectItem value="border-dashed">Dashed</SelectItem>
                  <SelectItem value="border-dotted">Dotted</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderColor">Border Color</Label>
              <Select value={elementProps?.borderColor || 'border-border'} onValueChange={(value) => onPropChange('borderColor', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="border-border">Default</SelectItem>
                  <SelectItem value="border-primary">Primary</SelectItem>
                  <SelectItem value="border-secondary">Secondary</SelectItem>
                  <SelectItem value="border-muted">Muted</SelectItem>
                  <SelectItem value="border-accent">Accent</SelectItem>
                  <SelectItem value="border-destructive">Destructive</SelectItem>
                  <SelectItem value="border-black">Black</SelectItem>
                  <SelectItem value="border-white">White</SelectItem>
                  <SelectItem value="border-gray-300">Gray</SelectItem>
                  <SelectItem value="border-red-300">Red</SelectItem>
                  <SelectItem value="border-blue-300">Blue</SelectItem>
                  <SelectItem value="border-green-300">Green</SelectItem>
                  <SelectItem value="border-yellow-300">Yellow</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="opacity">Opacity</Label>
              <Select value={elementProps?.opacity || 'opacity-100'} onValueChange={(value) => onPropChange('opacity', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="opacity-0">0%</SelectItem>
                  <SelectItem value="opacity-25">25%</SelectItem>
                  <SelectItem value="opacity-50">50%</SelectItem>
                  <SelectItem value="opacity-75">75%</SelectItem>
                  <SelectItem value="opacity-100">100%</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
