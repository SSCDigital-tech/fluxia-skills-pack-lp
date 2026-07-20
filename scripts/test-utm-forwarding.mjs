// Local test harness for UTM/fbclid capture + forwarding logic.
// Run: node --experimental-strip-types scripts/test-utm-forwarding.mjs
import assert from 'node:assert/strict'
import { extractAllowedParams, buildUrlWithParams } from '../lib/tracking.ts'

const BASE = 'https://pay.kiwify.com.br/L9dlZIF'
let passed = 0
const results = []

function check(name, fn) {
  try {
    fn()
    passed++
    results.push({ name, status: 'PASS' })
  } catch (err) {
    results.push({ name, status: 'FAIL', error: err.message })
  }
}

check('URL sem parâmetros', () => {
  const params = extractAllowedParams('')
  assert.deepEqual(params, {})
  assert.equal(buildUrlWithParams(BASE, params), BASE)
})

check('uma UTM', () => {
  const params = extractAllowedParams('?utm_source=meta')
  assert.deepEqual(params, { utm_source: 'meta' })
  assert.equal(buildUrlWithParams(BASE, params), `${BASE}?utm_source=meta`)
})

check('todas as UTMs', () => {
  const search = '?utm_source=meta&utm_medium=cpc&utm_campaign=0411&utm_content=ad1&utm_term=skills'
  const params = extractAllowedParams(search)
  assert.deepEqual(params, {
    utm_source: 'meta',
    utm_medium: 'cpc',
    utm_campaign: '0411',
    utm_content: 'ad1',
    utm_term: 'skills',
  })
  const url = new URL(buildUrlWithParams(BASE, params))
  assert.equal(url.searchParams.get('utm_source'), 'meta')
  assert.equal(url.searchParams.get('utm_medium'), 'cpc')
  assert.equal(url.searchParams.get('utm_campaign'), '0411')
  assert.equal(url.searchParams.get('utm_content'), 'ad1')
  assert.equal(url.searchParams.get('utm_term'), 'skills')
})

check('fbclid', () => {
  const params = extractAllowedParams('?fbclid=IwAR123abc')
  assert.deepEqual(params, { fbclid: 'IwAR123abc' })
  assert.equal(buildUrlWithParams(BASE, params), `${BASE}?fbclid=IwAR123abc`)
})

check('parâmetros desconhecidos são descartados', () => {
  const params = extractAllowedParams('?foo=bar&utm_source=meta&session_id=xyz')
  assert.deepEqual(params, { utm_source: 'meta' })
})

check('parâmetros duplicados — mantém o primeiro valor', () => {
  const params = extractAllowedParams('?utm_source=first&utm_source=second')
  assert.deepEqual(params, { utm_source: 'first' })
})

check('caracteres especiais/codificados fazem round-trip', () => {
  const params = extractAllowedParams('?utm_campaign=summer%20sale%20%26%20more')
  assert.deepEqual(params, { utm_campaign: 'summer sale & more' })
  const url = new URL(buildUrlWithParams(BASE, params))
  assert.equal(url.searchParams.get('utm_campaign'), 'summer sale & more')
})

check('não duplica query string ao reaplicar', () => {
  const params = extractAllowedParams('?utm_source=meta')
  const once = buildUrlWithParams(BASE, params)
  const twice = buildUrlWithParams(once, params)
  const url = new URL(twice)
  assert.equal(url.searchParams.getAll('utm_source').length, 1)
})

check('extra não-tracking (email) é preservado junto com UTMs', () => {
  const params = extractAllowedParams('?utm_source=meta&utm_medium=cpc')
  const url = new URL(buildUrlWithParams(BASE, params, { email: 'a@b.com' }))
  assert.equal(url.searchParams.get('utm_source'), 'meta')
  assert.equal(url.searchParams.get('utm_medium'), 'cpc')
  assert.equal(url.searchParams.get('email'), 'a@b.com')
})

check('funciona sem parâmetros e preservando base com query pré-existente', () => {
  const withEmail = `${BASE}?email=a%40b.com`
  const params = extractAllowedParams('')
  const url = new URL(buildUrlWithParams(withEmail, params))
  assert.equal(url.searchParams.get('email'), 'a@b.com')
})

const total = results.length
console.log(`\nUTM forwarding tests: ${passed}/${total} PASS\n`)
for (const r of results) {
  console.log(`${r.status === 'PASS' ? '✓' : '✗'} ${r.name}${r.error ? ` — ${r.error}` : ''}`)
}
process.exit(passed === total ? 0 : 1)
