import React from "react";

// media assets
import frame from "../assets/img/otherTemplesPage/frame.png";

const OtherTemplesPage = () => {
  const pageData = [
    {
      bg_color: "#FE5A29",
      text_color: "white",
      image: frame,
      heading: "Mela Thiruvengadamudyaan",
      p1: "Vanamamalai mutt is an ancient srivaishnava mutt which was established by ponnadikkal jiyar under the orders of manavala mamunigal. Ponnadikkal jiyar was the first and foremost disciple and this mutt is one of the most important mutts of srivaishnava sath sampradhayam.",
      p2: "A mutt is a spiritual center where ancient knowledge strives and blossoms through regular discourses and education by learned scholars. Srivaishnava mutts are generally headed by sannyasis and are run under the authority of them. Srivaishnava sannyasis are generally identified as ubhaya vedhanthacharyas and paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means one who has mastered both samskritha vedham and dhravida ved",
    },

    {
      bg_color: "#FFB507",
      text_color: "black",
      image: frame,
      heading: "Therku Thiruvengadamudayan Temple",
      p1: "Vanamamalai mutt is an ancient srivaishnava mutt which was established by ponnadikkal jiyar under the orders of manavala mamunigal. Ponnadikkal jiyar was the first and foremost disciple and this mutt is one of the most important mutts of srivaishnava sath sampradhayam.",
      p2: "A mutt is a spiritual center where ancient knowledge strives and blossoms through regular discourses and education by learned scholars. Srivaishnava mutts are generally headed by sannyasis and are run under the authority of them. Srivaishnava sannyasis are generally identified as ubhaya vedhanthacharyas and paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means one who has mastered both samskritha vedham and dhravida ved",
    },

    {
      bg_color: "#FF8D07",
      text_color: "black",
      image: frame,
      heading: "Nadhipura Vinnagaram",
      p1: "Vanamamalai mutt is an ancient srivaishnava mutt which was established by ponnadikkal jiyar under the orders of manavala mamunigal. Ponnadikkal jiyar was the first and foremost disciple and this mutt is one of the most important mutts of srivaishnava sath sampradhayam.",
      p2: "A mutt is a spiritual center where ancient knowledge strives and blossoms through regular discourses and education by learned scholars. Srivaishnava mutts are generally headed by sannyasis and are run under the authority of them. Srivaishnava sannyasis are generally identified as ubhaya vedhanthacharyas and paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means one who has mastered both samskritha vedham and dhravida ved",
    },

    {
      bg_color: "#FF7508",
      text_color: "black",
      image: frame,
      heading: "Uthsavams",
      p1: "Vanamamalai mutt is an ancient srivaishnava mutt which was established by ponnadikkal jiyar under the orders of manavala mamunigal. Ponnadikkal jiyar was the first and foremost disciple and this mutt is one of the most important mutts of srivaishnava sath sampradhayam.",
      p2: "A mutt is a spiritual center where ancient knowledge strives and blossoms through regular discourses and education by learned scholars. Srivaishnava mutts are generally headed by sannyasis and are run under the authority of them. Srivaishnava sannyasis are generally identified as ubhaya vedhanthacharyas and paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means one who has mastered both samskritha vedham and dhravida ved",
    },
  ];
  return (
    <div>
      {pageData?.map((data, index) => {
        return (
          <section
            key={index}
            style={{ backgroundColor: data?.bg_color, color: data?.text_color }}
          >
            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-20 pt-80 md:pt-48 flex-1 pb-20">
              <div className={` flex-1 `}>
                <h1 className="text-4xl uppercase">{data?.heading}</h1>
                <div className="mt-20 font-caladea ">
                  <p>
                    Vanamamalai mutt is an ancient srivaishnava mutt which was
                    established by ponnadikkal jiyar under the orders of
                    manavala mamunigal. Ponnadikkal jiyar was the first and
                    foremost disciple and this mutt is one of the most important
                    mutts of srivaishnava sath sampradhayam.{" "}
                  </p>

                  <p className="mt-5">
                    A mutt is a spiritual center where ancient knowledge strives
                    and blossoms through regular discourses and education by
                    learned scholars. Srivaishnava mutts are generally headed by
                    sannyasis and are run under the authority of them.
                    Srivaishnava sannyasis are generally identified as ubhaya
                    vedhanthacharyas and paramahamsa parivrajaka acharyas.
                    Ubhaya vedhanthacharya means one who has mastered both
                    samskritha vedham and dhravida ved
                  </p>
                </div>
              </div>
              <div className=" flex-1 max-w-[400px]  ">
                <img
                  src={frame}
                  alt=""
                  className={`w-[80%] md:w-full ${
                    index === 0 || index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }  md:ml-0 `}
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default OtherTemplesPage;
