import { clientImageList } from "../constants/homepage";

const Clients = () => {
  return (
    <section className="min-h-[20vh] px-[4%] py-20 bg-[#3d281b] ">
      <div className="w-full container flex items-center gap-12 flex-nowrap overflow-x-auto scroll-smooth snap-mandatory">
        {clientImageList.map((client) => (
          <img src={client} alt="client logo" className="invert shrink-0 snap-center" key={client} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
