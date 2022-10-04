// react
import React from "react";

// media assets

import firstSectionBg from "../../assets/img/templeHistory/first_section_bg.svg";
import temple from "../../assets/img/templeHistory/temple.png";

const FirstSection = () => {
  return (
    <section className="bg-[url('../src/assets/img/templeHistory/first_section_bg.svg')] bg-no-repeat bg-cover bg-right-bottom  text-white ">
      <div>
        <div className=" w-[85%] mx-auto  pt-80 md:pt-48 pb-5">
          <div className="md:hidden">
            <h1 className="text-4xl uppercase text-center">Temple History</h1>

            <p className="font-caladea mt-10 text-sm">
              Vanamamalai mutt is an ancient srivaishnava mutt which was
              established by ponnadikkal jiyar under the orders of manavala
              mamunigal. Ponnadikkal jiyar was the first and foremost disciple
              and this mutt is one of the most important mutts of srivaishnava
              sath sampradhayam.
              <br /> <br />A mutt is a spiritual center where ancient knowledge
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
              to every one.
            </p>

            <p className="font-caladea  text-sm w-full ">
              Our vanamamalai mutt is also known as thothadhri mutt in uththara
              bharatham (North India). In addition to the branches here in
              dhakshina bharatham, there are many thothadhri mutts in uththara
              bharatham (including nepal). Starting with ponnadikkal jiyar
              himself, many jiyar swamys from this vanamamalai mutt have
              travelled to the length and breadth of bharatha dhesam and have
              propagated the divine principles of ubhaya vedhantham to different
              regions. There have been very many great scholars amongh the jiyar
              swamys of this mutt. Many acharyas and mahants in uththara
              bharatham are still greatly faithful to our mutt and acharyas.
            </p>

            <div className="mt-10 flex justify-between items-end md:items-start gap-2 md:hidden ">
              <p className="font-caladea  text-sm w-full ">
                Our vanamamalai mutt is also known as thothadhri mutt in
                uththara bharatham (North India). In addition to the branches
                here in dhakshina bharatham, there are many thothadhri mutts in
                uththara bharatham (including nepal). Starting with ponnadikkal
                jiyar himself, many jiyar swamys from this vanamamalai mutt have
                travelled to the length and breadth of bharatha dhesam and have
                propagated the divine principles of ubhaya vedhantham to
                different regions. There have been very many great scholars
                amongh the jiyar swamys of this mutt. Many acharyas and mahants
                in uththara bharatham are still greatly faithful to our mutt and
                acharyas.
              </p>
              <div className=" w-max">
                <img src={temple} alt="temple" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between items-end">
            <div className="font-caladea w-[70%] self-start">
              <p>
                Vanamamalai mutt is an ancient srivaishnava mutt which was
                established by ponnadikkal jiyar under the orders of manavala
                mamunigal. Ponnadikkal jiyar was the first and foremost disciple
                and this mutt is one of the most important mutts of srivaishnava
                sath sampradhayam.
              </p>

              <p className="my-5">
                A mutt is a spiritual center where ancient knowledge strives and
                blossoms through regular discourses and education by learned
                scholars. Srivaishnava mutts are generally headed by sannyasis
                and are run under the authority of them. Srivaishnava sannyasis
                are generally identified as ubhaya vedhanthacharyas and
                paramahamsa parivrajaka acharyas. Ubhaya vedhanthacharya means
                one who has mastered both samskritha vedham and dhravida vedham
                with their in-depth meanings. Paramahamsa means one who is like
                a swan which is pure and the one which can distinguish between
                saram (essence) and asaram (residue/insignficant). Parivrajaka
                means one who is a mendicant - travelling preacher. Though
                sannyasis do not stay in the same place continuously, for the
                welfare of all beings, srivaishnava sannyasis, out of great
                compassion, stay in a mutt as allowed in sasthram and elaborate
                on spiritual principles to every one.
              </p>

              <p>
                Our vanamamalai mutt is also known as thothadhri mutt in
                uththara bharatham (North India). In addition to the branches
                here in dhakshina bharatham, there are many thothadhri mutts in
                uththara bharatham (including nepal). Starting with ponnadikkal
                jiyar himself, many jiyar swamys from this vanamamalai mutt have
                travelled to the length and breadth of bharatha dhesam and have
                propagated the divine principles of ubhaya vedhantham to
                different regions. There have been very many great scholars
                amongh the jiyar swamys of this mutt. Many acharyas and mahants
                in uththara bharatham are still greatly faithful to our mutt and
                acharyas.
              </p>
            </div>

            <div className=" w-[50%] max-w-[350px] ">
              <img src={temple} alt="temple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
