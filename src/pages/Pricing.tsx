import { useEffect } from "react"
import { Footer } from "@/components/ui/footer"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      <section className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Custom <span style={{ color: 'hsl(var(--primary))' }}>Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We understand that every business has unique needs. Our pricing is tailored to your specific requirements and project scope.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get Your Custom Quotation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with us at <a href="mailto:contact@workdun.org" className="text-primary font-semibold hover:underline">contact@workdun.org</a> with your requirements, and we'll provide a detailed, custom quotation tailored to your needs.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">What to Include in Your Request:</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Project scope and objectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Specific services or solutions needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Timeline and deadlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Budget range (if available)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Any specific requirements or constraints</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white text-base font-medium px-8 py-3 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:contact@workdun.org?subject=Custom Quotation Request">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border border-border text-foreground hover:bg-white hover:border-border hover:text-foreground text-base font-medium px-8 py-3 h-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <a href="/#contact">
                  Contact Form
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              We typically respond within 24 hours with a detailed quotation and proposal.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

