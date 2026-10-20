import { m } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowUpRight, Link2 } from "lucide-react";
import carlosHeroBg from "@/assets/carlos-hero-bg.webp";
import carlosSpeaker from "@/assets/carlos-speaker.webp";

/* ═══════════════════════════════════════════
   LINKS — página de bio do Carlos Arantes (/links)
   ═══════════════════════════════════════════ */

// Logos das marcas desenhados inline: o lucide não tem logo oficial, só o contorno genérico.
const YoutubeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path
      fill="#FF0000"
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
    />
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <defs>
      <radialGradient id="ig-grad" cx="0.3" cy="1.07" r="1.3">
        <stop offset="0" stopColor="#FDF497" />
        <stop offset="0.1" stopColor="#FDF497" />
        <stop offset="0.5" stopColor="#FD5949" />
        <stop offset="0.68" stopColor="#D6249F" />
        <stop offset="1" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="16.3" cy="7.7" r="1.05" fill="#FFFFFF" />
  </svg>
);

// Símbolo oficial da Lucrometria para fundo escuro (L branco, topo ouro), passado pelo time do app.
const LucrometriaLogo = () => (
  <svg viewBox="18 4 65 92.4445" fill="none" className="h-[22px] w-auto" aria-hidden="true">
    <path d="M39.6667 14.8333C39.6667 8.85025 34.8164 4 28.8333 4C22.8502 4 18 8.85025 18 14.8333V85.6111C18 91.5942 22.8502 96.4445 28.8333 96.4445C34.8164 96.4445 39.6667 91.5942 39.6667 85.6111V14.8333Z" fill="#FFFFFF" />
    <path d="M72.1667 74.7793H28.8333C22.8502 74.7793 18 79.6295 18 85.6126C18 91.5957 22.8502 96.446 28.8333 96.446H72.1667C78.1497 96.446 83 91.5957 83 85.6126C83 79.6295 78.1497 74.7793 72.1667 74.7793Z" fill="#FFFFFF" />
    <path d="M39.6667 14.8333C39.6667 8.85025 34.8164 4 28.8333 4C22.8502 4 18 8.85025 18 14.8333V29.2778C18 35.2609 22.8502 40.1111 28.8333 40.1111C34.8164 40.1111 39.6667 35.2609 39.6667 29.2778V14.8333Z" fill="#F59E0B" />
  </svg>
);

const CIRCULO_NEUTRO = "bg-white/5 border border-white/10";

const CIRCULO_VERDE = "bg-primary/10 border border-primary/30";

const LINKS: { href: string; icone: ReactNode; circulo: string; titulo: string; detalhe: string }[] = [
  {
    href: "https://ctamarketing.com.br/",
    icone: <Link2 className="w-5 h-5 text-primary" />,
    circulo: CIRCULO_VERDE,
    titulo: "CTA Marketing",
    detalhe: "ctamarketing.com.br",
  },
  {
    href: "https://carlosarantes.com.br/metodo-fro-v3-feira-sebrae",
    icone: <Link2 className="w-5 h-5 text-primary" />,
    circulo: CIRCULO_VERDE,
    titulo: "Método FRO",
    detalhe: "Feira Sebrae",
  },
  { href: "https://www.youtube.com/@carlosarantesm", icone: <YoutubeLogo />, circulo: CIRCULO_NEUTRO, titulo: "Canal no YouTube", detalhe: "@carlosarantesm" },
  {
    href: "https://app.lucrometria.com.br/register?coupon=COMECE60DIAS",
    icone: <LucrometriaLogo />,
    circulo: "bg-gradient-to-br from-[#1E4FD1] to-[#0A1E4D] border border-white/10",
    titulo: "Lucrometria",
    detalhe: "Cupom COMECE60DIAS",
  },
  { href: "https://www.instagram.com/carlosarantesm/", icone: <InstagramLogo />, circulo: CIRCULO_NEUTRO, titulo: "Instagram", detalhe: "@carlosarantesm" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const Links = () => (
  <div className="relative min-h-screen text-white overflow-x-hidden bg-background flex flex-col">
    <img
      src={carlosHeroBg}
      alt=""
      aria-hidden="true"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-background/80" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

    <main className="relative z-10 flex-1 flex justify-center px-6 py-14 sm:py-20">
      <m.div initial="hidden" animate="visible" variants={stagger} className="w-full max-w-md flex flex-col items-center text-center">
        <m.img
          variants={fadeUp}
          src={carlosSpeaker}
          alt="Carlos Arantes"
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover object-top border-2 border-primary/60 glow-green-strong"
        />
        <m.h1 variants={fadeUp} className="font-display text-2xl sm:text-3xl mt-6 uppercase glow-text">
          Carlos <span className="text-primary">Arantes</span>
        </m.h1>
        <m.p variants={fadeUp} className="mt-3 font-body text-xs font-bold tracking-[0.3em] text-primary">
          CTA
        </m.p>
        <m.p variants={fadeUp} className="mt-2 text-white/70 font-body text-sm sm:text-base leading-[1.5]">
          <span className="block">Mais vendas nos marketplaces.</span>
          <span className="block">Mais crescimento para o seu negócio.</span>
        </m.p>

        <ul className="mt-10 w-full flex flex-col gap-4">
          {LINKS.map(({ href, icone, circulo, titulo, detalhe }) => (
            <m.li key={href} variants={fadeUp}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass border border-white/10 hover:border-primary/60 rounded-2xl px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${circulo}`}>{icone}</span>
                <span className="flex-1 min-w-0">
                  <span className="block font-body font-bold text-white">{titulo}</span>
                  <span className="block font-body text-sm text-white/60 truncate">{detalhe}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
              </a>
            </m.li>
          ))}
        </ul>
      </m.div>
    </main>
  </div>
);

export default Links;
