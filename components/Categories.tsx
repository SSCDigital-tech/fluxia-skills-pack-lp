type Cat = { icon: string; name: string; n: number; badge?: string }
const cats: Cat[] = [
  { icon: '📣', name: 'Marketing e Publicidade', n: 222 },
  { icon: '⚙️', name: 'Operações e Gestão', n: 245 },
  { icon: '✍️', name: 'Conteúdo e Copy', n: 210 },
  { icon: '💰', name: 'Financeiro e Compliance', n: 133 },
  { icon: '📅', name: 'Rotina e Organização', n: 90 },
  { icon: '⚖️', name: 'Jurídico', n: 55 },
  { icon: '📦', name: 'Produto e E-commerce', n: 44 },
  { icon: '🎯', name: 'Carreira e Marca Pessoal', n: 38 },
  { icon: '🔍', name: 'SEO', n: 33 },
  { icon: '👥', name: 'Liderança e Equipes', n: 26 },
  { icon: '🎨', name: 'Design e Branding', n: 24 },
  { icon: '💻', name: 'Código e Automação', n: 22 },
  { icon: '🎬', name: 'Direção Criativa', n: 20 },
  { icon: '🛍️', name: 'TikTok Shop e Criadores', n: 5, badge: 'novo' },
]
export default function Categories() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge mb-6">O que vem dentro</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            14 categorias. 1.166 skills.<br />
            <span className="gradient-text">Todas em PT-BR.</span>
          </h2>
          <p className="text-xl text-gray-400">Uma skill para cada tarefa do seu dia a dia profissional.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cats.map((c) => (
            <div key={c.name} className="card-border p-5 hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/5 transition-all duration-200 cursor-default relative">
              {c.badge && (
                <span className="absolute top-3 right-3 bg-[#7c3aed]/20 text-[#a78bfa] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#7c3aed]/30">
                  {c.badge}
                </span>
              )}
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-sm font-semibold text-white leading-tight mb-2">{c.name}</div>
              <div className="text-xs text-gray-500">{c.n} skills</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-6 bg-[#111111] border border-[#7c3aed]/20 rounded-2xl px-8 py-4 text-sm text-gray-400">
            <span><span className="text-white font-bold text-lg">1.166</span> skills profissionais</span>
            <span className="text-gray-700">·</span>
            <span><span className="text-white font-bold text-lg">14</span> categorias</span>
            <span className="text-gray-700">·</span>
            <span>Acesso imediato após a compra</span>
          </div>
        </div>
      </div>
    </section>
  )
}
