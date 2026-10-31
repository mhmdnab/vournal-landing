import Link from "next/link";
import { DownloadButton } from "./DownloadButton";

/** Minimal marketing top bar — wordmark, pricing + the one CTA. No app nav. */
export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link href="/" className="font-serif text-ink text-xl tracking-tight">
        vournal
      </Link>
      <div className="flex items-center gap-5">
        <Link
          href="/pricing"
          className="text-secondary hover:text-ink hidden text-sm transition-colors sm:inline"
        >
          Pricing
        </Link>
        <DownloadButton variant="outline" className="text-xs" />
      </div>
    </header>
  );
}
