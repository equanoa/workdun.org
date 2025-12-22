'use client'

import React from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Globe } from "lucide-react"
import { FooterBackgroundGradient } from "@/components/ui/hover-footer"
import { TextHoverEffect } from "@/components/ui/hover-footer"
import { createSlug } from "@/lib/utils"

// Industries list
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

// Services list
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

// Tailored Solutions list
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

// Digital Products list
const digitalProducts = [
  "AI Mastery",
  "AI Mastery for Lawyers"
]

// Whitelabel list
const whitelabel = [
  "Whitelabel your own Encrypted Chat Messenger",
  "Whitelabel your own Private Cloud Storage"
]

// Footer link data
const footerLinks = [
  {
    title: "By Industries",
    links: industries.map(industry => ({ 
      label: industry, 
      href: `/industry/${createSlug(industry)}`,
      type: 'industry'
    })),
  },
  {
    title: "By Services",
    links: services.map(service => ({ 
      label: service, 
      href: `/service/${createSlug(service)}`,
      type: 'service'
    })),
  },
  {
    title: "Tailored Solutions",
    links: tailoredSolutions.map(solution => ({ 
      label: solution, 
      href: `/solution/${createSlug(solution)}`,
      type: 'solution'
    })),
  },
  {
    title: "Digital Products",
    links: digitalProducts.map(product => ({ 
      label: product, 
      href: `/course/${createSlug(product)}`,
      type: 'course'
    })),
  },
  {
    title: "Whitelabel",
    links: whitelabel.map(item => ({ 
      label: item, 
      href: `/whitelabel/${createSlug(item)}`,
      type: 'whitelabel'
    })),
  },
]

// Contact info data
const contactInfo = [
  {
    icon: <Mail size={18} style={{ color: 'hsl(var(--primary))' }} />,
    text: "contact@workdun.org",
    href: "mailto:contact@workdun.org",
  },
  {
    icon: <Phone size={18} style={{ color: 'hsl(var(--primary))' }} />,
    text: "+91 96200 77899",
    href: "tel:+919620077899",
  },
  {
    icon: <MapPin size={18} style={{ color: 'hsl(var(--primary))' }} />,
    text: "Bangalore, India",
  },
]

// Social media icons
const socialLinks = [
  { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
  { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
  { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
  { icon: <Globe size={20} />, label: "Globe", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-white relative h-fit rounded-t-3xl overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-primary text-3xl font-extrabold">
                WORKDUN
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We help businesses scale, grow, and dominate with cutting-edge technology solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second row: Resources and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8 lg:gap-16 pb-12 border-t border-border pt-12">
          {/* Resources section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              <li className="relative">
                <Link
                  to="/affiliate"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Affiliate Program
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/project-status"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Project Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-border my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-muted-foreground">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-muted-foreground">
            &copy; {new Date().getFullYear()} Workdun. All rights reserved.{" "}
            <span className="text-muted-foreground">
              Powered by{" "}
              <a
                href="https://nuemikos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Nuemikos Solutions LLP
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="WORKDUN" className="z-50" duration={0.15} />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}

