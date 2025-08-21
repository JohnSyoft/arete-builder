export const PageHeader3 = () => {
  return (
    <div className="relative bg-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            ✨ New Feature Available
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Innovation Hub</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore cutting-edge solutions and transform your workflow with our latest innovations
          </p>
        </div>
      </div>
    </div>
  )
}
