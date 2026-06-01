export default function Suporte() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-6xl mb-6">🤝</div>
        <h1 className="text-3xl font-bold mb-4">
          Suporte
        </h1>
        <p className="text-gray-400 mb-8">
          Estamos aqui para ajudar. Entre em contato pelos canais abaixo.
        </p>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 space-y-4 text-left">
          <div>
            <p className="text-white font-semibold">Email de Suporte</p>
            <p className="text-purple-400">SEU_EMAIL_DE_SUPORTE_AQUI</p>
          </div>
          <div>
            <p className="text-white font-semibold">WhatsApp</p>
            <p className="text-purple-400">SEU_WHATSAPP_AQUI</p>
          </div>
          <div>
            <p className="text-white font-semibold">Horário de atendimento</p>
            <p className="text-gray-400">Segunda a Sexta, 9h-18h (Horário de Brasília)</p>
          </div>
        </div>
        <p className="mt-6 text-gray-600 text-sm">
          Para reembolsos dentro do prazo de 7 dias, mencione no assunto: "REEMBOLSO"
        </p>
      </div>
    </main>
  )
}
