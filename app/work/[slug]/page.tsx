import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Waqas`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <section className="px-6 pb-16 pt-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
              {project.category}
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{project.summary}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-line py-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Company</p>
                <p className="mt-1 text-sm">{project.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Category</p>
                <p className="mt-1 text-sm">{project.category}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Service Provided</p>
                <p className="mt-1 text-sm">UI/UX Design</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
          <Image
            src={project.heroImage.src}
            alt={project.title}
            width={project.heroImage.width}
            height={project.heroImage.height}
            className="h-auto w-full"
            priority
          />
        </Reveal>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight">The problem</h2>
            <div className="mt-4 flex flex-col gap-3">
              {project.problem.map((line, i) => (
                <p key={i} className="text-muted leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl tracking-tight">The solution</h2>
            <div className="mt-4 flex flex-col gap-3">
              {project.solution.map((line, i) => (
                <p key={i} className="text-muted leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {project.process && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight">Process</h2>
            </Reveal>
            <StaggerGroup className="mt-6 flex flex-col gap-4">
              {project.process.map((step, i) => (
                <StaggerItem
                  key={i}
                  className="flex gap-4 rounded-xl border border-line bg-surface p-5"
                >
                  <span className="font-mono text-sm text-accent-2">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-muted">{step}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {project.results && project.results.length > 0 && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-surface p-8">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight">Results</h2>
            </Reveal>
            <StaggerGroup className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {project.results.map((result) => (
                <StaggerItem key={result.label}>
                  <p className="font-display text-4xl tracking-tight text-gradient">{result.value}</p>
                  <p className="mt-2 text-sm text-muted">{result.label}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight">Gallery</h2>
            </Reveal>
            <StaggerGroup className="mt-8 grid gap-8 sm:grid-cols-2">
              {project.gallery.map((shot, i) => (
                <StaggerItem key={i}>
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      width={shot.width}
                      height={shot.height}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted">{shot.caption}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      <section className="border-t border-line px-6 py-16">
        <Reveal className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Next project</p>
          <Link href={`/work/${next.slug}`} className="group mt-4 flex items-center justify-between gap-6">
            <h3 className="font-display text-3xl tracking-tight transition-colors group-hover:text-accent-2 sm:text-4xl">
              {next.title}
            </h3>
            <ArrowUpRight
              size={28}
              className="shrink-0 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-2"
            />
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
