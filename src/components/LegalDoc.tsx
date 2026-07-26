import type { Block, Span } from "@/lib/legal";

/** Renders a legal document (structured blocks from @/lib/legal) in Direction A. */
export function LegalDoc({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if ("h" in block) {
          return (
            <h2 key={i} className="font-serif text-ink pt-4 text-xl">
              {block.h}
            </h2>
          );
        }
        if ("p" in block) {
          return (
            <p key={i} className="text-secondary text-[15px] leading-relaxed">
              {spans(block.p)}
            </p>
          );
        }
        if ("ul" in block) {
          return (
            <ul
              key={i}
              className="text-secondary list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed"
            >
              {block.ul.map((item, j) => (
                <li key={j}>{spans(item)}</li>
              ))}
            </ul>
          );
        }
        if ("table" in block) {
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-[14px]">
                <thead>
                  <tr>
                    {block.table.head.map((h, j) => (
                      <th
                        key={j}
                        className="border-hairline text-muted border-b py-2 pr-4 font-medium"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className="border-hairline text-secondary border-b py-2.5 pr-4 align-top leading-relaxed"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return <hr key={i} className="border-hairline" />;
      })}
    </div>
  );
}

function spans(list: Span[]) {
  return list.map((s, i) =>
    typeof s === "string" ? (
      <span key={i}>{s}</span>
    ) : (
      <strong key={i} className="text-ink font-medium">
        {s.b}
      </strong>
    ),
  );
}
