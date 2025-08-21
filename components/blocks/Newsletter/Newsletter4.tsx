export const Newsletter4 = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
              Newsletter
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-6">
              Join our community of innovators and get exclusive access to industry insights, product updates, and
              expert tips.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Expert Insights</h3>
                  <p className="text-sm text-muted-foreground">Get actionable tips from industry leaders</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Early Access</h3>
                  <p className="text-sm text-muted-foreground">Be first to know about new features</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Exclusive Content</h3>
                  <p className="text-sm text-muted-foreground">Access subscriber-only resources</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Subscribe Now</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Frequency</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                  <option>Weekly digest</option>
                  <option>Bi-weekly updates</option>
                  <option>Monthly newsletter</option>
                </select>
              </div>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
