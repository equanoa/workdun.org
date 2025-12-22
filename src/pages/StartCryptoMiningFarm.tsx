import { useEffect, useState, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { 
  Coins, 
  Rocket, 
  Server, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Globe,
  BarChart,
  Star,
  Target,
  Sparkles,
  Settings,
  Network,
  MessageCircle,
  Video,
  Calculator,
  Award,
  HelpCircle,
  X,
  MapPin,
  Clock,
  Trophy
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Mining Farm Design",
    description: "Design efficient mining operations with optimal hardware configurations and layouts."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Power & Cooling Solutions",
    description: "Implement energy-efficient power management and cooling systems for maximum profitability."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Monitoring",
    description: "Comprehensive security measures and real-time monitoring for your mining operations."
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Hardware Sourcing",
    description: "Assistance with sourcing reliable mining hardware and equipment."
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Network Setup",
    description: "Configure secure network infrastructure for your mining farm."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Optimize mining efficiency and profitability with advanced configurations."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Pool Integration",
    description: "Set up and integrate with mining pools for consistent returns."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Maintenance Support",
    description: "Ongoing maintenance and support to keep your mining farm running smoothly."
  }
]

const benefits = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Setup",
    description: "Get your mining farm operational quickly with our proven setup process."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Optimized Efficiency",
    description: "Maximize hash rate and minimize energy consumption for better profitability."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Operations",
    description: "Enterprise-grade security to protect your mining assets and operations."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Scalable Design",
    description: "Build a mining farm that can scale from small operation to large facility."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Energy Optimization",
    description: "Reduce operational costs with energy-efficient solutions and strategies."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Expert Guidance",
    description: "Learn from experienced crypto mining professionals throughout the process."
  }
]

const processSteps = [
  {
    number: "01",
    title: "Planning & Design",
    description: "Assess requirements, design farm layout, and plan hardware and infrastructure."
  },
  {
    number: "02",
    title: "Hardware & Setup",
    description: "Source hardware, set up infrastructure, and configure mining systems."
  },
  {
    number: "03",
    title: "Optimization & Testing",
    description: "Optimize configurations, test performance, and ensure maximum efficiency."
  },
  {
    number: "04",
    title: "Launch & Monitor",
    description: "Launch your mining operations and set up monitoring and maintenance."
  }
]

