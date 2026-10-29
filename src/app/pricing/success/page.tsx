import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to Plus — vournal",
  robots: { index: false },
};

/** Where Paddle's checkout lands after a successful payment. */
export default function PricingSuccessPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="font-serif text-ink text-3xl">You’re on Plus</h1>
      <p className="text-secondary mt-4 text-sm leading-relaxed">
        Thanks for upgrading. Paddle has emailed your receipt. Plus unlocks in the app the
        next time it refreshes your account.
      </p>
      <Link
        href="/"
        className="text-secondary hover:text-ink mt-8 inline-block text-sm underline underline-offset-4 transition-colors"
      >
        Back to vournal
      </Link>
    </main>
  );
}
