import React, { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import menuStatusAtom from "../../recoil/header/menuStatusAtom";

const Menu = () => {
  // global variables
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const closeMenu = () => {
    setMenuIsVisible(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeMenu });

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

  return (
    <div ref={ref} className=" ">
      <button
        onClick={() => setMenuIsVisible(!menuIsVisible)}
        className={` ${
          menuIsVisible
            ? "border-white"
            : "border-transparent hover:border-white"
        } text-2xl font-medium transition p-2 border-2   text-white w-fit  mb-5  cursor-pointer fixed top-6 left-5 z-[999] hidden md:block `}
      >
        MENU
      </button>

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
  );
};

export default Menu;
