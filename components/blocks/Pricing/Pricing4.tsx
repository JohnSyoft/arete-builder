export const Pricing4 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">No hidden fees, no surprises</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "Starter",
              price: "$15",
              description: "Perfect for getting started",
              features: ["5 Projects", "10GB Storage", "Email Support", "99.9% Uptime"],
              cta: "Start Free Trial",
            },
            {
              name: "Growth",
              price: "$45",
              description: "Best for growing businesses",
              features: [
                "50 Projects",
                "100GB Storage",
                "Priority Support",
                "99.9% Uptime",
                "Advanced Analytics",
                "Team Collaboration",
              ],
              cta: "Most Popular",
              popular: true,
            },
            {
              name: "Scale",
              price: "$95",
              description: "For large organizations",
              features: [
                "Unlimited Projects",
                "1TB Storage",
                "24/7 Support",
                "99.99% Uptime",
                "Custom Integrations",
                "Dedicated Manager",
              ],
              cta: "Contact Sales",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg border ${plan.popular ? "border-primary" : "border-border"} p-8`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              SSL Certificate
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Daily Backups
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              CDN Included
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              30-day Money Back
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
