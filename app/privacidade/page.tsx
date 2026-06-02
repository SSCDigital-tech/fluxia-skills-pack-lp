import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade — FluxIA Skills Pack',
  description: 'Como a SSCDigital coleta, usa e protege seus dados pessoais.',
}

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-[#7c3aed] text-sm mb-10 transition-colors">
          ← Voltar à página inicial
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidade</h1>
        <p className="text-gray-600 text-sm mb-10">Última atualização: junho de 2025</p>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Quem somos</h2>
            <p>
              A <strong className="text-white">SSCDigital</strong> é responsável pelo produto digital FluxIA Skills Pack.
              Para questões relacionadas à privacidade, entre em contato pelo e-mail:
              <a href="mailto:sscdigitalcontato@gmail.com" className="text-[#a78bfa] hover:underline ml-1">
                sscdigitalcontato@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Dados que coletamos</h2>
            <p>Ao interagir com nossa página de vendas e realizar uma compra, podemos coletar os seguintes dados:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-400">
              <li><strong className="text-gray-300">Dados de identificação:</strong> nome completo e endereço de e-mail (fornecidos no momento da compra);</li>
              <li><strong className="text-gray-300">Dados de pagamento:</strong> processados diretamente pela plataforma Kiwify — não armazenamos dados de cartão;</li>
              <li><strong className="text-gray-300">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de acesso, via cookies e ferramentas de analytics (ex.: Google Analytics, Meta Pixel);</li>
              <li><strong className="text-gray-300">Dados de comunicação:</strong> mensagens enviadas por e-mail ao nosso suporte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Finalidade do uso dos dados</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-400">
              <li>Processar e entregar sua compra;</li>
              <li>Enviar comunicações sobre o produto adquirido e atualizações relevantes;</li>
              <li>Responder a solicitações de suporte e reembolso;</li>
              <li>Melhorar nossos produtos e a experiência na página de vendas;</li>
              <li>Veicular anúncios personalizados em plataformas como Meta (Facebook/Instagram) e Google Ads, com base em comportamento de navegação (mediante consentimento);</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Cookies e rastreamento</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação e mensurar
              o desempenho de campanhas publicitárias. Isso inclui:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-400">
              <li><strong className="text-gray-300">Cookies essenciais:</strong> necessários para o funcionamento da página;</li>
              <li><strong className="text-gray-300">Cookies analíticos:</strong> Google Analytics — análise de tráfego e comportamento;</li>
              <li><strong className="text-gray-300">Cookies de publicidade:</strong> Meta Pixel (Facebook/Instagram) e Google Ads — mensuração de conversões e criação de públicos personalizados.</li>
            </ul>
            <p className="mt-3">
              Você pode gerenciar ou desativar cookies nas configurações do seu navegador. A desativação de cookies
              pode impactar funcionalidades da página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Compartilhamento de dados</h2>
            <p>
              Seus dados <strong className="text-white">não são vendidos</strong> a terceiros.
              Podemos compartilhá-los apenas com:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-400">
              <li><strong className="text-gray-300">Kiwify:</strong> plataforma de pagamento e entrega do produto digital;</li>
              <li><strong className="text-gray-300">Google LLC:</strong> para análise de tráfego (Google Analytics) e anúncios (Google Ads);</li>
              <li><strong className="text-gray-300">Meta Platforms Inc.:</strong> para mensuração de campanhas (Meta Pixel/Conversions API);</li>
              <li><strong className="text-gray-300">Autoridades legais:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Meta Pixel e publicidade</h2>
            <p>
              Esta página utiliza o <strong className="text-white">Meta Pixel</strong> para mensurar conversões e veicular
              anúncios relevantes no Facebook e Instagram. O pixel coleta dados de comportamento de navegação
              (como visitas à página e eventos de compra) e os transmite ao Meta para otimização de campanhas.
            </p>
            <p className="mt-3">
              Para exercer seus direitos de privacidade em relação ao Meta, acesse:
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer"
                 className="text-[#a78bfa] hover:underline ml-1">Política de Privacidade do Meta</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Retenção de dados</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política
              e obrigações legais (em geral, até 5 anos após a última transação, conforme legislação fiscal brasileira).
              Dados de analytics são retidos por 26 meses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Seus direitos (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-400">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogar consentimento a qualquer momento;</li>
              <li>Solicitar a portabilidade dos dados;</li>
              <li>Opor-se a tratamento realizado com fundamento em legítimo interesse.</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, envie solicitação para
              <a href="mailto:sscdigitalcontato@gmail.com" className="text-[#a78bfa] hover:underline ml-1">
                sscdigitalcontato@gmail.com
              </a>. Responderemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso
              não autorizado, alteração, divulgação ou destruição. A transmissão de dados é protegida por criptografia SSL/TLS.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Alterações nesta Política</h2>
            <p>
              Esta Política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível
              nesta página. Alterações relevantes serão comunicadas por e-mail aos clientes ativos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contato</h2>
            <p>
              Dúvidas sobre esta Política de Privacidade? Entre em contato:
              <a href="mailto:sscdigitalcontato@gmail.com" className="text-[#a78bfa] hover:underline ml-1">
                sscdigitalcontato@gmail.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-[#1a1a1a] flex flex-wrap gap-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-300 transition-colors">← Página inicial</Link>
          <Link href="/termos" className="text-gray-500 hover:text-gray-300 transition-colors">Termos de Uso</Link>
          <a href="mailto:sscdigitalcontato@gmail.com" className="text-gray-500 hover:text-gray-300 transition-colors">Contato</a>
        </div>
      </div>
    </main>
  )
}
