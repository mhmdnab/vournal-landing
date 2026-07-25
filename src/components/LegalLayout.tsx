import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/** Shared shell for /privacy and /terms — header, a readable prose column, footer. */
export function LegalLayout({
  title,
  updated,
  draft = false,
  children,
}: {
  title: string;
  updated: string;
  draft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="font-serif text-ink text-3xl tracking-tight">{title}</h1>
        <p className="text-muted mt-2 text-xs">Last updated {updated}</p>
        {draft && (
          <p className="border-hairline text-muted mt-6 rounded-lg border border-dashed px-4 py-3 text-xs">
            Draft placeholder — final copy lands in Phase 2. Structure and URL are
            stable so the App Store submission can point here now.
          </p>
        )}
        <div className="mt-10 space-y-8">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}

/** Section heading inside a legal page. */
export function LegalH2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-ink text-xl">{children}</h2>;
}

/** Body paragraph inside a legal page. */
export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-secondary mt-3 text-[15px] leading-relaxed">{children}</p>
  );
}
