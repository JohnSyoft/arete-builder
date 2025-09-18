'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function SubdomainDebug() {
  const params = useParams()
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDebugInfo = async () => {
      try {
        const slug = params.slug as string
        
        // Test API calls
        const [projectResponse, pagesResponse] = await Promise.all([
          fetch(`/api/v1/projects/by-slug/${slug}`),
          fetch(`/api/v1/pages/project-slug/${slug}`)
        ])

        const projectData = await projectResponse.json()
        const pagesData = await pagesResponse.json()

        setDebugInfo({
          slug,
          projectResponse: {
            status: projectResponse.status,
            ok: projectResponse.ok,
            data: projectData
          },
          pagesResponse: {
            status: pagesResponse.status,
            ok: pagesResponse.ok,
            data: pagesData
          },
          timestamp: new Date().toISOString()
        })
      } catch (error) {
        setDebugInfo({
          error: error.message,
          timestamp: new Date().toISOString()
        })
      } finally {
        setLoading(false)
      }
    }

    fetchDebugInfo()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Subdomain Debug - Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Subdomain Debug Info</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Request Info</h2>
          <div className="space-y-2">
            <div><strong>Slug:</strong> {debugInfo?.slug}</div>
            <div><strong>Timestamp:</strong> {debugInfo?.timestamp}</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Project API Response</h2>
          <div className="space-y-2">
            <div><strong>Status:</strong> {debugInfo?.projectResponse?.status}</div>
            <div><strong>OK:</strong> {debugInfo?.projectResponse?.ok ? 'Yes' : 'No'}</div>
            <div><strong>Data:</strong></div>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(debugInfo?.projectResponse?.data, null, 2)}
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Pages API Response</h2>
          <div className="space-y-2">
            <div><strong>Status:</strong> {debugInfo?.pagesResponse?.status}</div>
            <div><strong>OK:</strong> {debugInfo?.pagesResponse?.ok ? 'Yes' : 'No'}</div>
            <div><strong>Data:</strong></div>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(debugInfo?.pagesResponse?.data, null, 2)}
            </pre>
          </div>
        </div>

        {debugInfo?.error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-red-800">Error</h2>
            <pre className="text-red-700">{debugInfo.error}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
