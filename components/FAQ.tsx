'use client'
import { useState } from 'react'
const faqs = [
  { q: 'Preciso saber programar?', a: 'Não. FluxIA são arquivos de texto que você copia e cola no Claude. Não tem código, não tem instalação técnica.' },
  { q: 'Funciona no Claude gratuito?', a: 'Sim. O plano gratuito do Claude.ai já é suficiente para usar todos os 120 fluxos.' },
  { q: 'Como recebo os arquivos após a compra?', a: 'Acesso liberado imediatamente após a confirmação do pagamento. Você recebe e-mail com link de acesso à área de membros.' },
  { q: 'O que são "fluxos" exatamente?', a: 'São arquivos .md com instruções estruturadas, contexto e perguntas-guia para uma tarefa específica. Você cola no Claude e ele trabalha como especialista naquele tema.' },
  { q: 'Posso usar para clientes?', a: 'Sim, uso profissional próprio é autorizado. Você pode usar os fluxos para entregar trabalhos para clientes. Redistribuição ou revenda dos arquivos não é permitida.' },
  { q: 'Já uso ChatGPT — vale para o Claude?', a: 'Os fluxos são desenvolvidos e otimizados para o Claude especificamente. Alguns funcionam no ChatGPT, mas o resultado é melhor no Claude.' },
  { q: 'E se eu não gostar?', a: 'Garantia incondicional de 7 dias. Se não ver valor, solicite reembolso por e-mail e devolveremos 100% do valor sem burocracia.' },
]
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
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
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold">{f.q}</span>
                <span className={`text-[#7c3aed] flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
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
