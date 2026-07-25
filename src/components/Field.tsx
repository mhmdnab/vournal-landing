"use client";

/**
 * A single labelled input — Direction A: uppercase micro-label, hairline border,
 * no card chrome. Extracted from the old AuthForm so the password-reset pages
 * stay self-contained after the app was removed (Step 13).
 */
export function Field({
  label,
  type,
  value,
  onChange,
  autoComplete,
  autoFocus,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-muted mb-1.5 block text-xs tracking-wide uppercase">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className="border-hairline text-ink focus:border-faint w-full rounded-[12px] border bg-transparent px-3.5 py-2.5 text-[15px] outline-none"
      />
    </label>
  );
}
