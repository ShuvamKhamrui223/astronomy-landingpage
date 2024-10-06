import { useEffect, useState } from "react";
import { navMenu } from "../../constants/common";
import Logo from "../../components/common/Logo";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* 
  scrollUpdate function is created to monitor scroll behavior of user and if user surpasses "130px" while scrolling vertically this fuction automatically update isScrolled state to true else it will be set to false or remain false forever
  */
  const scrollUpdate = () =>
    window.scrollY > 130 ? setIsScrolled(true) : setIsScrolled(false);

  /*
  The useEffect defined below will only run after its initial run, when value of isScrolled change. It registers a scroll event on the window to keep track of scrolled amount and removes event listener before unmounting 
  */
  useEffect(() => {
    window.addEventListener("scroll", scrollUpdate);
    return () => window.removeEventListener("scroll", scrollUpdate);
  }, [isScrolled]);
  return (
    /* Depending on the value of isScrolled state background-color of navbar will change */
    <nav
      className={`w-full flex items-center py-6 ${
        isScrolled ? "bg-zinc-800" : "bg-maincolor/20"
      } transition-colors duration-300 px-[4%] fixed z-10 top-0 left-0`}
    >
      <div className="container w-full flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation menu list only on mobile screen it will be hidden for not having enough horizontal space */}
        <ul className="sm:flex hidden gap-6 items-center">
          {navMenu?.map((menuitem) => (
            <li key={menuitem.menuId}>
              <a
                href={menuitem.path}
                className="text-white uppercase font-thin text-2xl"
              >
                {menuitem.menuLabel}
              </a>
            </li>
          ))}
        </ul>

        {/* get started button */}
        <button className="bg-white/30 text-white text-2xl px-4 py-4 capitalize hover:bg-white/50 transition-colors duration-300">
          get started
        </button>
      </div>

      {/* Hamburger menu icon with appropriate click event listener to open relevant menu panel */}
      <div
        className="ml-6 w-[4rem] h-[4rem] sm:hidden flex flex-col items-center justify-center gap-1 bg-maincolor/30 cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="h-[0.25rem] w-[85%] bg-maincolor"></span>
        <span className="h-[0.25rem] w-[75%] bg-maincolor"></span>
        <span className="h-[0.25rem] w-[85%] bg-maincolor"></span>
      </div>

      {/* Mobile nav menu only visible in mobile view when user clicks hamburger menu icon */}
      <aside
        className={`absolute top-0 ${
          isMenuOpen ? "right-0" : "-right-full"
        } transition-all duration-200  bg-black/90 min-h-screen w-2/3 flex items-center justify-center gap-8 flex-col`}
      >
        <a
          className="text-5xl bg-white p-4 text-maincolor cursor-pointer absolute top-0 right-5"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          x
        </a>
        <ul className="md:hidden flex flex-col gap-6 items-center">
          {navMenu?.map((menuitem) => (
            <li key={menuitem.menuId}>
              <a
                href={menuitem.path}
                className="text-white uppercase font-thin text-2xl"
              >
                {menuitem.menuLabel}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-white/30 text-white text-2xl px-4 py-4 capitalize hover:bg-white/50 transition-colors duration-300">
          get started
        </button>
      </aside>
    </nav>
  );
};

export default Navbar;
