import React from "react";

// assests
import shishya from "../../assets/img/aboutPage/vm_shishya.png";

const SixthSection = () => {
  return (
    <section className="bg-gradient-to-t from-[#FF5A29] to-[#FF7A00] py-10">
      <div className="flex justify-between  flex-col md:flex-row md:items-center gap-5 w-[85%] mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl ">
            <span className="text-xl md:text-2xl block">WANT TO BE A</span>{" "}
            VANAMAMALAI SHISHYA
          </h1>
          <button className="bg-[#282626] text-white p-3 px-5 mt-10 transition-all active:scale-95 md:text-3xl">
            JOIN NOW
          </button>
        </div>

        <div>
          <img src={shishya} alt="shishya" />
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
