export const Cart4 = () => {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Item */}
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-primary/20 rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Premium Headphones</h3>
                <p className="text-muted-foreground text-sm">Wireless, Noise Cancelling</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                    -
                  </button>
                  <span className="w-8 text-center">2</span>
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$299.98</p>
                <button className="text-destructive text-sm hover:underline">Remove</button>
              </div>
            </div>

            {/* Another Cart Item */}
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-primary/20 rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Smart Watch</h3>
                <p className="text-muted-foreground text-sm">Fitness Tracker, GPS</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                    -
                  </button>
                  <span className="w-8 text-center">1</span>
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$199.99</p>
                <button className="text-destructive text-sm hover:underline">Remove</button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-muted/30 p-6 rounded-lg h-fit">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$499.97</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$40.00</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$549.96</span>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
