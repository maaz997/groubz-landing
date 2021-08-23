import React from "react";
import Link from "next/link";
import styled from "styled-components";
import AppleBadge from "../../static/images/app-store.svg";
import { Tag1, P1, P2 } from "../reusableComponents/fonts";

const InformationCTASection = () => {
  return (
    <Wrapper>
      <BackgroundColorDiv />
      <UpperDiv>
        <BlueBoxDiv align={"start"}>
          <IconHolderCircle>
            <BlueBoxImg src="/images/app-art-0.jpg" />
          </IconHolderCircle>
          <IconHolderCircleText>
            <Tag1 className="text-white md:text-20px font-light text-16px ml-22px">
              CREATE
            </Tag1>
          </IconHolderCircleText>
        </BlueBoxDiv>
        <BlueBoxDiv align={"end"}>
          <IconHolderCircle>
            <BlueBoxImg src="/images/app-art-1.jpg" />
          </IconHolderCircle>
          <IconHolderCircleText>
            <Tag1 className="text-white md:text-20px font-light text-24px mr-2px">
              INTERACT
            </Tag1>
          </IconHolderCircleText>
        </BlueBoxDiv>
        <BlueBoxDiv align={"start"}>
          <IconHolderCircle>
            <BlueBoxImg src="/images/app-art-2.jpg" />
          </IconHolderCircle>
          <IconHolderCircleText>
            <Tag1 className="text-white md:text-20px font-light text-19px ml-8px">
              CONNECT
            </Tag1>
          </IconHolderCircleText>
        </BlueBoxDiv>
      </UpperDiv>
      <LowerDiv>
        <TextHolderDivUpper>
          <P1 className=" font-light font-poppins text-center text-16px">
            Groubz is the platform where you can share your professional profile
            in the most authentic way and interact with professionals from all
            over the world.
          </P1>
        </TextHolderDivUpper>
        <DownloadButtonsHolderDiv>
          <Link href="https://itunes.apple.com/us/app/id1530918140?mt=8">
            <AppleImageHolderDiv>
              <AppleButton />
            </AppleImageHolderDiv>
          </Link>
          <Link href="http://play.google.com/store/apps/details?id=com.asasa.necsto">
            <GooglePlayButtonHolderDiv>
              <GooglePlayButton src="/images/google-play-badge.png" />
            </GooglePlayButtonHolderDiv>
          </Link>
        </DownloadButtonsHolderDiv>

        <TextHolderDiv>
          <P1 className="align-bottom text-16px">
            In the business world, <Strong1>visibility is fundamental</Strong1>{" "}
            but
          </P1>
          <P1>
            <Strong1>INTERACTION is key.</Strong1>
          </P1>
          <P1>
            Achieve your goals leveraging on a large network of professionals:
            <Strong2> interact</Strong2> with them in Groubz.
          </P1>
        </TextHolderDiv>
      </LowerDiv>
    </Wrapper>
  );
};

export default InformationCTASection;
const Strong1 = styled.strong`
  font-size: 40px;
  line-height: 50px;
  @media (max-width: 980px) {
    font-size: 30px;
    line-height: 36px;
    font-weight: normal;
  }
`;
const Strong2 = styled.strong`
  // font-size: 200px;
  font-family: Avenir Medium;
`;
const TextHolderDivUpper = styled.div`
  width: 52%;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 980px) {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

//font-montserrat font-normal text-black
const TextHolderDiv = styled.div`
  width: 65%;
  gap: 20px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 980px) {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const BlueBoxImg = styled.img`
  width: 180px;
  height: 180px;
`;

const BackgroundColorDiv = styled.img`
  position: absolute;
  display: flex;
  height: 640px;
  background-color: #fcf6cc;
  border: none;
  z-index: -1;
  left: 0;
  margin-top: 170px;
  width: 100%;
  @media (max-width: 980px) {
    display: hidden;
    height: auto;
  }
`;

const UpperDiv = styled.div`
  flex-direction: row;
  gap: 2vw;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 980px) {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #146bf6;
  }
`;
const BlueBoxDiv = styled.div`
  background: #146bf6;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0;
  align-items: center;
  width: 28vw;
  height: 320px;
  gap: 40px;

  @media (max-width: 980px) {
    align-items: ${({ align }) => `flex-${align}`};
    gap: 0px;
    height: 100%;
    width: 70%;
  }
`;
const IconHolderCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 980px) {
    width: 110px;
    height: 110px;
  }
`;

const IconHolderCircleText = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    width: 110px;
    margin-top: 20px;
  }
`;

const LowerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  @media (max-width: 980px) {
    margin-top: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 80px;

  @media (max-width: 980px) {
    margin-bottom: 0px;
  }
`;
const AppleImageHolderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  cursor: pointer;
`;

const GooglePlayButtonHolderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  cursor: pointer;
`;

const GooglePlayButton = styled.img`
  width: 140px;
  height: 60px;
  cursor: pointer;
`;

const AppleButton = styled(AppleBadge)`
  width: 120px;
  cursor: pointer;
`;

const DownloadButtonsHolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 980px) {
    width: 80%;
  }
`;
