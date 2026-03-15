import "./Home.css";
import Hero from "../../layout/hero/Hero.jsx"
import Services from "../../layout/services/Services.jsx";
import Faq from "../../layout/faq/Faq.jsx";
import Socials from "../../layout/socials/Socials.jsx"
import FirstForm from "../../layout/firstform/FirstForm.jsx";
const Home = () => {
  return (
    <>
      <Hero />
      <Socials />
      <Services />
      <FirstForm />
      <Faq />
    </>
  );
}

export default Home
