import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent-2" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl text-base text-muted sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
