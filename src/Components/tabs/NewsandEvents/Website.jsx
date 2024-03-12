import React from "react";
import { LuSearch } from "react-icons/lu";

const Website = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/Contact.jpg')]  w-full h-[350px] bg-cover">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/textbook.svg"
            alt=""
            className="w-[70px] h-[70px] mt-20"
          />
          <h1 className="text-gray-700 text-3xl">Website Blog</h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="w-full sm:w-2/3 flex flex-col mx-auto py-20 px-4">
        <div>
          <div>
            <h1 className="text-gray-500 text-sm leading-[25px]">
              Dear IPS Members, <br />
              As the new IPS website grows in features, we at the website
              committee have been receiving multiple queries regarding new
              account creation, previous login credentials, profile verification
              etc. So, in discussion with the Hon. Office Bearers, we decided
              that a page answering questions specifically to the website & its
              problems might be of help to all users. Therefore, this blog page
              was created as a central hub for discussing website features,
              future goals & for reporting problems.
            </h1>
          </div>
          <div className="py-20 flex flex-wrap gap-20">
            <div className="flex w-full sm:w-[350px] gap-10 leading-[27px] border-[1px] border-gray-200 hover:border-blue-200 p-5 transition duration-500 ease-in-out hover:shadow-lg  hover:shadow-blue-200">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/telephone-call.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 text-2xl">FAQs</h1>
                <h1 className="text-gray-500 text-[13px]">
                  Explanatory tutorials and Frequently Asked Questions (FAQs)
                  about IPS website, account and registration.
                </h1>
              </div>
            </div>

            <div className="flex w-full sm:w-[350px] gap-10 leading-[27px] border-[1px] border-green-300 hover:border-green-300 p-5 transition duration-500 ease-in-out hover:shadow-lg  hover:shadow-green-200">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/08/list.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 text-2xl">Roadmap</h1>
                <h1 className="text-gray-500 text-[13px]">
                  Features the committee is working on currently and exciting
                  features that are planned for the future.
                </h1>
              </div>
            </div>
            <div className="flex w-full sm:w-[350px] gap-10 leading-[27px] border-[1px] border-red-200 hover:border-blue-200 p-5 transition duration-500 ease-in-out hover:shadow-lg  hover:shadow-red-200">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/08/conversation.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 text-2xl">Suggestions</h1>
                <h1 className="text-gray-500 text-[13px]">
                  Provide feedback, highlight problems, suggest features that
                  you will want to see, and we will definitely try!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 text-gray-600 text-lg">
        <div className="py-3 ">
          <h1 className="flex mx-auto justify-center">
            Archieve of Past Office Bearers & ANCIPS
          </h1>
        </div>
      </section>

      <section className="w-full sm:w-2/3 flex mx-auto flex-wrap py-20">
        <div className="flex flex-wrap gap-20 border-b-[1px] pb-20">
          <div className="w-full sm:w-[350px] flex flex-col gap-5">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/08/calendar3.svg"
              alt=""
              className="w-[40px] h-[40px] flex mx-auto"
            />
            <div className="">
              <h1 className="text-center text-gray-600">Working on Now</h1>
            </div>
            <div className="text-gray-400 text-sm leading-[25px]">
              <li>
                <span className="text-[#0693e3]">Events Module:</span> Facility
                to post IPS events directly to website.
              </li>
              <li>
                <span className="text-[#0693e3]">Google / Facebook Login:</span>{" "}
                For enhanced security.
              </li>
              <li>
                <span className="text-[#0693e3]">Books & Publications:</span> A
                central database for all IPS publications.
              </li>
            </div>
          </div>
          <div className="w-full sm:w-[350px] flex flex-col gap-5">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/08/calendar.svg"
              alt=""
              className="w-[40px] h-[40px] flex mx-auto"
            />
            <div>
              <h1 className="text-center text-gray-600">Working Next</h1>
            </div>
            <div className="text-gray-400 text-sm leading-[25px]">
              <li>
                <span className="text-[#0693e3]">Reports Module:</span> Events
                report, Zonal reports.
              </li>
              <li>
                <span className="text-[#0693e3]">Online Booking:</span>{" "}
                Headquarters, Facilities, etc.
              </li>
              <li>
                <span className="text-[#0693e3]">Online Payments:</span>{" "}
                Registrations, book purchase.
              </li>
              <li>
                <span className="text-[#0693e3]">Protected Documents:</span>{" "}
                Minutes, AGBM etc
              </li>
            </div>
          </div>
          <div className="w-full sm:w-[350px] flex flex-col gap-5">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/08/long-term.svg"
              alt=""
              className="w-[40px] h-[40px] flex mx-auto"
            />
            <div>
              <h1 className="text-center text-gray-600">Planned for Later</h1>
            </div>
            <div className="text-gray-400 text-sm leading-[25px]">
              <li>
                <span className="text-[#0693e3]">Mobile app: </span>Android and
                iOS app for notifications..
              </li>
              <li>
                <span className="text-[#0693e3]">Events app: </span> Book
                tickets, upload program, do quizzes.
              </li>
              <li>
                <span className="text-[#0693e3]">Forum & Social Networking: </span>{" "}
                A private Facebook.
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full sm:w-2/3 flex mx-auto pb-20">
        <div className="flex flex-wrap gap-20">
          <div className="w-full sm:w-[350px] flex flex-col gap-3 items-center justify-center">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/08/robot.svg"
              alt=""
              className="w-[70px] h-[70px] flex mx-auto"
            />
            <h1 className="text-center text-2xl">Hi!</h1>
            <h1 className="px-10 text-gray-500 text-center text-sm leading-[25px]">
              Have any suggestions? Want new website features? Facing tech
              problems with the IPS website? We are happy to listen and help.
              Write to us and we will get back to you as soon as possible.
            </h1>
          </div>
          <div className="w-full sm:w-[550px] h-[270px] flex flex-col items-center text-gray-600 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-xl flex justify-center">Login</h1>
              <div>
                <h1 className="text-sm text-gray-400">
                  Kindly log in to access the message box.
                </h1>
                <form action="" className="flex flex-col items-center text-sm mt-2">
                  <input
                    type="text"
                    placeholder="Username or email"
                    className="h-[25px] w-[200px] placeholder-text-gray-400 placeholder-text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="h-[25px] w-[200px]  placeholder-text-gray-400 placeholder-text-sm"
                  />
                </form>
                <div className="flex justify-center mt-10">
                  <button className="bg-gray-200 h-[30px] px-2">Access Content</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-20">
        <div className="flex flex-wrap justify-between">
          <div className="flex gap-5 w-full sm:w-[500px] ">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/computer.svg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-3 ">
              <h1 className="text-lg">Designed 100% In-House</h1>
              <h1 className="text-gray-500 text-sm">
                This website has been conceptualised, designed, developed and
                coded exclusively by the members of the IPS website committee.
              </h1>
            </div>
          </div>
          <div className="flex gap-5 w-full sm:w-[500px] ">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/united.svg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-3 ">
              <h1 className="text-lg">Designed 100% In-House</h1>
              <div>
                <h1 className="text-gray-400 text-sm">
                  {" "}
                  <span className="text-gray-800">Advisor –</span> Dr Vinay
                  Kumar
                </h1>
                <h1 className="text-gray-400 text-sm">
                  {" "}
                  <span className="text-gray-800">UI Design & Coding –</span> Dr
                  Koushik S Deb
                </h1>
                <h1 className="text-gray-400 text-sm">
                  {" "}
                  <span className="text-gray-800">Content Editor –</span> Mr
                  Partha Ghose, Dr Ragul Ganesh
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full sm:w-[500px] ">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/09/maintenance.svg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-3 ">
              <h1 className="text-lg">Designed 100% In-House</h1>
              <h1 className="text-gray-500 text-sm">
                <span className="text-gray-800">PerfectPixel.in -</span>
                An energetic web-design start-up from Jodhpur, specializing in
                data & content management
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Website;
