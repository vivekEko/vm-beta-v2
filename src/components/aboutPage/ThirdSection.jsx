import React from "react";
// media assets
import sample_img from "../../assets/img/aboutPage/sample_rectangle.png";

const ThirdSection = () => {
  const pageData = [
    {
      image: sample_img,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      image: sample_img,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      image: sample_img,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ];

  return (
    <section className="bg-[#FF8D07]  pt-20 pb-10">
      <h1 className="text-center text-4xl text-white">CURRENT ACTIVITIES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-[85%] mx-auto mt-20">
        {pageData?.map((data, index) => {
          return (
            <div key={index} className="shadow-2xl ">
              <div>
                <img src={data?.image} alt="" className="w-full" />
              </div>
              <div className=" flex justify-between items-end gap-5 p-10 bg-gradient-to-tr from-[#FF6E43] to-[#FFE500]">
                <p className="font-caladea">{data?.desc}</p>
                <button className="bg-[#FF440D] text-white p-2 px-5 transition-all active:scale-95">
                  SHOW{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ThirdSection;
