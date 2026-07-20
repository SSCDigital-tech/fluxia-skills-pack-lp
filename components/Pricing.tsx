'use client'
import { useState, useCallback } from 'react'
import Reveal from './Reveal'
import { buildCheckoutUrl } from '../lib/tracking'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || 'https://pay.kiwify.com.br/L9dlZIF'

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str.trim().toLowerCase()))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function trackCheckoutWithEmail(email: string) {
  type FbqWindow = Window & { fbq?: (...args: unknown[]) => void }
  const fbq = (window as FbqWindow).fbq
  if (typeof fbq === 'function') {
    const params: Record<string, unknown> = {
      value: 77.00,
      currency: 'BRL',
      content_name: 'FluxIA Skills Pack',
      content_type: 'product',
      num_items: 1,
    }
    if (email) {
      const hashed = await sha256(email)
      params.em = hashed
    }
    fbq('track', 'InitiateCheckout', params)
  }
}
const valueRows = [
  { item: 'Conteúdo e Copy (210 skills)', value: 'R$700' },
  { item: 'Marketing e Publicidade (222 skills)', value: 'R$720' },
  { item: 'Operações e Gestão (245 skills)', value: 'R$600' },
  { item: 'Rotina e Organização (90 skills)', value: 'R$350' },
  { item: '+ 400 skills em 10 categorias adicionais', value: 'R$1.110' },
]
const bonuses = [
  { icon: '📖', name: 'Guia de instalação completo', sub: 'Claude.ai + Claude Code — passo a passo' },
  { icon: '📋', name: 'Catálogo completo de 1.166 skills', sub: 'Índice com nome e descrição de cada skill' },
  { icon: '📅', name: 'Plano de 7 dias de uso', sub: 'Do zero à skill instalada em uma semana' },
]
export default function Pricing() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleCheckout = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Digite um email válido')
      return
    }
    setError('')
    await trackCheckoutWithEmail(trimmed)
    const url = buildCheckoutUrl(CHECKOUT_URL, trimmed ? { email: trimmed } : undefined)
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [email])

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]" id="oferta">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge mb-6">Oferta de lançamento</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Tudo isso por <span className="gradient-text-gold">R$77</span>
          </h2>
          <p className="text-gray-400">Pagamento único. Sem mensalidade. Acesso vitalício.</p>
          <div className="inline-flex items-center gap-2 mt-4 bg-[#facc15]/8 border border-[#facc15]/20 rounded-full px-4 py-2 text-sm text-[#facc15] font-medium">
            <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full animate-pulse" />
            🔥 Lançamento — preço sobe com as próximas vendas
          </div>
        </div>

        {/* Value table */}
        <Reveal>
        <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] mb-6">
          <div className="bg-[#7c3aed]/12 px-6 py-3 border-b border-[#7c3aed]/20 text-xs font-bold text-[#a78bfa] uppercase tracking-wider flex justify-between">
            <span>O que você leva</span><span>Valor de mercado</span>
          </div>
          {valueRows.map((r) => (
            <div key={r.item} className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] last:border-0 bg-[#111111]">
              <span className="text-gray-300 text-sm flex items-center gap-2"><span className="text-[#22c55e]">✓</span>{r.item}</span>
              <span className="text-gray-500 line-through text-sm">{r.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between px-6 py-4 bg-[#7c3aed]/8 border-t border-[#7c3aed]/20">
            <span className="font-bold text-white">Valor total</span>
            <span className="text-gray-500 line-through font-bold">R$3.480</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2 px-1">* Estimativa baseada no valor médio de consultoria especializada por área (R$120–600/h). Calculado item a item acima.</p>
        </Reveal>

        {/* Offer card */}
        <Reveal delay={150}>
        <div className="bg-[#111111] border-2 border-[#7c3aed]/50 rounded-2xl p-8 glow-strong card-hover">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">Você leva hoje:</p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[#22c55e]">✓</span>
              <span className="text-white font-semibold">FluxIA Skills Pack — 1.166 Skills Profissionais</span>
            </div>
            {bonuses.map((b) => (
              <div key={b.name} className="flex items-start gap-3">
                <span className="text-[#a78bfa]">🎁</span>
                <div>
                  <span className="text-gray-200 text-sm font-medium">{b.name}</span>
                  <p className="text-gray-500 text-xs">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#2a2a2a] pt-6 mb-8">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-500">Valor total</span>
              <span className="text-gray-500 line-through">R$3.480</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-white font-bold text-lg block">Preço de lançamento</span>
                <span className="text-[#22c55e] text-xs font-semibold">Uma vez. Acesso para sempre.</span>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#facc15]">R$</span>
                  <span className="text-6xl font-extrabold text-[#facc15] leading-none" style={{textShadow:'0 0 30px rgba(250,204,21,0.3)'}}>77</span>
                </div>
                <p className="text-gray-400 text-xs">ou 12x R$7,96 no cartão**</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleCheckout} className="space-y-3">
            <label className="block text-sm text-gray-400 mb-1">Para onde enviamos seu acesso?</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setError('') }}
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#7c3aed] text-white rounded-xl px-5 py-4 text-base outline-none transition-colors placeholder:text-gray-600"
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              className="block w-full text-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xl py-5 rounded-2xl transition-all duration-200 hover:scale-105 pulse-glow cursor-pointer"
            >
              🚀 Quero minhas skills agora — R$77
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-4">
            Acesso imediato · Garantia de 7 dias · Pagamento 100% seguro via Kiwify
          </p>

          {/* Delivery flow */}
          <div className="mt-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Como funciona após a compra</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="flex items-center gap-1.5 text-gray-400">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/20 text-[#a78bfa] flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                Pagamento confirmado
              </span>
              <span className="text-gray-500">→</span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/20 text-[#a78bfa] flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                E-mail com acesso imediato
              </span>
              <span className="text-gray-500">→</span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <span className="w-5 h-5 rounded-full bg-[#7c3aed]/20 text-[#a78bfa] flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                Baixa as 1.166 skills
              </span>
              <span className="text-gray-500">→</span>
              <span className="flex items-center gap-1.5 text-[#22c55e] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#22c55e]/15 flex items-center justify-center text-xs flex-shrink-0">⚡</span>
                Usa em minutos
              </span>
            </div>
          </div>

          <div className="mt-6 bg-[#1a1a1a] rounded-xl p-5 flex items-start gap-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <p className="font-bold text-white">Garantia de 7 Dias — Risco Zero</p>
              <p className="text-gray-500 text-sm mt-1">
                Se você acessar o produto e não ver valor, solicite o reembolso em até 7 dias.
                Devolvemos 100% sem perguntas, sem burocracia.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs mt-4">
            **Parcelamento disponível no cartão de crédito. Sujeito à análise da operadora.
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
