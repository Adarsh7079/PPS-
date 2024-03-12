import React from "react";
import { Link } from "react-router-dom";

const SocialScheme = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/2b-background.jpg')] w-full h-[350px] bg-cover">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/shield.svg"
            alt=""
            className="w-[70px] h-[70px] mt-20"
          />
          <h1 className="text-gray-700 text-3xl">Social Security Scheme</h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="bg-[#f8f8f8]">
        <div className="w-full md:w-2/3 flex mx-auto py-10 gap-10 md:flex-wrap">
          <div className="flex flex-wrap w-full md:w-auto gap-10">
            <div className="flex flex-col gap-5">
              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">The Scheme:</h1>
                <h1 className=" text-[15px] text-gray-500 leading-[25px] mt-3">
                  The scheme shall provide financial assistance to the nominee
                  of a member of this scheme in the event of his death or to a
                  member of the scheme who is unable to earn livelihood, on his
                  request. as per the criteria mentioned in the constitution.
                </h1>
              </div>

              <div className=" border-[1px] w-[600px] p-5 bg-[#d9e297] hover:shadow-lg rounded-md">
                <h1 className=" text-xl">The Application Form:</h1>
                <h1 className=" text-[15px] text-gray-500 leading-[25px] mt-3">
                  The{" "}
                  <Link className=" text-gray-800 font-bold">
                    {" "}
                    application form
                  </Link>{" "}
                  is available as a pdf download{" "}
                  <Link className=" text-gray-800 font-bold"> here.</Link>
                </h1>
              </div>
              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Elegibility:</h1>
                <h1 className=" text-[15px] text-gray-500 leading-[25px] mt-3">
                  Any Life Fellow/ Life Ordinary Member of IPS, up to the age of
                  60 years & resident in India, is eligible to become a member
                  of this sche
                </h1>
              </div>
              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Admission Subscription:</h1>
                <h1 className=" text-sm text-gray-400 leading-[25px] mt-3">
                  Any Life Fellow/ Life Ordinary Member of IPS willing to become
                  a member of this scheme shall be admitted on payment of one
                  time admission subscription as per scale below.
                </h1>
                <div className=" text-gray-400 text-sm leading-[25px] mt-3">
                  <h1>Below the age of 30 years – Rs. 1000/-</h1>
                  <h1>
                    Below the age of 35 years but above 30 years – Rs 2000/-
                  </h1>
                  <h1>
                    Below the age of 40 years but above 35 years – Rs. 3000/-
                  </h1>
                  <h1>
                    Below the age of 45 years but above 40 years – Rs. 4000/-
                  </h1>
                  <h1>
                    Below the age of 50 years but above 45 years – Rs. 5000/-
                  </h1>
                  <h1>
                    Below the age of 55 years but above 50 years – Rs. 6000/-
                  </h1>
                  <h1>
                    Below the age of 60 years but above 55 years – Rs.7000/-
                  </h1>
                </div>
              </div>

              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Annual Membership:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  Every member of the scheme shall pay{" "}
                  <span className=" text-gray-600">Rs. 200/-</span> as annual
                  membership subscription.
                </h1>
              </div>

              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">ADFC:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  Every member shall pay initially Rs. 2.000/- as Advance Death
                  Fraternity Contribution (ADFC) along with lhe admission
                  subscnption & membership subscription, which will be adjusted
                  Rs. 500/- per death of a member durmg the year and/or any
                  member unable to earn livelihood.{" "}
                </h1>
              </div>
              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Refund:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  If any member voluntarily retires as a member, he shall get
                  refund of his admission subscription as under, in addition to
                  remaining amount of Advance DFC in his account.
                </h1>
                <div className=" text-sm text-gray-400 leading-[25px]">
                  <h1>1.If he retires within 03 yrs – 50%</h1>
                  <h1>2.If he retires after 04 yrs – 100%</h1>
                  <h1>No interest is payable on any account to the member.</h1>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Address for Communication:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  The scheme application form and all enclosures are to be
                  submitted to –
                </h1>
                <div className=" text-sm text-gray-400 leading-[25px] mt-3">
                  <h1 className=" text-gray-600">Dr. Mukesh P Jagiwala</h1>
                  <h1>Social Security Scheme IPS</h1>
                  <h1>
                    101, ‘Shriji Nivas’, A to Z Building, Opp. Dhiraj Sons,
                    Mansukhlal Tower Lane, Athwagate, Surat-395 001 (Gujarat)
                  </h1>
                  <h1>Mobile: 98795 21795</h1>
                  <h1>E-mail : mukeshjagiwala@yahoo.co.in.</h1>
                </div>
              </div>

              <div className=" border-[1px] w-[600px] p-5 bg-[#d1dde7] hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Bank Details:</h1>
                <h1 className=" text-[15px] text-gray-600 leading-[25px] mt-3">
                  Cash / Multi City Cheque / Demand Draft / Transfer / NEFT /
                  RTGS (with UTR No.) must be in favour of{" "}
                  <span className="text-gray-800 font-bold">
                    ‘SOCIAL SECURITY SCHEME IPS’
                  </span>
                </h1>
                <div className=" text-sm text-gray-800 leading-[25px] mt-3">
                  <h1>
                    <span className=" text-gray-800 font-bold">Account:</span>
                    SOCIAL SECURITY SCHEME IPS
                  </h1>
                  <h1>
                    <span className=" text-gray-800 font-bold">Bank:</span>
                    Bank of Maharashtra, Athwa Lines Branch, Surat, Gujarat
                  </h1>

                  <h1>
                    <span className=" text-gray-800 font-bold">
                      Account Number:
                    </span>
                    603020911 59
                  </h1>
                  <h1>
                    <span className=" text-gray-800 font-bold">IFS Code:</span>
                    MAHB0000983
                  </h1>
                </div>
              </div>

              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Benefits for Disability:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  On receipt of the information from the nominee and/or
                  responsible person of the family of a member that a member has
                  become permanently physically disable, thereby rendering him
                  unfit to practice the profession or after attaining the age of
                  80 years with minimum membership of 5 years of the scheme
                  shall have an option of voluntary retirement from the scheme.
                  In this event he shall get the refund of his entire admission
                  subscription & also contribution equal to last D.F.C. amount
                  paid and his membership shall stand terminated.
                </h1>
              </div>

              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Assurance in Case of Death:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  On receipt of the information from a nominee about the death
                  of a member, his nominee shall be paid Fraternity Contribution
                  (Rs. 500/- X number of members of the scheme on the date of
                  death). Amount shall be paid within 45 days after receiving
                  the information with following documents. Attested Photocopy
                  of,
                </h1>
                <div className=" text-gray-400 text-sm leading-[25px]">
                  <h1>A. Death Certificate of Member</h1>
                  <h1>
                    B. Original membership certificate of’ Social Security
                    Scheme, IPS’
                  </h1>
                  <h1>C. Receipt of last DFC paid (Optional)</h1>
                </div>
              </div>
              <div className=" border-[1px] w-[600px] p-5 bg-white hover:shadow-lg rounded-md">
                <h1 className=" text-xl">Survival Benefit:</h1>
                <h1 className=" text-[15px] text-gray-400 leading-[25px] mt-3">
                  If a member of the scheme has completed the continuous
                  membership of 25 years or a member unable to earn livelihood
                  or after attaining the age of 80 years or voluntary retirement
                  after completion of 25 years membership and if he wishes to
                  have the survival benefit, will receive balance amount of
                  advance DFC along with an amount equal to last DFC paid. After
                  receiving the survival benefit (on the date of receiving his
                  application by the office), his membership of the scheme will
                  get terminated.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Other sections */}
    </div>
  );
};

export default SocialScheme;
