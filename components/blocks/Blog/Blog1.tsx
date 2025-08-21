export const Blog1 = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-lg text-gray-600">Stay updated with our latest insights and news</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`/placeholder.svg?height=200&width=400&query=blog post ${i} featured image`}
                alt={`Blog post ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">Technology</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Future of Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest trends and technologies shaping the future of web development...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                  <button className="text-blue-600 font-medium hover:text-blue-700">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
