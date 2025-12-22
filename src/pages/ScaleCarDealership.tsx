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
  Car,
  ShoppingCart,
  Smartphone,
  Database,
  Settings,
  Palette,
  MessageSquare,
  Trophy,
  Star,
  CreditCard,
  Calendar,
  FileText,
  Wrench,
  Lock,
  Award,
  Clock,
  HelpCircle,
  ChevronDown,
  Mail,
  MessageCircle,
  X,
  Calculator,
  TrendingDown,
  Play,
  Download,
  BookOpen,
  Building2,
  MapPin,
  Phone,
  Video
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Car className="h-6 w-6" />,
    title: "Inventory Management System",
    description: "Streamline vehicle inventory tracking, pricing, and availability across multiple locations in real-time."
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Online Sales Platform",
    description: "Build a comprehensive e-commerce platform for selling vehicles online with financing and trade-in options."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Customer Mobile App",
    description: "Develop mobile apps for customers to browse inventory, schedule test drives, and manage service appointments."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "CRM & Lead Management",
    description: "Track customer interactions, manage leads, and automate follow-ups to maximize conversion rates."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Financing Integration",
    description: "Integrate with lenders and financial institutions to streamline the financing process for customers."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Service Scheduling System",
    description: "Automate service appointment booking, technician scheduling, and customer notifications."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Document Management",
    description: "Digitize and manage all dealership documents, contracts, and paperwork in a secure, searchable system."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics & Reporting",
    description: "Get real-time insights into sales performance, inventory turnover, and customer behavior."
  }
]

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Increased Sales Revenue",
    description: "Boost sales with better inventory visibility, streamlined processes, and enhanced customer experience."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Operational Efficiency",
    description: "Automate manual processes, reduce paperwork, and eliminate bottlenecks in your sales and service operations."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Better Lead Conversion",
    description: "Track and nurture leads effectively with automated follow-ups and personalized communication."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Enhanced Customer Experience",
    description: "Provide seamless online and in-person experiences that keep customers coming back."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Compliance & Security",
    description: "Ensure all transactions and customer data meet industry regulations and security standards."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multi-Location Management",
    description: "Manage multiple dealership locations from a single platform with centralized reporting and control."
  }
]

const processSteps = [
  {
    number: "01",
    title: "Dealership Assessment",
    description: "We analyze your current operations, identify pain points, and understand your growth objectives."
  },
  {
    number: "02",
    title: "Custom Solution Design",
    description: "Our experts design integrated systems tailored to your dealership's unique needs and workflows."
  },
  {
    number: "03",
    title: "Implementation & Training",
    description: "We implement solutions with minimal disruption and provide comprehensive training for your team."
  },
  {
    number: "04",
    title: "Ongoing Support & Optimization",
    description: "Continuous monitoring, optimization, and support to ensure your systems drive maximum value."
  }
]

