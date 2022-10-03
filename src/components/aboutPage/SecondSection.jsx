import React, { useState } from "react";
// assets
import arrow from "../../assets/img/aboutPage/left_arrow.png";
import item1 from "../../assets/img/aboutPage/item1.png";
import item2 from "../../assets/img/aboutPage/item2.png";
import item3 from "../../assets/img/aboutPage/item3.png";
import item4 from "../../assets/img/aboutPage/item4.png";

// Carousel / Banner
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const SecondSection = () => {
  // local variables
  const [selectedItem, setSelectedItem] = useState(0);

  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 2 },
    768: { items: 4 },
    1024: { items: 4 },
  };

  const itemArray = [
    {
      name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
      date: "AD 2014",
      number: "31",
      sub_text: "st",
      image: item3,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio molestias vel cum sint error nihil laboriosam harum, cupiditate quidem laborum obcaecati, animi quos? Quo ipsa distinctio quia temporibus dolor voluptatibus, voluptas et enim ea, iure, maiores ipsum officiis cupiditate. Cupiditate   ",
    },
    {
      name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
      date: "AD 1994 to 2014",
      number: "30",
      sub_text: "th",
      image: item2,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio molestias vel cum sint error nihil laboriosam harum, cupiditate quidem laborum obcaecati, animi quos? Quo ipsa distinctio quia temporibus dolor voluptatibus, voluptas et enim ea, iure, maiores ipsum officiis cupiditate. Cupiditate   ",
    },
    {
      name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
      date: "AD 2014 to 1482",
      number: "29",
      sub_text: "th",
      image: item1,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio molestias vel cum sint error nihil laboriosam harum, cupiditate quidem laborum obcaecati, animi quos? Quo ipsa distinctio quia temporibus dolor voluptatibus, voluptas et enim ea, iure, maiores ipsum officiis cupiditate. Cupiditate   ",
    },
    {
      name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
      date: "AD 2014 to 1482",
      number: "28",
      sub_text: "th",
      image: item4,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio molestias vel cum sint error nihil laboriosam harum, cupiditate quidem laborum obcaecati, animi quos? Quo ipsa distinctio quia temporibus dolor voluptatibus, voluptas et enim ea, iure, maiores ipsum officiis cupiditate. Cupiditate   ",
    },
  ];

  const items = itemArray?.map((data, index) => {
    return (
      <div
        key={index}
        onDragStart={handleDragStart}
        role="presentation"
        className="bg-[#FF9800] p-2 mx-4"
        onClick={() => setSelectedItem(index)}
      >
        <img src={data?.image} alt="" className="w-full" />
        <div className="mt-2">
          <h3 className="uppercase text-md ">{data?.name}</h3>
          <div className="mt-5 flex justify-between items-center">
            <h1 className="text-lg">{data?.date}</h1>
            <div>
              <span className="text-xl">{data?.number}</span>
              <span className="text-sm">{data?.sub_text}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="bg-[#FFB507] ">
      <div className=" w-[85%] mx-auto pt-5 md:pt-20 pb-10 flex flex-col md:flex-row justify-between items-start  gap-5">
        {/* left part */}
        <div className=" w-full max-w-[500px]">
          <div className="mb-5 md:hidden">
            <h1 className="uppercase text-xl">
              {itemArray[selectedItem]?.name}
            </h1>
            <div>
              <span className="text-3xl">
                {itemArray[selectedItem]?.number}
              </span>
              <span>{itemArray[selectedItem]?.sub_text}</span>
            </div>
            <h1 className="text-2xl">{itemArray[selectedItem]?.date}</h1>
          </div>

          <div>
            <img
              src={itemArray[selectedItem]?.image}
              alt={itemArray[selectedItem]?.name}
              className="w-full mb-5"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="mb-5 hidden md:block">
            <h1 className="uppercase text-3xl">
              {itemArray[selectedItem]?.name}
            </h1>
            <div>
              <span className="text-3xl">
                {itemArray[selectedItem]?.number}
              </span>
              <span>{itemArray[selectedItem]?.sub_text}</span>
            </div>
            <h1 className="text-2xl">{itemArray[selectedItem]?.date}</h1>
          </div>
          <p className="font-caladea">{itemArray[selectedItem]?.desc}</p>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <AliceCarousel
          mouseTracking
          autoPlay={false}
          autoPlayInterval={2000}
          infinite={true}
          disableDotsControls
          items={items}
          responsive={responsive}
          renderPrevButton={() => {
            return (
              <div className=" absolute z-20 left-0 md:left-[-50px]     top-[40%] w-[50px]  h-[50px] flex justify-start items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                <img src={arrow} alt="..." className="" />
                {/* <img
                      src={leftArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    /> */}
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className=" absolute z-20 right-0 md:right-[-50px]    top-[40%]   w-[50px]  h-[50px] flex justify-end items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                <img src={arrow} alt="..." className="rotate-180" />
                {/* <img
                      src={rightArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    /> */}
              </div>
            );
          }}
        />
      </div>
    </section>
  );
};

export default SecondSection;
