"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-6 z-50"
          >
            <div className="glass rounded-2xl p-4 w-64 shadow-2xl">
              <p className="text-sm text-foreground/80 font-medium mb-2">
                Chat with us!
              </p>
              <p className="text-xs text-foreground/50 mb-3">
                Get instant responses on WhatsApp
              </p>
              <a
                href="https://wa.me/971559229581?text=Hello%2C%20I%27m%20interested%20in%20Rohit%20Contracting%27s%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--color-chart-2)] hover:brightness-90 text-white text-sm font-semibold rounded-xl transition-all duration-300"
              >
                <MessageCircle size="16" />
                Start Chat
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-2 py-1.5 text-xs text-foreground/30 hover:text-foreground/50 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--color-chart-2)] hover:brightness-90 text-white shadow-xl shadow-[color-mix(in_oklch,var(--color-chart-2)_30%,transparent)] hover:shadow-[color-mix(in_oklch,var(--color-chart-2)_50%,transparent)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        {isOpen ? <X size="24" /> : <MessageCircle size="24" />}
      </motion.button>
    </>
  );
}
