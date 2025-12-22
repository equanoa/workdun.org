'use client'

import { ImagePlayer } from "@/components/ui/image-player";

const IMAGES = [
  '/projects ss/Screenshot 2025-11-05 190234.jpg',
  '/projects ss/Screenshot 2025-11-05 190318.jpg',
  '/projects ss/Screenshot 2025-11-05 190343.jpg',
  '/projects ss/Screenshot 2025-11-05 190426.jpg',
  '/projects ss/Screenshot 2025-11-05 190444.jpg',
  '/projects ss/Screenshot 2025-11-05 190510.jpg',
  '/projects ss/Screenshot 2025-11-05 190537.jpg',
  '/projects ss/Screenshot 2025-11-05 190558.jpg',
  '/projects ss/Screenshot 2025-11-05 190618.jpg',
  '/projects ss/Screenshot 2025-11-05 190636.jpg',
  '/projects ss/Screenshot 2025-11-05 190914.jpg',
  '/projects ss/Screenshot 2025-11-05 190931.jpg',
  '/projects ss/Screenshot 2025-11-05 190958.jpg',
  '/projects ss/Screenshot 2025-11-05 191022.jpg',
  '/projects ss/Screenshot 2025-11-05 191046.jpg',
  '/projects ss/Screenshot 2025-11-05 191105.jpg',
  '/projects ss/Screenshot 2025-11-05 191122.jpg',
  '/projects ss/Screenshot 2025-11-05 191142.jpg',
  '/projects ss/Screenshot 2025-11-05 191218.jpg',
  '/projects ss/Screenshot 2025-11-05 191241.jpg',
  '/projects ss/Screenshot 2025-11-05 191301.jpg',
  '/projects ss/Screenshot 2025-11-05 191321.jpg',
  '/projects ss/Screenshot 2025-11-05 191347.jpg',
  '/projects ss/Screenshot 2025-11-05 191410.jpg',
  '/projects ss/Screenshot 2025-11-05 191433.jpg',
  '/projects ss/Screenshot 2025-11-05 202204.jpg',
  '/projects ss/Screenshot 2025-11-05 202231.jpg',
  '/projects ss/Screenshot 2025-11-05 202255.jpg',
];

"use client";

import { motion } from "motion/react";

export default function ImageShowcaseSection() {
  return (
    <section className="pt-16 md:pt-32 pb-8 md:pb-12 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-xl md:max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl text-foreground text-center">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Projects</span> We Showcase
          </h2>
          <p className="mt-6 text-muted-foreground text-center">
            Explore our portfolio of successful projects that demonstrate our expertise in delivering innovative solutions across diverse industries.
          </p>
        </motion.div>
        <div className="flex items-center justify-center">
          <ImagePlayer
            images={IMAGES}
            interval={200}
            renderImage={(src) => (
              <img
                src={src}
                className="w-full aspect-video object-cover rounded-lg shadow-lg max-w-4xl"
                alt="showcase"
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}

