export const Cart2 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={`/placeholder.svg?height=80&width=80&query=cart product ${item}`}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Product Name {item}</h3>
                    <p className="text-muted-foreground text-sm">Size: Medium, Color: Black</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 border border-border rounded flex items-center justify-center text-sm">
                          -
                        </button>
                        <span className="text-foreground">2</span>
                        <button className="w-8 h-8 border border-border rounded flex items-center justify-center text-sm">
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
            <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$299.97</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">$9.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="text-foreground">$24.00</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">$333.96</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-foreground text-background py-3 rounded-lg font-medium mt-6 hover:opacity-90">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
