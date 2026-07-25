import { Reveal } from "./Reveal";
import type { AuditBlock } from "@/lib/types";

export function AuditBody({ blocks }: { blocks: AuditBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <Reveal key={i}>
                <p className="leading-relaxed text-muted">{block.text}</p>
              </Reveal>
            );
          case "heading":
            return (
              <Reveal key={i}>
                <h2 className="font-display text-2xl tracking-tight">{block.text}</h2>
              </Reveal>
            );
          case "list":
            return (
              <Reveal key={i}>
                <ul className="flex flex-col gap-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          case "quote":
            return (
              <Reveal key={i}>
                <blockquote className="border-l-2 border-accent-2 pl-5 font-display text-xl italic leading-snug">
                  {block.text}
                </blockquote>
              </Reveal>
            );
          case "stat-row":
            return (
              <Reveal key={i}>
                <div className="grid grid-cols-2 gap-6 rounded-xl border border-line bg-surface p-6 sm:grid-cols-3">
                  {block.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl tracking-tight text-gradient">{stat.value}</p>
                      <p className="mt-1 text-sm text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
