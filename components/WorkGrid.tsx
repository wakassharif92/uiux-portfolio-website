"use client";

import { useState } from "react";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

const CATEGORIES = ["All", "Dashboards", "Websites", "Mobile Apps"] as const;

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.group === active);

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

      <StaggerGroup key={active} className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
