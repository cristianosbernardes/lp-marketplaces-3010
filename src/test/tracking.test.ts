import { describe, it, expect, vi } from "vitest";
import { trackOncePerSession, withCampaignParams } from "@/lib/tracking";

const CHECKOUT = "https://pay.hotmart.com/L107403868Y";

describe("withCampaignParams", () => {
  it("repassa fbclid e UTMs da LP para o checkout", () => {
    const url = new URL(withCampaignParams(CHECKOUT, "?fbclid=ABC&utm_source=fb&utm_campaign=imersao", ""));
    expect(url.origin + url.pathname).toBe(CHECKOUT);
    expect(url.searchParams.get("fbclid")).toBe("ABC");
    expect(url.searchParams.get("utm_source")).toBe("fb");
    expect(url.searchParams.get("utm_campaign")).toBe("imersao");
  });

  it("recupera o fbclid do cookie _fbc quando a URL não traz", () => {
    const url = new URL(withCampaignParams(CHECKOUT, "", "_fbp=fb.1.1.2; _fbc=fb.1.1790000000000.IwAR_xyz"));
    expect(url.searchParams.get("fbclid")).toBe("IwAR_xyz");
  });

  it("não inventa parâmetro em visita sem campanha", () => {
    expect(withCampaignParams(CHECKOUT, "", "")).toBe(CHECKOUT);
  });
});

describe("trackOncePerSession", () => {
  const memoria = () => {
    const dados = new Map<string, string>();
    return { getItem: (k: string) => dados.get(k) ?? null, setItem: (k: string, v: string) => void dados.set(k, v) };
  };

  it("conta o AddToCart uma vez só, mesmo com cliques repetidos", () => {
    const fbq = vi.fn();
    window.fbq = fbq;
    const storage = memoria();
    trackOncePerSession("AddToCart", { value: 97 }, storage);
    trackOncePerSession("AddToCart", { value: 97 }, storage);
    expect(fbq).toHaveBeenCalledTimes(1);
    expect(fbq).toHaveBeenCalledWith("track", "AddToCart", { value: 97 });
  });

  it("ainda dispara quando o webview bloqueia o storage", () => {
    const fbq = vi.fn();
    window.fbq = fbq;
    const bloqueado = { getItem: () => { throw new Error("SecurityError"); }, setItem: () => {} };
    trackOncePerSession("AddToCart", undefined, bloqueado);
    expect(fbq).toHaveBeenCalledTimes(1);
  });
});
