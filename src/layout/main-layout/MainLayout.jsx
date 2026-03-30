import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer.jsx";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
