// react
import React from "react";

// media assets
import flight_icon from "../../assets/img/templeHistory/flight.svg";
import train_icon from "../../assets/img/templeHistory/train.svg";
import bus_icon from "../../assets/img/templeHistory/bus.svg";

const FourthSection = () => {
  return (
    <section className=" bg-[#FBEECB] md:bg-[#FFAF52] pb-10 md:pb-0">
      <div className="md:flex ">
        {/* nearest transport options */}
        <div className="border-r-[#942200] md:border-r-8 pt-20 md:w-[40%]">
          <div className="text-[#550200] text-2xl md:text-3xl uppercase text-center  w-[85%] mx-auto">
            <h1>How to reach</h1>
            <h1 className="text-4xl md:text-5xl font-medium">Vanamamalai</h1>
          </div>

          <div className="bg-[#FBEECB] md:my-20 mt-10 md:py-10">
            <div className="flex items-center gap-5 mx-auto w-[85%] md:w-[65%] ">
              <img
                src={flight_icon}
                alt="nearest airport"
                className="max-w-[40px] w-full"
              />
              <div>
                <h2 className="text-[#FFA031] text-xl">
                  63.8 km from Tuticorin airport
                </h2>
                <p className="font-caladea">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum, autem numquam ipsam recusandae esse illum
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 mx-auto w-[85%] md:w-[65%] mt-10">
              <img
                src={train_icon}
                alt="nearest railway station"
                className="max-w-[40px] w-full"
              />
              <div>
                <h2 className="text-[#FFA031] text-xl">
                  1.1 km from Nanguneri railway station
                </h2>
                <p className="font-caladea">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum, autem numquam ipsam recusandae esse illum
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 mx-auto w-[85%] md:w-[65%] mt-10">
              <img
                src={bus_icon}
                alt="nearest railway station"
                className="max-w-[40px] w-full"
              />
              <div>
                <h2 className="text-[#FFA031] text-xl">
                  1.8 km from Nanguneri Tollgate
                </h2>
                <p className="font-caladea">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum, autem numquam ipsam recusandae esse illum
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-[60%] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4061.7122564673027!2d77.65920354071015!3d8.491289527433942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b046f33b0fb1281%3A0x393fcbb515073f46!2sDivyadesam79%20Sree%20Vanamamalai%20Thothatrinathan%20Perumal%20Temple%2C%20Thirucheer%20varamangai!5e0!3m2!1sen!2sin!4v1664777059543!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
