/**
 * Paddle Billing (web checkout) config. Everything here ships to the browser, so
 * it's only the PUBLIC values: the environment, a client-side token (`test_…` in
 * sandbox, `live_…` in production — public by design), and the Plus price id.
 * The server-side API key never belongs here.
 */

import { initializePaddle, type Environments, type Paddle } from "@paddle/paddle-js";

/** Must be set explicitly: an unset value disables checkout instead of silently
 *  falling back to the sandbox (whose purchases must never reach production). */
export const PADDLE_ENV: Environments | null =
  process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
    ? "production"
    : process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox"
      ? "sandbox"
      : null;

export const PADDLE_CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? "";

/** The single paid plan (Plus, monthly). */
export const PLUS_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID ?? "";

/** True when both public values are set, so the checkout can open at all. */
export const PADDLE_CONFIGURED = Boolean(PADDLE_ENV && PADDLE_CLIENT_TOKEN && PLUS_PRICE_ID);

let paddlePromise: Promise<Paddle | undefined> | null = null;

/** Load + initialize Paddle.js once per page load and share the instance. */
export function getPaddle(): Promise<Paddle | undefined> {
  if (!PADDLE_CONFIGURED) return Promise.resolve(undefined);
  paddlePromise ??= initializePaddle({
    environment: PADDLE_ENV ?? "sandbox",
    token: PADDLE_CLIENT_TOKEN,
  });
  return paddlePromise;
}
