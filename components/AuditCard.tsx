import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Audit } from "@/lib/types";

export function AuditCard({ audit }: { audit: Audit }) {
  return (
    <Link
      href={`/audits/${audit.slug}`}
      className="group flex flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:flex-row sm:items-center"
    >
      <div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-accent-2">
          <span>{audit.category}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{audit.readTime}</span>
        </div>
        <h3 className="mt-2 font-display text-xl tracking-tight sm:text-2xl">{audit.title}</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">{audit.excerpt}</p>
      </div>
      <ArrowUpRight
        size={22}
        className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
      />
    </Link>
  );
}
