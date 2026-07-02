"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "SIDO",
    logo: "/logo/sido.png",
  },
  {
    name: "MVIWAARUSHA",
    logo: "/logo/MVIWAARUSHA_id-1.png",
  },
  {
    name: "Kilimo",
    logo: "/logo/kilimo.svg",
  },
  {
    name: "Rikolto",
    logo: "/logo/6724da99e9fddae255646fd5_rikolto-logo_color-rgb.jpg",
  },
  {
    name: "Islands of Peace",
    logo: "/logo/Islands of Peace (Iles de Paix).png",
  },
]

export function ActivationsSection() {
  return (
    <section id="partners" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            className="font-mono text-[#121212]/60 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            TRUSTED BY
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.2,
              }}
            >
              OUR{" "}
            </motion.span>
            <motion.span
              className="text-[#6BA82E] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.3,
              }}
            >
              PARTNERS
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#121212]/60 font-mono mt-3 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We collaborate with leading organizations to drive sustainable
            agroecological transformation.
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="h-[2px] w-12 bg-[#6BA82E] mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          />
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee w-max">
              {/* Render the logo set four times for seamless looping */}
              {[...partners, ...partners, ...partners, ...partners].map(
                (partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative h-16 w-36 flex items-center justify-center transition-all duration-500 hover:scale-110">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="144px"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
