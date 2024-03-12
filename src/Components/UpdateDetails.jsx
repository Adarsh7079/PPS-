import React from "react";
import { Link } from "react-router-dom";

const UpdateDetails = () => {
  return (
    <div>
      <section className="w-full md:w-2/3 flex flex-col mx-auto mt-14 rounded-md border-2 shadow-2xl mb-14 ">
        <div className="flex mx-auto py-7 w-full bg-[#315bef] rounded-t-md">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/11/IPS-Logo-Full-Trans-200.png"
            alt=""
            className="w-[250px] h-[100px] flex mx-auto"
          />
        </div>
        <div className="py-12 w-full md:w-2/3 flex mx-auto flex-col gap-5 text-gray-500">
          <h1 className="flex justify-center text-xl">Update Details</h1>
          <div className="text-md flex flex-col gap-5">
            <h1>
              The IPS membership details are being revised for all members in
              preparation for the Membership Directory publication. Kindly
              update your details to facilitate the process and to ensure that
              you receive all information from the society.
            </h1>
            <h1>
              If you already have an account on the website, simply login and
              complete your profile. If you are already logged into the IPS
              website, your details will be pre-populated from profile data. You
              can change them if you want. If you do not yet have a profile on
              this website, kindly register.
            </h1>
            <h1>
              Additionally, kindly select an option in the journal preference
              section to indicate print vs e-copy of the journal desired.
            </h1>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-gray-500 font-semibold border-b-2 pb-2">
                1. Personal Details
              </h1>
              <div className="w-full flex flex-wrap gap-5 py-14 ">
                <div className="flex flex-col w-full md:w-auto">
                  <label htmlFor="" className="focus:outline-none">
                    Salutation <span className="text-red-500">*</span>
                  </label>
                  <div className="text-sm">
                    <select name="" id="" className="focus:outline-none w-full">
                      <option value="">Dr.</option>
                      <option value="">Mr.</option>
                      <option value="">Mrs.</option>
                      <option value="">Ms.</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                </div>
                <input type="text" className="flex flex-col w-full md:w-[225px]" placeholder="First Name *" />
                <input type="text" className="flex flex-col w-full md:w-[225px]" placeholder="Middle Name" />
                <input type="text" className="flex flex-col w-full md:w-[225px]" placeholder="Last Name *" />
              </div>

              <div className="w-full flex flex-wrap gap-3 py-14">
                <input type="text" className="flex flex-col w-full md:w-[270px]" placeholder="First Name *" />
                <input type="text" className="flex flex-col w-full md:w-[270px]" placeholder="Middle Name" />
                <input type="text" className="flex flex-col w-full md:w-[270px]" placeholder="Last Name *" />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-wrap gap-5 ">
                <h1 className="text-gray-500 font-semibold border-b-2 pb-2 w-full mt-10 pb-5 ">
                  2. Registration Details
                </h1>
                <div className=" flex gap-3 mt-10">
                  <div className="flex flex-col w-full md:w-[270px]">
                    <div className=" flex flex-col w-full">
                      <label htmlFor="" className="focus:outline-none">
                        IPS Details <span className="text-red-500">*</span>
                      </label>
                      <select name="" id="" className="focus:outline-none w-full ">
                        <option value="">Life Ordinary Member (LOM)</option>
                        <option value="">Life Fellow (LF)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-[270px]">
                    <div className=" flex flex-col w-[270px]">
                      <label htmlFor="">Membership Number</label>
                      <select name="" id="" className="focus:outline-none w-full ">
                        <option value="">I Know My IPS Number</option>
                        <option value="">I do not remember IPS Number</option>
                      </select>
                    </div>
                  </div>
                  <input type="text" className="flex flex-col w-full md:w-[225px]" placeholder="Membership Number" />
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-full ">
                <h1 className="text-gray-500 font-semibold border-b-2 pb-2 w-full mt-10 ">
                  3. Contact Details
                </h1>
                <div className="w-full flex flex-wrap gap-5 py-14 ">
                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="Email *" />
                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="Mobile *" />
                </div>

                <div className="w-full flex flex-wrap gap-5">
                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="Floor/Building *" />
                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="Street, Locality *" />
                </div>
                <div className="w-full flex flex-wrap gap-5 py-14">
                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="City *" />
                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="State *" />
                </div>
                <div className="w-full flex flex-wrap gap-5 ">
                  <div className="flex flex-col w-full md:w-[48%]">
                    <label htmlFor="" className="focus:outline-none">
                      Country<span className="text-red-500">*</span>
                    </label>
                    <div className=" text-sm">
                      <select
                        name=""
                        id=""
                        className="focus:outline-none w-full "
                      >
                        <option value="">India </option>
                        <option value="">Pakistan</option>
                        <option value="">Nepal </option>
                        <option value="">Saudi</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                  </div>

                  <input type="text" className="flex flex-col w-full md:w-[48%]" placeholder="PIN Code *" />
                </div>
                <div className="w-full flex flex-wrap gap-5 py-14">
                  <div className="flex flex-col w-full md:w-[48%]">
                    <label htmlFor="" className="focus:outline-none">
                      Zone
                    </label>
                    <div className=" text-sm">
                      <select
                        name=""
                        id=""
                        className="focus:outline-none w-full "
                      >
                        <option value="">Central Zone </option>
                        <option value="">East Zone </option>
                        <option value="">West Zone </option>
                        <option value="">North Zone </option>
                        <option value="">South Zone </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-full ">
                <h1 className="text-gray-500 font-semibold border-b-2 pb-2 w-full mt-10 ">
                  4. Journal Preference
                </h1>

                <div className="w-full flex flex-wrap gap-5 py-14">
                  <div className="flex flex-col w-full ">
                    <label htmlFor="" className="focus:outline-none">
                      IJP Subscription <span className=" text-red-500">*</span>
                    </label>
                    <div className=" text-sm">
                      <select
                        name=""
                        id=""
                        className="focus:outline-none w-full "
                      >
                        <option value="">Central Zone </option>
                        <option value="">East Zone </option>
                        <option value="">West Zone </option>
                        <option value="">North Zone </option>
                        <option value="">South Zone </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-full ">
                <h1 className="text-gray-500 font-semibold border-b-2 pb-2 w-full mt-10 ">
                  5. Verification and Declaration
                </h1>

                <div className="w-full flex flex-wrap gap-5 py-14">
                  <input type="text" className="flex flex-col w-full w-[48%]" placeholder="ID Number *" />
                  <input type="file" className="flex flex-col w-full w-[48%]" />
                  <input type="file" className="flex flex-col w-full w-[48%]" />
                </div>
                <div className=" flex gap-2 mt-14">
                  <input type="checkbox"  className=" flex mt-2"/>
                  <h1 className=" text-sm">
                    I hereby declare the above information to be true and that I
                    have not withheld any information whatsoever regarding this
                    application. I also agree to abide by the memorandum of the
                    association and rules & regulations including bylaws of the
                    Indian Psychiatric Society.
                  </h1>
                </div>
              </div>
            </div>
            <div className=" w-full mt-14 flex  justify-center items-center  ">
                <button className=" bg-blue-500 h-[50px] text-white p-5 rounded-md flex justify-center items-center">Submit Form</button>
            </div>

            <div className=" w-full flex  justify-center items-center mt-24">
                <Link to="/" className=" text-blue-500">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateDetails;
