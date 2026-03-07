"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/apropos" },
    { name: "Projets", href: "/projets" },
    { name: "Expérience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { 
        when: "afterChildren", 
        staggerChildren: 0.05, 
        staggerDirection: -1,
        ease: "easeInOut", 
        duration: 0.4 
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.1, 
        ease: "easeInOut", 
        duration: 0.4 
      }
    }
  };

  const linkVariants: Variants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-10 lg:px-12 py-4 md:py-6 bg-pearl border-b border-leather/10">
      <Link href="/" className="font-serif font-semibold text-lg md:text-xl">
        Saffana.
      </Link>

      <div className="hidden md:flex gap-10 font-normal tracking-wide text-sm">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:underline underline-offset-8">
            {link.name}
          </Link>
        ))}
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-leather hover:opacity-70 transition-all duration-300 md:hidden"
        aria-label="Toggle Menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: isOpen ? 0 : 90, opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.5 }}
            className="absolute"
          >
            <X size={24} strokeWidth={1.5} />
          </motion.div>

          <motion.div 
            animate={{ rotate: !isOpen ? 0 : -90, opacity: !isOpen ? 1 : 0, scale: !isOpen ? 1 : 0.5 }}
            className="absolute"
          >
            <Menu size={24} strokeWidth={1.5} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-leather text-ivory border-y border-leather/10 flex flex-col p-6 gap-6 md:hidden overflow-hidden"
          >
            {links.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-xs uppercase tracking-wider font-normal hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}