import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DownloadButton } from "@/components/DownloadButton";
import { BrowserShot } from "@/components/BrowserShot";
import { FaqItem } from "@/components/FaqItem";
import { WEB_APP_URL } from "@/lib/site";

const title = "vournal OS — your whole life on the big screen";
const description =
  "vournal OS is vournal on the web: your day, tasks, projects, calendar, money and habits on one calm dashboard, in sync with the vournal app. Part of vournal Plus.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/os" },
  openGraph: { title, description, url: "/os", siteName: "vournal", type: "website", images: ["/os/dashboard.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/os/dashboard.jpg"] },
};

/**
 * The web dashboard's page: what vournal OS is, real screenshots, how it works with the
 * app, and how to get it. Same quiet direction as the landing page.
 */
export default function OsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <WithTheApp />
        <Faq />
        <BottomCta />
      </main>
      <SiteFooter />
    </>
  );
}

function OpenButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WEB_APP_URL}
      className={`bg-accent text-paper inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-[#527d5d] ${className}`}
    >
      Open vournal OS <span aria-hidden>→</span>
    </a>
  );
}

/* ---------------------------------------------------------------- Hero ---- */

function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-10 pb-16 md:pt-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-muted text-xs tracking-[0.14em] uppercase">vournal OS · on the web</p>
        <h1 className="font-serif text-ink mt-5 text-[2.5rem] leading-[1.08] tracking-tight sm:text-6xl">
          Your whole life, on the big screen.
        </h1>
        <p className="text-secondary mx-auto mt-6 max-w-xl text-[17px] leading-relaxed">
          Speak in the app; plan on the web. vournal OS lays your day, tasks,
          projects, calendar, money and habits out on one calm dashboard — and
          keeps it all in sync with your phone.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <OpenButton />
          <DownloadButton variant="outline" />
        </div>
        <p className="text-muted mt-4 text-xs">Part of vournal Plus · works in any modern browser</p>
      </div>
      <div className="mx-auto mt-14 max-w-5xl">
        <BrowserShot
          src="/os/dashboard.jpg"
          alt="The vournal OS home screen: the time and date, today's tasks, events and habits, what you can spend today, and your top 3 priorities"
          priority
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Features ---- */

function Features() {
  const items = [
    {
      kicker: "Tasks",
      title: "Everything to do, in order.",
      body: "Today, tomorrow and later, with priorities, projects and repeats. Star your top 3 for the day, switch to a board, and tick things off as you go.",
      src: "/os/tasks.jpg",
      alt: "The Tasks page: today's and tomorrow's tasks with priorities and their projects",
    },
    {
      kicker: "Calendar",
      title: "One calendar for everything dated.",
      body: "Events, task due times, reminders and bills on the same day, week, month or year — so you see where your time actually goes.",
      src: "/os/calendar.jpg",
      alt: "The Calendar in month view with meetings, lunch, the gym and tasks across the week",
    },
    {
      kicker: "Money",
      title: "Know what you can spend today.",
      body: "Your accounts, transactions, budgets, bills and debts in one place. The spending plan starts from the money you actually have and tells you, every day, what's safe to spend.",
      src: "/os/finance.jpg",
      alt: "The Money page: total balance, the spending plan with what's left to spend today, and the salary coming up",
    },
    {
      kicker: "Projects",
      title: "Big plans, broken down.",
      body: "Each project keeps its tasks, notes, files, events and spending together, with progress and the next deadline at a glance.",
      src: "/os/project.jpg",
      alt: "A project page: 25% complete, its tasks for today and this week, and the next deadline",
    },
  ];
  return (
    <section className="border-hairline border-t">
      <div className="mx-auto w-full max-w-5xl space-y-24 px-6 py-20">
        {items.map((it, i) => (
          <div
            key={it.kicker}
            className={`grid grid-cols-1 items-center gap-10 ${i % 2 ? "md:grid-cols-[1.25fr_0.75fr]" : "md:grid-cols-[0.75fr_1.25fr]"}`}
          >
            <div className={i % 2 ? "md:order-2" : ""}>
              <p className="text-muted text-xs tracking-[0.14em] uppercase">{it.kicker}</p>
              <h2 className="font-serif text-ink mt-4 text-3xl tracking-tight">{it.title}</h2>
              <p className="text-secondary mt-4 text-[15px] leading-relaxed">{it.body}</p>
            </div>
            <div className={i % 2 ? "md:order-1" : ""}>
              <BrowserShot src={it.src} alt={it.alt} />
            </div>
          </div>
        ))}
        <div className="border-hairline grid grid-cols-1 gap-x-12 gap-y-8 border-t pt-16 sm:grid-cols-3">
          {[
            ["Habits & goals", "Daily habits with streaks, and goals with milestones — what to save each month, how far you've come."],
            ["Notes & files", "Markdown notes linked to projects and people, and files kept with the things they belong to."],
            ["An assistant that acts", "Ask in plain words — add, reschedule, log a coffee — and it does it, with a card to approve and Undo."],
          ].map(([t, b]) => (
            <div key={t}>
              <h3 className="font-serif text-ink text-xl">{t}</h3>
              <p className="text-secondary mt-2 text-[15px] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- WithTheApp ---- */

function WithTheApp() {
  const steps = [
    { n: "1", title: "Speak in the app", body: "Talk once a day on your iPhone, the way you talk — English, Arabic, Lebanese dialect, mixed." },
    { n: "2", title: "It lands on the web", body: "The to-dos and plans from what you said show up in vournal OS, ready to sort, schedule and finish." },
    { n: "3", title: "Plan at your desk", body: "Rearrange your week, check your money, move projects forward. Your phone sees every change." },
  ];
  return (
    <section className="border-hairline border-t bg-[#f3f0e8]">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-serif text-ink text-3xl tracking-tight">Made to work with the app.</h2>
        <p className="text-secondary mt-3 max-w-lg text-[15px]">
          One vournal account, two places to use it. Nothing to import, nothing to keep in sync by hand.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="border-hairline text-secondary flex h-9 w-9 items-center justify-center rounded-full border bg-white font-serif text-lg">
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

/* ----------------------------------------------------------------- FAQ ---- */

function Faq() {
  const qs = [
    {
      q: "How do I get vournal OS?",
      a: "Download vournal on your iPhone and subscribe to vournal Plus in the app. Then open life.vournal.app and sign in with the same account.",
    },
    {
      q: "Is it the same account as the app?",
      a: "Yes. Sign in with the same email and password, or the same Apple or Google sign-in. What you add on one shows up on the other.",
    },
    {
      q: "Does it work on any computer?",
      a: "Any modern browser on a Mac, Windows PC, Chromebook or tablet. You can also add it to your home screen like an app.",
    },
    {
      q: "Is my data private?",
      a: "Your data is yours, on the web as in the app. See our Privacy Policy for exactly what's stored and how.",
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
          More about the app on the{" "}
          <Link href="/" className="text-secondary hover:text-ink underline underline-offset-4 transition-colors">
            home page
          </Link>
          .
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
          Say it on your phone. Run it from your desk.
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <OpenButton />
          <DownloadButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
