export const Products4 = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">New Arrivals</h2>
          <p className="text-lg text-muted-foreground">Fresh products just added to our collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-square bg-muted relative">
                <img
                  src={`/placeholder.svg?height=250&width=250&query=new arrival ${item}`}
                  alt={`New Arrival ${item}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">NEW</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-2">New Product {item}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">$89.99</span>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-transparent hover:border-gray-300"></button>
                    <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-gray-300"></button>
                    <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent hover:border-gray-300"></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
