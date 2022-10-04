// react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
// assets
import logo from "../../assets/img/landingPage/vm_logo.png";
import searchIcon from "../../assets/img/landingPage/searchIcon.png";
import translate_Icon from "../../assets/img/landingPage/translate_Icon.png";

// recoil
import { useRecoilState } from "recoil";
import menuStatusAtom from "../../recoil/header/menuStatusAtom";

// components
import Menu from "./Menu";

const Header = () => {
  // global variables
  const [menuIsVisible, setMenuIsVisible] = useRecoilState(menuStatusAtom);

  const menuItems = [
    {
      link_name: "about sri mutt",
      link_address: "/about-us",
    },
    {
      link_name: "vanamamalai mutt branches",
    },
    {
      link_name: "vanamamalai temple",
      link_address: "/temple-history",
    },
    {
      link_name: "other temples",
      link_address: "/other-temples",
    },
    {
      link_name: "ponnadikkal jeeyar",
    },
    {
      link_name: "jeeyar parampara",
    },
    {
      link_name: "thaniyans & vazhi thirunamams",
    },
    {
      link_name: "sri vanachala vidhya peetam",
    },
    {
      link_name: "sri ramanuja matriculation school",
    },
    {
      link_name: "gallery",
    },
    {
      link_name: "books",
    },
    {
      link_name: "donations",
    },
  ];

  const closeMenu = () => {
    setMenuIsVisible(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeMenu });

  useEffect(() => {
    console.log("menuIsVisible: ", menuIsVisible);
  }, [menuIsVisible]);

  return (
    <header className="w-[90%] sm:w-[95%] mx-auto absolute top-0 left-0 right-0 pt-5">
      <div ref={ref}>
        <h1
          onClick={() => setMenuIsVisible(!menuIsVisible)}
          className={` ${
            menuIsVisible
              ? "border-white"
              : "border-transparent hover:border-white"
          } text-2xl font-medium transition p-2 border-2   text-white w-fit ml-auto mb-5 md:hidden cursor-pointer fixed right-5 z-[999] `}
        >
          MENU
        </h1>

        <div
          className={` ${
            menuIsVisible
              ? "block z-[999] fixed top-20 right-5 md:left-12 md:right-auto"
              : "hidden"
          }  bg-[#8e2f07] text-white p-5 border-white border shadow-2xl `}
        >
          {menuItems?.map((data, index) => {
            return (
              <Link
                to={data?.link_address}
                key={index}
                className="block uppercase my-3 "
              >
                <h1 className="hover:underline underline-offset-4 py-1 transition-all">
                  {data?.link_name}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center md:justify-between items-center pt-20 md:pt-0 ">
        <div className="flex-1 hidden md:block">
          <Menu />
        </div>

        <div className="flex-1 ">
          <Link to="/">
            <img src={logo} alt="Vannamamalai" className="mx-auto " />
          </Link>
        </div>
        <div className="hidden  md:flex flex-1 justify-end items-center gap-20">
          <img src={translate_Icon} alt="translate" />
          <img src={searchIcon} alt="search" className=" " />
        </div>
      </div>

      <div className="md:hidden border-white border-2 my-10 justify-between w-[70%] min-w-[250px] mx-auto hidden">
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent text-white w-full  placeholder:text-white p-2"
        />
        <img src={searchIcon} alt="search" className=" p-2" />
      </div>
      {/* three mantras */}
      <div className="text-white  flex flex-col text-xl md:flex-row gap-5 md:gap-20 md:mt-5 justify-center items-center">
        <h1 className="uppercase">Srimathe Ramanujaya Nama:</h1>
        <h1 className="uppercase">Srimath Varavaramunaye Nama:</h1>
        <h1 className="uppercase">Sri vanacha Mahamunibyo Nama:</h1>
      </div>
    </header>
  );
};

export default Header;
