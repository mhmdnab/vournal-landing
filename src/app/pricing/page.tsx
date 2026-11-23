import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { APP_STORE_URL, CONTACT_EMAIL, WEB_APP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — vournal",
  description: "vournal is free. vournal Plus is $9.99 a month, with the first month free.",
};

const FREE = ["40 entries a month", "Recordings up to 1.5 minutes", "Journal, to-dos, calendar and insights"];
const PLUS = [
  "150 entries a month",
  "Recordings up to 5 minutes",
  "AI that acts on what you say: “paid $24 for lunch” becomes an expense",
  "vournal life on the web: tasks, projects, calendar, money and habits",
  "The AI assistant in vournal life",
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="text-accent mt-0.5 size-4 shrink-0">
      <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="font-serif text-ink text-4xl tracking-tight">Pricing</h1>
        <p className="text-secondary mt-3 max-w-xl text-[15px] leading-relaxed">
          vournal is free to use. vournal Plus adds more room to talk, AI that acts on what you say, and vournal life on the web.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <section className="border-hairline rounded-2xl border p-7">
            <h2 className="font-serif text-ink text-2xl">Free</h2>
            <p className="text-ink mt-3 text-3xl tracking-tight">$0</p>
            <p className="text-muted mt-1 text-sm">forever</p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {FREE.map((f) => (
                <li key={f} className="text-secondary flex gap-2.5">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-accent rounded-2xl border-2 p-7">
            <h2 className="font-serif text-ink text-2xl">vournal Plus</h2>
            <p className="text-ink mt-3 text-3xl tracking-tight">
              $9.99 <span className="text-muted text-base">a month</span>
            </p>
            <p className="text-accent mt-1 text-sm font-medium">First month free for new subscribers</p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {PLUS.map((f) => (
                <li key={f} className="text-secondary flex gap-2.5">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-14 max-w-2xl space-y-6 text-[15px] leading-relaxed">
          {/* web checkout waits on Paddle's verification (owner 2026-11-23): restore the present-tense web wording once it's open */}
          <h2 className="font-serif text-ink text-2xl">How to subscribe</h2>
          <div>
            <h3 className="text-ink font-medium">On iPhone</h3>
            <p className="text-secondary mt-1">
              In the vournal app (
              <a href={APP_STORE_URL} className="underline underline-offset-4">
                App Store
              </a>
              ), through Apple In-App Purchase. Apple charges your Apple Account and shows the price in your local currency. A subscription from the app
              also unlocks vournal life on the web, with the same account.
            </p>
          </div>
          <div>
            <h3 className="text-ink font-medium">On the web</h3>
            <p className="text-secondary mt-1">
              At{" "}
              <a href={WEB_APP_URL} className="underline underline-offset-4">
                life.vournal.app
              </a>
              , with the same account. Subscribing on the web opens soon: web purchases will be sold by Paddle (paddle.com), our reseller and merchant of
              record, which handles payment, tax and invoices. Until then, subscribe in the iPhone app and Plus works on life.vournal.app too.
            </p>
          </div>
          <div>
            <h3 className="text-ink font-medium">The free month</h3>
            <p className="text-secondary mt-1">
              New subscribers get their first month free. In the app, you confirm the subscription with Apple; nothing is charged during the free month,
              and after it Plus is $9.99 a month (Apple shows it in your local currency) until you cancel. Cancel before the free month ends and you
              won&apos;t be charged.
            </p>
          </div>
          <div>
            <h3 className="text-ink font-medium">Cancelling and refunds</h3>
            <p className="text-secondary mt-1">
              Cancel any time in your iPhone&apos;s Settings, under your Apple Account&apos;s Subscriptions. Plus stays on until the end of the period
              you&apos;ve paid for. Once web subscriptions open, they&apos;re cancelled from Paddle&apos;s customer portal, linked in every receipt. See
              the{" "}
              <Link href="/refunds" className="underline underline-offset-4">
                refund policy
              </Link>
              .
            </p>
          </div>
          <p className="text-muted text-sm">
            Prices in US dollars; taxes may apply depending on where you live. Questions:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            . By subscribing you agree to the{" "}
            <Link href="/terms" className="underline underline-offset-4">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
