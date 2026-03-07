import { Competences } from "@/components/reusable/Competences";
import MaPresentation from "@/components/reusable/MaPresentation";
import Link from "next/link";

export default function APropos() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="mb-6 md:mb-6 lg:mb-9">
        <h1 className="font-serif font-semibold text-3xl lg:text-5xl">
          À Propos
        </h1>
        <p className="mt-6 max-w-md text-sm lg:text-base">
          Description à faire.
        </p>
      </div>

      <MaPresentation/>
      <Competences />

    </div>
  );
}