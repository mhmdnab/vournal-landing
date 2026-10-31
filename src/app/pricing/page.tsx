import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { UpgradeCheckout } from "@/components/UpgradeCheckout";
import { PADDLE_PORTAL_URL } from "@/lib/paddle";

export const metadata: Metadata = {
  title: "Pricing — vournal",
  description: "vournal is free to start. Plus gives you longer recordings and more entries.",
};

/**
 * /pricing — the two tiers and the web checkout for Plus. The limits mirror the
 * backend's app/quota.py defaults; keep them in step if those change.
 */

const PLANS: { name: string; price: string; features: string[] }[] = [
  {
    name: "Free",
    price: "$0",
    features: ["40 entries a month", "Recordings up to 90 seconds", "Journal, to-dos and calendar"],
  },
  {
    name: "Plus",
    price: "$4.99 / month",
    features: ["150 entries a month", "Recordings up to 5 minutes", "Everything in Free"],
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="font-serif text-ink text-3xl tracking-tight">Pricing</h1>
        <p className="text-secondary mt-4 text-[15px] leading-relaxed">
          Start free. Upgrade when you want to say more.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <section key={plan.name} className="border-hairline rounded-[16px] border p-6">
              <h2 className="font-serif text-ink text-xl">{plan.name}</h2>
              <p className="text-ink mt-1 text-sm">{plan.price}</p>
              <ul className="text-secondary mt-4 space-y-1.5 text-[15px]">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-sm">
          <UpgradeCheckout />
          {PADDLE_PORTAL_URL && (
            <p className="text-secondary mt-6 text-sm leading-relaxed">
              Already subscribed? Don’t buy again. Update your card, get invoices or cancel in{" "}
              <a href={PADDLE_PORTAL_URL} className="underline">
                the customer portal
              </a>
              .
            </p>
          )}
          <p className="text-muted mt-6 text-xs leading-relaxed">
            Billed monthly by Paddle, our reseller and merchant of record. Plus renews
            automatically each month until you cancel; it stays active until the end of the
            period you paid for. Use the email you sign in to vournal with. See the{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>
            ,{" "}
            <Link href="/refunds" className="underline">
              Refund Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
