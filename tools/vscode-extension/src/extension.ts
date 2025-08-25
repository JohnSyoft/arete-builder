import * as vscode from 'vscode'
import * as fs from 'fs'
import * as path from 'path'
import { TailwindToCraftConverter } from '../template-converter'

export function activate(context: vscode.ExtensionContext) {
  console.log('Arete Template Converter is now active!')

  // Convert selected HTML to CraftJS component
  let convertTemplate = vscode.commands.registerCommand('arete.convertTemplate', async () => {
    const editor = vscode.window.activeTextEditor
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found')
      return
    }

    try {
      // Get selected text or entire document
      const selection = editor.selection
      const html = selection.isEmpty 
        ? editor.document.getText() 
        : editor.document.getText(selection)

      if (!html.trim()) {
        vscode.window.showErrorMessage('No HTML content found')
        return
      }

      // Get component name from user
      const componentName = await vscode.window.showInputBox({
        prompt: 'Enter component name (e.g., Hero6, Features3)',
        validateInput: (value) => {
          if (!value || !/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Component name must start with uppercase letter and contain only letters and numbers'
          }
          return null
        }
      })

      if (!componentName) return

      // Get category
      const category = await vscode.window.showQuickPick([
        'Hero', 'Features', 'CTA', 'Pricing', 'Blog', 'Products', 'Team', 'Contact', 'Other'
      ], {
        placeHolder: 'Select component category'
      })

      if (!category) return

      // Convert HTML to CraftJS
      const converter = new TailwindToCraftConverter()
      const convertedCode = converter.generateComponentTemplate(html, componentName, category)

      // Get output directory from settings
      const config = vscode.workspace.getConfiguration('arete')
      const outputDir = config.get<string>('outputDirectory', './components/blocks')
      const autoUpdate = config.get<boolean>('autoUpdateRegistry', true)

      // Create output file path
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0]
      if (!workspaceFolder) {
        vscode.window.showErrorMessage('No workspace folder found')
        return
      }

      const outputPath = path.join(
        workspaceFolder.uri.fsPath,
        outputDir,
        category,
        `${componentName}.tsx`
      )

      // Ensure directory exists
      const outputDirPath = path.dirname(outputPath)
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true })
      }

      // Write file
      fs.writeFileSync(outputPath, convertedCode)

      // Open the new file
      const doc = await vscode.workspace.openTextDocument(outputPath)
      await vscode.window.showTextDocument(doc)

      // Update component registry if enabled
      if (autoUpdate) {
        await updateComponentRegistry(componentName, category, outputPath)
      }

      vscode.window.showInformationMessage(`Successfully created ${componentName} component!`)

    } catch (error) {
      vscode.window.showErrorMessage(`Conversion failed: ${error}`)
    }
  })

  // Generate component from template
  let generateFromTemplate = vscode.commands.registerCommand('arete.generateFromTemplate', async () => {
    const templates = ['Hero', 'Features', 'CTA', 'Pricing', 'Blog', 'Team', 'Contact']
    
    const templateType = await vscode.window.showQuickPick(templates, {
      placeHolder: 'Select template type'
    })

    if (!templateType) return

    const componentName = await vscode.window.showInputBox({
      prompt: `Enter ${templateType} component name`,
      value: `${templateType}6`
    })

    if (!componentName) return

    try {
      // Generate from template (implementation would use ComponentTemplateGenerator)
      const generatedCode = generateComponentFromTemplate(templateType, componentName)
      
      // Save and open file
      const config = vscode.workspace.getConfiguration('arete')
      const outputDir = config.get<string>('outputDirectory', './components/blocks')
      
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0]
      if (!workspaceFolder) return

      const outputPath = path.join(
        workspaceFolder.uri.fsPath,
        outputDir,
        templateType,
        `${componentName}.tsx`
      )

      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      fs.writeFileSync(outputPath, generatedCode)

      const doc = await vscode.workspace.openTextDocument(outputPath)
      await vscode.window.showTextDocument(doc)

      vscode.window.showInformationMessage(`Generated ${componentName} from template!`)

    } catch (error) {
      vscode.window.showErrorMessage(`Generation failed: ${error}`)
    }
  })

  // Import from template library
  let importFromLibrary = vscode.commands.registerCommand('arete.importFromLibrary', async () => {
    const libraries = ['TailwindUI', 'HyperUI', 'Headless UI', 'Tailwind Elements']
    
    const library = await vscode.window.showQuickPick(libraries, {
      placeHolder: 'Select template library'
    })

    if (!library) return

    const categories = ['Heroes', 'Features', 'CTAs', 'Pricing', 'Forms', 'Navigation']
    
    const category = await vscode.window.showQuickPick(categories, {
      placeHolder: 'Select category'
    })

    if (!category) return

    // Show progress
    vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Importing from ${library}`,
      cancellable: true
    }, async (progress) => {
      try {
        progress.report({ increment: 25, message: 'Fetching templates...' })
        
        // Fetch templates (implementation would use TemplateLibraryIntegration)
        const templates = await fetchTemplatesFromLibrary(library, category)
        
        progress.report({ increment: 50, message: 'Converting templates...' })
        
        // Convert and save templates
        const imported = await importTemplates(templates)
        
        progress.report({ increment: 100, message: 'Complete!' })
        
        vscode.window.showInformationMessage(`Imported ${imported.length} templates from ${library}`)

      } catch (error) {
        vscode.window.showErrorMessage(`Import failed: ${error}`)
      }
    })
  })

  // Preview component
  let previewComponent = vscode.commands.registerCommand('arete.previewComponent', async () => {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const componentCode = editor.document.getText()
    
    // Create preview panel
    const panel = vscode.window.createWebviewPanel(
      'aretePreview',
      'Component Preview',
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
        localResourceRoots: []
      }
    )

    // Generate preview HTML
    const previewHtml = generatePreviewHtml(componentCode)
    panel.webview.html = previewHtml
  })

  context.subscriptions.push(
    convertTemplate,
    generateFromTemplate,
    importFromLibrary,
    previewComponent
  )
}

// Helper functions
async function updateComponentRegistry(componentName: string, category: string, filePath: string) {
  // Update craft-components.tsx
  const craftComponentsPath = path.join(
    vscode.workspace.workspaceFolders![0].uri.fsPath,
    'components/editor/craft-components.tsx'
  )

  if (fs.existsSync(craftComponentsPath)) {
    let content = fs.readFileSync(craftComponentsPath, 'utf8')
    
    // Add import
    const importLine = `import { ${componentName} } from "@/components/blocks/${category}/${componentName}"`
    content = importLine + '\n' + content
    
    // Add export
    const exportLine = `export const Craft${componentName} = ${componentName}`
    content = content.replace(
      /export const componentResolver = {/,
      `${exportLine}\n\nexport const componentResolver = {`
    )
    
    // Add to resolver
    content = content.replace(
      /export const componentResolver = {([^}]+)}/,
      `export const componentResolver = {$1  ${componentName}: Craft${componentName},\n}`
    )
    
    fs.writeFileSync(craftComponentsPath, content)
  }

  // Update sidebar.tsx
  const sidebarPath = path.join(
    vscode.workspace.workspaceFolders![0].uri.fsPath,
    'components/editor/sidebar.tsx'
  )

  if (fs.existsSync(sidebarPath)) {
    let content = fs.readFileSync(sidebarPath, 'utf8')
    
    // Add import
    content = content.replace(
      /} from "@\/components\/editor\/craft-components"/,
      `,\n  Craft${componentName}\n} from "@/components/editor/craft-components"`
    )
    
    // Add to appropriate block array
    const blockArray = getBlockArrayForCategory(category)
    content = content.replace(
      new RegExp(`const ${blockArray} = \\[([^\\]]+)\\]`),
      `const ${blockArray} = [$1    { component: Craft${componentName}, name: "${componentName}", description: "Generated ${category.toLowerCase()} component" },\n  ]`
    )
    
    fs.writeFileSync(sidebarPath, content)
  }
}

function getBlockArrayForCategory(category: string): string {
  const mapping: Record<string, string> = {
    'Hero': 'layoutBlocks',
    'Features': 'contentBlocks',
    'CTA': 'layoutBlocks',
    'Pricing': 'ecommerceBlocks',
    'Blog': 'contentBlocks',
    'Products': 'ecommerceBlocks',
    'Team': 'contentBlocks',
    'Contact': 'otherBlocks'
  }
  return mapping[category] || 'otherBlocks'
}

function generateComponentFromTemplate(templateType: string, componentName: string): string {
  // Implementation would use ComponentTemplateGenerator
  return `// Generated ${componentName} component from ${templateType} template\n// Implementation would be generated here`
}

async function fetchTemplatesFromLibrary(library: string, category: string): Promise<any[]> {
  // Implementation would use TemplateLibraryIntegration
  return []
}

async function importTemplates(templates: any[]): Promise<string[]> {
  // Implementation would convert and save templates
  return []
}

function generatePreviewHtml(componentCode: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component Preview</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="preview">
        <!-- Component preview would be rendered here -->
        <p>Component preview coming soon...</p>
    </div>
</body>
</html>
`
}

export function deactivate() {}
