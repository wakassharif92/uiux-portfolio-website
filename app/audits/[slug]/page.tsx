import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MockScreen } from "@/components/MockScreen";
import { ScoreBar } from "@/components/ScoreBar";
import { AuditBody } from "@/components/AuditBody";
import { audits, getAudit } from "@/lib/audits";

export function generateStaticParams() {
  return audits.map((audit) => ({ slug: audit.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audit = getAudit(slug);
  if (!audit) return {};
  return {
    title: `${audit.title} — Waqas`,
    description: audit.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function AuditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audit = getAudit(slug);
  if (!audit) notFound();

  const index = audits.findIndex((a) => a.slug === slug);
  const next = audits[(index + 1) % audits.length];

  return (
    <article className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            href="/audits"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Back to audits
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
            <span>{audit.category}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{formatDate(audit.date)}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{audit.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">{audit.title}</h1>
          <p className="mt-5 text-lg text-muted">{audit.excerpt}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {audit.image ? (
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
              <Image
                src={audit.image.src}
                alt={audit.title}
                width={audit.image.width}
                height={audit.image.height}
                className="h-auto w-full"
                priority
              />
            </div>
          ) : audit.mock ? (
            <MockScreen kind={audit.mock.kind} layout={audit.mock.layout} seed={audit.mock.seed} />
          ) : null}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Scorecard · {audit.subject}
            </p>
            <div className="mt-5 flex flex-col gap-5">
              {audit.scores.map((s) => (
                <ScoreBar key={s.label} label={s.label} score={s.score} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14">
          <AuditBody blocks={audit.body} />
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Next audit</p>
          <Link href={`/audits/${next.slug}`} className="group mt-4 flex items-center justify-between gap-6">
            <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-accent-2 sm:text-3xl">
              {next.title}
            </h3>
            <ArrowUpRight
              size={24}
              className="shrink-0 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-2"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
