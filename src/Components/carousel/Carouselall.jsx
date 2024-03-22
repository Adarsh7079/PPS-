import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./index.css";

const data = [
  {
    nam: "",
    img: "",
  },
];

const Carouselall = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        <div className=" mt-7 px-5 ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className="  text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7 px-5 ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7 px-5 ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7 px-5 ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7 ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7 ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7  ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
        <div className=" mt-7  ">
          <div className=" border-2 w-full border-gray-200 rounded-md ">
            <div className="relative rounded-md ">
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2021/03/Constitution-background-400x284.webp"
                alt=""
                className=" w-full h-[130px] "
              />
              <h1 className=" absolute top-8  text-gray-100 w-[400px]  p-2  text-lg">
                IPS Announcement: Mandu declaration on environment and mental
                health
              </h1>
            </div>
            <div className=" text-sm text-blue-400 px-5 mt-3">
              <a className=" ">By IPS Secretariat |</a>
              <a> By IPS Secretariat</a>
            </div>
            <div className=" px-5 text-sm text-gray-600 leading-[22px] max-w-[400px] py-2">
              The Mandu Declaration is a statement of intent of Indian
              Psychiatric Society to highlight the role of environment in mental
              health in all platforms and clinical care. The Mandu Declaration
              ...
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carouselall;
