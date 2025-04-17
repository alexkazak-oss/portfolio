const rateLimitMap = new Map<string, number>()

export function isRateLimited(ip: string, windowMs = 60_000) {
  const now = Date.now()
  const last = rateLimitMap.get(ip) || 0
  if (now - last < windowMs) return true
  rateLimitMap.set(ip, now)
  return false
}
