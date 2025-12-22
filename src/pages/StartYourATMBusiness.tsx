import { useEffect, useState, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { 
  CreditCard, 
  FileCheck, 
  Shield, 
  MapPin, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Building2,
  DollarSign,
  Clock,
  Award,
  FileText,
  Phone,
  Mail,
  MessageCircle,
  Video,
  Calculator,
  HelpCircle,
  X,
  Star,
  Trophy,
  BarChart,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Application Assistance",
    description: "Complete guidance through the ATM franchise application process with all major operators including Hitachi Money Spot, Findi ATM, and Vakrangee."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documentation Support",
    description: "Help gather and organize all required documents including KYC documents, property papers, financial statements, and GST registration."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Compliance Management",
    description: "Ensure full compliance with RBI guidelines, regulatory requirements, and all legal obligations for operating an ATM franchise."
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Site Selection Guidance",
    description: "Expert advice on selecting optimal locations that meet operator criteria, including high footfall areas and distance regulations."
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Operator Partnership",
    description: "Assistance in choosing the right ATM operator and establishing partnerships with reputable white-label ATM providers."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Financial Planning",
    description: "Guidance on investment requirements, security deposits (typically ₹2-3 lakh), and understanding the revenue model."
  }
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We assess your eligibility, location, and investment capacity to determine the best ATM franchise opportunity for you."
  },
  {
    number: "02",
    title: "Documentation & Application",
    description: "We help you gather all required documents and complete the franchise application accurately with the chosen ATM operator."
  },
  {
    number: "03",
    title: "Compliance & Setup",
    description: "We ensure all regulatory compliance is met, assist with site preparation, and guide you through the setup process."
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Ongoing support after launch to ensure smooth operations and help maximize your transaction volume and earnings."
  }
]

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Passive Income Opportunity",
    description: "Earn ₹15,000 to ₹45,000 monthly through transaction-based commissions (₹5-15 per transaction)."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Quick Setup Process",
    description: "Streamlined application and setup process with our expert guidance, getting you operational faster."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Full Compliance Support",
    description: "Complete assistance with RBI guidelines, regulatory requirements, and all legal obligations."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Guidance",
    description: "Dedicated support throughout the entire process, from application to ongoing operations."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Low Investment Required",
    description: "Relatively low initial investment (₹2-3 lakh security deposit) compared to other business opportunities."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Scalable Business",
    description: "Potential to expand with multiple ATM locations once you understand the business model."
  }
]

