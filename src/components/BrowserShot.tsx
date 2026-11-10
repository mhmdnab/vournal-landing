import Image from "next/image";

/** A screenshot in a simple browser frame (shared with /life). */
export function BrowserShot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="border-hairline overflow-hidden rounded-xl border bg-white shadow-[0_24px_60px_-28px_rgba(40,36,28,0.35)]">
      <div className="border-hairline flex items-center gap-1.5 border-b bg-[#f5f1e9] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4ded2]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4ded2]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4ded2]" />
        <span className="text-faint ml-3 text-[11px]">life.vournal.app</span>
      </div>
      <Image src={src} alt={alt} width={2000} height={1250} priority={priority} sizes="(max-width: 768px) 100vw, 640px" className="h-auto w-full" />
    </div>
  );
}
