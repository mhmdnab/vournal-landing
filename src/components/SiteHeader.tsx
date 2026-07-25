import Link from "next/link";
import { DownloadButton } from "./DownloadButton";

/** Minimal marketing top bar — wordmark + the one CTA. No app nav. */
export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link href="/" className="font-serif text-ink text-xl tracking-tight">
        vournal
      </Link>
      <DownloadButton variant="outline" className="text-xs" />
    </header>
  );
}
