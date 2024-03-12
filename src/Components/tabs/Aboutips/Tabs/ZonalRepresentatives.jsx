import React from "react";

// Hard code 
const datacentral = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/account.svg`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];
const dataeast = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2022/02/Dr-Sidana.webp`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];
const datanorth = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2022/02/Dr.-Vadlamani-copy.webp`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];
const datasouth = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/account.svg`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];
const datawest = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/account.svg`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];
const ZonalRepresent = () => {
  return (
    <div className=" w-full">
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full flex mx-auto items-center border-b-[1px] border-gray-200 ">
          <h1 className=" flex mx-auto py-3 mt-20">
            Zonal Representatives: 2023-2024
          </h1>
        </div>
        <div className="mt-10 flex  w-full">
          <div className="flex gap-2 bg-[#70d5e7] md:justify-center w-[400px] md:items-center flex-wrap">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/central-zone.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <h1 className=" text-2xl text-gray-600">Central Zone</h1>
          </div>
          <div className=" w-full flex justify-end">
            <div className=" flex gap-10">
              {datacentral.map((e) => (
                <div className=" flex w-[300px] gap-3 ">
                  <div>
                    <img
                      src=""
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
        <div className=" flex  w-full">
          <div className="flex gap-2 bg-[#5f9aed] md:justify-center w-[400px] md:items-center flex-wrap">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/central-zone.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <h1 className=" text-2xl text-gray-600">East Zone</h1>
          </div>
          <div className=" w-full flex justify-end">
            <div className=" flex gap-10">
              {dataeast.map((e) => (
                <div className=" flex w-[300px] gap-3 ">
                  <div>
                    <img
                      src=""
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
        <div className=" flex  w-full">
          <div className="flex gap-2 bg-[#5f9aed] md:justify-center w-[400px] md:items-center flex-wrap">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/central-zone.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <h1 className=" text-2xl text-gray-600">North Zone</h1>
          </div>
          <div className=" w-full flex justify-end">
            <div className=" flex gap-10">
              {datanorth.map((e) => (
                <div className=" flex w-[300px] gap-3 ">
                  <div>
                    <img
                      src=""
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
        <div className=" flex  w-full">
          <div className="flex gap-2 bg-[#5f9aed] md:justify-center w-[400px] md:items-center flex-wrap">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/central-zone.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <h1 className=" text-2xl text-gray-600">West Zone</h1>
          </div>
          <div className=" w-full flex justify-end">
            <div className=" flex gap-10">
              {datawest.map((e) => (
                <div className=" flex w-[300px] gap-3 ">
                  <div>
                    <img
                      src=""
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
        <div className=" flex  w-full">
          <div className="flex gap-2 bg-[#5f9aed] md:justify-center w-[400px] md:items-center flex-wrap">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/central-zone.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <h1 className=" text-2xl text-gray-600">South Zone</h1>
          </div>
          <div className=" w-full flex justify-end">
            <div className=" flex gap-10">
              {datasouth.map((e) => (
                <div className=" flex w-[300px] gap-3 ">
                  <div>
                    <img
                      src=""
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
        
      </div>
    </div>
  );
};

export default ZonalRepresent;
