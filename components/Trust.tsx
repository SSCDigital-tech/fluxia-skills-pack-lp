import Link from 'next/link'
export default function Trust() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Trust bar */}
      <div className="py-12 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            {/* FluxIA — Flux Wave mark */}
            <svg width="46" height="30" viewBox="4 10 56 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <defs>
                <linearGradient id="ftr-wave" x1="8" y1="0" x2="54" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a78bfa"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
              </defs>
              <path d="M 8 42 Q 18 36 30 42 Q 42 48 54 42" stroke="#a78bfa" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.3"/>
              <path d="M 8 30 Q 18 24 30 30 Q 42 36 54 30" stroke="url(#ftr-wave)" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M 8 18 Q 20 12 32 18 Q 44 24 54 18" stroke="url(#ftr-wave)" strokeWidth="6" fill="none" strokeLinecap="round"/>
              <circle cx="8" cy="18" r="4" fill="#facc15"/>
            </svg>
            <div className="flex items-baseline gap-1.5">
              <span className="text-white font-extrabold text-lg tracking-tight">
                Flux<span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">IA</span>
              </span>
              <span className="text-gray-600 text-xs font-medium">Skills Pack</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">Compra 100% segura · Produto digital entregue via Kiwify</p>
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
            <span className="text-gray-600">·</span>
            <Link href="/privacidade" className="text-gray-500 hover:text-gray-300 transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-gray-600">·</span>
            <a href="mailto:sscdigitalcontato@gmail.com" className="text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5">
              ✉️ sscdigitalcontato@gmail.com
            </a>
          </div>

          {/* Disclaimer legal */}
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed text-center mb-4">
            FluxIA Skills Pack é um produto digital independente e não possui afiliação oficial com a Anthropic Inc. ou com o produto Claude.
            Os resultados apresentados dependem do esforço e aplicação individual de cada usuário. Este produto não garante resultados financeiros.
          </p>
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} SSCDigital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
