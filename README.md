# FluxIA Skills Pack — Landing Page

Projeto Next.js 14 com Tailwind CSS para a landing page do produto.

## Setup

```bash
npm install
npm run dev
```

## Configuração

1. Copie `.env.example` para `.env.local`
2. Preencha as variáveis:
   - `NEXT_PUBLIC_KIWIFY_CHECKOUT_URL` — Link do checkout na Kiwify
   - `NEXT_PUBLIC_META_PIXEL_ID` — ID do pixel do Meta Ads
   - `NEXT_PUBLIC_GA_ID` — ID do Google Analytics (opcional)

## Deploy na Vercel

```bash
# Via CLI
vercel deploy

# Ou conecte o repositório no vercel.com
```

## Estrutura

- `app/page.tsx` — Página principal
- `app/obrigado/` — Página pós-compra
- `app/download/` — Página de download
- `app/suporte/` — Página de suporte
- `components/` — Componentes da landing page
- `lib/analytics.ts` — Utilitários de rastreamento

## Páginas

| URL | Descrição |
|---|---|
| `/` | Página de vendas principal |
| `/obrigado` | Página de agradecimento pós-compra |
| `/download` | Página de download do produto |
| `/suporte` | Página de suporte ao cliente |
