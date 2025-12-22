// components/ui/feature-modern.tsx

"use client";

import React from "react";
import { Link } from "react-router-dom";
import Balancer from "react-wrap-balancer";
import { ArrowRight, Palette, Code, ShoppingCart, TrendingUp, Brain, Settings, Factory, MessageSquare, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { createSlug } from "@/lib/utils";
import { motion } from "motion/react";

type FeatureItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  services: string[];
  href?: string;
  cta?: string;
};

const featureText: FeatureItem[] = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Product Design",
    description: "Designing experiences that delight users and drive success.",
    href: "/",
    services: [
      "UI/UX Design",
      "AI Product Design",
      "SaaS Product Design",
      "Game UI/UX",
      "UX Audits & Redesigns",
      "Product Strategy & Market Validation",
      "Design Systems & Prototyping",
      "Innovation Workshops & Design Sprints",
    ],
    cta: "Learn More",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Design & Development",
    description: "Beautiful, fast, and scalable digital experiences.",
    href: "/",
    services: [
      "Web Design & Development",
      "Custom Web Applications",
      "WordPress, Webflow & Framer Sites",
      "Landing Pages & Website Revamps",
      "API Integration & Architecture",
      "Website Migrations & Optimization",
      "Accessibility & WCAG Compliance",
    ],
    cta: "Learn More",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-Commerce",
    description: "E-commerce experiences built to convert and scale.",
    href: "/",
    services: [
      "Shopify / Shopify Plus",
      "WooCommerce",
      "Custom Online Stores",
      "Multi-Store Integrations & Automation",
    ],
    cta: "Learn More",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Brand & Creative",
    description: "Build a distinctive identity and tell your story with impact.",
    href: "/",
    services: [
      "Brand Strategy & Messaging",
      "Logo & Visual Identity Design",
      "Motion Graphics & Animation",
      "Photography & Production",
      "AR/VR Brand Experiences",
      "Sustainable & Ethical Brand Design",
    ],
    cta: "Learn More",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Content & Social",
    description: "Drive engagement, trust, and growth through compelling storytelling.",
    href: "/",
    services: [
      "Content Strategy & Marketing",
      "Blog & SEO Content Creation",
      "Social Media Management & Design",
      "Video Production & Editing",
      "Email Marketing & Newsletters",
      "Influencer & Affiliate Marketing",
      "Digital PR & Outreach",
      "Community Building & Lifecycle Marketing",
    ],
    cta: "Learn More",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Growth & Performance",
    description: "Data-driven marketing that delivers measurable ROI.",
    href: "/",
    services: [
      "SEO & Mobile Optimization",
      "PPC & Performance Marketing",
      "Analytics & A/B Testing",
      "CRM & Marketing Automation",
      "Personalization & Recommendation Systems",
      "Conversion Rate Optimization (CRO)",
    ],
    cta: "Learn More",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Data, AI & IoT",
    description: "Harness intelligence, automation, and connectivity for smarter operations.",
    href: "/",
    services: [
      "AI & Machine Learning Development",
      "Generative AI Tools & Chatbots",
      "Data Engineering & Analytics",
      "IoT Product Strategy & Prototyping",
      "Digital Twin Development",
      "Ethical AI & Responsible Data Use",
    ],
    cta: "Learn More",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Technology & Operations",
    description: "Build a resilient, scalable tech foundation that powers innovation.",
    href: "/",
    services: [
      "Cloud Architecture & DevOps",
      "Hosting, Monitoring & Maintenance",
      "Security & Penetration Testing",
      "QA & Testing Services",
      "Product Management & Roadmapping",
      "Systems Integration & Legacy Modernization",
      "ERP/CRM Implementation (Salesforce, HubSpot, etc.)",
    ],
    cta: "Learn More",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Strategic & Advisory",
    description: "Align your business, technology, and customer experience with growth.",
    href: "/",
    services: [
      "Digital Transformation Consulting",
      "Business Model & Go-To-Market Strategy",
      "Service Design & Customer Journey Mapping",
      "CX Analytics & Optimization",
      "Innovation & Design Thinking Workshops",
    ],
    cta: "Learn More",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Emerging Technologies",
    description: "Explore new frontiers in digital innovation.",
    href: "/",
    services: [
      "Blockchain & Web3 Development",
      "Crypto Mining Farm Setup",
      "Smart Contracts & DApps",
      "AR/VR/MR & Spatial Computing",
      "Voice & Conversational UI Design",
      "Metaverse Experience Design",
    ],
    cta: "Learn More",
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: "Manufacturing Support",
    description: "Bridging product innovation with real-world production.",
    href: "/",
    services: [
      "OEM Supplier Sourcing & Coordination",
      "ODM Product Development Support",
      "IoT Manufacturing Integration",
    ],
    cta: "Learn More",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Support & Training",
    description: "Ensuring long-term success and seamless knowledge transfer.",
    href: "/",
    services: [
      "Post-Launch Optimization & Maintenance",
      "Technical Documentation",
      "Team Training & Enablement (AI, CMS, Design Systems)",
    ],
    cta: "Learn More",
  },
];

export default function FeatureModern() {
  return (
    <section className={cn("py-16 md:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden")}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-transparent pointer-events-none"></div>
      <div className={cn("mx-auto max-w-xl md:max-w-6xl px-6 relative z-10")}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl text-foreground text-center">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Services</span> We Provide
          </h2>
          <p className="mt-6 text-muted-foreground text-center">
            We deliver end-to-end digital, design, and technology solutions that accelerate growth, optimize performance, and future-proof your business. From strategy and design to data, AI, and operations — we turn ideas into impactful results.
          </p>
        </motion.div>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {featureText.map(({ icon, title, description, services, href, cta }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03, 
                  rotateY: 2,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="h-full"
              >
                <Link
                  to={href || `/service/${createSlug(title)}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="flex flex-col justify-between gap-6 rounded-lg border border-border/80 bg-white/90 backdrop-blur-xl p-6 transition-all hover:shadow-2xl hover:shadow-primary/200/20 h-full group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-transparent to-transparent group-hover:from-blue-50/30 group-hover:via-red-100/20 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/0 group-hover:bg-red-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                  <div className="grid gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      style={{ color: 'hsl(var(--primary))' }}
                      className="w-fit"
                    >
                      {icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl text-foreground font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{description}</p>
                    </div>
                    <ul className="list-disc list-outside space-y-2 text-base text-muted-foreground pl-5" style={{ '--marker-color': '#ff0000' } as React.CSSProperties}>
                      {services.map((service, index) => (
                        <li key={index} className="leading-relaxed marker:text-primary" style={{ listStyleColor: '#ff0000' }}>{service}</li>
                      ))}
                    </ul>
                  </div>

                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors relative z-10">
                      <span>{cta}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}

