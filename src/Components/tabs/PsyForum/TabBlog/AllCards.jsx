import React from "react";

const data = [
  {
    namee: "1212",
  },
  {
    namee: "1212",
  },
  {
    namee: "1212",
  },
];
const AllCards = () => {
  return (
    <div  className=" ">
      <div className=" w-full flex flex-wrap gap-10 ">
        {data.map((item, index) => (
          <div className="w-[350px] border-2">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2023/11/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717-400x250.jpg"
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
        ))}
      </div>
    </div>
  );
};

export default AllCards;
