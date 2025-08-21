export const ProductOverview1 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Product"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Premium Wireless Headphones</h2>
            <p className="text-muted-foreground mb-6">
              Experience crystal-clear audio with our latest wireless technology. Perfect for music lovers and
              professionals alike.
            </p>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-foreground">$299</span>
              <span className="text-lg text-muted-foreground line-through ml-2">$399</span>
            </div>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
