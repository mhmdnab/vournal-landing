import { PRIVACY_POLICY, TERMS_OF_SERVICE, forApp, type LegalDoc } from "@/lib/legal";

// The iOS app reads its Privacy Policy and Terms from here, so a wording change ships
// with a website deploy instead of a new app build. Only the app's text: never the
// website-only parts (App Store guideline 3.1.1).
export const dynamic = "force-static";

const forTheApp = (doc: LegalDoc) => ({
  title: doc.title,
  updated: doc.updated,
  blocks: forApp(doc.blocks),
});

export function GET() {
  return Response.json(
    { schema: 1, privacy: forTheApp(PRIVACY_POLICY), terms: forTheApp(TERMS_OF_SERVICE) },
    { headers: { "Cache-Control": "public, max-age=300" } },
  );
}
