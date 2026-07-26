import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LegalDoc } from "@/components/LegalDoc";
import { TERMS_OF_SERVICE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — vournal",
  description: "The terms for using vournal, including the TestFlight beta.",
};

export default function TermsPage() {
  return (
    <LegalLayout title={TERMS_OF_SERVICE.title} updated={TERMS_OF_SERVICE.updated}>
      <LegalDoc blocks={TERMS_OF_SERVICE.blocks} />
    </LegalLayout>
  );
}
