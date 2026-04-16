"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; // Importante!

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    // Garante que o componente montou no cliente para evitar erros de hidratação com o ícone de lua/sol
    useEffect(() => {
        setMounted(true);
    }, []);

    // Sincronizado estritamente com os IDs reais da sua Landing Page
    useEffect(() => {
        if (pathname !== "/") return;
        const handleScroll = () => {
            const sections = ["home", "vitrine", "tiers"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="flex items-center gap-4 md:gap-8 px-6 py-3 rounded-full bg-white/60 dark:bg-zinc-900/50 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-lg transition-all">

                <Link href="/" onClick={(e) => handleLinkClick(e, "home")} className="mr-2 transition-transform hover:scale-105">
                    <span className="font-serif font-bold text-xl tracking-[0.2em] text-black dark:text-white">
                        <img src="/outro-nivel-nav-logo.png" alt="Outro Nivel Logo" className="w-12 h-12 object-contain dark:brightness-0 dark:invert" />
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-[13px] font-medium font-sans">
                    <Link href="/#home" onClick={(e) => handleLinkClick(e, "home")}
                        className={`transition-all duration-300 ${pathname === "/" && activeSection === "home"
                            ? "text-blue-600 dark:text-blue-400 font-bold"
                            : "text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white"
                            }`}>
                        O Outro Nivel
                    </Link>

                    <Link href="/#vitrine" onClick={(e) => handleLinkClick(e, "vitrine")}
                        className={`transition-all duration-300 ${pathname === "/" && activeSection === "vitrine"
                            ? "text-blue-600 dark:text-blue-400 font-bold"
                            : "text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white"
                            }`}>
                        Projetos
                    </Link>

                    <div className="relative group py-2">
                        <Link href="/#tiers" onClick={(e) => handleLinkClick(e, "tiers")}
                            className={`transition-all duration-300 ${pathname === "/" && activeSection === "tiers"
                                ? "text-blue-600 dark:text-blue-400 font-bold"
                                : "text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white"
                                }`}>
                            Planos
                        </Link>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <div className="flex flex-col w-48 p-2 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl">
                                <Link href="/#tiers" onClick={(e) => handleLinkClick(e, "tiers")} className="px-4 py-2.5 text-xs font-medium rounded-xl text-black/70 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex justify-between">
                                    Lite
                                </Link>
                                <Link href="/#tiers" onClick={(e) => handleLinkClick(e, "tiers")} className="px-4 py-2.5 text-xs font-medium rounded-xl text-black/70 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex justify-between">
                                    Pro
                                </Link>
                                <Link href="/#tiers" onClick={(e) => handleLinkClick(e, "tiers")} className="px-4 py-2.5 text-xs font-medium rounded-xl text-black/70 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex justify-between">
                                    Premium
                                </Link>
                                <Link href="/#tiers" onClick={(e) => handleLinkClick(e, "tiers")} className="px-4 py-2.5 text-xs font-medium rounded-xl text-yellow-600 dark:text-yellow-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex justify-between">
                                    Gold
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 text-black dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all"
                    >
                        {mounted ? (theme === 'dark' ? "☀️" : "🌙") : "☀️"}
                    </button>

                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-[12px] font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                        Entrar
                    </button>
                </div>
            </div>
        </nav>
    );
}