import { m } from "framer-motion";
import {
  ArrowRight, Calendar, Zap, TrendingUp, Shield,
  Target, Lightbulb, BarChart3, Instagram,
} from "lucide-react";
import carlosSpeaker from "@/assets/carlos-speaker.webp";
import carlosHeroBg from "@/assets/carlos-hero-bg.webp";

/* ═══════════════════════════════════════════
   EVENTO — Imersão Multicommerce · online · 30/10
   ═══════════════════════════════════════════ */

const HOTMART_URL = "https://pay.hotmart.com/L107403868Y";
const PRECO = "97";
const PRECO_CHEIO = "197";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const bullets = [
  {
    icon: TrendingUp,
    title: "Escale com método, não com sorte",
    desc: "Quem cresce nos marketplaces não tem sorte, tem método. Você vai ver o passo a passo real.",
  },
  {
    icon: Shield,
    title: "Proteja a margem em cada canal",
    desc: "Precificação correta pra cada marketplace, sem virar refém de comissão e frete.",
  },
  {
    icon: Target,
    title: "Anúncio ativo, lucro no bolso",
    desc: "Anúncio ativo, venda saindo e o lucro sumindo. Isso muda aqui.",
  },
  {
    icon: BarChart3,
    title: "Do zero à operação escalada",
    desc: "Serve pra quem está começando e pra quem já vende. Método replicável nos 4 canais.",
  },
];

const marketplaces = ["Shopee", "Mercado Livre", "Amazon", "TikTok Shop"];

