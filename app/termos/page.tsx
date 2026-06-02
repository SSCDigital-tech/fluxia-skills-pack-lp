import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso — FluxIA Skills Pack',
  description: 'Termos e condições de uso do produto FluxIA Skills Pack da SSCDigital.',
}

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-[#7c3aed] text-sm mb-10 transition-colors">
          ← Voltar à página inicial
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Termos de Uso</h1>
        <p className="text-gray-600 text-sm mb-10">Última atualização: junho de 2025</p>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao adquirir e/ou utilizar o produto digital <strong className="text-white">FluxIA Skills Pack</strong>, disponibilizado pela
              <strong className="text-white"> SSCDigital</strong> (<strong>sscdigitalcontato@gmail.com</strong>),
              você declara ter lido, compreendido e aceito integralmente estes Termos de Uso.
              Caso não concorde com qualquer disposição, não utilize o produto.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Descrição do Produto</h2>
            <p>
              O FluxIA Skills Pack é um produto digital composto por 120 (cento e vinte) fluxos de trabalho estruturados
              para uso com o assistente de inteligência artificial Claude (Anthropic Inc.),
              organizados em 12 (doze) categorias profissionais, desenvolvidos em língua portuguesa (PT-BR).
            </p>
            <p className="mt-3">
              O produto é entregue em formato digital por meio da plataforma Kiwify, imediatamente após a confirmação do pagamento.
              Os conteúdos são disponibilizados em módulos, conforme descrito na página de vendas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Licença de Uso</h2>
            <p>
              A compra do FluxIA Skills Pack concede ao usuário uma <strong className="text-white">licença pessoal, intransferível e não exclusiva</strong> de uso.
              É expressamente vedado:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-400">
              <li>Reproduzir, copiar, distribuir ou revender o conteúdo, no todo ou em parte, sem autorização expressa;</li>
              <li>Compartilhar credenciais de acesso com terceiros;</li>
              <li>Utilizar o produto para criar produtos concorrentes derivados;</li>
              <li>Remover atribuições de autoria ou marcas d'água presentes nos materiais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Ausência de Afiliação com a Anthropic</h2>
            <p>
              O FluxIA Skills Pack é um produto independente e <strong className="text-white">não possui qualquer afiliação, patrocínio ou endosso oficial</strong> da
              Anthropic Inc. ou do produto Claude. O nome "Claude" é utilizado apenas para indicar
              compatibilidade técnica do produto.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Isenção de Garantia de Resultados</h2>
            <p>
              Os resultados apresentados em depoimentos e exemplos são ilustrativos e dependem exclusivamente
              do esforço, dedicação e contexto individual de cada usuário.
              <strong className="text-white"> A SSCDigital não garante resultados financeiros específicos</strong> decorrentes do uso do produto.
              O desempenho varia conforme a aplicação prática realizada por cada comprador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Política de Reembolso</h2>
            <p>
              O usuário poderá solicitar reembolso integral em até <strong className="text-white">7 (sete) dias corridos</strong> após a data da compra,
              conforme previsto no Art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/90),
              que garante o direito de arrependimento em compras realizadas fora do estabelecimento comercial.
            </p>
            <p className="mt-3">
              Solicitações devem ser enviadas para <strong className="text-white">sscdigitalcontato@gmail.com</strong> com o assunto
              "Reembolso — FluxIA Skills Pack". O reembolso será processado em até 5 dias úteis após a solicitação.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do FluxIA Skills Pack — incluindo textos, fluxos, estruturas, denominações e layout —
              é de propriedade exclusiva da SSCDigital e está protegido pela Lei nº 9.610/98 (Lei de Direitos Autorais).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Limitação de Responsabilidade</h2>
            <p>
              A SSCDigital não se responsabiliza por decisões tomadas pelo usuário com base nas saídas geradas pelo Claude
              ao utilizar os fluxos do produto. O produto é uma ferramenta de produtividade e não constitui consultoria
              jurídica, financeira, médica ou de qualquer natureza profissional regulamentada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Alterações nos Termos</h2>
            <p>
              A SSCDigital reserva-se o direito de alterar estes Termos a qualquer momento. Alterações relevantes
              serão comunicadas por e-mail ao comprador. O uso continuado do produto após a notificação implica
              aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Foro e Legislação Aplicável</h2>
            <p>
              Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Brasília/DF
              para dirimir quaisquer controvérsias decorrentes deste instrumento, com renúncia a qualquer outro,
              por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contato</h2>
            <p>
              Para dúvidas, suporte ou solicitações relacionadas a este produto, entre em contato pelo e-mail:
              <a href="mailto:sscdigitalcontato@gmail.com" className="text-[#a78bfa] hover:underline ml-1">
                sscdigitalcontato@gmail.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-[#1a1a1a] flex flex-wrap gap-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-300 transition-colors">← Página inicial</Link>
          <Link href="/privacidade" className="text-gray-500 hover:text-gray-300 transition-colors">Política de Privacidade</Link>
          <a href="mailto:sscdigitalcontato@gmail.com" className="text-gray-500 hover:text-gray-300 transition-colors">Contato</a>
        </div>
      </div>
    </main>
  )
}
