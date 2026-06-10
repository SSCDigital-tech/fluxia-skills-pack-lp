export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-extrabold text-sm leading-none">F</span>
          </div>
          <span className="text-white font-extrabold text-lg tracking-tight">FluxIA</span>
          <span className="text-gray-600 text-xs font-medium hidden sm:inline">Skills Pack</span>
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
