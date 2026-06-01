const isFor = [
  'Empreendedores digitais que usam Claude no dia a dia',
  'Social medias e criadores de conteúdo',
  'Gestores de tráfego pago',
  'Freelancers de marketing, copy e design',
  'Infoprodutores e prestadores de serviço',
  'Quem quer sair do improviso e ter método com IA',
]
const notFor = [
  'Quem busca resultado mágico sem aplicar o fluxo',
  'Quem nunca abriu o Claude na vida',
  'Quem quer um agente de IA 100% autônomo',
  'Quem não trabalha com marketing, conteúdo ou vendas',
]
export default function ForWhom() {
  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Para quem é o FluxIA?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0a1a0a] border border-[#22c55e]/20 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-[#22c55e] mb-6 uppercase tracking-wider">✅ Para você se é</h3>
            <ul className="space-y-3">
              {isFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-[#22c55e] flex-shrink-0 mt-0.5">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1a0a0a] border border-red-900/20 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-red-400 mb-6 uppercase tracking-wider">❌ Não é para você se</h3>
            <ul className="space-y-3">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-500 text-sm">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
