import { useEffect, useState, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { 
  TrendingUp, 
  Zap, 
  Target, 
  Users, 
  BarChart, 
  Rocket, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Cloud,
  Lock,
  Smartphone,
  Settings,
  ShieldCheck,
  Star,
  Code,
  Database,
  HardDrive,
  Upload,
  Download,
  Folder,
  FileText,
  Award,
  Clock,
  HelpCircle,
  ChevronDown,
  Mail,
  MessageCircle,
  X,
  Video,
  MapPin,
  Phone,
  Calculator,
  Trophy
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
    icon: <Lock className="h-6 w-6" />,
    title: "End-to-End Encryption",
    description: "Military-grade encryption ensures all files are secure at rest and in transit, with zero-knowledge architecture."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Storage",
    description: "Scalable cloud infrastructure that grows with your needs, from gigabytes to petabytes of storage."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Multi-Platform Access",
    description: "Native apps for iOS, Android, Web, and Desktop with seamless file synchronization across all devices."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Collaboration",
    description: "Share files and folders with team members, set permissions, and collaborate in real-time."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Nextcloud Self-Hosted",
    description: "Built on Nextcloud technology. Deploy on your own servers for complete control over data, compliance, and security requirements."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Custom Branding",
    description: "Fully customizable with your logo, colors, and branding to match your business identity perfectly."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Admin Dashboard",
    description: "Comprehensive admin panel for user management, storage analytics, and system configuration."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Backup & Recovery",
    description: "Automated backups with point-in-time recovery to protect against data loss and disasters."
  }
]

const benefits = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Complete Data Control",
    description: "Your data stays yours. Built on Nextcloud technology with end-to-end encryption and self-hosting options, you maintain full control over sensitive information."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fast & Reliable",
    description: "High-performance storage with 99.9% uptime guarantee and global CDN for fast file access worldwide."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Fully Customizable",
    description: "Tailor every aspect of the storage platform to match your brand and business requirements."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Scalable Infrastructure",
    description: "Built to handle terabytes to petabytes of data with automatic scaling and load balancing."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Cost-Effective",
    description: "No per-user fees or hidden costs. Predictable pricing with self-hosting options to reduce long-term costs."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Access",
    description: "Access your files from anywhere in the world with secure, encrypted connections and multi-region support."
  }
]

const processSteps = [
  {
    number: "01",
    title: "Requirements & Planning",
    description: "We analyze your storage needs, discuss branding requirements, and plan the infrastructure setup."
  },
  {
    number: "02",
    title: "Customization & Setup",
    description: "Our team customizes the platform with your branding and configures it according to your specifications."
  },
  {
    number: "03",
    title: "Deployment & Testing",
    description: "We deploy the solution on your infrastructure or cloud, and conduct thorough testing to ensure optimal performance."
  },
  {
    number: "04",
    title: "Training & Support",
    description: "Comprehensive training for your team and ongoing support to ensure smooth operations and maintenance."
  }
]

const features = [
  "End-to-End Encryption",
  "Multi-Device Sync",
  "File Sharing",
  "Version Control",
  "Custom Branding",
  "Admin Dashboard",
  "API Integration",
  "Automated Backups"
]

