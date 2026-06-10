const rows = [
  { sem: 'Prompt genérico digitado no vácuo', com: 'Skill estruturada com contexto completo' },
  { sem: 'Resultado imprevisível a cada uso', com: 'Output profissional e consistente' },
  { sem: 'Começa do zero toda vez', com: 'Biblioteca organizada por área' },
  { sem: 'Adapta por tentativa e erro', com: 'Instruções testadas e prontas' },
  { sem: 'Inglês ou PT-BR genérico', com: 'PT-BR nativo com contexto BR' },
  { sem: 'Qualquer coisa para qualquer um', com: 'Especializado por área de negócio' },
]
export default function Comparison() {
  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge mb-6">Comparação direta</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            FluxIA vs.<br />
            <span className="text-gray-500">Claude sem método</span>
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#2a2a2a]">
          <div className="grid grid-cols-2">
            <div className="bg-[#1a1a1a] px-6 py-4 text-center text-sm font-bold text-red-400 uppercase tracking-wider">❌ Sem FluxIA</div>
            <div className="bg-[#7c3aed]/15 px-6 py-4 text-center text-sm font-bold text-[#a78bfa] uppercase tracking-wider">✅ Com FluxIA</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className={`grid grid-cols-2 border-t border-[#2a2a2a] ${i % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0f0f0f]'}`}>
              <div className="px-6 py-5 text-sm text-gray-500 flex items-center gap-3">
                <span className="text-red-500 flex-shrink-0">✗</span>{r.sem}
              </div>
              <div className="px-6 py-5 text-sm text-gray-200 flex items-center gap-3 border-l border-[#7c3aed]/15">
                <span className="text-[#22c55e] flex-shrink-0">✓</span>{r.com}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
          Diferente de outros packs, FluxIA não são prompts soltos — são skills com contexto, estrutura e instruções completas para cada área.
        </p>
      </div>
    </section>
  )
}
