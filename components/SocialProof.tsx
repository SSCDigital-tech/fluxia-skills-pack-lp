import Reveal from './Reveal'

const proofPoints = [
  {
    icon: '✅',
    color: 'from-[#22c55e] to-[#059669]',
    title: 'Vendas confirmadas e rastreadas',
    detail: 'Compras registradas e validadas via pixel oficial (EMQ 9,3/10 — entre os mais altos da plataforma). Sem tráfego inflado, sem dado falso.',
  },
  {
    icon: '📚',
    color: 'from-[#7c3aed] to-[#a855f7]',
    title: '1.166 arquivos reais, não prometidos',
    detail: 'Cada skill é um arquivo .md catalogado por categoria. Você recebe o índice completo antes de instalar a primeira — veja o que leva antes de comprar.',
  },
  {
    icon: '🛡️',
    color: 'from-[#2563eb] to-[#7c3aed]',
    title: 'Garantia incondicional de 7 dias',
    detail: 'Acessou e não viu valor? E-mail para suporte e devolvemos 100% em até 7 dias, sem perguntas. Zero risco para você.',
  },
]
export default function SocialProof() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge mb-6">Por que confiar</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Prova real,<br />
            <span className="gradient-text">não promessa vazia</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Em vez de depoimentos genéricos, aqui estão fatos que você pode conferir.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {proofPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card-border card-hover p-8 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-xl mb-5`}>
                  {p.icon}
                </div>
                <p className="text-white font-semibold mb-3">{p.title}</p>
                <p className="text-gray-400 leading-relaxed text-sm flex-1">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center mb-10">
            <div>
              <div className="text-4xl font-extrabold gradient-text mb-1">1.166</div>
              <div className="text-sm text-gray-500">skills profissionais</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold gradient-text mb-1">14</div>
              <div className="text-sm text-gray-500">categorias de negócio</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold gradient-text mb-1">PT-BR</div>
              <div className="text-sm text-gray-500">nativo, não traduzido</div>
            </div>
          </div>
          {/* Verified trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-5 bg-[#111111] border border-[#7c3aed]/20 rounded-2xl px-8 py-5 max-w-2xl mx-auto text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-[#22c55e] text-base">✅</span>
              <span>Vendas rastreadas via Kiwify</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">·</span>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-[#22c55e] text-base">🛡️</span>
              <span>Garantia de 7 dias ativa</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">·</span>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-[#22c55e] text-base">⚡</span>
              <span>Entrega automática e imediata</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">·</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[#22c55e] font-medium">Pixel EMQ 9,3/10</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
