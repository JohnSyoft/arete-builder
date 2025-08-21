export const Custom = () => {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Custom Code Block</h2>
          <p className="text-muted-foreground">
            Add your custom HTML, CSS, or JavaScript code here. This component supports Tailwind CSS classes.
          </p>
        </div>

        {/* Code Editor Area */}
        <div className="bg-muted/30 p-6 rounded-lg border border-border mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Code Editor</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">HTML</button>
              <button className="px-3 py-1 text-sm border border-border rounded hover:bg-muted/50">CSS</button>
              <button className="px-3 py-1 text-sm border border-border rounded hover:bg-muted/50">JS</button>
            </div>
          </div>

          <div className="bg-background p-4 rounded border border-border font-mono text-sm">
            <div className="text-muted-foreground mb-2">{"<!-- Add your custom code here -->"}</div>
            <div className="text-blue-600 dark:text-blue-400">
              {'<div class="flex items-center justify-center p-8">'}
            </div>
            <div className="text-green-600 dark:text-green-400 ml-4">
              {'<h1 class="text-3xl font-bold text-primary">'}
            </div>
            <div className="text-foreground ml-8">Your Custom Content</div>
            <div className="text-green-600 dark:text-green-400 ml-4">{"</h1>"}</div>
            <div className="text-blue-600 dark:text-blue-400">{"</div>"}</div>
          </div>
        </div>

        {/* Preview Area */}
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h3 className="font-semibold mb-4">Preview</h3>
          <div className="bg-background p-8 rounded border border-border">
            {/* Custom Content Preview */}
            <div className="flex items-center justify-center p-8">
              <h1 className="text-3xl font-bold text-primary">Your Custom Content</h1>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Usage Instructions</h4>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Use Tailwind CSS classes for styling</li>
            <li>• Ensure your code is responsive and accessible</li>
            <li>• Test your custom code in the preview area</li>
            <li>• Avoid inline styles when possible</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
