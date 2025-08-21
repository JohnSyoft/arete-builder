export const Pricing1 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Simple Pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that works best for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Basic", price: "$9", features: ["5 Projects", "10GB Storage", "Email Support"] },
            {
              name: "Pro",
              price: "$29",
              features: ["25 Projects", "100GB Storage", "Priority Support", "Advanced Analytics"],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "$99",
              features: ["Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Integrations"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg border ${plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"} p-8 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
