// Analytics utility — Meta Pixel + Google Analytics
declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    gtag?: (...args: any[]) => void
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export const trackPurchase = (value: number, currency = 'BRL') => {
  trackEvent('Purchase', { value, currency })
}

export const trackAddToCart = () => {
  trackEvent('AddToCart', {
    content_name: 'FluxIA Skills Pack',
    value: 77,
    currency: 'BRL',
  })
}

export const trackInitiateCheckout = () => {
  trackEvent('InitiateCheckout', {
    content_name: 'FluxIA Skills Pack',
    value: 77,
    currency: 'BRL',
  })
}
