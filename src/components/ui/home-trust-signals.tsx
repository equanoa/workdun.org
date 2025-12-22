"use client";

import { motion } from "motion/react";

export function HomeTrustSignals() {
  const companies = [
    "Premium Auto Dealership",
    "FashionBrand",
    "TechStartup",
    "CryptoMiningCorp",
    "RegionalBank",
    "SaaSCompany"
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-6">Trusted by Leading Businesses Globally</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {companies.map((name, i) => (
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
  );
}


