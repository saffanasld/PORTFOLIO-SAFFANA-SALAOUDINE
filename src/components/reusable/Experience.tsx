"use client";

export function Experience() {
  const techExp = [
    {
      role: "Conceptrice d'applications web",
      entreprise: "Préfecture de Police de Paris",
      date: "2025 — actuel",
      contexte: "Alternance",
      details: "Sous l'égide du Lead Developer, j'ai piloté la conception et le déploiement d'une application web complète.",
      detailslong: "Présente depuis trois ans au sein de la Direction de l'Immobilier et de l'Environnement (DIE), d'abord pour mes deux stages de BUT puis en alternance. J'ai conçu un portail web destiné aux agents de la préfecture, permettant de centraliser et effectuer diverses demandes immobilières. J'ai utilisé Next.js et Tailwind CSS pour le développement, tout en gérant la modélisation de la base de données PostgreSQL, la sécurisation des accès et la logique métier pour l'affichage des données.",
    }
  ];

  const otherExp = [
    { role: "Conseillère beauté", lieu: "Nocibé", date: "2024" },
    { role: "Vendeuse", lieu: "Lacoste", date: "2023" },
  ];

  return (
    <section className="w-full pt-6 pb-6 md:pb-9 border-t border-leather/10">
      <h2 className="text-sm font-normal uppercase tracking-wider pb-6">
        Parcours professionnel
      </h2>
        
        <div className="flex flex-col gap-6">

        <div className="grid grid-cols-1 md:grid-cols-1">
          {techExp.map((exp, index) => (
            <div key={index} className="p-8 border border-leather/10 hover:border-leather/30 transition-all">
              <div className="flex flex-col gap-3 md:flex-row md:justify-between items-start mb-4">
                <span className="text-xs uppercase tracking-wide">{exp.contexte}</span>
                <span className="px-2 py-1 text-xs border border-leather/20 uppercase">{exp.date}</span>
              </div>

              <div>
                <h3 className="font-serif font-semibold text-xl lg:text-2xl">{exp.entreprise}</h3>
                <span className="text-sm text-leather/70">{exp.role}</span>
              </div>

              <p className="mt-4 text-xs lg:text-sm lg:text-justify leading-relaxed pt-4 border-t border-leather/10 ">
                {exp.detailslong}
              </p>
            </div>          
          ))}
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {otherExp.map((exp, index) => (
              <div key={index} className="flex justify-between items-center p-8 border border-leather/10 group hover:border-leather/30 transition-all">
                <div className="flex flex-col">
                  <span className="mb-1 font-serif font-semibold text-lg lg:text-xl">{exp.lieu}</span>
                  <span className="text-sm text-leather/70">{exp.role}</span>
                </div>
                <span className="px-2 py-1 text-xs border border-leather/20 uppercase">{exp.date}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}