"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";

const linkVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lenis = useLenis();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true);
        setMobileMenuOpen(false); // Close mobile menu when hiding navbar
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element && lenis) {
      lenis.scrollTo(element as HTMLElement, { offset: -100 });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "Our Story", href: "#story" },
    // { label: "Stockists", href: "#stockists" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white/5 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Me & I Natural Products home"
          >
            <motion.div
              className="relative h-20 w-20 md:h-24 md:w-24"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/logo/me&i logo white.png"
                alt="Me & I Natural Products"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                priority
                className="object-contain"
              />
            </motion.div>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium tracking-wide transition-colors relative ${
                scrolled
                  ? "text-[#121212] hover:text-[#6BA82E]"
                  : "text-[#121212]/90 hover:text-[#121212]"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#6BA82E] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </motion.button>
          ))}
        </div>

        <div className="flex-1 hidden md:block" />

        {/* Mobile menu toggle */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#121212] p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/80 backdrop-blur-xl border-b border-[#121212]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-left text-xl font-medium text-[#121212]/90 hover:text-[#6BA82E] transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
