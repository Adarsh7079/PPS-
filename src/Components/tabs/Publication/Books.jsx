import React from "react";
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
const Books = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/8-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5  t ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/healthcare-and-medical.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Books</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className=" w-2/3 flex mx-auto py-14">
        <div className=" flex flex-wrap gap-20 justify-center">
          {
            data.map((item)=>(
                <div className=" w-[250px] flex flex-col gap-5 mb-10">
                <div className=" border-[1px]">
                    <img src="https://indianpsychiatricsociety.org/wp-content/uploads/2023/12/b09szl5fss.01.s001.jumboxxx_mvodfh7jxbrgsx.jpg" alt="" 
                    className="w-[250px] h-[350px]"/>
                </div>
                <div>
                    <h1 className=" text-sm text-center leading-[27px]">(OLD)A PRIMER OF RESEARCH, PUBLICATION AND PRESENTATION </h1>
                    <h1 className=" text-sm text-center leading-[27px] text-orange-500">AUTHOR : SANDEEP GROVER</h1>
                    <h1 className=" uppercase text-sm text-center leading-[27px] text-orange-500">Status: Published</h1>
                </div>
                <div className=" flex mx-auto"><button className=" bg-[#00638e] text-white px-3 h-[30px]">BUY NOW</button></div>
             </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Books;
