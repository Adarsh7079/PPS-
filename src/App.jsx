import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import { Footer, Home, Main } from "./index";
import {
  Governance,
  Navbar,
  Organization,
  History,
  Constitution,
  Memorandum,
  Notics,
  Events,
  Election,
  Ancips,
  Website,
  PositionStatement,
  Ips,
  Journal,
  Books,
  News,
  FellowShip,
  ContactUs,
  Awardees,
  Award,
  SocialScheme,
  NewMember,
  Presidentmessage,
  Blogs,
  ResourceMaterial,
  Login,
  PresidenMessageMain,
  PasswordReset,
  Register,
  JoinIps,UpdateDetails
} from "./Components/index";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <div>
        <Routes>
          {/* About IPS tab */}
          <Route path="/" element={<Main />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/history" element={<History />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/memorandums" element={<Memorandum/>} />

          {/* News ad Events  */}
          <Route path="/Notices" element={<Notics />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Election" element={<Election />} />
          <Route path="/Ancips" element={<Ancips />} />
          <Route path="/Website" element={<Website />} />

          {/* Publications */}
          <Route path="/guidelines" element={<Ips />} />
          <Route path="/positionstatements" element={<PositionStatement />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/books" element={<Books />} />
          <Route path="/newsletter" element={<News />} />

          {/* Membership */}
          <Route path="/newmembership" element={<NewMember />} />
          <Route path="/socailsecurity" element={<SocialScheme />} />
          <Route path="/awards" element={<Award />} />
          <Route path="/awardees" element={<Awardees />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/fellowships" element={<FellowShip />} />

          {/*Psychiatry Teachers Forum */}
          <Route path="/presidentmessage" element={<Presidentmessage />} />
          <Route path="/registrationform" element={<Presidentmessage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/resourcematerials" element={<ResourceMaterial />} />
        
           {/*Account*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/JoinIps" element={<NewMember/>} />


          {/* Inner Tab route */}
          <Route path="/presidentmain" element={<PresidenMessageMain />} />
          <Route path="/passwordreset" element={<PasswordReset/>} />
          <Route path="/updatedetails" element={<UpdateDetails/>} />
          
         
          
         
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
