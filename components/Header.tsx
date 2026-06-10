export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* FluxIA — Flux Wave mark */}
          <svg width="40" height="26" viewBox="4 10 56 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <defs>
              <linearGradient id="hdr-wave" x1="8" y1="0" x2="54" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a78bfa"/>
                <stop offset="100%" stopColor="#3b82f6"/>
              </linearGradient>
            </defs>
            <path d="M 8 42 Q 18 36 30 42 Q 42 48 54 42" stroke="#a78bfa" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.3"/>
            <path d="M 8 30 Q 18 24 30 30 Q 42 36 54 30" stroke="url(#hdr-wave)" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.7"/>
            <path d="M 8 18 Q 20 12 32 18 Q 44 24 54 18" stroke="url(#hdr-wave)" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <circle cx="8" cy="18" r="4" fill="#facc15"/>
          </svg>
          <div className="flex items-baseline gap-1.5">
            <span className="text-white font-extrabold text-lg tracking-tight">
              Flux<span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">IA</span>
            </span>
            <span className="text-gray-600 text-xs font-medium hidden sm:inline">Skills Pack</span>
          </div>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || 'https://pay.kiwify.com.br/L9dlZIF'}
          className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
          target="_blank" rel="noopener noreferrer"
        >
          Quero por R$97 →
        </a>
      </div>
    </header>
  )
}
