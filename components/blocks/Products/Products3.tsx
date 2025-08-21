export const Products3 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Best Sellers</h2>
          <p className="text-lg text-muted-foreground">Our most popular products this month</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="aspect-video bg-muted">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Hero Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Premium Collection</h3>
              <p className="text-muted-foreground mb-6">
                Discover our exclusive premium collection with limited edition items.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Shop Collection
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 bg-card rounded-lg border border-border p-4">
                <div className="w-20 h-20 bg-muted rounded-md flex-shrink-0">
                  <img
                    src={`/placeholder.svg?height=80&width=80&query=product ${item}`}
                    alt={`Product ${item}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Bestseller {item}</h4>
                  <p className="text-sm text-muted-foreground mb-2">Popular choice among customers</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">$49.99</span>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
