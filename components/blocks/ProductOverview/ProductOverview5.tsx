export const ProductOverview5 = () => {
  return (
    <section className="py-16 bg-green-50 dark:bg-green-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            🌱 Eco-Friendly
          </span>
          <h2 className="text-3xl font-bold text-foreground">Sustainable Tech</h2>
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img src="/placeholder.svg?height=400&width=600" alt="Eco Product" className="w-full h-auto rounded-lg" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Solar Power Bank</h3>
                <p className="text-muted-foreground">
                  Charge your devices with clean solar energy. Made from recycled materials.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Capacity</span>
                  <span className="text-sm font-medium">20,000mAh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Solar Panel</span>
                  <span className="text-sm font-medium">5W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Material</span>
                  <span className="text-sm font-medium">100% Recycled</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">$89</div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Choose Sustainable
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
