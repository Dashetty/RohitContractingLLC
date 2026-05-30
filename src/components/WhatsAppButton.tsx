"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
            className="fixed bottom-44 right-6 z-50"
          >
            <div className="card-warm rounded-2xl p-4 w-64 shadow-2xl">
              <p className="text-sm text-foreground/80 font-medium mb-2">
                Chat with us!
              </p>
              <p className="text-xs text-foreground/50 mb-3">
                Get instant responses on WhatsApp
              </p>
              <a
                href="https://wa.me/971559239581?text=Hello%2C%20I'm%20interested%20in%20Rohit%20Contracting's%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--color-chart-2)] hover:brightness-90 text-white text-sm font-semibold rounded-xl transition-all duration-300"
              >
                <WhatsAppIcon size={16} />
                Start Chat
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-2 py-1.5 text-xs text-foreground/80 hover:text-foreground transition-colors font-medium"
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
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[var(--color-chart-2)] hover:brightness-90 text-white shadow-xl shadow-[color-mix(in_oklch,var(--color-chart-2)_30%,transparent)] hover:shadow-[color-mix(in_oklch,var(--color-chart-2)_50%,transparent)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        {isOpen ? <X size="24" /> : <WhatsAppIcon size={24} />}
      </motion.button>
    </>
  );
}
