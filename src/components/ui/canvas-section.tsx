"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import { Plus, Sparkles, Zap, Shield, Target, Rocket } from "lucide-react";
import { motion } from "motion/react";

export const CanvasSection = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  const benefits = [
    { icon: <Zap className="h-6 w-6" />, title: "Fast Delivery", desc: "Rapid deployment and implementation" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure & Reliable", desc: "Enterprise-grade security" },
    { icon: <Target className="h-6 w-6" />, title: "Results-Driven", desc: "Measurable business outcomes" },
    { icon: <Rocket className="h-6 w-6" />, title: "Scalable Solutions", desc: "Grow with your business" }
  ];

  return (
    <section id="home" className="relative pb-16 md:pb-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-transparent pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20"
      >
        <div className="mb-12 mt-4 md:mt-6">
          <div className="px-2">
            <div className="border border-border/80 relative mx-auto h-full max-w-7xl bg-white/90 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20 rounded-2xl">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex select-none flex-col px-3 py-2 text-center text-4xl font-extrabold leading-none tracking-tight text-foreground md:flex-col md:text-6xl lg:text-7xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -left-5 -top-5"
                >
                  <Plus
                    strokeWidth={4}
                    className="text-primary h-8 w-8 md:h-10 md:w-10"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -right-5 -top-5"
                >
                  <Plus
                    strokeWidth={4}
                    className="text-primary h-8 w-8 md:h-10 md:w-10"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -left-5 -bottom-5"
                >
                  <Plus
                    strokeWidth={4}
                    className="text-primary h-8 w-8 md:h-10 md:w-10"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -right-5 -bottom-5"
                >
                  <Plus
                    strokeWidth={4}
                    className="text-primary h-8 w-8 md:h-10 md:w-10"
                  />
                </motion.div>
                <span>Why choose</span>
                <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Workdun?</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center justify-center gap-1 mt-4"
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
                </span>
                <p className="text-xs font-semibold" style={{ color: 'hsl(var(--primary))' }}>Scale. Grow. Dominate.</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="p-6 bg-white/80 backdrop-blur-xl rounded-xl border border-border/80 shadow-lg hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-transparent to-transparent group-hover:from-blue-50/25 group-hover:via-blue-100/15 group-hover:to-transparent transition-all duration-500"></div>
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-primary mb-3 w-fit mx-auto"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto opacity-30"
        id="canvas"
      ></canvas>
    </section>
  );
};

