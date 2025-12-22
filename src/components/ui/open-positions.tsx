'use client'

import { useRef } from "react"
import { motion } from "motion/react"
import { useElasticLineEvents } from "@/components/hooks/use-elastic-line-events"

function ElasticLineDemo() {
  const verticalRef = useRef<SVGSVGElement>(null)
  const horizontalRef = useRef<SVGSVGElement>(null)

  const vertical = useElasticLineEvents(verticalRef, true, 20, 100)
  const horizontal = useElasticLineEvents(horizontalRef, false, 20, 100)

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 p-8 max-w-4xl mx-auto">
      {/* Vertical Line Demo */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-foreground">Vertical Elastic</h3>
          <p className="text-sm text-muted-foreground">
            Move your cursor near the center line
          </p>
        </div>
        <div className="relative aspect-square w-full border border-border rounded-lg bg-muted">
          <svg
            ref={verticalRef}
            className="w-full h-full"
            viewBox="0 0 400 400"
            style={{ touchAction: "none" }}
          >
            <path
              d={`M 200,0 Q ${vertical.controlPoint.x},${vertical.controlPoint.y} 200,400`}
              stroke={vertical.isGrabbed ? "hsl(var(--primary))" : "#94a3b8"}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Horizontal Line Demo */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-foreground">Horizontal Elastic</h3>
          <p className="text-sm text-muted-foreground">
            Move your cursor near the center line
          </p>
        </div>
        <div className="relative aspect-square w-full border border-border rounded-lg bg-muted">
          <svg
            ref={horizontalRef}
            className="w-full h-full"
            viewBox="0 0 400 400"
            style={{ touchAction: "none" }}
          >
            <path
              d={`M 0,200 Q ${horizontal.controlPoint.x},${horizontal.controlPoint.y} 400,200`}
              stroke={horizontal.isGrabbed ? "hsl(var(--primary))" : "#94a3b8"}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Documentation */}
      <div className="col-span-2">
        <div className="space-y-4 p-6 border border-border rounded-lg bg-white">
          <h3 className="text-lg font-medium text-foreground">
            Open <span style={{ color: 'hsl(var(--primary))' }}>Positions</span>
          </h3>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md text-xs overflow-x-auto font-mono">
              <pre className="text-foreground whitespace-pre">
{`const openPositions = [
  "Social Media Manager",            // Marketing, Remote
  "Affiliate Marketing Manager",     // Marketing, Remote
  "Full-Stack Developer",            // Engineering, Remote / Hybrid
  "Wordpress Developer",              // Engineering, Remote
  "Accountant"                        // Finance, Remote / Hybrid
];

// 30 day internships are open for students*

// Email your resume/CV and/or portfolio to: `}
              </pre>
              <span className="text-primary font-mono">contact@workdun.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OpenPositions() {
  return (
    <section className="bg-white pt-16 md:pt-32 pb-16 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold lg:text-5xl text-foreground">
            Open <span style={{ color: 'hsl(var(--primary))' }}>Positions</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Join our team and help businesses scale, grow, and dominate. We're looking for talented individuals who are passionate about innovation.
          </p>
        </div>

        {/* Elastic Line Demo */}
        <ElasticLineDemo />

        {/* Contact Form */}
        <div id="contact" className="mt-24 max-w-2xl mx-auto scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold lg:text-5xl text-foreground mb-4">
              Get in <span style={{ color: 'hsl(var(--primary))' }}>Touch</span>
            </h2>
            <p className="text-muted-foreground">
              Have questions or want to apply? Send us a message and we'll get back to you soon.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <div className="bg-white border border-border rounded-lg p-4 md:p-8 shadow-sm overflow-hidden">
      <div className="w-full max-w-2xl mx-auto">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeWaFmHAUxALl9TVpff338_ZBq4mbnIXyPT6Qn5cGNyTc9wag/viewform?embedded=true" 
          width="100%" 
          height="793"
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          style={{ 
            display: 'block', 
            border: 'none', 
            width: '100%',
            minHeight: '793px'
          }}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}
