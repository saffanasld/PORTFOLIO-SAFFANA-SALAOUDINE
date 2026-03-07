"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Competences() {
  const categories = ["Tout", "Front-end", "Back-end", "Outils"];
  const [ongletActif, setOngletActif] = useState("Front-end");
  const [telephone, setTelephone] = useState(true);

  useEffect(() => {
    const verifEcran = () => {
      const mobile = window.innerWidth < 768;
      setTelephone(mobile);

      if (!mobile) {
        setOngletActif("Tout");

      } else {
        setOngletActif("Front-end");
      }
    };

    verifEcran();
    window.addEventListener('resize', verifEcran);
    return () => window.removeEventListener('resize', verifEcran);
  }, []);

  const skills = [
    { name: "HTML", cat: "Front-end", tag: "web" },
    { name: "CSS", cat: "Front-end", tag: "design" },
    { name: "Tailwind CSS", cat: "Front-end", tag: "Design" },
    { name: "PHP", cat: "Back-end", tag: "Core" },
    { name: "JAVA", cat: "Back-end", tag: "Core" },
    { name: "Spring Boot", cat: "Back-end", tag: "Core" },
    { name: "React / Next.js", cat: "Front-end", tag: "Main" },
    { name: "React Native", cat: "Front-end", tag: "app" },
    { name: "JavaScript", cat: "Front-end", tag: "Expert" },
    { name: "MySQL", cat: "Back-end", tag: "SQL"},
    { name: "PostgreSQL", cat: "Back-end", tag: "SQL"},
    { name: "Linux", cat: "Back-end", tag: "OS" },
    { name: "Docker", cat: "Outils", tag: "DevOps" },
    { name: "Wordpress", cat: "Outils", tag: "CMS"},
    { name: "Suite Adobe", cat: "Outils", tag: "création" },
    { name: "Blender", cat: "Outils", tag: "3D" },
    { name: "Figma", cat: "Outils", tag: "ui / ux" },
    { name: "Git", cat: "Outils", tag: "version" },
  ];

  const filteredSkills = (ongletActif === "Tout" && !telephone) 
    ? skills 
    : skills.filter(s => s.cat === ongletActif);

  return (
    <section className="w-full pt-6 border-t border-leather/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <h2 className="text-sm font-normal uppercase tracking-wider">compétences</h2>
        
        <div className="flex flex-wrap gap-5 md:gap-6 border-b border-leather/5 pb-4 md:pb-0 md:border-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setOngletActif(cat)}
              className={`text-xs uppercase tracking-wider text-leather/70 transition-all duration-300 pb-1 relative
                ${cat === "Tout" ? "hidden md:block" : "block"}
                ${ongletActif === cat ? "text-leather" : "text-leather/30 hover:text-leather"}
              `}
            >
              {cat}
              {ongletActif === cat && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-leather/70" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
        {filteredSkills.map((skill, index) => (
          <div 
            key={skill.name}
            className="group flex items-center justify-between p-5 border border-leather/10 hover:border-leather/30 transition-all duration-300"
          >
            <div className="flex flex-col gap-1">
              <span className="hidden md:block text-[10px] uppercase tracking-wider text-leather/30">{skill.cat}</span>
              <h3 className="text-base font-serif font-semibold text-leather group-hover:translate-x-2 transition-transform duration-300">
                {skill.name}
              </h3>
            </div>
            
            <div>
               <span className="px-2 py-1 text-[10px] border border-leather/20 uppercase">
                {skill.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}