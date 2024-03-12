import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [show, setShow] = useState(null);

  const handleMouseEnter = (index) => {
    setShow(index);
  };

  const handleMouseLeave = () => {
    setShow(null);
  };
  const links = [
    {
      name: "About IPS",
      submenu: true,
      sublinks: [
        {
          Head: "Governance",
          link: "/governance",
        },
        {
          Head: "Organization",
          link: "/organization",
        },
        {
          Head: "Histry",
          link: "/history",
        },
        {
          Head: "constitution",
          link: "/constitution",
        },
        {
          Head: "memorandums",
          link: "/memorandums",
        },
      ],
    },
    {
      name: "News & Events",
      submenu: true,
      sublinks: [
        {
          Head: "Notices",
          link: "/Notices",
        },
        {
          Head: "events",
          link: "/Events",
        },
        {
          Head: "IPS election",
          link: "/Election",
        },
        {
          Head: "ancips",
          link: "/Ancips",
        },
        {
          Head: "website",
          link: "/Website",
        },
      ],
    },
    {
      name: "publications",
      submenu: true,
      sublinks: [
        {
          Head: "ips guidelines",
          link: "/guidelines",
        },
        {
          Head: "position statements",
          link: "/positionstatements",
        },
        {
          Head: "journal",
          link: "/journal",
        },
        {
          Head: "books",
          link: "/books",
        },
        {
          Head: "newsletter",
          link: "/newsletter",
        },
      ],
    },
    {
      name: "Membership",
      submenu: true,
      sublinks: [
        {
          Head: "new membership",
          link: "/newmembership",
        },
        {
          Head: "restricted content",
          link: "/",
        },
        {
          Head: "socail security scheme",
          link: "/socailsecurity",
        },
        {
          Head: "awards",
          link: "/awards",
        },
        {
          Head: "awardees",
          link: "/awardees",
        },
        {
          Head: "contact us",
          link: "/contactus",
        },
        {
          Head: "restricted content",
          link: "/",
        },
        {
          Head: "fellowships",
          link: "/fellowships",
        },
      ],
    },
    {
      name: "Psychiatry Teachers Forum",
      submenu: true,
      sublinks: [
        {
          Head: "president message",
          link: "/presidentmessage",
        },
        {
          Head: "registration form",
          link: "/registrationform",
        },
        {
          Head: "blog",
          link: "/blog",
        },
        {
          Head: "resource materials",
          link: "/resourcematerials",
        },
      ],
    },
    {
      name: "Account",
      submenu: true,
      sublinks: [
        {
          Head: "login",
          link: "/login",
        },
        {
          Head: "register",
          link: "/register",
        },
        {
          Head: "join ips",
          link: "/joinIps",
        },
      ],
    },
  ];
  return (
    <div className="md:flex  gap-2 md:gap-5  ">
      {links.map((link, index) => (
        <div className="" key={index}>
          <div className="text-left md:cursor-pointer group">
            <div
              className="py-2.5"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.name}
            </div>
            {link.submenu && (
              <div
                className={`absolute hidden ${
                  show === index ? "block" : "hidden"
                } group-hover:block hover:block`}
              >
                <div className="w-4 h-4 left-3 absolute mt-2 bg-white rotate-45"></div>
                <div className="bg-white w-[250px]  mt-3.5 grid rounded-md   shadow-2xl shadow-gray-400  ">
                  {link.sublinks.map((data, subIndex) => (
                    <div key={subIndex} className=" relative transition-all duration-500 ease-in-out border-b-[1px] hover:bg-gray-200">
                      <li className=" text-gray-500 my-3 px-3 text-[11px]">
                        {/* <h1>{data.Head}</h1> */}
                       <Link to={data.link}> {data.Head}</Link>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;