# Repository analysis: Poorna Houseware B2B Catalog

Date: 2025-10-27

## Overview
A mobile-first React + Vite application that showcases a B2B product catalog and lets users build an order and send it via WhatsApp. The app uses hash-based routing for static hosting, a simple in-memory cart context, Tailwind (via CDN) for styling, and optional PWA and image optimization for production builds.

- Frameworks: React 19, React Router 7, Vite 6
- Language: TypeScript 5 (isolated modules)
- Hosting model: Static (hash routing), PWA enabled in production
- Styling: Tailwind via CDN in `index.html` (no PostCSS build)
- Data: Static catalog in `final-2/data/products.ts`

## Architecture
- Entry: `index.tsx` mounts `<App />` into `#root`
- Router: `<HashRouter>` with routes
  - `/` → `HomePage`
  - `/categories` → `AllCategoriesPage`
  - `/category/:categorySlug` → `CategoryPage`
  - `/product/:productSlug` → `ProductPage`
  - `/cart` → `CartPage`
- State: `CartContext` provides cartItems, add/update/remove, derived `itemCount`
- UI: Components in `final-2/components/` (Header, MobileTabBar, ProductCard, etc.)
- Utilities: `utils/catalog.ts` provides recursive product lookup with breadcrumb path
- Data model: types in `types.ts` (Category, Product, Variant, CartItem)
- Seller tooling: `pages/SellerDashboard.tsx` (not exposed in routes) to curate catalog and export JSON

### Data flow
- Product discovery: `HomePage` shows featured lanes + grid of categories; search via `?q=` query over categories and first-level products.
- Category view: `CategoryPage` lists products under a category.
- Product view: `ProductPage` supports nested subItems (acts like a category) or variants (with quantity inputs). Adds selected variants to cart.
- Cart: `CartPage` groups items by product name and composes a WhatsApp message to a configured number.

## Build and dependencies
- Scripts: `dev`, `build`, `preview`
- DevDeps: Vite, @vitejs/plugin-react, vite-plugin-imagemin, vite-plugin-pwa, TypeScript
- PWA: Workbox `generateSW` with runtime cache for `/assets/images/*`
- Images: Production builds run `vite-plugin-imagemin` with safe-conservative settings; two images are excluded from mozjpeg in config.

## Quality gates
- Build: PASS (vite build completed successfully)
- Typecheck: PASS (no TS errors during build; isolatedModules on)
- Lint: Not configured (no ESLint/Prettier in repo)
- Tests: None present

## Strengths
- Clean, predictable component structure with clear separation of pages, components, and data
- Good mobile UX: sticky header/tab bar, reduced motion support, lazy images with skeleton
- Accessibility touches: skip link, aria labels, focus handling in search, semantic nav in places
- Production readiness: PWA + image optimization + static hosting (hash routing)

## Risks / Issues found
- Dead/unused code
  - `context/ThemeContext.tsx` and `components/ThemeToggle.tsx` are empty; not used.
- Cart persistence
  - Cart resets on page reload. No localStorage/sessionStorage persistence.
- Search coverage
  - Search only checks category names and first-level products; subItems are not searched.
- Slug/URL hygiene
  - Some slugs in `products.ts` contain uppercase or mixed case (e.g., `Boilo`, `HDHMR`, `MDF`). Consider normalizing to lowercase kebab-case for consistency.
- SEO/metadata
  - SPA uses a single `index.html`. Product/category pages can't set unique meta tags without SSR or client-side head management (e.g., react-helmet-async). Current OG/Twitter images are static.
- Tailwind via CDN
  - Pros: zero build. Cons: no purge/tree-shaking, custom config limited to inline config. Bundle may include unused styles.
- Environment variables
  - Vite defines `process.env.GEMINI_API_KEY`, but the app doesn't use it. README mentions AI Studio link, which seems unrelated to current catalog functionality.
- Image set drift
  - `public/assets/images/README.md` list doesn’t match current `products.ts` (new names like `twostar.jpg`, etc.). May confuse contributors.
- Security/Privacy
  - WhatsApp number is hard-coded in `CartPage.tsx`. If this changes per environment, consider a config layer (env or JSON in `public/`).

## Quick wins (low risk, high value)
1) Persist cart to localStorage
   - Hydrate on load and save on change. Keeps orders across refreshes.
2) Clean up unused theme files
   - Remove or implement a real dark-mode toggle; otherwise delete to reduce noise.
3) Normalize slugs
   - Enforce lowercase kebab-case; ensure routes and images are updated accordingly.
4) Improve search
   - Include subItems and variants for broader matches; highlight matches in UI.
5) Update images README
   - Auto-generate the expected image list from `products.ts` to avoid drift.
6) Make WhatsApp number configurable
   - Read from `import.meta.env.VITE_WHATSAPP_NUMBER` (with fallback) or a JSON config in `public/`.
7) Add basic linting/formatting
   - ESLint + Prettier with React/TS rules for consistency, accessibility, and common pitfalls.

## Medium-term improvements
- SEO/meta per route
  - Add `react-helmet-async` to inject titles/descriptions per page; for full SEO, consider prerender (vite-plugin-ssg) or server-side rendering.
- Tailwind build setup
  - Replace CDN with local Tailwind + PostCSS to enable purge (significant CSS size savings) and full theming.
- Image formats
  - Turn on `enableFormats` on `ImageWithSkeleton` where AVIF/WEBP are available, or add a build step to generate them.
- Error handling and UX
  - For missing images, show a better placeholder and optionally log to an error tracker.
- Test coverage
  - Add a few component tests (cart logic, product page variant flows) with Vitest + React Testing Library.

## Notable code observations
- `ImageWithSkeleton` thoughtfully supports reduced motion, placeholders, eager loading for LCP, and optional AVIF/WEBP.
- `ProductPage` correctly handles nested product trees vs. variant pages, and guards against click-through right after navigation for fullscreen.
- `SellerDashboard` is a handy internal tool to author the catalog; consider protecting it behind a feature flag and adding a route only in development.

## Suggested implementation snippets
- Cart persistence sketch (inside `CartProvider`):
  - On init: read `localStorage.getItem('cartItems')`
  - On change: `localStorage.setItem('cartItems', JSON.stringify(cartItems))`
- WhatsApp number via env: `const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '91xxxxxxxxxx'`

## How to run
- Install: `npm ci`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`; Preview: `npm run preview`

## Appendix: files reviewed
- Config: `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`, `index.css`
- App: `index.tsx`, `App.tsx`
- Context: `context/CartContext.tsx`, `context/ThemeContext.tsx`
- Components: `components/*`
- Pages: `pages/*`
- Data/util: `data/products.ts`, `utils/catalog.ts`
- Public: `public/assets/images/README.md`
