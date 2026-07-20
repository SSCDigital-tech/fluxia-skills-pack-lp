// UTM + fbclid capture/forwarding — session-only, allowlisted params only.
export const ALLOWED_TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
] as const

export type TrackingParamKey = (typeof ALLOWED_TRACKING_PARAMS)[number]
export type TrackingParams = Partial<Record<TrackingParamKey, string>>

const STORAGE_KEY = 'fluxia_tracking_params'

function isAllowedKey(key: string): key is TrackingParamKey {
  return (ALLOWED_TRACKING_PARAMS as readonly string[]).includes(key)
}

// Pure — parses a query string and keeps only allowlisted keys with non-empty values.
export function extractAllowedParams(search: string): TrackingParams {
  const params = new URLSearchParams(search)
  const result: TrackingParams = {}
  for (const key of ALLOWED_TRACKING_PARAMS) {
    const value = params.get(key)
    if (value) result[key] = value
  }
  return result
}

// Pure — merges tracking params (and optional extra non-tracking params, e.g. email)
// onto a base URL without duplicating query keys.
export function buildUrlWithParams(base: string, params: TrackingParams, extra?: Record<string, string>): string {
  const url = new URL(base)
  for (const key of ALLOWED_TRACKING_PARAMS) {
    const value = params[key]
    if (value) url.searchParams.set(key, value)
  }
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value && !isAllowedKey(key)) url.searchParams.set(key, value)
    }
  }
  return url.toString()
}

// Browser-only — captures allowlisted params from the current URL into sessionStorage,
// merging with whatever was already captured this session (new values win).
export function captureTrackingParams(): void {
  if (typeof window === 'undefined') return
  const fresh = extractAllowedParams(window.location.search)
  if (Object.keys(fresh).length === 0) return
  const existing = getStoredTrackingParams()
  const merged = { ...existing, ...fresh }
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
}

// Browser-only — reads back only allowlisted keys (defensive against tampered/legacy storage).
export function getStoredTrackingParams(): TrackingParams {
  if (typeof window === 'undefined') return {}
  const raw = window.sessionStorage.getItem(STORAGE_KEY)
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw)
    const filtered: TrackingParams = {}
    for (const key of ALLOWED_TRACKING_PARAMS) {
      if (typeof parsed[key] === 'string' && parsed[key]) filtered[key] = parsed[key]
    }
    return filtered
  } catch {
    return {}
  }
}

// Browser-only — builds the final checkout URL: base + stored tracking params + extras (e.g. email).
export function buildCheckoutUrl(base: string, extra?: Record<string, string>): string {
  return buildUrlWithParams(base, getStoredTrackingParams(), extra)
}
