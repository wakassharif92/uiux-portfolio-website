import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
        <Image
          src={project.heroImage.src}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent-2">
            {project.category}
          </p>
          <h3 className="mt-1.5 font-display text-2xl tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.client}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
        />
      </div>
    </Link>
  );
}
