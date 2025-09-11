import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useProjectPages } from "@/hooks/usePages"
import { useParams } from "next/navigation"

interface LinkPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function LinkProperties({ elementProps, onPropChange }: LinkPropertiesProps) {
  const params = useParams()
  const projectId = params?.projectId as string
  
  // Fetch project pages for navigation dropdown
  const { data: pagesResponse } = useProjectPages(projectId, !!projectId)
  const pages = pagesResponse?.data?.pages || []
  
  // Filter out pages that are CMS detail pages (contain :id)
  const navigablePages = pages.filter((page: any) => 
    !page.slug?.includes(':id') && page.status === 'published'
  )

  const navigationType = elementProps?.navigationType || "url"

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="linkText">Link Text</Label>
        <Input
          id="linkText"
          value={elementProps?.text || ''}
          onChange={(e) => onPropChange('text', e.target.value)}
          placeholder="Click here"
          className="mt-1"
        />
      </div>

      {/* Navigation Type Selection */}
      <div>
        <Label htmlFor="navigationType">Navigation Type</Label>
        <Select
          value={navigationType}
          onValueChange={(value) => onPropChange("navigationType", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="page">Navigate to Page</SelectItem>
            <SelectItem value="url">External URL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Page Selection (for internal navigation) */}
      {navigationType === "page" && (
        <div>
          <Label htmlFor="pageSlug">Select Page</Label>
          <Select
            value={elementProps?.pageSlug || ""}
            onValueChange={(value) => onPropChange("pageSlug", value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choose a page..." />
            </SelectTrigger>
            <SelectContent>
              {navigablePages.map((page: any) => (
                <SelectItem key={page._id} value={page.slug}>
                  {page.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* URL Input (for external navigation) */}
      {navigationType === "url" && (
        <div>
          <Label htmlFor="linkHref">External URL</Label>
          <Input
            id="linkHref"
            value={elementProps?.href || ''}
            onChange={(e) => onPropChange('href', e.target.value)}
            placeholder="https://example.com"
            className="mt-1"
          />
        </div>
      )}

      <div>
        <Label htmlFor="linkTarget">Open In</Label>
        <Select value={elementProps?.target || '_self'} onValueChange={(value) => onPropChange('target', value)}>
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
        <Select value={elementProps?.color || 'text-blue-600'} onValueChange={(value) => onPropChange('color', value)}>
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
        <Select value={elementProps?.textDecoration || 'underline'} onValueChange={(value) => onPropChange('textDecoration', value)}>
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
}
