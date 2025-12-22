import { Code, Wifi, ShoppingCart, Brain, Heart, Dumbbell, Scale, Coins, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CpuArchitecture } from './cpu-architecture';
import { createSlug } from '@/lib/utils';
import { motion } from 'motion/react';

export function Features() {
    const industries = [
        { icon: <Code className="size-5" />, name: 'Information Technology' },
        { icon: <Wifi className="size-5" />, name: 'IoT & Connected Devices' },
        { icon: <Brain className="size-5" />, name: 'Artificial Intelligence' },
        { icon: <ShoppingCart className="size-5" />, name: 'E-commerce Platforms' },
        { icon: <Heart className="size-5" />, name: 'Skincare & Health' },
        { icon: <Dumbbell className="size-5" />, name: 'Fitness & Health' },
        { icon: <Scale className="size-5" />, name: 'Lawyers and Law Firms' },
        { icon: <Coins className="size-5" />, name: 'NFT & Crypto Mining' },
        { icon: <Building2 className="size-5" />, name: 'Banking and Finance' },
    ];

    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="mx-auto max-w-xl md:max-w-6xl px-6 relative z-10">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="md:pr-6 lg:pr-0"
                        >
                            <h2 className="text-4xl font-semibold lg:text-5xl text-foreground">
                                <span className="bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Industries</span> We Serve
                            </h2>
                            <p className="mt-6 text-muted-foreground">We empower businesses across cutting-edge sectors with scalable solutions that transform operations and accelerate growth.</p>
                        </motion.div>
                        <ul className="mt-8 divide-y border-y border-border">
                            {industries.map((industry, index) => (
                                <motion.li
                                    key={industry.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ 
                                        x: 8,
                                        transition: { duration: 0.3, type: "spring", stiffness: 300 }
                                    }}
                                    className="flex items-center gap-3 py-3 text-foreground hover:text-primary transition-colors group cursor-pointer"
                                >
                                    <Link to={`/industry/${createSlug(industry.name)}`} className="flex items-center gap-3 w-full">
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                            transition={{ duration: 0.6 }}
                                            style={{ color: 'hsl(var(--primary))' }}
                                        >
                                            {industry.icon}
                                        </motion.div>
                                        <span className="group-hover:font-semibold transition-all">{industry.name}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="border-border/50 relative rounded-3xl border border-border p-3 lg:col-span-3 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-500"
                    >
                        <div className="bg-white relative rounded-2xl p-6 flex items-center justify-center shadow-sm">
                            <CpuArchitecture className="text-muted-foreground" text="DUN" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

