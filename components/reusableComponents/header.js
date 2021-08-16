import React from "react";
import Link from "next/link";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import Facebook from "../../static/images/iconmonstr-facebook.svg";
import Instagram from "../../static/images/iconmonstr-instagram.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[80px] fixed top-0 bg-white">
      <div className="flex items-center justify-between md:w-[70%] w-[90%]">
        <div className="flex items-center justify-center flex-row cursor-pointer">
          <Logo className="w-[45px] h-[45px]" />
          <h1 className="font-comfortaa text-[22px] -mb-1">Groubz</h1>
        </div>
        <div className="flex items-center justify-center flex-row space-x-5">
          <Link href="https://www.facebook.com/groubz/">
            <Facebook className="cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/groubz_italia/">
            <Instagram className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
