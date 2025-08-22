import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MapPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function MapProperties({ elementProps, onPropChange }: MapPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="mapAddress">Address or Location</Label>
        <Input
          id="mapAddress"
          value={elementProps?.address || ''}
          onChange={(e) => onPropChange('address', e.target.value)}
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
            onChange={(e) => onPropChange('lat', parseFloat(e.target.value))}
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
            onChange={(e) => onPropChange('lng', parseFloat(e.target.value))}
            placeholder="-74.0060"
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="mapZoom">Zoom Level</Label>
        <Select value={elementProps?.zoom?.toString() || '15'} onValueChange={(value) => onPropChange('zoom', parseInt(value))}>
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
        <Select value={elementProps?.mapType || 'roadmap'} onValueChange={(value) => onPropChange('mapType', value)}>
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
            onChange={(e) => onPropChange('showMarker', e.target.checked)}
          />
          <span className="text-sm">Show Marker</span>
        </label>
      </div>
    </div>
  )
}
