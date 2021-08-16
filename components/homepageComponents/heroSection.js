import React from "react";
import Link from "next/link";
import AppleBadge from "../../static/images/app-store.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:w-[70%] max-w-[1200px] md:p-14  pt-[80px] pb-[80px] gap-6">
      <div className="flex flex-col md:w-[30%] w-[60%]">
        <h1 className="md:text-left text-center font-poppins font-semibold xl:text-[55px] text-[34px]">
          Empower Your Network
        </h1>
        <div className="md:flex flex-row justify-between items-center w-[100%] hidden">
          <Link href="https://itunes.apple.com/us/app/id1530918140?mt=8">
            <div className="w-[41%] cursor-pointer">
              <AppleBadge />
            </div>
          </Link>
          <Link href="http://play.google.com/store/apps/details?id=com.asasa.necsto">
            <img
              src="/images/google-play-badge.png"
              className="cursor-pointer"
              width={"50%"}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[70%]">
        <img src="/images/OnlineChat_edited.png" />
      </div>
      <div className="flex md:hidden pl-[16px] flex-row justify-center items-center w-[80%]">
        <Link href="https://itunes.apple.com/us/app/id1530918140?mt=8">
          <div className="w-[41%] cursor-pointer">
            <AppleBadge />
          </div>
        </Link>
        <Link href="http://play.google.com/store/apps/details?id=com.asasa.necsto">
          <img
            src="/images/google-play-badge.png"
            className="cursor-pointer"
            width={"50%"}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