const features = [
  "Real-Time Inventory Sync",
  "Multi-Channel Sales",
  "Automated Lead Nurturing",
  "Integrated Financing",
  "Service Management",
  "Customer Portal",
  "Mobile-First Design",
  "24/7 Support"
]

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// ROI Calculator Component
function ROICalculator() {
  const [monthlySales, setMonthlySales] = useState(50)
  const [locations, setLocations] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState("")
  
  // Currency and conversion rates (1 Lakh INR = 100,000 INR)
  // Conversion rates: 1 INR to other currencies
  const currencyMap: Record<string, { symbol: string; rate: number; suffix: string }> = {
    "India": { symbol: "₹", rate: 1, suffix: "L" },
    "South Africa": { symbol: "R", rate: 0.22, suffix: "M" },
    "Dubai": { symbol: "AED", rate: 0.044, suffix: "M" },
    "USA": { symbol: "$", rate: 0.012, suffix: "M" }
  }
  
  const currency = selectedLocation ? currencyMap[selectedLocation] : null
  // monthlySales is in Indian Lakhs (1 Lakh = 100,000 INR)
  // Convert to selected currency: multiply by 100,000 to get INR, then by rate
  const monthlySalesInINR = monthlySales * 100000 // Convert Lakhs to INR
  const convertedMonthlySales = currency ? monthlySalesInINR * currency.rate : 0 // Convert to target currency
  const convertedCurrentRevenue = convertedMonthlySales * 12 // Annual
  const potentialIncrease = convertedCurrentRevenue * 0.35
  const monthlyIncrease = potentialIncrease / 12
  
  const formatCurrency = (value: number) => {
    if (!currency) return "--"
    if (selectedLocation === "India") {
      // For India, convert back to Lakhs
      const inLakhs = value / 100000
      return `${currency.symbol}${Math.round(inLakhs).toLocaleString('en-IN')}${currency.suffix}`
    } else {
      // For other countries, show in millions
      const inMillions = value / 1000000
      if (inMillions >= 0.01) {
        return `${currency.symbol}${inMillions.toFixed(2)}${currency.suffix}`
      } else {
        return `${currency.symbol}${(inMillions * 1000).toFixed(1)}K`
      }
    }
  }
  
  const formatSliderValue = (value: number) => {
    if (!currency) return "--"
    // value is in Lakhs (Indian base)
    const valueInINR = value * 100000
    const converted = valueInINR * currency.rate
    
    if (selectedLocation === "India") {
      return `${currency.symbol}${Math.round(value).toLocaleString('en-IN')}${currency.suffix}`
    } else {
      const inMillions = converted / 1000000
      if (inMillions >= 0.01) {
        return `${currency.symbol}${inMillions.toFixed(2)}${currency.suffix}`
      } else {
        return `${currency.symbol}${(inMillions * 1000).toFixed(1)}K`
      }
    }
  }
  
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Location
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-[#ff0000] focus:outline-none text-base font-semibold bg-white text-foreground"
          >
            <option value="" className="text-muted-foreground bg-white">Select Location</option>
            <option value="India" className="text-foreground bg-white">India</option>
            <option value="South Africa" className="text-foreground bg-white">South Africa</option>
            <option value="Dubai" className="text-foreground bg-white">Dubai</option>
            <option value="USA" className="text-foreground bg-white">USA</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Current Monthly Sales {currency && selectedLocation ? `(${selectedLocation === "India" ? "in Lakhs" : "in Millions"} ${currency?.symbol || ""})` : ""}
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={monthlySales}
            onChange={(e) => setMonthlySales(Number(e.target.value))}
            disabled={!selectedLocation}
            className={`w-full h-2 bg-border rounded-lg appearance-none ${selectedLocation ? 'cursor-pointer accent-[#ff0000]' : 'cursor-not-allowed opacity-50'}`}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{selectedLocation ? formatSliderValue(10) : "--"}</span>
            <span className="text-lg font-bold text-primary">{selectedLocation ? formatSliderValue(monthlySales) : "--"}</span>
            <span>{selectedLocation ? formatSliderValue(500) : "--"}</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Number of Locations
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={locations}
            onChange={(e) => setLocations(Number(e.target.value))}
            disabled={!selectedLocation}
            className={`w-full h-2 bg-border rounded-lg appearance-none ${selectedLocation ? 'cursor-pointer accent-[#ff0000]' : 'cursor-not-allowed opacity-50'}`}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span>
            <span className="text-lg font-bold text-primary">{locations}</span>
            <span>10+</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
          <div className="text-3xl font-extrabold text-primary mb-2">
            {formatCurrency(monthlyIncrease)}
          </div>
          <div className="text-sm text-muted-foreground font-medium">Additional Monthly Revenue</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
          <div className="text-3xl font-extrabold text-primary mb-2">
            {formatCurrency(potentialIncrease)}
          </div>
          <div className="text-sm text-muted-foreground font-medium">Annual Revenue Increase</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
          <div className="text-3xl font-extrabold text-primary mb-2">35%</div>
          <div className="text-sm text-muted-foreground font-medium">Average Growth Rate</div>
        </div>
      </div>
      
      <div className="pt-6 border-t border-border">
        <Button
          asChild
          className="w-full bg-gradient-to-r from-primary to-blue-400 text-white hover:from-blue-400 hover:to-blue-500 text-base font-bold px-8 py-4 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <a href="#contact-form">
            Get Your Custom ROI Report
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  )
}

