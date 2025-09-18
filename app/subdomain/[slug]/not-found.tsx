import Link from 'next/link'

export default function SubdomainNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Site Not Found</h1>
          <p className="text-gray-600">
            The website you're looking for doesn't exist or has been removed.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="https://webbuilder.hhola.app"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Main App
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>If you're the site owner, please check your domain settings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
