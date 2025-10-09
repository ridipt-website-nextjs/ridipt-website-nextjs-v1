'use client'
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-foreground/5 animate-gradient" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_100%)]" />

      <div className="relative flex flex-col items-center gap-8 px-4">
        {/* Enhanced Animated Logo Container */}
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 blur-3xl">
            <div className="w-32 h-32 rounded-full bg-accent-foreground/20 animate-pulse" />
          </div>

          {/* Multiple rotating rings with different speeds */}
          <div className="absolute inset-0">
            <div className="w-28 h-28 rounded-full border-[3px] border-transparent border-t-accent-foreground border-r-accent-foreground/40 animate-spin" />
          </div>
          <div className="absolute inset-3">
            <div className="w-22 h-22 rounded-full border-[3px] border-transparent border-b-accent-foreground/70 border-l-accent-foreground/30 animate-spin [animation-direction:reverse] [animation-duration:2s]" />
          </div>
          <div className="absolute inset-6">
            <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-accent-foreground/50 animate-spin [animation-duration:3s]" />
          </div>
          
          {/* Center Logo/Icon with enhanced styling */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-foreground via-accent-foreground/90 to-accent-foreground/70 flex items-center justify-center shadow-2xl shadow-accent-foreground/30 animate-pulse ring-4 ring-accent-foreground/10">
              {/* Icon with glow */}
              <div className="relative">
                <div className="absolute inset-0 blur-md">
                  <svg
                    className="w-8 h-8 text-background"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <svg
                  className="relative w-8 h-8 text-background"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-spin [animation-duration:4s]">
            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-accent-foreground/60 shadow-lg shadow-accent-foreground/50" />
          </div>
          <div className="absolute inset-0 animate-spin [animation-duration:5s] [animation-direction:reverse]">
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-accent-foreground/40 shadow-lg shadow-accent-foreground/30" />
          </div>
        </div>

        {/* Enhanced Brand Section */}
        <div className="flex flex-col items-center gap-4">
          {/* Brand name with gradient and animation */}
          <div className="relative">
            <div className="absolute inset-0 blur-xl">
              <h2 className="text-3xl font-bold text-accent-foreground/50">
                Ridipt Technologies
              </h2>
            </div>
            <h2 className="relative text-3xl font-bold bg-gradient-to-r from-accent-foreground via-accent-foreground to-accent-foreground/60 bg-clip-text text-transparent animate-pulse">
              Ridipt Technologies
            </h2>
          </div>
          
          {/* Enhanced Progress bar with glow */}
          <div className="relative w-64">
            {/* Background glow */}
            <div className="absolute inset-0 blur-lg">
              <div className="h-1.5 bg-accent-foreground/20 rounded-full" />
            </div>
            
            {/* Progress bar container */}
            <div className="relative w-64 h-1.5 bg-accent-foreground/10 rounded-full overflow-hidden ring-1 ring-accent-foreground/20">
              {/* Animated progress */}
              <div className="h-full bg-gradient-to-r from-accent-foreground via-accent-foreground/80 to-accent-foreground animate-[loading_1.5s_ease-in-out_infinite] shadow-lg shadow-accent-foreground/50" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
            </div>
          </div>
          
          {/* Loading text with dots */}
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-foreground/80 animate-pulse">
              Loading your experience
            </p>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-bounce [animation-delay:-0.3s] shadow-sm shadow-accent-foreground/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-bounce [animation-delay:-0.15s] shadow-sm shadow-accent-foreground/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-bounce shadow-sm shadow-accent-foreground/50" />
            </div>
          </div>

          {/* Additional info text */}
          <p className="text-xs text-muted-foreground/60 animate-pulse [animation-duration:2s]">
            Preparing something amazing...
          </p>
        </div>

        {/* Floating particles in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-accent-foreground/30 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent-foreground/20 animate-float [animation-delay:0.5s] [animation-duration:4s]" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-accent-foreground/25 animate-float [animation-delay:1s] [animation-duration:5s]" />
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent-foreground/30 animate-float [animation-delay:1.5s] [animation-duration:3.5s]" />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes loading {
          0%, 100% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 100%;
            margin-left: 0%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
