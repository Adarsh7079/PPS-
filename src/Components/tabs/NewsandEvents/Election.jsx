import React from "react";
import ImagePagination from "./ImagePagination/ImagePagination";

const Election = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/3a-background.jpg')] w-full h-[350px] bg-cover">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/balance.svg"
            alt=""
            className="w-[70px] h-[70px] mt-20"
          />
          <h1 className="text-gray-700 text-3xl">IPS Election 2024</h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-2/3 mx-auto py-20 text-gray-500">
        <div>
          This page forms the central repository of all information related to
          the IPS elections. Announcements and notices from the election
          commission and the secretariat will be added to this page as they are
          published.
        </div>
      </section>
      {/* Notice Section */}
      <section className="w-full  bg-[#f0f0f3] py-20">
        <div className="lg:w-2/3 mx-auto flex flex-col gap-10">
          <div className=" w-full">
            <div className="bg-[#cf2e2e] w-full">
              <h1 className=" text-white p-2 ">Notice 3: 27th October, 2023</h1>
            </div>
            <div className=" flex flex-col gap-5">
              <div className=" text-gray-400 flex flex-col gap-3 leading-[25px]">
                <h1 className=" mt-7">
                  The final list of contestants for various posts of the Indian
                  Psychiatric Society are hereby notified. Kindly download the
                  official pdf for the complete details.
                </h1>
                <div>
                  <li>
                    Canvassing by Mobile / Telephonic calls is only permitted.
                  </li>
                  <li>
                    No other means are permitted for canvassing. If any breach
                    is detected, the contestant shall be disqualified.
                  </li>
                </div>
                <h1 className=" text-gray-600">
                  Please note: “no other means” explains as mass communication
                  involving election through bulk format of email; SMS;
                  WhatsApp; Facebook; any social media; pamphlet, images,
                  write-up, letters, tele & video conferencing, hoardings and
                  also call to voters by third party (other than candidate).
                </h1>
              </div>
              <div>
                <button className=" text-blue-500">
                  Download Notice Document
                </button>
              </div>
              <div className=" text-gray-500">
                Thanking you, <br /> Dr. Asim Kumar Mallick <br /> Chairperson,{" "}
                <br /> Election Commission, <br />
                Indian Psychiatric Society
              </div>
            </div>
          </div>
          <div className=" w-full py-20">
            <div className="bg-[#cf2e2e] w-full">
              <h1 className=" text-white p-2 ">
                Notice 2: 30th September, 2023
              </h1>
            </div>
            <div className=" flex flex-col gap-5">
              <div className=" text-gray-400 flex flex-col gap-3 leading-[25px]">
                <h1 className=" mt-7">
                  The Scrutiny Meeting for the IPS Election 2024 was held on
                  Sunday, 24th September 2023 @ 10:30 AM in hybrid mode
                  (in-person at IPS Headquarter, Gurgaon and also in online Zoom
                  platform) and was successfully conducted by the Election
                  Commission in the online presence of Hon. General Secretary
                  IPS, Hon. Treasurer, IPS and the Nominees for the election.
                </h1>
                <div>
                  We are pleased to release the scrutiny report for the IPS
                  Election 2024, hereby attached.
                </div>
                <h1 className=" text-gray-600">
                  Please note: “no other means” explains as mass communication
                  involving election through bulk format of email; SMS;
                  WhatsApp; Facebook; any social media; pamphlet, images,
                  write-up, letters, tele & video conferencing, hoardings and
                  also call to voters by third party (other than candidate).
                </h1>
              </div>
              <div className=" text-gray-400">
                Please note: 20th October 2023 is the last date of receiving
                withdrawal of nomination, that to be sent on official email of
                Election Commission (ipsnationalelection@gmail.com)
              </div>
              <div className=" text-gray-500">
                Thanking you, <br /> Dr. Asim Kumar Mallick <br /> Chairperson,{" "}
                <br /> Election Commission, <br />
                Indian Psychiatric Society
              </div>
            </div>
          </div>

          <div className=" w-full py-20">
            <div className="bg-[#cf2e2e] w-full">
              <h1 className=" text-white p-2 ">Notice 1: 15th August, 2023</h1>
            </div>
            <div className=" flex flex-col gap-5">
              <div className=" text-gray-400 flex flex-col gap-3 leading-[25px]">
                <h1 className=" mt-7">
                  The Election Commission of the Indian Psychiatric Society
                  invites nominations from the eligible Life Fellows of the
                  Indian Psychiatric Society to the following posts:
                </h1>
                <div>
                  <h1>
                    {" "}
                    1. Vice President cum President Elect – One Post – One Year
                  </h1>
                  <h1>2 . Hon. General Secretary – One Post – Two Years</h1>
                  <h1>3 . Hon. Treasurer – One Post – Two Years</h1>
                  <h1>4. Hon. Editor – One Post – Two Years</h1>
                  <h1>5. Direct Council Member – Three Posts – Three Years</h1>
                  <h1>
                    6. Direct Council Member (Lady) – Two Posts – Three Years
                  </h1>
                </div>
                <div className=" text-gray-400">
                  <li>
                    The nominees must fulfill all eligibility criteria on/before
                    15th September 2023, the last date of submission of
                    nomination papers by email on ipsnationalelection@gmail.com
                  </li>
                  <li>
                    The completely filled nomination form in the attached format
                    must be scanned and the documents must be sent as
                    attachments to an email on which only the phrase
                    ‘NOMINATION’ shall be mentioned in the subject area of the
                    email.
                  </li>
                  <li>
                    The email must be sent at the official email address of the
                    Election Commission i.e. ipsnationalelection@gmail.com
                  </li>
                  <li>
                    The email should be sent from the Nominee’s own email id
                    that is being mentioned in Nomination Form.
                  </li>
                </div>
              </div>
              <div className=" text-gray-400">
                <h1>
                  Note: Any complaint or any kind of suggestion from the
                  candidate or any eligible voter must be sent on official email
                  id of Election Commission, ipsnationalelection@gmail.com and
                  not on personal email id of any of the Election Commission
                  members.
                </h1>
                <h1>
                  Complete details along with Nomination Form is available in
                  the Official Election Notification 2024. The oficial list of
                  all Fellows of the society can be found here.
                </h1>
              </div>
              <div className=" text-gray-500">
                Dr. Asim Kumar Mallick <br /> Dr. Asim Kumar Mallick Indian
                Psychiatric Society <br />
                Date: 15th August 2023
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-400 text-white text-lg">
        <div className="py-3">
          <h1 className="flex justify-center">
            Archive of Past Office Bearers & ANCIPS
          </h1>
        </div>
      </section>
      {/* Card Element  */}
      <section className=" w-full bg-[#f0f0f3] py-20">
        <div className=" lg:w-2/3 mx-auto flex flex-wrap gap-5">
         <ImagePagination/>
        </div>
      </section>

      <section className="">
        <div className=" p-5 w-2/3 flex mx-auto">
          <div className=" w-full bg-white justify-between mx-auto md:h-[400px] flex flex-col md:flex-row items-center">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/06/Archive.svg"
              alt=""
              className="w-full md:max-w-[300px] h-auto mb-5 md:mb-0"
            />
            <div className="w-full md:w-[650px] flex flex-col gap-5">
              <h1 className="text-lg md:text-2xl">
                The IPS{" "}
                <span className="text-[#ff6600] font-bold text-xl">
                  Archive
                </span>
              </h1>
              <h1 className="text-gray-600 text-sm md:text-base">
                All notices, announcements, and events of the IPS are now
                archived for future reference and are available in a searchable
                format for registered members of the society.
              </h1>
              <button className="bg-[#78CBDA] h-[40px] w-[180px] rounded-md shadow-lg text-xs md:text-sm text-gray-100">
                The IPS Archive
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Election;
