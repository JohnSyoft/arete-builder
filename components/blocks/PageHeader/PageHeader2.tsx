export const PageHeader2 = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <nav className="text-sm text-gray-400 mb-4">
            <span>Home</span> / <span>Products</span> / <span className="text-white">Current Page</span>
          </nav>
          <h1 className="text-5xl font-bold text-white mb-6">Product Catalog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Browse our extensive collection of premium products designed for modern professionals
          </p>
        </div>
      </div>
    </div>
  )
}
