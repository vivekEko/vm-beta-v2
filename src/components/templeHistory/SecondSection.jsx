// react
import React from "react";

// media assets
import img1 from "../../assets/img/templeHistory/img1.png";

const SecondSection = () => {
  return (
    <section className="bg-[#FFB507] py-20">
      <div className="w-[85%] mx-auto">
        <h1 className="text-4xl uppercase text-center md:text-right">
          Uthsavar - Deivanaygan, Srivaramangai
        </h1>

        <div className="mt-10 flex justify-between items-center gap-5 flex-col md:flex-row">
          <div className="flex-1">
            <img src={img1} alt="" />
          </div>

          <div className="flex-1">
            <p className="font-caladea text-center md:text-right">
              Vanamamalai mutt is an ancient srivaishnava mutt which was
              established by ponnadikkal jiyar under the orders of manavala
              mamunigal. Ponnadikkal jiyar was the first and foremost disciple
              and this mutt is one of the most important mutts of srivaishnava
              sath sampradhayam.
              <br /> <br /> A mutt is a spiritual center where ancient knowledge
              strives and blossoms through regular discourses and education by
              learned scholars. Srivaishnava mutts are generally headed by
              sannyasis and are run under the authority of them. Srivaishnava
              sannyasis are generally identified as ubhaya vedhanthacharyas and
              paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means one
              who has mastered both samskritha vedham and dhravida vedham with
              their in-depth meanings. Paramahamsa means one who is like a swan
              which is pure and the one which can distinguish between saram
              (essence) and asaram (residue/insignficant). Parivrajaka means one
              who is a mendicant - travelling preacher. Though sannyasis do not
              stay in the same place continuously, for the welfare of all
              beings, srivaishnava sannyasis, out of great compassion, stay in a
              mutt as allowed in sasthram and elaborate on spiritual principles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
