import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support — vournal",
  description:
    "Get help with vournal: contact us, reset your password, manage permissions, or delete your account.",
};

/**
 * /support — the Support URL given to the App Store. It has to be a real page
 * with a way to reach a person, so it leads with the address and then answers
 * the questions that would otherwise become emails.
 */

const TOPICS: { q: string; a: React.ReactNode }[] = [
  {
    q: "I forgot my password",
    a: (
      <>
        Open the <Link href="/forgot-password">password reset page</Link> and enter the email
        you signed up with. We will email you a link to choose a new one.
      </>
    ),
  },
  {
    q: "How do I delete my account and my data?",
    a: (
      <>
        In the app, tap your profile at the top right, scroll to{" "}
        <strong>Delete account</strong>, and confirm with your password. This permanently
        deletes your account, every entry, and every recording. If you cannot sign in, email us
        from the address on your account and we will delete it for you.
      </>
    ),
  },
  {
    q: "How do I delete one entry or one recording?",
    a: (
      <>
        Open the entry in your journal. You can delete the recording and keep the written
        entry, or delete the whole entry.
      </>
    ),
  },
  {
    q: "What happens to what I say?",
    a: (
      <>
        Your recording is sent to a speech-to-text service, and the text is sent to an AI
        service that organises it. The app asks for your permission first, and you can
        withdraw it in Profile. The <Link href="/privacy">Privacy Policy</Link> names each
        provider and what it receives.
      </>
    ),
  },
  {
    q: "The microphone does not work",
    a: (
      <>
        On your iPhone, open Settings, then vournal, and turn on Microphone. You can also type
        an entry instead of recording it.
      </>
    ),
  },
  {
    q: "Does vournal upload my contacts?",
    a: (
      <>
        No. Linking a person to a contact is optional, and the contact is read on your phone
        only. You can turn contacts access off in Settings, under vournal.
      </>
    ),
  },
  {
    q: "It wrote something down wrong",
    a: (
      <>
        Automatic transcription makes mistakes, more so with background noise or mixed
        languages. Please check anything important, such as appointment times, yourself.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="font-serif text-ink text-3xl tracking-tight">Support</h1>
        <p className="text-secondary mt-4 text-[15px] leading-relaxed">
          Need help, or want to tell us something? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline">
            {CONTACT_EMAIL}
          </a>
          . A person reads every message.
        </p>

        <div className="mt-12 space-y-8">
          {TOPICS.map((topic) => (
            <section key={topic.q}>
              <h2 className="font-serif text-ink text-xl">{topic.q}</h2>
              <p className="text-secondary mt-2 text-[15px] leading-relaxed [&_a]:text-ink [&_a]:underline [&_strong]:text-ink">
                {topic.a}
              </p>
            </section>
          ))}
        </div>

        <p className="text-muted mt-12 text-xs leading-relaxed">
          vournal is a journaling aid. It is not a medical device and does not give medical or
          mental-health advice. If you are in immediate danger, contact your local emergency
          number.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
