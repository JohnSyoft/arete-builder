export const PageHeader5 = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            🌱 Eco-Friendly
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Sustainable Solutions</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-6">
            Join us in creating a greener future with environmentally conscious products and services
          </p>
          <div className="flex justify-center items-center space-x-6 text-emerald-100">
            <div className="text-center">
              <div className="text-2xl font-bold">50%</div>
              <div className="text-sm">Carbon Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Renewable Energy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
