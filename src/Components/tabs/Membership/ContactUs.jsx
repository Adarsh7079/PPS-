import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/Contact.jpg')] w-full h-[350px] bg-cover">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/email.svg"
            alt=""
            className="w-[70px] h-[70px] mt-20"
          />
          <h1 className="text-gray-700 text-3xl">Contact Us</h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-2/3 flex mx-auto py-20">
        <div className="flex flex-wrap gap-20">
          <div className="w-full md:w-[400px] cursor-pointer flex gap-10 flex-wrap pb-10">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/files-and-folders3.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-gray-800">Secretariat</h1>
              <h1 className="text-sm text-gray-600 mt-1">
                ipssecretaryoffice@gmail.com
              </h1>
              <h1 className="text-sm text-gray-600">
                secretariat@indianpsychiatricsociety.org
              </h1>
            </div>
          </div>
          <a
            href="mailto:feedback@geeksforgeeks.org"
            className="w-full md:w-[400px] cursor-pointer flex gap-10"
          >
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/telephone-call.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-gray-800">Headquarters</h1>
              <h1 className="text-sm text-gray-600 mt-1">0124-4006150</h1>
              <h1 className="text-sm text-gray-600">0124-4006750</h1>
            </div>
          </a>
          <div className="w-full md:w-[400px] cursor-pointer flex gap-10">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/files-and-folders2.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <a
              href="mailto:feedback@geeksforgeeks.org"
              className="flex flex-col gap-1"
            >
              <h1 className="text-2xl text-gray-800">Treasurer</h1>
              <h1 className="text-sm text-gray-600 mt-1">
                pstreasurer2022@gmail.com
              </h1>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full flex mx-auto">
        <div className="flex justify-between gap-10 border-[1px] w-full">
          <div className="w-full md:w-[600px]">asdasdasdasd</div>
          <div className="w-full flex justify-end p-14">
            <div className="w-[500px] h-[300px] text-gray-500 border-[1px] flex flex-col justify-center gap-5">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/compass.svg"
                alt=""
                className="w-[70px] h-[70px] mx-auto"
              />
              <h1 className="text-2xl text-gray-800 text-center">
                Head Quarters
              </h1>
              <h1 className="w-[400px] mx-auto text-center">
                Indian Psychiatric Society Plot 43, Sector 55 Gurugram,
                Haryana, India, Pin: 122003
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="  bg-[#F8F8F9] mt-20 py-14">
        <div className="w-2/3 flex flex-wrap mx-auto gap-20">
          <div className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/Contact-yosemite.jpg')] md:w-[700px] w-full bg-cover">
            <div className="flex py-32">
              <div className=" bg-opacity-25 backdrop-filter backdrop-blur-md md:w-[500px]  flex flex-col mx-auto py-20 gap-10">
                <img
                  src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/checklist.svg"
                  alt=""
                  className="w-[60px] h-[60px] mx-auto"
                />
                <div className="flex flex-col gap-3">
                  <h1 className=" flex mx-auto text-2xl justify-center">Write to Us</h1>
                  <h1 className="text-sm leading-[25px] px-20 text-gray-700 text-center">
                    We are happy to listen and help. Get in touch with us if
                    you have any queries and we will get back to you as soon as
                    possible.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="md:w-[700px]w-full  py-20  flex flex-col gap-7">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[35px] bg-[#F8F8F9]"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[35px] bg-[#F8F8F9]"
              />
              <input
                type="text"
                placeholder="Mobile"
                className="w-full h-[35px] bg-[#F8F8F9]"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                className="w-full h-[100px]"
              />
              <button className="h-[50px] rounded-md bg-[#65cbe4] px-7 text-gray-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-20">
        <div className="flex flex-wrap justify-between">
          <div className="flex gap-5 w-full md:w-[500px]">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/computer.svg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg">Designed 100% In-House</h1>
              <h1 className="text-gray-500 text-sm">
                This website has been conceptualised, designed, developed and
                coded exclusively by the members of the IPS website committee.
              </h1>
            </div>
          </div>
          <div className="flex gap-5 w-full md:w-[500px]">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/united.svg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg">Designed 100% In-House</h1>
              <div>
                <h1 className="text-gray-400 text-sm">
                  <span className="text-gray-800">Advisor –</span> Dr Vinay
                  Kumar
                </h1>
                <h1 className="text-gray-400 text-sm">
                  <span className="text-gray-800">UI Design & Coding –</span>{" "}
                  Dr Koushik S Deb
                </h1>
                <h1 className="text-gray-400 text-sm">
                  <span className="text-gray-800">Content Editor –</span> Mr
                  Partha Ghose, Dr Ragul Ganesh
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full md:w-[500px]">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/maintenance.svg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg">Designed 100% In-House</h1>
              <h1 className="text-gray-500 text-sm">
                <span className="text-gray-800">PerfectPixel.in -</span> An
                energetic web-design start-up from Jodhpur, specializing in data
                & content management
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
