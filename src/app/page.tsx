import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DownloadButton } from "@/components/DownloadButton";
import { FaqItem } from "@/components/FaqItem";
import { CONTACT_EMAIL } from "@/lib/site";

const MOCKUP_ALT =
  "vournal on an iPhone — the capture screen “What’s on your mind?”, tap to start, with Home, Journal, Life, To-Do, and Calendar in the bottom nav";

/**
 * The marketing landing page (Step 13). One fast, static, server-rendered page
 * in Direction A "Quiet" — paper + ink, serif for the voice, hairlines not
 * cards. Its whole job: explain "one capture, three payoffs" and drive the
 * download. Zero app functionality; the only interactivity on the whole site is
 * the password-reset route.
 */
export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LifeThread />
        <WhyDifferent />
        <Payoffs />
        <HowItWorks />
        <ScreenshotBand />
        <Faq />
        <BottomCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ---------------------------------------------------------------- Hero ---- */

function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 pt-10 pb-20 md:grid-cols-[0.9fr_1.1fr] md:pt-16 md:pb-28">
      <div className="md:order-2">
        <p className="text-muted text-xs tracking-[0.14em] uppercase">
          A voice journal that remembers
        </p>
        <h1 className="font-serif text-ink mt-5 text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl">
          The journal that remembers your life.
        </h1>
        <p className="text-secondary mt-6 max-w-md text-[17px] leading-relaxed">
          Talk once a day. vournal turns it into a private record of your people,
          places, and moods — one you can actually look back on. It sorts today
          into a journal, to-dos, and a calendar along the way.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <DownloadButton />
          <span className="text-muted text-xs">iOS · free during the beta</span>
        </div>
      </div>

      <div className="flex justify-center md:order-1 md:justify-center">
        <Image
          src="/phone-mockup.png"
          alt={MOCKUP_ALT}
          width={1044}
          height={1966}
          priority
          sizes="(max-width: 768px) 320px, 350px"
          className="h-auto w-[320px] sm:w-[350px]"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Payoffs ---- */

function Payoffs() {
  const items = [
    {
      title: "Journal",
      body: "Everything you said, kept — newest first. Your memory, in your own words.",
      icon: <BookIcon />,
    },
    {
      title: "To-dos",
      body: "The things to actually do, pulled out for you. Just the ones that matter.",
      icon: <CheckIcon />,
    },
    {
      title: "Calendar",
      body: "Dated and timed items laid out across your week, so you can plan your days.",
      icon: <CalendarIcon />,
    },
  ];
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-serif text-ink text-3xl tracking-tight">
          It sorts your day, too.
        </h2>
        <p className="text-secondary mt-3 max-w-lg text-[15px]">
          While it’s building your life index, the same words also become a journal
          entry, your to-dos, and calendar events — no typing, no setup.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title}>
              <span className="text-secondary block">{it.icon}</span>
              <h3 className="font-serif text-ink mt-4 text-xl">{it.title}</h3>
              <p className="text-secondary mt-2 text-[15px] leading-relaxed">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- LifeThread ---- */

