const map = new Map()

export class Rate {
  hit(key: string) {
    const now = Date.now()
    const d = map.get(key) || { c: 0, t: now }

    if (now - d.t > 15 * 60 * 1000) {
      d.c = 0
      d.t = now
    }

    d.c++
    map.set(key, d)

    if (d.c > 100) throw new Error("Too many requests")
  }
}
