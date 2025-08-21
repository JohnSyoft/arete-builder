export const Team3 = () => {
  const team = [
    {
      name: "Maria Garcia",
      role: "UX Designer",
      social: { twitter: "#", linkedin: "#", github: "#" },
      image: "/placeholder.svg?height=350&width=350",
    },
    {
      name: "James Wilson",
      role: "Backend Engineer",
      social: { twitter: "#", linkedin: "#", github: "#" },
      image: "/placeholder.svg?height=350&width=350",
    },
    {
      name: "Lisa Chen",
      role: "Data Scientist",
      social: { twitter: "#", linkedin: "#", github: "#" },
      image: "/placeholder.svg?height=350&width=350",
    },
    {
      name: "Tom Anderson",
      role: "DevOps Engineer",
      social: { twitter: "#", linkedin: "#", github: "#" },
      image: "/placeholder.svg?height=350&width=350",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Amazing Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know the creative minds and technical experts who bring our vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>
              <div className="flex space-x-3">
                <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
