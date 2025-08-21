export const Team5 = () => {
  const team = [
    {
      name: "Elena Rodriguez",
      role: "Sustainability Director",
      focus: "Environmental Impact",
      image: "/placeholder.svg?height=280&width=280",
    },
    {
      name: "Marcus Johnson",
      role: "Green Technology Lead",
      focus: "Renewable Solutions",
      image: "/placeholder.svg?height=280&width=280",
    },
    {
      name: "Priya Patel",
      role: "Community Outreach",
      focus: "Social Responsibility",
      image: "/placeholder.svg?height=280&width=280",
    },
    {
      name: "Oliver Thompson",
      role: "Research Scientist",
      focus: "Climate Solutions",
      image: "/placeholder.svg?height=280&width=280",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">🌱 Our Green Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals dedicated to creating a sustainable future through innovation and
            commitment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-20 h-20 object-cover rounded-full mx-auto border-2 border-green-200 dark:border-green-800"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🌿</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-green-600 dark:text-green-400 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">♻️ Committed to carbon-neutral operations by 2025</p>
        </div>
      </div>
    </section>
  )
}
