import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar";
import { Providers } from "@/src/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Protocol | Web3 Cashback",
  description: "O primeiro protocolo de cashback descentralizado com yield passivo na Web3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning // Essencial para o next-themes não dar erro de hidratação
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      {/* REMOVIDO: A tag <script> manual foi retirada. 
          O Providers (next-themes) cuida disso agora.
      */}

      <body className="min-h-full flex flex-col bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 selection:bg-blue-300 dark:selection:bg-blue-900 transition-colors duration-500 overflow-x-hidden font-sans">

        <Providers>
          {/* Luzes de Fundo (Glow) Liquid Glass */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-cyan-400/10 dark:bg-blue-600/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-blue-500/10 dark:bg-indigo-900/15 blur-[100px]" />
          </div>

          <Navbar />

          <div className="flex-grow flex flex-col items-center">
            {children}
          </div>
        </Providers>

      </body>
    </html>
  );
}