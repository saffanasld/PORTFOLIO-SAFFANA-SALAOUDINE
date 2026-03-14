"use client";
import { motion } from "framer-motion";

export function Passions() {
  const items = [
    { category: "photographie", img: "/images/passions/photographie.jpg" },
    { category: "amatrice d'art", img: "/images/passions/photo.jpg" },
    { category: "cuisiner", img: "/images/passions/cuisiner.jpg" },
    { category: "voyager", img: "images/passions/voyager.jpg" },
  ];

  return (
    <section className="w-full py-14 border-t border-leather/10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-4">
          <h2 className="text-sm font-normal uppercase tracking-wider">
            passions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col gap-4 md:gap-6"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-pearl/5 border border-leather/5">
                <img 
                  src={item.img} 
                  alt={item.category} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-1 border-b border-leather/20 pb-2">
                <span className="text-xs uppercase tracking-wider text-leather/70 hover:text-leather transition-all">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}