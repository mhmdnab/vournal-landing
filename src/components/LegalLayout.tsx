import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/** Shared shell for /privacy and /terms — header, a readable prose column, footer. */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="font-serif text-ink text-3xl tracking-tight">{title}</h1>
        <p className="text-muted mt-2 text-xs">Last updated {updated}</p>
        <div className="mt-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
