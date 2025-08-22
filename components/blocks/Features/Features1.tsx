export function Features1() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Optimized for speed with advanced caching and CDN delivery worldwide.",
    },
    {
      icon: "🎨",
      title: "Beautiful Designs",
      description: "Professional templates designed by experts to convert visitors into customers.",
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Fully responsive designs that look perfect on any device or screen size.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee and daily backups.",
    },
    {
      icon: "⚡",
      title: "Easy to Use",
      description: "Intuitive drag-and-drop interface that anyone can master in minutes.",
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Multi-language support and global CDN for worldwide accessibility.",
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you create, launch, and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}