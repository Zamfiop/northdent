// Gestionarea consimțământului GDPR pentru cookies / tracking.
// Rulează în browser. Preferințele se salvează în localStorage.
//
// Categorii:
//  - necessary: mereu active, nu pot fi dezactivate
//  - analytics: Google Analytics (doar după acord)
//  - marketing: Meta Pixel, TikTok Pixel (doar după acord)

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** Timestamp ISO al ultimei decizii, pentru audit */
  updatedAt: string;
  /** Versiune a politicii, pentru re-solicitare la schimbări majore */
  version: number;
}

export const CONSENT_STORAGE_KEY = "northdent_consent_v1";
export const CONSENT_VERSION = 1;

/** Eveniment global emis când se schimbă consimțământul. */
export const CONSENT_EVENT = "northdent:consentchange";

export function defaultConsent(): ConsentState {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
}

/** Citește consimțământul salvat; null dacă utilizatorul nu a decis încă. */
export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    // Dacă versiunea s-a schimbat, re-solicităm consimțământul.
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Salvează consimțământul și notifică restul aplicației. */
export function saveConsent(
  partial: Pick<ConsentState, "analytics" | "marketing">,
): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics: partial.analytics,
    marketing: partial.marketing,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  }
  return state;
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  const state = getConsent();
  if (!state) return false;
  return state[category] === true;
}

export function acceptAll(): ConsentState {
  return saveConsent({ analytics: true, marketing: true });
}

export function rejectOptional(): ConsentState {
  return saveConsent({ analytics: false, marketing: false });
}
