import { useEffect, useState, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { 
  MessageSquare, 
  PenTool, 
  Video, 
  Mail, 
  Users, 
  TrendingUp, 
  Search, 
  Share2,
  ArrowRight,
  Award,
  Clock,
  HelpCircle,
  MessageCircle,
  MapPin,
  Star,
  Shield,
  CheckCircle,
  Globe,
  Zap,
  Target,
  BarChart
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// AnimatedCounter Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

const services = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Content Strategy",
    description: "Develop comprehensive content strategies that engage audiences and drive results."
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Blog & SEO Content",
    description: "Create SEO-optimized blog content that ranks well and provides value to readers."
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Social Media Management",
    description: "Manage and grow your social media presence with engaging content and community management."
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Production",
    description: "Produce professional videos for marketing, social media, and brand storytelling."
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Marketing",
    description: "Design and execute email campaigns that nurture leads and drive conversions."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Influencer Marketing",
    description: "Connect with influencers and manage affiliate marketing programs."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Digital PR",
    description: "Build brand awareness through strategic PR and media outreach."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Community Building",
    description: "Build and nurture online communities around your brand and products."
  }
]

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Data-Driven Strategy",
    description: "Content strategies based on audience insights and performance data for maximum impact."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multi-Channel Approach",
    description: "Consistent messaging across all platforms and channels for unified brand presence."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Creative Excellence",
    description: "High-quality content that captures attention and drives engagement across all touchpoints."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Proven Results",
    description: "Track record of successful content campaigns that drive growth and engagement."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Measurable Results",
    description: "Track and optimize performance with comprehensive analytics and reporting."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your content needs are met whenever you need them."
  }
]

const processSteps = [
  {
    number: "01",
    title: "Strategy & Planning",
    description: "We analyze your audience, competitors, and goals to create a comprehensive content strategy."
  },
  {
    number: "02",
    title: "Content Creation",
    description: "Our team creates high-quality content across all formats and channels with attention to detail."
  },
  {
    number: "03",
    title: "Distribution & Management",
    description: "We distribute and manage your content across all platforms for maximum reach and engagement."
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "We continuously optimize and refine your content strategy to drive growth and engagement."
  }
]

const features = [
  "Content Strategy",
  "Blog & SEO Content",
  "Social Media Management",
  "Video Production",
  "Email Marketing",
  "Influencer Marketing",
  "Digital PR",
  "Community Building"
]

