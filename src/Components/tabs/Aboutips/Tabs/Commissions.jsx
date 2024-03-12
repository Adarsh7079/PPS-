import React from "react";

const data=[
  {
    Position:`Chairperson`,
    Name:`Dr. Asim Mallick`,
    Place:`Kolkata`,
    Email:`drakm.ips@gmail.com`
  },
  {
    Position:`Returning Officer`,
    Name:`Dr. Bharat Singh Shekhawat`,
    Place:`Kota`,
    Email:`shekhawatbharat1@gmail.com `
  },
  {
    Position:`Election Officer`,
    Name:`Dr. Bharat Singh Shekhawat`,
    Place:`Kota`,
    Email:`shekhawatbharat1@gmail.com `
  },

]

const Commissions = () => {
  return (
    <div>
      <section className=" flex flex-col gap-5 mx-auto">
        <div className=" w-full ">
          <div>
            <h1 className=" text-gray-600 text-2xl">
              Election Commission: 2023-2024
            </h1>
          </div>
          <div className=" w-full mt-2 border-2 border-b-0 text-sm text-gray-600">
            <div className=" w-full flex  bg-[#3ad5bc] h-[40px] items-center px-5 text-white">
              <div className=" md:w-[250px]">Position</div>
              <div className=" md:w-[350px]">Name</div>
              <div className=" md:w-[350px]">Place</div>
              <div className="md:w-[350px]">Email</div>
            </div>
            <div>
              {
                data.map((item)=>
                <div className=" flex  justify-evenly px-5  border-b-2 p-2">
                  <h1 className="md:w-[250px]">{item.Position}</h1>
                  <h1 className=" md:w-[350px]">{item.Name}</h1>
                  <h1 className=" md:w-[350px]">{item.Place}</h1>
                  <h1 className="md:w-[350px]">{item.Email}</h1>
                </div>
                )
              }
            </div>
          </div>
        </div>

        <div className=" w-full ">
          <div>
            <h1 className=" text-gray-600 text-2xl">
            INTERNAL AUDIT COMMISSION: 2023-2024
            </h1>
          </div>
          <div className=" w-full mt-2 border-2 border-b-0 text-sm text-gray-600">
            <div className=" w-full flex  bg-[#3ad5bc] h-[40px] items-center px-5 text-white">
              <div className=" md:w-[250px]">Position</div>
              <div className=" md:w-[350px]">Name</div>
              <div className=" md:w-[350px]">Place</div>
              <div className="md:w-[350px]">Email</div>
            </div>
            <div>
              {
                data.map((item)=>
                <div className=" flex  justify-evenly px-5  border-b-2 p-2">
                  <h1 className="md:w-[250px]">{item.Position}</h1>
                  <h1 className=" md:w-[350px]">{item.Name}</h1>
                  <h1 className=" md:w-[350px]">{item.Place}</h1>
                  <h1 className="md:w-[350px]">{item.Email}</h1>
                </div>
                )
              }
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div>
            <h1 className=" text-gray-600 text-2xl">
            TRIBUNAL: 2023-2024
            </h1>
          </div>
          <div className=" w-full mt-2 border-2 border-b-0 text-sm text-gray-600">
            <div className=" w-full flex  bg-[#3ad5bc] h-[40px] items-center px-5 text-white">
              <div className=" md:w-[250px]">Position</div>
              <div className=" md:w-[350px]">Name</div>
              <div className=" md:w-[350px]">Place</div>
              <div className="md:w-[350px]">Email</div>
            </div>
            <div>
              {
                data.map((item)=>
                <div className=" flex  justify-evenly px-5  border-b-2 p-2">
                  <h1 className="md:w-[250px]">{item.Position}</h1>
                  <h1 className=" md:w-[350px]">{item.Name}</h1>
                  <h1 className=" md:w-[350px]">{item.Place}</h1>
                  <h1 className="md:w-[350px]">{item.Email}</h1>
                </div>
                )
              }
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Commissions;
