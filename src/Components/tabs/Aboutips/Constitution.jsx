import React from "react";

const Constitution = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/2b-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/textbook.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Constitution</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-300 h-[3px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <section>
        <div className=" w-2/3 flex gap-[7rem] mx-auto p-10 bg-[rgb(248,249,249)] border-2 border-gray-200 mt-20 mb-20">
          <div className=" w-[800px]">
            <h1 className=" text-2xl text-gray-500">Constitution – 2020</h1>
            <h1 className=" text-gray-500 text-md leading-[27px] mt-7">
              The constitution of the IPS includes the memorandum of the
              association, the rules and regulations as well as the bye-laws of
              IPS. The constitution of the IPS includes 3 parts, 41 chapters &
              45 clauses. This is the most recent version of the constitution,
              as published on 22/01/2020 at Kolkata, India under the Hon.
              General Secretary, Dr Vinay Kumar. This constitution includes all
              amendments till date.
            </h1>
          </div>
          <div className=" flex items-center">
            <button className=" h-[35px] bg-[#4EB2C4] px-10 rounded-md text-[10px] text-gray-100 ">Download</button>
          </div>
        </div>
      </section>
      <section className=" bg-[#4EB2C4]">
        <div className=" py-3 ">
          <h1 className="flex mx-auto justify-center text-gray-100 text-xl">
          Constitution – 2020 Online 
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Constitution;
