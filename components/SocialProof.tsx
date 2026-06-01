const personas = [
  { emoji: '📱', role: 'Social Media', result: 'Criou o calendário de conteúdo de 30 dias para 3 clientes em 1 tarde. Antes levava uma semana.' },
  { emoji: '📊', role: 'Gestor de Tráfego', result: 'Gerou 20 variações de copy para anúncios em 2 horas. CTR médio subiu depois dos fluxos.' },
  { emoji: '🚀', role: 'Empreendedor Solo', result: 'Escreveu a página de vendas, criou a sequência de e-mails e montou o funil completo em um dia.' },
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
            <div key={p.role} className="card-border p-8">
              <div className="text-4xl mb-4">{p.emoji}</div>
              <div className="text-[#a78bfa] font-semibold text-sm uppercase tracking-wider mb-3">{p.role}</div>
              <p className="text-gray-300 leading-relaxed text-sm">&ldquo;{p.result}&rdquo;</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#facc15] text-sm">★</span>)}
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
