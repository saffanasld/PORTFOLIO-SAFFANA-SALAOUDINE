"use client";

export function Formation() {
  const etudes = [
    {
      annee: "2023 — 2026",
      diplome: "BUT Métiers du Multimédia et de l’Internet",
      parcours: "Parcours Développement Web et Dispositifs Interactifs",
      lieu: "Université Gustave Eiffel, IUT de Meaux",
    },
    {
      annee: "2020 — 2023",
      diplome: "Baccalauréat Général",
      parcours: "Spécialités Mathématiques & Numérique et Sciences Informatiques",
      lieu: "Lycée Polyvalent Emilie du Chatelet, à Serris",
    },
  ];

  return (
    <section className="w-full pt-6 border-t border-leather/10 ">

        <h2 className="text-sm font-normal uppercase tracking-wider pb-6">
          Formation
        </h2>

        <div className="flex flex-col space-y-6">
          {etudes.map((item, index) => (
            <div key={index}>

              <div className="grid grid-cols-1 md:grid-cols-4 p-8 group border border-leather/10 hover:border-leather/30 transition-all">

                <div className="mb-4 md:mb-0">
                  <span className="px-2 py-1 text-xs border border-leather/20 uppercase">
                    {item.annee}
                  </span>
                </div>

                <div className="md:col-span-3 flex flex-col gap-3">
                  <h3 className="font-serif font-semibold text-xl lg:text-2xl">
                    {item.diplome}
                  </h3>
                  <p className="text-sm text-leather/70">
                    {item.parcours}
                  </p>
                  <p className="text-xs uppercase tracking-wide">
                    {item.lieu}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}