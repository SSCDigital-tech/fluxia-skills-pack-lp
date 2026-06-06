export default function Obrigado() {

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Parabéns pela excelente decisão!
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Seu acesso ao FluxIA Skills Pack foi confirmado. Verifique seu email — 
          as instruções de acesso chegam em até 5 minutos.
        </p>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 text-left space-y-4">
          <p className="font-semibold text-white">Próximos passos:</p>
          <div className="space-y-3 text-gray-400">
            <p>1. Acesse seu email e clique no link de acesso</p>
            <p>2. Baixe o pacote completo</p>
            <p>3. Comece pelo arquivo <code className="text-purple-400">como-usar-as-skills.md</code></p>
            <p>4. Siga o plano de 7 dias para resultados rápidos</p>
          </div>
        </div>
        <p className="mt-8 text-gray-600 text-sm">
          Não recebeu o email? Verifique o spam ou entre em contato pelo suporte.
        </p>
      </div>
    </main>
  )
}
