export const Pricing3 = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground">All plans include a 14-day free trial</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Personal</h3>
              <p className="text-muted-foreground mb-4">Perfect for individuals and small projects</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">$19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Up to 10 projects</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">50GB storage</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Email support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Basic analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">✗</span>
                <span className="text-muted-foreground">Priority support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">✗</span>
                <span className="text-muted-foreground">Advanced features</span>
              </div>
            </div>

            <button className="w-full bg-muted text-foreground py-3 rounded-md hover:bg-muted/80 transition-colors font-medium">
              Start Free Trial
            </button>
          </div>

          <div className="bg-card rounded-lg border border-primary p-8 relative shadow-xl">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
              <p className="text-muted-foreground mb-4">Ideal for growing businesses and teams</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Unlimited projects</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">500GB storage</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Priority support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Advanced analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">Team collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-foreground">API access</span>
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
