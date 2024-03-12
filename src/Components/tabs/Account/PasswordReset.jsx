import React from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/login-mountains-blurred.jpg')] w-screen h-screen bg-cover bg-center">
        <div className="py-16 md:py-32">
          <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className="brightness-75 hover:brightness-100 transition duration-500 bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/Contact-yosemite.jpg')] md:w-[400px] h-full w-full p-8 bg-cover">
              <div className="flex flex-col justify-center items-center py-12 hover:text-gray-600 text-gray-100">
                <img
                  src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/IPS-Logo-Simple-256.png"
                  alt=""
                  className="bg-left hover:bg-right md:w-[100px] md:h-[100px] h-[50px] w-[50px"
                />
                <h1 className="text-lg md:text-3xl text-center md:w-[200px] justify-center text-gray-200 mt-5">
                  Indian Psychiatric Society
                </h1>
              </div>
            </div>
            <div className="w-full md:w-[700px]">
              <form action="" className="bg-white flex flex-col gap-7 p-5 px-8 md:px-32">
                <h1 className="text-xl md:text-2xl text-center text-gray-500">Reset account password</h1>
                <h1 className="text-center text-gray-400">
                  To reset your password, please enter your email address or username below.
                </h1>
                <div>
                  <input type="email" placeholder="Email" className="w-full h-[35px] bg-[#F8F8F9]" />
                </div>
                <div className="bg-[#ebebef] w-[300px] h-[70px] p-5">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="w-6 h-6" />
                    <label>I'm not a robot</label>
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <button className="border-none h-[45px] rounded-md bg-[#5775eb] px-7 w-[200px] text-white">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/" className="text-gray-200">⇐ Back to Indian Psychiatric Society.</Link>
        </div>
      </section>
    </div>
  );
};

export default PasswordReset;
