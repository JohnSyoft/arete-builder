import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VideoPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function VideoProperties({ elementProps, onPropChange }: VideoPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="videoSrc">Video URL</Label>
        <Input
          id="videoSrc"
          value={elementProps?.src || ''}
          onChange={(e) => onPropChange('src', e.target.value)}
          placeholder="https://example.com/video.mp4 or YouTube/Vimeo URL"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="videoPoster">Poster Image URL</Label>
        <Input
          id="videoPoster"
          value={elementProps?.poster || ''}
          onChange={(e) => onPropChange('poster', e.target.value)}
          placeholder="https://example.com/poster.jpg"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="videoWidth">Width</Label>
        <Select value={elementProps?.width || 'w-full'} onValueChange={(value) => onPropChange('width', value)}>
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
        <Select value={elementProps?.height || 'h-64'} onValueChange={(value) => onPropChange('height', value)}>
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
              onChange={(e) => onPropChange('controls', e.target.checked)}
            />
            <span className="text-sm">Show Controls</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.autoplay || false}
              onChange={(e) => onPropChange('autoplay', e.target.checked)}
            />
            <span className="text-sm">Autoplay</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.loop || false}
              onChange={(e) => onPropChange('loop', e.target.checked)}
            />
            <span className="text-sm">Loop</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={elementProps?.muted || false}
              onChange={(e) => onPropChange('muted', e.target.checked)}
            />
            <span className="text-sm">Muted</span>
          </label>
        </div>
      </div>
    </div>
  )
}
