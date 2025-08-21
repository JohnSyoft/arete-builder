export const Blog3 = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Developer Insights</h2>
          <p className="text-lg text-gray-300">Deep dives into technology and development practices</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tutorial</span>
                  <span className="text-gray-400 text-sm ml-4">March {10 + i}, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced React Patterns</h3>
                <p className="text-gray-300 mb-4">
                  Master advanced React patterns including render props, higher-order components, and custom hooks...
                </p>
                <button className="text-blue-400 font-medium hover:text-blue-300">Continue Reading →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
