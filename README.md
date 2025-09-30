## Image Gallery

A simple, responsive image gallery built with React and Vite. It supports light/dark themes, lazy-loaded images, and a fullscreen modal preview.

### Features

- Responsive grid layout
- Click-to-zoom modal preview
- Theme toggle (light/night via DaisyUI)
- Lazy loading for images
- Fast dev experience with Vite HMR

### Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 + DaisyUI
- ESLint (recommended rules)

### Getting Started

Prerequisites: Node.js 18+ recommended.

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

5. Lint the project

```bash
npm run lint
```

### Project Structure

```text
ImageGallery/
├─ index.html
├─ package.json
├─ public/
├─ src/
│  ├─ main.jsx            # App bootstrap
│  ├─ App.jsx             # Layout, theme provider, grid
│  ├─ index.css / App.css # Styles
│  ├─ context/
│  │  └─ ImageContext.js  # Images + theme context
│  └─ components/
│     ├─ ThemeToggle.jsx  # Light/Night switch
│     ├─ ImageCard.jsx    # Card with lazy image + click handler
│     └─ ImageModal.jsx   # Dialog for fullscreen preview
└─ vite.config.js
```

### How It Works

- Images and theme state come from `src/context/ImageContext.js` via React Context.
- `src/components/ThemeToggle.jsx` switches between `winter` and `night` themes.
- `src/components/ImageCard.jsx` renders each image and opens `ImageModal` on click.
- `src/components/ImageModal.jsx` uses an HTML `<dialog>` for a clean, accessible preview.

### Customizing

- Replace the default image list in `src/context/ImageContext.js` with your own data or API.
- Adjust Tailwind/DaisyUI styles via utility classes in the components.

### Acknowledgements

- Placeholder images provided by `https://picsum.photos`.

### License

No license specified.

---

Made with ❤️ Sumit Tomar
