"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, MapPin } from "lucide-react";

export function HomeTestimonials() {
  const testimonials = [
    {
      quote: "Workdun transformed our dealership operations completely. Revenue increased by 280%, and customer satisfaction improved by 195%. Their comprehensive approach delivered measurable results.",
      name: "Rajesh Kumar",
      role: "Owner, Premium Auto Dealership",
      location: "Mumbai, Maharashtra",
      metric: "280% Revenue",
      metricLabel: "increase in revenue"
    },
    {
      quote: "The e-commerce platform development exceeded our expectations. We now have a fully functional online store, and sales have increased dramatically since launch.",
      name: "Priya Sharma",
      role: "Founder, FashionBrand",
      location: "Delhi, NCR",
      metric: "92% Sales",
      metricLabel: "increase in online sales"
    },
    {
      quote: "The AI integration made everything automated. Our operations now have intelligent automation, and efficiency has improved by 240%.",
      name: "Amit Patel",
      role: "CTO, TechStartup",
      location: "Bangalore, Karnataka",
      metric: "240% Efficiency",
      metricLabel: "improvement in operational efficiency"
    },
    {
      quote: "The blockchain solutions streamlined our crypto operations. Mining efficiency improved by 190%, and our platform is now more secure and scalable.",
      name: "Anjali Reddy",
      role: "Founder, CryptoMiningCorp",
      location: "Hyderabad, Telangana",
      metric: "190% Efficiency",
      metricLabel: "improvement in mining efficiency"
    },
    {
      quote: "The financial technology solutions elevated our banking services significantly. Customer satisfaction improved, and transaction processing has increased by 270%.",
      name: "Vikram Singh",
      role: "Director, RegionalBank",
      location: "Pune, Maharashtra",
      metric: "270% Processing",
      metricLabel: "improvement in transaction processing"
    },
    {
      quote: "The product design services were comprehensive. We now have a beautiful, user-friendly product, and user engagement has increased by 185%.",
      name: "Kavita Desai",
      role: "Product Manager, SaaSCompany",
      location: "Chennai, Tamil Nadu",
      metric: "185% Engagement",
      metricLabel: "increase in user engagement"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
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
            Trusted by Leading <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses across industries have successfully scaled with our services.
          </p>
        </motion.div>

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
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/0 group-hover:bg-red-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                    <CardContent className="p-8 md:p-10 relative z-10">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 md:mb-8 italic leading-relaxed text-base md:text-lg font-medium">{testimonial.quote}</p>
                      {testimonial.metric && (
                        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-50 to-red-100/50 border border-secondary/40/50">
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
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/0 group-hover:bg-red-200/10 rounded-full blur-3xl transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
                    <CardContent className="p-8 md:p-10 relative z-10">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 md:mb-8 italic leading-relaxed text-base md:text-lg font-medium">{testimonial.quote}</p>
                      {testimonial.metric && (
                        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-50 to-red-100/50 border border-secondary/40/50">
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
      </div>
    </section>
  );
}


