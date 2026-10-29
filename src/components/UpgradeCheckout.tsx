"use client";

/**
 * The Plus upgrade: the account email + a button that opens Paddle's overlay
 * checkout. The email is passed both as the checkout's customer email and in
 * `customData`, so the backend webhook (next step) can match the payment to the
 * vournal account even if the buyer pays with a different billing address.
 */

import { useEffect, useState } from "react";
import { Field } from "@/components/Field";
import { PADDLE_CONFIGURED, PADDLE_ENV, PLUS_PRICE_ID, getPaddle } from "@/lib/paddle";

const ERROR_COLOR = "#b5553c";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function UpgradeCheckout() {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Localized price (currency + tax mode) straight from Paddle, so the page can't
  // drift from what the checkout will charge.
  useEffect(() => {
    let cancelled = false;
    getPaddle()
      .then((paddle) =>
        paddle?.PricePreview({ items: [{ priceId: PLUS_PRICE_ID, quantity: 1 }] }),
      )
      .then((preview) => {
        const line = preview?.data.details.lineItems[0];
        if (!cancelled && line) setPrice(line.formattedTotals.total);
      })
      .catch(() => {
        // Non-fatal: the button still works; the static price stays.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function upgrade(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    const address = email.trim().toLowerCase();
    if (!EMAIL_RE.test(address)) {
      setError("Enter the email you use to sign in to vournal.");
      return;
    }
    setError(null);
    setBusy(true);
    try {
      const paddle = await getPaddle();
      if (!paddle) throw new Error("Paddle did not load");
      paddle.Checkout.open({
        items: [{ priceId: PLUS_PRICE_ID, quantity: 1 }],
        customer: { email: address },
        customData: { vournalEmail: address },
        settings: {
          displayMode: "overlay",
          theme: "light",
          successUrl: `${window.location.origin}/pricing/success`,
        },
      });
    } catch {
      setError("Couldn’t open the checkout. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  if (!PADDLE_CONFIGURED) {
    return (
      <p className="text-muted text-sm">
        Checkout isn’t configured. Set NEXT_PUBLIC_PADDLE_CLIENT_TOKEN and
        NEXT_PUBLIC_PADDLE_PRICE_ID.
      </p>
    );
  }

  return (
    <form onSubmit={upgrade} className="space-y-4">
      <Field
        label="Your vournal email"
        type="email"
        value={email}
        onChange={setEmail}
        autoComplete="email"
      />
      {error && (
        <p className="text-sm" style={{ color: ERROR_COLOR }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={busy || !email.trim()}
        className="bg-accent text-paper w-full rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-[#527d5d] disabled:opacity-50"
      >
        {busy ? "Opening checkout…" : `Upgrade to Plus${price ? ` · ${price}/month` : ""}`}
      </button>
      {PADDLE_ENV === "sandbox" && (
        <p className="text-muted text-xs leading-relaxed">
          Sandbox mode, no real charges. Pay with card 4242 4242 4242 4242, any future
          expiry, CVC 100.
        </p>
      )}
    </form>
  );
}
