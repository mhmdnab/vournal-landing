import Link from "next/link";
import { DownloadButton } from "./DownloadButton";

/** Minimal marketing top bar — wordmark, vournal OS, and the download CTA. */
export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link href="/" className="font-serif text-ink text-xl tracking-tight">
        vournal
      </Link>
      <div className="flex items-center gap-3 sm:gap-5">
        <Link href="/os" className="text-secondary hover:text-ink text-xs whitespace-nowrap transition-colors sm:text-sm">
          vournal OS
        </Link>
        <DownloadButton variant="outline" className="text-xs" compact />
      </div>
    </header>
  );
}
