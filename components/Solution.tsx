'use client'
const CHECKOUT_URL = process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || 'https://pay.kiwify.com.br/L9dlZIF'
export default function Solution() {
  const passos = [
    { num: '01', title: 'Escolha a área', desc: '14 categorias organizadas por tipo de trabalho — copy, marketing, vendas, gestão, automação e mais.' },
    { num: '02', title: 'Abra a skill', desc: 'Instruções prontas, contexto completo, prompt especializado. O Claude já sabe o que fazer.' },
    { num: '03', title: 'Cole e use', desc: 'Resultado profissional imediato. Sem setup técnico, sem programar, sem tentar e errar.' },
  ]
  return (
    <section className="py-24 px-4 bg-[#111111] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge mb-6">A solução</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            FluxIA instala o método.<br />
            <span className="gradient-text">Você só usa.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cada skill do FluxIA é um arquivo estruturado que você cola no Claude
            e ele passa a trabalhar como um profissional treinado para aquela tarefa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {passos.map((p) => (
            <div key={p.num} className="relative card-purple p-8">
              <div className="text-5xl font-extrabold text-[#7c3aed]/20 mb-4 leading-none">{p.num}</div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Before/After */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-[#1a0a0a] border border-red-900/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Sem FluxIA — prompt solto</span>
            </div>
            <div className="bg-[#111111] rounded-xl p-4 mb-3 text-sm text-gray-400 italic">
              "Escreve um anúncio para minha loja de roupas"
            </div>
            <div className="bg-[#0d0d0d] rounded-xl p-4 text-sm text-gray-400">
              "Venha conhecer nossa loja! Temos as melhores roupas com os melhores preços. Não perca!"
            </div>
            <p className="text-red-400 text-xs mt-3">⚠ Genérico. Não converte.</p>
          </div>
          <div className="bg-[#0a1a0a] border border-[#22c55e]/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider">Com FluxIA — fluxo instalado</span>
            </div>
            <div className="bg-[#111111] rounded-xl p-4 mb-3 text-sm text-[#a78bfa]">
              Fluxo: Copy de Anúncio · Feed Instagram · Público: mulheres 25-35 · Produto: moda casual
            </div>
            <div className="bg-[#0d0d0d] rounded-xl p-4 text-sm text-gray-300">
              "Sua roupa, sua identidade. Peças que combinam com quem você é — sem sacrificar o conforto. Frete grátis hoje. Qual look te representa?"
            </div>
            <p className="text-[#22c55e] text-xs mt-3">✓ Contextualizado. Persuasivo. Pronto para usar.</p>
          </div>
        </div>

        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-[#111111] border border-[#22c55e]/20 rounded-xl px-5 py-3 text-sm text-[#22c55e]">
            ✓ Funciona com o plano gratuito do Claude · Sem instalação técnica
          </span>
        </div>
      </div>
    </section>
  )
}
