import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// A lista de espera e a LP alternam na raiz (redirect no vercel.json). Cada uma precisa do
// próprio título e preview de compartilhamento, que robô de WhatsApp/Google lê sem rodar JS.
// O build gera lista-de-espera.html a partir do index.html trocando só esses metadados.
const ESPERA = {
  url: "https://imersao.carlosarantes.com.br/lista-de-espera",
  title: "Lista de espera — Imersão Multicommerce | Carlos Arantes",
  description:
    "Entre na lista de espera e saiba antes de todo mundo a data da próxima Imersão Multicommerce: do zero a R$ 800 mil por mês nos marketplaces.",
};

const paginaEspera = (): Plugin => ({
  name: "pagina-espera",
  apply: "build",
  enforce: "post",
  generateBundle(_, bundle) {
    const index = bundle["index.html"];
    if (index?.type !== "asset") return;
    const meta = (html: string, attr: string, value: string) =>
      html.replace(new RegExp(`(<meta ${attr} content=")[^"]*`), `$1${value}`);
    let html = String(index.source)
      .replace(/<title>[^<]*<\/title>/, `<title>${ESPERA.title}</title>`)
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${ESPERA.url}`)
      // o schema do evento anuncia ingresso à venda; na lista de espera não há
      .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, "");
    for (const attr of ['name="description"', 'property="og:description"', 'name="twitter:description"'])
      html = meta(html, attr, ESPERA.description);
    for (const attr of ['property="og:title"', 'name="twitter:title"']) html = meta(html, attr, ESPERA.title);
    html = meta(html, 'property="og:url"', ESPERA.url);
    this.emitFile({ type: "asset", fileName: "lista-de-espera.html", source: html });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5555,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), paginaEspera(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
