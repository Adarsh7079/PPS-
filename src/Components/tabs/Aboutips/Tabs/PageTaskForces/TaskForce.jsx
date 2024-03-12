import React, { useState } from "react";
import PaginationButtons from "../Pagecommittee/PaginationButtons";


const data = [
  {
    Committee: "AWARDS - Sub Committee",
    Position: "Chairperson",
    Name: "DR. P.K. SINGH",
    Place: "Nalanda",
    Email: "pkspostline@yahoo.com@gmail.com",
  },
  {
    Committee: "CME - Sub Committee",
    Position: "Chairperson",
    Name: "DR. N.M. PATIL",
    Place: "Belgaum",
    Email: "nmpatil22@gmail.com",
  },
  {
    Committee: "RESEARCH - Sub Committee",
    Position: "Secretary",
    Name: "DR. R. GUPTA",
    Place: "Jaipur",
    Email: "drgupta@example.com",
  },
  {
    Committee: "EDUCATION - Sub Committee",
    Position: "Treasurer",
    Name: "DR. S. KHAN",
    Place: "Mumbai",
    Email: "drkhan@hotmail.com",
  },
  {
    Committee: "EVENTS - Sub Committee",
    Position: "Member",
    Name: "DR. A. SHARMA",
    Place: "Delhi",
    Email: "asharma@example.com",
  },
  {
    Committee: "MEMBERSHIP - Sub Committee",
    Position: "Member",
    Name: "DR. M. REDDY",
    Place: "Hyderabad",
    Email: "mreddy@gmail.com",
  },
  {
    Committee: "COMMUNICATIONS - Sub Committee",
    Position: "Chairperson",
    Name: "DR. V. JAIN",
    Place: "Ahmedabad",
    Email: "vjain@example.com",
  },
  {
    Committee: "FINANCE - Sub Committee",
    Position: "Treasurer",
    Name: "DR. S. MENON",
    Place: "Chennai",
    Email: "smenon@gmail.com",
  },
  {
    Committee: "PUBLIC RELATIONS - Sub Committee",
    Position: "Secretary",
    Name: "DR. L. CHOWDHURY",
    Place: "Kolkata",
    Email: "lchowdhury@example.com",
  },
  {
    Committee: "TECHNOLOGY - Sub Committee",
    Position: "Member",
    Name: "DR. K. SINGHAL",
    Place: "Pune",
    Email: "ksinghal@hotmail.com",
  },
  {
    Committee: "ETHICS - Sub Committee",
    Position: "Chairperson",
    Name: "DR. G. SHARMA",
    Place: "Bengaluru",
    Email: "gsharma@example.com",
  },
  {
    Committee: "DIVERSITY - Sub Committee",
    Position: "Member",
    Name: "DR. R. NAIR",
    Place: "Thiruvananthapuram",
    Email: "rnair@gmail.com",
  },
  {
    Committee: "SUSTAINABILITY - Sub Committee",
    Position: "Member",
    Name: "DR. A. TRIPATHI",
    Place: "Lucknow",
    Email: "atripathi@example.com",
  },
  {
    Committee: "SAFETY - Sub Committee",
    Position: "Chairperson",
    Name: "DR. B. MALIK",
    Place: "Chandigarh",
    Email: "bmalik@example.com",
  },
  {
    Committee: "WELLNESS - Sub Committee",
    Position: "Secretary",
    Name: "DR. S. KAPOOR",
    Place: "Indore",
    Email: "skapoor@gmail.com",
  },
  {
    Committee: "MENTORSHIP - Sub Committee",
    Position: "Member",
    Name: "DR. V. AGRAWAL",
    Place: "Nagpur",
    Email: "vagrawal@example.com",
  },
  {
    Committee: "POLICY - Sub Committee",
    Position: "Chairperson",
    Name: "DR. R. SINGHANIA",
    Place: "Guwahati",
    Email: "rsinghania@hotmail.com",
  },
  {
    Committee: "OUTREACH - Sub Committee",
    Position: "Member",
    Name: "DR. K. MEHTA",
    Place: "Surat",
    Email: "kmehta@example.com",
  },
  {
    Committee: "INNOVATION - Sub Committee",
    Position: "Member",
    Name: "DR. P. CHOPRA",
    Place: "Bhopal",
    Email: "pchopra@example.com",
  },
  {
    Committee: "QUALITY ASSURANCE - Sub Committee",
    Position: "Chairperson",
    Name: "DR. A. SAXENA",
    Place: "Varanasi",
    Email: "asaxena@gmail.com",
  },
  {
    Committee: "AWARDS - Sub Committee",
    Position: "Chairperson",
    Name: "DR. P.K. SINGH",
    Place: "Nalanda",
    Email: "pkspostline@yahoo.com@gmail.com",
  },
  {
    Committee: "CME - Sub Committee",
    Position: "Chairperson",
    Name: "DR. N.M. PATIL",
    Place: "Belgaum",
    Email: "nmpatil22@gmail.com",
  },
  {
    Committee: "RESEARCH - Sub Committee",
    Position: "Secretary",
    Name: "DR. R. GUPTA",
    Place: "Jaipur",
    Email: "drgupta@example.com",
  },
  {
    Committee: "EDUCATION - Sub Committee",
    Position: "Treasurer",
    Name: "DR. S. KHAN",
    Place: "Mumbai",
    Email: "drkhan@hotmail.com",
  },
  {
    Committee: "EVENTS - Sub Committee",
    Position: "Member",
    Name: "DR. A. SHARMA",
    Place: "Delhi",
    Email: "asharma@example.com",
  },
  {
    Committee: "MEMBERSHIP - Sub Committee",
    Position: "Member",
    Name: "DR. M. REDDY",
    Place: "Hyderabad",
    Email: "mreddy@gmail.com",
  },
  {
    Committee: "COMMUNICATIONS - Sub Committee",
    Position: "Chairperson",
    Name: "DR. V. JAIN",
    Place: "Ahmedabad",
    Email: "vjain@example.com",
  },
  {
    Committee: "FINANCE - Sub Committee",
    Position: "Treasurer",
    Name: "DR. S. MENON",
    Place: "Chennai",
    Email: "smenon@gmail.com",
  },
  {
    Committee: "PUBLIC RELATIONS - Sub Committee",
    Position: "Secretary",
    Name: "DR. L. CHOWDHURY",
    Place: "Kolkata",
    Email: "lchowdhury@example.com",
  },
  {
    Committee: "TECHNOLOGY - Sub Committee",
    Position: "Member",
    Name: "DR. K. SINGHAL",
    Place: "Pune",
    Email: "ksinghal@hotmail.com",
  },
  {
    Committee: "ETHICS - Sub Committee",
    Position: "Chairperson",
    Name: "DR. G. SHARMA",
    Place: "Bengaluru",
    Email: "gsharma@example.com",
  },
  {
    Committee: "DIVERSITY - Sub Committee",
    Position: "Member",
    Name: "DR. R. NAIR",
    Place: "Thiruvananthapuram",
    Email: "rnair@gmail.com",
  },
  {
    Committee: "SUSTAINABILITY - Sub Committee",
    Position: "Member",
    Name: "DR. A. TRIPATHI",
    Place: "Lucknow",
    Email: "atripathi@example.com",
  },
  {
    Committee: "SAFETY - Sub Committee",
    Position: "Chairperson",
    Name: "DR. B. MALIK",
    Place: "Chandigarh",
    Email: "bmalik@example.com",
  },
  {
    Committee: "WELLNESS - Sub Committee",
    Position: "Secretary",
    Name: "DR. S. KAPOOR",
    Place: "Indore",
    Email: "skapoor@gmail.com",
  },
  {
    Committee: "MENTORSHIP - Sub Committee",
    Position: "Member",
    Name: "DR. V. AGRAWAL",
    Place: "Nagpur",
    Email: "vagrawal@example.com",
  },
  {
    Committee: "POLICY - Sub Committee",
    Position: "Chairperson",
    Name: "DR. R. SINGHANIA",
    Place: "Guwahati",
    Email: "rsinghania@hotmail.com",
  },
  {
    Committee: "OUTREACH - Sub Committee",
    Position: "Member",
    Name: "DR. K. MEHTA",
    Place: "Surat",
    Email: "kmehta@example.com",
  },
  {
    Committee: "INNOVATION - Sub Committee",
    Position: "Member",
    Name: "DR. P. CHOPRA",
    Place: "Bhopal",
    Email: "pchopra@example.com",
  },
  {
    Committee: "QUALITY ASSURANCE - Sub Committee",
    Position: "Chairperson",
    Name: "DR. A. SAXENA",
    Place: "Varanasi",
    Email: "asaxena@gmail.com",
  },
  // ... Add more data entries as needed
];




const TaskForce = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Task Forces
      </h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right  ">
          <thead className="bg-[#7445c5] text-xs  text-white uppercase dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Committee
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Place
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((member, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-white"
                } dark:even:bg-gray-800 dark:odd:bg-gray-900 border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4">{member.Committee}</td>
                <td className="px-6 py-4">{member.Position}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {member.Name}
                </td>
                <td className="px-6 py-4">{member.Place}</td>
                <td className="px-6 py-4">{member.Email}</td>
              </tr>
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

export default TaskForce;
