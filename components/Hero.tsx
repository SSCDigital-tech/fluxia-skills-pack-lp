'use client'
const CHECKOUT_URL = process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || 'https://pay.kiwify.com.br/L9dlZIF'
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 pt-32">
      {/* BG effects */}
      <div className="absolute inset-0 bg-[#0a0a0a] bg-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[#7c3aed]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#2563eb]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#7c3aed]/35 rounded-full px-5 py-2 mb-10 text-sm font-semibold text-[#a78bfa] tracking-wide">
          <span className="w-2 h-2 bg-[#a78bfa] rounded-full animate-pulse" />
          120 Fluxos Profissionais · PT-BR Nativo · Acesso Imediato
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.0] tracking-tight mb-6">
          <span className="text-white">Prompt solto</span><br />
          <span className="text-[#6b7280]">= resultado solto.</span><br />
          <span className="gradient-text">Instale método</span>{' '}
          <span className="text-white">no Claude.</span>
        </h1>

        {/* Sub */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          120 fluxos profissionais organizados por área — marketing, vendas,
          conteúdo, automação e mais. Em PT-BR. Prontos para usar hoje.
        </p>

        {/* Social proof mini */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><span className="text-[#22c55e]">✓</span> 120 fluxos</span>
          <span className="text-gray-700">·</span>
          <span className="flex items-center gap-1.5"><span className="text-[#22c55e]">✓</span> 12 categorias</span>
          <span className="text-gray-700">·</span>
          <span className="flex items-center gap-1.5"><span className="text-[#22c55e]">✓</span> PT-BR nativo</span>
          <span className="text-gray-700">·</span>
          <span className="flex items-center gap-1.5"><span className="text-[#22c55e]">✓</span> Funciona no plano gratuito</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-200 pulse-glow hover:scale-105"
            target="_blank" rel="noopener noreferrer"
          >
            Quero meus fluxos agora
            <span className="bg-[#facc15] text-[#0a0a0a] text-lg font-extrabold px-3 py-1 rounded-lg">R$47</span>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-600">
            <span>🔒 Pagamento 100% seguro</span>
            <span>⚡ Acesso imediato</span>
            <span>🛡️ Garantia 7 dias</span>
            <span>💳 Pagamento único</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center mb-8 opacity-40">
          <span className="text-gray-500 text-xs mb-2 tracking-widest uppercase">veja mais</span>
          <svg className="animate-bounce w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Mockup */}
        <div className="max-w-2xl mx-auto bg-[#111111] border border-[#7c3aed]/20 rounded-2xl p-6 glow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <div className="w-3 h-3 rounded-full bg-[#facc15]" />
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-3 text-xs text-gray-600 font-mono">Claude · FluxIA › copy-anuncio-conversao</span>
          </div>
          <div className="space-y-3 text-left">
            <div className="bg-[#7c3aed]/12 border border-[#7c3aed]/20 rounded-xl px-4 py-3 text-sm text-gray-300">
              <span className="text-[#a78bfa] font-semibold text-xs uppercase tracking-wider block mb-1">Fluxo ativo: Copy de Anúncio de Conversão</span>
              Produto: FluxIA Skills Pack · Público: empreendedores digitais · Plataforma: Instagram Feed
            </div>
            <div className="bg-[#1a1a1a] rounded-xl px-4 py-4 text-sm text-gray-200 leading-relaxed">
              <span className="text-[#22c55e] font-semibold text-xs uppercase tracking-wider block mb-2">→ Output profissional</span>
              "Você ainda usa o Claude com prompts soltos? É por isso que as respostas saem genéricas. Com o FluxIA, você instala um fluxo profissional e o Claude passa a entregar resultado de especialista — copy, estratégia, análise. Tudo em PT-BR. R$47 único. Comente FLUXO."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
