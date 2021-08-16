import React from "react";

const IdeaSection = () => {
  return (
    <div className="bg-[#FCF6CC] w-[100%] flex flex-col justify-center items-center pt-[100px] pb-[30px]">
      <div className=" w-[90%]">
        <img src="/images/large-image-person-phone.jpg" width={"100%"} />
      </div>
      <h2 className="font-bold text-[40px] pb-[40px] pt-[40px]">Why</h2>
      <div className="flex flex-row justify-center items-center w-[100%]">
        <div className="flex flex-col justify-center items-center w-[30%] ">
          <div className="flex justify-center items-center rounded-full mb-8 bg-white w-[100px] h-[100px]">
            <img src="/images/cv-icon.png" width={"80px"} />
          </div>
          <p className="font-medium text-center text-[18px]">Beyond your CV</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[30%] ">
          <div className="flex justify-center items-center rounded-full mb-8 bg-white w-[100px] h-[100px]">
            <img src="/images/cv-icon.png" width={"80px"} />
          </div>
          <p className="font-medium text-center text-[18px]">
            Meet other professionals
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[30%] ">
          <div className="flex justify-center items-center rounded-full mb-8 bg-white w-[100px] h-[100px]">
            <img src="/images/cv-icon.png" width={"80px"} />
          </div>
          <p className="font-medium text-center text-[18px]">
            Discover talents around you
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdeaSection;
