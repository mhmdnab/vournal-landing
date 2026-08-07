"use client";

import { useState } from "react";

/**
 * One FAQ row that animates open/close. Native <details> snaps; this uses the
 * grid-template-rows 0fr→1fr trick (pure CSS transition, clipped by an inner
 * overflow-hidden) so the answer slides open smoothly, with the "+" rotating to
 * an "×". Each row keeps its own state, so several can be open at once.
 */
export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="text-ink flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-[16px]"
      >
        {q}
        <span
          className={`text-faint shrink-0 text-xl leading-none transition-transform duration-300 ease-out ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-secondary pb-5 text-[15px] leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
