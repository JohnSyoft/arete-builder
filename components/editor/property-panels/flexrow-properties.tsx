import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FlexRowPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function FlexRowProperties({ elementProps, onPropChange }: FlexRowPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="itemCount">Number of Items</Label>
        <Select value={elementProps?.itemCount?.toString() || '3'} onValueChange={(value) => onPropChange('itemCount', parseInt(value))}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Item</SelectItem>
            <SelectItem value="2">2 Items</SelectItem>
            <SelectItem value="3">3 Items</SelectItem>
            <SelectItem value="4">4 Items</SelectItem>
            <SelectItem value="5">5 Items</SelectItem>
            <SelectItem value="6">6 Items</SelectItem>
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
            <SelectItem value="gap-0">No Gap</SelectItem>
            <SelectItem value="gap-2">Small (8px)</SelectItem>
            <SelectItem value="gap-4">Medium (16px)</SelectItem>
            <SelectItem value="gap-6">Large (24px)</SelectItem>
            <SelectItem value="gap-8">Extra Large (32px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="justifyContent">Horizontal Distribution</Label>
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
        <Label htmlFor="alignItems">Vertical Alignment</Label>
        <Select value={elementProps?.alignItems || 'center'} onValueChange={(value) => onPropChange('alignItems', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="start">Top</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="end">Bottom</SelectItem>
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

      <div>
        <Label htmlFor="minHeight">Minimum Height</Label>
        <Select value={elementProps?.minHeight || 'min-h-[60px]'} onValueChange={(value) => onPropChange('minHeight', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="min-h-[40px]">Small (40px)</SelectItem>
            <SelectItem value="min-h-[60px]">Medium (60px)</SelectItem>
            <SelectItem value="min-h-[80px]">Large (80px)</SelectItem>
            <SelectItem value="min-h-[100px]">Extra Large (100px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="padding">Padding</Label>
        <Select value={elementProps?.padding || 'p-4'} onValueChange={(value) => onPropChange('padding', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="p-0">None</SelectItem>
            <SelectItem value="p-2">Small (8px)</SelectItem>
            <SelectItem value="p-4">Medium (16px)</SelectItem>
            <SelectItem value="p-6">Large (24px)</SelectItem>
            <SelectItem value="p-8">Extra Large (32px)</SelectItem>
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
            <SelectItem value="my-0">None</SelectItem>
            <SelectItem value="my-2">Small (8px)</SelectItem>
            <SelectItem value="my-4">Medium (16px)</SelectItem>
            <SelectItem value="my-6">Large (24px)</SelectItem>
            <SelectItem value="my-8">Extra Large (32px)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
