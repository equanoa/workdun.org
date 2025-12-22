import { useEffect, useState } from "react"
import { Footer } from "@/components/ui/footer"
import { Car, FileText, Download, Image, CreditCard, Search, ArrowRight, Lock, LogOut } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AUTH_CREDENTIALS } from "@/lib/auth-credentials"

export default function ScaleCarDealershipResources() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('affiliateResourcesAuth')
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('affiliateResourcesAuth', 'authenticated')
      setError("")
    } else {
      setError("Incorrect username or password. Please try again.")
      setUsername("")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('affiliateResourcesAuth')
    setUsername("")
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: 'white' }} className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen py-32 px-4">
          <div className="mx-auto max-w-md w-full">
            <Card className="border-border bg-white shadow-lg">
              <CardHeader className="text-center px-8 pt-10 pb-6">
                <div className="mx-auto mb-6 p-5 rounded-full bg-secondary/20 w-fit">
                  <Lock className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-4">
                  Protected <span style={{ color: 'hsl(var(--primary))' }}>Resources</span>
                </CardTitle>
                <p className="text-muted-foreground text-base">
                  Please enter your username and password to access affiliate resources.
                </p>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="pt-6">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value)
                        setError("")
                      }}
                      placeholder="Enter username"
                      className="w-full px-5 py-5 text-lg border-2 border-border rounded-lg focus:outline-none focus:border-[#ff0000] focus:ring-2 focus:ring-red-100 transition-all text-foreground bg-white mb-4"
                      autoFocus
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError("")
                      }}
                      placeholder="Enter password"
                      className="w-full px-5 py-5 text-lg border-2 border-border rounded-lg focus:outline-none focus:border-[#ff0000] focus:ring-2 focus:ring-red-100 transition-all text-foreground bg-white"
                    />
                    {error && (
                      <p className="mt-4 text-sm text-primary">{error}</p>
                    )}
                  </div>
                  <div className="pb-6">
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/80 text-white text-base font-medium py-4 h-auto rounded-lg"
                    >
                      Access Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      {/* Logout Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="bg-white border-border text-foreground hover:bg-muted shadow-md"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-semibold text-primary mb-6">
              Car Dealership Resources
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Scale your Car Dealership - <span style={{ color: 'hsl(var(--primary))' }}>Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Access all resources, deliverables, documentation, and tools for scaling your car dealership operations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search resources, deliverables, documentation..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-border rounded-lg focus:outline-none focus:border-[#ff0000] focus:ring-2 focus:ring-red-100 transition-all text-foreground bg-white placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Available <span style={{ color: 'hsl(var(--primary))' }}>Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse through all available resources for your car dealership scaling project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-white hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/20 w-fit mb-4" style={{ color: 'hsl(var(--primary))' }}>
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Deliverables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Access project deliverables, documentation, and completed work files.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/80 text-white border-0"
                >
                  <a href="#">
                    View Deliverables
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-white hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/20 w-fit mb-4" style={{ color: 'hsl(var(--primary))' }}>
                  <Image className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Before & After Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  View transformation showcases and project comparisons.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/80 text-white border-0"
                >
                  <a href="#">
                    View Showcases
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-white hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/20 w-fit mb-4" style={{ color: 'hsl(var(--primary))' }}>
                  <CreditCard className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Payment Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Manage invoices, payments, and billing information.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/80 text-white border-0"
                >
                  <a href="#">
                    View Payments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Accessing Resources?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              If you're having trouble accessing any resources or need assistance, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-primary hover:bg-muted text-base font-medium px-8 py-3 h-auto rounded-lg"
              >
                <a href="mailto:contact@workdun.org?subject=Car Dealership Resources Help">
                  Contact Support
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-white/80 text-white hover:bg-white/10 text-base font-medium px-8 py-3 h-auto rounded-lg"
              >
                <a href="/#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

