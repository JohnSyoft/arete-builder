export const Products5 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Eco-Friendly Products</h2>
          <p className="text-lg text-muted-foreground">Sustainable choices for a better tomorrow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-card rounded-lg border border-green-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 relative">
                <img
                  src={`/placeholder.svg?height=300&width=300&query=eco friendly product ${item}`}
                  alt={`Eco Product ${item}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    🌱 ECO
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Eco Product {item}</h3>
                <p className="text-muted-foreground mb-4">
                  Made from 100% recycled materials with minimal environmental impact.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-green-500">{"🌟".repeat(5)}</div>
                  <span className="text-sm text-muted-foreground">Carbon Neutral</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">$79.99</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
