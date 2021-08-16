import React from "react";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ScreenshotsSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 6000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-20">
      <h2 className="font-montserrat font-bold text-black text-[40px]">
        How it works
      </h2>
      <div className="flex flex-row ml-[-190px]">
        <Logo className="w-[190px] h-[190px]" />
        <img src="/images/iphone-bezel.png" className="w-[500px]" />
        <div className="block w-[200px] h-[200px] absolute z-[-1] ml-[335px] mt-[35px]">
          <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlaySpeed={1500}
            autoPlay
            infinite
            removeArrowOnDeviceType={["tablet", "mobile","superLargeDesktop", "desktop"]}
          >
            <div>
              <img
                src="/images/screenshot-game.png"
                className="w-[200px]"
              />
            </div>
            <div>
              <img
                src="/images/screenshot-map.png"
                className="w-[200px]"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotsSection;
