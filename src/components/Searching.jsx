import { searchSection } from "../constants/homepage";

const Searching = () => {
  return (
    <section className="min-h-[40vh] bg-gradient-to-b from-purple-900 bg-[#421932] pt-[4%] pb-[15%] md:py-[6%] px-10 md:px-[8%] flex flex-col items-center">
      <div className="container grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 grid-cols-1 md:flex-row items-center">
        <div className="text-container order-2">
          <h4 className="text-2xl text-maincolor/90 uppercase">
            {searchSection.subtitle}
          </h4>
          <h2 className="text-6xl text-white/80 capitalize max-w-[25ch]">
            {searchSection.heading}
          </h2>
          <p className="text-2xl text-white/50 my-6">
            {searchSection.paragraph}
          </p>

          <button className="py-6 px-8 text-2xl uppercase text-white bg-yellow-500 hover:bg-yellow-500/90 transition-colors duration-150">
            {searchSection.buttonLabel}
          </button>
        </div>

        <div className="img-container">
          <img
            src={searchSection.astronautImg}
            height={500}
            width={500}
            alt="astronat"
            className="order-1 drop-shadow-2xl bg-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
};

export default Searching;
