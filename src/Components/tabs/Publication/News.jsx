import React from "react";
import { LuSearch } from "react-icons/lu";

const News = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/8-background.jpg')] w-full h-[350px] bg-cover">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/analysis.svg"
            alt=""
            className="w-[70px] h-[70px] mt-20"
          />
          <h1 className="text-gray-700 text-3xl">Newsletter</h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-2/3 mx-auto py-14">
        <div>
          <div className="text-gray-500 leading-[25px]">
            The Indian Psychiatric Society publishes newsletters periodically,
            to apprise honoured members about the activities of the society.
            Although, the website currently serves as the primary source of
            instantaneous communication with membership, these newsletters
            provide a unique opportunity for the society to engage with members.
            Specially recommended are the letters from the President’s desk and
            from the desk of the Hon. General Secretary, which delineates the
            vision and the roadmap for the future.
          </div>
          <div className="flex items-center mx-auto mt-20">
            <input
              type="search"
              placeholder="search"
              className="h-[40px] w-full rounded-lg"
            />
            <div className="bg-[#a1c731] h-[40px] flex justify-center items-center w-[50px]">
              <LuSearch className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-2/3 flex flex-wrap mx-auto">
        <div className="w-full md:w-[290px] border-e-2 border-b-2 rounded-lg h-[390px] mb-20">
          <div className="bg-[#0693e3] w-[280px]">
            <h1 className="text-xl text-center py-5">
              Management of Sexual Disorders in Elderly
            </h1>
          </div>
          <div>
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2022/04/IPSCPG-Cover3-400x250.jpg"
              alt=""
              className="w-[280px] h-[150px]"
            />
          </div>
          <div className="w-[280px] flex flex-col gap-3 bg-[#0693e3] py-5 px-2">
            <h1 className="text-sm">
              Authors: T. S. Sathyanarayana Rao, Abhinav Tandon, Shivanand
              Manohar, Supriya Mathur
            </h1>
            <h1>Date: February-2018</h1>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f3] py-14">
        <div className="w-full md:w-2/3 mx-auto">
          <div className="w-full bg-white justify-between mx-auto md:h-[400px] flex flex-col md:flex-row items-center">
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

export default News;
