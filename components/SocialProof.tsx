import Reveal from './Reveal'
import Counter from './Counter'

const proofPoints = [
  {
    icon: '✅',
    color: 'from-[#22c55e] to-[#059669]',
    title: 'Vendas confirmadas e rastreadas',
    detail: 'Compras registradas e validadas via pixel oficial de pagamento, com qualidade de correspondência de evento de 9,3/10 — entre as mais altas da plataforma.',
  },
  {
    icon: '📚',
    color: 'from-[#7c3aed] to-[#a855f7]',
    title: '1.166 skills documentadas, não prometidas',
    detail: 'Cada skill é um arquivo real, catalogado por categoria — você recebe o índice completo antes mesmo de instalar a primeira.',
  },
  {
    icon: '💰',
    color: 'from-[#2563eb] to-[#7c3aed]',
    title: 'R$3.480 em valor de mercado por R$97',
    detail: 'Comparação calculada item a item na seção de oferta abaixo — não é estimativa solta, é soma do preço de mercado de cada categoria.',
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
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-4xl font-extrabold gradient-text mb-1"><Counter to={1166} /></div>
              <div className="text-sm text-gray-500">skills profissionais</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold gradient-text mb-1"><Counter to={14} /></div>
              <div className="text-sm text-gray-500">categorias de negócio</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold gradient-text mb-1">PT-BR</div>
              <div className="text-sm text-gray-500">nativo, não traduzido</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
