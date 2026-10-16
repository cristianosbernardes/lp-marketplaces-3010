// O checkout da Hotmart envia InitiateCheckout e Purchase para o pixel pelo servidor
// (super pixel / API de Conversões). Para essas conversões serem atribuídas ao anúncio,
// o link precisa levar o fbclid e as UTMs que chegaram na LP.

const FBC_COOKIE = /(?:^|;\s*)_fbc=fb\.\d+\.\d+\.([^;]+)/;

/** Parâmetros de campanha da visita atual: a query inteira mais o fbclid guardado no cookie _fbc. */
export const campaignParams = (search: string, cookie: string): URLSearchParams => {
  const params = new URLSearchParams(search);
  // Visitante que voltou sem fbclid na URL ainda tem o clique guardado no cookie _fbc.
  if (!params.has("fbclid")) {
    const fbclid = cookie.match(FBC_COOKIE)?.[1];
    if (fbclid) params.set("fbclid", fbclid);
  }
  return params;
};

/** Anexa ao link do checkout os parâmetros de campanha da visita atual. */
export const withCampaignParams = (checkoutUrl: string, search: string, cookie: string): string => {
  const url = new URL(checkoutUrl);
  campaignParams(search, cookie).forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  return url.toString();
};

export const track = (event: string, params?: Record<string, unknown>) => {
  if (typeof window.fbq === "function") window.fbq("track", event, params);
};

/** Dispara o evento só na primeira vez da sessão; cliques repetidos no CTA contavam como carrinhos novos. */
export const trackOncePerSession = (
  event: string,
  params?: Record<string, unknown>,
  storage: Pick<Storage, "getItem" | "setItem"> = window.sessionStorage,
) => {
  const key = `tracked:${event}`;
  try {
    if (storage.getItem(key)) return;
    storage.setItem(key, "1");
  } catch {
    // Webview com storage bloqueado: melhor contar duas vezes do que não contar.
  }
  track(event, params);
};
