import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/WorkGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Waqas",
  description: "UI/UX case studies across mobile apps, websites, and web apps.",
};

export default function WorkPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">Work</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Case studies in usability and conversion.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Every project below started with an audit before a single screen was designed.
          </p>
        </Reveal>

        <div className="mt-14">
          <WorkGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
