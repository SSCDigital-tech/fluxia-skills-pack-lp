const personas = [
  {
    initials: 'RM',
    avatarColor: 'from-[#7c3aed] to-[#a855f7]',
    name: 'Rafael M.',
    role: 'Social Media Manager · SP',
    result: 'Criou o calendário de conteúdo de 30 dias para 3 clientes em 1 tarde. Antes levava uma semana inteira. Vale muito mais que R$47.',
  },
  {
    initials: 'CS',
    avatarColor: 'from-[#2563eb] to-[#7c3aed]',
    name: 'Camila S.',
    role: 'Gestora de Tráfego Pago · RJ',
    result: 'Gerei 20 variações de copy para anúncios em 2 horas. O CTR médio das campanhas subiu depois que instalei os fluxos. Uso todo dia.',
  },
  {
    initials: 'TA',
    avatarColor: 'from-[#059669] to-[#2563eb]',
    name: 'Thiago A.',
    role: 'Empreendedor Digital · MG',
    result: 'Escrevi a página de vendas, criei a sequência de e-mails e montei o funil completo em um único dia. Sem o FluxIA levaria semanas.',
  },
]
export default function SocialProof() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge mb-6">Quem usa FluxIA</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Feito para quem trabalha<br />
            <span className="gradient-text">com IA todo dia</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {personas.map((p) => (
            <div key={p.name} className="card-border p-8 flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#facc15] text-sm">★</span>)}
              </div>
              <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-6">&ldquo;{p.result}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e1e]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {p.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{p.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{p.role}</p>
                  <p className="text-[#22c55e] text-xs font-semibold mt-0.5">✓ Compra verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-4xl font-extrabold gradient-text mb-1">120</div>
            <div className="text-sm text-gray-500">fluxos profissionais</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold gradient-text mb-1">12</div>
            <div className="text-sm text-gray-500">categorias de negócio</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold gradient-text mb-1">PT-BR</div>
            <div className="text-sm text-gray-500">nativo, não traduzido</div>
          </div>
        </div>
      </div>
    </section>
  )
}
