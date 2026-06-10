'use client'
import { useEffect, useState } from 'react'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || 'https://pay.kiwify.com.br/L9dlZIF'

function trackCheckout() {
  type FbqWindow = Window & { fbq?: (...args: unknown[]) => void }
  const fbq = (window as FbqWindow).fbq
  if (typeof fbq === 'function') {
    fbq('track', 'InitiateCheckout', {
      value: 97.00,
      currency: 'BRL',
      content_name: 'FluxIA Skills Pack',
      content_type: 'product',
      num_items: 1,
    })
  }
}

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <div className="sticky-cta-bar fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#111111]/95 backdrop-blur border-t border-[#7c3aed]/30 px-4 py-3 flex items-center justify-between gap-3">
      <div>
        <p className="text-white text-sm font-bold leading-tight">FluxIA Skills Pack</p>
        <p className="text-gray-500 text-xs">1.166 skills · acesso vitalício</p>
      </div>
      <a
        href={CHECKOUT_URL}
        onClick={trackCheckout}
        className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex-shrink-0"
        target="_blank" rel="noopener noreferrer"
      >
        Quero — <span className="text-[#facc15]">R$97</span>
      </a>
    </div>
  )
}
