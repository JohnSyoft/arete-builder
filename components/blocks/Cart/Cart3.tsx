export const Cart3 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={`/placeholder.svg?height=100&width=100&query=product ${item}`}
                    alt={`Product ${item}`}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Product Name {item}</h3>
                    <p className="text-muted-foreground text-sm">Color: Black, Size: M</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-accent">
                          -
                        </button>
                        <span className="w-12 text-center">1</span>
                        <button className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-accent">
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">$99.99</p>
                        <button className="text-red-500 text-sm hover:underline">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$199.98</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$16.00</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$225.97</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 mt-6">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
