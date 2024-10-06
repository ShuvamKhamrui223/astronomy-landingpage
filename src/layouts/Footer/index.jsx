import Logo from "../../components/common/Logo";
import { navMenu } from "../../constants/common";
const Footer = () => {
  return (
    <footer className="min-h-[50vh] w-full px-[8%] py-20 flex flex-col items-center gap-8">
      <div className="w-full flex flex-col items-center">
        {/* footer heading */}
        <div className="heading_container">
          <h1 className="text-7xl text-center text-yellow-200/60 uppercase font-bold">
            unlimited stars awaits <br />{" "}
            <span className="text-yellow-200/45">you friend</span>
          </h1>
        </div>

        {/* bottom of footer */}
        <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-8 mt-6">
          <Logo />

          {/* newsletter form */}
          <form action="" className="sm:w-[60%] w-full">
            <div className="w-full flex rounded-full bg-zinc-400 ring-2 ring-yellow-900 group-focus:bg-maincolor">
              <input
                type="email"
                className="w-full p-6 bg-zinc-900 text-white text-xl rounded-l-full focus:outline-tranparent placeholder:text-white/30"
                placeholder="abc@gmail.com"
              />
              <button
                type="submit"
                className="text-xl px-8 uppercase bg-zinc-800 text-white/80 hover:bg-zinc-700 rounded-r-full"
              >
                subscribe
              </button>
            </div>
          </form>

          <ul className="flex items-center sm:items-end gap-2  flex-col">
            {navMenu?.map((menuitem) => (
              <li
                key={menuitem.menuId}
                className="text-maincolor/80 hover:text-maincolor transition-colors duration-300 text-3xl sm:text-2xl capitalize "
              >
                <a href={menuitem.path}>{menuitem.menuLabel}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* attribuition */}
      <div className="mt-12 sm:mt-0">
        <strong className="text-2xl font-light capitalize text-yellow-200/70">
          developed by{" "}
          <span className="font-sans font-normal text-yellow-50/70 uppercase">
            shuvam khamrui
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
