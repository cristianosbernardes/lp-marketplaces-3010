// O checkout da Hotmart envia InitiateCheckout e Purchase para o pixel pelo servidor
// (super pixel / API de Conversões). Para essas conversões serem atribuídas ao anúncio,
// o link precisa levar o fbclid e as UTMs que chegaram na LP.

const FBC_COOKIE = /(?:^|;\s*)_fbc=fb\.\d+\.\d+\.([^;]+)/;

/** Anexa ao link do checkout os parâmetros de campanha da visita atual. */
export const withCampaignParams = (checkoutUrl: string, search: string, cookie: string): string => {
  const url = new URL(checkoutUrl);
  new URLSearchParams(search).forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });

  // Visitante que voltou sem fbclid na URL ainda tem o clique guardado no cookie _fbc.
  if (!url.searchParams.has("fbclid")) {
    const fbclid = cookie.match(FBC_COOKIE)?.[1];
    if (fbclid) url.searchParams.set("fbclid", fbclid);
  }
  return url.toString();
};

export const track = (event: string, params?: Record<string, unknown>) => {
  if (typeof window.fbq === "function") window.fbq("track", event, params);
};
