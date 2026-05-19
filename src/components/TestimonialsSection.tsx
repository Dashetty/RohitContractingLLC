"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Maktoum",
    role: "Project Director",
    company: "Al Shafar General Contracting",
    quote:
      "Rohit Contracting delivered exceptional quality on our commercial tower project. Their material supply chain management is simply unmatched in the UAE market.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Head of Procurement",
    company: "Dubai Properties Group",
    quote:
      "We've partnered with Rohit Contracting for over 5 years. Their consistency in quality and timely delivery has made them our preferred contracting partner.",
    rating: 5,
  },
  {
    name: "Rashid Al Qasimi",
    role: "CEO",
    company: "Gulf Infrastructure LLC",
    quote:
      "The professionalism and technical expertise of the Rohit team is outstanding. They understand UAE construction standards better than anyone.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    company: "Emirates Steel Industries",
    quote:
      "As a material supplier, Rohit Contracting's procurement capabilities and logistics network are world-class. Highly reliable partner for industrial projects.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/2 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Trusted by leading UAE companies
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] sm:min-h-[250px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass rounded-2xl p-8 sm:p-12 w-full"
              >
                <Quote className="text-accent/30 mb-6" size="48" />
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-foreground/50">
                      {testimonials[current].role}
                    </div>
                    <div className="text-sm text-accent">
                      {testimonials[current].company}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size="16"
                        className={
                          i < testimonials[current].rating
                            ? "text-accent fill-accent"
                            : "text-foreground/10"
                        }
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 glass rounded-xl flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size="20" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-6"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 glass rounded-xl flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size="20" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
