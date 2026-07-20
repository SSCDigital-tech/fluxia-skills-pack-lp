import Reveal from './Reveal'

const proofPoints = [
  {
    icon: '✅',
    color: 'from-[#22c55e] to-[#059669]',
    title: 'Vendas confirmadas e rastreadas',
    detail: 'Compras rastreadas por integração oficial de Pixel e servidor (Meta CAPI). Sem tráfego inflado, sem dado falso.',
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

          {/* Buyer activity indicator */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-[#0d1f0d] border border-[#22c55e]/30 rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[#22c55e] font-semibold text-sm">Primeiros compradores já instalando o método</span>
            </div>
          </div>

          {/* Verified trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-5 bg-[#111111] border border-[#7c3aed]/20 rounded-2xl px-8 py-5 max-w-2xl mx-auto text-sm mb-16">
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
              <span className="text-[#22c55e] font-medium">Pixel + servidor integrados</span>
            </div>
          </div>

          {/* Screenshots de skill em uso */}
          <div className="text-center mb-10">
            <div className="badge mb-4">Veja na prática</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Uma skill real, funcionando agora</h3>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">Não é prompt solto. É método instalado. Veja a diferença entre abrir o Claude do zero e abrir com uma skill do FluxIA.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Mockup 1: Skill file */}
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-[#1a1a1a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#facc15]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-2">📁 marketing › copy-anuncio-conversao.md</span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed">
                <p className="text-[#a78bfa] mb-2 font-bold"># SKILL: Copy de Anúncio de Conversão</p>
                <p className="text-gray-500 mb-1">## Contexto</p>
                <p className="text-gray-400 mb-3">Você é um copywriter especializado em anúncios de resposta direta para o mercado brasileiro. Seu objetivo é criar copy que para o scroll, gera identificação e converte.</p>
                <p className="text-gray-500 mb-1">## Inputs</p>
                <p className="text-[#7c3aed]">- Produto: [nome + benefício principal]</p>
                <p className="text-[#7c3aed]">- Público: [perfil + dor principal]</p>
                <p className="text-[#7c3aed]">- Plataforma: [Feed / Stories / Reels]</p>
                <p className="text-gray-500 mt-3 mb-1">## Output esperado</p>
                <p className="text-gray-400">Hook + problema + promessa + CTA. Pronto para subir.</p>
              </div>
            </div>

            {/* Mockup 2: Claude output */}
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-[#1a1a1a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#facc15]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <span className="text-xs text-gray-500 ml-2">Claude · FluxIA › copy-anuncio-conversao</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl px-4 py-3 text-xs text-gray-300">
                  <span className="text-[#a78bfa] font-semibold block mb-1">Você (skill instalada):</span>
                  Produto: consultoria financeira para MEI · Público: empreendedores · Plataforma: Instagram Feed
                </div>
                <div className="bg-[#1a1a1a] rounded-xl px-4 py-4 text-xs text-gray-200 leading-relaxed">
                  <span className="text-[#22c55e] font-semibold block mb-2">→ Output profissional:</span>
                  <span className="text-gray-300">&ldquo;Seu dinheiro some no fim do mês e você não sabe para onde foi? Isso não é falta de disciplina — é falta de método. Em 3 semanas, meus clientes MEI saem do vermelho sem cortar o que gostam. Clique e veja como.&rdquo;</span>
                  <div className="mt-2 pt-2 border-t border-[#2a2a2a] text-gray-500">Hook + problema + promessa + CTA · Pronto para subir ✓</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup 3: Skill de gestão */}
          <div className="bg-[#111111] border border-[#7c3aed]/15 rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="bg-[#0d0d0d] px-4 py-3 flex items-center justify-between border-b border-[#1a1a1a]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#facc15]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <span className="text-xs text-gray-500 ml-2">Claude · FluxIA › analise-financeira-negocio</span>
              </div>
              <span className="text-xs text-[#22c55e] font-medium">⚙️ Operações e Gestão</span>
            </div>
            <div className="p-5 space-y-3">
              <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl px-4 py-3 text-xs text-gray-300">
                <span className="text-[#a78bfa] font-semibold block mb-1">Você (skill instalada):</span>
                Receita: R$18.000 · Custo fixo: R$6.200 · Custo variável: R$4.100 · Meta crescimento: 20% em 60 dias
              </div>
              <div className="bg-[#1a1a1a] rounded-xl px-4 py-4 text-xs text-gray-200 leading-relaxed">
                <span className="text-[#22c55e] font-semibold block mb-2">→ Análise estruturada:</span>
                <span className="text-gray-300">Margem bruta atual: 43,9% · Ponto de equilíbrio: R$14.100 · Para crescer 20% sem aumentar custo fixo, precisa elevar ticket médio ou volume em canais de maior ROAS. Recomendação: priorizar retenção antes de aquisição.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
