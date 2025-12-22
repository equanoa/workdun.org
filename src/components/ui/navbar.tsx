'use client'

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { createSlug } from "@/lib/utils"

// Industries and Services lists (matching footer)
const industries = [
  "Information Technology",
  "IoT & Connected Devices",
  "Artificial Intelligence",
  "E-commerce Platforms",
  "Skincare & Health",
  "Fitness & Health",
  "Lawyers and Law Firms",
  "NFT & Crypto Mining",
  "Banking and Finance"
]

const services = [
  "Product Design",
  "Web Design & Development",
  "E-Commerce",
  "Brand & Creative",
  "Content & Social",
  "Growth & Performance",
  "Data, AI & IoT",
  "Technology & Operations",
  "Strategic & Advisory",
  "Emerging Technologies",
  "Manufacturing Support",
  "Support & Training"
]

const tailoredSolutions = [
  "Scale your Company",
  "Scale your Car Dealership",
  "Start your E-Commerce Startup",
  "Start your AI Startup",
  "Start your Skincare Company",
  "Start your Fitness Startup",
  "Start your Crypto Mining Farm",
  "Start your ATM Business"
]

const digitalProducts = [
  "AI Mastery",
  "AI Mastery for Lawyers"
]

const whitelabel = [
  "Whitelabel your own Encrypted Chat Messenger",
  "Whitelabel your own Private Cloud Storage"
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY
      // Lock body scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore scroll position when menu closes
        const scrollY = scrollPositionRef.current
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isMobileMenuOpen])

  const handleAnchorClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    if (path.includes('#')) {
      return location.pathname === '/' && location.hash === path.replace('/', '')
    }
    return location.pathname.startsWith(path.replace('/#', '/'))
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-extrabold">WORKDUN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu className="relative">
              <NavigationMenuList className="space-x-1">
                {/* Home */}
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        location.pathname === '/'
                          ? "text-primary bg-secondary/20"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Industries Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent hover:bg-muted data-[state=open]:bg-muted",
                      location.pathname.startsWith('/industry') || location.hash === '#industries'
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <a
                              href="/#industries"
                              onClick={(e) => {
                                e.preventDefault()
                                handleAnchorClick('#industries')
                              }}
                              className="block text-sm font-semibold text-foreground hover:text-primary mb-3"
                            >
                              All Industries
                            </a>
                          </NavigationMenuLink>
                          {industries.slice(0, 4).map((industry) => (
                            <NavigationMenuLink key={industry} asChild>
                              <Link
                                to={`/industry/${createSlug(industry)}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                              >
                                {industry}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <div className="space-y-2 pt-8">
                          {industries.slice(4).map((industry) => (
                            <NavigationMenuLink key={industry} asChild>
                              <Link
                                to={`/industry/${createSlug(industry)}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                              >
                                {industry}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent hover:bg-muted data-[state=open]:bg-muted",
                      location.pathname.startsWith('/service') || location.hash === '#services'
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <a
                              href="/#services"
                              onClick={(e) => {
                                e.preventDefault()
                                handleAnchorClick('#services')
                              }}
                              className="block text-sm font-semibold text-foreground hover:text-primary mb-3"
                            >
                              All Services
                            </a>
                          </NavigationMenuLink>
                          {services.slice(0, 6).map((service) => (
                            <NavigationMenuLink key={service} asChild>
                              <Link
                                to={`/service/${createSlug(service)}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                              >
                                {service}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <div className="space-y-2 pt-8">
                          {services.slice(6).map((service) => (
                            <NavigationMenuLink key={service} asChild>
                              <Link
                                to={`/service/${createSlug(service)}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                              >
                                {service}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Tailored Solutions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent hover:bg-muted data-[state=open]:bg-muted",
                      location.pathname.startsWith('/solution')
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    Tailored Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="space-y-2">
                        {tailoredSolutions.map((solution) => (
                          <NavigationMenuLink key={solution} asChild>
                            <Link
                              to={`/solution/${createSlug(solution)}`}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                            >
                              {solution}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Digital Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent hover:bg-muted data-[state=open]:bg-muted",
                      location.pathname.startsWith('/course')
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    Digital Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[350px] p-4">
                      <div className="space-y-2">
                        {digitalProducts.map((product) => (
                          <NavigationMenuLink key={product} asChild>
                            <Link
                              to={`/course/${createSlug(product)}`}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                            >
                              {product}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Whitelabel Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent hover:bg-muted data-[state=open]:bg-muted",
                      location.pathname.startsWith('/whitelabel')
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    Whitelabel
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[450px] p-4">
                      <div className="space-y-2">
                        {whitelabel.map((item) => (
                          <NavigationMenuLink key={item} asChild>
                            <Link
                              to={`/whitelabel/${createSlug(item)}`}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/20 rounded-md transition-colors"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Why Us */}
                <NavigationMenuItem>
                  <a
                    href="/#about"
                    onClick={(e) => {
                      e.preventDefault()
                      handleAnchorClick('#about')
                    }}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors block",
                      location.hash === '#about'
                        ? "text-primary bg-secondary/20"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    )}
                  >
                    Why Us?
                  </a>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <a
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleAnchorClick('#contact')
                    }}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors block",
                      location.hash === '#contact'
                        ? "text-primary bg-secondary/20"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    )}
                  >
                    Contact
                  </a>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link to="/pricing">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        location.pathname === '/pricing'
                          ? "text-primary bg-secondary/20"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      )}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              className={cn(
                "ml-4 text-white",
                "bg-primary hover:bg-primary/80"
              )}
            >
              <a
                href="https://app.workdun.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div 
              className="flex flex-col space-y-1 py-4 max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/')
                  setIsMobileMenuOpen(false)
                }}
                className={cn(
                  "px-4 py-2 text-base font-medium rounded-md transition-colors",
                  location.pathname === '/'
                    ? "text-primary bg-secondary/20"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                Home
              </a>

              {/* Industries Mobile */}
              <div className="px-4 py-2">
                <div className="text-base font-semibold text-foreground mb-2">Industries</div>
                <a
                  href="/#industries"
                  onClick={(e) => {
                    e.preventDefault()
                    handleAnchorClick('#industries')
                  }}
                  className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary mb-1"
                >
                  All Industries
                </a>
                {industries.map((industry) => (
                  <Link
                    key={industry}
                    to={`/industry/${createSlug(industry)}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {industry}
                  </Link>
                ))}
              </div>

              {/* Services Mobile */}
              <div className="px-4 py-2">
                <div className="text-base font-semibold text-foreground mb-2">Services</div>
                <a
                  href="/#services"
                  onClick={(e) => {
                    e.preventDefault()
                    handleAnchorClick('#services')
                  }}
                  className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary mb-1"
                >
                  All Services
                </a>
                {services.map((service) => (
                  <Link
                    key={service}
                    to={`/service/${createSlug(service)}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {service}
                  </Link>
                ))}
              </div>

              {/* Tailored Solutions Mobile */}
              <div className="px-4 py-2">
                <div className="text-base font-semibold text-foreground mb-2">Tailored Solutions</div>
                {tailoredSolutions.map((solution) => (
                  <Link
                    key={solution}
                    to={`/solution/${createSlug(solution)}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      window.scrollTo({ top: 0, behavior: 'instant' })
                    }}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {solution}
                  </Link>
                ))}
              </div>

              {/* Digital Products Mobile */}
              <div className="px-4 py-2">
                <div className="text-base font-semibold text-foreground mb-2">Digital Products</div>
                {digitalProducts.map((product) => (
                  <Link
                    key={product}
                    to={`/course/${createSlug(product)}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      window.scrollTo({ top: 0, behavior: 'instant' })
                    }}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {product}
                  </Link>
                ))}
              </div>

              {/* Whitelabel Mobile */}
              <div className="px-4 py-2">
                <div className="text-base font-semibold text-foreground mb-2">Whitelabel</div>
                {whitelabel.map((item) => (
                  <Link
                    key={item}
                    to={`/whitelabel/${createSlug(item)}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      window.scrollTo({ top: 0, behavior: 'instant' })
                    }}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <a
                href="/#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleAnchorClick('#about')
                }}
                className={cn(
                  "px-4 py-2 text-base font-medium rounded-md transition-colors",
                  location.hash === '#about'
                    ? "text-primary bg-secondary/20"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                Why Us?
              </a>

              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleAnchorClick('#contact')
                }}
                className={cn(
                  "px-4 py-2 text-base font-medium rounded-md transition-colors",
                  location.hash === '#contact'
                    ? "text-primary bg-secondary/20"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                Contact
              </a>

              <Link
                to="/pricing"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'instant' })
                }}
                className={cn(
                  "px-4 py-2 text-base font-medium rounded-md transition-colors",
                  location.pathname === '/pricing'
                    ? "text-primary bg-secondary/20"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                Pricing
              </Link>

              <Button
                asChild
                className="mt-4 bg-primary hover:bg-primary/80 text-white"
              >
                <a
                  href="https://app.workdun.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
