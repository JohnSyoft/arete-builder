export const Pricing5 = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Eco-Friendly Pricing</h2>
          <p className="text-lg text-muted-foreground">Sustainable plans that grow with your business</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-green-600">🌱</span>
            <span className="text-sm text-muted-foreground">Carbon neutral hosting included</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Green Starter",
              price: "$12",
              co2: "0kg CO₂",
              features: ["3 Projects", "5GB Green Storage", "Eco Support", "Carbon Offset Included"],
              color: "green",
            },
            {
              name: "Sustainable Pro",
              price: "$35",
              co2: "0kg CO₂",
              features: [
                "15 Projects",
                "50GB Green Storage",
                "Priority Eco Support",
                "Tree Planting Program",
                "Green Analytics",
              ],
              color: "blue",
              popular: true,
            },
            {
              name: "Planet Enterprise",
              price: "$89",
              co2: "0kg CO₂",
              features: [
                "Unlimited Projects",
                "500GB Green Storage",
                "24/7 Eco Support",
                "Forest Partnership",
                "Sustainability Reports",
              ],
              color: "emerald",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg border ${plan.popular ? "border-blue-200 ring-2 ring-blue-100" : "border-green-200"} p-8 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="text-sm text-green-600 font-medium">{plan.co2} monthly impact</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="text-green-500">🌱</span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md font-medium transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Go Green
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-foreground mb-2">🌍 Our Environmental Commitment</h4>
            <p className="text-sm text-muted-foreground">
              Every plan includes carbon-neutral hosting, renewable energy usage, and contributes to reforestation
              projects. Together, we've planted over 10,000 trees this year!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