const features = [
  "Farm Design & Layout",
  "Hardware Sourcing",
  "Power Management",
  "Cooling Solutions",
  "Security Systems",
  "Monitoring Tools",
  "Pool Integration",
  "Maintenance Support"
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

// Crypto ROI Calculator
function CryptoROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50)
  const [selectedLocation, setSelectedLocation] = useState("")
  
  const currencyMap: Record<string, { symbol: string; rate: number; suffix: string }> = {
    "India": { symbol: "₹", rate: 1, suffix: "L" },
    "South Africa": { symbol: "R", rate: 0.22, suffix: "M" },
    "Dubai": { symbol: "AED", rate: 0.044, suffix: "M" },
    "USA": { symbol: "$", rate: 0.012, suffix: "M" }
  }
  
  const currency = selectedLocation ? currencyMap[selectedLocation] : null
  const monthlyRevenueInINR = monthlyRevenue * 100000
  const convertedMonthlyRevenue = currency ? monthlyRevenueInINR * currency.rate : 0
  const convertedAnnualRevenue = convertedMonthlyRevenue * 12
  const potentialIncrease = convertedAnnualRevenue * 0.35 // 35% average for crypto mining
  const monthlyIncrease = potentialIncrease / 12
  
  const formatCurrency = (value: number) => {
    if (!currency) return "--"
    if (selectedLocation === "India") {
      const inLakhs = value / 100000
      return `${currency.symbol}${Math.round(inLakhs).toLocaleString('en-IN')}${currency.suffix}`
    } else {
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
      <div className="grid md:grid-cols-2 gap-6">
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
            Current Monthly Revenue {currency && selectedLocation ? `(${selectedLocation === "India" ? "in Lakhs" : "in Millions"} ${currency?.symbol || ""})` : ""}
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            disabled={!selectedLocation}
            className={`w-full h-2 bg-border rounded-lg appearance-none ${selectedLocation ? 'cursor-pointer accent-[#ff0000]' : 'cursor-not-allowed opacity-50'}`}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{selectedLocation ? formatSliderValue(10) : "--"}</span>
            <span className="text-lg font-bold text-primary">{selectedLocation ? formatSliderValue(monthlyRevenue) : "--"}</span>
            <span>{selectedLocation ? formatSliderValue(500) : "--"}</span>
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

// Crypto Comparison Table
function CryptoComparisonTable() {
  const comparisons = [
    { feature: "Farm Design", traditional: "DIY planning", modernized: "Professional design & optimization" },
    { feature: "Hardware Setup", traditional: "Manual assembly", modernized: "Expert installation & configuration" },
    { feature: "Power Management", traditional: "Basic wiring", modernized: "Optimized power distribution" },
    { feature: "Cooling", traditional: "Basic fans", modernized: "Advanced cooling systems" },
    { feature: "Security", traditional: "Basic locks", modernized: "Comprehensive security systems" },
    { feature: "Monitoring", traditional: "Manual checks", modernized: "Real-time monitoring & alerts" },
    { feature: "Pool Setup", traditional: "Manual configuration", modernized: "Automated pool integration" },
    { feature: "Maintenance", traditional: "Reactive fixes", modernized: "Proactive maintenance support" }
  ]
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left p-6 font-bold text-foreground">Feature</th>
            <th className="text-center p-6 font-bold text-muted-foreground">DIY Approach</th>
            <th className="text-center p-6 font-bold text-primary bg-secondary/20">Professional Setup</th>
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

// Crypto Case Study
function CryptoCaseStudy() {
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
              M
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">MiningMax Operations</h3>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Bangalore, Karnataka
              </p>
            </div>
          </div>
          
          <p className="text-foreground mb-6 leading-relaxed">
            MiningMax Operations needed a complete mining farm setup for 100+ rigs. 
            Our expert design and optimization increased their profitability by 35% while reducing power costs by 30%.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">100+ rig farm setup completed</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">30% reduction in power costs</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">99.5% uptime achieved</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {[
            { label: "Profitability", value: "+35%", icon: TrendingUp, color: "from-green-500 to-green-600" },
            { label: "Power Efficiency", value: "30%", icon: Zap, color: "from-blue-500 to-blue-600" },
            { label: "Uptime", value: "99.5%", icon: Shield, color: "from-purple-500 to-purple-600" },
            { label: "ROI", value: "18 Months", icon: Target, color: "from-yellow-500 to-yellow-600" }
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
            Get Similar Results for Your Mining Farm
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export default function StartCryptoMiningFarm() {
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
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
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
                Launch Your Mining Operation
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-8 leading-[1.1] tracking-tight"
            >
              <span className="block mb-2">Start Your</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Crypto Mining
                </span>
                <motion.span
                  className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-blue-200/60 via-blue-300/60 to-blue-200/60 -z-10 rounded-full blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1, type: "spring" }}
                />
              </span>
              <span className="block mt-2">Farm Today</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
            >
              Build and operate a profitable cryptocurrency mining farm. We provide complete setup services from design to launch and optimization.
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
                    <span className="relative z-10">Start Your Farm</span>
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
                  <a href="/pricing">
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
              { value: null, suffix: "", label: "Weeks to Launch", display: "6-8" },
              { value: 30, suffix: "+", label: "Farms Built" },
              { value: null, suffix: "", label: "Uptime Target", display: "99.9%" },
              { value: null, suffix: "", label: "Monitoring", display: "24/7" }
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
          
          {/* Social Proof Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-center text-sm text-muted-foreground mb-4">Trusted by mining operators globally</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["MiningMax Operations", "CryptoFarm Pro", "HashRate Solutions", "Mining Elite"].map((name, i) => (
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
                Ready to Start Your <span style={{ color: 'hsl(var(--primary))' }}>Mining Farm?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Setting up a profitable cryptocurrency mining farm requires expertise in hardware, power management, cooling, security, and optimization. Without the right knowledge and resources, it can be challenging to get started.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Choosing the right hardware and configurations",
                  "Designing efficient power and cooling systems",
                  "Implementing security and monitoring solutions",
                  "Optimizing for maximum profitability",
                  "Managing ongoing operations and maintenance"
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
                We provide end-to-end mining farm setup services. From design and hardware sourcing to optimization and monitoring, we handle everything to get your mining operation profitable.
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
              Complete Mining Farm <span style={{ color: 'hsl(var(--primary))' }}>Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services to design, build, and operate your mining farm.
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
          <p className="text-muted-foreground mb-6">Want to see how these solutions work for your mining farm?</p>
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
              Why Choose Our <span style={{ color: 'hsl(var(--primary))' }}>Services?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert guidance and proven solutions for profitable mining operations.
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
              Setup <span style={{ color: 'hsl(var(--primary))' }}>Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to building and launching your mining farm.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/30 group-hover:via-blue-100/15 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/0 group-hover:bg-blue-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
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
                What's <span style={{ color: 'hsl(var(--primary))' }}>Included</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Complete mining farm setup package with all essential services and support.
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
                    <Coins className="h-24 w-24 text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Package Includes</h3>
                <div className="space-y-6">
                  {[
                    { label: "Farm Design", value: "Complete" },
                    { label: "Hardware", value: "Sourced" },
                    { label: "Power & Cooling", value: "Optimized" },
                    { label: "Security", value: "Enterprise" },
                    { label: "Monitoring", value: "Real-time" },
                    { label: "Support", value: "30 days" }
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
                        <span className="text-primary font-extrabold text-xl">{item.value}</span>
                      </div>
                      <div className="h-4 bg-border/80 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
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

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-semibold text-red-700 mb-6">
              <Calculator className="h-4 w-4" />
              Revenue Calculator
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Calculate Your <span style={{ color: 'hsl(var(--primary))' }}>Mining Potential</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how much revenue you could generate by setting up your mining farm with our solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/80 shadow-2xl"
          >
            <CryptoROICalculator />
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-sm font-semibold text-yellow-700 mb-6">
              <TrendingUp className="h-4 w-4" />
              Compare Approaches
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              DIY vs <span style={{ color: 'hsl(var(--primary))' }}>Professional Setup</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the difference between DIY approaches and professional mining farm setup services.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/80 shadow-2xl overflow-hidden"
          >
            <CryptoComparisonTable />
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-semibold text-green-700 mb-6">
              <Trophy className="h-4 w-4" />
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Results from <span style={{ color: 'hsl(var(--primary))' }}>Real Operations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how MiningMax Operations transformed their mining farm with our comprehensive setup services.
            </p>
          </motion.div>
          
          <CryptoCaseStudy />
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
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Setup</h3>
              <p className="text-muted-foreground">Get your mining farm up and running in 6-8 weeks. Start seeing results immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dual Layer Carousel */}
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
              Success Stories from <span style={{ color: 'hsl(var(--primary))' }}>Mining Operators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how mining operators built profitable farms with our help.
            </p>
          </motion.div>

          {(() => {
            const testimonials = [
              {
                quote: "They designed and set up our 50-rig mining farm perfectly. The power optimization alone saved us 30% on electricity costs. Highly professional team.",
                name: "Rajesh Kumar",
                role: "Mining Farm Owner",
                location: "Mumbai, Maharashtra",
                metric: "30% Power",
                metricLabel: "cost reduction"
              },
              {
                quote: "The monitoring system they installed gives us real-time insights into our operations. We've increased uptime to 99.5% and improved profitability significantly.",
                name: "Priya Sharma",
                role: "Crypto Mining Operator",
                location: "Delhi, NCR",
                metric: "99.5% Uptime",
                metricLabel: "achieved"
              },
              {
                quote: "From planning to launch, they handled everything. The farm has been running smoothly for over a year with minimal downtime. Excellent service!",
                name: "Amit Patel",
                role: "Mining Farm Manager",
                location: "Bangalore, Karnataka",
                metric: "1 Year+",
                metricLabel: "smooth operation"
              },
              {
                quote: "The cooling system they designed is incredibly efficient. Our rigs run cooler and we've seen a 25% improvement in hash rate stability.",
                name: "Anjali Reddy",
                role: "Mining Operations Director",
                location: "Hyderabad, Telangana",
                metric: "+25% Hash Rate",
                metricLabel: "stability"
              },
              {
                quote: "Their security implementation gave us peace of mind. We've had zero security incidents since launch, and the monitoring alerts help us catch issues early.",
                name: "Vikram Singh",
                role: "Crypto Farm Owner",
                location: "Pune, Maharashtra",
                metric: "Zero Incidents",
                metricLabel: "security record"
              },
              {
                quote: "ROI was faster than expected. The optimization they did on our setup helped us break even in just 14 months instead of the projected 18 months.",
                name: "Kavita Desai",
                role: "Mining Investor",
                location: "Chennai, Tamil Nadu",
                metric: "14 Months",
                metricLabel: "to break even"
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
            )
          })()}
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
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by Mining Operators Globally</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["MiningMax Operations", "CryptoFarm Pro", "HashRate Solutions", "Mining Elite", "CryptoMine Pro", "HashPower Farms"].map((name, i) => (
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
              <div className="text-4xl font-extrabold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground font-medium">Farms Built</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">₹1Cr+</div>
              <div className="text-sm text-muted-foreground font-medium">Revenue Generated</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-secondary/40/50">
              <div className="text-4xl font-extrabold text-primary mb-2">99%</div>
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
              Everything you need to know about setting up your mining farm.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["All", "Pricing", "Setup", "Support"].map((category) => (
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
                category: "Setup",
                question: "How long does it take to set up a mining farm?",
                answer: "Typically, we can set up your complete mining farm in 6-8 weeks. This includes farm design, hardware sourcing, power and cooling setup, security implementation, and system optimization. The timeline may vary based on farm size and specific requirements."
              },
              {
                category: "Setup",
                question: "What's included in the complete package?",
                answer: "Our complete package includes farm design & layout planning, hardware sourcing & procurement, power & cooling system setup, security & monitoring implementation, pool integration, performance optimization & tuning, and 30 days of post-launch support."
              },
              {
                category: "Support",
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes! We provide 30 days of post-launch support included in the package. This includes technical assistance, optimization recommendations, and troubleshooting. Additional ongoing support packages are available for farms that need extended assistance."
              },
              {
                category: "Pricing",
                question: "Can I customize the package to my specific needs?",
                answer: "Absolutely! We understand every mining farm is unique. We offer flexible packages that can be customized based on your specific needs, budget, farm size, and timeline. Contact us to discuss your requirements and we'll create a tailored solution for you."
              },
              {
                category: "Setup",
                question: "What hardware do you recommend?",
                answer: "We recommend hardware based on your budget, power availability, and mining goals. We work with trusted suppliers and can help you source the best equipment for your specific needs, whether you're mining Bitcoin, Ethereum, or other cryptocurrencies."
              },
              {
                category: "Support",
                question: "What kind of monitoring do you provide?",
                answer: "We implement comprehensive real-time monitoring systems that track hash rate, temperature, power consumption, and overall farm performance. You'll receive alerts for any issues, and our team can help optimize performance based on the data."
              },
              {
                category: "Pricing",
                question: "How much does it cost?",
                answer: "Pricing depends on your farm size, hardware requirements, and package customization. Schedule a free consultation to get a customized quote. We offer transparent pricing with no hidden fees."
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
                <Coins className="h-20 w-20" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Ready to Start Mining?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 font-medium">
              Join successful mining operators. Get your farm up and running with our expert setup services.
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
                    <span>Start Your Farm Today</span>
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
                  className="border-2 border-white/90 text-white hover:bg-white/15 hover:border-white text-base font-bold px-10 py-4 h-auto rounded-xl backdrop-blur-xl transition-all duration-300 shadow-xl"
                >
                  <a href="/pricing">
                    View Package Details
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

