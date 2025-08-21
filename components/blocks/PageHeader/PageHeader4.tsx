export const PageHeader4 = () => {
  return (
    <div className="bg-green-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
            <p className="text-green-100">Monitor your progress and manage your projects</p>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50">
              Export Data
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800">
              New Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
