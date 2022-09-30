// react
import React from "react";

// components
import HeroSection from "../components/landingPage/HeroSection";
import SecondSection from "../components/landingPage/SecondSection";
import ThirdSection from "../components/landingPage/ThirdSection";
import FourthSection from "../components/landingPage/FourthSection";

const LandingPage = () => {
  return (
    <div>
      <div className="  bg-gradient-to-t md:bg-gradient-to-r from-[#FA8716] to-[#FF440D] ">
        <div className=" bg-hero-mobile bg-cover bg-no-repeat p-5 pb-0 border-b-[15px] border-[#942200] pt-64 md:pt-32   ">
          <HeroSection />
        </div>
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};

export default LandingPage;
