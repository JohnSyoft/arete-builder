import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Arete Builder</h1>
          <p className="text-xl text-gray-600">Website Builder with React Query Integration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link 
            href="/login" 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-200"
          >
            <div className="text-center">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Login</h3>
              <p className="text-gray-600 text-sm">Sign in to access your projects and templates</p>
            </div>
          </Link>

          <Link 
            href="/dashboard" 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-purple-200"
          >
            <div className="text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard</h3>
              <p className="text-gray-600 text-sm">Access your projects, themes, and templates</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 Integration Status</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-700">Backend API running on port 5001</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-700">Frontend with React Query integration</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-700">MongoDB with sample templates and themes</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-700">Authentication system with JWT</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-700">API client with error handling and token management</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 className="text-lg font-medium text-blue-900 mb-2">API Endpoints</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-1">Authentication:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>POST /api/v1/auth/register</li>
                <li>POST /api/v1/auth/login</li>
                <li>GET /api/v1/auth/me</li>
                <li>POST /api/v1/auth/logout</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-1">Templates & Themes:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>GET /api/v1/templates</li>
                <li>GET /api/v1/templates/featured</li>
                <li>GET /api/v1/themes</li>
                <li>GET /api/v1/themes/featured</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
