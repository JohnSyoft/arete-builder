export const Blog2 = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/placeholder.svg?height=300&width=800" alt="Featured post" className="w-full h-64 object-cover" />
          <div className="p-8">
            <div className="flex items-center mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              <span className="text-gray-500 text-sm ml-4">5 min read</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Building Scalable Applications with Modern Architecture
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Learn how to design and implement scalable applications using microservices, containerization, and
              cloud-native technologies.
            </p>
            <div className="flex items-center">
              <img src="/placeholder.svg?height=40&width=40" alt="Author" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-medium text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Senior Developer</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
