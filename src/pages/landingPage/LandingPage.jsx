// react
import React from "react";

// assets
import logo from "../../assets/img/landingPage/vm_logo.png";
import searchIcon from "../../assets/img/landingPage/searchIcon.png";
import translate_Icon from "../../assets/img/landingPage/translate_Icon.png";
import landing_hero_section_idol from "../../assets/img/landingPage/landing_hero_section_idol.png";
import scroll_icon from "../../assets/img/landingPage/scroll_icon.png";

const LandingPage = () => {
  return (
    <div className="  bg-gradient-to-t md:bg-gradient-to-r from-[#FA8716] to-[#FF440D] ">
      <div className=" bg-hero-mobile bg-cover bg-no-repeat p-5 pb-0 border-b-[15px] border-[#942200] ">
        {/* Header */}

        <header className="w-[90%] sm:w-[95%] mx-auto">
          <h1 className=" text-2xl font-medium text-white text-right mb-5 md:hidden">
            MENU
          </h1>
          <div className="flex justify-center md:justify-between items-center ">
            <h1 className="flex-1 text-xl font-medium text-white hidden md:block">
              MENU
            </h1>
            <div className="flex-1 ">
              <img src={logo} alt="Vannamamalai" className="mx-auto " />
            </div>
            <div className="hidden  md:flex flex-1 justify-end items-center gap-20">
              <img src={translate_Icon} alt="translate" />
              <img src={searchIcon} alt="search" className=" " />
            </div>
          </div>

          <div className="flex border-white border-2 my-10 justify-between w-[70%] min-w-[250px] mx-auto md:hidden">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-white w-full  placeholder:text-white p-2"
            />
            <img src={searchIcon} alt="search" className=" p-2" />
          </div>
        </header>

        {/* Landing hero */}
        <section className="relative ">
          {/* three mantras */}
          <div className="text-white font-semibold flex flex-col text-xl md:flex-row gap-5 md:gap-20 md:mt-5 justify-center items-center">
            <h1 className="uppercase">Srimathe Ramanujaya Nama:</h1>
            <h1 className="uppercase">Srimath Varavaramunaye Nama:</h1>
            <h1 className="uppercase">Sri vanacha Mahamunibyo Nama:</h1>
          </div>

          <div className="mt-10">
            <h1 className="text-4xl md:text-6xl xl:text-7xl uppercase text-center font-medium bg-gradient-to-r to-[#630000] from-[#1400FF] bg-clip-text text-transparent text-stroke">
              Sri vachala mahamuni parampara
            </h1>
            <h2 className="text-white text-2xl md:text-3xl xl:text-5xl text-center mt-3 md:mt-5 uppercase">
              Sri Vanamamalai (Thothadri) Mutt
            </h2>

            <p
              className="font-caladea text-center mt-5 text-white sm:max-w-[80%] md:max-w-[70%]
            lg:max-w-[60%] xl:max-w-[50%] mx-auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pellentesque quam vitae ornare porta. Vivamus pretium eleifend
              risus laoreet pretium. Ut sit amet finibus metus, nec cursus
              lacus.
            </p>
          </div>

          <img
            src={landing_hero_section_idol}
            alt="ponnadikkal jeeyar"
            className="mx-auto"
          />

          <div className="absolute bottom-5 right-5 ">
            <img src={scroll_icon} alt="scroll" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
