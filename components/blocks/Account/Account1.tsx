export const Account1 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {[
                { name: "Profile", active: true },
                { name: "Orders", active: false },
                { name: "Addresses", active: false },
                { name: "Payment Methods", active: false },
                { name: "Settings", active: false },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`block px-4 py-2 rounded-lg ${
                    item.active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Profile Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-2xl font-semibold text-muted-foreground">JD</span>
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">Change Photo</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue="1990-01-01"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-foreground text-background px-6 py-2 rounded-lg hover:opacity-90">
                    Save Changes
                  </button>
                  <button className="border border-border px-6 py-2 rounded-lg hover:bg-muted">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
