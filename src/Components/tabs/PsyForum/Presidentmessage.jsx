import React from "react";

const Presidentmessage = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/8-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/05/file.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">President Message</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className=" w-2/3 mx-auto py-14">
        <div className=" flex flex-wrap gap-20">
          <div className="md:w-[800px] w-full flex flex-col gap-3 leading-[25px] text-sm">
            <h1 className=" text-gray-500">
              Psychiatry Teachers Forum is a new beginning in the Platinum
              Jubilee Year of the Indian Psychiatric Society. I am happy that
              what I stated in my Presidential Acceptance Speech has become a
              reality. I express my gratitude to the honourable fellows
              nominated in the subcommittee “Psychiatry Teachers Forum” for
              translating the dream into reality. I am thankful to UG and PG
              Subcommittee also for extending support for this noble cause.
            </h1>
            <h1 className=" text-gray-500">
              In the field of education nothing is ideal. It’s basically a
              process of keeping pace with advancements in knowledge and staying
              tuned with the needs of the time. Medical education is no
              exception, and it holds truer for Psychiatry because of fast pace
              of growth in neurobiological understandings and technology
              assisted newer therapeutic approaches. Psychiatry Teachers Forum
              has been conceptualised as a group activity to grow through mutual
              interaction. Another reason for its formation is unequal
              distribution of resources in medical colleges. All departments of
              psychiatry in the country are not the same. Discrepancy is not
              only at the level of material resources, but there is also
              shortage of teachers. Problem is magnified due to heavy clinical
              workload, and it takes a toll of teaching and research work.
              Psychiatry Teachers Forum can act as a teaching resource pool and
              motivate students to be part of collaborative research activities.
            </h1>
            <h1 className=" text-gray-500">
              Apart from teaching and research, this forum can be of great hep
              in transferring IPS messages to young and budding psychiatrists
              for their enhanced and rewarding involvement in IPS activities.
              The forum can help in increasing institutional subscriptions of
              Indian Journal of Psychiatry and popularising IPS publications.
            </h1>
            <h1 className=" text-gray-500">
              With these few words I request all teachers to join this forum by
              updating their departmental contact details to the database and
              act as a leader to homogenise and raise the standards of
              psychiatry education in India.
            </h1>
            <div className=" text-gray-500 font-semibold">
              <h1>Dr Vinay Kumar</h1>
              <h1>President: Indian Psychiatric Society</h1>
              <h1>Board Member (South Asia): World Psychiatric Association</h1>
            </div>
          </div>
          <div className=" flex flex-col  gap-7">
            <div>
              <button className=" bg-[#56aacf] py-2 h-[50px] w-[350px] rounded-md text-gray-100">
                Registration Form
              </button>
            </div>
            <div>
              <button className=" bg-[#00638e] py-2 h-[50px] w-[350px] rounded-md text-gray-100">
                Blogs
              </button>
            </div>
            <div>
              <button className=" bg-[#289656] py-2 h-[50px] w-[350px] rounded-md text-gray-100">
                Resource Material
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presidentmessage;
