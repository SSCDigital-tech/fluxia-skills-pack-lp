export default function Download() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-6xl mb-6">📦</div>
        <h1 className="text-3xl font-bold mb-4">
          Seu Download
        </h1>
        <p className="text-gray-400 mb-8">
          Clique abaixo para baixar o FluxIA Skills Pack completo.
        </p>
        <a
          href="SEU_LINK_DE_DOWNLOAD_AQUI"
          className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-10 py-5 rounded-2xl transition-all"
        >
          ⬇️ Baixar FluxIA Skills Pack
        </a>
        <p className="mt-6 text-gray-600 text-sm">
          Problema com o download? Entre em contato com o suporte.
        </p>
      </div>
    </main>
  )
}
