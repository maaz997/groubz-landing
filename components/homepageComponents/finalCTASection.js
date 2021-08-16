import React from "react";
import Link from "next/link";
import AppleBadge from "../../static/images/app-store.svg";

const FinalCTASection = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[90%] min-h-[600px]">
      <div className="flex flex-col justify-center items-center w-[50%]">
        <div className="flex flex-col justify-center items-start w-[50%]">
          <h2 className="font-medium text-[40px] ">Download Groubz.</h2>
          <h2 className="font-medium text-[40px] ">It's free.</h2>
          <div className="flex flex-row justify-start items-center w-[80%] pb-10 pt-10">
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
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <div className="w-[60%] ">
          <img className="max-h-[580px] " src="/images/agg-logo-per-sito.jpg" />
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
