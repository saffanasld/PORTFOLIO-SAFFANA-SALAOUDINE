import Bouton from "@/components/common/Bouton";
import ProjetsApercu from "@/components/reusable/ProjetsApercu";
import SectionContact from "@/components/reusable/Contact";
import Link from "next/link";
import { Passions } from "@/components/reusable/Passion";
import { Box, Code2, Palette } from "lucide-react";

export default function HomePage() {
  const expertises = [
    { icon: <Code2 size={20} />, titre: "Développement Full-Stack", desc: "Construction d'applications complètes, de la gestion des données côté serveur à la mise en place d'interfaces interactives." },
    { icon: <Palette size={20} />, titre: "Design & Interfaces", desc: "Réalisation d'identités visuelles et d'interfaces adaptées aux besoins des utilisateurs et aux standards actuels." },
    { icon: <Box size={20} />, titre: "Immersion & 3D", desc: "Conception d'environnements et de contenus visuels utilisant les technologies de modélisation et d'immersion." }
  ];

  return (
    <div className="flex flex-col">
      
      <section className="pt-2 pb-14 md:pb-40 md:pt-16">
        <div className="relative">
          <div className="flex justify-between items-end mb-16 md:mb-24 border-b border-leather/10 pb-4">
             <span className="text-xs uppercase tracking-wider text-leather/70">
              paris, fr
            </span>
            <span className="text-xs uppercase tracking-wider text-leather/70">
              développeuse web
            </span>
          </div>

          <h1 className="font-serif font-semibold text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
            Saffana <br />
            <span className="italic ml-0 md:ml-32">Salaoudine</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 items-start">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-lg leading-relaxed">
              Étudiante en 3e année de BUT MMI à Gustave Eiffel. 
              Je suis curieuse, j'aime explorer, comprendre, puis construire. 
              Bienvenue dans mon univers !
              </p>
            </div>
            
            <div className="md:col-start-8 justify-center md:justify-end md:col-span-6 flex flex-row flex-wrap gap-4 md:gap-6 mt-4 md:mt-0">
              <Link href="/projets">
                <Bouton>Découvrir mes travaux</Bouton>
              </Link>

              <Link href="/contact">
                <Bouton>Me contacter</Bouton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-leather/10 py-14">
      <div className="flex flex-col md:flex-row md:justify-between justify-between md:items-end gap-4 pb-6">
          <h2 className="text-sm font-normal uppercase tracking-wider">
          Profil pluridisciplinaire
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {expertises.map((exp, i) => (
          <div key={i} className="flex flex-col gap-6 border border-leather/10 p-8 group">
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
      <Passions />
      <SectionContact />      

    </div>
  );
}