import type { Metadata } from "next";
import { LegalLayout, LegalH2, LegalP } from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — vournal",
  description: "How vournal collects, stores, and uses your recordings and journal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="—" draft>
      <section>
        <LegalP>
          vournal is a voice journal. This page explains what we collect, how it’s
          stored, and the control you have over it. It’s a draft; the finalized
          policy will replace this copy before public launch.
        </LegalP>
      </section>

      <section>
        <LegalH2>What we collect</LegalH2>
        <LegalP>
          The audio you record, the transcript and structure derived from it
          (journal summary, to-dos, calendar items, topics, people, mood), your
          account email, and basic usage needed to run the service.
        </LegalP>
      </section>

      <section>
        <LegalH2>How recordings are stored</LegalH2>
        <LegalP>
          Recordings are kept in private cloud storage and served only through
          short-lived, signed links to you. They are not public and are not
          shared with other users.
        </LegalP>
      </section>

      <section>
        <LegalH2>How your data is used</LegalH2>
        <LegalP>
          To transcribe your speech and organize it into your journal, to-dos,
          and calendar — the core function of the app. We do not sell your data.
        </LegalP>
      </section>

      <section>
        <LegalH2>Service providers</LegalH2>
        <LegalP>
          We use trusted processors to run the service — cloud hosting and
          database/storage, speech-to-text, and language understanding. Audio and
          text are sent to these providers solely to produce your journal. The
          finalized policy will name each provider.
        </LegalP>
      </section>

      <section>
        <LegalH2>Your controls</LegalH2>
        <LegalP>
          You can delete your account from within the app at any time. Deleting
          your account removes your entries and recordings.
        </LegalP>
      </section>

      <section>
        <LegalH2>Contact</LegalH2>
        <LegalP>
          Questions about privacy? Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-secondary hover:text-ink underline underline-offset-4 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </LegalP>
      </section>
    </LegalLayout>
  );
}
