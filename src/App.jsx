import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Loader from "./components/common/loader.jsx";
import MainLayout from "./layout/main-layout/MainLayout.jsx";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Services = lazy(() => import("./pages/services/Services.jsx"));
const Shopify = lazy(() => import("./pages/services/Shopify.jsx"));
const Erp = lazy(() => import("./pages/services/Erp.jsx"));
const Apps = lazy(() => import("./pages/services/Apps.jsx"));
const AiAutomation = lazy(() => import("./pages/services/AiAutomation.jsx"));
const AboutUs = lazy(() => import("./pages/about-us/AboutUs.jsx"));
const Contact = lazy(() => import("./pages/contact/Contact.jsx"));
const Work = lazy(() => import("./pages/work/Work.jsx"));
const CaseStudyDetail = lazy(() =>
  import("./pages/work/CaseStudyDetail.jsx")
);
const Products = lazy(() => import("./pages/products/Products.jsx"));
const ProductDetail = lazy(() =>
  import("./pages/products/ProductDetail.jsx")
);
const Cyp = lazy(() => import("./pages/cost-your-project/Cyp.jsx"));
const JoinTeam = lazy(() => import("./pages/join-team/JoinTeam.jsx"));
const Privacy = lazy(() => import("./pages/privacy/Privacy.jsx"));
const Terms = lazy(() => import("./pages/terms/Terms.jsx"));
const Cookies = lazy(() => import("./pages/cookies/Cookies.jsx"));
const Sitemap = lazy(() => import("./pages/sitemap/Sitemap.jsx"));
const ShowcaseDemo = lazy(() => import("./pages/showcase-demo/ShowcaseDemo.jsx"));
const NotFound = lazy(() => import("./pages/not-found/NotFound.jsx"));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-EP8Y3C2Z1L", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/shopify" element={<Shopify />} />
          <Route path="services/erp" element={<Erp />} />
          <Route path="services/apps" element={<Apps />} />
          <Route path="services/ai-automation" element={<AiAutomation />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:id" element={<CaseStudyDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cyp" element={<Cyp />} />
          <Route path="join-our-team" element={<JoinTeam />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="legal/cookie-notice" element={<Cookies />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="showcase-demo" element={<ShowcaseDemo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
