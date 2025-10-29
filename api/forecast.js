export default async function handler(req, res) {
  try {
    const { q = "dubai", days = "3" } = req.query || {}
    const apiKey = process.env.WEATHER_API_KEY

    if (!apiKey) {
      return res.status(500).json({ error: "Missing WEATHER_API_KEY on server" })
    }

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(
      q
    )}&days=${encodeURIComponent(days)}`

    const r = await fetch(url, { headers: { Accept: "application/json" } })
    const data = await r.json()

    if (!r.ok) {
      return res.status(r.status).json(data)
    }

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=60")
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ error: "Upstream request failed", details: String(err) })
  }
}


