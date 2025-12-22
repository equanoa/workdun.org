"use client"

import { useState } from "react"
import { ImageZoom } from "@/components/ui/zoomable-image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SHOWCASE_IMAGES = [
  {
    src: "/projects ss/Screenshot 2025-11-05 190234.jpg",
    alt: "Project Screenshot 1"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190318.jpg",
    alt: "Project Screenshot 2"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190343.jpg",
    alt: "Project Screenshot 3"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190426.jpg",
    alt: "Project Screenshot 4"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190444.jpg",
    alt: "Project Screenshot 5"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190510.jpg",
    alt: "Project Screenshot 6"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190537.jpg",
    alt: "Project Screenshot 7"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190558.jpg",
    alt: "Project Screenshot 8"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190618.jpg",
    alt: "Project Screenshot 9"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190636.jpg",
    alt: "Project Screenshot 10"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190914.jpg",
    alt: "Project Screenshot 11"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190931.jpg",
    alt: "Project Screenshot 12"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 190958.jpg",
    alt: "Project Screenshot 13"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191022.jpg",
    alt: "Project Screenshot 14"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191046.jpg",
    alt: "Project Screenshot 15"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191105.jpg",
    alt: "Project Screenshot 16"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191122.jpg",
    alt: "Project Screenshot 17"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191142.jpg",
    alt: "Project Screenshot 18"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191218.jpg",
    alt: "Project Screenshot 19"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191241.jpg",
    alt: "Project Screenshot 20"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191301.jpg",
    alt: "Project Screenshot 21"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191321.jpg",
    alt: "Project Screenshot 22"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191347.jpg",
    alt: "Project Screenshot 23"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191410.jpg",
    alt: "Project Screenshot 24"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 191433.jpg",
    alt: "Project Screenshot 25"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 202204.jpg",
    alt: "Project Screenshot 26"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 202231.jpg",
    alt: "Project Screenshot 27"
  },
  {
    src: "/projects ss/Screenshot 2025-11-05 202255.jpg",
    alt: "Project Screenshot 28"
  }
]

"use client";

import { motion } from "motion/react";

export default function ZoomableShowcaseSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 9
  const totalPages = Math.ceil(SHOWCASE_IMAGES.length / imagesPerPage)
  
  const startIndex = (currentPage - 1) * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = SHOWCASE_IMAGES.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {currentImages.map((image, index) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
            >
              <ImageZoom
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="border-border"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className={currentPage === page ? "bg-primary hover:bg-primary/90 text-white" : "border-border"}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border-border"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

