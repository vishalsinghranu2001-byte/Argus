import { Button } from "@/components/Button";

/* ------------------------------------------------------------------ */
/*  Layout primitive                                                   */
/* ------------------------------------------------------------------ */

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  Announcement bar — black strip, lime linked text                   */
/* ------------------------------------------------------------------ */

function AnnouncementBar() {
  return (
    <div className="bg-midnight text-pure-white">
      <Container>
        <div className="flex items-center justify-center gap-2 py-2 text-caption">
          <span>Ticketing, response times, and accountability — without leaving Gmail.</span>
          <a href="#trial" className="text-electric-lime underline">
            Start a 2-week trial
          </a>
        </div>
      </Container>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation — sticky, logo left, links center-right, lime CTA       */
/* ------------------------------------------------------------------ */

function Nav() {
  const links = [
    ["How it works", "#how"],
    ["Features", "#features"],
    ["Pricing", "#pricing"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-stone-divider/40 bg-pure-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a href="#" className="text-heading-sm font-semibold tracking-[0.054em]">
            Argus
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-body font-medium tracking-[0.054em] hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden text-body font-medium tracking-[0.054em] hover:opacity-70 sm:block"
            >
              Sign in
            </a>
            <Button href="#trial">Book a demo</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="bg-pure-white">
      <Container>
        <div className="flex flex-col items-center pt-20 pb-0 text-center">
          <h1 className="max-w-4xl text-[clamp(2.75rem,6vw,4.625rem)] font-light leading-[1.05] tracking-[0.054em]">
            A support desk that lives in the inbox you already use.
          </h1>
          <p className="mt-6 max-w-2xl text-subheading text-near-black-ink/80">
            Argus turns your shared support inbox into a tracked ticketing system —
            automatic ticket numbers, measured response times, and full
            accountability. No new tool to learn. No per-agent fees.
          </p>

          {/* Email capture row: input + lime CTA */}
          <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Work email"
              aria-label="Work email"
              className="w-full rounded-input border border-near-black-ink bg-[rgba(17,17,13,0.05)] p-3 text-body tracking-[0.054em] placeholder:text-near-black-ink/60 focus:outline-none focus:ring-2 focus:ring-near-black-ink/20"
            />
            <Button type="submit" className="shrink-0">
              Get started
            </Button>
          </form>
          <p className="mt-3 text-caption text-near-black-ink/60">
            Runs on Google Workspace · Your data never leaves it
          </p>

          {/* Product UI screenshot — stylized dashboard mock */}
          <div className="mt-16 w-full">
            <ProductMock />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* A lightweight, on-brand mock of the Argus ticket dashboard. White card,
   16px radius, no shadow. Stands in for a real product screenshot. */
function ProductMock() {
  const tickets = [
    { id: "ETR-04821", subject: "Refund not received", tag: "Refund", who: "Mahesh", status: "Open", sla: true, time: "12m" },
    { id: "ETR-04820", subject: "Date change request", tag: "Reschedule", who: "Priya", status: "Awaiting revert", sla: false, time: "1h 04m" },
    { id: "ETR-04819", subject: "Booking not confirmed", tag: "Booking", who: "—", status: "Awaiting first reply", sla: true, time: "4m" },
    { id: "ETR-04818", subject: "Cancellation + fee", tag: "Cancellation", who: "Sana", status: "Closed", sla: true, time: "22m" },
  ];
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[16px] border border-stone-divider/40 bg-pure-white text-left">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-stone-divider/30 bg-warm-white px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-stone-divider/50" />
        <span className="h-3 w-3 rounded-full bg-stone-divider/50" />
        <span className="h-3 w-3 rounded-full bg-stone-divider/50" />
        <span className="ml-3 text-caption text-near-black-ink/60">
          argus · support@etrav.in
        </span>
      </div>
      {/* stat strip */}
      <div className="grid gap-px bg-stone-divider/20 sm:grid-cols-4">
        {[
          { label: "Open", value: "48" },
          { label: "Awaiting first reply", value: "6" },
          { label: "Avg first reply", value: "9m" },
          { label: "Closed today", value: "112" },
        ].map((s) => (
          <div key={s.label} className="bg-pure-white px-5 py-5">
            <div className="text-caption uppercase tracking-[0.054em] text-near-black-ink/60">
              {s.label}
            </div>
            <div className="mt-1 text-heading font-light">{s.value}</div>
          </div>
        ))}
      </div>
      {/* ticket rows */}
      <div className="divide-y divide-stone-divider/20">
        {tickets.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between gap-4 px-5 py-4 text-body"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="shrink-0 font-medium tabular-nums">{t.id}</span>
              <span className="truncate text-near-black-ink/80">{t.subject}</span>
              <span className="hidden shrink-0 rounded-tag bg-warm-white px-2 py-0.5 text-caption text-near-black-ink/60 sm:inline">
                {t.tag}
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <span className="hidden text-caption text-near-black-ink/60 md:inline">
                {t.who}
              </span>
              <span className="hidden w-36 text-caption text-near-black-ink/70 sm:inline">
                {t.status}
              </span>
              <span
                className={`rounded-tag px-2 py-0.5 text-caption tabular-nums ${
                  t.sla
                    ? "bg-electric-lime text-near-black-ink"
                    : "bg-warm-white text-near-black-ink/60"
                }`}
              >
                {t.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  "Runs on" strip — Google Workspace, not customer logos             */
/* ------------------------------------------------------------------ */

function WorkspaceStrip() {
  const stack = ["Gmail", "Google Apps Script", "Google Sheets"];
  return (
    <section className="bg-pure-white py-16">
      <Container>
        <p className="text-center text-caption font-semibold uppercase tracking-[0.054em] text-near-black-ink/60">
          Built entirely on tools you already pay for
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stack.map((l) => (
            <span
              key={l}
              className="text-heading-sm font-semibold text-near-black-ink/70"
            >
              {l}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Features — three core capabilities, flat cards                     */
/* ------------------------------------------------------------------ */

function Features() {
  const features = [
    {
      label: "Automatic tickets",
      title: "Every email, numbered",
      body: "New mail to the shared inbox becomes a numbered ticket (ETR-#####), and the customer gets an instant acknowledgement — automatically, within a minute.",
    },
    {
      label: "Measured response times",
      title: "Turnaround you can prove",
      body: "First-reply and per-reply turnaround are computed from the real email timestamps, so the figures stay exact no matter when the scan runs.",
    },
    {
      label: "Full accountability",
      title: "Who owns what, always",
      body: "The current handler updates to whoever replied last, and every handover is logged — so no email falls through the shared-inbox cracks.",
    },
  ];
  return (
    <section id="features" className="bg-pure-white py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-warm-white px-6 py-8">
              <div className="text-caption font-semibold uppercase tracking-[0.054em] text-near-black-ink/60">
                {f.label}
              </div>
              <h3 className="mt-3 text-heading-sm font-medium">{f.title}</h3>
              <p className="mt-3 text-body text-near-black-ink/80">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works — two automatic passes                               */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      when: "Every 1 minute",
      title: "Intake",
      body: "Assigns a ticket number, sends the customer an auto-acknowledgement, and posts an internal classify note inside the thread.",
    },
    {
      n: "02",
      when: "Every 1 hour",
      title: "Recompute",
      body: "Re-derives status, turnaround times, and the current handler for active tickets — straight from the live Gmail thread.",
    },
  ];
  return (
    <section id="how" className="bg-warm-white py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-heading-lg font-light leading-[1.15] tracking-[0.054em]">
            Gmail is the source of truth.
          </h2>
          <p className="mt-4 text-subheading text-near-black-ink/80">
            Every number is computed from real message timestamps. The dashboard
            is just a cache the scan rebuilds — if a row is ever wrong, the next
            scan self-heals it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="bg-pure-white px-8 py-8">
              <div className="flex items-baseline justify-between">
                <span className="text-heading font-light text-near-black-ink/40">
                  {s.n}
                </span>
                <span className="rounded-tag bg-warm-white px-2 py-0.5 text-caption uppercase tracking-[0.054em] text-near-black-ink/60">
                  {s.when}
                </span>
              </div>
              <h3 className="mt-4 text-heading-sm font-medium">{s.title}</h3>
              <p className="mt-3 text-body text-near-black-ink/80">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing — cost case vs per-agent helpdesks                        */
/* ------------------------------------------------------------------ */

function Pricing() {
  const rows = [
    { name: "Argus", price: "$0", highlight: true },
    { name: "Freshdesk — Growth", price: "~$15" },
    { name: "Freshdesk — Pro", price: "~$49" },
    { name: "Zendesk — Suite Team", price: "~$55" },
    { name: "Zendesk — Suite Professional", price: "~$115" },
  ];
  return (
    <section id="pricing" className="bg-pure-white py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-caption font-semibold uppercase tracking-[0.054em] text-near-black-ink/60">
              The cost case
            </div>
            <h2 className="mt-3 text-heading-lg font-light leading-[1.15] tracking-[0.054em]">
              Mainstream helpdesks bill per agent. Argus doesn’t.
            </h2>
            <p className="mt-4 text-body text-near-black-ink/80">
              It reuses the Google Workspace you already pay for, so cost doesn’t
              grow with headcount. A 10-agent team on a mid-tier helpdesk runs{" "}
              <span className="font-medium">$6,600+/year</span> — versus $0 in new
              licences here.
            </p>
            <p className="mt-4 text-caption text-near-black-ink/55">
              Indicative published list pricing, annual billing, 2026. Add-ons
              (AI, analytics) cost extra and vary by plan.
            </p>
          </div>
          <div className="bg-warm-white">
            <div className="px-6 py-4 text-caption font-semibold uppercase tracking-[0.054em] text-near-black-ink/60">
              Per agent / month (USD)
            </div>
            <div className="divide-y divide-stone-divider/20 border-t border-stone-divider/20">
              {rows.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span
                    className={`text-body ${r.highlight ? "font-semibold" : ""}`}
                  >
                    {r.name}
                  </span>
                  <span
                    className={`text-body tabular-nums ${
                      r.highlight
                        ? "rounded-tag bg-electric-lime px-2 py-0.5 font-semibold"
                        : "text-near-black-ink/70"
                    }`}
                  >
                    {r.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Trial CTA — Forest Canopy card, 40px radius                       */
/* ------------------------------------------------------------------ */

function TrialCTA() {
  return (
    <section id="trial" className="bg-warm-white py-20">
      <Container>
        <div className="grid items-center gap-8 rounded-event bg-forest-canopy px-8 py-10 md:grid-cols-2 md:px-12">
          <div>
            <div className="text-caption font-semibold uppercase tracking-[0.054em] text-pure-white/70">
              Ready when you are
            </div>
            <h2 className="mt-3 text-heading font-semibold text-pure-white">
              Open the allowlist. Run a two-week live trial.
            </h2>
            <p className="mt-4 max-w-md text-[15px] text-pure-white/80">
              It’s already live behind a test gate — auto-acknowledgement, classify
              notes, turnaround tracking, and the dashboard all proven. Flip the
              switch and watch real tickets flow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="#">Book a demo</Button>
              <Button href="#" variant="outline-light">
                Read the proposal
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-[24px] bg-deep-grove" aria-hidden />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonial                                                       */
/* ------------------------------------------------------------------ */

function Testimonial() {
  return (
    <section className="bg-warm-white pb-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-heading-sm font-light leading-[1.3]">
            “For the first time we can see how fast we reply, who’s carrying the
            load, and what’s ageing — without anyone leaving Gmail or paying for
            another tool.”
          </blockquote>
          <p className="mt-6 text-[15px] font-medium">
            Vishal Singh · Supplier Management, Etrav
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-stone-divider/40 bg-pure-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-heading-sm font-semibold">Argus</span>
          <p className="text-caption text-near-black-ink/60">
            © 2026 Argus · Email ticketing for support@etrav.in
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <WorkspaceStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <TrialCTA />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
