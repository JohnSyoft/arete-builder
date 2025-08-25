"use client"

import { useRouter } from "next/navigation"
import { useEditor } from "@craftjs/core"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Save, Eye, Undo, Redo, Smartphone, Monitor, Tablet, Trash2, ChevronDown, Plus, Settings, ArrowLeft } from "@/components/icons"
import { useViewportStore, type ViewportType } from "@/lib/store/viewport-store"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface Page {
  id: string
  name: string
  slug: string
}

interface EditorToolbarProps {
  onSave: () => void
  onPreview: () => void
  projectName: string
  pageName: string
  pages?: Page[]
  currentPageSlug?: string
  onPageChange?: (pageSlug: string) => void
  onAddPage?: () => void
  onEditPage?: () => void
}

export function EditorToolbar({
  onSave,
  onPreview,
  projectName,
  pageName,
  pages = [],
  currentPageSlug,
  onPageChange,
  onAddPage,
  onEditPage,
}: EditorToolbarProps) {
  const router = useRouter()
  
  const { actions, query, canUndo, canRedo, selected } = useEditor((state, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
    selected: state.events.selected,
  }))

  const { currentViewport, setViewport } = useViewportStore()
  const { openPanel } = usePropertiesPanelStore()

  const handleBackToDashboard = () => {
    router.push('/dashboard')
  }

  const handleDelete = () => {
    if (selected.size > 0) {
      selected.forEach((nodeId) => {
        actions.delete(nodeId)
      })
    }
  }

  const handleViewportChange = (viewport: ViewportType) => {
    setViewport(viewport)
  }

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        {/* Back to Dashboard Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleBackToDashboard}
          className="text-gray-600 hover:text-gray-900"
          title="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6" />
        
        <div>
          <h1 className="font-semibold text-gray-900">{projectName}</h1>
          <div className="flex items-center space-x-2">
            {pages.length > 0 && onPageChange ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-sm text-gray-500 hover:text-gray-700">
                    {pageName}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {pages.map((page) => (
                    <DropdownMenuItem
                      key={page.id}
                      onClick={() => onPageChange(page.slug)}
                      className={currentPageSlug === page.slug ? "bg-gray-100" : ""}
                    >
                      {page.name}
                      {currentPageSlug === page.slug && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          Current
                        </Badge>
                      )}
                    </DropdownMenuItem>
                  ))}
                  {onAddPage && (
                    <>
                      <Separator className="my-1" />
                      <DropdownMenuItem onClick={onAddPage}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Page
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <span className="text-sm text-gray-500">{pageName}</span>
            )}
            {onEditPage && (
              <Button variant="ghost" size="sm" onClick={onEditPage} className="text-xs h-6 px-2">
                <Settings className="w-3 h-3 mr-1" />
                Edit
              </Button>
            )}
            <Badge variant="secondary" className="text-xs">
              Draft
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* History Controls */}
        <Button variant="ghost" size="sm" onClick={() => actions.history.undo()} disabled={!canUndo}>
          <Undo className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => actions.history.redo()} disabled={!canRedo}>
          <Redo className="w-4 h-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Viewport Controls */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 w-8 p-0 ${currentViewport === 'mobile' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => handleViewportChange('mobile')}
            title="Mobile View (375px)"
          >
            <Smartphone className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 w-8 p-0 ${currentViewport === 'tablet' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => handleViewportChange('tablet')}
            title="Tablet View (768px)"
          >
            <Tablet className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 w-8 p-0 ${currentViewport === 'desktop' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => handleViewportChange('desktop')}
            title="Desktop View (100%)"
          >
            <Monitor className="w-4 h-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Delete Button */}
        {selected.size > 0 && (
          <>
            <Button variant="ghost" size="sm" onClick={handleDelete} className="text-red-600 hover:text-red-700">
              <Trash2 className="w-4 h-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
          </>
        )}

        {/* Test Properties Panel Button */}
        {/* <Button 
          variant="outline" 
          size="sm" 
          onClick={() => openPanel('text', { text: 'Test text', tagName: 'p' }, 'test-id', () => {})}
          className="bg-yellow-100 hover:bg-yellow-200"
        >
          Test Panel
        </Button> */}

        <Separator orientation="vertical" className="h-6" />

        {/* Action Buttons */}
        <Button variant="outline" onClick={onPreview}>
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <Button onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  )
}
