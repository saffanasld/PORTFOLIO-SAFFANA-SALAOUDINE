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

        <div className="flex flex-col gap-12 md:gap-14">
          {featured.map((projet) => (
            <Link 
            key={projet.id} 
            href={`/projets/${projet.id}`} 
            className="group flex flex-col"
            >
              
              <div className="block relative mb-4 md:mb-6 aspect-4/1 w-full overflow-hidden border border-leather/10 hover:border-leather/30 transition-all">
                <img 
                  src={projet.imageaccueil} 
                  alt={projet.titre}
                  className="object-cover w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 items-start hover:pl-2 transition-all duration-300">
                
                <div className="md:col-span-3 flex flex-col items-start gap-2">
                  <h2 className="font-serif font-semibold text-xl lg:text-2xl">
                    {projet.titre}
                  </h2>
                  <p className="text-leather/70 text-sm">
                    {projet.description}
                  </p>
                </div>

                <div className="md:col-span-2 flex flex-wrap md:justify-end gap-2 pt-4">
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