import React from "react";
import AppleBadge from "../../static/images/app-store.svg";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[70%] max-w-[1200px] p-14">
      <div className="flex flex-col w-[30%]">
        <h1 className="font-poppins font-semibold xl:text-[55px] text-[40px]">
          Empower Your Network
        </h1>
        <div className="flex flex-row justify-between items-center w-[100%]">
          <div className="w-[41%]">
            <AppleBadge />
          </div>

          <img src="../../static/images/google-play-badge.png" width={"50%"} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[70%]">
        <img
          src="../../static/images/OnlineChat_edited.png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
