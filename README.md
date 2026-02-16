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
- Local artwork lives in `assets/` (cropped + balanced JPEGs).
- Optional helper script `process-images.js` (Node + Jimp) crops/normalizes any new artwork. Run `npm install` once, then `node process-images.js` after dropping new files into `assets/`.

## Preview
`preview.png` captures the original single-page layout and remains for reference. Current multi-page previews live in `index-preview.png`, `gallery-preview.png`, and `contact-preview.png`.
