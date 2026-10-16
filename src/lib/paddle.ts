/**
 * src/lib/paddle.ts
 *
 * Paddle Billing Integration for Austrian/European MedAT students.
 * Initializes Paddle.js in German locale with overlay checkout,
 * supporting Apple Pay, Google Pay, Cards, and Eurozone payment methods.
 */

import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { supabase } from "./supabase";

let paddlePromise: Promise<Paddle | undefined> | null = null;
let paddleInstance: Paddle | null = null;

const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};

export const PADDLE_CONFIG = {
  clientToken: env.VITE_PADDLE_CLIENT_TOKEN || "test_ee617a8b37adb9207160fa9f50e",
  environment: (env.VITE_PADDLE_ENV || "sandbox") as "sandbox" | "production",
  monthlyPriceId: env.VITE_PADDLE_PRICE_ID_MONTHLY || "pri_01m4sv454dth7gc5fm52tvhht5",
  productId: env.VITE_PADDLE_PRODUCT_ID || "pro_01m4strby6nzrjc21zeh8jshwp",
  oncePriceId: env.VITE_PADDLE_PRICE_ID_ONCE || "",
};

/**
 * Validates Paddle configuration at runtime without exposing sensitive tokens.
 */
export function validatePaddleConfig(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const isSandbox = PADDLE_CONFIG.environment === "sandbox";

  if (!PADDLE_CONFIG.clientToken) {
    errors.push("Paddle Client-Token ist nicht konfiguriert.");
  } else if (isSandbox && !PADDLE_CONFIG.clientToken.startsWith("test_")) {
    errors.push("Umgebung ist auf 'sandbox' gesetzt, aber der Client-Token beginnt nicht mit 'test_'.");
  } else if (!isSandbox && !PADDLE_CONFIG.clientToken.startsWith("live_")) {
    errors.push("Umgebung ist auf 'production' gesetzt, aber der Client-Token beginnt nicht mit 'live_'.");
  }

  if (PADDLE_CONFIG.monthlyPriceId && !PADDLE_CONFIG.monthlyPriceId.startsWith("pri_")) {
    errors.push("Die konfigurierte Price-ID beginnt nicht mit 'pri_'.");
  }

  if (errors.length > 0) {
    console.warn("[Paddle Config Validation]", errors.join(" | "));
  } else {
    console.info(`[Paddle Config] Initialisiert im ${PADDLE_CONFIG.environment}-Modus.`);
  }

  return { valid: errors.length === 0, errors };
}

// Automatically validate config once on module load
validatePaddleConfig();

// Active checkout event listener state
let activeCallbacks: {
  onSuccess?: (data?: any) => void;
  onClose?: () => void;
} | null = null;

/**
 * Initializes or returns the singleton Paddle instance.
 */
export async function getPaddle(): Promise<Paddle | null> {
  if (paddleInstance) return paddleInstance;
  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      environment: PADDLE_CONFIG.environment,
      token: PADDLE_CONFIG.clientToken,
      eventCallback: (event) => {
        if (event.name === "checkout.completed") {
          console.info("[Paddle] Checkout completed successfully!", {
            transactionId: (event.data as any)?.transaction_id || (event.data as any)?.id,
          });
          if (activeCallbacks?.onSuccess) {
            try {
              activeCallbacks.onSuccess(event.data);
            } catch (cbErr) {
              console.error("[Paddle] Error in checkout.completed callback:", cbErr);
            }
          }
        } else if (event.name === "checkout.closed") {
          console.info("[Paddle] Checkout overlay closed.");
          if (activeCallbacks?.onClose) {
            try {
              activeCallbacks.onClose();
            } catch (closeErr) {
              console.error("[Paddle] Error in checkout.closed callback:", closeErr);
            }
          }
        }
      },
    });
  }

  try {
    const instance = await paddlePromise;
    if (instance) {
      paddleInstance = instance;
      return instance;
    }
    return null;
  } catch (error) {
    console.error("[Paddle] Initialization error:", error);
    paddlePromise = null;
    return null;
  }
}

export interface CheckoutOptions {
  priceId: string;
  userId?: string;
  userEmail?: string;
  customData?: Record<string, string>;
  onSuccess?: (data?: any) => void;
  onClose?: () => void;
}

/**
 * Opens the modern hosted Paddle checkout overlay in German (Austria/Germany).
 * Securely associates the authenticated Supabase user_id in custom_data.
 */
export async function openCheckout({
  priceId,
  userId,
  userEmail,
  customData = {},
  onSuccess,
  onClose,
}: CheckoutOptions): Promise<boolean> {
  if (!priceId) {
    console.warn("[Paddle] No priceId provided for checkout.");
    return false;
  }

  // Resolve authenticated Supabase user ID if not explicitly provided
  let resolvedUserId = userId;
  let resolvedEmail = userEmail;

  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      if (!resolvedUserId) resolvedUserId = session.user.id;
      if (!resolvedEmail) resolvedEmail = session.user.email || "";
    }
  } catch {
    // Session read error fallback
  }

  // Register active callbacks
  activeCallbacks = { onSuccess, onClose };

  const paddle = await getPaddle();
  if (!paddle) {
    console.error("[Paddle] Checkout could not be opened: Paddle is not initialized.");
    return false;
  }

  // Prepare customData with guaranteed user_id association
  const finalCustomData: Record<string, string> = {
    ...customData,
    environment: PADDLE_CONFIG.environment,
    product_id: PADDLE_CONFIG.productId,
    price_id: priceId,
  };

  if (resolvedUserId) {
    finalCustomData.user_id = resolvedUserId;
    finalCustomData.userId = resolvedUserId;
  }

  if (resolvedEmail) {
    finalCustomData.email = resolvedEmail;
  }

  const successParam = resolvedUserId ? `upgraded=true&user_id=${encodeURIComponent(resolvedUserId)}` : "upgraded=true";
  const successUrl = `${window.location.origin}/#/dashboard?${successParam}`;

  try {
    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      customer: resolvedEmail ? { email: resolvedEmail } : undefined,
      customData: finalCustomData,
      settings: {
        displayMode: "overlay",
        theme: "light",
        locale: "de", // Austrian / German localization
        variant: "one-page",
        successUrl,
      },
    });
    return true;
  } catch (err) {
    console.error("[Paddle] Failed to open checkout:", err);
    return false;
  }
}
