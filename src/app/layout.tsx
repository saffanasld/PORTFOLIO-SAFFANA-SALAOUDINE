import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/common/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Saffana Salaoudine",
  icons: {
    icon: "/icon-portfolio.png", 
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {

  return (
    <html lang="fr">
      <body 
        className={`${inter.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
