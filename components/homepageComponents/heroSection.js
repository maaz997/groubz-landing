import React from "react";
import AppleBadge from "../../static/images/app-store.svg";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:w-[70%] max-w-[1200px] md:p-14  pt-[80px] pb-[80px] gap-6">
      <div className="flex flex-col md:w-[30%] w-[60%]">
        <h1 className="md:text-left text-center font-poppins font-semibold xl:text-[55px] text-[34px]">
          Empower Your Network
        </h1>
        <div className="md:flex flex-row justify-between items-center w-[100%] hidden">
          <div className="w-[41%]">
            <AppleBadge />
          </div>

          <img src="/images/google-play-badge.png" width={"50%"} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[70%]">
        <img src="/images/OnlineChat_edited.png" />
      </div>
      <div className="flex md:hidden pl-[16px] flex-row justify-center items-center w-[80%]">
        <div className="w-[41%]">
          <AppleBadge />
        </div>

        <img src="/images/google-play-badge.png" width={"50%"} />
      </div>
    </div>
  );
};

export default HeroSection;
