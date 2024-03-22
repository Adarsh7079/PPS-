import React from "react";
import {Carouselall} from "../index"
import { Link } from "react-router-dom";
import Pdf from "../Components/tabs/Aboutips/Pdf";

import PDFViewer from "../Components/tabs/Aboutips/Pdf";
const Main = () => {
  return (
    <div>
      {/* second section  */}
      <section className=" bg-[#fbf7f7fb] ">
       <div className=" lg:w-2/3 mx-[5%]  lg:mx-auto">
        <div className="flex sm:flex-col flex-wrap lg:flex-row py-10 gap-5 pb-20">
          <div className="border-[1px] rounded-lg border-gray-300 w-full lg:w-[450px]  h-[330px] py-10 bg-white">
           <Link  to="/presidentmain">
              <img
                  src="https://indianpsychiatricsociety.org/wp-content/uploads/2024/02/Dr-Laxmikant-Rathi-Website-Photo.jpeg"
                  alt=""
                  className=" w-[100px] h-[100px] rounded-full flex mx-auto"
                />
             </Link> 
              <div className="flex flex-col gap-3">
                <div className=" text-gray-600 text-2xl text-center mt-7">
                  IPS President’s Message
                </div>
                <div className="leading-[25px]">
                  <h1 className=" text-gray-500 font-semibold text-xl text-center ">
                    Dr. Laxmikant Rathi
                  </h1>
                  <h1 className="text-gray-400 text-lg text-center">
                    President, Indian Psychiatric Society,
                  </h1>
                  <h1 className="text-gray-400  text-sm text-center">
                    2024 – 2025
                  </h1>
                </div>
              </div>
            </div>
            <div className=" lg:flex  text-gray-500 text-sm">
              <div className=" w-full lg:w-[370px] lg:border-e-2 lg:px-10 flex flex-col gap-5 leading-[25px] text-justify">
                <div className="  ">
                  Dear Members, <br />
                  Regards, <br />
                  At the outset I am thankful to you all for making me President
                  of our Indian Psychiatric Society. Taking charge as the
                  President in the Platinum Jubilee conference (75th) added more
                  glory to it. The ingredients on which I will be working are
                  <span className=" text-gray-500 font-bold">“Honesty“, “Transparency” and “Commitment”</span> towards the
                  Portfolio.
                </div>
                <div>
                  Public education and awareness is very near to my heart. If
                  this is done properly throughout the nation then all the
                  psychiatrists and specially the young psychiatrists will be
                  benefited a lot. I also believe that in post Corona period the
                  importance of “mind” health has increased a lot, as it is
                  directly related with the immunity of the person also. So we
                  all together must spread the new concept <span className=" text-gray-500 font-bold"> “Sound body in sound
                  mind only“.</span>
                </div>
                <div>
                  It is my humble request to you all to foster Friendship
                  Fellowship and Harmony in our organization. Let us all rise
                  above all our{" "}
                </div>
              </div>
              <div className="  w-full lg:w-[370px] lg:px-10 flex flex-col gap-5  text-gray-500 text-sm leading-[25px] text-justify ">
                <div>
                  personal interest to uphold the image of IPS Nationally as
                  well as Internationally. Together we will leave no stone
                  unturned in all the spheres to increase the awareness about
                  Mental Health as well increase the glory of our Indian
                  Psychiatric Society. We will be also focussing on all the
                  Private Psychiatrists who work 24×7 in remote areas and help
                  us a lot for our educational programs. We will be also forming
                  a strong legal cell to protect rights of our all colleagues. I
                  also request all LOM to get converted into LF on voluntary
                  basis and take part in choosing their Leaders which is very
                  important for any organisation to keep democracy alive in the
                  organisation. This will also attract new leadership in the
                  organisation. I am always available for any difficulty of
                  your’s throughout my tenure as well as thereafter also.
                </div>
                <div>
                  Thanking You  <br /> With Love, Regards and Respect to all. <br />
                  <span className=" text-gray-500 font-bold"> Dr.
                  Laxmikant Rathi</span> <br /> President, IPS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer Example</h1>
      <PDFViewer pdf={Pdf} />
    </div>

      {/* third  */}
      <section className=" bg-[#034a68]">
        <div className=" mx-[17%] py-20 flex flex-wrap justify-between">
          <div>
            <img src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/joinipstoday.png" alt=""
            className=" w-[450px] h-[400px]" />
          </div>
          <div className=" w-[650px] flex flex-col gap-7 mt-5  " >
            <div className=" text-gray-200">
              <h1 className=" text-[24px]">Update Your <span className=" text-white font-bold text-[28px]"> IPS Details</span> Today !</h1>
              <h1 className=" text-[#d6e871]">The IPS directory is being finalized for publication:</h1>
            </div>
            <div>
              <h1 className=" text-gray-200">The directory is being updated, under the guidance of the Hon. President,
                 Hon. Secretary, Hon. Treasurer and Hon. Editor of IPS</h1>
            </div>
            <div className="flex gap-12">
              <button className=" bg-[#B7c33cff] text-gray-100 h-[40px] w-[150px] rounded-md">Update</button>
              <button className="bg-[#78cbda] text-gray-200 h-[40px] w-[150px] rounded-md"> Join IPS</button>
            </div>
          </div>
        </div>
      </section>
      {/* <Pdf/> */}
      {/* forth */}
      <section className=" mb-32">
        <div>
          <div className=" w-full border-b-2 border-gray-200 ">
            <h1 className=" text-center py-3 text-gray-600">News & Notices</h1>
          </div>
          <div className=" border-[1px] mt-7 border-gray-200 mx-[420px] flex h-[40px] text-sm text-gray-600">
            <div className=" border-e-2 border-gray-300 p-5 flex items-center text-blue-400 transition duration-500 cursor-pointer bg-blue-100">All</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer" >ANCIPS</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer">Election Commision</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer">IPS Secretariate</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer">Journal</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer">Speclalty Sections</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer">Sub Committess</div>
            <div className=" border-e-2 border-gray-300 p-5 flex items-center hover:bg-gray-300 transition duration-500 ease-in-out cursor-pointer">Task Forces</div>
            <div className="  p-5 flex items-center hover:bg-gray-300">Website</div>
          </div>


          {/* carousel */}
          <div className=" flex-wrap mx-2">
            <Carouselall/>
          </div>
        </div>
      </section>

     

      <section className="bg-gray-200  ">
      <div className="p-5 md:p-12 w-2/3 flex mx-auto">
      <div className=" w-full  justify-between mx-auto md:h-[400px] flex flex-col md:flex-row items-center">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/06/Archive.svg"
            alt=""
            className="w-full md:max-w-[300px] h-auto mb-5 md:mb-0"
          />
          <div className="w-full md:w-[650px] flex flex-col gap-5">
            <h1 className="text-lg md:text-2xl">
              The IPS{" "}
              <span className="text-[#ff6600] font-bold text-xl">Archive</span>
            </h1>
            <h1 className="text-gray-600 text-sm md:text-base">
              All notices, announcements, and events of the IPS are now archived
              for future reference and are available in a searchable format for
              registered members of the society.
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

export default Main;
