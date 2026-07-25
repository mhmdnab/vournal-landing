import type { Metadata } from "next";
import { LegalLayout, LegalH2, LegalP } from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — vournal",
  description: "The terms for using vournal, including the TestFlight beta.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="—" draft>
      <section>
        <LegalP>
          These terms govern your use of vournal. This is a draft; the finalized
          terms will replace this copy before public launch.
        </LegalP>
      </section>

      <section>
        <LegalH2>The service</LegalH2>
        <LegalP>
          vournal turns your voice recordings into a journal, to-dos, and calendar
          items. It relies on automated transcription and language understanding,
          which are not perfect — review anything important.
        </LegalP>
      </section>

      <section>
        <LegalH2>Beta</LegalH2>
        <LegalP>
          During the TestFlight beta the app is provided as-is and may change,
          break, or be interrupted. Don’t rely on it as your only record of
          important information.
        </LegalP>
      </section>

      <section>
        <LegalH2>Your content</LegalH2>
        <LegalP>
          Your recordings and entries are yours. You grant us the permissions
          needed to process and store them so the app can work, as described in
          the Privacy Policy.
        </LegalP>
      </section>

      <section>
        <LegalH2>Acceptable use</LegalH2>
        <LegalP>
          Use vournal lawfully and only for your own journaling. Don’t attempt to
          disrupt, abuse, or reverse-engineer the service.
        </LegalP>
      </section>

      <section>
        <LegalH2>Changes</LegalH2>
        <LegalP>
          We may update these terms as the product evolves. Material changes will
          be reflected here with a new “last updated” date.
        </LegalP>
      </section>

      <section>
        <LegalH2>Contact</LegalH2>
        <LegalP>
          Questions? Email{" "}
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
