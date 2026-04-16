"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/src/components/navbar";
import MatrixRain from "@/src/components/matrixrain";

// --- DADOS DA VITRINE COM ÍCONES ---
const techStacks = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" }
];

const projectsData = [
  {
    id: 1,
    title: "Zaeon - EdTech",
    liveLink: "https://zaeon.space",
    isOpenSource: true,
    codeLink: "https://github.com/web3-engineer/zaeon-os",
    image: ""
  },
  {
    id: 2,
    title: "Sniper Bots - Blockchain",
    liveLink: "https://seulinklive.com",
    isOpenSource: false,
    codeLink: "",
    image: ""
  },
  {
    id: 3,
    title: "Kaxis Club - FinTech",
    liveLink: "https://kaxis-club-v1.vercel.app",
    isOpenSource: false,
    codeLink: "",
    image: ""
  },
  {
    id: 4,
    title: "Zona Vip - IA generativa",
    liveLink: "https://seulinklive.com",
    isOpenSource: true,
    codeLink: "https://github.com/web3-engineer/vip-zone",
    image: ""
  },
];

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  // --- STATES DO TYPING EFFECT ---
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const roles = ["Negócios lucrativos.", "Sites Impecáveis.", "Aplicativos Magníficos.", "Projetos Profissionais."];

  const whatsappNumber = "5511999999999";

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPreloader || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showPreloader]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .marquee-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-content {
          display: flex;
          gap: 4rem;
          padding-left: 4rem;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      {/* BACKGROUND FIXO: MATRIX RAIN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white dark:from-black/20 dark:via-black/60 dark:to-[#050505]"></div>
      </div>

      <Navbar />

      {/* 🚀 PRELOADER */}
      {showPreloader && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-1000">
          <div className="flex flex-col items-center animate-blur-reveal">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <span className="text-4xl font-light tracking-widest text-black dark:text-white">Martinez</span>
            </div>
          </div>
        </div>
      )}

      <main className={`relative z-10 flex flex-col items-center transition-opacity duration-1000 min-h-screen text-black dark:text-white ${showPreloader ? 'opacity-0' : 'opacity-100'}`}>

        {/* 1. HERO SECTION */}
        <section id="home" className="w-full min-h-screen flex items-center justify-center pt-20 px-4 md:px-12">

          {/* Container limpo, apenas com o conteúdo (sem o card de fundo) */}
          <div className="w-full max-w-4xl p-10 md:p-16 flex flex-col items-center text-center reveal-on-scroll">

            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 border border-black/10 dark:border-white/20 shadow-xl bg-white/50 dark:bg-black/50 backdrop-blur-md flex items-center justify-center">
              <span className="text-4xl">🥷🏻</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-black/90 dark:text-white/90">
              Transformando ideias em
            </h1>

            {/* TYPING ANIMATION */}
            <h2 className="text-3xl md:text-5xl font-mono font-thin text-blue-600 dark:text-blue-400 mb-10 h-12">
              <span>{text}</span>
              <span className="cursor-blink inline-block ml-1 w-[2px] h-[1em] bg-blue-600 dark:bg-blue-400 align-middle"></span>
            </h2>

            <p className="text-black/60 dark:text-white/50 text-base md:text-lg max-w-xl font-light leading-relaxed mb-10">
              Design impecável, fluidez absoluta e performance no padrão Apple. Te entrego o que há de melhor. Você escolhe se quer ou não.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white dark:hover:text-black px-10 py-4 rounded-full text-sm font-medium transition-all border border-[#25D366]/30 backdrop-blur-md flex items-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Fechar Contrato
            </a>
          </div>
        </section>

        {/* 2. INFRAESTRUTURA E VITRINE DE PROJETOS */}
        <section id="vitrine" className="w-full max-w-7xl px-4 md:px-6 py-24 mx-auto reveal-on-scroll relative z-20">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-mono tracking-widest uppercase mb-3 block opacity-80"></span>
            <h2 className="text-3xl md:text-5xl font-light text-black dark:text-white mb-6">Vitrine de Projetos</h2>
            <p className="text-black/60 dark:text-white/50 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Desenvolvidos com as melhores tecnologias de mercado, prontos para a escala.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto mb-20 overflow-hidden relative">
            <div className="absolute top-0 left-2 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-1 rounded z-10 border border-blue-500/20">STACKS</div>
            <div className="marquee-container pt-8 pb-4">
              <div className="marquee-content items-center">
                {Array(3).fill(null).map((_, index) => (
                  <div key={index} className="flex gap-16">
                    {techStacks.map((stack, idx) => (
                      <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
                        {/* Ícones com as cores originais da Devicon (Sem filtro) */}
                        <img
                          src={stack.icon}
                          alt={stack.name}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform group-hover:scale-110"
                        />
                        {/* Texto reajustado para ficar visível (Preto no claro, Branco no escuro) */}
                        <span className="text-xl md:text-2xl font-thin text-black dark:text-white uppercase tracking-widest">
                          {stack.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsData.map((proj) => (
              <div key={proj.id} className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg group relative flex flex-col p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="w-full h-32 md:h-40 rounded-xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/5 overflow-hidden mb-5 relative flex items-center justify-center">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-xs font-mono text-black/40 dark:text-white/30 text-center px-4">
                      [Colar Print Aqui]
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-light text-black dark:text-white mb-2 leading-tight">{proj.title}</h3>
                    <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-mono text-blue-600 dark:text-blue-400 hover:underline mb-6 opacity-80">
                      ↗ [Link]
                    </a>
                  </div>

                  <div className="w-full">
                    {proj.isOpenSource ? (
                      <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-2.5 rounded-xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-mono font-medium text-black dark:text-white transition-colors">
                        &lt;/&gt; Código Aberto
                      </a>
                    ) : (
                      <a href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20pedir%20o%20código%20do%20projeto%20${proj.title}.`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white dark:hover:text-black border border-[#25D366]/30 text-xs font-mono font-medium transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
                        Pedir Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TIERS DE CARTÕES */}
        <section id="tiers" className="w-full max-w-7xl px-4 md:px-6 py-24 scroll-mt-20">
          <div className="max-w-4xl mx-auto mb-16 text-center reveal-on-scroll">
            <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-mono tracking-widest uppercase mb-3 block opacity-80"></span>
            <h2 className="text-3xl md:text-5xl font-light text-black dark:text-white mb-6">Preços e Planos</h2>
          </div>

          <div className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-4 md:justify-center items-center reveal-on-scroll delay-100">
            {[
              { id: 1, name: "LITE", desc: "Site completo com design responsivo e SEO. Ideal para quem está começando.", color: "from-slate-200 to-slate-400 dark:from-slate-800 dark:to-black", border: "border-slate-300 dark:border-slate-700", shadow: "hover:shadow-[0_0_40px_rgba(148,163,184,0.3)] dark:hover:shadow-[0_0_40px_rgba(148,163,184,0.1)]" },
              { id: 2, name: "PRO", desc: "Site com design responsivo de alto nível e SEO, integração de CRM e automações simples. Ideal para quem quer escalar.", color: "from-blue-100 to-blue-300 dark:from-blue-900/50 dark:to-black", border: "border-blue-300 dark:border-blue-800", shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]" },
              { id: 3, name: "PREMIUM", desc: "Projeto escalável feito sob medida. Inclui painel administrativo, CRM profissional e automações avançadas. Ideal para quem quer mais resultados. $997,00", color: "from-purple-200 to-purple-400 dark:from-purple-900/50 dark:to-black", border: "border-purple-300 dark:border-purple-800", shadow: "hover:shadow-[0_0_40px_rgba(168,162,158,0.4)] dark:hover:shadow-[0_0_40px_rgba(168,162,158,0.2)]" },
              { id: 4, name: "GOLD", desc: "Solução completa e totalmente sua: App nativo, IA integrada, infra dedicada e squad de marketing. $1.997,00", color: "from-yellow-200 to-yellow-500 dark:from-yellow-900/40 dark:to-black", border: "border-yellow-400 dark:border-yellow-800", shadow: "hover:shadow-[0_0_50px_rgba(202,138,4,0.4)] dark:hover:shadow-[0_0_50px_rgba(202,138,4,0.2)]", isSpecial: true }
            ].map((tier) => (
              <div
                key={tier.id}
                className={`bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 group relative shrink-0 w-[280px] h-[440px] rounded-[2rem] p-3 snap-center hover:-translate-y-4 transition-all duration-500 ${tier.shadow}`}
              >
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${tier.color} border border-black/5 dark:border-white/5 opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                <div className="absolute inset-2 rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-sm z-10 flex flex-col justify-between p-6 overflow-hidden">
                  <div className="flex justify-between items-start z-30">
                    <span className={`font-mono text-xs tracking-widest font-thin ${tier.isSpecial ? 'text-yellow-600 dark:text-yellow-500' : 'text-black/50 dark:text-white/50'}`}>
                      Plano #{tier.id}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full animate-pulse ${tier.isSpecial ? 'bg-yellow-500' : 'bg-black/70 dark:bg-white/70'}`}></div>
                    </div>
                  </div>

                  <div className="text-left z-30 flex-1 flex items-center justify-center py-4">
                    <p className="font-light text-sm text-black/70 dark:text-white/70 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="z-30 border-t border-black/10 dark:border-white/10 pt-4 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                      <h3 className="font-light text-2xl tracking-wide text-black dark:text-white">
                        {tier.name}
                      </h3>
                      {tier.id < 3 && (
                        <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors text-black dark:text-white border border-black/10 dark:border-white/10">
                          →
                        </button>
                      )}
                    </div>

                    {tier.id >= 3 && (
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento%20para%20o%20plano%20${tier.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-center py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer relative z-50"
                      >
                        Pedir Orçamento
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-black/10 dark:border-white/10 py-16 px-6 flex flex-col items-center relative z-20 bg-white/50 dark:bg-black/50 backdrop-blur-xl">
        <span className="font-light tracking-[0.2em] text-2xl text-black dark:text-white mb-6"></span>
        <div className="flex gap-8 mb-8 text-xs font-mono uppercase tracking-widest text-black/60 dark:text-white/40">
        </div>
        <p className="text-[10px] text-black/40 dark:text-white/20 text-center font-mono uppercase">
          © {new Date().getFullYear()} Martinez, 2026.
        </p>
      </footer>
    </>
  );
}