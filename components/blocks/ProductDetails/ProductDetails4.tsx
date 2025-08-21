export const ProductDetails4 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-12 flex items-center justify-center">
              <img src="/placeholder.svg?height=350&width=350" alt="Eco Product" className="max-w-full h-auto" />
            </div>

            {/* Product Info */}
            <div className="p-8 space-y-6">
              <div>
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  🌱 Eco-Friendly
                </span>
                <h1 className="text-3xl font-bold text-foreground mb-2">Sustainable Choice</h1>
                <p className="text-2xl font-bold text-green-600">$89.99</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Made from 100% recycled materials, this product represents our commitment to environmental
                sustainability without compromising on quality or performance.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Sustainability Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                    </div>
                    <span className="text-sm text-green-600 font-medium">9.2/10</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">Carbon Neutral</div>
                    <div className="text-green-600">Shipping</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">100%</div>
                    <div className="text-green-600">Recyclable</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Choose Sustainable
              </button>

              <div className="text-xs text-muted-foreground text-center">Every purchase plants a tree 🌳</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
