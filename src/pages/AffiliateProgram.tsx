import { useEffect } from "react"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Clock, Mail, ArrowRight } from "lucide-react"

export default function AffiliateProgram() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      <section className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-white to-gray-50 flex items-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-8">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Affiliate Program <span style={{ color: 'hsl(var(--primary))' }}>Coming Soon</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We're working on something exciting! Our affiliate program will be launching soon. Join our waitlist to be the first to know when we go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white text-base font-medium px-8 py-3 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:contact@workdun.org?subject=Affiliate Program Waitlist">
                  <Mail className="mr-2 h-4 w-4" />
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border border-border text-foreground hover:bg-white hover:border-border hover:text-foreground text-base font-medium px-8 py-3 h-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <a href="/#contact">
                  Contact Us
                </a>
              </Button>
            </div>
            <div className="bg-white border border-border rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">What to Expect</h2>
              <ul className="space-y-3 text-muted-foreground text-left">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Generous commission rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Real-time tracking and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Easy-to-use affiliate dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Marketing materials and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Monthly commission payouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

