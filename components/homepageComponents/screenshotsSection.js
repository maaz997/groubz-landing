import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import { H2 } from "../reusableComponents/fonts";

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
    <Wrapper>
      <LogoStyled />
      <InnerWrapper>
        <H2>How it works</H2>

        <CarouselHolderDiv>
          <IphoneBezel src="/images/iphone-bezel.png" className="" />
          <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlaySpeed={1500}
            autoPlay
            infinite
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "superLargeDesktop",
              "desktop",
            ]}
          >
            <CarouselImageDiv>
              <CarouselImage src="/images/screenshot-game.png" />
            </CarouselImageDiv>
            <CarouselImageDiv>
              <CarouselImage src="/images/screenshot-map.png" />
            </CarouselImageDiv>
          </Carousel>
        </CarouselHolderDiv>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ScreenshotsSection;

const IphoneBezel = styled.img`
  width: 488px;
  position: absolute;
  margin-left: -138px;
  margin-top: -30px;
  z-index: 1;
  @media (max-width: 980px) {
    width: 611px;
    margin-left: -175px;
    margin-top: -36px;
  }
`;

const LogoStyled = styled(Logo)`
  width: 190px;
  height: 190px;
  display: flex;
  padding-right: 60px;
  padding-bottom: 80px;
  position: relative;
  @media (max-width: 980px) {
    padding-right: 0px;
    padding-bottom: 30px;
    width: 120px;
    height: 120px;
  }
`;

const CarouselHolderDiv = styled.div`
  display: block;
  padding-top: 40px;
  position: relative;
  width: 200px;
  @media (max-width: 980px) {
    width: 250px;
  }
`;

const CarouselImage = styled.img`
  width: 200px;
  @media (max-width: 980px) {
    width: 250px;
  }
`;

const CarouselImageDiv = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 80px;
  margin-left: -240px;
  @media (max-width: 980px) {
    padding-top: 20px;
    padding-bottom: 40px;
    margin-left: 0;
    flex-direction: column;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  @media (max-width: 980px) {
    gap: 30px;
    flex-direction: column;
  }
`;
