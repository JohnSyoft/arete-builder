"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

interface TemplateConverterProps {}

export function TemplateConverter({}: TemplateConverterProps) {
  const [htmlInput, setHtmlInput] = useState('')
  const [componentName, setComponentName] = useState('')
  const [convertedCode, setConvertedCode] = useState('')
  const [preview, setPreview] = useState('')
  const [isConverting, setIsConverting] = useState(false)

  const convertTemplate = async () => {
    setIsConverting(true)
    try {
      // Call conversion API or function
      const response = await fetch('/api/convert-template', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          html: htmlInput, 
          componentName,
          type: 'hero' // Could be dynamic
        })
      })
      
      const result = await response.json()
      setConvertedCode(result.code)
      setPreview(result.preview)
    } catch (error) {
      console.error('Conversion failed:', error)
    } finally {
      setIsConverting(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedCode)
  }

  const downloadFile = () => {
    const blob = new Blob([convertedCode], { type: 'text/typescript' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${componentName}.tsx`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Tailwind to CraftJS Converter</h1>
        <p className="text-muted-foreground">
          Convert your Tailwind HTML templates into CraftJS-compatible components
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Input Template</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Component Name</label>
              <Input
                placeholder="Hero6, Features3, etc."
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Tailwind HTML</label>
              <Textarea
                placeholder="Paste your Tailwind HTML here..."
                value={htmlInput}
                onChange={(e) => setHtmlInput(e.target.value)}
                rows={15}
                className="font-mono text-sm"
              />
            </div>

            <Button 
              onClick={convertTemplate} 
              disabled={!htmlInput || !componentName || isConverting}
              className="w-full"
            >
              {isConverting ? 'Converting...' : 'Convert to CraftJS'}
            </Button>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Generated Component</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={copyToClipboard}>
                Copy
              </Button>
              <Button size="sm" variant="outline" onClick={downloadFile}>
                Download
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="code">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="code">Generated Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="code" className="mt-4">
                <Textarea
                  value={convertedCode}
                  readOnly
                  rows={15}
                  className="font-mono text-sm"
                  placeholder="Converted code will appear here..."
                />
              </TabsContent>
              
              <TabsContent value="preview" className="mt-4">
                <div 
                  className="border rounded-lg p-4 min-h-[400px] bg-white"
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Conversion Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Text Elements</h4>
              <ul className="text-sm space-y-1">
                <li><Badge variant="secondary">h1-h6</Badge> → CraftText</li>
                <li><Badge variant="secondary">p, span</Badge> → CraftText</li>
                <li><Badge variant="secondary">Classes</Badge> → Props</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Interactive Elements</h4>
              <ul className="text-sm space-y-1">
                <li><Badge variant="secondary">button</Badge> → CraftButton</li>
                <li><Badge variant="secondary">a</Badge> → CraftButton</li>
                <li><Badge variant="secondary">input</Badge> → CraftInput</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Structure</h4>
              <ul className="text-sm space-y-1">
                <li><Badge variant="secondary">div</Badge> → Element wrapper</li>
                <li><Badge variant="secondary">section</Badge> → Section component</li>
                <li><Badge variant="secondary">Auto IDs</Badge> → Generated</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TemplateConverter