function LifeThread() {
  // A representative thread — one person, their moments, and the mood arc — a
  // static mini-version of the app's signature thread view.
  const dots = [
    { x: 20, y: 45, c: "#9A9384" },
    { x: 63, y: 59.5, c: "#C08A5A" },
    { x: 107, y: 45, c: "#9A9384" },
    { x: 150, y: 30.5, c: "#7E9A6E" },
    { x: 193, y: 45, c: "#9A9384" },
    { x: 237, y: 30.5, c: "#7E9A6E" },
    { x: 280, y: 16, c: "#5E8C6A" },
  ];
  const moments = [
    { c: "#5E8C6A", d: "Aug 2", t: "Coffee with Sarah — talked through the move." },
    { c: "#7E9A6E", d: "Jul 18", t: "Sarah’s birthday dinner. Good night." },
    { c: "#9A9384", d: "Jun 30", t: "Long call with Sarah about work." },
  ];
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-muted text-xs tracking-[0.14em] uppercase">
            The life index
          </p>
          <h2 className="font-serif text-ink mt-4 text-3xl tracking-tight">
            Your life, threaded.
          </h2>
          <p className="text-secondary mt-4 max-w-md text-[15px] leading-relaxed">
            Every person, place, and topic you mention becomes a thread you can
            open — every moment it came up, and the arc of how you felt over time.
            It’s the thing a chatbot can’t do: a memory that builds itself, from
            your own words.
          </p>
          <p className="text-ink mt-4 font-serif text-lg">Nothing to tag, ever.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["People", "Topics", "Places"].map((k) => (
              <span
                key={k}
                className="border-hairline text-secondary rounded-full border px-3 py-1 text-[13px]"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
        {/* Thread mockup — the app's signature mood line */}
        <div className="border-hairline rounded-2xl border bg-[#f5f1e9] p-6 sm:p-7">
          <h3 className="font-serif text-ink text-2xl">Sarah</h3>
          <p className="text-muted mt-1 text-[13px]">
            12 moments · Apr–Aug · mostly good
          </p>
          <svg viewBox="0 0 300 90" className="mt-5 w-full" aria-hidden>
            <line
              x1="20"
              y1="45"
              x2="280"
              y2="45"
              stroke="#E4DED2"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
            <path
              d="M 20 45 C 27.2 47.4, 48.5 59.5, 63 59.5 C 77.5 59.5, 92.5 49.8, 107 45 C 121.5 40.2, 135.7 30.5, 150 30.5 C 164.3 30.5, 178.5 45.0, 193 45 C 207.5 45.0, 222.5 35.3, 237 30.5 C 251.5 25.7, 272.8 18.4, 280 16"
              fill="none"
              stroke="#B0A995"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {dots.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3.6" fill={p.c} />
            ))}
          </svg>
          <div className="border-hairline mt-5 space-y-3 border-t pt-4">
            {moments.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="mt-[6px] h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: m.c }}
                />
                <p className="text-secondary text-[14px] leading-snug">
                  <span className="text-muted">{m.d}</span> · {m.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- WhyDifferent ---- */

function WhyDifferent() {
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-serif text-ink text-3xl tracking-tight">
          A chatbot forgets. vournal remembers.
        </h2>
        <p className="text-secondary mt-3 max-w-lg text-[15px]">
          Ask a chatbot to organize your day and it will — then forget it by
          tomorrow. vournal is built to keep it.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-ink text-xl">It remembers, not resets.</h3>
            <p className="text-secondary mt-3 text-[15px] leading-relaxed">
              Every AI chat starts from zero — you drive it, re-explain yourself,
              and it forgets. vournal keeps a private, structured record of your
              life that compounds: the more you live, the richer it gets.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-ink text-xl">It talks the way you talk.</h3>
            <p className="text-secondary mt-3 text-[15px] leading-relaxed">
              English, Arabic, Lebanese dialect, and code-switching — in the same
              breath. No “speak clearly,” no switching languages for the app’s sake.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-ink text-xl">It knows a thought from a task.</h3>
            <p className="text-secondary mt-3 text-[15px] leading-relaxed">
              Discriminating on purpose — it won’t turn your whole day into a
              checklist. Only what’s really an action becomes a to-do.
            </p>
            <div className="border-hairline mt-5 space-y-2.5 border-l pl-4 text-[14px]">
              <p className="text-muted">
                “I shipped the feature today.”{" "}
                <span className="text-faint">→ stays a memory</span>
              </p>
              <p className="text-muted">
                “I need to call the dentist tomorrow.”{" "}
                <span className="text-faint">→ a dated to-do</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- HowItWorks ---- */

function HowItWorks() {
  const steps = [
    { n: "1", title: "Speak", body: "An end-of-day brain-dump. No fields, no format — just talk." },
    { n: "2", title: "It transcribes", body: "Your words, dialect and mixed speech included." },
    { n: "3", title: "It remembers", body: "Today becomes a journal, to-dos, and a calendar — and your people, places, and moods become a life you can look back on." },
  ];
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-serif text-ink text-3xl tracking-tight">How it works</h2>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="border-hairline text-secondary flex h-9 w-9 items-center justify-center rounded-full border font-serif text-lg">
                {s.n}
              </span>
              <h3 className="font-serif text-ink mt-4 text-xl">{s.title}</h3>
              <p className="text-secondary mt-2 text-[15px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- ScreenshotBand ---- */

/* Placeholder visual band — real App Store screenshots slot in here (Phase 2). */
function ScreenshotBand() {
  return (
    <section className="border-hairline border-t bg-[#f3f0e8]">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center">
        <h2 className="font-serif text-ink text-3xl tracking-tight">
          Your life, remembered.
        </h2>
        <p className="text-secondary mx-auto mt-3 max-w-md text-[15px]">
          One recording a day — the journal you’ll keep, the plan you’ll follow,
          and a map of your life that grows richer with every entry.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ ---- */

function Faq() {
  const qs = [
    {
      q: "How is this different from a chatbot?",
      a: "A chatbot is a conversation that resets — you drive it, and it forgets. vournal is a memory: talk once and it builds a private, structured record of your life — your journal, your people, your moods over time — that gets richer with no prompting.",
    },
    {
      q: "Is my journal private?",
      a: "Your recordings and entries are yours. See our Privacy Policy for exactly what’s stored and how.",
    },
    {
      q: "What languages does it understand?",
      a: "English, Arabic, Lebanese dialect, and code-switched (mixed) speech — the way people actually talk.",
    },
    {
      q: "Do I have to tag people, topics, or places?",
      a: "Never. vournal builds your life index automatically from what you say — every person, topic, and place becomes a browsable thread, with the arc of how you felt over time.",
    },
    {
      q: "How much does it cost?",
      a: "Free during the TestFlight beta. Pricing comes later; beta testers will hear first.",
    },
    {
      q: "Is there an Android or web version?",
      a: "iOS first. The web is just this page — the app itself lives on your phone.",
    },
  ];
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h2 className="font-serif text-ink text-3xl tracking-tight">Questions</h2>
        <div className="mt-10 divide-y divide-[color:var(--hairline)]">
          {qs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
        <p className="text-muted mt-8 text-sm">
          Something else?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-secondary hover:text-ink underline underline-offset-4 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- BottomCta ---- */

function BottomCta() {
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
        <h2 className="font-serif text-ink mx-auto max-w-xl text-4xl leading-tight tracking-tight">
          Start journaling with your voice.
        </h2>
        <p className="text-secondary mx-auto mt-4 max-w-md text-[15px]">
          Say your day. vournal keeps the memory and does the organizing.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <DownloadButton />
          <span className="text-muted text-xs">iOS · free during the beta</span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- icons ---- */

function BookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H19v14H5.5A1.5 1.5 0 0 0 4 19.5V5.5Z" />
      <path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H19" strokeLinecap="round" />
      <path d="M8 8h7M8 11h7" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M8.5 12.2 11 14.7l4.6-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" strokeLinecap="round" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
