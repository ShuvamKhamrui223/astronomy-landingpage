import Hero from "../../components/Hero";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <header className="min-w-screen flex flex-col hero items-center">
        <Navbar />
        <Hero />
      </header>
    </>
  );
};

export default Header;
