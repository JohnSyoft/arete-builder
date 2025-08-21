export const Cart5 = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 text-foreground p-8 rounded-lg border border-green-200 dark:border-green-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-200">Eco Cart</h2>
          <p className="text-green-600 dark:text-green-400 mt-2">Sustainable shopping for a better planet</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Your Eco-Friendly Items</h3>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Carbon Neutral Shipping</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Eco Item 1 */}
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Bamboo Phone Case</h4>
                    <p className="text-sm text-muted-foreground">100% Biodegradable</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                        Eco-Friendly
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <button className="w-6 h-6 rounded border border-green-300 dark:border-green-700 flex items-center justify-center text-sm">
                        -
                      </button>
                      <span className="w-8 text-center">1</span>
                      <button className="w-6 h-6 rounded border border-green-300 dark:border-green-700 flex items-center justify-center text-sm">
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-green-700 dark:text-green-300">$24.99</p>
                  </div>
                </div>

                {/* Eco Item 2 */}
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Organic Cotton T-Shirt</h4>
                    <p className="text-sm text-muted-foreground">Fair Trade Certified</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                        Organic
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <button className="w-6 h-6 rounded border border-green-300 dark:border-green-700 flex items-center justify-center text-sm">
                        -
                      </button>
                      <span className="w-8 text-center">2</span>
                      <button className="w-6 h-6 rounded border border-green-300 dark:border-green-700 flex items-center justify-center text-sm">
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-green-700 dark:text-green-300">$59.98</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eco Summary */}
          <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-green-200 dark:border-green-800 h-fit">
            <h3 className="font-semibold mb-4 text-green-800 dark:text-green-200">Impact Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">2 trees planted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">5kg CO₂ offset</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Plastic-free packaging</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$84.97</span>
              </div>
              <div className="flex justify-between">
                <span>Eco Shipping</span>
                <span className="text-green-600 dark:text-green-400">Free</span>
              </div>
              <hr className="border-green-200 dark:border-green-800" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$84.97</span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Checkout Sustainably
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
