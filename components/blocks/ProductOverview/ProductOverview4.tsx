export const ProductOverview4 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-muted/30 p-8 flex items-center justify-center">
              <img src="/placeholder.svg?height=350&width=350" alt="Product" className="max-w-full h-auto" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  New Release
                </span>
                <h3 className="text-3xl font-bold text-foreground mb-3">Wireless Earbuds</h3>
                <p className="text-muted-foreground">
                  Premium sound quality with active noise cancellation and 24-hour battery life.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-foreground">$179</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">25% OFF</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2">⚡</span>
                  <span>Free shipping • 30-day returns</span>
                </div>
              </div>
              <button className="bg-foreground text-background py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
