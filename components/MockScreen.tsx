"use client";

import { motion } from "motion/react";
import type { MockKind, MockLayout } from "@/lib/types";

// Pure hash: same (seed, index) always yields the same value, no matter how
// many times or in what order it's called — safe under Strict Mode's
// double-invoked renders, unlike a stateful PRNG generator.
function noise(seed: number, index: number) {
  const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

// Rounded to one decimal place: browsers normalize stored CSS length/percentage
// values to limited precision, so overly precise numbers cause React to see a
// (harmless) mismatch between the value it set and the value it reads back.
function span(seed: number, index: number, min: number, range: number) {
  return Math.round((min + noise(seed, index) * range) * 10) / 10;
}

const PALETTES = [
  { a: "from-[#7c5cff] to-[#cbff4d]", solid: "bg-[#7c5cff]" },
  { a: "from-[#cbff4d] to-[#7c5cff]", solid: "bg-[#cbff4d]" },
  { a: "from-[#7c5cff] to-[#4dd8ff]", solid: "bg-[#4dd8ff]" },
  { a: "from-[#ff6dc4] to-[#7c5cff]", solid: "bg-[#ff6dc4]" },
];

type LayoutProps = { seed: number; palette: (typeof PALETTES)[number] };

function Bar({ w, h = "h-2", tone = "bg-white/10" }: { w: number; h?: string; tone?: string }) {
  return <div className={`${h} ${tone} rounded-full`} style={{ width: `${w}%` }} />;
}

function Dashboard({ seed, palette }: LayoutProps) {
  const bars = Array.from({ length: 6 }, (_, i) => span(seed, i, 30, 65));
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="flex w-1/6 flex-col gap-2 rounded-lg bg-white/5 p-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`h-4 rounded-md ${i === 1 ? palette.solid : "bg-white/10"}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-white/5 p-2">
              <div className={`mb-2 h-1.5 w-1/2 rounded-full bg-gradient-to-r ${palette.a}`} />
              <Bar w={span(seed, 10 + i, 60, 30)} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-white/5 p-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm bg-gradient-to-t ${palette.a} opacity-70`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Landing({ seed, palette }: LayoutProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <div className="flex flex-col items-center gap-2">
        <Bar w={55} h="h-3" tone="bg-white/20" />
        <Bar w={38} h="h-3" tone="bg-white/20" />
      </div>
      <div className={`h-2.5 w-20 rounded-full bg-gradient-to-r ${palette.a}`} />
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1.5 rounded-lg bg-white/5 p-2">
            <div className={`h-6 w-6 rounded-md ${palette.solid} opacity-60`} />
            <Bar w={span(seed, i, 40, 40)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Checkout({ seed, palette }: LayoutProps) {
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="flex w-3/5 flex-col gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-md bg-white/5 p-1.5">
            <Bar w={span(seed, i, 20, 10)} h="h-1.5" tone="bg-white/15" />
          </div>
        ))}
      </div>
      <div className="flex w-2/5 flex-col gap-2 rounded-lg bg-white/5 p-2">
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-md bg-white/15" />
          <div className="flex flex-1 flex-col justify-center gap-1">
            <Bar w={70} h="h-1.5" />
            <Bar w={40} h="h-1.5" tone="bg-white/10" />
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <Bar w={30} h="h-2" tone="bg-white/15" />
          <div className={`h-2 w-8 rounded-full bg-gradient-to-r ${palette.a}`} />
        </div>
        <div className={`h-6 w-full rounded-md bg-gradient-to-r ${palette.a} opacity-90`} />
      </div>
    </div>
  );
}

function Feed({ seed, palette }: LayoutProps) {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex items-center gap-1.5">
        <div className="h-4 w-1/3 rounded-full bg-white/10" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 w-8 rounded-full ${i === 0 ? palette.solid + " opacity-70" : "bg-white/5"}`}
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
            <div className={`h-7 w-7 shrink-0 rounded-md bg-gradient-to-br ${palette.a} opacity-50`} />
            <div className="flex flex-1 flex-col gap-1">
              <Bar w={span(seed, i * 2, 50, 30)} h="h-1.5" />
              <Bar w={span(seed, i * 2 + 1, 30, 20)} h="h-1.5" tone="bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Onboarding({ palette }: LayoutProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <div className={`h-20 w-20 rounded-[1.75rem] bg-gradient-to-br ${palette.a} opacity-80`} />
      <div className="flex flex-col items-center gap-2">
        <Bar w={48} h="h-2.5" tone="bg-white/20" />
        <Bar w={64} h="h-1.5" tone="bg-white/10" />
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? palette.solid : "bg-white/15"}`} />
        ))}
      </div>
      <div className={`h-8 w-2/3 rounded-full bg-gradient-to-r ${palette.a}`} />
    </div>
  );
}

const LAYOUTS: Record<MockLayout, (p: LayoutProps) => React.ReactElement> = {
  dashboard: Dashboard,
  landing: Landing,
  checkout: Checkout,
  feed: Feed,
  onboarding: Onboarding,
};

export function MockScreen({
  kind,
  layout,
  seed,
  className = "",
}: {
  kind: MockKind;
  layout: MockLayout;
  seed: number;
  className?: string;
}) {
  const palette = PALETTES[seed % PALETTES.length];
  const Layout = LAYOUTS[layout];

  return (
    <motion.div
      whileHover={{ rotateX: -2, rotateY: 3, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121214] shadow-2xl shadow-black/40 ${className}`}
    >
      {kind === "browser" ? (
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#1a1a1e] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <div className="ml-2 h-4 flex-1 max-w-40 rounded-full bg-white/5" />
        </div>
      ) : (
        <div className="flex items-center justify-center bg-[#1a1a1e] py-1.5">
          <div className="h-1.5 w-10 rounded-full bg-white/15" />
        </div>
      )}
      <div className={kind === "browser" ? "aspect-[16/10]" : "aspect-[9/17]"}>
        <Layout seed={seed} palette={palette} />
      </div>
      {kind === "mobile" && (
        <div className="flex items-center justify-center bg-[#1a1a1e] py-1.5">
          <div className="h-1 w-16 rounded-full bg-white/20" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" />
    </motion.div>
  );
}
