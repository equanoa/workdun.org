"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

// AnimatedCounter Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

export function HomeStats() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 200, suffix: "+", label: "Clients Served" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50/50 via-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak for themselves. We deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.08, 
                y: -8, 
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="text-center p-8 bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-primary/200/30 transition-all duration-500 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-red-50/30 group-hover:via-red-100/20 group-hover:to-blue-50/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-primary via-blue-400 to-white bg-clip-text text-transparent mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-foreground text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


