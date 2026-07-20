import Image from 'next/image'
import Reveal from './Reveal'

const shots = [
  {
    src: '/demo-01-biblioteca.png',
    alt: 'Estrutura real do FluxIA Skills Pack: 14 pastas organizadas com 1.166 arquivos .md',
    caption: 'As 14 pastas reais — com a contagem de skills de cada uma',
  },
  {
    src: '/demo-02-skill-aberta.png',
    alt: 'Skill real nº 0081 aberta: Script de Venda por WhatsApp, com objetivo, instruções e prompt',
    caption: 'Uma skill de verdade, aberta — sem edição',
  },
  {
    src: '/demo-03-skill-no-claude.png',
    alt: 'Skill em uso no Claude gerando scripts de venda por WhatsApp',
    caption: 'A mesma skill em uso no Claude',
  },
]

export default function InsideProduct() {
  return (
    <section className="py-24 px-4 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge mb-6">Dentro do produto</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Veja exatamente<br />
            <span className="gradient-text">o que você recebe</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Sem promessa abstrata: estas são capturas reais dos arquivos do pacote e de uma skill em uso.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 100}>
              <figure className="card-border overflow-hidden rounded-2xl">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto"
                />
                <figcaption className="text-sm text-gray-400 text-center px-4 py-3">
                  {s.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
