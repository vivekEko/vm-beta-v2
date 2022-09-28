// react
import React from "react";
// assets
import logo from "../../assets/img/landingPage/vm_logo.png";
import searchIcon from "../../assets/img/landingPage/searchIcon.png";
import translate_Icon from "../../assets/img/landingPage/translate_Icon.png";

const Header = () => {
  return (
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
      {/* three mantras */}
      <div className="text-white font-semibold flex flex-col text-xl md:flex-row gap-5 md:gap-20 md:mt-5 justify-center items-center">
        <h1 className="uppercase">Srimathe Ramanujaya Nama:</h1>
        <h1 className="uppercase">Srimath Varavaramunaye Nama:</h1>
        <h1 className="uppercase">Sri vanacha Mahamunibyo Nama:</h1>
      </div>
    </header>
  );
};

export default Header;
