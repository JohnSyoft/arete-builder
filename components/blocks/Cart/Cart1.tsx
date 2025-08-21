export const Cart1 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Wireless Headphones</h3>
                  <p className="text-muted-foreground">Premium Audio Quality</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center border border-border rounded">
                      <button className="px-3 py-1 hover:bg-muted">-</button>
                      <span className="px-3 py-1">1</span>
                      <button className="px-3 py-1 hover:bg-muted">+</button>
                    </div>
                    <button className="text-red-500 hover:text-red-700">Remove</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">$299.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$299.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">$9.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="text-foreground">$24.72</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">$333.71</span>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
