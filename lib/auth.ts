export interface User {
  id: string
  email: string
  name: string
}

// Hardcoded user for v0
const DEMO_USER: User = {
  id: "1",
  email: "demo@example.com",
  name: "Demo User",
}

export const auth = {
  login: async (email: string, password: string): Promise<User | null> => {
    // Hardcoded authentication for v0
    if (email === "demo@example.com" && password === "password") {
      return DEMO_USER
    }
    return null
  },

  getCurrentUser: (): User | null => {
    // In a real app, this would check session/token
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user")
      return user ? JSON.parse(user) : null
    }
    return null
  },

  setUser: (user: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user))
    }
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user")
    }
  },
}
