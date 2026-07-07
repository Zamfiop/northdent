// Încărcarea scripturilor de tracking, condiționată STRICT de consimțământ.
// Rulează în browser.
//
// Reguli GDPR (obligatorii):
//  - Google Analytics se încarcă DOAR după consimțământ pentru "analytics".
//  - Meta Pixel și TikTok Pixel se încarcă DOAR după consimțământ pentru "marketing".
//  - Nu setăm cookie-uri de tracking înainte de consimțământ.
//  - Nu trimitem date medicale sensibile. Folosim doar evenimente generale.

import { getConsent, CONSENT_EVENT, type ConsentState } from "@/lib/consent";

// ID-urile vin din environment variables (placeholder-uri).
const GA_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;
const META_PIXEL_ID = import.meta.env.PUBLIC_META_PIXEL_ID as string | undefined;
const TIKTOK_PIXEL_ID = import.meta.env.PUBLIC_TIKTOK_PIXEL_ID as
  | string
  | undefined;

// Evenimente generale permise. NU includem nume de servicii ca date medicale.
export type TrackingEvent =
  | "whatsapp_click"
  | "phone_click"
  | "maps_click"
  | "contact_email_click"
  | "service_page_view";

interface LoadedFlags {
  ga: boolean;
  meta: boolean;
  tiktok: boolean;
}

const loaded: LoadedFlags = { ga: false, meta: false, tiktok: false };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] };
    ttq?: Record<string, unknown> & { track?: (...a: unknown[]) => void };
  }
}

function injectScript(src: string, async = true): void {
  const el = document.createElement("script");
  el.src = src;
  el.async = async;
  document.head.appendChild(el);
}

function loadGa(): void {
  if (loaded.ga || !GA_ID) return;
  loaded.ga = true;
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  // anonymize_ip pentru un plus de confidențialitate.
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

function loadMetaPixel(): void {
  if (loaded.meta || !META_PIXEL_ID) return;
  loaded.meta = true;
  /* eslint-disable */
  (function (f: any, b, e, v) {
    if (f.fbq) return;
    const n: any = (f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  injectScript("https://connect.facebook.net/en_US/fbevents.js");
  window.fbq!("init", META_PIXEL_ID);
  window.fbq!("track", "PageView");
}

function loadTikTokPixel(): void {
  if (loaded.tiktok || !TIKTOK_PIXEL_ID) return;
  loaded.tiktok = true;
  /* eslint-disable */
  (function (w: any, d, t) {
    w.TiktokAnalyticsObject = t;
    const ttq: any = (w[t] = w[t] || []);
    ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
    ];
    ttq.setAndDefer = function (obj: any, m: string) {
      obj[m] = function () {
        obj.push([m].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (let i = 0; i < ttq.methods.length; i++)
      ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.load = function (id: string) {
      const url = "https://analytics.tiktok.com/i18n/pixel/events.js";
      ttq._i = ttq._i || {};
      ttq._i[id] = [];
      ttq._i[id]._u = url;
      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();
      const script = d.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = url + "?sdkid=" + id + "&lib=ttq";
      const first = d.getElementsByTagName("script")[0];
      first.parentNode!.insertBefore(script, first);
    };
    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  })(window, document, "ttq");
  /* eslint-enable */
}

/** Aplică starea de consimțământ: încarcă ce e permis. */
export function applyConsent(state: ConsentState | null): void {
  if (!state) return;
  if (state.analytics) loadGa();
  if (state.marketing) {
    loadMetaPixel();
    loadTikTokPixel();
  }
  // TODO: la retragerea consimțământului, scripturile deja încărcate rămân
  // active până la refresh. Ștergerea retroactivă a cookie-urilor complexe
  // va fi implementată într-o fază ulterioară.
}

/** Trimite un eveniment general (fără date medicale sensibile). */
export function trackEvent(
  event: TrackingEvent,
  params: Record<string, string> = {},
): void {
  const consent = getConsent();
  if (!consent) return;
  // Context permis: doar valori generale, ex. { category: "service" }.
  if (consent.analytics && window.gtag) {
    // beacon: evenimentul ajunge la GA chiar dacă utilizatorul pleacă imediat (ex. WhatsApp).
    window.gtag("event", event, { ...params, transport_type: "beacon" });
  }
  if (consent.marketing && window.fbq) {
    window.fbq("trackCustom", event, params);
  }
  if (consent.marketing && window.ttq?.track) {
    window.ttq.track(event, params);
  }
}

/** Pornește tracking-ul: aplică consimțământul curent și ascultă schimbările. */
export function initTracking(): void {
  applyConsent(getConsent());
  window.addEventListener(CONSENT_EVENT, (e) => {
    applyConsent((e as CustomEvent<ConsentState>).detail);
  });

  // Delegare de evenimente pentru CTA-uri. Elementele marcate cu data-track
  // trimit evenimentul general corespunzător.
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-track]");
    if (!target) return;
    const event = target.dataset.track as TrackingEvent | undefined;
    if (!event) return;
    const category = target.dataset.trackCategory;
    trackEvent(event, category ? { category } : {});
  });
}
