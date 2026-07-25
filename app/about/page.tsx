import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { BlobBackground } from "@/components/BlobBackground";

export const metadata: Metadata = {
  title: "About — Waqas",
  description: "UI/UX designer and CRO audit expert, background and approach.",
};

const TIMELINE = [
  {
    period: "2023 — Present",
    role: "Independent UI/UX Designer & CRO Consultant",
    text: "Working directly with founders and product teams on design and conversion audits, across fintech, SaaS, healthcare, and e-commerce.",
  },
  {
    period: "2020 — 2023",
    role: "Senior Product Designer, B2B SaaS",
    text: "Led design for a sales CRM used by 400+ companies, owning everything from information architecture to the design system.",
  },
  {
    period: "2017 — 2020",
    role: "UX Designer, Digital Agency",
    text: "Shipped websites and mobile apps for clients across retail and travel, and ran the agency's first formal usability testing practice.",
  },
];

const SKILLS = {
  Design: ["UI Design", "Design Systems", "Prototyping", "Interaction Design", "Accessibility"],
  Research: ["Usability Testing", "Heuristic Evaluation", "Card Sorting", "Tree Testing", "User Interviews"],
  CRO: ["Funnel Audits", "A/B Testing", "Analytics Review", "Copy & Message Match", "Checkout Optimisation"],
};

const TOOLS = [
  "Figma",
  "Claude",
  "Antigravity",
  "Maze",
  "Hotjar",
  "GA4",
  "Amplitude",
  "FullStory",
  "Optimal Workshop",
  "Notion",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-20">
        <BlobBackground className="-z-10 opacity-70" />
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">About</span>
            <div className="mt-6 flex items-center gap-5">
              <Image
                src="/logo.png"
                alt="Logo"
                width={135}
                height={60}
                className="theme-logo h-12 w-auto shrink-0 sm:h-14"
              />
              <h1 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Waqas
              </h1>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              I&apos;m a UI/UX designer and CRO audit expert with nine years spent moving between
              the two disciplines most teams keep separate: making interfaces look and feel right,
              and proving, with data, that they actually work. I design mobile apps, websites, and
              web apps, then audit them the same way I&apos;d audit a client&apos;s, without ego
              about whose work it is.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Most of my work starts with a question nobody has quite answered yet: where, exactly,
              is this losing people? Everything after that, wireframes, prototypes, visual design,
              exists to answer it.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              I also use modern AI tools like Claude and Antigravity to sharpen the workflow:
              faster research synthesis, broader UX exploration, cleaner documentation, and tighter
              design QA. The tools speed up the thinking; the final call still comes from evidence,
              product context, and human judgement.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={TOOLS} />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Experience</h2>
          </Reveal>
          <StaggerGroup className="mt-10 flex flex-col gap-8">
            {TIMELINE.map((item) => (
              <StaggerItem
                key={item.role}
                className="grid gap-2 border-b border-line pb-8 last:border-0 sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <p className="font-mono text-sm text-accent-2">{item.period}</p>
                <div>
                  <h3 className="font-display text-xl tracking-tight">{item.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Skills</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-8 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items]) => (
              <StaggerItem key={category} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{category}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
