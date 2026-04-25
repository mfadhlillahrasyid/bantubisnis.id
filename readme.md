# BantuBisnis — Digital Agency Website

> A digital agency helping Indonesian SMEs survive and grow through the pandemic — with affordable paid ads, social media, branding, and web development services.

![License](https://img.shields.io/badge/license-MIT-green)
![Built With](https://img.shields.io/badge/built%20with-HTML%20%2F%20Tailwind%20%2F%20Vanilla%20JS-blue)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black)

---

## Overview

**BantuBisnis** is a static marketing website for a digital agency dedicated to helping small businesses and local entrepreneurs navigate the challenges of the pandemic era — with limited budgets, lean teams, and zero room for wasted spend.

The site covers five core services: Paid Ads, Social Media Management, Branding & Visual Identity, Web Development, and SEO & Content — each presented with a modal detail view and a client portfolio section.

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS v4 |
| Animations | AOS (Animate on Scroll) |
| Smooth Scroll | Lenis |
| Slider / Marquee | Swiper.js |
| Icons | Lucide Icons |
| JS | Vanilla ES Modules |
| Build | Tailwind CLI |
| Dev Server | live-server |
| Deploy | Vercel |

---

## Project Structure

```
bantubisnis/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css          # Output Tailwind (auto-generated)
│   │   ├── images/
│   │   │   └── client/
│   │   │       ├── c-logo-new.webp
│   │   │       └── c-logo-new-2.webp
│   │   └── js/
│   │       ├── main.js            # Entry point — semua init di sini
│   │       └── components/
│   │           └── services.js    # Service section + modal logic
│   └── index.html
├── src/
│   └── input.css                  # Tailwind source
├── vercel.json
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/username/bantubisnis.git
cd bantubisnis
npm install
```

### Development

Menjalankan Tailwind watcher + live-server secara bersamaan:

```bash
npm run dev
```

Buka browser di `http://localhost:5500`

### Build for Production

Generate `style.css` yang sudah diminify:

```bash
npm run build:css
```

---

## Deployment (Vercel)

Project ini sudah dikonfigurasi untuk Vercel via `vercel.json`:

```json
{
  "buildCommand": "npm run build:css",
  "outputDirectory": "public"
}
```

**Steps:**
1. Push repo ke GitHub
2. Connect repo di [vercel.com](https://vercel.com)
3. Vercel auto-detect config → deploy

Tidak perlu framework adapter. Vercel akan build CSS lalu serve folder `public` sebagai static site.

---

## JavaScript Architecture

Semua JS menggunakan **ES Modules** — pastikan script tag di `index.html` pakai `type="module"`:

```html
<script type="module" src="public/assets/js/main.js"></script>
```

### Module breakdown

**`main.js`** — entry point, urutan init penting:

```
lucide.createIcons()   ← harus pertama
AOS.init()
Lenis init + RAF loop
Swiper init
initServices()         ← inject HTML ke DOM
lucide.createIcons()   ← re-run setelah services inject icon baru
```

**`components/services.js`** — self-contained module:
- `servicesData[]` — semua data layanan
- `renderSection()` — inject HTML grid ke `#services-section`
- `buildModal()` — generate HTML modal per layanan
- `initModal()` — event delegation (click, keyboard, ESC, backdrop)
- `lockScroll()` / `unlockScroll()` — body scroll lock yang benar di iOS Safari

---

## Scroll Lock — Why `position: fixed`

Modal menggunakan `position: fixed` + `top: -scrollY` untuk lock body scroll, bukan `overflow: hidden`. Ini diperlukan karena iOS Safari mengizinkan momentum scroll menembus `overflow: hidden` pada body.

```js
function lockScroll() {
  _scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${_scrollY}px`;
}

function unlockScroll() {
  document.body.style.position = '';
  window.scrollTo({ top: _scrollY, behavior: 'instant' });
}
```

---

## NPM Scripts

| Script | Fungsi |
|---|---|
| `npm run dev` | Watch CSS + live-server (concurrent) |
| `npm run build:css` | Build & minify CSS untuk production |
| `npm run watch:css` | Watch CSS saja |
| `npm run serve` | Jalankan live-server saja |

---

## CDN Dependencies

Dimuat via CDN di `index.html` (tidak perlu install):

```html
<!-- AOS -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<!-- Lenis -->
<script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

<!-- Swiper -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Lucide -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

---

## License

MIT © BantuBisnis