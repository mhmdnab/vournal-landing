import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DownloadButton } from "@/components/DownloadButton";
import { CONTACT_EMAIL } from "@/lib/site";

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
        <Payoffs />
        <WhyDifferent />
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
    <section className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 pt-10 pb-20 md:grid-cols-[1.1fr_0.9fr] md:pt-16 md:pb-28">
      <div>
        <p className="text-muted text-xs tracking-[0.14em] uppercase">
          A voice journal that organizes itself
        </p>
        <h1 className="font-serif text-ink mt-5 text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl">
          Talk. It turns your day into a journal, to&#8209;dos, and a calendar.
        </h1>
        <p className="text-secondary mt-6 max-w-md text-[17px] leading-relaxed">
          vournal is a self-structuring voice journal. Ramble about your day,
          once — and it fans out into a journal entry, a to-do list, and calendar
          events, automatically.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <DownloadButton />
          <span className="text-muted text-xs">iOS · free during the beta</span>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <PhoneMockup />
      </div>
    </section>
  );
}

/* A quiet, on-brand app preview — stands in for a real screenshot (Phase 2). */
function PhoneMockup() {
  return (
    <div className="border-hairline w-[250px] rounded-[2.3rem] border bg-[#f3f0e8] p-2.5">
      <div className="bg-paper overflow-hidden rounded-[1.9rem] px-4 py-5">
        <p className="text-faint text-[10px] tracking-[0.12em] uppercase">
          Tuesday · Journal
        </p>

        {/* two entry rows */}
        {[
          { c: "bg-mood-5", w: ["82%", "54%"] },
          { c: "bg-mood-2", w: ["70%", "40%"] },
        ].map((row, i) => (
          <div key={i} className="border-hairline flex items-start gap-2.5 border-b py-3.5">
            <span className={`mt-1 block h-2 w-2 shrink-0 rounded-full ${row.c}`} />
            <span className="flex-1">
              <span className="bg-hairline block h-2.5 rounded" style={{ width: row.w[0] }} />
              <span className="bg-hairline mt-1.5 block h-2 rounded opacity-70" style={{ width: row.w[1] }} />
            </span>
          </div>
        ))}

        {/* a pulled-out to-do */}
        <p className="text-faint mt-4 text-[9px] tracking-[0.12em] uppercase">To-do</p>
        <div className="mt-2 flex items-center gap-2.5">
          <span className="border-faint block h-3.5 w-3.5 shrink-0 rounded-[3px] border" />
          <span className="bg-hairline block h-2.5 w-[64%] rounded" />
        </div>
        <div className="mt-2.5 flex items-center gap-2.5">
          <span className="bg-accent flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px]">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5.2 3.8 7.5 8.5 2.5" stroke="#FAF8F3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="bg-hairline block h-2.5 w-[48%] rounded opacity-60" />
        </div>

        {/* a calendar chip */}
        <p className="text-faint mt-4 text-[9px] tracking-[0.12em] uppercase">Tomorrow</p>
        <div className="border-hairline mt-2 flex items-center gap-2.5 rounded-lg border px-2.5 py-2">
          <span className="text-accent text-[10px] tabular-nums">2:00</span>
          <span className="bg-hairline block h-2.5 w-[52%] rounded" />
        </div>
      </div>
    </div>
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
          One capture. Three payoffs.
        </h2>
        <p className="text-secondary mt-3 max-w-lg text-[15px]">
          The journal, to-dos, and calendar aren’t three apps — they’re three
          views of the same thing you said.
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

/* ------------------------------------------------------- WhyDifferent ---- */

function WhyDifferent() {
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-serif text-ink text-3xl tracking-tight">
          Not just another notes app.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-ink text-xl">
              It understands how you actually talk.
            </h3>
            <p className="text-secondary mt-3 text-[15px] leading-relaxed">
              English, Arabic, Lebanese dialect, and code-switching — in the same
              breath. No “speak clearly,” no switching languages for the app’s
              sake. Talk the way you talk.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-ink text-xl">
              It knows a thought from a task.
            </h3>
            <p className="text-secondary mt-3 text-[15px] leading-relaxed">
              It’s discriminating on purpose. It won’t turn your whole day into a
              checklist — only what’s really an action becomes a to-do.
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
    { n: "3", title: "It organizes", body: "A journal entry, to-dos, and calendar events appear on their own." },
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
          Your day, sorted for you.
        </h2>
        <p className="text-secondary mx-auto mt-3 max-w-md text-[15px]">
          One recording, three views — the journal you’ll keep, the to-dos you’ll
          finish, the plan you’ll follow.
        </p>
        <div className="mt-14 flex flex-wrap items-end justify-center gap-8">
          <PhoneMockup />
          <div className="hidden sm:block">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ ---- */

function Faq() {
  const qs = [
    {
      q: "Is my journal private?",
      a: "Your recordings and entries are yours. See our Privacy Policy for exactly what’s stored and how.",
    },
    {
      q: "What languages does it understand?",
      a: "English, Arabic, Lebanese dialect, and code-switched (mixed) speech — the way people actually talk.",
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
            <details key={item.q} className="group py-5">
              <summary className="text-ink flex cursor-pointer list-none items-center justify-between text-[16px]">
                {item.q}
                <span className="text-faint ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-secondary mt-3 text-[15px] leading-relaxed">
                {item.a}
              </p>
            </details>
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
