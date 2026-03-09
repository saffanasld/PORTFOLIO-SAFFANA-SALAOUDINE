import Bouton from "../common/Bouton"

export default function MaPresentation() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-6 md:mb-9 p-8 border border-leather/10 hover:border-leather/30 transition-all">
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-pearl shadow-inner">
          <img 
            src="/images/photo-saffana.jpg" 
            alt="Portrait de Saffana"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-serif font-semibold text-xl lg:text-2xl mb-4">
            Saffana Salaoudine
          </h2>
          <p className="text-xs lg:text-sm lg:text-justify leading-relaxed">
          Étudiante en 3ème année de BUT MMI à l'Université Gustave Eiffel, j'ai un profil 
          plutôt scientifique et j'aime que mon travail soit bien structuré. Si j'ai une grande 
          curiosité culturelle, ce qui me définit surtout, c'est mon besoin de rigueur.
          Mon objectif est de poursuivre mes études vers un Master dans un domaine qui me 
          passionne pour continuer à monter en compétences. Je cherche avant tout à m'épanouir 
          professionnellement.
          </p>

          <div className="mt-5">
            <a 
              href="/images/cv-saffana.pdf"
              download="CV_SAFFANA_SALAOUDINE.pdf"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Bouton type="button">
                  Télécharger CV
              </Bouton>
            </a>
          </div>

        </div>
      </section>
    )
}