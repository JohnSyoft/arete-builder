export const Newsletter3 = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, product updates, and exclusive offers delivered to your
            inbox.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none"
            />
            <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-white/60">
            <span>10k+ subscribers</span>
            <span>•</span>
            <span>Weekly digest</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
