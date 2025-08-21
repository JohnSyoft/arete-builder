export const Blog4 = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 last:border-b-0"
                >
                  <img
                    src={`/placeholder.svg?height=200&width=300&query=blog post ${i} thumbnail`}
                    alt={`Post ${i}`}
                    className="w-full md:w-64 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-green-600 font-medium mb-2">Business</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Scaling Your Startup in 2024</h3>
                    <p className="text-gray-600 mb-4">
                      Essential strategies for growing your startup, from product-market fit to scaling operations and
                      building a strong team...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=32&width=32"
                          alt="Author"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-700">Alex Chen</span>
                      </div>
                      <span className="text-sm text-gray-500">8 min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Popular Posts</h4>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3">
                    <img
                      src={`/placeholder.svg?height=60&width=60&query=popular post ${i}`}
                      alt={`Popular ${i}`}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-1">Getting Started with AI</h5>
                      <p className="text-xs text-gray-500">March {i}, 2024</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
