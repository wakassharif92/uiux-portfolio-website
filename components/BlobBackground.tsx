export function BlobBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="bg-grid" />
      <div className="animate-blob absolute left-1/4 top-0 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
      <div className="animate-blob-slow absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent-2/15 blur-[120px]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[110px]" />
    </div>
  );
}
