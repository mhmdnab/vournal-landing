import { APP_STORE_URL, CTA_LABEL } from "@/lib/site";

/**
 * The one call to action, used in the header, hero, and bottom band. Points at
 * APP_STORE_URL: the public TestFlight invitation until launch.
 */
export function DownloadButton({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors";
  const skin =
    variant === "primary"
      ? "bg-accent text-paper hover:bg-[#527d5d] px-6 py-3"
      : "border-hairline text-ink hover:border-faint border px-5 py-2.5";
  return (
    <a href={APP_STORE_URL} className={`${base} ${skin} ${className}`}>
      {/* Simple mark, not a brand logo (this is a placeholder CTA). */}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a4 4 0 0 0-4 4v4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Zm2 8h-4V6a2 2 0 1 1 4 0v4Z" />
      </svg>
      {CTA_LABEL}
    </a>
  );
}
