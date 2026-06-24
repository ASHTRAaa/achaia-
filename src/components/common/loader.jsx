import logo from "../../assets/logo.svg";

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
    <img
      src={logo}
      alt="Achaia"
      className="loader-logo h-20 w-auto max-w-[85vw] md:h-24"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  </div>
);

export default Loader;