import React from "react";

const NewMember = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/8-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5  t ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/051-image-2.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">New Membership</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* section online memeber activity  */}
      {/* <section className=" bg-[#005139] ">
        <div className="w-2/4  flex mx-auto py-10   text-gray-200">
          <div className=" flex gap-20 flex-wrap ">
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/06/tick.svg"
              alt=""
              className=" w-[100px] h-[100px] flex items-center justify-center"
            />
            <div>
              <div className=" w-full">
                <h1 className=" text-2xl">Online Membership Active! </h1>
                <h1 className=" text-[12px] leading-[27px] mt-2">
                  We have successfully updated the form and online portal for
                  2022. Kindly download the new form only from the official IPS
                  website. Regional websites often have an older version of the
                  form. For membership queries kindly mail at
                  ipstreasurer2022@gmail.com or ipssecretaryoffice@gmail.com
                </h1>
              </div>
              <div className=" flex gap-20 mt-7">
                <div>
                  <button className=" text-white bg-[#0693e3] h-[40px] px-7 rounded-md">
                    Download Form
                  </button>
                </div>
                <div> 
                  <button className=" text-white bg-[#b3db3d] h-[40px] px-7 rounded-md">
                    Online Portal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-[#005139]">
        <div className=" w-2/3 flex mx-auto flex-wrap gap-32 py-14">
          <div>
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/06/tick.svg"
              alt=""
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className=" w-[1000px] flex flex-col gap-5">
            <div className=" leading-[25px] text-white flex flex-col gap-3">
              <h1 className=" text-2xl">Online Membership Active! </h1>
              <h1 className=" text-sm leading-[25px]">
                We have successfully updated the form and online portal for
                2022. Kindly download the new form only from the official IPS
                website. Regional websites often have an older version of the
                form. For membership queries kindly mail at
                ipstreasurer2022@gmail.com or ipssecretaryoffice@gmail.com
              </h1>
            </div>
            <div className=" flex gap-10">
              <button className="bg-[#4EB2C4] px-7 h-[40px] rounded-md text-gray-100">
                Download Form{" "}
              </button>
              <button className=" bg-[#B7c33cff]  px-7 h-[40px] rounded-md text-gray-100">
                Online Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-2/3 flex flex-col mx-auto py-20">
        <div>
          <div className=" ">
            <h1 className=" flex text-center items-center justify-center text-xl text-gray-800">
              IPS Membership Categories & Criteria
            </h1>
            <div className=" border-[1px] mt-5">
              <div className=" flex bg-[#3ad5bc] px-5 py-2 h-[40px] text-white ">
                <div className=" w-[200px] text-gary-100">Categories</div>
                <div className=" flex justify-start">Criteria</div>
              </div>
              <div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]">
                  <div className=" w-[300px] p-5 leading-[25px]">
                    Life Ordinary Member (LOM)
                  </div>
                  <div className=" mx-20 py-2 leading-[25px]">
                    Registered Medical practitioners under Schedule I or II or
                    part II of Schedule III of Indian Medical Council Act
                    (1956), or who have any other recognized medical
                    qualification which is considered equivalent to the above by
                    the Council of the Indian Psychiatric Society, who are
                    actively engaged in the pursuit of the aims and objects of
                    the Society shall be eligible for Life Ordinary Membership.
                  </div>
                </div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]">
                  <div className=" w-[300px] p-5 leading-[25px]">
                    Life Ordinary Member (LOM)
                  </div>
                  <div className=" mx-20 py-2 leading-[25px]">
                    Registered Medical practitioners under Schedule I or II or
                    part II of Schedule III of Indian Medical Council Act
                    (1956), or who have any other recognized medical
                    qualification which is considered equivalent to the above by
                    the Council of the Indian Psychiatric Society, who are
                    actively engaged in the pursuit of the aims and objects of
                    the Society shall be eligible for Life Ordinary Membership.
                  </div>
                </div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]">
                  <div className=" w-[300px] p-5 leading-[25px]">
                    Life Ordinary Member (LOM)
                  </div>
                  <div className=" mx-20 py-2 leading-[25px]">
                    Registered Medical practitioners under Schedule I or II or
                    part II of Schedule III of Indian Medical Council Act
                    (1956), or who have any other recognized medical
                    qualification which is considered equivalent to the above by
                    the Council of the Indian Psychiatric Society, who are
                    actively engaged in the pursuit of the aims and objects of
                    the Society shall be eligible for Life Ordinary Membership.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="w-2/3 flex flex-col mx-auto py-20">
        <div>
          <div className=" ">
            <h1 className=" flex text-center items-center justify-center text-xl text-gray-800">
              IPS Membership Categories & Criteria
            </h1>
            <div className=" border-[1px] mt-5">
              <div className=" flex bg-[#3ad5bc] px-5 py-2 h-[40px] text-white justify-evenly ">
                <div className=" w-[200px] text-gary-100">Categories</div>
                <div className=" flex justify-start">Criteria</div>
              </div>
              <div>
                <div className=" flex text-sm text-gray-600 border-b-[1px] justify-evenly">
                  <div className=" w-[300px] px-5 leading-[25px]">
                    Life Ordinary Member (LOM)
                  </div>
                  <div className=" mx-20 py-1 leading-[25px]">INR 11,000/-</div>
                </div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]  justify-evenly">
                  <div className=" w-[300px] px-5 leading-[25px]">
                    Life Associate Member (LAM)
                  </div>
                  <div className=" mx-20 py-1 leading-[25px]">INR 11,000/-</div>
                </div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]  justify-evenly">
                  <div className=" w-[300px] px-5 leading-[25px]">
                    Life Fellow (LF)
                  </div>
                  <div className=" mx-20 py-1 leading-[25px]">INR 17,000/-</div>
                </div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]  justify-evenly">
                  <div className=" w-[300px] px-5 leading-[25px]">
                    LOM to LF
                  </div>
                  <div className=" mx-20 py-1 leading-[25px]">INR 6,000/-</div>
                </div>
                <div className=" flex text-sm text-gray-600 border-b-[1px]  justify-evenly">
                  <div className=" w-[300px] px-5 leading-[25px]">
                    Corporate Member (Annual – January to December)
                  </div>
                  <div className=" mx-20 py-1 leading-[25px]">INR 51,000/-</div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className=" bg-[#F8F8F9] ">
        <div className="w-2/3 flex flex-col mx-auto py-10">
          <h1 className=" text-2xl text-gray-600 flex  mx-auto">
            Transaction Details
          </h1>
          <div className=" mt-10 flex flex-wrap gap-10">
            <div className=" flex flex-col w-[380px] hover:shadow-xl bg-white text-sm border-[1px] p-5 text-gray-400 rounded-md leading-[25px]">
              <h1 className=" text-xl">Bank Details</h1>
              <h1 className=" mt-2">Name: INDIAN PSYCHIATRIC SOCIETY</h1>
              <h1>Bank: INDIAN BANK</h1>
              <h1>Branch: SECTOR 55 GURGAON (2254) SCO NO 97, HUDA MARKET</h1>
              <h1>Account Number: 6558880269</h1>
              <h1>IFSC Code: IDIB000S209</h1>
            </div>
            <div className=" flex flex-col w-[380px] hover:shadow-xl bg-white text-sm border-[1px] p-5 text-gray-400 rounded-md">
              <h1 className=" text-xl leading-[25px]">Mode of Transfer</h1>
              <h1 className="leading-[25px] mt-2">
                Demand Draft / Cheque / NEFT/Online In favor of “INDIAN
                PSYCHIATRIC SOCIETY”, payable at GURGAON. Note: Please write
                your Name & Mobile Number on the reverse of the Cheque/DD
              </h1>
            </div>
            <div className=" flex flex-col w-[380px] hover:shadow-xl bg-white text-sm border-[1px] p-5 text-gray-400 rounded-md leading-[25px]">
              <h1 className=" text-xl">Postal Address</h1>
              <h1 className=" mt-2">
                Dr M. Aleem Siddiqui <br />
                Hon. Treasurer, IPS
              </h1>
              <h1>C-827, Indira Nagar, (Near H.A.L. Main gate), </h1>
              <h1>Lucknow-226016, U.P., India.</h1>
              <h1>Mobile: +91 7607358897</h1>
              <h1>Email: ipstreasurer2022@gmail.com</h1>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-2/3 flex mx-auto py-20">
        <div className=" flex flex-col   w-full ">
          <h1 className="  text-2xl text-gray-600 flex  mx-auto">
            Enclosures & Uploads
          </h1>
          <div className=" text-gray-400 leading-[25px] text-sm">
            <h1>
              1.Please attach TWO recent passport sized photos with white
              background, or upload a copy online.
            </h1>
            <h1>
              2.Attested Photo copy of MBBS Degree and MCI Registration
              Certificate.
            </h1>
            <h1>3.Attested Photo copy of Post Graduate Psychiatric.</h1>
            <h1>4.Qualification Degree and Reg. Certificate.</h1>
            <h1>Attested Photo copy of Birth Date Certificate.</h1>
            <h1>
              If there is change in the name, then kindly attach attested photo
              copy of Gazette Certificate / Affidavit.
            </h1>
            <h1 className="mt-3">
              Compulsory Send or Upload: NEFT / RTGS / Online Transfer / Cheque/
              DD / Payment Proof along with copy of Membership Application Form
              & Documents.
            </h1>
            <h1 className=" mt-3">
              Note: Attestation must be by either Gazette Officer or Proposer or
              Seconder.
            </h1>{" "}
          </div>
        </div>
      </section>

      <section className=" w-2/3 flex mx-auto py-20">
        <div className=" flex flex-col   w-full ">
          <h1 className="  text-2xl text-gray-600 flex  mx-auto">
            Online Membership Application
          </h1>
          <div className=" text-gray-400 leading-[25px] text-sm mt-3">
            <h1>
              If the IPS application form is complete and have been proposed and
              seconded by IPS fellows, and if all the attachments are in order,
              kindly proceed to the online application submission.
            </h1>
            <h1 className=" mt-3">Note:</h1>
            <h1>
              1.The application portal is accessible only after logging-in.
              Kindly register online to the website and login to proceed
            </h1>
            <h1>
              2.Attested Photo copy of MBBS Degree and MCI Registration
              Certificate.
            </h1>
            <h1>3.Attested Photo copy of Post Graduate Psychiatric</h1>
            <h1>
              4.Soft-copy pdfs of the documets described in the previous section
              and passport size photographs will also need to be uploaded.
              Kindly keep them read
            </h1>
          </div>
        </div>
      </section>
      <section className=" bg-[#034a68]">
        <div className=" w-2/3 flex flex-wrap mx-auto py-10 justify-between">
          <div>
            <img
              src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/security-gate.svg"
              alt=""
              className=" w-[200px] h-[200px]"
            />
          </div>
          <div className="flex flex-col max-w-[600px] text-gray-200">
            <h1 className=" text-2xl">Proceed to <span className=" font-bold">Online Portal.</span></h1>
            <h1 className=" text-sm leading-[25px] mt-2">
              If everything is on order, kindly proceed. If you are new to this
              site, kindly create an online account first. If you have an
              account, kindly login before proceeding.
            </h1>
            <button className="bg-[#B7c33cff] w-[200px] px-7 h-[40px] rounded-md mt-5">Online Portal</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewMember;
