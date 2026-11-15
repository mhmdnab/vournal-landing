import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund policy — vournal",
  description: "How cancelling and refunds work for vournal Plus, on the web and in the App Store.",
};

/**
 * The refund policy for vournal Plus. Web purchases are sold by Paddle (merchant of record),
 * App Store purchases by Apple; this page says how each works, in line with the Terms.
 */
export default function RefundsPage() {
  const p = "text-secondary mt-3 text-[15px] leading-relaxed";
  const h = "font-serif text-ink mt-10 text-xl";
  return (
    <LegalLayout title="Refund policy" updated="15 November 2026">
      <p className={p}>
        This policy covers vournal Plus, the monthly subscription. vournal itself is free. It applies alongside our{" "}
        <Link href="/terms" className="underline underline-offset-4">
          Terms of Service
        </Link>
        .
      </p>

      <h2 className={h}>The free month</h2>
      <p className={p}>
        New subscribers get their first month of Plus free. Nothing is charged during it. Cancel before it ends and you won&apos;t be charged at all.
      </p>

      <h2 className={h}>Bought on our website (life.vournal.app)</h2>
      <p className={p}>
        Web subscriptions are sold by Paddle (paddle.com), our reseller and merchant of record. If you&apos;re not happy, you can ask for a full refund of
        any payment within <strong className="text-ink font-medium">14 days</strong>{" "}
        of that payment, for the first payment or a renewal. Ask through
        the link in Paddle&apos;s receipt email or at{" "}
        <a href="https://paddle.net" className="underline underline-offset-4">
          paddle.net
        </a>
        , or write to us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
          {CONTACT_EMAIL}
        </a>{" "}
        and we&apos;ll arrange it with Paddle. The refund goes back to the payment method you used.
      </p>
      <p className={p}>
        After 14 days a payment isn&apos;t refundable, except where the law where you live says otherwise. You can always cancel: Plus stays on until the
        end of the period you&apos;ve paid for and doesn&apos;t renew. Refunds are handled under Paddle&apos;s buyer terms and applicable law.
      </p>

      <h2 className={h}>Bought in the iPhone app</h2>
      <p className={p}>
        Subscriptions bought in the app are sold by Apple through In-App Purchase, and Apple handles refunds under its own terms. Request one at{" "}
        <a href="https://reportaproblem.apple.com" className="underline underline-offset-4">
          reportaproblem.apple.com
        </a>
        . Cancel any time in your Apple Account settings.
      </p>

      <h2 className={h}>Questions</h2>
      <p className={p}>
        vournal is operated by Mohamad El Naboulsi, Tripoli, Lebanon. Write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
          {CONTACT_EMAIL}
        </a>{" "}
        and we&apos;ll reply as soon as we can.
      </p>
    </LegalLayout>
  );
}
