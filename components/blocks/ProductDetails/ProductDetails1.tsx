export const ProductDetails1 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=600&width=600" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=150&width=150&query=product thumbnail ${i}`}
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Premium Product Name</h1>
              <p className="text-muted-foreground">SKU: PRD-001</p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-foreground">$299.99</span>
              <span className="text-lg text-muted-foreground line-through">$399.99</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">25% OFF</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
              <span className="text-muted-foreground">(128 reviews)</span>
            </div>

            <p className="text-foreground">
              High-quality product with premium materials and exceptional craftsmanship. Perfect for everyday use with
              modern design and functionality.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Size</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>X-Large</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Color</label>
                <div className="flex space-x-2">
                  {["bg-black", "bg-white", "bg-blue-500", "bg-red-500"].map((color, i) => (
                    <button key={i} className={`w-8 h-8 rounded-full border-2 border-border ${color}`} />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center">
                    -
                  </button>
                  <span className="text-foreground">1</span>
                  <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-foreground text-background py-3 rounded-lg font-medium hover:opacity-90">
                Add to Cart
              </button>
              <button className="w-full border border-border py-3 rounded-lg font-medium hover:bg-muted">
                Add to Wishlist
              </button>
            </div>

            <div className="border-t border-border pt-6 space-y-2">
              <p className="text-sm text-muted-foreground">✓ Free shipping on orders over $100</p>
              <p className="text-sm text-muted-foreground">✓ 30-day return policy</p>
              <p className="text-sm text-muted-foreground">✓ 2-year warranty included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
