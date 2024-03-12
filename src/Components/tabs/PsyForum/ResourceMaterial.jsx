import React from "react";

const ResourceMaterial = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/8-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/healthcare-and-medical.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Resource Material</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-300 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="  bg-[#f8f8f8]">
        <div className="w-2/3 flex mx-auto py-20 gap-20 flex-wrap">
          <div className=" flex flex-col gap-5">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2023/11/MSE-final_page-0001.jpg"
              alt=""
              className="w-[250px] h-[320px]"
            />
            <div className="w-[200px] flex text-sm mx-auto text-center text-[#DE9E55]">
              Download Consensus on Mental State Examination
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2023/11/2003-IPS-PG-Training-guidelines_page-0001.jpg"
              alt=""
              className="w-[250px] h-[320px]"
            />
            <div className="w-[200px] flex text-sm mx-auto text-center text-[#DE9E55]">
              Download 2003-IPS-PG-Training-guidelines
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2023/11/2013-IPS-PG-Training-GUIDELINES-.pdf_page-0001.jpg"
              alt=""
              className="w-[250px] h-[320px]"
            />
            <div className="w-[200px] flex text-sm mx-auto text-center text-[#DE9E55]">
              Download Consensus on Mental State Examination
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceMaterial;
