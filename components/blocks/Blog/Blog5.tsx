export const Blog5 = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            🌱 Sustainability Blog
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Green Living Tips</h2>
          <p className="text-lg text-gray-600">Discover eco-friendly practices for a sustainable lifestyle</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`/placeholder.svg?height=200&width=400&query=eco-friendly lifestyle tip ${i}`}
                alt={`Eco tip ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Eco-Tip</span>
                  <span className="text-gray-500 text-sm ml-2">2 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Plastic Waste at Home</h3>
                <p className="text-gray-600 mb-4">
                  Simple steps to minimize plastic consumption and create a more sustainable household...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Impact: -50% plastic</span>
                  <button className="text-green-600 font-medium hover:text-green-700">Learn More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
