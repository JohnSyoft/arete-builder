export const Newsletter5 = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">🌱 Join Our Eco Newsletter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about sustainable practices, environmental news, and green innovations. Together, we can make
            a difference for our planet.
          </p>
        </div>
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-2xl">🌍</span>
            <span className="text-2xl">📧</span>
            <span className="text-2xl">♻️</span>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 bg-background/50 border border-green-200 dark:border-green-800 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none"
              />
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                🌿 Subscribe
              </button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="mr-1">🌱</span>
                <span>Carbon neutral emails</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">📅</span>
                <span>Monthly updates</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">🔒</span>
                <span>Privacy protected</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-100/50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              🌳 For every 100 subscribers, we plant a tree in partnership with environmental organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
