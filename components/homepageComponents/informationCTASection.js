import React from "react";
import AppleBadge from "../../static/images/app-store.svg";

const InformationCTASection = () => {
  return (
    <div className="md:h-[830px] h-auto flex flex-col items-center gap-14">
      <div className="absolute md:flex hidden bg-[#FCF6CC] z-[-1] left-0 mt-[150px] w-[100%] md:h-[680px] h-auto" />
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-[2vw] md:bg-[transparent] bg-[#146BF6] w-[100%]">
        <div className="bg-[#146BF6] md:w-[28vw] md:h-[400px] h-[180px] flex flex-col justify-center md:items-center items-start w-[90%] gap-0 md:p-[0] p-[20px]">
          <div className="flex flex-col items-center justify-center md:w-[180px] md:h-[180px] w-[110px] h-[110px] rounded-full overflow-hidden">
            <img src="/images/app-art-0.jpg" />
          </div>
          <h2 className="text-white md:text-[20px] font-light text-[16px] ml-[22px]">
            CREATE
          </h2>
        </div>
        <div className="bg-[#146BF6] md:w-[28vw] md:h-[400px] h-[180px]  flex flex-col justify-center md:items-center items-end w-[90%] gap-80md:p-[0] p-[20px]">
          <div className="flex flex-col items-center justify-center md:w-[180px] md:h-[180px] w-[110px] h-[110px] rounded-full overflow-hidden">
            <img src="/images/app-art-1.jpg" />
          </div>
          <h2 className="text-white md:text-[20px] font-light text-[24px] mr-[2px]">
            INTERACT
          </h2>
        </div>
        <div className="bg-[#146BF6] md:w-[28vw] md:h-[400px] h-[180px]  flex flex-col justify-center md:items-center items-start w-[90%] gap08 md:p-[0] p-[20px]">
          <div className="flex flex-col items-center justify-center md:w-[180px] md:h-[180px] w-[110px] h-[110px] rounded-full overflow-hidden">
            <img src="/images/app-art-2.jpg" />
          </div>
          <h2 className="text-white md:text-[20px] font-light text-[19px] ml-[8px]">
            CONNECT
          </h2>
        </div>
      </div>
      <div className="md:flex hidden flex-col justify-center items-center gap-2">
        <p className="md:w-[52%] w-[90%] font-light font-poppins text-center text-[16px]">
          Groubz is the platform where you can share your professional profile
          in the most authentic way and interact with professionals from all
          over the world.
        </p>
        <div className="flex flex-row justify-center items-center md:w-[28%] w-[70%] gap-8 md:pb-10 md:pt-10 pb-4 pt-4">
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
      {/* //////////////////////////////////////////////////////////////MOBILE//////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="md:hidden flex flex-col justify-center items-center gap-2 w-[95%]">
        <p className="md:w-[52%] w-[90%] font-light font-poppins text-center text-[16px]">
          Groubz is the platform where you can share your professional profile
          in the most authentic way and interact with professionals from all
          over the world.
        </p>
        <div className="flex flex-row justify-center items-center md:w-[28%] w-[70%] gap-8 md:pb-10 md:pt-10 pb-4 pt-4">
          <div className="w-[41%]">
            <AppleBadge />
          </div>

          <img src="/images/google-play-badge.png" width={"50%"} />
        </div>
        <div className="font-montserrat font-normal text-black flex flex-row items-center">
          <p className="align-bottom text-[16px]">In the business world, </p>
          <p className="align-bottom font-normal text-[26px] pl-[3px] pr-[3px] pb-[8px]">
            visibility is
          </p>
        </div>
        <div className="font-montserrat font-normal text-black flex flex-row items-center">
          <p className="align-bottom font-normal text-[26px] pl-[3px] pr-[3px] pb-[8px]">
            fundamental
          </p>
          <p className="align-bottom text-[16px]"> but ​</p>
        </div>

        <p className="align-bottom font-normal text-black text-[26px] pb-2">
          INTERACTION is key.
        </p>
        <div className="font-montserrat font-normal text-black flex flex-row items-center">
          <p className="align-bottom text-center text-[16px]">
            Achieve your goals leveraging on a large network of professionals:
            <strong> interact</strong> with them in Groubz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationCTASection;
