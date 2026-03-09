"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Bouton from "@/components/common/Bouton";
import { Linkedin, Github, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      "service_57jo6wo",
      "template_mwe66h5",
      form.current!,
      "KIVWAKQW7OMDEmge1"
    )
    .then(() => {
      setIsSent(true);
      setIsSending(false);
      form.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      setIsSending(false);
      alert("Une erreur est survenue, réessayez plus tard.");
    });
  };

    return (
      <div className="flex-grow flex flex-col justify-center">
        <div className="mb-6 md:mb-6 lg:mb-9">
          <h1 className="font-serif font-semibold text-3xl lg:text-5xl">
            Me contacter
          </h1>
          <p className="mt-6 max-w-md text-sm lg:text-base">
              Un projet en tête ou une question ? N'hésitez pas à m'envoyer un message, 
              je vous répondrai avec plaisir.
          </p>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-6 lg:gap-32 border-t border-leather/10">
          
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-normal uppercase tracking-wider">Email </h3>
              <p className="text-xs lg:text-sm mt-1">salaoudinesaffana@gmail.com</p>
            </div>
  
            <div>
              <h3 className="text-sm font-normal uppercase tracking-wider">Localisation </h3>
              <p className="text-xs lg:text-sm mt-1">Paris, FR</p>
            </div>
  
            <div>
              <h3 className="text-sm font-normal uppercase tracking-wider">Réseaux</h3>
                <div className="flex gap-4 mt-2">
                    <a 
                    href="https://www.linkedin.com/in/saffana-salaoudine-0711362a4/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pearl border border-leather/10 flex items-center justify-center hover:bg-leather transition-all duration-300 group"
                    >
                    <Linkedin 
                        size={20} 
                        className="text-leather group-hover:text-ivory transition-colors" 
                        strokeWidth={1.5}
                    />
                    </a>

                    <a 
                    href="https://github.com/saffanasld" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pearl border border-leather/10 flex items-center justify-center hover:bg-leather transition-all duration-300 group"
                    >
                    <Github 
                        size={20} 
                        className="text-leather group-hover:text-ivory transition-colors" 
                        strokeWidth={1.5}
                    />
                    </a>
                </div>
            </div>
          </div>


          <div className="relative">
            {isSent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 size={30} className="text-leather mb-4" strokeWidth={1} />
                <h3 className="font-serif font-semibold text-xl lg:text-2xl">Message envoyé !</h3>
                <p className="text-sm mt-2 text-center">Merci, je vous répondrai très prochainement.</p>
                <button onClick={() => setIsSent(false)} className="mt-8 text-xs uppercase tracking-wider text-leather/70 hover:text-leather border-b border-leather/10 pb-1">Envoyer un autre message</button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-normal uppercase tracking-wider">Nom complet</label>
                    <input name="name" required type="text" className="bg-transparent border-b border-leather/20 py-2 focus:outline-none focus:border-leather transition-colors text-sm" placeholder="Votre Nom" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-normal uppercase tracking-wider">Email</label>
                    <input name="email" required type="email" className="bg-transparent border-b border-leather/20 py-2 focus:outline-none focus:border-leather transition-colors text-sm" placeholder="votre@email.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-sm font-normal uppercase tracking-wider">Message</label>
                  <textarea name="message" required rows={4} className="bg-transparent border-b border-leather/20 py-2 focus:outline-none focus:border-leather transition-colors resize-none text-sm" placeholder="Dites-moi tout..." />
                </div>

                <Bouton type="submit">
                  {isSending ? "Envoi en cours..." : "Envoyer le message"}
                </Bouton>
              </form>
            )}
          </div>


        </div>
      </div>
    );
}