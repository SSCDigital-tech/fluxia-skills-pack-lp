'use client'
const CHECKOUT_URL = process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || 'https://pay.kiwify.com.br/L9dlZIF'
export default function FinalCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{background:'linear-gradient(135deg,#0d0818 0%,#0a0a0a 60%)'}}>
      <div className="absolute inset-0 bg-[#7c3aed]/8 blur-[200px] rounded-full w-[800px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="badge mb-8 mx-auto w-fit">Última chamada</div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Pare de improvisar<br />
          com IA.<br />
          <span className="gradient-text">Instale método hoje.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
          120 fluxos prontos · PT-BR nativo · 12 categorias
        </p>
        <div className="flex flex-col items-center gap-5">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xl px-14 py-7 rounded-2xl transition-all duration-200 pulse-glow hover:scale-105"
            target="_blank" rel="noopener noreferrer"
          >
            Quero meus fluxos agora
            <span className="bg-[#facc15] text-[#0a0a0a] text-lg font-extrabold px-4 py-1.5 rounded-lg">R$47</span>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-600">
            <span>🔒 Pagamento seguro</span>
            <span>⚡ Acesso imediato</span>
            <span>🛡️ Garantia 7 dias</span>
            <span>💳 Pagamento único</span>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-700 max-w-lg mx-auto">
          FluxIA Skills Pack é um produto independente e não possui afiliação oficial com a Anthropic ou Claude.
        </p>
      </div>
    </section>
  )
}
