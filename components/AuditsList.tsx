"use client";

import { useState } from "react";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { AuditCard } from "./AuditCard";
import type { Audit } from "@/lib/types";

const CATEGORIES = ["All", "Heuristic Evaluation", "CRO Teardown", "Case Study"] as const;

export function AuditsList({ audits }: { audits: Audit[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = active === "All" ? audits : audits.filter((a) => a.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === cat
                ? "border-accent-2 bg-accent-2 text-background"
                : "border-line-strong bg-surface text-muted hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <StaggerGroup key={active} className="mt-10 flex flex-col gap-4">
        {filtered.map((audit) => (
          <StaggerItem key={audit.slug}>
            <AuditCard audit={audit} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
