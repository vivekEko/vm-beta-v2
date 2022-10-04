import React from "react";
// assets
import frame from "../../assets/img/aboutPage/frame2.png";

const SeventhSection = () => {
  const pageData = [
    {
      heading: "DONATE",
      sub_heading: "CONTRIBUTION",
    },
    {
      heading: "SEVA",
      sub_heading: "CONTRIBUTION",
    },
    {
      heading: "BOOKS",
      sub_heading: "CONTRIBUTION",
    },
    {
      heading: "VOLUNTEER",
      sub_heading: "CONTRIBUTION",
    },
  ];

  return (
    <section className="bg-[#FF5A29] py-5">
      <div>
        <h1 className="text-center text-white text-4xl">CONTRIBUTION</h1>
        <img
          src={frame}
          alt=""
          className="mx-auto w-[85%] max-w-[600px] mt-5"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-[85%] mx-auto mt-20 pb-52">
        {pageData?.map((data, index) => {
          return (
            <div
              key={index}
              className="aspect-square flex bg-[#4A1F1F] items-end p-2 h-full justify-center text-white"
            >
              <div className="text-center">
                <h1 className="text-3xl">{data?.heading}</h1>
                <h3 className="">{data?.sub_heading}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SeventhSection;
