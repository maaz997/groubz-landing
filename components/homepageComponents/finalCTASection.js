import React from "react";
import AppleBadge from "../../static/images/app-store.svg";

const FinalCTASection = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[90%] min-h-[600px]">
      <div className="flex flex-col justify-center items-center w-[50%]">
        <div className="flex flex-col justify-center items-start w-[50%]">
          <h2 className="font-medium text-[40px] ">Download Groubz.</h2>
          <h2 className="font-medium text-[40px] ">It's free.</h2>
          <div className="flex flex-row justify-start items-center w-[80%] pb-10 pt-10">
            <div className="w-[41%]">
              <AppleBadge />
            </div>

            <img
              src="../../static/images/google-play-badge.png"
              width={"50%"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <div className="w-[60%] ">
          <img  className="max-h-[580px] " src="../../static/images/agg-logo-per-sito.jpg" />
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
