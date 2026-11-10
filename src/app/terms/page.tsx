import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LegalDoc } from "@/components/LegalDoc";
import { TERMS_OF_SERVICE, forWeb } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — vournal",
  description: "The terms for using vournal and vournal Plus.",
};

export default function TermsPage() {
  return (
    <LegalLayout title={TERMS_OF_SERVICE.title} updated={TERMS_OF_SERVICE.updated}>
      <LegalDoc blocks={forWeb(TERMS_OF_SERVICE.blocks)} />
    </LegalLayout>
  );
}
