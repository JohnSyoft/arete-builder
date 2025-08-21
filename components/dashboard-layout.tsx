"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  FolderOpen,
  LayoutTemplateIcon as Template,
  Settings,
  LogOut,
  Menu,
  Home,
  Zap,
  CreditCard,
  HelpCircle,
} from "lucide-react"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

interface DashboardLayoutProps {
  children: React.ReactNode
  activeTab?: "projects" | "templates" | "settings"
}

export function DashboardLayout({ children, activeTab = "projects" }: DashboardLayoutProps) {
  const [user, setUser] = useState<any | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const currentUser = auth.getCurrentUser()
    if (!currentUser) {
      router.push("/login")
    } else {
      setUser(currentUser)
    }
  }, [router])

  const handleLogout = () => {
    auth.logout()
    router.push("/login")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </div>
    )
  }

  const navigation = [
    { name: "Projects", href: "/dashboard", icon: FolderOpen, key: "projects" },
    { name: "Templates", href: "/dashboard/templates", icon: Template, key: "templates" },
    { name: "Settings", href: "/dashboard/settings", icon: Settings, key: "settings" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo Section */}
        <div className="flex h-16 items-center px-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">BuilderPro</h1>
              <p className="text-xs text-muted-foreground">Website Builder</p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-border">
              <AvatarFallback className="bg-muted text-foreground">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
            <Badge variant="secondary">Pro</Badge>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-11 px-4 text-left font-medium transition-all",
                  activeTab === item.key
                    ? "bg-accent text-accent-foreground border border-border shadow-sm"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                )}
                onClick={() => router.push(item.href)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Quick Actions
            </p>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start h-10 px-4 text-muted-foreground hover:bg-accent hover:text-foreground"
                onClick={() => router.push("/dashboard")}
              >
                <Home className="mr-3 h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-10 px-4 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <HelpCircle className="mr-3 h-4 w-4" />
                Help & Support
              </Button>
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-foreground">Usage</p>
              <p className="text-xs text-muted-foreground">3/10 projects</p>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={cn("transition-all duration-300", sidebarOpen ? "ml-72" : "ml-0")}>
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="hidden md:block">
              <p className="text-sm text-muted-foreground">
                {activeTab === "projects" && "Manage your website projects"}
                {activeTab === "templates" && "Browse professional templates"}
                {activeTab === "settings" && "Account settings and preferences"}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* <ThemeToggle /> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full border border-border hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-muted text-foreground text-sm">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border-border" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-foreground hover:bg-accent">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:bg-accent">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive hover:bg-destructive/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="p-8 bg-background min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  )
}
