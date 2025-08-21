export const Newsletter1 = () => {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Stay Updated</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about our latest updates, features, and exclusive
          content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground/20 outline-none"
          />
          <button className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-primary-foreground/60 text-sm mt-4">No spam, unsubscribe at any time.</p>
      </div>
    </section>
  )
}
