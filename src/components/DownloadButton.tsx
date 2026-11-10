import { APP_STORE_URL, CTA_LABEL } from "@/lib/site";

/**
 * The one call to action, used in the header, hero, and bottom band: vournal on
 * the App Store.
 */
export function DownloadButton({
  variant = "primary",
  className = "",
  compact = false,
}: {
  variant?: "primary" | "outline";
  className?: string;
  /** The header on a phone: "App Store" alone, so it fits beside the wordmark. */
  compact?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors";
  const skin =
    variant === "primary"
      ? "bg-accent text-paper hover:bg-[#527d5d] px-6 py-3"
      : "border-hairline text-ink hover:border-faint border px-5 py-2.5";
  return (
    <a href={APP_STORE_URL} className={`${base} ${skin} ${className}`}>
      {/* A phone mark (Apple's own logo belongs only in its official badge). */}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" strokeLinecap="round" />
      </svg>
      {compact ? (
        <>
          <span className="sm:hidden">App Store</span>
          <span className="hidden sm:inline">{CTA_LABEL}</span>
        </>
      ) : (
        CTA_LABEL
      )}
    </a>
  );
}
