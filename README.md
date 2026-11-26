# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).


## ScrollShowcase Component (micro1.ai Intelligence Architecture)

A scroll-driven, sticky-pinned showcase component replicated directly from the **micro1.ai Intelligence** section.

### Component API

```jsx
import ScrollShowcase from "@/components/home/ScrollShowcase";

<ScrollShowcase
  badge="CORE DISCIPLINES • VERTICAL SHOWCASE"
  heading="Software built around the way your business works."
  subtitle="Four core engineering disciplines connected through one delivery model."
  items={[
    {
      id: "shopify",
      number: "01",
      tag: "COMMERCE",
      title: "Shopify & E-Commerce Systems",
      description: "We design and engineer high-converting Shopify storefronts...",
      href: "/services/shopify",
      caseStudyHref: "/work/moms-and-moon",
      caseStudyName: "Moms & Moon",
      image: "/work-assets/moni_monu_laptop.webp",
      imageAlt: "Moms & Moon Shopify Storefront",
      client: "Moms & Moon",
      metrics: ["Custom Lookbook UX", "Payment Gateway Setup"]
    }
  ]}
/>
```

### Tunable Constants Reference

| Parameter | Default Value | Description |
| :--- | :--- | :--- |
| **Scroll Length Per Item** | `85vh` (total `items.length * 85vh`) | Defines how much user scroll travel is consumed per active discipline. Higher values give slower, more deliberate pacing. |
| **Transition Duration** | `600ms` - `700ms` | Duration for item translation, opacity shifts, and image crossfades. |
| **Transition Easing** | `cubic-bezier(0.16, 1, 0.3, 1)` | Cinematic ease-out curve matching micro1's spring deceleration without rubber-banding. |
| **Inactive Item Opacity** | `0.28 - 0.30` | Opacity of non-focused items in the left list. On hover, dims up to `0.50`. |
| **Active Item Opacity** | `1.0` | Full contrast white with expanded description and chevron indicator. |
| **Mask Gradient Stops** | `linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)` | CSS `-webkit-mask-image` stops applied to the left column list to fade items at the top and bottom edges. |
| **Mockup Stage Size** | `h-[420px] lg:h-[480px]` | Height of the right 3D mockup card container. |
| **Responsive Breakpoint**| `900px` | Screens `< 900px` automatically switch from sticky pinning to a clean, accessible stacked layout. |

### Testing & Verification Routes
- **Homepage Integration**: [`/`](http://localhost:5173/) directly below the Hero section.
- **Isolated Pin/Unpin Demo Harness**: [`/showcase-demo`](http://localhost:5173/showcase-demo) with `100vh` top and bottom filler buffers.

