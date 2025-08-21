export const Gallery4 = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">Gallery</span>
          <h2 className="text-3xl font-bold text-foreground mb-4">Visual Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each image tells a unique story. Browse through our collection of memorable moments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl bg-card border">
              <img
                src={`/placeholder.svg?height=300&width=400&query=visual story ${item}`}
                alt={`Story ${item}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold mb-1">Story Title {item}</h3>
                <p className="text-sm text-white/80">Beautiful moment captured</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
