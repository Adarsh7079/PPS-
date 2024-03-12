import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const frequentlyAskQuestions = [
  {
    title: "MOU - British Indian Psychiatric Association",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "MOU - Indo American Psychiatric Association ",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "MOU - Indo Canadian Psychiatric Association",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
];

const Memorandum = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/9-background.jpg')]  w-full h-[300px] bg-cover">
        <div className="flex flex-col justify-center items-center gap-5  t ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/09/handshake.svg"
            alt=""
            className="w-[70px] h-[70px] mt-20"
          />
          <h1 className="text-gray-700 text-2xl ">
            MEMORANDUM OF UNDERSTANDING
          </h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-20 flex justify-center">
          <div className="w-full lg:w-2/3 h-max flex flex-col gap-10 overflow-hidden">
            <h1 className="font-sm text-gray-500 mx-10">
              The following are the memorandum of understanding for
              collaboration between the IPS and various other Mental Health
              Organisations
            </h1>
            {frequentlyAskQuestions.map((item, i) => (
              <div key={i} className="border-2 ">
                <div
                  className={`px-5 py-4 flex items-center justify-between ${
                    activeId === i ? "bg-white" : "bg-gray-100"
                  }`}
                  onClick={() => togglerFunction(i)}
                >
                  <p className="flex-1">{item.title}</p>
                  <span>
                    {activeId === i ? (
                      <IoIosArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </div>
                {activeId === i && (
                  <div className="px-5 py-4 flex items-center justify-between">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
   
    </div>
  );
};

export default Memorandum;
