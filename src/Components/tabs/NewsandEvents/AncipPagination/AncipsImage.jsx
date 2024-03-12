// import React, { useState } from "react";
// import PaginationButtons from "./PaginationButtons";

// const data = [
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
//   {
//     img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
//     tagline: "IPS Election 2024 – Final List of Contestants & Notice",
//     ips: "By IPS Secretariat ",
//     date: " 27/10/2023",
//     data: "The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...",
//   },
// ];

// const ImagePagination = () => {
//   const itemsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(0);

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = data.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   return (
//     <div className="container mx-auto mt-12">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
//         Committee Members
//       </h2>
//       <div className="overflow-x-auto flex gap-2 ">
//         {
//             data.map((data)=>(
//                 <div className=" w-[280px] border-[1px] border-gray-300">
//           <img
//             src="https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg"
//             alt=""
//             className=" w-full h-[130px]"
//           />
//           <div>
//             <div className=" flex text-[12px] text-gray-500 px-3 py-5">
//               <div>By IPS Secretariat |</div>
//               <div> 27/10/2023</div>
//             </div>
//             <div className=" text-gray-500 px-3">
//               <h1 className=" text-sm">
//                 The final list of contestants for various posts of the Indian
//                 Psychiatric Society are hereby notified. Kindly download the
//                 official pdf for the complete details. Canvassing by Mobile /
//                 ...
//               </h1>
//             </div>
//           </div>
//         </div>
//             ))
//         }
//       </div>

//       <PaginationButtons
//         setCurrentPage={setCurrentPage}
//         currentPage={currentPage}
//         totalPages={totalPages}
//       />
//     </div>
//   );
// };

// export default ImagePagination;

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
];

const Ancipsimage = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container mx-auto mt-12">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right  ">
          <tbody className=" flex flex-wrap gap-5">
            {currentData.map((item, index) => (
              <div className=" w-[280px] border-[1px] border-gray-300">
               <div className=" relative">
               <img
                  src={item.img}
                  alt=""
                  className=" w-full h-[130px]"
                />
                <h1 className=" absolute top-10 px-5 text-white">{item.tagline}</h1>
               </div>
                <div className="">
                  <div className=" flex text-[12px] text-gray-500 px-3 py-5">
                    <div className="  px-2">{item.ips} </div>
                    <div className=" px-2"> {item.date}</div>
                  </div>
                  <div className=" text-gray-500 px-3 pb-3">
                    <h1 className=" text-sm">
                     {item.data}
                    </h1>
                  </div>
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

export default Ancipsimage;