const requirements = [
  "Property ownership or valid lease agreement for ATM location",
  "Location in high footfall area (markets, commercial areas, etc.)",
  "Minimum space requirement (typically 50-100 sq ft)",
  "KYC documents (Aadhaar, PAN, address proof)",
  "Financial statements and bank account details",
  "GST registration (if applicable)",
  "Compliance with RBI distance regulations from existing ATMs"
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

// ATM ROI Calculator
function ATMROICalculator() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(500)
  const [selectedLocation, setSelectedLocation] = useState("")
  
  const currencyMap: Record<string, { symbol: string; rate: number; suffix: string }> = {
    "India": { symbol: "₹", rate: 1, suffix: "" },
    "South Africa": { symbol: "R", rate: 0.22, suffix: "" },
    "Dubai": { symbol: "AED", rate: 0.044, suffix: "" },
    "USA": { symbol: "$", rate: 0.012, suffix: "" }
  }
  
  const currency = selectedLocation ? currencyMap[selectedLocation] : null
  const transactionFee = 15 // ₹15 per transaction
  const monthlyRevenue = monthlyTransactions * transactionFee
  const monthlyRevenueInINR = monthlyRevenue
  const convertedMonthlyRevenue = currency ? monthlyRevenueInINR * currency.rate : 0
  const convertedAnnualRevenue = convertedMonthlyRevenue * 12
  const potentialIncrease = convertedAnnualRevenue * 0.30 // 30% average for ATM
  const monthlyIncrease = potentialIncrease / 12
  
  const formatCurrency = (value: number) => {
    if (!currency) return "--"
    if (selectedLocation === "India") {
      return `${currency.symbol}${Math.round(value).toLocaleString('en-IN')}${currency.suffix}`
    } else {
      if (value >= 1000) {
        return `${currency.symbol}${(value / 1000).toFixed(1)}K${currency.suffix}`
      } else {
        return `${currency.symbol}${Math.round(value)}${currency.suffix}`
      }
    }
  }
  
  const formatSliderValue = (value: number) => {
    if (!currency) return "--"
    const valueInINR = value * transactionFee
    const converted = valueInINR * currency.rate
    
    if (selectedLocation === "India") {
      return `${currency.symbol}${Math.round(valueInINR).toLocaleString('en-IN')}${currency.suffix}`
    } else {
      if (converted >= 1000) {
        return `${currency.symbol}${(converted / 1000).toFixed(1)}K${currency.suffix}`
      } else {
        return `${currency.symbol}${Math.round(converted)}${currency.suffix}`
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
            Monthly Transactions {currency && selectedLocation ? `(${currency?.symbol || ""})` : ""}
          </label>
          <input
            type="range"
            min="100"
            max="2000"
            value={monthlyTransactions}
            onChange={(e) => setMonthlyTransactions(Number(e.target.value))}
            disabled={!selectedLocation}
            className={`w-full h-2 bg-border rounded-lg appearance-none ${selectedLocation ? 'cursor-pointer accent-[#ff0000]' : 'cursor-not-allowed opacity-50'}`}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{selectedLocation ? formatSliderValue(100) : "--"}</span>
            <span className="text-lg font-bold text-primary">{selectedLocation ? formatSliderValue(monthlyTransactions) : "--"}</span>
            <span>{selectedLocation ? formatSliderValue(2000) : "--"}</span>
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
          <div className="text-3xl font-extrabold text-primary mb-2">30%</div>
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

// ATM Comparison Table
function ATMComparisonTable() {
  const comparisons = [
    { feature: "Application Process", traditional: "DIY paperwork", modernized: "Complete application assistance" },
    { feature: "Compliance", traditional: "Manual research", modernized: "Expert compliance guidance" },
    { feature: "Location Selection", traditional: "Trial and error", modernized: "Data-driven location analysis" },
    { feature: "Documentation", traditional: "Scattered files", modernized: "Organized document management" },
    { feature: "Operator Relations", traditional: "Direct negotiation", modernized: "Established operator partnerships" },
    { feature: "Setup Support", traditional: "Self-installation", modernized: "Professional setup assistance" },
    { feature: "Ongoing Support", traditional: "Limited", modernized: "Comprehensive support & guidance" },
    { feature: "Expansion", traditional: "Manual process", modernized: "Streamlined expansion support" }
  ]
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left p-6 font-bold text-foreground">Feature</th>
            <th className="text-center p-6 font-bold text-muted-foreground">DIY Approach</th>
            <th className="text-center p-6 font-bold text-primary bg-secondary/20">Professional Assistance</th>
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

// ATM Case Study
function ATMCaseStudy() {
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
              A
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">ATM Solutions India</h3>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Multiple Locations, India
              </p>
            </div>
          </div>
          
          <p className="text-foreground mb-6 leading-relaxed">
            ATM Solutions India needed help setting up multiple ATM locations across different cities. 
            Our comprehensive assistance helped them secure 5 ATM franchises and achieve profitability within 3 months.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">5 ATM locations secured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">3 months to profitability</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">100% compliance achieved</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {[
            { label: "Revenue Growth", value: "+30%", icon: TrendingUp, color: "from-green-500 to-green-600" },
            { label: "Locations", value: "5 ATMs", icon: MapPin, color: "from-blue-500 to-blue-600" },
            { label: "Time to Profit", value: "3 Months", icon: Clock, color: "from-purple-500 to-purple-600" },
            { label: "Compliance", value: "100%", icon: Shield, color: "from-yellow-500 to-yellow-600" }
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
            Get Similar Results for Your ATM Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export default function StartYourATMBusiness() {
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
                Start Your ATM Franchise Business in India
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
                  ATM Business
                </span>
                <motion.span
                  className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-blue-200/60 via-blue-300/60 to-blue-200/60 -z-10 rounded-full blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1, type: "spring" }}
                />
              </span>
              <span className="block mt-2">With Complete Support</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
            >
              Get comprehensive assistance with ATM franchise applications, compliance, and setup. We handle all the paperwork and regulatory requirements so you can focus on building a profitable ATM business.
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
                  <a href="tel:+919620077899">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
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
              { value: null, suffix: "", label: "Initial Investment", display: "₹2-3L" },
              { value: null, suffix: "", label: "Monthly Earnings", display: "₹15-45K" },
              { value: null, suffix: "", label: "Days Setup Time", display: "30-60" },
              { value: null, suffix: "", label: "Compliance Support", display: "100%" }
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
            <p className="text-center text-sm text-muted-foreground mb-4">Trusted by ATM operators across India</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["ATM Solutions India", "CashPoint Services", "ATM Network Pro", "Financial Access"].map((name, i) => (
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

      {/* What We Offer Section */}
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
              Complete <span style={{ color: 'hsl(var(--primary))' }}>ATM Franchise</span> Assistance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From application to compliance, we provide end-to-end support to help you start and operate your ATM franchise business successfully.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p className="text-muted-foreground mb-6">Want to see how these solutions work for your ATM business?</p>
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

      {/* Why Choose Us Section */}
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
              Why Choose Our <span style={{ color: 'hsl(var(--primary))' }}>ATM Franchise</span> Service?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We simplify the complex process of starting an ATM franchise business in India.
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
              Our Simple <span style={{ color: 'hsl(var(--primary))' }}>4-Step Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to launch, we guide you through every step of starting your ATM franchise.
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

      {/* Requirements Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What You <span style={{ color: 'hsl(var(--primary))' }}>Need</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                To start your ATM franchise business, you'll need to meet these basic requirements. We'll help you ensure you have everything in place.
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Investment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Security Deposit</span>
                  <span className="font-semibold text-foreground">₹2-3 Lakh</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Site Infrastructure</span>
                  <span className="font-semibold text-foreground">₹50K-1L</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Branding & Setup</span>
                  <span className="font-semibold text-foreground">₹30-50K</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-lg font-semibold text-foreground">Total Investment</span>
                  <span className="text-lg font-bold text-primary">₹3-4.5 Lakh</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                *Investment varies based on location and operator. Monthly earnings typically range from ₹15,000 to ₹45,000 based on transaction volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Income Potential Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your <span style={{ color: 'hsl(var(--primary))' }}>Earning Potential</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ATM franchise business offers attractive passive income opportunities with minimal ongoing effort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Low Volume Location</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">₹15,000-25,000</div>
                <p className="text-muted-foreground mt-2">Monthly Income</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>3,000-5,000 transactions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>₹5-8 per transaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Residential/commercial areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-white border-2 border-[#ff0000]">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-secondary/20 text-primary text-sm font-semibold rounded-full mb-2">
                  Most Popular
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Medium Volume Location</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">₹25,000-35,000</div>
                <p className="text-muted-foreground mt-2">Monthly Income</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>5,000-7,000 transactions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>₹8-12 per transaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Markets/shopping areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">High Volume Location</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">₹35,000-45,000+</div>
                <p className="text-muted-foreground mt-2">Monthly Income</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>7,000+ transactions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>₹12-15 per transaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Prime commercial locations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <CreditCard className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your ATM Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Get complete assistance with ATM franchise applications, compliance, and setup. Our experts will guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-primary hover:bg-muted text-base font-medium px-8 py-3 h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <a href="/#contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-white/80 text-white hover:bg-white/20 hover:border-white bg-white/10 text-base font-medium px-8 py-3 h-auto rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+919620077899">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: +91 96200 77899
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@workdun.org" className="hover:text-white transition-colors">
                contact@workdun.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


