export const ProductDetails2 = () => {
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

            <p className="text-muted-foreground leading-relaxed">
              Experience premium quality with this exceptional product. Crafted with attention to detail and designed
              for modern lifestyles, it combines functionality with elegant aesthetics.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="flex space-x-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button key={size} className="px-4 py-2 border border-border rounded hover:bg-accent">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-border rounded">-</button>
                  <span className="px-4 py-1 border border-border rounded">1</span>
                  <button className="px-3 py-1 border border-border rounded">+</button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90">
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-border rounded hover:bg-accent">♡</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
