import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Loader from "./components/common/loader.jsx";
import MainLayout from "./layout/main-layout/MainLayout.jsx";

const Home = lazy(() => import("./pages/home/Home.jsx"));
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
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:id" element={<CaseStudyDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cyp" element={<Cyp />} />
        <Route path="join-our-team" element={<JoinTeam />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
  );
}

export default App;

