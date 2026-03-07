"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import Cursor from "@/components/common/Curseur";
import SmoothScroll from "@/components/common/SmoothScroll";
import { useState, useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />
      <main className="px-5 md:px-10 lg:px-20 w-full min-h-screen flex flex-col pt-24 pb-10 lg:pt-32 lg:pb-20 mx-auto max-w-[1600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
                duration: 0.7, 
                ease: [0.215, 0.61, 0.355, 1], 
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </SmoothScroll>
  );
}