import React from "react";
import { LuSearch } from "react-icons/lu";
import BooksPagination from "./IpsBooks/BooksPagination";

const Ips = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/8-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/checklist.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">IPS Guidelines</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="w-2/3 flex mx-auto py-14">
        <div>
          {/* content */}
          <div className=" flex flex-col gap-5 text-sm leading-[25px] mb-10">
            <h1 className=" text-gray-500">
              The Indian Psychiatric Society has been publishing systematically
              developed patient care strategies for effective clinical decision
              making and delivery of care since 2005. The present compilation of
              IPS Clinical Practice Guidelines (IPS-CPG), were arrived at
              through a series of national workshops, with each workshop having
              more than 30 subject experts from different parts of the country.
              The draft papers were reviewed and revised in the light of
              ammendments suggested.
            </h1>
            <h1 className=" text-gray-500">
              These guidelines are intended for managing clinical situations
              that psychiatrists generally encounter in practice. The guidelines
              will benefit psychiatrists and students, by saving their time, and
              also by providing them with a reference standards of care.
            </h1>
            <h1 className=" text-gray-500">
              – Clinical Practice Guidelines Taskforce, IPS
            </h1>
          </div>

          {/* search */}
          <div>
            <div className="flex items-center mx-auto ">
              <input
                type="search"
                placeholder="search"
                className=" h-[40px] w-full roudns-lg"
              />
              <div className="bg-[#a1c731] h-[40px] flex justify-center items-center w-[50px]">
                <LuSearch className=" text-2xl text-white " />
              </div>
            </div>
          </div>


          <section>
            <BooksPagination/>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Ips;
