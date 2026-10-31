import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { LegalDoc } from "@/components/LegalDoc";
import type { Block } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy — vournal",
  description: "How refunds and cancellations work for vournal Plus.",
};

/**
 * /refunds — Paddle's website review requires a refund policy page. This restates
 * Terms §8 and makes no promise beyond it; keep the two in step if that changes.
 */

const BLOCKS: Block[] = [
  { p: ["vournal Plus is a monthly subscription. Who handles a refund depends on where you bought it."] },

  { h: "Bought on our website" },
  { p: ["Paddle (paddle.com) sells vournal Plus on our website as our reseller and merchant of record. Refund requests go to Paddle and are handled under its refund policy and applicable law. You can ask for one at paddle.net, or email us and we will help you reach them."] },

  { h: "Bought in the app" },
  { p: ["Purchases made in the iOS app are charged by Apple, and refunds are handled by Apple under its policies. You can ask for one at reportaproblem.apple.com."] },

  { h: "Cancelling" },
  { p: ["Cancelling stops future renewals. Plus stays active until the end of the period you paid for, then your account returns to the free limits. Nothing in your journal is deleted."] },

  { h: "Contact" },
  { p: ["Questions about a charge: ", { b: CONTACT_EMAIL }] },
];

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund Policy" updated="31 October 2026">
      <LegalDoc blocks={BLOCKS} />
    </LegalLayout>
  );
}
