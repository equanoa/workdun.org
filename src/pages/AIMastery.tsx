import { useEffect } from "react"
import { Footer } from "@/components/ui/footer"

export default function AIMastery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      <section className="min-h-screen pt-8 pb-16 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-semibold lg:text-5xl text-foreground mb-6">
            AI Mastery
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg">
              Content coming soon for AI Mastery.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
