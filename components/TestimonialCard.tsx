import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
      <Quote className="text-accent-2" size={22} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">{testimonial.quote}</p>
      <div className="mt-6 border-t border-line pt-4">
        <p className="text-sm font-medium">{testimonial.name}</p>
        <p className="text-xs text-muted">{testimonial.role}</p>
      </div>
    </div>
  );
}
