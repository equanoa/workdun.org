import { useEffect } from "react"
import { Footer } from "@/components/ui/footer"
import { FileCheck, Rocket, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectStatus() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      {/* Hero Section */}
      <section className="pt-32 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto mb-8 p-6 rounded-full bg-gradient-to-br from-red-50 to-red-100 w-fit">
              <FileCheck className="h-16 w-16 text-primary" />
            </div>

            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 rounded-full text-sm font-semibold text-white mb-8 shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span>Beta Testing</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Project <span style={{ color: 'hsl(var(--primary))' }}>Status</span>
            </h1>

            {/* Message Card */}
            <Card className="border-2 border-border bg-white shadow-2xl mt-12">
              <CardContent className="p-12 md:p-16">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-blue-50">
                    <Rocket className="h-12 w-12 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Coming Soon
                  </h2>
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl">
                    Live project tracking is in <span className="font-semibold text-primary">beta testing</span> and will be launched for all clients soon.
                  </p>
                  <div className="mt-8 pt-8 border-t border-border w-full">
                    <p className="text-base text-muted-foreground">
                      We're working hard to bring you real-time project updates, progress tracking, and comprehensive status management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Updates</div>
              </div>
              <div className="p-6 rounded-lg bg-white border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparency</div>
              </div>
              <div className="p-6 rounded-lg bg-white border border-border">
                <div className="text-3xl font-bold text-primary mb-2">Soon</div>
                <div className="text-sm text-muted-foreground">Available for All</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

