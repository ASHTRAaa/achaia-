# micro1.ai "micro1 Intelligence" Section Audit Notes (Step 0)

## 1. Stage Pinning & Scroll Distance
- **Pinning Technique**: CSS sticky pinning (`position: sticky; top: 0; height: 100vh`) inside a tall scrolling wrapper container.
- **Scroll Distance**:
  - Wrapper height is proportional to the number of items: `calc(items.length * 100vh)`.
  - For 3 items, the wrapper height is approximately `300vh` (scroll distance ≈ `200vh` between first and last items).
  - For Achaia's 4 core service disciplines (Shopify, ERP, Mobile Apps, AI Automation), an optimal wrapper height is `350vh` to `400vh` (`~80-100vh` per discipline), allowing effortless, smooth reading pacing.

## 2. Left Column Mechanics
- **Items**: Vertical list of disciplines/features.
- **Translation**: The list container translates vertically as scroll progress advances (`transform: translateY(-...)`) so the active item aligns into the center reading focus zone.
- **Active vs. Inactive Item Styling**:
  - **Active Item**:
    - Title: Bright white (`#FFFFFF` or `#F5F5F3`), font-weight 600–700, opacity `1.0`.
    - Chevron: Small accent-colored `>` (e.g., `#315EFB` or white) with subtle hover nudge (`translateX(4px)`).
    - Description: Visible, opacity `0.85–0.9`, color `#A6A6A6`, height expanded.
  - **Inactive Item**:
    - Title: Dimmed opacity `~0.25–0.35`, muted color (`#666666`), scale `0.98–1.0`.
    - Description: Collapsed or faded (`opacity: 0`, `max-height: 0` or low opacity), keeping the visual weight focused squarely on the active topic.

## 3. Top & Bottom Mask Gradient Fade
- **Mask-Image**: Applied to the left item list container to prevent harsh cutoffs as items enter from below or exit above.
- **CSS Values**:
  ```css
  mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
  ```
- This creates the distinctive micro1 look where the previous item fades to zero at the top while the incoming item's text fades smoothly at the bottom.

## 4. Right Column Visual Stage
- **Stacking**: Visual cards are positioned absolutely in the same container (`position: absolute; inset: 0`).
- **Transitions**:
  - **Active Card**: `opacity: 1`, `transform: translateY(0px) scale(1)`.
  - **Inactive Card**: `opacity: 0`, `transform: translateY(24px) scale(0.96)`.
  - **Transition**: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`.
  - **Asset Presentation**: `object-fit: contain` to preserve transparent 3D renders and perspective mockup device angles without edge cropping.

## 5. Pin / Unpin Boundary & Bidirectional Scrolling
- **Pinning begins**: When the top of the wrapper hits the viewport top (`sticky top: 0`).
- **Pinning ends**: When the bottom of the wrapper reaches the bottom of the viewport; normal document scroll resumes seamlessly into the next section.
- **Reversibility**: Scrolling upwards scrubs the progress backwards through the items with identical transitions and zero hysteresis or jitter.

## 6. Architecture & Implementation in React
- Pure React scroll listener (`requestAnimationFrame` / `passive: true`) with `getBoundingClientRect()` calculation:
  ```js
  const rect = wrapperRef.current.getBoundingClientRect();
  const maxScroll = rect.height - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);
  const activeIndex = Math.min(Math.floor(progress * items.length), items.length - 1);
  ```
- Works out of the box with Vite, Tailwind CSS, and zero external scroll bloat, guaranteeing 60fps / 120fps GPU performance on mobile and desktop.

## 7. Responsive Behavior (< 900px)
- On mobile/tablet screens (< 900px or < 768px):
  - Sticky pinning is disabled to avoid mobile viewport trapping and address bar jumps.
  - Switches to a clean stacked layout: each item shows its title, badge, description, and visual card in natural vertical reading sequence.
