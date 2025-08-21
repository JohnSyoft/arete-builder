export const ProductOverview3 = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Revolutionary Design</h2>
          <p className="text-xl text-muted-foreground">Crafted with precision and attention to detail</p>
        </div>
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ultra-Thin Laptop</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  16GB RAM, 512GB SSD
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  14-hour battery life
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Retina display
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-foreground">$1,299</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src="/placeholder.svg?height=400&width=500" alt="Laptop" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
