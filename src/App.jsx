import {Routes,Route,useLocation} from "react-router-dom"
import { useEffect } from "react"
import MainLayout from "./layout/main-layout/MainLayout.jsx"
import Home from "./pages/home/Home.jsx"
import AboutUs from "./pages/about-us/AboutUs.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Work from "./pages/work/Work.jsx"
import Cyp from "./pages/cost-your-project/Cyp.jsx"
function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-EP8Y3C2Z1L", {
      page_path: location.pathname,
    });
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work" element={<Work />} />
        <Route path="cyp" element={<Cyp/>} />
      </Route>
    </Routes>
  );
}

export default App
