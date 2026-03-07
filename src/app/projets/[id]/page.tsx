import projectsData from "@/data/projects.json";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjetDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    //const projet = projectsData.find((p) => p.id === Number(id));

    const currentIndex = projectsData.findIndex((p) => p.id === Number(id));
    const projet = projectsData[currentIndex];

    if (!projet) return notFound();
    const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

    return (
    <div className="flex-grow flex flex-col">
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6 border-b border-leather/10 pb-6">
        <div>
            <Link 
                href="/projets" 
                className="group flex items-center gap-2 text-xs uppercase tracking-wider text-leather/70 hover:text-leather transition-all"
                >
                <ArrowLeft size={14}/>
                retour aux projets
            </Link>
            <h1 className="font-serif font-semibold text-3xl lg:text-5xl mt-4">{projet.titre}</h1>
        </div>

        <div className="flex gap-3 items-center">
            {projet.lien && (
            <a 
                href={projet.lien} 
                target="_blank" 
                className="flex items-center gap-2 text-xs uppercase tracking-wider border border-leather px-4 py-2 hover:bg-leather hover:text-ivory transition-all"
            >
                <span>lien site</span>
                <ArrowUpRight size={14} />
            </a>
            )}
            {projet.gitlien && (
            <a 
                href={projet.gitlien} 
                target="_blank" 
                className="flex items-center gap-2 text-xs uppercase tracking-wider border border-leather bg-leather text-ivory px-4 py-2"
            >
                <span>github</span>
                <Github size={14} />
            </a>
            )}
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6">
        <div className="md:col-span-4 space-y-6">
            <div>
                <h4 className="text-sm font-normal uppercase tracking-wider pb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                {projet.badges.map(b => <span key={b} className="px-2 py-1 text-xs border border-leather/20 uppercase">{b}</span>)}
                </div>
            </div>
        <div>
            <h4 className="text-sm font-normal uppercase tracking-wider pb-4">Concept</h4>
            <p className="text-xs lg:text-sm lg:text-justify leading-relaxed">{projet.description}</p>
        </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
            <h3 className="text-sm font-normal uppercase tracking-wider pb-4">Le défi</h3>
            <p className="text-xs lg:text-sm lg:text-justify leading-relaxed ">
            {projet.defi}
            </p>
        </div>
    </div>

    <div className="space-y-6 border-t border-leather/10">
        <h2 className="text-sm font-normal uppercase tracking-wider text-center mt-6">Aperçus du projet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projet.galerie?.map((img, index) => (
                <div 
                    key={index} 
                    className={`relative overflow-hidden bg-pearl border border-leather/5 ${index % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
                    >
                    <img src={img} alt={`Aperçu ${index}`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
                </div>
            ))}
        </div>
    </div>

    <div className="mt-10 pt-10 border-t border-leather/10 flex flex-col items-center gap-4">
        <span className="text-xs uppercase tracking-wider text-leather/70">
            Découvrir la suite
        </span>
        
        <Link 
            href={`/projets/${nextProject.id}`} 
            className="group flex flex-col items-center gap-2"
        >
            <div className="overflow-hidden">
                <h3 className="font-semibold text-3xl lg:text-5xl font-serif text-leather/80 group-hover:text-leather group-hover:translate-y-[-5%] transition-all duration-500">
                    {nextProject.titre}
                </h3>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-leather/70 group-hover:text-leather transition-all">
                <span>projet suivant</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
        </Link>
    </div>

    </div>
    );
}