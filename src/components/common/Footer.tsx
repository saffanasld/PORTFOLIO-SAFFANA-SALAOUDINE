import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-leather py-8 mt-auto">
      <div className="px-5 md:px-10 lg:px-20">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <span className="text-ivory/50 text-xs uppercase tracking-wide block mb-2">
              On travaille ensemble ?
            </span>
            <a 
              href="mailto:salaoudinesaffana@gmail.com" 
              className="text-ivory text-lg lg:text-xl font-serif italic hover:opacity-70 transition-opacity"
            >
              salaoudinesaffana@gmail.com
            </a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/saffanasld" target="_blank" className="text-ivory/50 text-xs uppercase tracking-wide hover:text-ivory transition-colors">
              github
            </a>
            <a href="www.linkedin.com/in/saffana-salaoudine-0711362a4" target="_blank" className="text-ivory/50 text-xs uppercase tracking-wide hover:text-ivory transition-colors">
              linkedin
            </a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-ivory/10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wide text-ivory/50">
          <span>
            © 2026 — TOUS DROITS RÉSERVÉS
          </span>
        </div>
      </div>
    </footer>
  );
}