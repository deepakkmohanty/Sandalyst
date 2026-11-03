## Storefront architecture
- Keep TanStack Start file routes and CSS-first Tailwind v4; this preserves the platform runtime rather than introducing a second router or obsolete config.
- Keep all mock catalogue and placeholder content in src/data/mock.ts, with media imported via asset pointers; a photo can be replaced without changing presentation components.
- Use browser-only, hydration-safe Zustand persistence for mock bag and wishlist, with no backend; the storefront brief explicitly excludes real commerce and authentication.
- Use the shared Icon, Heading, Placeholder, CroppedImage and accessible Overlay primitives; they centralize brand presentation and keyboard behavior.
- Phase 3 destinations stay in an accessible coming-later dialog until that phase is requested; do not build or link missing content routes prematurely.
