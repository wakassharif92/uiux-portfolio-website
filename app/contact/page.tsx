import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { BlobBackground } from "@/components/BlobBackground";

export const metadata: Metadata = {
  title: "Contact — Waqas",
  description: "Get in touch about UI/UX design work or a UX/CRO audit.",
};

const STEPS = [
  {
    step: "01",
    title: "Send a quick brief",
    text: "A link to your product, the problem you're seeing, and what you'd consider a win. No form to fill in, just an email.",
  },
  {
    step: "02",
    title: "15-minute call",
    text: "We talk through scope and whether an audit, a full redesign, or both makes sense for where you're at.",
  },
  {
    step: "03",
    title: "Proposal within 48 hours",
    text: "A clear scope, timeline, and price, no retainer required to get started.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-16 text-center sm:pt-24">
        <BlobBackground className="-z-10" />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">Contact</span>
            <h1 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s talk about your product.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              Whether it&apos;s a full redesign or a straight audit of what you&apos;ve already
              built, the first step is the same: tell me what&apos;s not working.
            </p>
            <a
              href="mailto:waqasbuttcreatives@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 font-display text-xl tracking-tight text-background transition-transform hover:scale-105"
            >
              waqasbuttcreatives@gmail.com
              <ArrowUpRight
                size={22}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl tracking-tight sm:text-3xl">
              What happens next
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((item) => (
              <StaggerItem key={item.step} className="rounded-2xl border border-line bg-surface p-6">
                <span className="font-mono text-sm text-accent-2">{item.step}</span>
                <h3 className="mt-3 font-display text-lg tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