export default function ContentSocial() {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    
  }, [])

  return (
    <div style={{ backgroundColor: 'white' }} className="pt-16">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="pt-20 pb-16 bg-gradient-to-br from-white via-blue-50/30 via-gray-50/50 to-white relative overflow-hidden"
      >
        {/* Premium animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-blue-500/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/10 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-white/80 backdrop-blur-xl border border-secondary/40/50 rounded-full text-sm font-bold text-primary mb-8 shadow-lg shadow-primary/100/50 hover:shadow-xl hover:shadow-primary/200/50 transition-all duration-300"
            >
              Content Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Content & <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Social</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Drive engagement, trust, and growth through compelling storytelling. We create content that resonates and social strategies that convert.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white text-base font-bold px-10 py-4 h-auto rounded-xl shadow-2xl hover:shadow-primary/500/50 transition-all duration-300 group relative overflow-hidden"
                >
                  <a href="#contact-form" className="flex items-center">
                    <span>Get Started Today</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  asChild
                  className="border-2 border-border/80 text-foreground hover:text-foreground hover:border-border text-base font-semibold px-10 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-xl hover:bg-white"
                >
                  <a href="/pricing" className="flex items-center">
                    View Pricing
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20"
          >
            {[
              { value: 1200, suffix: "+", label: "Content Pieces" },
              { value: 96, suffix: "%", label: "Client Satisfaction" },
              { value: 24, suffix: "/7", label: "Support" },
              { value: 65, suffix: "+", label: "Content Experts" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8, 
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="text-center p-8 bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-primary/200/30 transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/25 group-hover:via-blue-100/15 group-hover:to-blue-50/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-primary via-blue-400 to-white bg-clip-text text-transparent mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-foreground text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Struggling with Your <span style={{ color: 'hsl(var(--primary))' }}>Content Strategy?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Many businesses face challenges with inconsistent content, low engagement, and unclear messaging that limit growth and audience connection.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Inconsistent content across platforms",
                  "Low engagement and poor reach",
                  "Unclear content strategy and messaging",
                  "Lack of content production resources",
                  "Poor content performance and ROI"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-primary mt-1 text-xl font-bold">✗</div>
                    <div className="text-foreground">{item}</div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-blue-50 via-blue-50/40 to-gray-50 rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">The Solution</h3>
              <p className="text-foreground mb-6">
                Our comprehensive content and social services create engaging, strategic content that resonates with audiences. We transform your content strategy with data-driven insights and creative excellence.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Content <span style={{ color: 'hsl(var(--primary))' }}>Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete content and social media services from strategy to execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03, 
                  rotateY: 2,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="h-full"
              >
                <Card className="border-border/80 bg-white/90 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500 h-full group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/30 group-hover:via-blue-100/15 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/0 group-hover:bg-blue-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 w-fit mb-6 group-hover:from-blue-100 group-hover:via-blue-200 group-hover:to-blue-100 transition-all duration-500 shadow-lg shadow-primary/100/50 group-hover:shadow-xl group-hover:shadow-primary/200/50"
                      style={{ color: 'hsl(var(--primary))' }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-extrabold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mid-Page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-semibold text-green-700 mb-4">
            <Clock className="h-4 w-4" />
            Limited Time: Free Consultation Available
          </div>
          <p className="text-muted-foreground mb-6">Want to see how these solutions work for your content?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white text-base font-bold px-8 py-3 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#contact-form">
                Schedule Free Demo
                <Video className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-green-600 bg-green-50 text-green-700 hover:bg-green-100 hover:border-green-700 hover:text-green-800 text-base font-semibold px-8 py-3 h-auto rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <a href="https://wa.me/919620012323" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Our Content <span style={{ color: 'hsl(var(--primary))' }}>Services?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade content and social services with proven results and comprehensive support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03, 
                  rotateX: 2,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="bg-white/90 backdrop-blur-xl border border-border/80 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/30 group-hover:via-blue-100/20 group-hover:to-transparent transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/0 group-hover:bg-blue-200/15 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 w-fit mb-6 group-hover:from-blue-100 group-hover:via-blue-200 group-hover:to-blue-100 transition-all duration-500 shadow-lg shadow-primary/100/50 group-hover:shadow-xl group-hover:shadow-primary/200/50"
                    style={{ color: 'hsl(var(--primary))' }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Content <span style={{ color: 'hsl(var(--primary))' }}>Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to optimization, we guide you through every step of your content journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    y: -12, 
                    scale: 1.04, 
                    rotateY: 3,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  className="bg-white/90 backdrop-blur-xl border border-border/80 rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/30 group-hover:via-blue-100/20 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/0 group-hover:bg-blue-200/15 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
                      className="text-7xl font-extrabold bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 bg-clip-text text-transparent mb-6 group-hover:from-blue-200 group-hover:via-blue-300 group-hover:to-blue-200 transition-all duration-500"
                    >
                      {step.number}
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{step.description}</p>
                  </div>
                </motion.div>
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5, type: "spring" }}
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                  >
                    <div className="p-2 rounded-full bg-white/80 backdrop-blur-xl border border-border/50 shadow-lg">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-50/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive Content <span style={{ color: 'hsl(var(--primary))' }}>Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our content and social services cover every aspect of content development, from strategy to creation and distribution.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                We deliver end-to-end content solutions that transform your strategy and drive business growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.03, y: -8, rotateY: 2 }}
              className="bg-gradient-to-br from-blue-50/80 via-blue-50/60 to-gray-50/90 backdrop-blur-xl rounded-3xl p-12 border border-white/50 shadow-2xl hover:shadow-primary/200/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="mb-8"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 w-fit shadow-xl shadow-primary/200/50">
                    <Share2 className="h-24 w-24 text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Content Stats</h3>
                <div className="space-y-6">
                  {[
                    { label: "Engagement Rate", value: 92 },
                    { label: "Client Satisfaction", value: 96 },
                    { label: "Content Quality", value: 94 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-foreground font-bold text-lg">{item.label}</span>
                        <span className="text-primary font-extrabold text-xl">{item.value}%</span>
                      </div>
                      <div className="h-4 bg-border/80 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary via-blue-400 to-white rounded-full shadow-lg shadow-primary/500/30 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4" style={{ color: 'hsl(var(--primary))' }}>
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">100% Secure</h3>
              <p className="text-muted-foreground">Enterprise-grade security and data protection. Your content assets are safe with us.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4" style={{ color: 'hsl(var(--primary))' }}>
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Satisfaction Commitment</h3>
              <p className="text-muted-foreground">We're committed to your success. Our team works closely with you to ensure you achieve your content goals.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4" style={{ color: 'hsl(var(--primary))' }}>
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Delivery</h3>
              <p className="text-muted-foreground">Get your content strategy ready in 1-2 weeks. Start engaging your audience immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Proof Section - Dual Layer Carousel */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by Leading <span style={{ color: 'hsl(var(--primary))' }}>Brands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how brands have successfully transformed their content strategy with our services.
            </p>
          </motion.div>

          {/* Testimonials Data */}
          {(() => {
            const testimonials = [
              {
                quote: "The content strategy completely transformed our engagement. Social media engagement increased by 320%, and website traffic improved by 250%. The new content is strategic, engaging, and impactful.",
                name: "Rajesh Kumar",
                role: "Founder, ContentBrand",
                location: "Mumbai, Maharashtra",
                metric: "320% Engagement",
                metricLabel: "increase in social media engagement"
              },
              {
                quote: "The blog and SEO content exceeded our expectations. We now have consistent, high-quality content that ranks well, and organic traffic has increased dramatically.",
                name: "Priya Sharma",
                role: "CEO, MediaAgency",
                location: "Delhi, NCR",
                metric: "250% Traffic",
                metricLabel: "increase in organic traffic"
              },
              {
                quote: "The social media management made everything consistent. Our team now has clear direction, and brand consistency has improved by 98% across all platforms.",
                name: "Amit Patel",
                role: "Marketing Director, TechBrand",
                location: "Bangalore, Karnataka",
                metric: "98% Consistency",
                metricLabel: "brand consistency improvement"
              },
              {
                quote: "The video production brought our brand to life. Video engagement increased by 280%, and our brand videos are now more impactful and memorable.",
                name: "Anjali Reddy",
                role: "Founder, VideoBrand",
                location: "Hyderabad, Telangana",
                metric: "280% Engagement",
                metricLabel: "increase in video engagement"
              },
              {
                quote: "The email marketing elevated our conversions significantly. Email open rates improved, and customer conversions have increased by 195%.",
                name: "Vikram Singh",
                role: "Owner, EcommerceBrand",
                location: "Pune, Maharashtra",
                metric: "195% Conversions",
                metricLabel: "increase in email conversions"
              },
              {
                quote: "The influencer marketing was innovative. We now have strategic partnerships, and brand awareness has increased by 240%.",
                name: "Kavita Desai",
                role: "Director, FashionBrand",
                location: "Chennai, Tamil Nadu",
                metric: "240% Awareness",
                metricLabel: "increase in brand awareness"
              }
            ];
            
            const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
            
            return (
              <div className="space-y-8 md:space-y-12">
                {/* First Layer - Slides Left to Right */}
                <div className="relative overflow-hidden py-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
                  <div className="flex gap-6 md:gap-8 carousel-slide-left" style={{ width: 'fit-content' }}>
                    {duplicatedTestimonials.map((testimonial, index) => (
                      <motion.div
                        key={`layer1-${index}`}
                        className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[500px] lg:w-[600px]"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <Card className="border-border/80 bg-white/90 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500 h-full group cursor-pointer relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/25 group-hover:via-blue-100/15 group-hover:to-transparent transition-all duration-500"></div>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/0 group-hover:bg-blue-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                          <CardContent className="p-8 md:p-10 relative z-10">
                            <div className="flex mb-6">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                              ))}
                            </div>
                            <p className="text-foreground mb-6 md:mb-8 italic leading-relaxed text-base md:text-lg font-medium">{testimonial.quote}</p>
                            {testimonial.metric && (
                              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 border border-secondary/40/50">
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="h-5 w-5 text-primary" />
                                  <div>
                                    <div className="font-extrabold text-primary text-lg">{testimonial.metric}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.metricLabel}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="flex items-center gap-4 md:gap-5 pt-6 border-t border-border/50">
                              <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center text-primary font-extrabold text-lg md:text-xl shadow-lg shadow-primary/200/50">
                                {testimonial.name.charAt(0)}
                              </div>
                  <div>
                                <div className="font-bold text-foreground text-base md:text-lg">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                  <MapPin className="h-3 w-3" />
                                  {testimonial.location}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Second Layer - Slides Right to Left */}
                <div className="relative overflow-hidden py-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
                  <div className="flex gap-6 md:gap-8 carousel-slide-right" style={{ width: 'fit-content' }}>
                    {duplicatedTestimonials.map((testimonial, index) => (
                      <motion.div
                        key={`layer2-${index}`}
                        className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[500px] lg:w-[600px]"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <Card className="border-border/80 bg-white/90 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/200/20 transition-all duration-500 h-full group cursor-pointer relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/25 group-hover:via-blue-100/15 group-hover:to-transparent transition-all duration-500"></div>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/0 group-hover:bg-blue-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                          <CardContent className="p-8 md:p-10 relative z-10">
                            <div className="flex mb-6">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                              ))}
                            </div>
                            <p className="text-foreground mb-6 md:mb-8 italic leading-relaxed text-base md:text-lg font-medium">{testimonial.quote}</p>
                            {testimonial.metric && (
                              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 border border-secondary/40/50">
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                                    <div className="font-extrabold text-primary text-lg">{testimonial.metric}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.metricLabel}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="flex items-center gap-4 md:gap-5 pt-6 border-t border-border/50">
                              <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center text-primary font-extrabold text-lg md:text-xl shadow-lg shadow-primary/200/50">
                                {testimonial.name.charAt(0)}
                  </div>
                  <div>
                                <div className="font-bold text-foreground text-base md:text-lg">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                  <MapPin className="h-3 w-3" />
                                  {testimonial.location}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Enhanced Social Proof Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-muted-foreground mb-6">Trusted by Leading Brands Globally</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["ContentBrand", "MediaAgency", "TechBrand", "VideoBrand", "EcommerceBrand", "FashionBrand"].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-muted-foreground font-semibold text-sm md:text-base"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span style={{ color: 'hsl(var(--primary))' }}>Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about our content and social services.
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
            {[
              {
                category: "Process",
                question: "How long does content strategy development take?",
                answer: "Content strategy timelines vary based on scope and complexity. Most content strategies are completed within 2-4 weeks, while comprehensive content systems may take 6-8 weeks. We work closely with you to ensure timely delivery."
              },
              {
                category: "Services",
                question: "What content and social services do you offer?",
                answer: "We offer comprehensive content and social services including content strategy, blog & SEO content, social media management, video production, email marketing, influencer marketing, digital PR, and community building. Our services are tailored to your specific needs."
              },
              {
                category: "Support",
                question: "Do you provide ongoing content support?",
                answer: "Yes! We provide ongoing content support, strategy maintenance, and creative direction. Our team ensures your content stays consistent and evolves with your business needs."
              },
              {
                category: "Services",
                question: "Can you help with existing content?",
                answer: "Absolutely! We specialize in content optimization and redesigns. We analyze your existing content, identify opportunities, and optimize for improved engagement, consistency, and impact while maintaining brand voice."
              },
              {
                category: "Process",
                question: "What happens during the content development process?",
                answer: "We provide a dedicated content team that works closely with your team. We handle research, strategy, creation, distribution, and optimization. Most content development processes involve regular check-ins and feedback sessions."
              },
              {
                category: "Support",
                question: "How do you ensure content consistency?",
                answer: "Consistency is built into every layer of our content development process. We create comprehensive content guidelines, provide training, and offer ongoing support to ensure consistent content expression across all touchpoints."
              }
            ].map((faq, index) => (
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
            className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 border border-secondary/40/50"
          >
            <p className="text-foreground mb-4 font-medium">Still have questions?</p>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white transition-all duration-300"
            >
              <a href="#contact-form">
                Contact Our Team
                <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Google Form Section */}
      <section 
        id="contact-form"
        className="bg-white scroll-mt-16 py-12" 
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-semibold text-green-700 mb-4">
              <CheckCircle className="h-4 w-4" />
              Free Consultation • No Credit Card Required
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Get Started <span style={{ color: 'hsl(var(--primary))' }}>Today</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-4">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
          <div className="bg-white border border-border rounded-lg p-4 md:p-8 shadow-sm overflow-hidden">
            <div className="w-full max-w-2xl mx-auto">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeWaFmHAUxALl9TVpff338_ZBq4mbnIXyPT6Qn5cGNyTc9wag/viewform?embedded=true" 
                width="100%" 
                height="793"
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                style={{ 
                  display: 'block', 
                  border: 'none', 
                  width: '100%',
                  minHeight: '793px'
                }}
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-80 h-80 bg-white/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="mb-8"
            >
              <div className="inline-block p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                <Share2 className="h-20 w-20" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 font-medium">
              Join brands that have successfully transformed their content strategy with our services. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-white text-primary hover:bg-muted text-base font-bold px-10 py-4 h-auto rounded-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <a href="#contact-form" className="flex items-center">
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear"
                      }}
                    />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white text-base font-semibold px-10 py-4 h-auto rounded-xl backdrop-blur-xl transition-all duration-300"
                >
                  <a href="/pricing">
                    View Pricing Plans
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

