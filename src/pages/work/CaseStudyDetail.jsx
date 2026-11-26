import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import { LayoutGrid } from "@/components/ui/layout-grid";

export const caseStudiesData = {
  "moms-and-moon": {
    id: "moms-and-moon",
    client: "Moms & Moon",
    tag: "Shopify & E-Commerce",
    serviceVertical: "Shopify & E-Commerce",
    serviceLink: "/services/shopify",
    title: "Moms & Moon: Engineering a High-Converting Shopify Store for Premium Children's Wear",
    subtitle:
      "We designed and built a mobile-first Shopify e-commerce presence for a boutique children's fashion brand, featuring custom festive collection lookbooks, age/size variant filters, and domestic payment integrations.",
    heroImg: "/work-assets/mnm_home2.webp",
    liveUrl: "https://momsnmoon.com",
    context:
      "Moms & Moon designs handcrafted festive and occasion wear for children. The business was expanding from bespoke boutique orders to a direct-to-consumer online brand. They needed a digital storefront that captured the elegance of their garments while delivering frictionless checkout on mobile devices.",
    objectives: [
      "Present high-resolution collection imagery without slowing down mobile load times.",
      "Simplify discovery across festive collections, age brackets (0–12 years), and gender categories.",
      "Integrate smooth domestic payment methods including UPI, cards, and net banking.",
      "Establish automated order notifications and shipping tracking for parents.",
    ],
    scopeOfWork: [
      "Custom Shopify theme architecture & liquid templating",
      "Mobile-first responsive design & festive collection lookbooks",
      "Product catalog categorization, age/size variant matrices, and inventory triggers",
      "Payment gateway configuration (Razorpay / UPI / Cards)",
      "Shipping carrier integration & automated customer WhatsApp/email notifications",
      "Google Analytics 4 enhanced e-commerce conversion event tracking",
    ],
    solutionTitle: "A boutique commerce storefront built for fast, confident purchasing.",
    solutionDesc:
      "We engineered a custom Shopify storefront prioritizing clean typography, generous whitespace, and instant mobile responsiveness. High-res product galleries are served via responsive picture formats with lazy loading, while product detail pages present intuitive size guides and one-click add-to-cart flows.",
    keyDecisions: [
      {
        title: "Liquid-first customization over heavy app bloat",
        desc: "Instead of installing dozens of third-party Shopify apps that slow down mobile page load, we coded variant selectors, announcement banners, and lookbooks natively in Liquid and vanilla JavaScript.",
      },
      {
        title: "Mobile-optimized checkout journey",
        desc: "Over 75% of kids wear purchases occur on smartphones. We minimized form fields, enabled browser autofill, and integrated instant UPI redirection.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Production Storefront",
        desc: "Fully functional, responsive Shopify store live and accepting online orders.",
      },
      {
        title: "Fast Mobile Experience",
        desc: "Optimized image compression ensuring quick load times across 4G and 5G networks.",
      },
      {
        title: "Operational Independence",
        desc: "Client's team successfully managing inventory, product uploads, and fulfillment from Shopify admin.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs provides ongoing seasonal catalog updates, banner refreshes for major festival drops, and technical maintenance as new collection lines launch.",
    galleryTitle: "Storefront Touchpoints",
    gallerySubtitle: "Clean editorial presentation designed for high brand trust and mobile ease.",
    gallery: {
      main: "/work-assets/mnm_home.webp",
      side1: "/work-assets/mnm_arrivals.webp",
      side2: "/work-assets/mnm_vusang.webp",
      side3: "/work-assets/mnm_trends.webp",
    },
    galleryItems: [
      {
        title: "Hero Storefront & Stylist Entry",
        caption: "Full-bleed kids occasion wear hero banner pairing direct collection shopping with customized dress stylist inquiries.",
        thumbnail: "/work-assets/mnm_home.webp",
      },
      {
        title: "New Arrivals & Filterable Catalog",
        caption: "Structured product grid with availability and price filters across 19+ new festive pieces and INR pricing.",
        thumbnail: "/work-assets/mnm_arrivals.webp",
      },
      {
        title: "Vusang Handloom Editorial Story",
        caption: "Dedicated storytelling layout celebrating Bengal, Jharkhand, and Odisha handloom craftsmanship alongside curated apparel.",
        thumbnail: "/work-assets/mnm_vusang.webp",
      },
      {
        title: "Shop by Occasion Bento Grid",
        caption: "Visual occasion-based discovery cards guiding parents directly to Festival, Wedding, Party, and Gifting collections.",
        thumbnail: "/work-assets/mnm_trends.webp",
      },
    ],
  },

  "skmt-trust": {
    id: "skmt-trust",
    client: "SKMT Trust",
    tag: "ERP & Business Systems",
    serviceVertical: "ERP & Business Systems",
    serviceLink: "/services/erp",
    title: "SKMT Trust: Custom Academic & Institutional Governance ERP Portal",
    subtitle:
      "We built a centralized governance portal replacing disconnected spreadsheets to manage fellowship tracks, affiliated institute records, student enrollment cohorts, and institutional compliance.",
    heroImg: "/work-assets/skmt.webp",
    liveUrl: "https://skmttrust.com",
    context:
      "SKMT Trust oversees multiple affiliated educational institutes and specialized fellowship programs. Leadership and program coordinators were managing student cohorts, attendance records, fee status, and institute affiliations across dozens of manual Google Sheets, creating data discrepancy risks and heavy manual administrative burden.",
    objectives: [
      "Consolidate institutional data into a secure, centralized database with daily automated backups.",
      "Build role-based executive dashboards for trustees, institute directors, and coordinators.",
      "Track active cohorts (including an initial 30-student fellowship track) and student enrollment lifecycles.",
      "Provide real-time visibility into affiliated institutes, course programs, and fee reconciliation.",
    ],
    scopeOfWork: [
      "Operational workflow discovery & data model architecture",
      "PostgreSQL relational database design with complete audit logging",
      "Role-based authentication & access controls (Admin, Trustee, Coordinator)",
      "Program & Fellowship Track management modules",
      "Student enrollment, attendance, and fee tracking dashboards",
      "Secure cloud server provisioning, data migration, and administrative training",
    ],
    solutionTitle: "A unified governance platform engineered for institutional integrity.",
    solutionDesc:
      "We designed and deployed a tailored governance dashboard giving trust leadership instant visibility into total enrollments, active students, affiliated institutes, and program tracks. System permissions ensure coordinators can only edit their assigned tracks, while executive trustees have bird's-eye reporting.",
    keyDecisions: [
      {
        title: "Relational integrity over unstructured sheets",
        desc: "Instituted strict database relationships between institutes, courses, and student cohorts, eliminating duplicate entries and orphan records.",
      },
      {
        title: "Action-oriented governance UI",
        desc: "Prioritized clear high-level metrics cards (Affiliated Institutes, Active Students, Enrollment Status) with one-click drill-downs into individual student profiles.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Centralized Records",
        desc: "100% of student enrollment records and affiliated institute profiles migrated from legacy spreadsheets.",
      },
      {
        title: "Role-Based Security",
        desc: "Protected access ensuring sensitive fee records and student documents are accessible only to authorized personnel.",
      },
      {
        title: "Real-Time Oversight",
        desc: "Trust leadership accesses live institutional status from any desktop or tablet device.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs maintains the cloud infrastructure, handles database maintenance, and adds new program modules as the trust expands to additional affiliated institutes.",
    galleryTitle: "Governance Interface",
    gallerySubtitle: "Structured metrics and student management engineered for educational administration.",
    gallery: {
      main: "/work-assets/skmt_gallery.webp",
      side1: "/work-assets/skmt_notice.webp",
      side2: "/work-assets/skmt_notice2.webp",
      side3: "/work-assets/skmt_2.webp",
    },
    galleryItems: [
      {
        title: "Campus Life & Community Showcase",
        caption: "Visual highlight reel covering Student Life & Training, Workshops & Seminars, and Volunteering & Welfare initiatives.",
        thumbnail: "/work-assets/skmt_gallery.webp",
      },
      {
        title: "Pinned Notices & Institutional Affiliations",
        caption: "Front-page announcement feed for internship batch circulars paired with verified skill mission and council partner badges.",
        thumbnail: "/work-assets/skmt_notice.webp",
      },
      {
        title: "Searchable Official Notice Board",
        caption: "Filterable circular archive allowing students and colleges to search and read reference-tagged Academic, Exam, and Announcement notices.",
        thumbnail: "/work-assets/skmt_notice2.webp",
      },
      {
        title: "Super Admin Governance Dashboard",
        caption: "Centralized administrative console tracking affiliated institutes, active student enrollments, program tracks, and audit logs in real time.",
        thumbnail: "/work-assets/skmt_2.webp",
      },
    ],
  },

  "gaurav-synthetics": {
    id: "gaurav-synthetics",
    client: "Gaurav Synthetics",
    tag: "Textile / Digital Transformation",
    serviceVertical: "Shopify & E-Commerce",
    serviceLink: "/services/shopify",
    title: "Gaurav Synthetics: Building an Authoritative Digital Catalog for a Legacy Textile Dealership",
    subtitle:
      "We turned an offline wholesale brand into a discoverable, inquiry-generating digital presence with structured product catalogs, local search visibility, and an architecture engineered to scale.",
    heroImg: "/work-assets/gauravsyn.webp",
    liveUrl: "https://www.gauravsynthetics.in/",
    context:
      "Gaurav Synthetics is an established textile wholesale dealer and exclusive showroom partner for Ramraj Cotton. While respected offline for fabric quality, the business lacked a modern digital catalog where regional retailers and bulk buyers could browse fabric categories, verify authenticity, and submit wholesale inquiries.",
    objectives: [
      "Communicate the exclusive Ramraj Cotton dealership partnership with high authority.",
      "Showcase premium fabric categories (dhotis, shirts, kurtas, innerwear) with organized specifications.",
      "Capture inbound wholesale inquiries and local showroom foot-traffic across web and search channels.",
      "Engineer the web platform for high availability and concurrent visitor stability.",
    ],
    scopeOfWork: [
      "Custom responsive web platform design & development",
      "Digital fabric catalog architecture across collections, materials, and occasions",
      "Local SEO optimization & Google Business Profile alignment for showroom discovery",
      "B2B inquiry capture forms with direct WhatsApp and email routing",
      "High-availability web hosting configuration engineered for traffic spikes",
    ],
    solutionTitle: "A clean, catalog-led digital showroom built for discovery and buyer trust.",
    solutionDesc:
      "We built a structured digital presence highlighting the official Ramraj Cotton dealership status, fabric specifications, and wholesale inquiry pathways. Clear navigation and fast loading allow buyers to review collections and initiate procurement discussions in seconds.",
    keyDecisions: [
      {
        title: "Catalog-first architecture",
        desc: "Designed around intuitive textile browsing (by fabric type, occasion, and collection) rather than complex e-commerce cart hurdles for wholesale buyers.",
      },
      {
        title: "High-concurrency infrastructure",
        desc: "Engineered with modern static asset optimization and CDN caching to handle concurrent traffic spikes during peak festive seasons without slowdown.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Official Digital Hub",
        desc: "Live, authoritative website representing Gaurav Synthetics and its Ramraj Cotton showroom.",
      },
      {
        title: "Inbound Lead Generation",
        desc: "Active inquiry channels connecting prospective wholesale buyers directly to sales staff.",
      },
      {
        title: "Stronger Search Discoverability",
        desc: "Enhanced visibility across local search queries for premium regional textile dealerships.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs handles ongoing web hosting management, seasonal collection updates, and platform monitoring.",
    galleryTitle: "Digital Touchpoints",
    gallerySubtitle: "A full-stack presence designed for discovery, trust, and wholesale conversion.",
    gallery: {
      main: "/work-assets/gs_ramraj.webp",
      side1: "/work-assets/gs_cat.webp",
      side2: "/work-assets/gs_coll.webp",
      side3: "/work-assets/gs_blogs.webp",
    },
    galleryItems: [
      {
        title: "Exclusive Ramraj Cotton Showroom Hub",
        caption: "Dedicated distributor showcase for the Patna showroom with direct wholesale pricing requests and Bihar & Jharkhand coverage highlights.",
        thumbnail: "/work-assets/gs_ramraj.webp",
      },
      {
        title: "Multi-Category Textile Directory",
        caption: "Clean 8-category visual index covering Shirting, Suiting, Suit Length Combos, Men's Dhotis, Bamboo Towels, Kids Wear, and Kurtas.",
        thumbnail: "/work-assets/gs_cat.webp",
      },
      {
        title: "Filterable Wholesale Catalog & WhatsApp Inquiry",
        caption: "Multi-brand B2B catalog with brand and category sidebar filters enabling retailers to enquire directly via WhatsApp.",
        thumbnail: "/work-assets/gs_coll.webp",
      },
      {
        title: "Regional SEO & Textile Insights Blog",
        caption: "Editorial hub publishing regional wholesale fabric guides and showroom resources to drive organic B2B search discovery.",
        thumbnail: "/work-assets/gs_blogs.webp",
      },
    ],
  },

  "fox-wing-media": {
    id: "fox-wing-media",
    client: "Fox Wing Media",
    tag: "PR / Brand Authority",
    serviceVertical: "AI & Workflow Automation",
    serviceLink: "/services/ai-automation",
    title: "Fox Wing Media: Positioning an AI-Powered PR Agency for Credibility and Inbound Growth",
    subtitle:
      "We designed and developed a high-authority digital presence that makes an AI-powered public relations proposition clear, credible, and conversion-ready for modern founders.",
    heroImg: "/work-assets/foxwing.webp",
    liveUrl: "https://foxwingmedia.com/",
    context:
      "Fox Wing Media provides modern PR, media placement, and brand authority campaigns for high-growth tech founders. The agency needed a website that reflected the speed and intelligence of their AI-assisted press workflow, moving away from cluttered generic marketing agency tropes.",
    objectives: [
      "Communicate the value proposition of modern AI-assisted PR within 5 seconds of landing.",
      "Showcase media placements, client case studies, and editorial packages with premium visual hierarchy.",
      "Streamline inbound discovery call bookings and consultation inquiries.",
    ],
    scopeOfWork: [
      "Brand messaging hierarchy & conversion copy structure",
      "High-contrast minimalist web design with dark editorial aesthetics",
      "Interactive media placement showcase & press kit components",
      "Meeting scheduling & inquiry form integration",
      "Fast page load optimization & technical SEO setup",
    ],
    solutionTitle: "Sharp value proposition, editorial aesthetics, and high-trust conversion pathways.",
    solutionDesc:
      "We shaped the digital experience around proof of placements and clear service tiers. Visitors immediately understand what Fox Wing Media delivers, who it is for, and how to schedule an introductory strategy session.",
    keyDecisions: [
      {
        title: "Minimalist editorial layout over marketing clichés",
        desc: "Adopted crisp typography and structured proof grids rather than generic corporate stock photos, reinforcing agency authority.",
      },
      {
        title: "Frictionless meeting booking",
        desc: "Integrated direct calendar scheduling so qualified founders can book an introductory review without lengthy email ping-pong.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Live Production Website",
        desc: "High-performance digital platform active at foxwingmedia.com.",
      },
      {
        title: "Clear Service Packaging",
        desc: "Transparent presentation of PR deliverables and editorial outreach capabilities.",
      },
      {
        title: "Stronger Inbound Intent",
        desc: "Inbound prospects arrive at discovery calls with clear understanding of the agency's model.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs provides technical updates, performance monitoring, and landing page support as the agency expands service offerings.",
    galleryTitle: "Brand Presentation",
    gallerySubtitle: "A polished digital presence for modern PR and media authority.",
    gallery: {
      main: "/work-assets/foxwing_main.webp",
      side1: "/work-assets/foxwing_side1.webp",
      side2: "/work-assets/foxwing_gal.webp",
      side3: "/work-assets/foxwing_side2.webp",
    },
    galleryItems: [
      {
        title: "Client Trust & PR Delivery Metrics",
        caption: "Social proof bar of partner brands paired with key agency track-record counters: 6+ years, 2,000+ PR deliverables, and 50+ projects.",
        thumbnail: "/work-assets/foxwing_main.webp",
      },
      {
        title: "Founder Authority & Credentials Profile",
        caption: "Executive spotlight detailing founder credentials, TEDx appearances, and national media coverage to build immediate prospect trust.",
        thumbnail: "/work-assets/foxwing_side1.webp",
      },
      {
        title: "Media & Stage Appearance Gallery",
        caption: "Curated visual proof of Entrepreneurs Conclave awards, press interviews, and TEDx keynote appearances.",
        thumbnail: "/work-assets/foxwing_gal.webp",
      },
      {
        title: "Global Media Publication Network",
        caption: "Publication showcase highlighting 500+ editorial placement opportunities across Forbes, Outlook, Mid-Day, ABP Live, and MENAFN.",
        thumbnail: "/work-assets/foxwing_side2.webp",
      },
    ],
  },

  "divine-enterprises": {
    id: "divine-enterprises",
    client: "Divine Enterprises",
    tag: "B2B Supply / Institutional",
    serviceVertical: "ERP & Business Systems",
    serviceLink: "/services/erp",
    title: "Divine Enterprises: Creating a Credible B2B Supply Platform for Institutional Buyers",
    subtitle:
      "We built a trust-led digital platform for a regional supply business serving education, office, industrial, textile, and manpower procurement needs.",
    heroImg: "/work-assets/divineEnt.webp",
    liveUrl: "https://divineenterprisesgroup.in/",
    context:
      "Divine Enterprises is a multi-category institutional supplier based in Bihar, fulfilling government, university, and commercial procurement orders for office furniture, uniform textiles, industrial supplies, and facility manpower. Institutional buyers needed a structured digital portal to verify the firm's supply credentials, browse product categories, and request tender quotations.",
    objectives: [
      "Provide clear category navigation across five distinct supply verticals without visual confusion.",
      "Build immediate institutional trust with verified vendor details, past contracts, and supply capabilities.",
      "Enable procurement officers to request bulk quotations and RFP documents easily.",
    ],
    scopeOfWork: [
      "Institutional buyer journey mapping & category architecture",
      "Responsive web platform design & development",
      "Multi-category product catalog (Education, Industrial, Textiles, Manpower)",
      "Bulk quotation inquiry forms with category-specific spec requests",
      "Search discoverability for regional B2B institutional tenders",
    ],
    solutionTitle: "A procurement-ready platform built for institutional credibility.",
    solutionDesc:
      "We engineered a clean, organized digital portal where government and corporate procurement committees can immediately review product lines, quality certifications, and contact institutional sales managers directly.",
    keyDecisions: [
      {
        title: "Category segregation for distinct buyers",
        desc: "Organized the five business lines into dedicated portals so an education buyer looking for classroom furniture isn't distracted by industrial safety equipment.",
      },
      {
        title: "Asset accuracy & dedicated presentation",
        desc: "Ensured authentic supply catalog imagery and institutional procurement specifications represent the firm's actual delivery capacity.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Procurement Portal",
        desc: "Structured, credible B2B website active for institutional verification and quotation requests.",
      },
      {
        title: "Category Clarity",
        desc: "Distinct presentation for education, office, industrial, textile, and manpower divisions.",
      },
      {
        title: "Streamlined Quotation Funnel",
        desc: "Reduced inquiry turnaround by capturing exact quantity and tender specs upfront.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs handles ongoing platform maintenance, catalog additions, and institutional quote workflow adjustments.",
    galleryTitle: "Procurement Touchpoints",
    gallerySubtitle: "Structured category architecture built to support serious institutional procurement decisions.",
    gallery: {
      main: "/work-assets/divine_print.webp",
      side1: "/work-assets/divine_cat.webp",
      side2: "/work-assets/divineEnt.webp",
      side3: "/work-assets/divine_quote.webp",
    },
    galleryItems: [
      {
        title: "Commercial & Offset Printing Division",
        caption: "Dedicated Patna printing portal covering bulk digital and offset runs for hospital files, institutional stationery, and GST-billed orders.",
        thumbnail: "/work-assets/divine_print.webp",
      },
      {
        title: "Searchable Enterprise Supply Catalogue",
        caption: "B2B product directory spanning education essentials, cotton handloom dari/rugs, industrial safety gear, and institutional mementos.",
        thumbnail: "/work-assets/divine_cat.webp",
      },
      {
        title: "Institutional Supply Hero & Bulk Ordering",
        caption: "Primary landing slider engineered to route corporate and government buyers directly to the catalogue or bulk procurement specialists.",
        thumbnail: "/work-assets/divineEnt.webp",
      },
      {
        title: "Structured Institutional RFQ Funnel",
        caption: "Dedicated quotation workflow capturing organization details, product categories, and bulk quantities with full GST invoicing clarity.",
        thumbnail: "/work-assets/divine_quote.webp",
      },
    ],
  },

  "helios": {
    id: "helios",
    client: "Helios AI Platform",
    tag: "Application & AI Automation",
    serviceVertical: "Application Development",
    serviceLink: "/services/apps",
    title: "Helios: High-Speed Mobile Application & AI Prompt Workflow Platform",
    subtitle:
      "We engineered an Android application and creative workflow organizer allowing prompt engineers and marketing teams to discover, parameterize, and execute AI workflows with zero friction.",
    heroImg: "/work-assets/helios_main.webp",
    liveUrl: "https://heliosai.achaialabs.tech/",
    context:
      "As generative AI models expanded across text, code, marketing, and design, power users faced fragmented workflows — prompts scattered across notes apps, lost parameter sliders, and inconsistent outputs. Helios was conceived as a dedicated mobile and web client to organize, test, and execute AI workflows seamlessly.",
    objectives: [
      "Build a high-speed mobile client with instant local search and 60fps performance.",
      "Provide categorized workflow prompts across Productivity, Business, Design, Marketing, and Development.",
      "Support one-tap copy, parameter customization, and personal prompt constellation vaults.",
      "Deploy cross-platform web client and prepare Android mobile application.",
    ],
    scopeOfWork: [
      "Full mobile UI/UX design adhering to modern dark minimalist aesthetics",
      "Android application engineering & responsive web client",
      "Fast local caching layer & full-text search indexing",
      "Prompt directory backend with category filters & trending algorithms",
      "Cloud sync & production deployment at heliosai.achaialabs.tech",
    ],
    solutionTitle: "A high-performance creative client built for AI professionals.",
    solutionDesc:
      "We engineered Helios with a dark, focused interface that puts workflows front and center. Instant local search, intuitive category pills, and prompt preview drawers allow creators to copy or test parameters in milliseconds.",
    keyDecisions: [
      {
        title: "Client-side search indexing for zero-latency discovery",
        desc: "Prompts and metadata are cached locally so searching across hundreds of complex prompt templates happens instantly without waiting for network round-trips.",
      },
      {
        title: "Mobile-first ergonomic layout",
        desc: "Designed for one-thumb mobile interaction with bottom navigation tabs (Home, Categories, Favorites, Profile) and prominent copy triggers.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Live Production Web Client",
        desc: "Active at heliosai.achaialabs.tech serving global users.",
      },
      {
        title: "Android Application Build",
        desc: "Engineered mobile application demonstrating our mobile and AI product capabilities.",
      },
      {
        title: "Tested Architecture",
        desc: "Scalable backend handling prompt directory syncing and parameter customization.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs actively maintains Helios as both a demonstration of our mobile/AI engineering standard and an in-house product platform.",
    galleryTitle: "Application Interface",
    gallerySubtitle: "High-speed mobile screens and prompt organization tools.",
    gallery: {
      main: "/work-assets/helios_data.webp",
      side1: "/work-assets/helios_app1.webp",
      side2: "/work-assets/helios_app2.webp",
      side3: "/work-assets/helios_abt.webp",
    },
    galleryItems: [
      {
        title: "Google Play Data Safety & Account Management",
        caption: "Transparent user data governance and account deletion portal built to satisfy mobile app store compliance requirements.",
        thumbnail: "/work-assets/helios_data.webp",
      },
      {
        title: "Prompt Categories & Creative Use Cases",
        caption: "Visual showcase of six core prompt workflows spanning Product Ads, Posters, Lifestyle Edits, Filters, and Daily Use templates.",
        thumbnail: "/work-assets/helios_app1.webp",
      },
      {
        title: "Loved Prompts & One-Tap Mobile Vault",
        caption: "In-app mobile interface demonstrating one-tap prompt saving, organized collections, and quick-access favorites navigation.",
        thumbnail: "/work-assets/helios_app2.webp",
      },
      {
        title: "Product Vision & Play Store Distribution",
        caption: "Mobile product landing footer connecting Android Play Store distribution with multi-model compatibility across ChatGPT, Claude, and Gemini.",
        thumbnail: "/work-assets/helios_abt.webp",
      },
    ],
  },

  "mandala-good-vibes": {
    id: "mandala-good-vibes",
    client: "Mandala Good Vibes",
    tag: "Shopify & E-Commerce",
    serviceVertical: "Shopify & E-Commerce",
    serviceLink: "/services/shopify",
    title: "Mandala Good Vibes: High-Speed E-Commerce Platform for Healing Crystals & Gemstones",
    subtitle:
      "We engineered a modern Shopify e-commerce presence and directory for healing crystals and certified gemstones, featuring rapid collection filtering, fast local caching, and seamless domestic checkout.",
    heroImg: "/work-assets/mandala.webp",
    liveUrl: "https://mandalagoodvibes.com/",
    context:
      "Mandala Good Vibes specializes in authentic energized crystals, gemstone bracelets, and spiritual wellness artifacts. They required a fast, visually captivating online store that could organize hundreds of gemstone variants, provide clear spiritual attributes and certification details, and offer frictionless mobile purchasing.",
    objectives: [
      "Architect an intuitive product taxonomy spanning gemstone types, chakra alignments, and energetic purposes.",
      "Ensure fast mobile browsing speeds with optimized product imagery and caching.",
      "Integrate instant domestic payment options (UPI, Net Banking, Cards) and automated tracking.",
      "Establish automated customer order notifications via WhatsApp and email.",
    ],
    scopeOfWork: [
      "Custom Shopify theme design & liquid development",
      "Gemstone collection directory & multi-attribute filter system",
      "Mobile-first checkout flow with localized payment gateways",
      "High-resolution product zoom and crystal certification presentation",
      "Inventory synchronization & automated fulfillment notifications",
    ],
    solutionTitle: "A serene, high-converting digital storefront built for spiritual seekers.",
    solutionDesc:
      "We designed and built a bespoke Shopify experience emphasizing elegance, clarity, and mobile speed. Dynamic gemstone filters let buyers find stones by intention or birthstone in seconds, while high-performance image optimization keeps page loads under 1.5 seconds.",
    keyDecisions: [
      {
        title: "Intention-based discovery taxonomy",
        desc: "Organized products not just by mineral type, but by spiritual intent (Wealth, Healing, Protection, Love) to align with natural buying habits.",
      },
      {
        title: "Zero-bloat custom code over apps",
        desc: "Implemented sticky add-to-cart, gemstone certificate badges, and variant selectors natively in Liquid without third-party app overhead.",
      },
    ],
    resultsTitle: "Delivered Improvements & Status",
    deliverables: [
      {
        title: "Production Storefront",
        desc: "Live Shopify storefront handling customer orders and crystal directory browsing.",
      },
      {
        title: "Mobile Conversion Rate",
        desc: "Streamlined checkout and instant UPI flow reducing abandoned cart drop-offs.",
      },
      {
        title: "Catalog Autonomy",
        desc: "Merchant team able to add new stone varieties, launch seasonal collections, and adjust prices independently.",
      },
    ],
    ongoingOwnership:
      "Achaia Labs handles ongoing catalog drops, festive promotional assets, and theme maintenance.",
    galleryTitle: "Storefront Touchpoints",
    gallerySubtitle: "High-trust crystal catalog presentation engineered for smooth mobile commerce.",
    gallery: {
      main: "/work-assets/mandala_sound.webp",
      side1: "/work-assets/mandala_prod3.webp",
      side2: "/work-assets/mandala_cat.webp",
      side3: "/work-assets/mandala_prod2.webp",
    },
    galleryItems: [
      {
        title: "The Frequency Sanctuary Hero Experience",
        caption: "Immersive audio-visual hero introducing healing sound frequencies alongside energized crystals and top-level stone navigation.",
        thumbnail: "/work-assets/mandala_sound.webp",
      },
      {
        title: "Intention-Filtered Gemstone Bracelets",
        caption: "Filterable bracelet catalog pairing bead and 925 silver specifications with energetic intention tags, price sliders, and stock filters.",
        thumbnail: "/work-assets/mandala_prod3.webp",
      },
      {
        title: "Lifestyle Split: For Him & For Her",
        caption: "Editorial dual-column showcase routing shoppers directly into curated men's rings and women's crystal bracelet collections.",
        thumbnail: "/work-assets/mandala_cat.webp",
      },
      {
        title: "Certified Pendants & Necklaces Catalog",
        caption: "High-clarity product grid for crystal pendants and necklaces with wavelength tags, promotional badges, and INR pricing.",
        thumbnail: "/work-assets/mandala_prod2.webp",
      },
    ],
  },
};

// Backward-compatibility aliases
caseStudiesData["moni-and-monu"] = caseStudiesData["moms-and-moon"];
caseStudiesData["mandala"] = caseStudiesData["mandala-good-vibes"];

const CaseStudyDetail = () => {
  const { id } = useParams();
  const cs = caseStudiesData[id] || caseStudiesData["moms-and-moon"];

  useSEO({
    title: `${cs.title} — Case Study`,
    description: cs.subtitle,
    path: `/work/${cs.id}`,
    image: `https://www.achaialabs.tech${cs.heroImg}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="font-body-md text-[#F5F5F3] bg-[#111111]">
      {/* ── Case Study Hero ── */}
      <header className="pt-16 pb-12 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6 mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
            <Link to="/work" className="text-[#777777] hover:text-[#F5F5F3] transition-colors">
              Case Studies
            </Link>
            <span className="text-[#444444]">/</span>
            <Link to={cs.serviceLink} className="text-[#315EFB] hover:underline">
              {cs.serviceVertical}
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#F5F5F3] tracking-tight leading-[1.12]">
            {cs.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed">
            {cs.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>Discuss a Similar Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>

            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#181818] border border-[#303030] hover:border-[#444444] text-[#F5F5F3] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Live Project Link</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            )}
          </div>
        </div>

        {/* Featured Visual - Liquid Glass Frame */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 md:p-4 bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-white/[0.01] bg-[#161616]/75 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
            <img
              src={cs.heroImg}
              alt={cs.title}
              className="w-full h-auto rounded-xl sm:rounded-2xl block object-cover"
            />
          </div>
        </div>
      </header>

      {/* ── Context & Objectives ── */}
      <section className="py-16 md:py-20 bg-[#161616] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Business Context */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block">
                01 • Business Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] leading-snug">
                The Operational Problem & Background
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed">
                {cs.context}
              </p>
            </div>

            {/* Objectives */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block">
                02 • Project Objectives
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] leading-snug">
                What We Needed to Achieve
              </h2>
              <div className="space-y-3">
                {cs.objectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#181818] border border-[#303030]">
                    <span className="w-5 h-5 rounded-full bg-[#315EFB]/15 text-[#315EFB] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-sm text-[#CCCCCC] leading-relaxed font-medium">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of Work & Solution Implementation ── */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Scope of Work */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block">
              03 • Scope of Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3]">
              Achaia Labs Responsibilities
            </h2>
            <div className="space-y-2.5">
              {cs.scopeOfWork.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#181818] border border-[#303030]">
                  <span className="material-symbols-outlined text-[#315EFB] text-lg">check_circle</span>
                  <span className="text-xs sm:text-sm text-[#CCCCCC] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution & Architecture */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block">
              04 • Solution & Key Decisions
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] mb-4">
                {cs.solutionTitle}
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed mb-8">
                {cs.solutionDesc}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#777777]">Key Implementation Decisions</p>
              {cs.keyDecisions.map((dec, idx) => (
                <div key={idx} className="rounded-2xl bg-[#181818] border border-[#303030] p-6">
                  <h3 className="font-semibold text-base text-[#F5F5F3] mb-2">{dec.title}</h3>
                  <p className="text-sm text-[#A6A6A6] leading-relaxed">{dec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified Deliverables & Current Status ── */}
      <section className="py-16 md:py-20 bg-[#141414] border-y border-[#262626] text-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="max-w-2xl mb-12">
            <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-2">
              05 • Results & Deliverables
            </span>
            <h2 className="text-3xl font-semibold text-[#F5F5F3]">
              {cs.resultsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cs.deliverables.map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#181818] border border-[#303030] flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-[#F5F5F3] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A6A6A6] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#181818] border border-[#303030]">
            <span className="text-xs font-mono font-bold text-[#315EFB] uppercase tracking-wider block mb-1">
              Ongoing Ownership & Support Status
            </span>
            <p className="text-sm text-[#A6A6A6] leading-relaxed">
              {cs.ongoingOwnership}
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery / Visual Evidence ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-2xl mb-12">
          <span className="text-[#315EFB] font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            06 • Visual Touchpoints
          </span>
          <h2 className="text-3xl font-semibold text-[#F5F5F3] mb-2">
            {cs.galleryTitle}
          </h2>
          <p className="text-[#A6A6A6] text-sm sm:text-base">
            {cs.gallerySubtitle}
          </p>
        </div>

        {/* Interactive LayoutGrid */}
        {(() => {
          const items = cs.galleryItems || [
            {
              title: cs.galleryTitle || "Storefront & Primary Interface",
              caption: cs.gallerySubtitle || cs.subtitle,
              thumbnail: cs.gallery?.main || "/work-assets/mnm_home.webp",
            },
            {
              title: cs.deliverables?.[0]?.title || "Multi-Device Presentation",
              caption: cs.deliverables?.[0]?.desc || "Responsive workflows and performance optimized across all device classes.",
              thumbnail: cs.gallery?.side1 || "/work-assets/hero_devices_composition.webp",
            },
            {
              title: cs.deliverables?.[1]?.title || "Workflow & Conversion",
              caption: cs.deliverables?.[1]?.desc || "Engineered for high-trust customer interactions and rapid engagement.",
              thumbnail: cs.gallery?.side2 || "/work-assets/mnm_home.webp",
            },
            {
              title: cs.deliverables?.[2]?.title || "Operational Scale & Support",
              caption: cs.deliverables?.[2]?.desc || cs.ongoingOwnership || "Production-ready systems driving measurable, long-term business performance.",
              thumbnail: cs.gallery?.side3 || "/work-assets/achaia_showcase_poster.png",
            },
          ];

          const colSpans = ["md:col-span-2", "col-span-1", "col-span-1", "md:col-span-2"];
          const titleSizes = ["md:text-3xl text-xl", "md:text-2xl text-lg", "md:text-2xl text-lg", "md:text-3xl text-xl"];

          const galleryCards = items.map((item, idx) => ({
            id: idx + 1,
            content: (
              <div>
                <p className={`font-bold ${titleSizes[idx] || "text-xl"} text-white`}>
                  {item.title}
                </p>
                <p className="font-normal text-xs md:text-sm my-2 max-w-lg text-neutral-300 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ),
            className: colSpans[idx] || "col-span-1",
            thumbnail: item.thumbnail,
          }));

          return <LayoutGrid cards={galleryCards} />;
        })()}
      </section>

      {/* ── Related Service & Project Consultation CTA ── */}
      <section className="py-20 bg-[#161616] border-t border-[#262626] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F3]">
            Need similar engineering for your business?
          </h2>
          <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
            We deliver tailored solutions across Shopify, custom ERP systems, mobile applications, and AI workflow automation. Tell us about your operational problem.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to={cs.serviceLink}
              className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#282828] text-[#F5F5F3] border border-[#303030] px-7 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>Learn More About {cs.serviceVertical}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;