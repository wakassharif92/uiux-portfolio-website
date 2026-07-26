import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCheck, Gauge, Layers, Sparkles } from "lucide-react";
import { BlobBackground } from "@/components/BlobBackground";
import { Marquee } from "@/components/Marquee";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { AuditCard } from "@/components/AuditCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { projects } from "@/lib/projects";
import { audits } from "@/lib/audits";
import { testimonials } from "@/lib/testimonials";

const TOOLS = [
  "Figma",
  "UX Research",
  "CRO Audits",
  "Heuristic Evaluation",
  "Design Systems",
  "Claude",
  "Antigravity",
  "AI-assisted UX",
  "A/B Testing",
  "Prototyping",
  "Accessibility",
];

const STATS = [
  { value: "40+", label: "Products designed & audited" },
  { value: "32%", label: "Average conversion lift" },
  { value: "9 yrs", label: "In UI/UX & CRO" },
  { value: "0", label: "WCAG violations left behind" },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit before opinion",
    text: "Every engagement starts with a structured heuristic and funnel audit, not a moodboard. I want to know exactly where friction lives before proposing a single pixel.",
  },
  {
    step: "02",
    title: "Design against evidence",
    text: "Wireframes and prototypes get built to test specific hypotheses from the audit, not generic best practice. Every screen answers a question raised by real user behaviour.",
  },
  {
    step: "03",
    title: "Validate, then ship",
    text: "Usability testing and A/B experiments confirm a direction before it goes to engineering, so what ships is already proven to move the metric it was meant to move.",
  },
  {
    step: "04",
    title: "Use AI where it sharpens the work",
    text: "Claude, Antigravity, and AI-assisted workflows help me move faster through research synthesis, UX exploration, prototype refinement, and design QA, while final decisions stay grounded in evidence and human judgement.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredAudits = audits.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-24">
        <BlobBackground className="-z-10" />
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                  UI/UX Design &amp; CRO Audits
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                  Interfaces people
                  <br />
                  <span className="text-gradient italic">actually convert on.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-lg text-lg text-muted">
                  I&apos;m Waqas, a UI/UX designer and CRO audit expert. I design mobile
                  apps and websites, then tear my own work — and yours — apart to find exactly
                  where users get stuck.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
                  >
                    View the work
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/audits"
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
                  >
                    Read the audits
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="relative hidden lg:block">
              <Reveal delay={0.15} y={40} className="relative mx-auto w-full max-w-sm">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line shadow-2xl shadow-black/40">
                  <Image
                    src="/headshots.png"
                    alt="Waqas"
                    fill
                    priority
                    sizes="(min-width: 1024px) 24rem, 0px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </Reveal>
              <Reveal
                delay={0.45}
                y={30}
                className="absolute -bottom-6 -left-10 w-64 -rotate-2 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-background">
                    <CheckCheck size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Audit complete</p>
                    <p className="text-xs text-muted">Checkout conversion +29%</p>
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.55}
                y={30}
                className="absolute -top-8 -right-10 w-56 rotate-3 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-2 to-accent text-background">
                    <Gauge size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Heuristic scan</p>
                    <p className="text-xs text-muted">12/12 checks passed</p>
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.65}
                y={30}
                className="absolute -top-6 -left-8 hidden w-52 -rotate-6 rounded-2xl border border-line bg-surface/95 p-3.5 shadow-2xl shadow-black/40 backdrop-blur-md xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <Layers size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Design system</p>
                    <p className="text-xs text-muted">48 components shipped</p>
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.75}
                y={30}
                className="absolute -bottom-8 -right-12 hidden w-64 rotate-2 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-md xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d97757] via-accent to-accent-2 text-background">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI-native design</p>
                    <p className="text-xs text-muted">Claude + Antigravity workflows</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={TOOLS} />

      {/* Featured work */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Recent product design & CRO work"
              description="Mobile apps, websites, and web apps redesigned around real usability and conversion data."
            />
            <Reveal>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                View all work <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line px-6 py-20">
        <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-4xl tracking-tight text-gradient sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Reviews */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Testimonials"
              title="What it's like to work together"
              description="Feedback from founders and product teams across the work shown above."
            />
            <Reveal>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                View all testimonials <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How I work"
            title="Design decisions, backed by evidence"
            description="A CRO audit mindset applied to every design engagement, not bolted on after the fact."
          />
          <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map((item) => (
              <StaggerItem
                key={item.step}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <span className="font-mono text-sm text-accent-2">{item.step}</span>
                <h3 className="mt-4 font-display text-xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Featured audits */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Read the audits"
              title="UX & CRO audits, written up in full"
              description="The same teardown process I run for clients, published so you can see exactly how I think."
            />
            <Reveal>
              <Link
                href="/audits"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                View all audits <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 flex flex-col gap-4">
            {featuredAudits.map((audit) => (
              <StaggerItem key={audit.slug}>
                <AuditCard audit={audit} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center sm:py-20">
            <BlobBackground className="-z-0 opacity-70" />
            <div className="relative">
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                Got a product that isn&apos;t
                <br />
                <span className="text-gradient italic">converting the way it should?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted">
                Let&apos;s find out why, then fix it.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-105"
              >
                Start a conversation
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
