import React from "react";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-wrap text-sm text-gray-600 justify-center py-7 bg-[#f7f7f8]">
        <div className="w-full sm:w-auto border-e-2 border-gray-400 px-5 py-2 sm:py-0">
          OFFICE BEARERS
        </div>
        <div className="w-full sm:w-auto border-e-2 border-gray-400 px-5 py-2 sm:py-0">
          COUNCIL MEMBERS
        </div>
        <div className="w-full sm:w-auto border-e-2 border-gray-400 px-5 py-2 sm:py-0">
          ZONAL REPRESENTATIVES
        </div>
        <div className="w-full sm:w-auto border-e-2 border-gray-400 px-5 py-2 sm:py-0">
          SUB-COMMITTEES
        </div>
        <div className="w-full sm:w-auto border-e-2 border-gray-400 px-5 py-2 sm:py-0">
          TASK FORCES
        </div>
        <div className="w-full sm:w-auto border-e-2 border-gray-400 px-5 py-2 sm:py-0">
          SPECIALTY SECTIONS
        </div>
      </div>
      <div className="bg-[#ededef] flex flex-col sm:flex-row justify-between">
        <div className="flex justify-center items-center my-5 sm:my-20 mx-10">
          <img src="./h.png" alt="" className="w-[120px] h-[120px]" />
        </div>
        <div className="w-full sm:w-[300px] text-justify flex flex-col gap-5 text-gray-500 mx-5 sm:mx-10 py-10">
          <h1>ABOUT IPS</h1>
          <h1 className="text-sm leading-[25px]">
            The IPS is the oldest & largest organization of mental health
            professionals in India. Founded in 1947, the IPS endeavors to
            advance the field of mental health in India.
          </h1>
          <div className="flex gap-3">
            <div className="bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white hover:bg-blue-500">
              {" "}
              <SlSocialFacebook />
            </div>
            <div className="bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white hover:bg-blue-500">
              <SlSocialTwitter />
            </div>
            <div className="bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white hover:bg-blue-500">
              {" "}
              <TiSocialYoutube />
            </div>
            <div className="bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white hover:bg-blue-500">
              {" "}
              <SlSocialInstagram />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row py-5 sm:py-20 mx-5 sm:mx-20 gap-5 sm:gap-48 text-gray-500">
          <div>
            <h1>MEMBERSHIP</h1>
            <div className="flex flex-col gap-5 mt-3">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/WCP-logo5-600x244.png"
                alt=""
                className="w-[150px] h-[50px]"
              />
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/WMFH-600x244.png"
                alt=""
                className="w-[150px] h-[50px]"
              />
            </div>
          </div>
          <div>
            <h1>QUICK LINKS</h1>
            <ul className="mt-3 text-sm flex flex-col gap-2">
              <li>Contact IPS</li>
              <li>Constitution</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h1>HEADQUARTERS</h1>
            <h1 className="mt-3">Patna</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
