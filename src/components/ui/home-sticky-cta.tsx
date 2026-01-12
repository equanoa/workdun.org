"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket, Calendar } from "lucide-react";

export function HomeStickyCTA() {

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
      className="fixed bottom-0 left-0 right-0 z-50 w-full px-4 pb-4 md:pb-6"
    >
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-border p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="p-2 rounded-lg bg-secondary/20 flex-shrink-0">
            <Rocket className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-sm md:text-base font-bold text-foreground">Ready to scale your business?</p>
            <p className="text-xs text-muted-foreground hidden sm:block">Free consultation available</p>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            asChild
            size="sm"
            className="bg-[#0069ff] hover:bg-[#0052cc] text-white text-xs md:text-sm font-bold px-4 md:px-6 py-2 h-auto rounded-lg flex items-center gap-2 flex-1 sm:flex-initial"
          >
            <a href="https://calendar.app.google/MnKP61hhzdhfXEFv6" target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              <span>Schedule Call with Us</span>
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-green-600 bg-green-50 text-green-700 hover:bg-green-100 hover:border-green-700 hover:text-green-800 text-xs font-semibold px-3 py-2 h-auto rounded-lg flex-shrink-0"
          >
            <a href="https://wa.me/919620012323" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}


