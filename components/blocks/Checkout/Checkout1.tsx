export const Checkout1 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <img
                    src={`/placeholder.svg?height=60&width=60&query=checkout product ${item}`}
                    alt="Product"
                    className="w-15 h-15 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Product Name {item}</h4>
                    <p className="text-sm text-muted-foreground">Qty: 1</p>
                  </div>
                  <span className="font-medium text-foreground">$99.99</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border mt-6 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$199.98</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">$9.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="text-foreground">$16.80</span>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">$226.77</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-foreground text-background py-3 rounded-lg font-medium mt-6 hover:opacity-90">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
