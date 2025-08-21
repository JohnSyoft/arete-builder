export const Pricing2 = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-muted-foreground mb-6">Pay monthly or yearly and save up to 20%</p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-muted-foreground">Monthly</span>
            <button className="relative w-12 h-6 bg-primary rounded-full">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </button>
            <span className="text-foreground font-medium">Yearly</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Save 20%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Starter",
              price: "$0",
              yearlyPrice: "$0",
              features: ["1 Project", "1GB Storage", "Community Support"],
            },
            {
              name: "Basic",
              price: "$12",
              yearlyPrice: "$10",
              features: ["5 Projects", "10GB Storage", "Email Support", "Basic Analytics"],
            },
            {
              name: "Pro",
              price: "$39",
              yearlyPrice: "$31",
              features: ["25 Projects", "100GB Storage", "Priority Support", "Advanced Analytics", "API Access"],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "$99",
              yearlyPrice: "$79",
              features: ["Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Integrations", "White Label"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg border ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border"} p-6 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{plan.yearlyPrice}</span>
                  <span className="text-muted-foreground">/month</span>
                  {plan.price !== plan.yearlyPrice && (
                    <div className="text-sm text-muted-foreground line-through">{plan.price}/month</div>
                  )}
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="text-green-500 text-xs">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-md font-medium transition-colors text-sm ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
