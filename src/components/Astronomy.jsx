import { astronomySection } from "../constants/homepage";

const Astronomy = () => {
  return (
    <section className="min-h-[40vh] bg-gradient-to-b from-zinc-900 to-purple-900 pt-[4%] pb-[15%] md:py-[6%] px-10 md:px-[8%] flex flex-col items-center">
      <div className="container grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 grid-cols-1 items-center">
        <div className="text-container order-2">
          <h4 className="text-2xl text-maincolor/90 uppercase">
            {astronomySection.subtitle}
          </h4>
          <h2 className="text-6xl text-white/80 capitalize">
            {astronomySection.heading}
          </h2>
          <p className="text-2xl text-white/50 my-6">
            {astronomySection.paragraph}
          </p>

          <button className="py-6 px-8 text-2xl uppercase text-white bg-yellow-500 hover:bg-yellow-500/90 transition-colors duration-150">
            {astronomySection.buttonLabel}
          </button>
        </div>

        <div className="img-container order-1">
          <img
            src={astronomySection.astronautImg}
            height={500}
            width={500}
            alt="astronat"
            className="drop-shadow-2xl invert hover:invert-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Astronomy;
