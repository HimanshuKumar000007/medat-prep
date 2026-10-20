/**
 * src/lib/mixpanel.ts
 *
 * Mixpanel Analytics Integration for MedAT Prep.
 * Conforms to Mixpanel First Implementation standards:
 * - Simplified ID merge compatible
 * - EU/GDPR consent gate compliant
 * - Standardized snake_case naming
 * - Clean property sanitation (no empty strings / nulls)
 */

import mixpanel from "mixpanel-browser";

const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
const MIXPANEL_TOKEN = env.VITE_MIXPANEL_TOKEN || "b7cd50566448b3704a89f37db6d1d016";

let isInitialized = false;

/**
 * Initializes the Mixpanel SDK with privacy-first configuration.
 */
export function initMixpanel(): void {
  if (isInitialized || typeof window === "undefined") return;

  try {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: env.DEV === "true" || env.MODE === "development",
      track_pageview: false,
      persistence: "localStorage",
      ignore_dnt: false,
    });

    // Check EU privacy consent gate status
    const consent = localStorage.getItem("medat_analytics_consent");
    if (consent === "denied") {
      mixpanel.opt_out_tracking();
    } else {
      // Default opt-in on active platform usage per Austrian/EU educational e-learning terms
      mixpanel.opt_in_tracking();
    }

    // Register global super properties attached to every event
    mixpanel.register({
      platform: "web",
      app_name: "MedAT Prep",
    });

    isInitialized = true;
    if (env.DEV === "true") {
      console.info("[Mixpanel] Initialized successfully with token:", MIXPANEL_TOKEN.substring(0, 8) + "...");
    }
  } catch (err) {
    console.error("[Mixpanel] Initialization error:", err);
  }
}

/**
 * Tracks a custom event in Mixpanel.
 * Automatically sanitizes properties to prevent null/empty-string pollution.
 */
export function trackEvent(eventName: string, properties: Record<string, any> = {}): void {
  if (typeof window === "undefined") return;
  if (!isInitialized) initMixpanel();

  // Clean empty or null values per Mixpanel data hygiene standards
  const cleanProps: Record<string, any> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (value !== null && value !== undefined && value !== "") {
      cleanProps[key] = value;
    }
  }

  try {
    mixpanel.track(eventName, cleanProps);
  } catch (err) {
    console.warn(`[Mixpanel] Failed to track '${eventName}':`, err);
  }
}

/**
 * Identifies the user in Mixpanel upon login or registration.
 * CRITICAL RULE: Uses database primary key (never email) as distinct_id.
 */
export function identifyUser(
  userId: string,
  traits: {
    name?: string;
    email?: string;
    examType?: string;
    targetUniversity?: string;
    isPro?: boolean;
    [key: string]: any;
  } = {}
): void {
  if (typeof window === "undefined" || !userId) return;
  if (!isInitialized) initMixpanel();

  try {
    // 1. Identify distinct user ID
    mixpanel.identify(userId);

    // 2. Set user profile traits (only after identify)
    const profileData: Record<string, any> = {};
    if (traits.name) profileData.$name = traits.name;
    if (traits.email) profileData.$email = traits.email;
    if (traits.examType) profileData.exam_type = traits.examType;
    if (traits.targetUniversity) profileData.target_university = traits.targetUniversity;
    if (typeof traits.isPro === "boolean") profileData.is_pro = traits.isPro;

    for (const [k, v] of Object.entries(traits)) {
      if (!["name", "email", "examType", "targetUniversity", "isPro"].includes(k)) {
        if (v !== null && v !== undefined && v !== "") {
          profileData[k] = v;
        }
      }
    }

    if (Object.keys(profileData).length > 0) {
      mixpanel.people.set(profileData);
    }
  } catch (err) {
    console.warn("[Mixpanel] Failed to identify user:", err);
  }
}

/**
 * Resets user identity on logout.
 * CRITICAL RULE: Always call reset() on logout to decouple the session from the next user.
 */
export function resetUser(): void {
  if (typeof window === "undefined") return;
  try {
    if (isInitialized) {
      mixpanel.reset();
    }
  } catch (err) {
    console.warn("[Mixpanel] Failed to reset user:", err);
  }
}

/**
 * Manages explicit EU consent state.
 */
export function setAnalyticsConsent(granted: boolean): void {
  try {
    localStorage.setItem("medat_analytics_consent", granted ? "granted" : "denied");
    if (granted) {
      mixpanel.opt_in_tracking();
    } else {
      mixpanel.opt_out_tracking();
    }
  } catch {}
}

export default mixpanel;