// Comparison Table Component
function ComparisonTable() {
  const comparisons = [
    { feature: "Inventory Management", traditional: "Manual spreadsheets", modernized: "Real-time automated tracking" },
    { feature: "Lead Follow-up", traditional: "Phone calls & emails", modernized: "Automated CRM with AI" },
    { feature: "Sales Reporting", traditional: "Weekly manual reports", modernized: "Real-time dashboards" },
    { feature: "Customer Data", traditional: "Scattered across systems", modernized: "Unified customer portal" },
    { feature: "Online Presence", traditional: "Basic website", modernized: "Full e-commerce platform" },
    { feature: "Service Scheduling", traditional: "Phone booking only", modernized: "24/7 online booking" },
    { feature: "Multi-location Sync", traditional: "Separate systems", modernized: "Centralized management" },
    { feature: "Data Analytics", traditional: "Limited insights", modernized: "AI-powered predictions" }
  ]
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left p-6 font-bold text-foreground">Feature</th>
            <th className="text-center p-6 font-bold text-muted-foreground">Traditional Dealership</th>
            <th className="text-center p-6 font-bold text-primary bg-secondary/20">Modernized Dealership</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-gray-100 hover:bg-muted transition-colors"
            >
              <td className="p-6 font-semibold text-foreground">{item.feature}</td>
              <td className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <X className="h-5 w-5 text-primary" />
                  <span>{item.traditional}</span>
                </div>
              </td>
              <td className="p-6 text-center bg-secondary/20/30">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                  <CheckCircle className="h-5 w-5" />
                  <span>{item.modernized}</span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Case Study Highlight Component
function CaseStudyHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/80 shadow-2xl"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-primary font-extrabold text-2xl shadow-lg">
              P
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Premier Auto Group</h3>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
          
          <p className="text-foreground mb-6 leading-relaxed">
            Premier Auto Group, a 3-location dealership in Mumbai, was struggling with manual inventory tracking, 
            lost leads, and disconnected systems. After implementing our integrated platform, they achieved remarkable results.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">Implementation completed in just 2 weeks</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">Zero downtime during transition</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">Comprehensive training for all staff</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {[
            { label: "Sales Increase", value: "45%", icon: TrendingUp, color: "from-green-500 to-green-600" },
            { label: "Lead Conversion", value: "60%", icon: Target, color: "from-blue-500 to-blue-600" },
            { label: "Time Saved", value: "20hrs/week", icon: Clock, color: "from-purple-500 to-purple-600" },
            { label: "Customer Satisfaction", value: "4.9/5", icon: Star, color: "from-yellow-500 to-yellow-600" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-border hover:shadow-lg transition-all"
            >
              <div className={`p-4 rounded-xl bg-gradient-to-br ${metric.color} text-white`}>
                <metric.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-extrabold text-foreground">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-border">
        <Button
          asChild
          variant="outline"
          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white text-base font-bold px-8 py-4 h-auto rounded-xl transition-all duration-300"
        >
          <a href="#contact-form">
            Get Similar Results for Your Dealership
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export default function ScaleCarDealership() {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const [iframeHeight, setIframeHeight] = useState(800)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'instant' })
    
  }, [])

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null
    
    const updateIframeHeight = () => {
      const iframeWrapper = formContainerRef.current?.querySelector('[data-iframe-wrapper]') as HTMLElement
      if (iframeWrapper) {
        const wrapperHeight = iframeWrapper.clientHeight
        // Use the actual wrapper height, subtracting minimal padding
        const calculatedHeight = Math.max(400, wrapperHeight - 4)
        setIframeHeight(Math.floor(calculatedHeight))
      }
    }
    
    // Initial calculation
    const initTimeout = setTimeout(() => {
      updateIframeHeight()
    }, 200)
    
    // Also calculate after a longer delay to ensure Google Forms has loaded
    const loadTimeout = setTimeout(() => {
      updateIframeHeight()
    }, 500)
    
    // Update on window resize
    window.addEventListener('resize', updateIframeHeight)
    
    // Setup ResizeObserver
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
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/15 to-transparent rounded-full blur-3xl"
          />
            </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block px-6 py-3 bg-white/80 backdrop-blur-xl border border-secondary/40/50 rounded-full text-sm font-bold text-primary mb-8 shadow-lg shadow-primary/100/50 hover:shadow-xl hover:shadow-primary/200/50 transition-all duration-300"
            >
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Transform Your Dealership Operations
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-8 leading-[1.1] tracking-tight"
            >
              <span className="block mb-2">Scale Your</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Car Dealership
                </span>
                <motion.span
                  className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-blue-200/60 via-blue-300/60 to-blue-200/60 -z-10 rounded-full blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1, type: "spring" }}
                />
              </span>
              <span className="block mt-2">Into the Future</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
            >
              Modernize your dealership with integrated technology solutions that streamline operations, boost sales, and enhance customer satisfaction.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
              <Button
                asChild
                  className="relative bg-gradient-to-r from-primary via-blue-400 to-white text-white text-base font-bold px-10 py-4 h-auto rounded-xl shadow-2xl shadow-primary/500/30 hover:shadow-primary/500/50 transition-all duration-300 group overflow-hidden"
                >
                  <a href="#contact-form" className="relative z-10 flex items-center">
                    <span className="relative z-10">Get Started Today</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary to-white opacity-0 group-hover:opacity-100 transition-opacity"
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
              { value: 20, suffix: "+", label: "dealerships transformed" },
              { value: 35, suffix: "%", label: "Average Sales Increase" },
              { value: 50, suffix: "%", label: "Faster Lead Processing" },
              { value: null, suffix: "", label: "Weeks to Launch", display: "2-4" }
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
          
          {/* Social Proof Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-center text-sm text-muted-foreground mb-4">Trusted by dealerships nationwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder for client logos - replace with actual logos */}
              {["Premier Auto Group", "Metro Motors", "AutoMax Dealerships", "Elite Car Sales"].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="text-muted-foreground font-semibold text-sm"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
      </motion.section>

      {/* Problem Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Is Your Dealership <span style={{ color: 'hsl(var(--primary))' }}>Holding You Back?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Modern car dealerships face unique challenges. Outdated systems, manual processes, and disconnected tools create inefficiencies that limit growth and frustrate customers.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Manual inventory tracking across multiple locations",
                  "Lost leads due to poor follow-up systems",
                  "Disconnected sales and service departments",
                  "Limited online presence and digital sales capabilities",
                  "Time-consuming paperwork and document management"
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
                We help dealerships modernize with integrated technology solutions that connect every aspect of your business—from inventory to sales to service—in one seamless platform.
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
              Complete <span style={{ color: 'hsl(var(--primary))' }}>Dealership Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to modernize and scale your car dealership operations.
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
                whileHover={{ y: -12, scale: 1.03, rotateY: 2 }}
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
          <p className="text-muted-foreground mb-6">Want to see how these solutions work for your dealership?</p>
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
              Why Choose <span style={{ color: 'hsl(var(--primary))' }}>Workdun?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in transforming car dealerships with technology solutions built for the automotive industry.
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
                whileHover={{ y: -12, scale: 1.03, rotateX: 2 }}
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
              Our Proven <span style={{ color: 'hsl(var(--primary))' }}>Transformation Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to modernizing your dealership with minimal disruption and maximum impact.
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
                  whileHover={{ y: -12, scale: 1.04, rotateY: 3 }}
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
                Built for <span style={{ color: 'hsl(var(--primary))' }}>Dealerships</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our solutions are designed specifically for the automotive industry, with features that address the unique needs of car dealerships.
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
                    <BarChart className="h-24 w-24 text-primary" />
            </div>
                </motion.div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Real Results</h3>
                <div className="space-y-6">
                  {[
                    { label: "Sales Growth", value: 35 },
                    { label: "Lead Conversion", value: 50 },
                    { label: "Customer Satisfaction", value: 92 }
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
                        <span className="text-primary font-extrabold text-xl">+{item.value}%</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Implementation</h3>
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
              Trusted by Leading <span style={{ color: 'hsl(var(--primary))' }}>Dealerships</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped dealerships modernize operations and achieve remarkable growth.
            </p>
          </motion.div>

          {/* Testimonials Data */}
          {(() => {
            const testimonials = [
              {
                quote: "The inventory management system transformed how we operate. We can now track vehicles across all locations in real-time, and our sales team has everything they need at their fingertips.",
                name: "Rajesh Kumar",
                role: "Owner, Premier Auto Group",
                location: "Mumbai, Maharashtra",
                metric: "+45% Sales Increase",
                metricLabel: "in 6 months"
              },
              {
                quote: "Our lead conversion rate increased by 50% after implementing their CRM system. The automated follow-ups ensure we never miss an opportunity, and our sales team can focus on closing deals.",
                name: "Priya Sharma",
                role: "General Manager, Metro Motors",
                location: "Delhi, NCR",
                metric: "+50% Lead Conversion",
                metricLabel: "within 3 months"
              },
              {
                quote: "The online sales platform opened up a whole new revenue stream. We're now selling vehicles online, and customers love the convenience. Our revenue has increased by 35% in just 6 months.",
                name: "Amit Patel",
                role: "CEO, AutoMax Dealerships",
                location: "Bangalore, Karnataka",
                metric: "+35% Revenue Growth",
                metricLabel: "in 6 months"
              },
              {
                quote: "Implementation was seamless and the training was comprehensive. Our team was up and running in just 2 weeks. The ROI has been incredible.",
                name: "Anjali Reddy",
                role: "Operations Director, Elite Motors",
                location: "Hyderabad, Telangana",
                metric: "2 Weeks",
                metricLabel: "to full implementation"
              },
              {
                quote: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that directly impact our bottom line.",
                name: "Vikram Singh",
                role: "CFO, City Auto Group",
                location: "Pune, Maharashtra",
                metric: "15 Hours/Week",
                metricLabel: "time saved on reporting"
              },
              {
                quote: "Customer satisfaction scores have never been higher. The integrated platform makes it so easy to provide exceptional service at every touchpoint.",
                name: "Kavita Desai",
                role: "Customer Experience Manager, DriveMax",
                location: "Chennai, Tamil Nadu",
                metric: "4.9/5 Rating",
                metricLabel: "customer satisfaction"
              }
            ];
            
            // Duplicate testimonials for seamless infinite scroll
            const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
            
            // Calculate approximate width: card width + gap
            // For mobile: 90vw, for md: 500px + 32px gap, for lg: 600px + 32px gap
            const cardWidth = 600; // Using lg width as base
            const gap = 32;
            const totalWidth = duplicatedTestimonials.length * (cardWidth + gap);
            
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
                              <div className="flex-1">
                                <div className="font-bold text-foreground text-base md:text-lg">{testimonial.name}</div>
                                <div className="text-xs md:text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                                {testimonial.location && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <MapPin className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                                  </div>
                                )}
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
                              <div className="flex-1">
                                <div className="font-bold text-foreground text-base md:text-lg">{testimonial.name}</div>
                                <div className="text-xs md:text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                                {testimonial.location && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <MapPin className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                                  </div>
                                )}
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

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-semibold text-primary mb-6">
              <Calculator className="h-4 w-4" />
              ROI Calculator
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Calculate Your Potential <span style={{ color: 'hsl(var(--primary))' }}>Revenue Increase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how much revenue you could generate by modernizing your dealership operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/80 shadow-2xl"
          >
            <ROICalculator />
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Traditional vs. <span style={{ color: 'hsl(var(--primary))' }}>Modernized</span> Dealership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the difference between outdated methods and our modern solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl border border-border/80 shadow-xl overflow-hidden"
          >
            <ComparisonTable />
          </motion.div>
        </div>
      </section>

      {/* Case Study Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-semibold text-primary mb-6">
              <Trophy className="h-4 w-4" />
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Results: <span style={{ color: 'hsl(var(--primary))' }}>Premier Auto Group</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How a Mumbai-based dealership transformed their operations and achieved remarkable growth.
            </p>
          </motion.div>

          <CaseStudyHighlight />
        </div>
      </section>

      {/* Enhanced Social Proof Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by Leading Dealerships Globally</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["Premier Auto Group", "Metro Motors", "AutoMax Dealerships", "Elite Motors", "City Auto Group", "DriveMax"].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-muted-foreground font-semibold text-sm md:text-base"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-4 gap-6 text-center"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Dealerships Transformed</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">₹2.5Cr+</div>
              <div className="text-sm text-muted-foreground font-medium">Revenue Generated</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
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
              Everything you need to know about modernizing your dealership.
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
                question: "How long does implementation take?",
                answer: "Most dealerships are up and running within 2-4 weeks. Our team handles everything from setup to training, ensuring minimal disruption to your operations. We work around your schedule to minimize any impact on daily business."
              },
              {
                category: "Implementation",
                question: "Will this work with our existing systems?",
                answer: "Yes! Our solutions integrate seamlessly with most existing dealership management systems, CRM platforms, and accounting software. We'll ensure everything works together smoothly. Our team will conduct a compatibility assessment before implementation."
              },
              {
                category: "Pricing",
                question: "What if I'm not satisfied?",
                answer: "We're committed to your success. Our team works closely with you throughout the implementation process to ensure you achieve your goals. We provide comprehensive support and will work with you to address any concerns."
              },
              {
                category: "Support",
                question: "Do you provide training and support?",
                answer: "Absolutely! We provide comprehensive training for your entire team and offer 24/7 support to ensure you get the most out of your new systems. Our experts are always available to help via phone, email, or live chat."
              },
              {
                category: "Pricing",
                question: "How much does it cost?",
                answer: "Pricing depends on your dealership's specific needs and size. Schedule a free consultation to get a customized quote. We offer flexible payment plans and transparent pricing with no hidden fees. Starting plans available from ₹50,000/month."
              },
              {
                category: "Implementation",
                question: "What happens during the transition period?",
                answer: "We provide a dedicated project manager who works closely with your team. We handle data migration, system setup, and provide comprehensive training. Most dealerships experience zero downtime during the transition."
              },
              {
                category: "Support",
                question: "What kind of ongoing support do you provide?",
                answer: "We offer 24/7 technical support, regular system updates, performance monitoring, and quarterly business reviews. Our team is always available to help optimize your operations and ensure you're getting maximum value."
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
                <Car className="h-20 w-20" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Ready to Transform Your Dealership?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 font-medium">
              Join hundreds of dealerships that have successfully modernized with Workdun. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
              <Button
                asChild
                  className="bg-white text-primary hover:bg-muted text-base font-bold px-10 py-4 h-auto rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 group relative overflow-hidden"
                >
                  <a href="#contact-form" className="relative z-10 flex items-center">
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
                  className="border-2 border-white/90 text-white hover:bg-white/20 hover:border-white bg-white/10 backdrop-blur-xl text-base font-bold px-10 py-4 h-auto rounded-xl transition-all duration-300 shadow-xl"
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

