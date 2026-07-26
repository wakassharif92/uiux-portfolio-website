import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-tight">
              Let&apos;s make your product<span className="text-accent-2">.</span>
              <br />
              easier to use, and use more.
            </p>
            <a
              href="mailto:waqasbuttcreatives@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              waqasbuttcreatives@gmail.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/work" className="text-muted transition-colors hover:text-foreground">Work</Link></li>
              <li><Link href="/audits" className="text-muted transition-colors hover:text-foreground">Audits</Link></li>
              <li><Link href="/testimonials" className="text-muted transition-colors hover:text-foreground">Testimonials</Link></li>
              <li><Link href="/about" className="text-muted transition-colors hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-muted transition-colors hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Waqas. All rights reserved.</p>
          <p>UI/UX Design &amp; CRO Audits</p>
        </div>
      </div>
    </footer>
  );
}
