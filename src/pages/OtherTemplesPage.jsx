import React from "react";

// media assets
import frame from "../assets/img/otherTemplesPage/frame.png";

const OtherTemplesPage = () => {
  return (
    <div>
      <section className="bg-[#FE5A29] text-white h-screen">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div>
            <h1>Mela Thiruvengadamudyaan </h1>
            <div>
              <p>
                Vanamamalai mutt is an ancient srivaishnava mutt which was
                established by ponnadikkal jiyar under the orders of manavala
                mamunigal. Ponnadikkal jiyar was the first and foremost disciple
                and this mutt is one of the most important mutts of srivaishnava
                sath sampradhayam.{" "}
              </p>

              <p>
                A mutt is a spiritual center where ancient knowledge strives and
                blossoms through regular discourses and education by learned
                scholars. Srivaishnava mutts are generally headed by sannyasis
                and are run under the authority of them. Srivaishnava sannyasis
                are generally identified as ubhaya vedhanthacharyas and
                paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means
                one who has mastered both samskritha vedham and dhravida ved
              </p>
            </div>
          </div>
          <div>
            <img src={frame} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherTemplesPage;
