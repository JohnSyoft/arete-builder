export const Gallery2 = () => {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Photo Gallery</h2>
          <p className="text-muted-foreground">A curated collection of our finest work</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <img src="/placeholder.svg?height=300&width=250" alt="Gallery 1" className="h-auto max-w-full rounded-lg" />
            <img src="/placeholder.svg?height=400&width=250" alt="Gallery 2" className="h-auto max-w-full rounded-lg" />
          </div>
          <div className="grid gap-4">
            <img src="/placeholder.svg?height=400&width=250" alt="Gallery 3" className="h-auto max-w-full rounded-lg" />
            <img src="/placeholder.svg?height=300&width=250" alt="Gallery 4" className="h-auto max-w-full rounded-lg" />
          </div>
          <div className="grid gap-4">
            <img src="/placeholder.svg?height=300&width=250" alt="Gallery 5" className="h-auto max-w-full rounded-lg" />
            <img src="/placeholder.svg?height=400&width=250" alt="Gallery 6" className="h-auto max-w-full rounded-lg" />
          </div>
          <div className="grid gap-4">
            <img src="/placeholder.svg?height=400&width=250" alt="Gallery 7" className="h-auto max-w-full rounded-lg" />
            <img src="/placeholder.svg?height=300&width=250" alt="Gallery 8" className="h-auto max-w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
