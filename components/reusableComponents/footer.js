import React from "react";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import Facebook from "../../static/images/iconmonstr-facebook.svg";
import Instagram from "../../static/images/iconmonstr-instagram.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[120px]">
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[30%] flex items-center justify-center flex-row -mt-8">
          <Logo className="w-[60px] h-[60px]" />
          <h1 className="font-comfortaa text-[22px] -mb-1">Groubz</h1>
        </div>
        <div className="w-[30%] flex items-center justify-center flex-col space-y-5">
          <h2 className="font-poppins font-semibold border-b-[1px] w-[15vw] text-center border-black">
            CONTACT US
          </h2>
          <div className="flex items-center justify-center flex-row space-x-5">
            <h3 className="font-poppins font-semibold">hello@groubz.com </h3>
          </div>
        </div>
        <div className="w-[30%] flex items-center justify-center flex-col space-y-5">
          <h2 className="font-poppins font-semibold border-b-[1px] w-[15vw] text-center border-black">
            FOLLOW US
          </h2>
          <div className="flex items-center justify-center flex-row space-x-5">
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;