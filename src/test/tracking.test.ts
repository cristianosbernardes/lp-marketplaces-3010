import { describe, it, expect } from "vitest";
import { withCampaignParams } from "@/lib/tracking";

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
