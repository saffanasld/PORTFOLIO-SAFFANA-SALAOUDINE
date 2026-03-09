"use client";
import projectsData from "@/data/projects.json";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function ProjetsApercu() {
  const featured = projectsData.slice(0, 2);

  return (
    <section className="w-full py-14 border-t border-leather/10">
        
        <div className="flex flex-col md:flex-row md:justify-between justify-between md:items-end gap-4 pb-6">
          <h2 className="text-sm font-normal uppercase tracking-wider">
            projets récents
          </h2>
          <Link 
                href="/projets" 
                className="group flex items-center gap-2 text-xs uppercase tracking-wider text-leather/70 hover:text-leather transition-all"
                >
                voir tout les projets
                <MoveRight size={14}/>
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-14">
          {featured.map((projet) => (
            <Link 
            key={projet.id} 
            href={`/projets/${projet.id}`} 
            className="group flex flex-col"
            >
              
              <div className="relative aspect-[16/10] overflow-hidden bg-pearl border border-leather/10 hover:border-leather/30 transition-all mb-4 md:mb-6">
                <img 
                  src={projet.image} 
                  alt={projet.titre}
                  className="object-cover object-top w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-start hover:pl-2 transition-all duration-300">
              <h2 className="font-serif uppercase font-semibold text-xl lg:text-2xl mb-2">
                {projet.titre}
              </h2>
              
              <p className="text-leather/70 text-sm mb-4">
                {projet.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {projet.badges.map((badge) => (
                  <span 
                    key={badge}
                    className="px-2 py-1 text-xs border border-leather/20 uppercase"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            </Link>
          ))}
        </div>
    </section>
  );
}