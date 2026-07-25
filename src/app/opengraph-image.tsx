import { ImageResponse } from "next/og";

// Social preview card, generated as a PNG at build. Next auto-wires this as
// og:image and twitter:image. Kept satori-safe (explicit flex, hex colors,
// default font) so it renders reliably.
export const alt =
  "vournal — talk, and it becomes your journal, to-dos and calendar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#FAF8F3",
          color: "#2B2926",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            letterSpacing: 3,
            color: "#9A9384",
          }}
        >
          vournal
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.12,
            marginTop: 30,
            maxWidth: 940,
          }}
        >
          Talk. It becomes your journal, to-dos & calendar.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 34,
            color: "#6B6558",
          }}
        >
          A self-structuring voice journal · iOS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 46,
            height: 8,
            width: 130,
            backgroundColor: "#5E8C6A",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
