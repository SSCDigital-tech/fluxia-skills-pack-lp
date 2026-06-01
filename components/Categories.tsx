const cats = [
  { icon: '📱', name: 'Instagram e Conteúdo', n: 10 },
  { icon: '✍️', name: 'Copywriting e Ofertas', n: 10 },
  { icon: '📊', name: 'Tráfego Pago', n: 10 },
  { icon: '💬', name: 'Vendas e WhatsApp', n: 10 },
  { icon: '🚀', name: 'Funis e Lançamentos', n: 10 },
  { icon: '⚡', name: 'Produtividade e Rotina', n: 10 },
  { icon: '🏢', name: 'Negócios e Operações', n: 10 },
  { icon: '🎧', name: 'Atendimento e Suporte', n: 10 },
  { icon: '🎯', name: 'Marca Pessoal', n: 10 },
  { icon: '🤖', name: 'Automação com IA', n: 10 },
  { icon: '📦', name: 'Produtos Digitais', n: 10 },
  { icon: '📈', name: 'Análise e Estratégia', n: 10 },
]
export default function Categories() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge mb-6">O que vem dentro</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            12 categorias. 120 fluxos.<br />
            <span className="gradient-text">Todos em PT-BR.</span>
          </h2>
          <p className="text-xl text-gray-400">Um fluxo para cada tarefa do seu dia a dia profissional.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cats.map((c) => (
            <div key={c.name} className="card-border p-5 hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/5 transition-all duration-200 cursor-default">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-sm font-semibold text-white leading-tight mb-2">{c.name}</div>
              <div className="text-xs text-gray-600">{c.n} fluxos</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-6 bg-[#111111] border border-[#7c3aed]/20 rounded-2xl px-8 py-4 text-sm text-gray-400">
            <span><span className="text-white font-bold text-lg">120</span> fluxos profissionais</span>
            <span className="text-gray-700">·</span>
            <span><span className="text-white font-bold text-lg">12</span> categorias</span>
            <span className="text-gray-700">·</span>
            <span>Acesso imediato após a compra</span>
          </div>
        </div>
      </div>
    </section>
  )
}
