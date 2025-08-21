export const ProductOverview2 = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img src="/placeholder.svg?height=400&width=600" alt="Product" className="w-full h-auto rounded-lg" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Smart Watch Pro</h3>
                <p className="text-muted-foreground mt-2">
                  Advanced fitness tracking with heart rate monitoring and GPS.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="text-sm text-muted-foreground">(128 reviews)</span>
              </div>
              <div className="text-3xl font-bold text-foreground">$449</div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
