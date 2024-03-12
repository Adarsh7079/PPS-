
import React, { useState } from "react";
import PaginationButtons from "./PaginationButtons";

const data = [
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  ,  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
];

const BooksPagination = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container mx-auto mt-12">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right  ">
          <tbody className=" flex flex-wrap gap-7">
            {currentData.map((item, index) => (
              <div className=" w-[290px] border-e-2 border-b-2  rounded-lg h-[390px]">
              <div className=" bg-[#0693e3] w-[280px] ">
                <h1 className=" text-xl  text-center py-5 ">Management of Sexual Disorders in Elderly</h1>
              </div>
              <div>
                <img
                  src="https://indianpsychiatricsociety.org/wp-content/uploads/2022/04/IPSCPG-Cover3-400x250.jpg"
                  alt=""
                  className="w-[280px] h-[150px]"
                />
              </div>
              <div className="w-[280px] flex flex-col gap-3 bg-[#0693e3] py-5 px-2 ">
                <h1 className=" text-sm ">
                  Authors: T. S. Sathyanarayana Rao, Abhinav Tandon, Shivanand
                  Manohar, Supriya Mathur
                </h1>
                <h1>Date: February-2018</h1>
              </div>
            </div>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationButtons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default BooksPagination;
