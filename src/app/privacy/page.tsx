import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LegalDoc } from "@/components/LegalDoc";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — vournal",
  description: "How vournal collects, stores, and uses your recordings and journal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title={PRIVACY_POLICY.title} updated={PRIVACY_POLICY.updated}>
      <LegalDoc blocks={PRIVACY_POLICY.blocks} />
    </LegalLayout>
  );
}
