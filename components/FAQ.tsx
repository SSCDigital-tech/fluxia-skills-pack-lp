'use client'
import { useState } from 'react'
const faqs = [
  { q: 'Preciso saber programar?', a: 'Não. FluxIA são arquivos de texto que você copia e cola no Claude. Não tem código, não tem instalação técnica. Se você sabe abrir um arquivo e copiar texto, já sabe usar.' },
  { q: 'Funciona no Claude gratuito?', a: 'Sim. O plano gratuito do Claude.ai já é suficiente para usar todas as 1.166 skills. Você não precisa de nenhuma assinatura extra.' },
  { q: 'Como recebo os arquivos após a compra?', a: 'Acesso liberado automaticamente assim que o pagamento é confirmado. Você recebe um e-mail com link para a área de membros — de lá você baixa o pacote completo das 1.166 skills. Processo leva menos de 3 minutos.' },
  { q: 'Por quanto tempo tenho acesso?', a: 'Acesso vitalício. Uma compra, acesso para sempre. Sem mensalidade, sem renovação, sem surpresa na fatura. Tudo que for atualizado no pacote você recebe automaticamente.' },
  { q: 'Funciona no celular?', a: 'Sim. As skills são arquivos de texto (.md). Você pode acessá-los e usá-los pelo celular no app do Claude ou no Claude.ai pelo navegador mobile — sem instalar nada.' },
  { q: 'O que são "skills" exatamente?', a: 'São arquivos .md com instruções estruturadas, contexto e prompts especializados para uma tarefa específica. Você cola no Claude e ele trabalha como especialista naquele tema — sem precisar criar prompt do zero toda vez.' },
  { q: 'Posso usar para clientes?', a: 'Sim, uso profissional próprio é autorizado. Você pode usar as skills para entregar trabalhos para clientes. Redistribuição ou revenda dos arquivos não é permitida.' },
  { q: 'Já uso ChatGPT — vale para o Claude?', a: 'As skills são desenvolvidas e otimizadas para o Claude especificamente. Algumas funcionam no ChatGPT, mas o resultado é mais preciso e consistente no Claude.' },
  { q: 'E se eu não gostar?', a: 'Garantia incondicional de 7 dias. Se não ver valor, solicite reembolso por e-mail para sscdigitalcontato@gmail.com e devolveremos 100% sem perguntas, sem burocracia.' },
]
export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set([2, 3, 8]))
  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Perguntas frequentes</h2>
          <p className="text-gray-400">Ainda com dúvida? Aqui estão as respostas.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card-border overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => toggle(i)}
              >
                <span className="text-white font-semibold">{f.q}</span>
                <span className={`text-[#7c3aed] flex-shrink-0 transition-transform duration-200 ${open.has(i) ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open.has(i) && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1a1a1a] pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
