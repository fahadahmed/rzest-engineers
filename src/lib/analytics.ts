declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 custom event. Safe to call even if gtag hasn't loaded
 * (e.g. blocked by an ad blocker) — silently no-ops instead of throwing.
 */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
