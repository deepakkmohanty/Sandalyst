# Sandalyst — replacement and confirmation register

## Media
- Product and journal photos: AI-generated sample images were created and wired into every photo slot at the client's request (Nov 2026). They are sample imagery only; every one must be replaced with the client's real photos before launch.
- The only supplied logo is a two-page PDF with embedded raster lockups. Both extracted originals retain their geometry and colors; pure white page background is transparent for display. The untouched PDF is preserved as an asset. SVG lockups are needed for launch.
- Monogram is CSS-clipped from the supplied raster lockup, not redrawn. The favicon is a proportionally resized crop with transparent padding.
- The sample photos are generic; any emblem or insole detail must be confirmed against the supplied artwork when the real A1–A3 photos arrive. Preserve all baked-in text in hero/editorial use.
- The other-brand marks described for P4, P6, P7, P8 and P9 existed only in the missing client photos; the samples contain none, but rights must be confirmed when real photos arrive and marks must never be concealed.
- P5: remove phone chrome by non-destructive crop only when the real photo arrives.

## Mock catalogue and content
Exactly nine products. Names, prices (Rs. 899–1,999), sizes UK/India 3–8, stock, SKUs, occasions, colors, materials, policies, USPs, contact details and size measurements are placeholders/TBC. No discounts or real sales rankings. Default reviews are empty; sample review mode is explicitly labelled. Journal, newsletter, announcement, offer and brand-tone copy are provisional. Social links are not invented.

## Anatomy
Pin coordinates follow the brief (29/49, 49/66, 76/42) and cannot be aligned visually until A2 arrives. Detail labels are descriptive, not material or craftsmanship claims, and need confirmation.

## Functional boundaries
Frontend-only bag/wishlist persist in this browser. No order, payment, login, subscription or message is sent. Phase 3 destinations open a labelled phase notice; Phase 3 pages and swatch demo are deferred.

## Platform deviations
TanStack Start routing and Tailwind v4 CSS-first configuration replace react-router-dom and tailwind.config.ts. Token colors are OKLCH rather than HSL triplets. Global styles live in src/styles.css. Fixed responsive font sizes and zero letter-spacing follow platform typography constraints. Footer alone is a dark page band; loader uses a light surface to preserve that rule.
