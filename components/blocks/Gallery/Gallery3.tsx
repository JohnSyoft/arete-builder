export const Gallery3 = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most captivating images showcasing creativity and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img src="/placeholder.svg?height=400&width=600" alt="Featured" className="w-full rounded-lg shadow-lg" />
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg?height=200&width=290" alt="Thumbnail 1" className="w-full rounded-lg" />
              <img src="/placeholder.svg?height=200&width=290" alt="Thumbnail 2" className="w-full rounded-lg" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg?height=200&width=290" alt="Thumbnail 3" className="w-full rounded-lg" />
              <img src="/placeholder.svg?height=200&width=290" alt="Thumbnail 4" className="w-full rounded-lg" />
            </div>
            <img src="/placeholder.svg?height=400&width=600" alt="Featured 2" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
