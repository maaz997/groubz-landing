import React from "react";
import AppleBadge from "../../static/images/app-store.svg";

const InformationCTASection = () => {
  return (
    <div className="h-[830px] flex flex-col items-center gap-14">
      <div className="absolute bg-[#FCF6CC] z-[-1] left-0 mt-[150px] w-[100%] h-[680px]" />
      <div className="flex flex-row items-center justify-center gap-[2vw]">
        <div className="bg-[#146BF6] w-[28vw] h-[320px]  flex flex-col justify-center gap-8 items-center">
          <div className="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-full overflow-hidden">
            <img src="/images/app-art-0.jpg" />
          </div>
          <h2 className="text-white text-[20px]">CREATE</h2>
        </div>
        <div className="bg-[#146BF6] w-[28vw] h-[320px]  flex flex-col justify-center gap-8 items-center">
          <div className="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-full overflow-hidden">
            <img src="/images/app-art-1.jpg" />
          </div>
          <h2 className="text-white text-[20px]">INTERACT</h2>
        </div>
        <div className="bg-[#146BF6] w-[28vw] h-[320px]  flex flex-col justify-center gap-8 items-center">
          <div className="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-full overflow-hidden">
            <img src="/images/app-art-2.jpg" />
          </div>
          <h2 className="text-white text-[20px]">CONNECT</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="w-[52%] font-light font-poppins text-center text-[16px]">
          Groubz is the platform where you can share your professional profile
          in the most authentic way and interact with professionals from all
          over the world.
        </p>
        <div className="flex flex-row justify-center items-center w-[28%] pb-10 pt-10">
          <div className="w-[41%]">
            <AppleBadge />
          </div>

          <img src="/images/google-play-badge.png" width={"50%"} />
        </div>
        <div className="font-montserrat font-normal text-black flex flex-row items-center">
          <p className="align-bottom text-[16px]">In the business world, </p>
          <p className="align-bottom font-medium text-[32px] pb-[12px]">
            visibility is fundamental
          </p>
          <p className="align-bottom text-[16px]"> but ​</p>
        </div>
        <p className="align-bottom font-medium text-black text-[32px] pb-2">
          INTERACTION is key.
        </p>
        <div className="font-montserrat font-normal text-black flex flex-row items-center">
          <p className="align-bottom text-[16px]">
            Achieve your goals leveraging on a large network of professionals:
            <strong> interact</strong> with them in Groubz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationCTASection;
