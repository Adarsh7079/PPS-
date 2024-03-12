import React from "react";
import {Pioneers} from "../../index"
import { Link } from "react-router-dom";
import PDFViewer from "./Pdf";

const History = () => {
  return (
    <div>
      {/* hero section */}
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/1abackground.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/compass.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">About IPS</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <section className=" w-2/3 flex mx-auto py-20">
        <div className=" flex gap-20 flex-wrap">
          <Link
           to="constitution"
           className=" w-[230px] fex flex-col">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/solar-system.svg"
              alt=""
              className=" w-[60px] h-[60px] flex mx-auto"
            />
            <div className=" leading-[28px] flex flex-col ">
              <h1 className=" flex justify-center mt-5 text-2xl text-gray-600">
                Origin
              </h1>
              <h1 className="flex items-center justify-center text-center text-[12px]  text-gray-500">
                The IPS was founded on 7th January 1947, during the Indian
                Science Congress meeting held in New Delhi.
              </h1>
            </div>
          </Link>
          <Link
           to="/journal"
           className=" w-[230px] fex flex-col">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/textbook.svg"
              alt=""
              className=" w-[60px] h-[60px] flex mx-auto"
            />
            <div className=" leading-[28px] flex flex-col ">
              <h1 className=" flex justify-center mt-5 text-2xl text-gray-600">
                Journal
              </h1>
              <h1 className="flex items-center justify-center text-center text-[12px]  text-gray-500">
                The Indian Journal of Psychiatry began in 1949 as the Indian
                Journal of Neurology and Psychiatry.
              </h1>
            </div>
          </Link>
          <Link 
          to="/organization"
          className=" w-[230px] fex flex-col">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/Branches.svg"
              alt=""
              className=" w-[60px] h-[60px] flex mx-auto"
            />
            <div className=" leading-[28px] flex flex-col ">
              <h1 className=" flex justify-center mt-5 text-2xl text-gray-600">
                Zones
              </h1>
              <h1 className="flex items-center justify-center text-center text-[12px]  text-gray-500">
                Between 1975 & 1978, five IPS Zones were formed, which have
                flourished over time.
              </h1>
            </div>
          </Link>
          <Link 
          to="/Ancips"
          className=" w-[230px] fex flex-col">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/microphone.svg"
              alt=""
              className=" w-[60px] h-[60px] flex mx-auto"
            />
            <div className=" leading-[28px] flex flex-col ">
              <h1 className=" flex justify-center mt-5 text-2xl text-gray-600">
                ANCIPS
              </h1>
              <h1 className="flex items-center justify-center text-center text-[12px]  text-gray-500">
                The first National Conference of the society was held at Patna
                in January 1948.
              </h1>
            </div>
          </Link>
        </div>
      </section>

      {/* Progress bar  */}
      <section className=" bg-[#ededef] w-full">
        <div className="w-2/3 py-20 flex mx-auto gap-20">
          <div className=" w-[500px]">
            <h1 className=" text-3xl text-gray-600">Our Journey</h1>
            <h1 className=" text-[14px] leading-[25px] text-gray-500 justify-center py-3">
              The IPS began in 1947 with 15 founder members and has now grown to
              a membership of above 7000 specialists. The IPS currently
              represents the largest society of mental health professionals in
              India & works on health advocacy, social activism, policy
              formulation & medical research in the field of mental health.
            </h1>
          </div>
          {/* progress bart */}
          <div className=" w-full flex flex-col gap-3">
            <div>
              <div className="mb-1  text-[14px] text-gray-500">
                Years of social activism: 75years
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5  ">
                <div
                  className="bg-[#aabc76] h-5 rounded-full "
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1  text-[14px] text-gray-500 ">
                Zones & branches: 24
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5  ">
                <div
                  className="bg-[#a9d87d] h-5 rounded-full "
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1  text-[14px] text-gray-500">
                IPS Membership: 7210+
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5  ">
                <div
                  className="bg-[#2bb0f2] h-5 rounded-full "
                  style={{ width: "99%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1  text-[14px] text-gray-500">
                Online members till March 2023: 3593
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5  ">
                <div
                  className="bg-[#e0938f] h-5 rounded-full "
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="mb-1  text-[14px] text-gray-500">
                Online Site Visitors Per Day in 2023: 25.8K
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5  ">
                <div
                  className="bg-[#efcd5d] h-5 rounded-full "
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief History */}
      <section>
        <div className=" w-2/3 py-20 flex mx-auto gap-20 leading-[27px]">
          <div className=" w-[600px]">
            <h1 className=" text-gray-600 text-4xl pb-10">
              A Brief History of IPS
            </h1>
            <div className=" text-gray-500 flex flex-col gap-3">
              <h1>
                The Indian Psychiatric Society, the national organization of
                psychiatrists in India, was founded on 7th January 1947 during
                the Indian Science Congress meeting held in New Delhi.
              </h1>
              <h1>
                The organization holds its origins in 1929 when Col Berkley Hill
                founded The Indian Association of Mental Hygiene affiliated to
                the National Council for Mental Hygiene in Great Britain which
                ceased to function after a few years. Later the Indian division
                of the Royal Medico Psychological Association (RMPA) was formed
                in 1939 at the initiative of Dr. Banarasi Das.The PMPA continued
                to function till 1947.
              </h1>
              <h1>
                In a meeting on the 7th of January, at the Indian Science
                Congress, attended by 13 IPS members, the decision to form the
                Indian Psychiatric Society and to dissolve the Indian division
                of the RMPS was taken.
              </h1>
              <h1>
                Members present at the 34th ISC, Delhi, 1947: Major R.B. Davis,
                Dr. N.N. De, Lt. Col. J.E. Dhunjibhoy, Dr. A.S. Johnson, Dr.
                S.A. Hasib, Dr. R.S. Lal, Lt. Col. R.M. Lloyd Still, Prof. H.P.
                Maiti, Dr. C. Kenton, Lt. Col. R.J. Rosie, Major M.H. Shah, Lt.
                Col. E.T.N.
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 mt-20">
            <div className=" text-gray-600 ">Taylor & Dr. D.J. Walterson.</div>
            <div className=" text-gray-500">
              Dr. M.V. Govindaswamy & Dr. K.R. Masani although not personally
              present at the congress, additionally endorsed the decision. Lt.
              Col. J.E. Dhunjibhoy, the first superintendent of Ranchi Indian
              Mental Hospital, was elected President of the Society at the
              conference. Dr. Dhunjibhoy, however was temporary posted to the
              Bengal province and in 1947, just before independence, he was
              called back to the Bombay province and was posted to Karachi,
              Pakistan. After independence he settled in Karachi and later
              resigned as a Fellow of the IPS in 1950. Dr. Robert Brockelesby
              Davis, the then Medical Superintendent to European Mental Hospital
              in Ranchi, was the first secretary and treasurer of the
              association. Dr RB Davis continued to hold both the posts for the
              next eight years till 1954. In 1955, he left the European Mental
              Hospital and established the Kishore Nursing Home named after his
              friend Maharaj Kumar Raj Kishore Shahdeo, which eventually became
              the Davis Institute of Neuropsychiatry.
            </div>
          </div>
        </div>
      </section>

      {/* Slider Pioneers */}
      <section  className=" bg-[#ededef] py-12 flex justify-center">
        <div className=" w-2/3 justify-center">
        <Pioneers/>
        </div>
      </section>

      <section>
        <div className=" w-2/3 py-20 flex mx-auto gap-20">
          <div className=" w-[600px] text-sm">
            <div className=" text-gray-500 flex flex-col gap-3  leading-[27px]">
              <h1>
                On 2nd January 1948, the first Annual General Body Meeting of
                the Society was held at Patna, with Dr. N.N. De as the President
                and Editor and with Dr. R.B. Davis as Secretary and Treasurer of
                the Association. The meeting was attended by 10 fellows of the
                society, and the constitution and bylaws of IPS were formed and
                approved at the meeting. The society was finally registered on
                30th December 1948 at Patna, making IPS the 4th oldest
                professional organization of the nation
              </h1>
              <h1>
                The Indian Psychiatric Society held its second annual meeting at
                Allahabad on 1st and 2nd January of 1949, again in conjunction
                with the Indian Science Congress. Dr. J. Roy, the elected
                president of IPS, proposed a quarterly journal of the Society,
                in
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 ">
            <div className=" text-gray-500  leading-[27px]">
              line with the scope and standards of European Journals. The first
              issue of the “Indian Journal of Neurology and Psychiatry” was
              published from Calcutta (Kolkata) and contained the directory of
              the office bearers and members as a supplement, along with
              proceedings of the annual conference of the IPS. The first editor
              and the first ‘acting’ president of the association, Dr NN De
              hailed from the Burdwan district of Bengal and continued to helm
              the Indian Journal of Neurology and Psychiatry as editor till
              1951. After Dr De stepped down due to ill health, the editorship
              passed on to Dr LP Verma, the first assistant superintendent of
              the Indian Mental Hospital, Ranchi.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgb(248,249,249)]">
        <div className="w-2/3 flex mx-auto gap-[10rem] py-20 px-14">
          <div className=" ">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/IPS-Emblem.jpg"
              alt=""
              className="w-[270px] h-[250px]"
            />
          </div>
          <div className=" w-[700px]">
            <h1 className=" text-gray-500 text-3xl pb-5">The IPS Logo</h1>
            <div className=" text-gray-400 flex flex-col text-sm">
              <h1>
                The Emblem of the Office of President was donated by Major
                General PN Bardhan in 1960. Dr Bardhan was the elected as the
                president of the IPS in 1959-1960; and the Emblem of the Office
                of President was presented to the incoming president Dr KR
                Masani, as a token “of his high regard and esteem for the
                society”. The circle depicts the mandala or the potter’s wheel –
                a symbol of wholeness, cycle or eternity and process. The twelve
                columns represent the months of the year and the zodiac, while
                the Urn represents knowledge. The staff of Aesculapius and the
                entwined snakes of the emblem represent the universal medical
                symbols of life and death. Written at the head the word
                “Prashanti” “envisages serenity, a richness and depth of
                emotional tones, completely under control, culminating in
                tranquility in the midst of turmoil.” The motto of the emblem is
                “Sic transit gloria mundi”, a Latin phrase meaning “Thus passes
                worldly glory”, suggesting the passing of the power from one
                president to another.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/11/IPS-blur-background-final-1.jpg')]  w-full bg-cover">
        <div className="w-2/3 flex mx-auto gap-[10rem] py-20 px-20">
          <div>
            <h1 className=" text-2xl text-gray-500 mx-14">Objectives:</h1>
            <div className=" text-sm text-gray-500 leading-[25px] w-[900px] mx-14">
              <li>
                Promote and advance the subject of Psychiatry and allied
                sciences in all their different branches.
              </li>
              <li>
                Promote the improvement of the mental health of the people and
                mental health education.
              </li>
              <li>
                Promote prevention, control, treatment and relief of all
                psychiatric disabilities.
              </li>
              <li>
                Formulate and advise on the standards of education and training
                for medical and auxiliary personnel in psychiatry and to
                recommend adequate teaching facilities for the purpose.
              </li>
              <li>
                Promote research in the field of psychiatry and mental health.
              </li>
              <li>
                Propagate the principles of psychiatry and current development
                in psychiatric thought.
              </li>
              <li>
                Deal with any matters relating to mental health concerning the
                country and to do all other things as are cognate to the
                subjects of the Indian Psychiatric Society.
              </li>
              <li>
                Safeguard the interest of Psychiatrists and fellow professionals
                in India.
              </li>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" w-2/3 py-20 flex mx-auto gap-20">
          <div className=" w-[600px] text-sm">
            <div className=" text-gray-500 flex flex-col gap-3  leading-[27px]">
              <h1>
                The Indian Journal of Neurology & Psychiatry stopped publication
                after 1954, with the last issue of Indian Journal of Neurology
                and Psychiatry being Vol. 5, Issue 1; published under the
                editorship of Dr. MV Govindaswamy (1954-1958). A significant
                lack of manpower, with only around 80 psychiatrists in the
                country, and a lack of funds resulted in the demise of the
                journal.
              </h1>
              <h1>
                At the annual meeting of the IPS in 1958 at Poona under the
                chairmanship of I.K. Mujawar, a council under M. V. Govindaswamy
                was formed to undertake the necessary actions for resumption of
                the Journal. Finally, in October 1958, the first issue of the
                “Indian Journal of Psychiatry” was printed, under the editorship
                of Major General P.N. Bardhan (Editor:1958-1960) (Vol. 1, No.
                1).
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 ">
            <div className=" text-gray-500  leading-[27px]">
              Dr Bardhan, in the very first editorial of the IJP, commented,
              “The first series was called Indian Journal of Neurology and
              Psychiatry and there is significance in the change of the name of
              the journal. Both neurology and psychiatry are major specialties
              in their own right, and a separate journal could easily be devoted
              to each… the field of psychiatry in this country is very vast and
              ever expanding. Therefore, to justify its existence, this journal
              must represent the experience and progress in every branch of
              psychiatry”.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ededef]">
        <div className=" w-2/3  flex mx-auto gap-[10rem] justify-between">
          <div className=" w-[600px] text-sm py-20">
            <div className=" text-gray-500 flex flex-col gap-3  leading-[27px]">
              <h1 className=" text-2xl">IPS Registration</h1>
              <h1 className=" text-gray-400  leading-[27px]">
                The IPS was registered on 30th December 1948 at Patna, making
                IPS the 4th oldest professional organization of the nation. The
                certificate also shows that the membership fees was 50 rupees
                for the association. In 2020, through the efforts of the then
                Hon. Secretary General, Dr Vinay Kumar, an original copy of the
                certificate was retrieved from the Archieves of the Government
                of Bihar.
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 mt-10 ">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/IPS-Certificate.jpg"
              alt=""
              className="w-[300px] h-[300px]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className=" w-2/3 py-20 flex mx-auto gap-20">
          <div className=" w-[600px] text-sm">
            <div className=" text-gray-500 flex flex-col gap-3  leading-[27px]">
              <h1>
                Since 1948, the IPS has functioned continuously in upholding the
                objectives of the society of promoting and advancing the subject
                of Psychiatry and improving of the mental health of the people.
                The annual conferences of the Society have also been held
                regularly every year, except in the year 1963 when the meeting
                could not take place due to national emergency. Memorable of
                these annual conferences are that of December 1951, at Ranchi
                and was inaugurated by Rajkumari Amrit Kaur, Health Minister,
                Government of India, and was attended by Prof. W. Meyer-Gross,
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 ">
            <div className=" text-gray-500  leading-[27px]">
              who was deputed to the Govt. of India by the World Health
              Organization. The IPS Congress at Nagpur in 1976 was blessed by
              the presence of Acharya Vinoba Bhave, an eminent advocate of
              nonviolence and the spiritual successor of MK Gandhi. The meeting
              of 1978 in AIIMS was inaugurated by the then Prime Minister of
              India, Shri Morarji Desai and was also the first World Psychiatric
              Association (WPA) Regional Meeting in India.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/11/IPS-blur-background-final-1.jpg')]  w-full bg-cover">
        <div className="w-2/3 flex mx-auto gap-[20rem] ">
          <div className="w-[400px] py-20">
            <h1 className=" text-2xl text-gray-500 ">
              The Early Office Bearers
            </h1>
            <h1 className=" text-gray-400">
              Documented record of the early office bearers of the IPS, from a
              1964 article of LP Varma and JS Neki.
            </h1>
          </div>
          <div className="py-10">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Historical-Note.png"
              alt=""
              className="w-[400px]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className=" w-2/3 py-20 flex mx-auto gap-20">
          <div className=" w-[600px] text-sm">
            <div className=" text-gray-500 flex flex-col gap-3  leading-[27px]">
              <h1>
                Between 1975 and 1978, five Zones of the Indian Psychiatric
                Society were established, and constitutional amendments were
                caried out to provide zonal representation in the IPS Executive
                council. Similarly, the Marfatia Award, Bhagwat Award and Dr DLN
                Murty Rao Oration Awards were the earliest instituted awards of
                the society and were started in 1978-79, at Poona. From the
                humble beginning of 15 members, the Society has grown into one
                of the biggest psychiatric societies of the world with a
                membership of more than 7000
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 ">
            <div className=" text-gray-500  leading-[27px] flex flex-col gap-3">
              <h1>
                members. The society inaugurated its permanent headquarters in
                Gurgaon (now Gurugram) in 2012 to maintain continuity of
                functioning. The society has shown signs of vitality and
                stability for the last many years now and holds a promise for an
                even better future.{" "}
              </h1>
              <h1>
                The society has shown signs of vitality and stability for the
                last many years now and holds a promise for an even better
                future.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[rgb(227,230,230)]">
        <div className=" py-2 ">
          <h1 className="flex mx-auto justify-center">
            Archieve of Past Office Bearers & ANCIPS
          </h1>
        </div>
      </section>
     <section className=" w-2/3 md:mx-[15%] py-14">
     <PDFViewer />
     </section>

      <section>
        <div className=" w-2/3 py-20 flex mx-auto gap-20">
          <div className=" w-[600px] text-sm">
            <div className=" text-gray-500 flex flex-col gap-3  leading-[27px]">
              <h1 className=" text-2xl">Further Reading</h1>
              <h1>
                Ernst, W., 2012. The Indianization of Colonial Medicine. NTM Z.
                Für Gesch. Wiss. Tech. Med. 20, 61–89.
                https://doi.org/10.1007/s00048-012-0068-7
              </h1>
              <h1>
                Ernst, W., 2011. Crossing the boundaries of “colonial
                psychiatry”. Reflections on the development of psychiatry in
                British India, C. 1870-1940. Cult. Med. Psychiatry 35, 536–545.
                https://doi.org/10.1007/s11013-011-9233-z
              </h1>
              <h1>
                Goyal, N., 2008. History of IJP. Indian J. Psychiatry. (Special
                Supplement).
                https://www.researchgate.net/publication/268630672_History_of_IJP
              </h1>
              <h1>
                Jain, S., Murthy, P., Sarin, A., 2018. The brief existence of
                the Indian section of the royal medico-psychological
                association: A historical note. Indian J. Psychiatry 60,
                S284–S287.
                https://doi.org/10.4103/psychiatry.IndianJPsychiatry_442_17
              </h1>
              <h1>
                Kallivayalil, R.A., 2012. Indian psychiatric society: A powerful
                force in world psychiatry. Indian J. Psychiatry 54, 4–5.
                https://doi.org/10.4103/0019-5545.94637
              </h1>
              <h1>
                Krishnamurthy, K., Venugopal, D., Alimchandani, A.K., 2000.
                Mental hospitals in India. Indian J. Psychiatry 42, 125–132.
              </h1>
              <h1>
                Kumar, S., Kumar, R., 2008. Institute of mental health and
                hospital, Agra: Evolution in 150 years. Indian J. Psychiatry 50,
                308–312. https://doi.org/10.4103/0019-5545.44759
              </h1>
            </div>
          </div>
          <div className=" w-[600px] flex flex-col gap-3 ">
            <div className=" text-gray-500  leading-[27px] flex flex-col gap-3">
              <h1>
                Mills, J., 2006. Modern psychiatry in India: the British role in
                establishing an Asian system, 1858-1947. Int. Rev. Psychiatry
                Abingdon Engl. 18, 333–343.
                https://doi.org/10.1080/09540260600813271
              </h1>
              <h1>
                Mondal, N., 2017. Dr Nagendra Nath De. Bengal J. Psychiatry 4–8.
                https://doi.org/10.51332/bjp.2017.v22.i1.14
              </h1>
              <h1>
                Parkar, S.R., Dawani, V.S., Apte, J.S., 2001. History of
                psychiatry in India. J. Postgrad. Med. 47, 73–76.
              </h1>
              <h1>
                Radhakrishnan, R., Andrade, C., 2010. The evolution of Indian
                psychiatric research: An examination of the early decades of the
                Indian Journal of Psychiatry. Indian J. Psychiatry 52, S19-25.
                https://doi.org/10.4103/0019-5545.69199
              </h1>
              <h1>
                Rao, T.S.S., Swaminath, G., Rao, G.P., 2010. Indian Psychiatry
                and Indian Journal of Psychiatry – A journey. Indian J.
                Psychiatry 52, S1–S6. https://doi.org/10.4103/0019-5545.69194
              </h1>
              <h1>
                Sharma, S., 2010. History of Indian Psychiatric Society. Indian
                J. Psychiatry 52, 13.
              </h1>
              <h1>
                Vachha, M.R., 1961. The New Symbol – Sic Transit Gloria Mundi.
                Indian J. Psychiatry 3, 72.
              </h1>
              <h1>
                Verma LP, Neki JS., 1964. A Historical Note. Indian J.
                Psychiatry 6, 48–50.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
