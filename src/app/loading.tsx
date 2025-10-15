'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Pulse wave animation */}
        <div className="relative w-24 h-24">
          {/* Outer pulse */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-primary/30 animate-ping [animation-delay:0.2s]" />
          <div className="absolute inset-4 rounded-full bg-primary/40 animate-ping [animation-delay:0.4s]" />
          
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <span
                className="text-secondary text-2xl font-bold"
                >R</span>
              {/* <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-foreground">Ridipt Technologies</h2>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
          </div>
        </div>
      </div>
    </div>
  );
}
