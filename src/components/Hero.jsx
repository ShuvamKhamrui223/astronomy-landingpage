import { bgImagepath, heroContent } from "../constants/homepage";

const Hero = () => {
  return (
    <section
      className={`min-h-[80vh] flex flex-col items-start justify-center px-[5%] mt-24 sm:my-24`}
      style={{ background: bgImagepath }}
    >
      <div className="container  md:max-w-[50%] flex flex-col gap-6">
        <h3 className="text-2xl text-yellow-100/80 uppercase">
          {heroContent.subtitle}
        </h3>
        <h1 className="text-8xl font-thin text-yellow-100  capitalize">
          {heroContent.main_title}
        </h1>
        <p className="text-3xl text-white/80 leading-10">
          {heroContent.paragraph}
        </p>
        <div className="btn-container flex flex-wrap gap-4">
          <button className="px-8 py-6 text-3xl bg-yellow-600 capitalize text-yellow-100 shadow-inner shadow-yellow-200">
            {heroContent.btn1label}
          </button>
          <button className="px-8 py-6 text-3xl border border-yellow-600 capitalize text-yellow-100 hover:bg-yellow-600/50">
            {heroContent.btn2label}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
