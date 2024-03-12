import React from "react";
import Ancipsimage from "./AncipPagination/AncipsImage";

const Ancips = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/6-background-1.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/seo-and-web.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">ANCIPS 2024</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* tagline */}

      <section className=" w-2/3 flex mx-auto">
        <div className=" flex flex-col gap-5 py-20">
          <div className=" text-gray-400">
            ANCIPS or the Annual National Conference of Indian Psychiatric
            Society represents the yearly prime national conference of the
            organization. The 75th ANCIPS will be held in Kochi, Kerala.
          </div>
          <div className=" text-gray-400">
            All IPS announcements related to the current ANCIPS will be
            reflected here. Visit the official ANCIPS-2024 site for further
            information.
          </div>
        </div>
      </section>

      {/* text banner */}
      <section className=" bg-blue-400 text-white text-lg">
        <div className=" py-3 ">
          <h1 className="flex mx-auto justify-center">
            Archieve of Past Office Bearers & ANCIPS
          </h1>
        </div>
      </section>

      {/* Card Login */}
      <section className=" w-full  py-20">
        <div className=" lg:w-2/3 mx-auto flex flex-wrap px-3 ">
          <Ancipsimage/>
        </div>
      </section>
    </div>
  );
};

export default Ancips;
