# FAAAAA React PWA

A simple Progressive Web App built with Next.js featuring a red button that plays a sound.

## 🌐 Live Demo

**https://sidpetkar.github.io/faaaa-react**

## Features

- 🔴 Big red button with skull emoji
- 🔊 Plays sound when pressed
- 📱 PWA enabled - install on mobile/desktop
- 🎨 Responsive design
- ⚡ Built with Next.js 15

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## PWA Installation

When you visit the site in a compatible browser, you'll see an install prompt to add the app to your home screen.

## Project Structure

```
faaa-react/
├── app/
│   ├── page.js          # Main page with red button
│   ├── layout.js        # Root layout with PWA metadata
│   └── globals.css      # Global styles
├── public/
│   ├── faaa.mp3         # Sound file
│   ├── manifest.json    # PWA manifest
│   └── *.png            # PWA icons
└── next.config.js       # Next.js config with PWA
```

## Tech Stack

- Next.js 15
- React 19
- next-pwa
- CSS3

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions.
See [DEPLOYMENT.md](DEPLOYMENT.md) for setup instructions.
