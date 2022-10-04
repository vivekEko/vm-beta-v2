import React from "react";
// assets
import frame from "../../assets/img/aboutPage/frame1.png";

const FourthSection = () => {
  return (
    <section className="bg-[#FF951A] py-20 ">
      <div className="w-[85%] mx-auto flex gap-5 flex-col md:flex-row-reverse items-center ">
        <div className="flex-1 ">
          <h1 className="text-4xl text-center md:text-right">
            SISHYAS DETAILS
          </h1>
          <p className="font-caladea mt-5 text-center md:text-right max-w-[500px] ml-auto w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
        </div>
        <div className="flex-1">
          <img src={frame} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
