import React from "react";

const FellowShip = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/9-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/trophy.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Fellowships</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-300 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className=" w-2/3 flex mx-auto">
        <div className=" flex gap-5 py-20">
          <div className="w-[400px] border-2">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/10/POST-test-400x250.jpg"
              alt=""
              className="w-full h-[250px]"
            />
            <div className=" flex flex-col gap-5 px-5">
              <div>
                {" "}
                <h1 className=" text-gray-600 font-bold mt-5">
                  A Flat hierarchy with time-based clinical rotation for
                  Postgraduate Psychiatry Training in General Hospital
                  Psychiatry Units.
                </h1>
              </div>
              <div className=" flex gap-2 text-gray-400 text-[12px]">
                <h1>04/02/2024</h1>
                <h1>IPS Education Blog</h1>
              </div>
              <div className=" text-sm text-gray-400">
                Postgraduate psychiatry training always remains a topic of
                discussion among academicians and educationalists. In due course
                of the transition from mental hospitals (better known as
                Institutes of ...
              </div>
            </div>
            <button className="bg-[#B7C33C] w-full py-3 text-gray-100 mt-5">
              Read More
            </button>
          </div>
          <div className="w-[400px] border-2">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/131a-400x250.jpg"
              alt=""
              className="w-full h-[250px]"
            />
            <div className=" flex flex-col gap-5 px-5">
              <div>
                {" "}
                <h1 className=" text-gray-600 font-bold mt-5">
                  A Flat hierarchy with time-based clinical rotation for
                  Postgraduate Psychiatry Training in General Hospital
                  Psychiatry Units.
                </h1>
              </div>
              <div className=" flex gap-2 text-gray-400 text-[12px]">
                <h1>04/02/2024</h1>
                <h1>IPS Education Blog</h1>
              </div>
              <div className=" text-sm text-gray-400">
                Postgraduate psychiatry training always remains a topic of
                discussion among academicians and educationalists. In due course
                of the transition from mental hospitals (better known as
                Institutes of ...
              </div>
            </div>
            <button className="bg-[#B7C33C] w-full py-3 text-gray-100 mt-5">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FellowShip;
