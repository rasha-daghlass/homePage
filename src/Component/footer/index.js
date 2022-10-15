import React from "react";
import "./style.css";
import FooterInformation from "./FooterInformation";
import EmailForm from "./EmailForm";
import Icons from "./Icons";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="flex">
         <FooterInformation />
         <div className="items">
            <EmailForm />
            <Icons />
        </div> 
      </div>


      <div className="copy-right">
        <p>
          <AiOutlineCopyrightCircle />
          Copyright Matter PTE LTD 2017
        </p>
      </div>
    </div>
  );
};

export default Footer;
