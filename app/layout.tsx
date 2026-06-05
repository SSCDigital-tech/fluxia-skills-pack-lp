import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FluxIA Skills Pack — 1.166 Skills Profissionais para o Claude',
  description: 'O maior pack de skills para o Claude em pt-BR. 1.166 skills profissionais em 14 categorias — marketing, copy, vendas, gestão, automação e muito mais. Para criadores e empreendedores brasileiros.',
  keywords: 'claude skills, skills para claude, ia brasil, prompts profissionais, automação ia, conteúdo instagram, pack skills claude, 1166 skills',
  openGraph: {
    title: 'FluxIA Skills Pack',
    description: '1.166 skills profissionais para o Claude em pt-BR',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body className={`${inter.className} bg-background text-white`}>
        {children}
      </body>
    </html>
  )
}
