export const ProductDetails5 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Showcase */}
            <div className="p-12 flex items-center justify-center bg-gradient-to-br from-purple-800/50 to-pink-800/50">
              <div className="text-center space-y-6">
                <img src="/placeholder.svg?height=300&width=300" alt="Luxury Product" className="mx-auto" />
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-3 bg-white/30 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-12 space-y-8">
              <div>
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ✨ PREMIUM
                </span>
                <h1 className="text-4xl font-bold mb-4">Luxury Edition</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold">$999.99</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">LIMITED</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">👑</span>
                  <span>Handcrafted Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">💎</span>
                  <span>Premium Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">🎯</span>
                  <span>Limited Edition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">🚀</span>
                  <span>Exclusive Features</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105">
                  Reserve Now
                </button>
                <p className="text-center text-sm text-white/70">Only 50 pieces available worldwide</p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex justify-between text-sm">
                  <span>Free worldwide shipping</span>
                  <span>Lifetime warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
