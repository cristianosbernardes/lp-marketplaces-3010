import { useState } from "react";
import { m } from "framer-motion";
import { ArrowRight, CheckCircle2, Instagram, Loader2, Zap } from "lucide-react";
import carlosHeroBg from "@/assets/carlos-hero-bg.webp";
import { campaignParams, track } from "@/lib/tracking";

/* ═══════════════════════════════════════════
   LISTA DE ESPERA — próxima Imersão Multicommerce
   A raiz (/) redireciona para cá pelo vercel.json enquanto não há turma aberta.
   ═══════════════════════════════════════════ */

// Web App do Apps Script da planilha "Lista de espera" (aba "Feita 16/10").
const LISTA_URL = "https://script.google.com/macros/s/AKfycbwn7F_g4uHpUYY_moJOLd6Ak74V2_iW4Np6a-jiRKXqGycVrhQ2Nc6I7rkgcdb053tlVw/exec";

const CAMPANHA = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const soDigitos = (v: string) => v.replace(/\D/g, "");

type Estado = "form" | "enviando" | "ok" | "erro";

const inputClass =
  "w-full bg-white/5 border border-white/10 focus:border-primary/60 rounded-lg px-4 py-3.5 font-body text-white placeholder:text-white/40 outline-none transition-colors";

const ListaDeEspera = () => {
  const [estado, setEstado] = useState<Estado>("form");
  const [erroWhats, setErroWhats] = useState(false);

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const whatsapp = soDigitos(String(form.get("whatsapp")));
    if (whatsapp.length < 10 || whatsapp.length > 13) {
      setErroWhats(true);
      return;
    }
    setErroWhats(false);
    setEstado("enviando");

    const dados = new URLSearchParams({
      nome: String(form.get("nome")).trim(),
      email: String(form.get("email")).trim().toLowerCase(),
      whatsapp,
      website: String(form.get("website") ?? ""),
    });
    campaignParams(window.location.search, document.cookie).forEach((value, key) => {
      if (CAMPANHA.includes(key)) dados.set(key, value);
    });

    // no-cors: o Apps Script não devolve cabeçalho CORS. A resposta vem opaca, então
    // só dá para saber que a requisição saiu; erro de rede cai no catch.
    try {
      await fetch(LISTA_URL, { method: "POST", mode: "no-cors", body: dados });
      track("Lead", { content_name: "Imersão Multicommerce — lista de espera" });
      setEstado("ok");
    } catch {
      setEstado("erro");
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-background flex flex-col">
      <img
        src={carlosHeroBg}
        alt=""
        aria-hidden="true"
        {...{ fetchpriority: "high" }}
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ top: "-30%", right: "-10%", width: "60%", height: "120%", background: "radial-gradient(circle at 70% 30%, rgba(34,197,94,0.14) 0%, transparent 55%)" }} />
        <div className="absolute" style={{ top: 0, left: "32%", width: 1.5, height: "80%", background: "linear-gradient(to bottom, rgba(34,197,94,0.35) 0%, transparent 100%)", transform: "rotate(12deg)", transformOrigin: "top center" }} />
      </div>

      <header className="relative z-10 max-w-7xl w-full mx-auto px-6 h-16 sm:h-[72px] flex items-center">
        <span className="font-display text-sm sm:text-base tracking-tight">
          <span className="text-white">IMERSÃO</span>
          <span className="text-primary ml-1">MULTICOMMERCE</span>
        </span>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-10 sm:py-16">
        <m.div initial="hidden" animate="visible" variants={stagger} className="w-full max-w-xl flex flex-col items-center text-center">
          <m.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[13px] font-body text-white/70">
              <Zap className="w-4 h-4 text-primary" />
              A EDIÇÃO DE 16/10 <span className="text-primary font-bold">ENCERROU</span>
            </span>
          </m.div>

          <m.h1 variants={fadeUp} className="font-display text-[clamp(1.6rem,6.5vw,2.75rem)] mt-8 leading-[1.15] uppercase glow-text">
            Entre na <span className="text-primary">lista de espera</span> da próxima imersão
          </m.h1>

          <m.p variants={fadeUp} className="mt-5 text-white/70 font-body font-medium text-base sm:text-lg max-w-lg leading-[1.5]">
            O caso real de quem saiu do zero e passou dos <span className="text-white font-semibold">R$&nbsp;800 mil por mês</span> nos marketplaces. Quem está na lista fica sabendo da nova data antes de todo mundo.
          </m.p>

          <m.div variants={fadeUp} className="mt-10 w-full glass border border-white/10 rounded-2xl p-6 sm:p-8 text-left">
            {estado === "ok" ? (
              <div className="flex flex-col items-center text-center gap-3 py-4" role="status">
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <p className="font-display text-xl uppercase">Você está na lista!</p>
                <p className="font-body text-white/70">Assim que a nova turma abrir, você recebe o aviso no WhatsApp e no e-mail.</p>
              </div>
            ) : (
              <form onSubmit={enviar} className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-body text-sm font-semibold text-white/80">Nome</span>
                  <input name="nome" required autoComplete="name" maxLength={120} placeholder="Seu nome" className={inputClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-body text-sm font-semibold text-white/80">E-mail</span>
                  <input name="email" type="email" required autoComplete="email" maxLength={160} placeholder="voce@email.com" className={inputClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-body text-sm font-semibold text-white/80">WhatsApp</span>
                  <input
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    required
                    autoComplete="tel"
                    maxLength={20}
                    placeholder="(11) 99999-9999"
                    aria-invalid={erroWhats}
                    className={inputClass}
                  />
                  {erroWhats && (
                    <span className="font-body text-sm text-red-400">Confira o número com DDD.</span>
                  )}
                </label>

                {/* Campo-isca: invisível para pessoas, robô preenche e o cadastro é descartado. */}
                <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />

                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="mt-2 inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold text-sm sm:text-base uppercase tracking-[0.1em] px-8 py-5 rounded hover:brightness-110 transition-all duration-300 glow-green-strong disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {estado === "enviando" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Quero entrar na lista
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {estado === "erro" && (
                  <p className="font-body text-sm text-red-400 text-center" role="alert">
                    Não conseguimos enviar agora. Confira sua conexão e tente de novo.
                  </p>
                )}
                <p className="font-body text-white/50 text-xs text-center">Sem spam. Só o aviso da próxima turma.</p>
              </form>
            )}
          </m.div>
        </m.div>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 font-body text-xs">
          <p>
            <span className="text-white/80 font-semibold">IMERSÃO MULTICOMMERCE</span> · Carlos Arantes
          </p>
          <a
            href="https://www.instagram.com/carlosarantesm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @carlosarantesm
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ListaDeEspera;
