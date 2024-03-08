import React from "react";

import Logo from "../assets/logo.png";
import { Button } from "react-scroll";
import { FaGithub, FaYoutube, FaDribbble,FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*Logo */}
          <a href="#">
            <img src={Logo} alt="" className="w-[200px]"></img>
          </a>
          {/*button */}
          <button className="btn btn-sm flex bg-center items-center">
            <div className="m-2"> <FaLinkedin /> </div>
            Linkedin
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
