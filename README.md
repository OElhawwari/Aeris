# Aeris — Weather Dashboard

Aeris is a modern, responsive weather dashboard. It shows current conditions and a 3‑day forecast with animated backgrounds and day/night theming.

## Features
- Live location search (WeatherAPI)
- Current conditions: temperature, status, country/city, local date/time
- Details: wind speed, wind direction, chance of precipitation
- 3‑day forecast cards (responsive grid)
- Day/Night gradients and subtle animated background (clouds/stars)
- Full‑page loading overlay during data fetch

## Tech Stack
- HTML5
- Tailwind CSS (CDN)
- Minimal custom CSS for fonts/animations (`css/style.css`)
- Vanilla JavaScript (`js/index.js`)
- Vercel Serverless Function proxy (`api/forecast.js`)

## Folder Structure
```
.
├── index.html
├── api/
│   └── forecast.js         # Serverless proxy to WeatherAPI (Vercel)
├── css/
│   ├── bootstrap.min.css
│   └── style.css           # Fonts, animations, stars/clouds, night mode
├── js/
│   ├── bootstrap.bundle.min.js
│   └── index.js            # Fetch, DOM updates, background, loader
├── img/                    # Icons, logo assets
└── fonts/                  # Custom fonts (Viagram, RIMONS)
```

## Setup
You can run Aeris purely as static HTML, or with a Vercel backend to hide the API key.

### Option A — Static (no backend)
1. Open `index.html` in a browser.
2. Note: Your WeatherAPI key would be exposed if called directly from the client (not recommended for production).

### Option B — With Vercel Serverless API (recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Set environment variable in your Vercel project:
   - `WEATHER_API_KEY=your_real_key`
3. Run locally with serverless functions:
   - `vercel`
   - `vercel dev`
4. Visit the local URL shown by Vercel; the API will be available at `/api/forecast`.
5. Deploy to Vercel when ready.

## Configuration
- Default city: Change the initial query in `js/index.js`
  - `getWeatherData("dubai")`
- API base (optional): If serving static locally but calling a deployed API, set this in HTML before scripts:
  ```html
  <script>window.AERIS_API_BASE = 'https://your-app.vercel.app';</script>
  ```

## Accessibility
- Semantic structure with header, main, footer
- Labels and ARIA attributes on interactive elements
- Good text contrast over backgrounds

## Troubleshooting
- 404 on `/api/forecast`:
  - Use `vercel dev`, or deploy to Vercel. Static servers won’t provide serverless routes.
- No data / API errors:
  - Verify `WEATHER_API_KEY` is set in Vercel project settings
  - Check WeatherAPI quota and network availability
- Styles missing:
  - Ensure Tailwind CDN is loading (network access required)

## License
© 2025 Aeris. All rights reserved. For educational/portfolio use.

## Credits
- Weather data: WeatherAPI — https://www.weatherapi.com/
- Tailwind CSS — https://tailwindcss.com/
