export const Contact5 = () => {
  return (
    <section className="py-16 bg-green-50 dark:bg-green-950/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            🌱 Sustainable Business
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact Our Green Team</h2>
          <p className="text-muted-foreground">Join us in building a more sustainable future through technology</p>
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Our Commitment</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">🌿</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Carbon Neutral</h4>
                    <p className="text-sm text-muted-foreground">All our operations are carbon neutral</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">♻️</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Eco-Friendly</h4>
                    <p className="text-sm text-muted-foreground">Sustainable practices in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">🌍</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Global Impact</h4>
                    <p className="text-sm text-muted-foreground">Making a positive difference worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-background text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-background text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Interest</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-background text-foreground">
                    <option>Select your interest</option>
                    <option>Sustainable Web Development</option>
                    <option>Green Hosting Solutions</option>
                    <option>Eco-Friendly Apps</option>
                    <option>Carbon Offset Programs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-background text-foreground"
                    placeholder="Tell us about your sustainable project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Start Green Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
