import { Experience } from "@/components/reusable/Experience";
import { Formation } from "@/components/reusable/Formation";

export default function ExpPage() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="mb-6 md:mb-6 lg:mb-9">
        <h1 className="font-serif font-semibold text-3xl lg:text-5xl">
          Mon expérience
        </h1>
        <p className="mt-6 max-w-md text-sm lg:text-base">
          Les étapes clés de ma formation et de mon parcours professionnel, 
          reflétant l'évolution de mes compétences.
        </p>
      </div>

      <Experience/>
      <Formation/>
    </div>
  );
}