import { m } from "framer-motion";
import { ArrowUpRight, Instagram, LineChart, Youtube } from "lucide-react";
import carlosHeroBg from "@/assets/carlos-hero-bg.webp";
import carlosSpeaker from "@/assets/carlos-speaker.webp";

/* ═══════════════════════════════════════════
   LINKS — página de bio do Carlos Arantes (/links)
   ═══════════════════════════════════════════ */

const LINKS = [
  { href: "https://www.youtube.com/@carlosarantesm", icon: Youtube, titulo: "Canal no YouTube", detalhe: "@carlosarantesm" },
  {
    href: "https://app.lucrometria.com.br/register?coupon=COMECE60DIAS",
    icon: LineChart,
    titulo: "Lucrometria",
    detalhe: "Cupom COMECE60DIAS",
  },
  { href: "https://www.instagram.com/carlosarantesm/", icon: Instagram, titulo: "Instagram", detalhe: "@carlosarantesm" },
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
        <m.p variants={fadeUp} className="mt-2 text-white/70 font-body text-sm sm:text-base">
          Marketplaces e multicommerce
        </m.p>

        <ul className="mt-10 w-full flex flex-col gap-4">
          {LINKS.map(({ href, icon: Icon, titulo, detalhe }) => (
            <m.li key={href} variants={fadeUp}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass border border-white/10 hover:border-primary/60 rounded-2xl px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
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
