import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TextPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function TextProperties({ elementProps, onPropChange }: TextPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Text Content</Label>
        <Textarea
          id="text"
          value={elementProps?.text || ''}
          onChange={(e) => onPropChange('text', e.target.value)}
          placeholder="Enter text content"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="tagName">Tag Type</Label>
        <Select value={elementProps?.tagName || 'p'} onValueChange={(value) => onPropChange('tagName', value)}>
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
        <Select value={elementProps?.fontSize || 'text-base'} onValueChange={(value) => onPropChange('fontSize', value)}>
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
        <Select value={elementProps?.fontWeight || 'font-normal'} onValueChange={(value) => onPropChange('fontWeight', value)}>
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
        <Select value={elementProps?.color || 'text-gray-900'} onValueChange={(value) => onPropChange('color', value)}>
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
}
