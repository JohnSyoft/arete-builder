export const ProductDetails3 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex items-center justify-center">
            <img src="/placeholder.svg?height=400&width=400" alt="Product" className="max-w-full h-auto" />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                New Arrival
              </span>
              <h1 className="text-4xl font-bold text-foreground mb-2">Innovative Tech Product</h1>
              <p className="text-xl text-blue-600 font-semibold">$199.99</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Advanced technology integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Premium build quality
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  User-friendly design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  1-year warranty included
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>✓ Free shipping</span>
              <span>✓ 30-day returns</span>
              <span>✓ Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
