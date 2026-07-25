import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AuditsList } from "@/components/AuditsList";
import { audits } from "@/lib/audits";

export const metadata: Metadata = {
  title: "Audits — Waqas",
  description: "UI/UX heuristic evaluations and CRO teardowns, written up in full.",
};

export default function AuditsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">Audits</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Read how I actually think about UX.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Heuristic evaluations, CRO teardowns, and full case-study audits, published the way I&apos;d
            hand them to a client.
          </p>
        </Reveal>

        <div className="mt-14">
          <AuditsList audits={audits} />
        </div>
      </div>
    </section>
  );
}
