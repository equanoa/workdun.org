import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Footer } from "@/components/ui/footer"

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>()
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])
  
  // Convert slug back to readable format
  const solutionName = slug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Solution'

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      <section className="min-h-screen pt-8 pb-16 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-semibold lg:text-5xl text-foreground mb-6">
            {solutionName}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg">
              Content coming soon for {solutionName}.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

