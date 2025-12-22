"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function HomeFAQ() {

  const faqs = [
    {
      category: "Services",
      question: "What services does Workdun provide?",
      answer: "We provide comprehensive digital, design, and technology solutions including product design, web development, e-commerce, brand & creative, content & social, growth & performance, data/AI/IoT, technology & operations, strategic advisory, emerging technologies, manufacturing support, and support & training."
    },
    {
      category: "Process",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Most projects are completed within 4-8 weeks, while comprehensive solutions may take 8-16 weeks. We work closely with you to ensure timely delivery while maintaining quality."
    },
    {
      category: "Support",
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We provide ongoing support, monitoring, optimization, and maintenance services. Our team ensures your solutions stay updated, secure, and optimized over time."
    },
    {
      category: "Services",
      question: "Can you work with existing systems and platforms?",
      answer: "Absolutely! We specialize in integrating with and enhancing existing systems. We analyze your current infrastructure and seamlessly integrate new solutions while maintaining system continuity."
    },
    {
      category: "Process",
      question: "What industries do you serve?",
      answer: "We serve businesses across multiple industries including Information Technology, IoT & Connected Devices, Artificial Intelligence, E-commerce Platforms, Skincare & Health, Fitness & Health, Lawyers & Law Firms, NFT & Crypto Mining, and Banking & Finance."
    },
    {
      category: "Support",
      question: "How do you ensure project quality and success?",
      answer: "Quality is ensured through comprehensive planning, regular check-ins, thorough testing, and quality assurance processes. We track metrics and provide regular reports. We're committed to your success and work closely with you throughout the project."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to know about our services and process.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Services", "Process", "Support"].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full border-border text-foreground bg-white hover:border-primary hover:text-primary hover:bg-secondary/20 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="border-border bg-white text-foreground shadow-md hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-transparent group-hover:from-blue-50/25 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-lg text-foreground group-hover:text-primary transition-colors">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </motion.div>
                      {faq.question}
                    </CardTitle>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-primary border border-secondary/40">
                      {faq.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 border border-primary/20"
        >
          <p className="text-foreground mb-4 font-medium">Still have questions?</p>
          <p className="text-muted-foreground text-sm">Click the scheduling button to book a time with our team.</p>
        </motion.div>
      </div>
    </section>
  );
}


