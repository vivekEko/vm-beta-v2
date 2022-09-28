// react
import React from "react";
// assets
import moolavar_drawing from "../../assets/img/landingPage/second_section_img1.png";
import perumal_thayar_andal from "../../assets/img/landingPage/second_section_img2.png";

const SecondSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-[#7CC0F1]  pt-10 border-b-[12px] border-[#942200]">
      <h1 className="uppercase text-[#191689] text-3xl md:text-4xl md:font-semibold text-center">
        Sri Vanamamalai divyadesam
      </h1>
      <h2 className="uppercase text-[#191689] text-xl text-center my-5 w-[80%] mx-auto font-semibold">
        Sri varamangai nachiyar sametha sri deivanayaga perumal
      </h2>

      <p className="font-caladea text-center w-[80%] mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus
        laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.{" "}
      </p>

      <div className="p-3 bg-[#282626] text-white w-fit mx-auto">
        <span>READ MORE</span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-5">
        <div className="w-full">
          <img
            src={moolavar_drawing}
            alt="moolavar drawing"
            className="w-full"
          />
        </div>
        <div className="overflow-hidden hidden md:block w-full ">
          <img
            src={perumal_thayar_andal}
            alt="perumal thayar andal"
            className="w-full translate-y-8 translate-x-8 "
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
