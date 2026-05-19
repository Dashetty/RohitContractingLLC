"use client";

import { motion } from "framer-motion";
import {
  Target,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle2,
  Building2,
  HardHat,
  Truck,
} from "lucide-react";

const milestones = [
  { year: "2014", title: "Founded in Dubai", description: "Started with a vision to revolutionize UAE contracting" },
  { year: "2016", title: "First Major Project", description: "Completed first commercial tower project" },
  { year: "2018", title: "Expanded Operations", description: "Opened material trading division" },
  { year: "2020", title: "Industrial Division", description: "Launched industrial procurement services" },
  { year: "2023", title: "500+ Projects", description: "Reached milestone of 500 completed projects" },
  { year: "2024", title: "UAE Market Leader", description: "Recognized as top contracting partner" },
];

const values = [
  { icon: Shield, label: "Reliability", desc: "Consistent delivery excellence" },
  { icon: Target, label: "Precision", desc: "Attention to every detail" },
  { icon: TrendingUp, label: "Quality", desc: "Premium materials & workmanship" },
  { icon: Clock, label: "Timely Delivery", desc: "On schedule, every time" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-dark-surface">
      {/* Background pattern */}
      <div className="absolute inset-0 industrial-texture opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-accent text-sm font-medium tracking-wide">
            About Us
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image placeholder with industrial design */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden steel-gradient border border-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Building2 className="mx-auto text-accent/40" size="64" />
                  <div className="text-foreground/20 text-lg font-medium">
                    Construction Site
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center">
                  <HardHat size="20" className="text-white" />
                </div>
                <span className="text-white text-sm font-medium">
                  Safety First
                </span>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass rounded-xl p-5 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Truck className="text-accent" size="20" />
                </div>
                <div className="text-2xl font-bold text-accent">10+</div>
              </div>
              <div className="text-sm text-foreground/70">Years of Excellence in UAE Construction</div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent/20 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/10 rounded-xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight">
              Delivering Excellence in{" "}
              <span className="text-gradient">Dubai Construction</span>
            </h2>

            <p className="text-lg text-foreground/60 leading-relaxed">
              Rohit Contracting is a Dubai-based construction company committed
              to delivering high-quality construction services across Dubai.
              Strategically located in Dubai Festival City, we serve both
              private and commercial clients with a full spectrum of contracting
              solutions. Our team brings together experienced professionals and
              skilled tradespeople who are dedicated to maintaining the highest
              standards of workmanship, safety, and client satisfaction on
              every project we undertake.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                      <value.icon className="text-accent" size="18" />
                    </div>
                    <span className="font-semibold text-foreground">{value.label}</span>
                  </div>
                  <p className="text-sm text-foreground/50">{value.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Safety badge */}
            <div className="flex items-center gap-3 glass-accent rounded-xl px-5 py-3">
              <Shield className="text-accent shrink-0" size="20" />
              <span className="text-sm text-foreground/80">
                Committed to Dubai safety standards and regulatory compliance
              </span>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="heading-serif text-2xl font-bold text-foreground/90">Our Journey</h3>
            <p className="text-foreground/40 mt-2">Key milestones in our growth</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-foreground/10 hidden lg:block" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center group"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="text-accent font-bold text-lg">{m.year}</div>
                  <div className="text-foreground font-semibold text-sm mt-1">
                    {m.title}
                  </div>
                  <div className="text-foreground/40 text-xs mt-1 hidden sm:block">
                    {m.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
