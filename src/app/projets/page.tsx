import projectsData from "@/data/projects.json";
import Link from "next/link";

export default function ProjetsPage() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="mb-6 md:mb-6 lg:mb-9">
        <h1 className="font-serif font-semibold text-3xl lg:text-5xl">
          Mes projets
        </h1>
        <p className="mt-6 max-w-md text-sm lg:text-base">
          Une compilation de travaux académiques et personnels, 
          illustrant mon évolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-14">
        {projectsData.map((projet) => (
          <Link
            href={`/projets/${projet.id}`} 
            key={projet.id} 
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
    </div>
  );
}