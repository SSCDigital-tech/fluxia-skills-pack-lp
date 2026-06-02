import Image from 'next/image'
import Link from 'next/link'
export default function Trust() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Trust bar */}
      <div className="py-12 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <Image src="/logo-sscdigital.svg" alt="SSCDigital" width={180} height={42} />
          </div>
          <p className="text-gray-600 text-sm mb-6">Compra 100% segura · Produto digital entregue via Kiwify</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">🔒 SSL · Pagamento criptografado</span>
            <span className="flex items-center gap-2">💳 Kiwify · Plataforma certificada</span>
            <span className="flex items-center gap-2">🛡️ Garantia 7 dias</span>
            <span className="flex items-center gap-2">⚡ Acesso imediato</span>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Links legais + contato */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm">
            <Link href="/termos" className="text-gray-500 hover:text-gray-300 transition-colors">
              Termos de Uso
            </Link>
            <span className="text-gray-800">·</span>
            <Link href="/privacidade" className="text-gray-500 hover:text-gray-300 transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-gray-800">·</span>
            <a href="mailto:sscdigitalcontato@gmail.com" className="text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5">
              ✉️ sscdigitalcontato@gmail.com
            </a>
          </div>

          {/* Disclaimer legal */}
          <p className="text-xs text-gray-700 max-w-2xl mx-auto leading-relaxed text-center mb-4">
            FluxIA Skills Pack é um produto digital independente e não possui afiliação oficial com a Anthropic Inc. ou com o produto Claude.
            Os resultados apresentados dependem do esforço e aplicação individual de cada usuário. Este produto não garante resultados financeiros.
          </p>
          <p className="text-xs text-gray-800 text-center">
            © {new Date().getFullYear()} SSCDigital. Todos os direitos reservados. CNPJ em processo de abertura.
          </p>
        </div>
      </div>
    </footer>
  )
}
