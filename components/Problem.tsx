export default function Problem() {
  const dores = [
    {
      icon: '🎲',
      title: 'Prompt genérico, resultado genérico',
      desc: 'Você digita no vácuo e torce para a IA entregar algo útil. Na maioria das vezes, ela devolve o óbvio.',
    },
    {
      icon: '🔄',
      title: 'Recomeça do zero toda vez',
      desc: 'Nenhuma estrutura salva, nenhum método definido. Cada tarefa é uma tentativa e erro do início.',
    },
    {
      icon: '📉',
      title: 'Sente que usa mal o potencial',
      desc: 'Você sabe que o Claude pode muito mais, mas não sabe como extrair resultado profissional de verdade.',
    },
  ]
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="badge mb-6">O problema real</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Você usa Claude todo dia.<br />
            <span className="text-gray-500">Mas o resultado ainda parece mediano?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Não é o Claude que falha. É a falta de método.
            Sem estrutura, sem contexto e sem instruções claras — qualquer IA entrega o genérico.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {dores.map((d) => (
            <div key={d.title} className="card-border p-8">
              <div className="text-4xl mb-4">{d.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
              <p className="text-gray-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-[#a78bfa] font-semibold">
            O problema não é o Claude. É a falta de método. →
          </p>
        </div>
      </div>
    </section>
  )
}
