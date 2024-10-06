import { experiencesSection } from "../constants/homepage";

const Experinces = () => {
  return (
    <section className="min-h-[70vh] pt-[4%] pb-[15%] md:py-[8%] px-10 md:px-8 flex flex-col items-center bg-gradient-to-b from-brownShade to-zinc-900">
      <div className="xl:max-w-[80%] flex flex-col items-center  text-center gap-12">
        <div className="heading-container">
          <h3 className="text-3xl text-yellow-200  capitalize">
            {experiencesSection.subtitle}
          </h3>
          <h1 className="text-7xl text-yellow-100 uppercase font-light mt-2 mb-5">
            {experiencesSection.heading}
          </h1>
          <p className="text-2xl text-yellow-50 text-opacity-50">
            {experiencesSection.paragraph}
          </p>
        </div>

        {/* experience grid */}
        <div className="w-full grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 gap-1">
          {experiencesSection.experienceList.map((experince) => (
            <div
              className="flex items-center gap-4 bg-transparent odd:bg-white/10 hover:bg-white/20 transition-colors duration-100 px-6 py-8 "
              key={experince.title}
            >
              <img
                src={experince.iconURL}
                alt="experince icon"
                className="size-28 object-cover"
              />
              <div className="text-left">
                <h4 className="text-3xl capitalize text-yellow-50/70">
                  {experince.title}
                </h4>
                <p className="text-xl text-yellow-50/50">{experince.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experinces;
