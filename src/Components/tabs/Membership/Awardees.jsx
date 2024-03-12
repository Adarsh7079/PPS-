import React from "react";

const Awardees = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/9-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5  t ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/trophy.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Awardees</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className=" w-2/3 flex mx-auto  py-14">
        <div className=" border-[1px] w-full p-5">
          <div className=" flex gap-2 flex-col">
            <h1 className=" font-bold">
              74th ANCIPS 2023 (Bhubaneswar, Odisha) - Award Winners
            </h1>
            <h1 className=" mt-2 text-sm text-gray-500">
              The following is the list of Award winners during IPS ANCIPS
              conference at Bhuvaneshwar.
            </h1>
            <h1 className=" text-sm text-gray-500">
              IPS congratulates all the award winners. The detailed list will be
              published soon!
            </h1>
          </div>
          <div>
            <div>
              <div className=" text-[15px] leading-[27px] mt-2">
                <li>
                  DLN Murthy Rao oration Award:{" "}
                  <span className=" text-gray-500"> Dr Pratima Murthy</span>
                </li>
                <li>
                  Tilak Venkoba Rao Oration:{" "}
                  <span className=" text-gray-500">Dr Abhishek Ghosh</span>
                </li>
                <li>
                  Marfatia Award:{" "}
                  <span className=" text-gray-500">Dr Sandeep Grover</span>
                </li>
                <li>
                  Bhagavath Award:
                  <span className=" text-gray-500">Dr Gopika Jagota</span>
                </li>
                <li>
                  Col Kripal Singh Award:
                  <span className=" text-gray-500">
                    Col Dr Virendra Vikram Singh
                  </span>
                </li>

                <li>
                  Poona Psychiatry Award I:
                  <span className=" text-gray-500">
                    Dr Biswa Ranjan Mishra{" "}
                  </span>
                </li>
              </div>
              <div className=" text-gray-500 mx-3 leading-[27px] mt-2">
                <li>Name of Principal Author: Dr. Biswa Ranjan Mishra</li>
                <li>
                  Name of Co-Authors: Dr. Kanhaiyalal Agrawal, Dr. Debadatta
                  Mohapatra, Dr. Tathagata Biswas, Dr. Santanu Nath, Dr.
                  Rituparna Maiti
                </li>
                <li>
                  Title of the paper: Comparison of Acute Followed by
                  Maintenance ECT vs Clozapine on Psychopathology and Regional
                  Cerebral Blood Flow in Treatment-Resistant Schizophrenia: A
                  Randomized Controlled Trial.
                </li>
                <li>
                  Title of the oration: The Poona Psychiatrists Association
                  Awards I
                </li>
              </div>
              <div className=" text-[15px] leading-[27px] mt-4">
                <li>
                  Poona Psychiatry Award II:{" "}
                  <span className=" text-gray-500"> Dr Abhishek Ghosh</span>
                </li>
                <li>
                  BPSS Award:{" "}
                  <span className=" text-gray-500">Dr Chandramouli Roy</span>
                </li>
                <li>
                  Prof JKT Award:{" "}
                  <span className=" text-gray-500">Dr P K Dalal</span>
                </li>
                <li>
                  Prof KC Dube Poster Award:
                  <span className=" text-gray-500">
                    Dr Kashypi Garg & Dr Shipra Singh
                  </span>
                </li>
                <li>
                  Prof Murugappan poster Award:
                  <span className=" text-gray-500">Dr Aditya S</span>
                </li>

                <li>
                  Young Psychiatrists Award:
                  <span className=" text-gray-500">Dr Arpit Parmar</span>
                </li>

                <li>
                  Sridhar Sharma Award:
                  <span className=" text-gray-500">Brig MSVK Raju</span>
                </li>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Awardees;