export default function WhitelabelPrivateCloudStorage() {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const [iframeHeight, setIframeHeight] = useState(800)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    
  }, [])

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null
    
    const updateIframeHeight = () => {
      const iframeWrapper = formContainerRef.current?.querySelector('[data-iframe-wrapper]') as HTMLElement
      if (iframeWrapper) {
        const wrapperHeight = iframeWrapper.clientHeight
        const calculatedHeight = Math.max(400, wrapperHeight - 4)
        setIframeHeight(Math.floor(calculatedHeight))
      }
    }
    
    const initTimeout = setTimeout(() => {
      updateIframeHeight()
    }, 200)
    
    const loadTimeout = setTimeout(() => {
      updateIframeHeight()
    }, 500)
    
    window.addEventListener('resize', updateIframeHeight)
    
    const observerTimeout = setTimeout(() => {
      const iframeWrapper = formContainerRef.current?.querySelector('[data-iframe-wrapper]') as HTMLElement
      if (iframeWrapper) {
        resizeObserver = new ResizeObserver(() => {
          updateIframeHeight()
        })
        resizeObserver.observe(iframeWrapper)
      }
    }, 300)
    
    return () => {
      clearTimeout(initTimeout)
      clearTimeout(loadTimeout)
      clearTimeout(observerTimeout)
      window.removeEventListener('resize', updateIframeHeight)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
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
              Secure Storage Solution
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Whitelabel Your Own <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient">Private Cloud Storage</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Launch your own secure, encrypted cloud storage platform with complete branding control. Powered by Nextcloud technology. Perfect for businesses, organizations, and enterprises that prioritize data privacy and security.
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
              { value: 100, suffix: "+", label: "Deployments" },
              { value: 99.9, suffix: "%", label: "Uptime" },
              { value: 256, suffix: "-bit", label: "Encryption" },
              { value: null, suffix: "", label: "Support", display: "24/7" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
                className="text-center p-8 bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-primary/200/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/25 group-hover:via-blue-100/15 group-hover:to-blue-50/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-primary via-blue-400 to-white bg-clip-text text-transparent mb-3">
                    {stat.value !== null ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.display
                    )}
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
                Need Secure, <span style={{ color: 'hsl(var(--primary))' }}>Private Storage?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Many businesses struggle with data storage security and privacy. Public cloud storage platforms don't offer the control, branding, or security features that enterprises need.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Concerns about data privacy and third-party access",
                  "Lack of branding control on generic platforms",
                  "Compliance requirements for sensitive industries",
                  "Limited customization and integration options",
                  "High costs for enterprise storage solutions"
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
                Our whitelabel private cloud storage gives you complete control over your data storage platform. Built on Nextcloud technology, it features end-to-end encryption, custom branding, and self-hosting options for enterprise-grade security with your brand identity.
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
              Complete <span style={{ color: 'hsl(var(--primary))' }}>Storage Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Everything you need for secure, reliable file storage and sharing in one platform.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Powered by <span className="font-semibold text-foreground">Nextcloud</span> technology for enterprise-grade cloud storage infrastructure.
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
          <p className="text-muted-foreground mb-6">Want to see how these features work for your organization?</p>
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
              Why Choose Our <span style={{ color: 'hsl(var(--primary))' }}>Whitelabel Solution?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security and features with complete branding control.
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
              Simple <span style={{ color: 'hsl(var(--primary))' }}>Implementation Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From planning to launch, we guide you through every step of the process.
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
                Built for <span style={{ color: 'hsl(var(--primary))' }}>Security & Privacy</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our private cloud storage is designed with security and privacy as top priorities. Built on Nextcloud technology, every feature is built to protect your data and files.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                <span className="font-semibold text-foreground">Nextcloud</span> provides the open-source, self-hosted cloud storage platform with enterprise-grade security and collaboration features.
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
                    <Cloud className="h-24 w-24 text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Storage Stats</h3>
                <div className="space-y-6">
                  {[
                    { label: "End-to-End Encryption", value: 100 },
                    { label: "Data Privacy", value: 100 },
                    { label: "Uptime", value: 99.9 }
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
              <p className="text-muted-foreground">Enterprise-grade security and data protection. Your information is safe with us.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4" style={{ color: 'hsl(var(--primary))' }}>
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Satisfaction Commitment</h3>
              <p className="text-muted-foreground">We're committed to your success. Our team works closely with you to ensure you achieve your goals.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4" style={{ color: 'hsl(var(--primary))' }}>
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Deployment</h3>
              <p className="text-muted-foreground">Get up and running in 2-4 weeks. Start seeing results immediately.</p>
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
              Trusted by Leading <span style={{ color: 'hsl(var(--primary))' }}>Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how organizations have successfully deployed our whitelabel cloud storage solution.
            </p>
          </motion.div>

          {/* Testimonials Data */}
          {(() => {
            const testimonials = [
              {
                quote: "The private cloud storage has transformed how we manage files. The security features give us peace of mind, and the custom branding makes it feel like our own product. Highly recommended!",
                name: "Rajesh Kumar",
                role: "IT Director, SecureData Corp",
                location: "Mumbai, Maharashtra",
                metric: "100% Secure",
                metricLabel: "end-to-end encryption"
              },
              {
                quote: "We needed a secure storage platform that we could brand as our own. This solution exceeded our expectations. The deployment was smooth, and the support has been excellent.",
                name: "Priya Sharma",
                role: "CTO, TechSolutions India",
                location: "Delhi, NCR",
                metric: "2 Weeks",
                metricLabel: "to full deployment"
              },
              {
                quote: "The self-hosting option was crucial for our compliance requirements. We have complete control over our data, and the platform performs flawlessly. Best investment we've made!",
                name: "Amit Patel",
                role: "Security Lead, FinanceFirst",
                location: "Bangalore, Karnataka",
                metric: "99.9% Uptime",
                metricLabel: "guaranteed"
              },
              {
                quote: "Nextcloud's open-source foundation gives us the flexibility we need. The custom branding perfectly matches our corporate identity, and our team loves using it.",
                name: "Anjali Reddy",
                role: "Operations Manager, DataSecure",
                location: "Hyderabad, Telangana",
                metric: "+90% Efficiency",
                metricLabel: "in file management"
              },
              {
                quote: "The integration was seamless. We now have a storage platform that rivals any commercial solution, but with complete control over our data and compliance.",
                name: "Vikram Singh",
                role: "CEO, CloudGuard Systems",
                location: "Pune, Maharashtra",
                metric: "Zero Downtime",
                metricLabel: "during migration"
              },
              {
                quote: "Our compliance team was impressed with the security features. The end-to-end encryption and self-hosting options meet all our regulatory requirements.",
                name: "Kavita Desai",
                role: "Compliance Officer, SecureBank",
                location: "Chennai, Tamil Nadu",
                metric: "100% Compliance",
                metricLabel: "audit success"
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
            <p className="text-sm font-semibold text-muted-foreground mb-6">Trusted by Leading Organizations Globally</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["SecureData Corp", "TechSolutions India", "FinanceFirst", "DataSecure", "CloudGuard Systems", "SecureBank"].map((name, i) => (
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
              Everything you need to know about deploying your private cloud storage.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["All", "Pricing", "Implementation", "Support"].map((category) => (
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
                category: "Implementation",
                question: "How long does deployment take?",
                answer: "Most organizations are up and running within 2-4 weeks. Our team handles everything from setup to training, ensuring minimal disruption to your operations."
              },
              {
                category: "Implementation",
                question: "Can we self-host the solution?",
                answer: "Yes! Our solution is built on Nextcloud technology and can be deployed on your own servers for complete control over data and compliance requirements."
              },
              {
                category: "Pricing",
                question: "What if I'm not satisfied?",
                answer: "We're committed to your success. Our team works closely with you throughout the deployment process to ensure you achieve your goals."
              },
              {
                category: "Support",
                question: "Do you provide training and support?",
                answer: "Absolutely! We provide comprehensive training for your entire team and offer 24/7 support to ensure you get the most out of your cloud storage platform."
              },
              {
                category: "Pricing",
                question: "How much does it cost?",
                answer: "Pricing depends on your organization's specific needs and storage requirements. Schedule a free consultation to get a customized quote."
              },
              {
                category: "Implementation",
                question: "What happens during the transition period?",
                answer: "We provide a dedicated project manager who works closely with your team. We handle data migration, system setup, and provide comprehensive training."
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
        ref={formContainerRef}
        id="contact-form"
        className="bg-white scroll-mt-16" 
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
                <Cloud className="h-20 w-20" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Ready to Launch Your Private Cloud Storage?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 font-medium">
              Join organizations that have successfully deployed their own secure cloud storage platform. Get started today with a free consultation.
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

