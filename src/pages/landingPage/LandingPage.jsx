// react
import React from "react";

// components
import Header from "../../components/globalComponents/Header";
import FourthSection from "./FourthSection";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const LandingPage = () => {
  return (
    <div>
      <div className="  bg-gradient-to-t md:bg-gradient-to-r from-[#FA8716] to-[#FF440D] ">
        <div className=" bg-hero-mobile bg-cover bg-no-repeat p-5 pb-0 border-b-[15px] border-[#942200] ">
          <Header />
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
