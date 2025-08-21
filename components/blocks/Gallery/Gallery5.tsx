export const Gallery5 = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">🌿 Nature Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating the beauty of our natural world through sustainable photography practices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img src="/placeholder.svg?height=250&width=300" alt="Forest" className="w-full rounded-lg shadow-md" />
            <img src="/placeholder.svg?height=200&width=300" alt="Mountains" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="space-y-4">
            <img src="/placeholder.svg?height=200&width=300" alt="Ocean" className="w-full rounded-lg shadow-md" />
            <img src="/placeholder.svg?height=250&width=300" alt="Wildlife" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="space-y-4">
            <img src="/placeholder.svg?height=250&width=300" alt="Flowers" className="w-full rounded-lg shadow-md" />
            <img src="/placeholder.svg?height=200&width=300" alt="Sunset" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="space-y-4">
            <img src="/placeholder.svg?height=200&width=300" alt="River" className="w-full rounded-lg shadow-md" />
            <img src="/placeholder.svg?height=250&width=300" alt="Trees" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">🌱 All images captured with eco-friendly practices</p>
        </div>
      </div>
    </section>
  )
}
