import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionContact() {
  return (
    <section className="w-full py-14 border-y border-leather/10 group">
      <Link href="/contact" className="relative flex items-center justify-between overflow-hidden">
        
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-leather/70 group-hover:text-leather transition-colors duration-700">
            la prochaine étape
          </span>
          <h2 className="font-serif font-semibold text-xl lg:text-2xl flex items-center gap-2 mb-3">
            Me contacter <span className="text-xs uppercase tracking-wider text-leather/70 not-italic font-sans font-light opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">— Discutons de votre projet</span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <ArrowRight 
            size={20} 
            strokeWidth={1} 
            className="text-leather transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out" 
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-leather/5">
          <div className="h-full w-full bg-leather origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out" />
        </div>
      </Link>
    </section>
  );
}