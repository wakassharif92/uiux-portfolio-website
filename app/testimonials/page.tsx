import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials — Waqas",
  description: "What clients say about working together on UI/UX design and CRO audits.",
};

export default function TestimonialsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">Testimonials</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            What it&apos;s like to work together.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Feedback from founders and product teams across the design and audit work shown in{" "}
            <Link href="/work" className="underline decoration-line underline-offset-4 hover:text-foreground">
              Work
            </Link>
            . Names are shortened and roles generalised to keep client details private.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
