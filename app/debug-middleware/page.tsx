'use client'

import { useEffect, useState } from 'react'

export default function DebugMiddleware() {
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    const hostname = window.location.hostname
    const hostParts = hostname.split('.')
    const subdomain = hostParts.length > 2 ? hostParts[0] : null
    
    setDebugInfo({
      hostname,
      hostParts,
      subdomain,
      pathname: window.location.pathname,
      isSubdomain: subdomain && hostParts.length > 2,
      shouldTriggerSubdomain: subdomain && hostParts.length > 2 && subdomain !== 'webbuilder'
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Middleware Debug Info</h1>
        
        {debugInfo && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Current Request Info</h2>
            <div className="space-y-2">
              <div><strong>Hostname:</strong> {debugInfo.hostname}</div>
              <div><strong>Host Parts:</strong> {JSON.stringify(debugInfo.hostParts)}</div>
              <div><strong>Subdomain:</strong> {debugInfo.subdomain || 'None'}</div>
              <div><strong>Pathname:</strong> {debugInfo.pathname}</div>
              <div><strong>Is Subdomain:</strong> {debugInfo.isSubdomain ? 'Yes' : 'No'}</div>
              <div><strong>Should Trigger Subdomain:</strong> {debugInfo.shouldTriggerSubdomain ? 'Yes' : 'No'}</div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Test URLs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Main App (should work normally):</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><code>localhost:3000/dashboard</code></li>
                <li><code>localhost:3000/editor</code></li>
                <li><code>webbuilder.hhola.app/dashboard</code></li>
                <li><code>webbuilder.hhola.app/editor</code></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium">Client Subdomains (should redirect to subdomain handler):</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><code>arete.hhola.app</code></li>
                <li><code>mycompany.hhola.app</code></li>
                <li><code>test.hhola.app</code></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">How to Test</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Visit this page at <code>localhost:3000/debug-middleware</code></li>
            <li>Check the debug info above</li>
            <li>Try accessing <code>localhost:3000/dashboard</code> - should work normally</li>
            <li>Try accessing <code>localhost:3000/editor</code> - should work normally</li>
            <li>If you have a test subdomain setup, try <code>test.hhola.app</code></li>
          </ol>
        </div>
      </div>
    </div>
  )
}
