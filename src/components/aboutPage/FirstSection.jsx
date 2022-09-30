// react
import React from "react";

// assets
import firstSectionImage from "../../assets/img/aboutPage/first_section_img.png";
const FirstSection = () => {
  return (
    <section className="bg-[#FF5A29] pb-10 text-white pt-80 md:pt-48">
      <h1 className="text-center text-4xl ">HISTORY OF VANAMAMALAI MUTT</h1>
      <div className="relative overflow-hidden">
        <img
          src={firstSectionImage}
          alt="perumal thayar andal"
          className=" mx-auto translate-y-5"
        />
      </div>

      <div className="font-caladea text-sm text-center w-[80%] sm:w-[70%] md:w-[60%] mx-auto mt-5">
        <p>
          Vanamamalai mutt is an ancient srivaishnava mutt which was established
          by ponnadikkal jiyar under the orders of manavala mamunigal.
          Ponnadikkal jiyar was the first and foremost disciple and this mutt is
          one of the most important mutts of srivaishnava sath sampradhayam.
        </p>
        <p className="mt-5">
          A mutt is a spiritual center where ancient knowledge strives and
          blossoms through regular discourses and education by learned scholars.
          Srivaishnava mutts are generally headed by sannyasis and are run under
          the authority of them. Srivaishnava sannyasis are generally identified
          as ubhaya vedhanthacharyas and paramahamsa parivrajaka acharyas.
          Ubhaya vedhanthacharya means one who has mastered both samskritha
          vedham and dhravida vedham with their in-depth meanings. Paramahamsa
          means one who is like a swan which is pure and the one which can
          distinguish between saram (essence) and asaram (residue/insignficant).
          Parivrajaka means one who is a mendicant - travelling preacher. Though
          sannyasis do not stay in the same place continuously, for the welfare
          of all beings, srivaishnava sannyasis, out of great compassion, stay
          in a mutt as allowed in sasthram and elaborate on spiritual principles
          to every one. Our vanamamalai mutt is also known as thothadhri mutt in
          uththara bharatham (North India). In addition to the branches here in
          dhakshina bharatham, there are many thothadhri mutts in uththara
          bharatham (including nepal). Starting with ponnadikkal jiyar himself,
          many jiyar swamys from this vanamamalai mutt have travelled to the
          length and breadth of bharatha dhesam and have propagated the divine
          principles of ubhaya vedhantham to different regions. There have been
          very many great scholars amongh the jiyar swamys of this mutt. Many
          acharyas and mahants in uththara bharatham are still greatly faithful
          to our mutt and acharyas.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
