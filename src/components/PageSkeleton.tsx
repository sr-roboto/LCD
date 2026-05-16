'use client';

/* ─────────────────────────────────────────────────────────────
   PageSkeleton
   Muestra un placeholder animado mientras la página carga.
   Usar con Suspense o con un estado isLoading en el layout.
────────────────────────────────────────────────────────────── */

function Shimmer({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
        }} />
    </div>
  );
}

function ShimmerLight({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ background: 'rgba(18,19,107,0.07)' }}>
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(18,19,107,0.06) 50%, transparent 100%)',
        }} />
    </div>
  );
}

export default function PageSkeleton() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden py-16 lg:py-24 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left text */}
            <div className="space-y-5">
              <Shimmer className="h-7 w-56 rounded-full" />
              <div className="space-y-3 pt-2">
                <Shimmer className="h-12 w-4/5" />
                <Shimmer className="h-12 w-3/5" />
                <Shimmer className="h-12 w-2/3" />
              </div>
              <Shimmer className="h-1 w-16 rounded-full" />
              <div className="space-y-2 pt-1">
                <Shimmer className="h-5 w-full max-w-lg" />
                <Shimmer className="h-5 w-4/5 max-w-lg" />
              </div>
              <div className="flex gap-4 pt-2">
                <Shimmer className="h-12 w-44 rounded-full" />
                <Shimmer className="h-12 w-52 rounded-full" />
              </div>
            </div>

            {/* Right image */}
            <Shimmer className="w-full aspect-[4/3] rounded-2xl" />
          </div>
        </div>

        {/* Brands strip */}
        <div className="max-w-7xl mx-auto mt-12 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Shimmer className="h-3 w-48 mx-auto mb-4 rounded-full" />
          <div className="flex gap-8 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <Shimmer key={i} className="h-3 w-24 flex-shrink-0 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* ── SOLUCIONES ── */}
      <div className="py-24 px-4 sm:px-6" style={{ background: '#F0F4FF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <ShimmerLight className="h-3 w-24 mx-auto rounded-full" />
            <ShimmerLight className="h-10 w-64 mx-auto" />
            <ShimmerLight className="h-4 w-80 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(18,19,107,0.08)', boxShadow: '0 2px 16px rgba(18,19,107,0.07)' }}>
                <ShimmerLight className="h-48 w-full rounded-none" />
                <div className="p-6 space-y-3">
                  <ShimmerLight className="h-5 w-3/4 mx-auto" />
                  <ShimmerLight className="h-3 w-2/3 mx-auto" />
                  <ShimmerLight className="h-3 w-1/2 mx-auto" />
                  <div className="flex gap-3 justify-center pt-2">
                    <ShimmerLight className="h-8 w-24 rounded-full" />
                    <ShimmerLight className="h-8 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VIDEO ── */}
      <div className="py-20 px-4 sm:px-6" style={{ background: 'linear-gradient(160deg,#0f172a 0%,#12136b 100%)' }}>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Shimmer className="h-3 w-20 mx-auto rounded-full" />
            <Shimmer className="h-8 w-72 mx-auto" />
          </div>
          <Shimmer className="w-full aspect-video rounded-2xl" />
        </div>
      </div>

      {/* ── CLIENTES ── */}
      <div className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <ShimmerLight className="h-3 w-32 mx-auto rounded-full" />
          <ShimmerLight className="h-8 w-80 mx-auto" />
          <ShimmerLight className="h-48 w-full max-w-4xl mx-auto mt-8 rounded-2xl" />
        </div>
      </div>

      {/* ── POR QUÉ ── */}
      <div className="py-24 px-4 sm:px-6" style={{ background: 'linear-gradient(135deg,#080a2e 0%,#12136b 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <Shimmer className="h-3 w-24 mx-auto rounded-full" />
            <Shimmer className="h-10 w-72 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl p-8 flex flex-col items-center space-y-4"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                <Shimmer className="w-16 h-16 rounded-xl" />
                <Shimmer className="h-5 w-40" />
                <Shimmer className="h-3 w-full" />
                <Shimmer className="h-3 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