const CtaButton = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <a
    href={HOTMART_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold text-sm uppercase tracking-[0.1em] px-8 py-4 rounded hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 ${className}`}
  >
    {children}
    <ArrowRight className="w-5 h-5" />
  </a>
);

const Index = () => {
  return (
    <>
      {/* ══ PREMIUM BACKGROUND — fixed orbs + light beams ══ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden bg-background" style={{ zIndex: -1 }}>
        <div className="absolute rounded-full" style={{ top: "-20%", right: "-12%", width: "70vw", height: "70vw", maxWidth: 900, maxHeight: 900, background: "radial-gradient(circle at center, rgba(34,197,94,0.13) 0%, transparent 60%)" }} />
        <div className="absolute rounded-full" style={{ top: "38%", left: "-18%", width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700, background: "radial-gradient(circle at center, rgba(34,197,94,0.09) 0%, transparent 60%)" }} />
        <div className="absolute rounded-full" style={{ bottom: "8%", right: "-5%", width: "42vw", height: "42vw", maxWidth: 520, maxHeight: 520, background: "radial-gradient(circle at center, rgba(34,197,94,0.07) 0%, transparent 60%)" }} />
        <div className="absolute rounded-full" style={{ top: "55%", left: "30%", width: "35vw", height: "35vw", maxWidth: 440, maxHeight: 440, background: "radial-gradient(circle at center, rgba(22,163,74,0.06) 0%, transparent 60%)" }} />
        <div className="absolute" style={{ top: "-8%", left: "20%", width: 80, height: "72vh", background: "linear-gradient(to bottom, rgba(34,197,94,0.11) 0%, transparent 100%)", transform: "rotate(22deg)", transformOrigin: "top center", filter: "blur(24px)" }} />
        <div className="absolute" style={{ top: "-5%", right: "26%", width: 50, height: "55vh", background: "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 100%)", transform: "rotate(-14deg)", transformOrigin: "top center", filter: "blur(14px)" }} />
        <div className="absolute" style={{ top: 0, left: "57%", width: 2, height: "48vh", background: "linear-gradient(to bottom, rgba(34,197,94,0.30) 0%, transparent 100%)", transform: "rotate(8deg)", transformOrigin: "top center" }} />
        <div className="absolute" style={{ top: 0, right: "40%", width: 1.5, height: "38vh", background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)", transform: "rotate(-5deg)", transformOrigin: "top center" }} />
        <div className="absolute" style={{ top: "45%", right: "10%", width: 60, height: "50vh", background: "linear-gradient(to bottom, rgba(34,197,94,0.07) 0%, transparent 100%)", transform: "rotate(-18deg)", transformOrigin: "top center", filter: "blur(20px)" }} />
      </div>

      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen text-white overflow-x-hidden">

        {/* ══ NAV ══ */}
        <nav className="fixed top-0 left-0 right-0 z-[5000] bg-[rgba(3,12,24,0.92)] backdrop-blur-[12px]">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-2 sm:gap-4">
            <span className="font-display text-[11px] sm:text-base tracking-tight flex-shrink-0">
              <span className="text-white">IMERSÃO</span>
              <span className="text-primary ml-1">MULTICOMMERCE</span>
              <span className="text-white/50 ml-1 text-[10px] hidden sm:inline">30/10</span>
            </span>

            <div className="hidden lg:block text-center font-body font-medium text-[13px] leading-tight">
              <span className="text-white/70">100% ONLINE · INGRESSO</span>
              <span className="text-white font-bold ml-1">R$ {PRECO}</span>
            </div>

            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold text-[10px] sm:text-[11px] uppercase tracking-wider px-3 sm:px-4 py-2 sm:py-2.5 rounded hover:brightness-110 transition-all flex items-center gap-1.5 sm:gap-2"
            >
              <span className="hidden sm:inline">Comprar ingresso</span>
              <span className="sm:hidden">Ingresso</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </nav>

        {/* ══ HERO — Vender mais nao e o problema. Lucrar e. ══ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-[72px]">
          <img
            src={carlosHeroBg}
            alt=""
            aria-hidden="true"
            {...{ fetchpriority: "high" }}
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
            <div className="absolute rounded-full" style={{ top: "-30%", right: "-10%", width: "60%", height: "120%", background: "radial-gradient(circle at 70% 30%, rgba(34,197,94,0.14) 0%, transparent 55%)" }} />
            <div className="absolute rounded-full" style={{ bottom: "-20%", left: "-10%", width: "50%", height: "80%", background: "radial-gradient(circle at 30% 70%, rgba(34,197,94,0.08) 0%, transparent 55%)" }} />
            <div className="absolute" style={{ top: 0, left: "32%", width: 1.5, height: "80%", background: "linear-gradient(to bottom, rgba(34,197,94,0.35) 0%, transparent 100%)", transform: "rotate(12deg)", transformOrigin: "top center" }} />
            <div className="absolute" style={{ top: "-5%", right: "20%", width: 55, height: "70%", background: "linear-gradient(to bottom, rgba(34,197,94,0.08) 0%, transparent 100%)", transform: "rotate(-10deg)", transformOrigin: "top center", filter: "blur(18px)" }} />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
            <m.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
              <m.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[13px] font-body text-white/70">
                  <Zap className="w-4 h-4 text-primary" />
                  IMERSÃO ONLINE · <span className="text-primary font-bold">30 DE OUTUBRO</span>
                </span>
              </m.div>

              <m.h1 variants={fadeUp} className="font-display text-[clamp(1.75rem,5.5vw,2.75rem)] mt-8 leading-[1.2] uppercase glow-text">
                Vender mais não é o problema.{" "}
                <span className="text-primary">Lucrar é.</span>
              </m.h1>

              <m.p variants={fadeUp} className="mt-6 text-white/70 font-body font-medium text-base sm:text-xl max-w-2xl leading-[1.5]">
                Dia 30/10, <span className="text-white font-semibold">Carlos Arantes</span> abre as estratégias que usa todo dia nos marketplaces pra escalar com margem. Shopee, Mercado Livre, Amazon e TikTok Shop.
              </m.p>

              <m.div variants={fadeUp} className="mt-8">
                <CtaButton className="px-10 sm:px-14 py-5 text-base glow-green-strong">
                  Quero meu ingresso · R$ {PRECO}
                </CtaButton>
              </m.div>

              <m.p variants={fadeUp} className="mt-6 font-body font-medium text-white/70 text-sm sm:text-base flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> 100% online
                </span>
                <span className="text-white/40">·</span>
                <span>Dia inteiro</span>
                <span className="text-white/40">·</span>
                <span>Ingresso R$ {PRECO}</span>
              </m.p>

              {/* Logos-faixa dos 4 marketplaces */}
              <m.div variants={fadeUp} className="mt-12 sm:mt-14 w-full max-w-2xl">
                <p className="text-white/50 font-body text-[10px] uppercase tracking-[0.2em] mb-4">Método aplicado em</p>
                <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3">
                  {marketplaces.map((mp) => (
                    <span
                      key={mp}
                      className="font-display text-white/40 text-sm sm:text-base uppercase tracking-wide hover:text-white/60 transition-colors"
                    >
                      {mp}
                    </span>
                  ))}
                </div>
              </m.div>
            </m.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>

        {/* ══ DOBRA 2 — Bullets + Quem apresenta + CTA final ══ */}
        <section className="relative py-16 sm:py-24 section-elevated">
          <div className="max-w-6xl mx-auto px-6">

            {/* Bullets: o que voce vai destravar em 1 dia */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-14 sm:mb-16"
            >
              <m.p variants={fadeUp} className="flex items-center justify-center gap-2 text-primary font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                O que você vai destravar
              </m.p>
              <m.h2 variants={fadeUp} className="font-display text-[clamp(1.6rem,4.2vw,2.25rem)] leading-[1.25] uppercase">
                Em 1 dia,{" "}
                <span className="text-gradient">o método completo</span>
              </m.h2>
            </m.div>

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-20 sm:mb-24"
            >
              {bullets.map((b) => (
                <m.div
                  key={b.title}
                  variants={scaleIn}
                  className="group relative glass border border-white/10 hover:border-primary/30 rounded-2xl p-6 sm:p-7 transition-all duration-500"
                >
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center glow-green">
                      <b.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl text-white leading-tight mb-2">
                        {b.title}
                      </h3>
                      <p className="font-body text-white/60 text-sm sm:text-[15px] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </m.div>
              ))}
            </m.div>

            {/* Quem apresenta */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-10 sm:mb-12"
            >
              <m.p variants={fadeUp} className="flex items-center justify-center gap-2 text-primary font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Quem apresenta
              </m.p>
            </m.div>

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={scaleIn}
              className="group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 hover:border-primary/25 transition-all duration-500 mb-16 sm:mb-20"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent z-20" />
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-[340px] md:flex-shrink-0 h-80 md:h-auto overflow-hidden">
                  <img
                    src={carlosSpeaker}
                    alt="Carlos Arantes"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "center 0%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#111]" />
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-body text-primary text-[11px] font-bold uppercase tracking-widest">Apresentador da imersão</span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl text-white leading-none">Carlos Arantes</h3>
                    <p className="text-primary font-body font-semibold text-sm mt-2">CEO da UseVertice · Opera nos marketplaces todo dia</p>
                  </div>

                  <p className="font-body text-white/60 text-base leading-relaxed">
                    Carlos Arantes atua todo dia dentro dos marketplaces e vai mostrar o passo a passo real que usa na própria operação pra escalar Shopee, Mercado Livre, Amazon e TikTok Shop sem virar refém do canal.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <p className="font-display text-primary text-lg leading-none">+10 anos</p>
                      <p className="font-body text-white/60 text-xs mt-1 leading-snug">no mercado digital</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <p className="font-display text-primary text-lg leading-none">4 canais</p>
                      <p className="font-body text-white/60 text-xs mt-1 leading-snug">Shopee, ML, Amazon, TikTok</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <p className="font-display text-primary text-lg leading-none">Método</p>
                      <p className="font-body text-white/60 text-xs mt-1 leading-snug">replicável e comprovado</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <p className="font-display text-primary text-lg leading-none">Online</p>
                      <p className="font-body text-white/60 text-xs mt-1 leading-snug">aprenda de qualquer lugar</p>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/carlosarantesm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 hover:bg-primary/10 hover:border-primary/30 transition-all text-white/50 hover:text-white font-body text-sm"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    @carlosarantesm
                  </a>
                </div>
              </div>
            </m.div>

            {/* CTA final */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="text-center max-w-2xl mx-auto"
            >
              <m.h2 variants={fadeUp} className="font-display text-[clamp(1.5rem,4vw,2rem)] leading-[1.25] uppercase mb-4">
                Garanta seu <span className="text-primary">ingresso</span>
              </m.h2>
              <m.p variants={fadeUp} className="font-body text-white/70 text-base sm:text-lg mb-8">
                <Lightbulb className="w-4 h-4 text-primary inline mr-1 -mt-1" /> Dia 30/10 · 100% online · Dia inteiro
              </m.p>
              <m.div variants={fadeUp}>
                <CtaButton className="px-10 sm:px-14 py-5 text-base glow-green-strong">
                  Quero meu ingresso · R$ {PRECO}
                </CtaButton>
              </m.div>
              <m.p variants={fadeUp} className="mt-6 font-body text-white/60 text-xs sm:text-sm">
                Você será redirecionado pro checkout seguro da Hotmart.
              </m.p>
            </m.div>

          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="border-t border-white/10 py-10 mt-4">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 font-body text-xs">
            <p>
              <span className="text-white/80 font-semibold">IMERSÃO MULTICOMMERCE</span> · Carlos Arantes · 30 de Outubro
            </p>
            <p>Evento online · Ingresso R$ {PRECO}. Sujeito a alterações.</p>
          </div>
        </footer>

      </m.div>
    </>
  );
};

export default Index;
