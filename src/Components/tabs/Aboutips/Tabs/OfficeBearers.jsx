import React from "react";

const data = [
  {
    designation: `President`,
    name: `Laxmi Kant Rathi`,
    phone: `+91-7079429676`,
    email: `drlaxmikantrathi712@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `Vice President`,
    name: `Savita Malhitra`,
    phone: `+91-9872000894`,
    email: ` savita.pgi@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `President`,
    name: `Laxmi Kant Rathi`,
    phone: `+91-7079429676`,
    email: `drlaxmikantrathi712@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `Vice President`,
    name: `Savita Malhitra`,
    phone: `+91-9872000894`,
    email: ` savita.pgi@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `President`,
    name: `Laxmi Kant Rathi`,
    phone: `+91-7079429676`,
    email: `drlaxmikantrathi712@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `Vice President`,
    name: `Savita Malhitra`,
    phone: `+91-9872000894`,
    email: ` savita.pgi@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `President`,
    name: `Laxmi Kant Rathi`,
    phone: `+91-7079429676`,
    email: `drlaxmikantrathi712@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
  {
    designation: `Vice President`,
    name: `Savita Malhitra`,
    phone: `+91-9872000894`,
    email: ` savita.pgi@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/dr-laxmikant-rathi-amravati-psychiatrists-15mqe.webp`,
  },
];

const OfficeBearers = () => {
  return (
    <div className=" w-full">
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full flex mx-auto items-center border-b-[1px] border-gray-200 ">
          <h1 className=" flex mx-auto py-3 mt-20">
            IPS Office Bearers: 2024-2025
          </h1>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 w-full justify-center mb-32 ">
         
          {data.map((value,index) => (
            <div index={index} className=" flex w-[300px] gap-3 ">
              <div>
                <img
                  src={value.image}
                  alt=""
                  className=" w-[50px] h-[50px] rounded-full mt-4"
                />
              </div>
              <div className=" text-gray-500 text-sm mt-3">
                <h1 className=" text-gray-700 font-bold">President</h1>
                <h1>Lashmi kant Rathi </h1>
                <h1 className="  text-gray-700">
                  Phone: <span className="text-gray-500 ">7079452025</span>{" "}
                </h1>
                <h1 className="text-gray-700 font-semibold">Email : </h1>
                <h1>adasd@gmail.com</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeBearers;
