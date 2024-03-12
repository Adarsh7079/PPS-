import React from "react";
import { LuSearch } from "react-icons/lu";
import BlogTab from "./TabBlog/BlogTab";

const Blogs = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/Contact.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/textbook.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Blogs</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className=" w-2/3 flex mx-auto py-14">
        <div className="flex items-center mx-auto ">
          <input
            type="search"
            placeholder="search"
            className=" h-[40px] w-full roudns-lg"
          />
          <div className="bg-[#a1c731] h-[40px] flex justify-center items-center w-[50px]">
            <LuSearch className=" text-2xl text-white " />
          </div>
        </div>

        <div>
            filter tab
        </div>
        
      </section>
      <section className=" flex mx-auto">
        <BlogTab/>
      </section>
    </div>
  );
};

export default Blogs;
