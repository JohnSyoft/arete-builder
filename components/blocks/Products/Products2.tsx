export const Products2 = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Shop by Category</h2>
            <div className="space-y-2">
              {["Electronics", "Clothing", "Home & Garden", "Sports", "Books"].map((category) => (
                <button
                  key={category}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-foreground">Featured Products</h3>
              <select className="border border-border rounded-md px-3 py-2 bg-background">
                <option>Sort by Price</option>
                <option>Sort by Name</option>
                <option>Sort by Rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-card rounded-lg border border-border overflow-hidden group">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=250&width=250&query=featured product ${item}`}
                      alt={`Featured Product ${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-sm font-medium">
                        -20%
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-1">Product {item}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                      <span className="text-sm text-muted-foreground">(24)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">$79.99</span>
                      <span className="text-sm text-muted-foreground line-through">$99.99</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
