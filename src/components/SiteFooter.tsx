import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

/** Quiet footer — wordmark, the App-Store-required legal links, contact. */
export function SiteFooter() {
  return (
    <footer className="border-hairline mt-24 border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-ink text-lg">vournal</p>
          <p className="text-muted mt-1 text-xs">
            Talk. It turns your day into a journal, to-dos, and a calendar.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link
            href="/privacy"
            className="text-secondary hover:text-ink transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-secondary hover:text-ink transition-colors"
          >
            Terms
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-secondary hover:text-ink transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-5xl px-6 pb-10">
        <p className="text-faint text-xs">
          © {new Date().getFullYear()} vournal. iOS. Made for the way you talk.
        </p>
      </div>
    </footer>
  );
}
