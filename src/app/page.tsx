import Bouton from "@/components/common/Bouton";
import ProjetsApercu from "@/components/reusable/ProjetsApercu";
import SectionContact from "@/components/reusable/Contact";
import Link from "next/link";
import { ArrowDownRight, Sparkles, Code2, Paintbrush, ArrowRight } from "lucide-react";

export default function HomePage() {
  const expertises = [
    { icon: <Code2 size={20} />, titre: "Développement Full-Stack", desc: "Architecture robuste avec Next.js, TypeScript et intégration d'API complexes." },
    { icon: <Paintbrush size={20} />, titre: "UI/UX Design", desc: "Conception d'interfaces minimalistes centrées sur l'utilisateur et l'esthétique." },
    { icon: <Sparkles size={20} />, titre: "I don't know", desc: "Animations fluides (GSAP, Framer Motion) pour une expérience immersive." }
  ];

  return (
    <div className="flex flex-col">
      
      <section className="pt-2 pb-14 md:pt-6">
        <div className="relative">
          <div className="flex justify-between items-end mb-16 border-b border-leather/10 pb-4">
             <span className="text-xs uppercase tracking-wider text-leather/70">
              paris, fr
            </span>
            <span className="text-xs uppercase tracking-wider text-leather/70">
              développeuse web
            </span>
          </div>

          <h1 className="font-serif font-semibold text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
            Saffana <br />
            <span className="italic ml-0 md:ml-32 text-leather/90">Salaoudine</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 items-start">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-lg md:text-xl leading-relaxed">
                Conceptrice d'applications web & Designer d'interfaces. 
                Je fusionne <span className="italic font-serif font-medium text-2xl md:text-2xl">rigueur technique</span> et élégance visuelle.
              </p>
            </div>
            
            <div className="md:col-start-8 justify-center md:justify-end md:col-span-6 flex flex-row flex-wrap gap-4 md:gap-6 mt-4 md:mt-0">
              <Link href="/projets">
                <Bouton>Découvrir mes travaux</Bouton>
              </Link>

              <Link href="/contact">
                <Bouton>Me Contacter</Bouton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-leather/10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {expertises.map((exp, i) => (
          <div key={i} className="flex flex-col gap-6 border border-leather/10 hover:border-leather/30 transition-colors p-8 group">
            <div className="text-leather">
              {exp.icon}
            </div>
            <h3 className="font-serif font-semibold text-xl lg:text-2xl group-hover:pl-2 transition-all duration-300">{exp.titre}</h3>
            <p className="text-sm text-leather/70 leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
        </div>
      </section>

      <ProjetsApercu />
      <SectionContact />      

    </div>
  );
}