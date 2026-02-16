# Gallery Website Prototype

Static implementation of the *trippled.studio* prototype provided by Rasa.

## Stack
- Pure HTML + CSS (no build tools)
- Google Fonts: Cormorant Garamond + Inter
- Placeholder imagery sourced from Unsplash

## Getting Started
```bash
# from repo root
python3 -m http.server 8000
# visit http://127.0.0.1:8000
```

Alternatively, open `index.html`, `gallery.html`, or `contact.html` directly in a browser.

## Development Notes
- Three static pages: `index.html` (Home), `gallery.html`, `contact.html`.
- Shared styles live in `styles.css`; no build pipeline.
- Images are referenced via remote URLs, so an internet connection is required for placeholders.
- Replace placeholder copy/artwork before going live.

## Preview
`preview.png` captures the original single-page layout and remains for reference.
