import React from "react";
import Link from "next/link";
import styled from "styled-components";
import AppleBadge from "../../static/images/app-store.svg";
import { HeroHeaderText } from "../reusableComponents/fonts";

const HeroSection = () => {
  return (
    <Wrapper>
      <UpperSection>
        <HeaderTextHolderDiv>
          <HeroHeaderText>Empower Your Network</HeroHeaderText>
        </HeaderTextHolderDiv>
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
      </UpperSection>

      <MiddleDiv>
        <img src="/images/OnlineChat_edited.png" width={"100%"} />
      </MiddleDiv>
      <LowerDiv>
        <DownloadButtonsHolderDivMobile>
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
        </DownloadButtonsHolderDivMobile>
      </LowerDiv>
    </Wrapper>
  );
};

export default HeroSection;

const HeaderTextHolderDiv = styled.div`
  width: 300px;
  @media (max-width: 980px) {
    width: 60%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 20px;
  width: 60%;
  @media (max-width: 980px) {
    width: 100%;
    gap: 30px;
    margin-top: 0px;

    flex-direction: column;
  }
`;
const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  gap: 30px;

  @media (max-width: 980px) {
    width: 100%;
    align-items: center;
  }
`;
const LowerDiv = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;
const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
const AppleImageHolderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
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
  width: 180px;
  height: 79px;
  cursor: pointer;
  @media (max-width: 980px) {
    width: 130px;
    height: 53px;
  }
`;

const AppleButton = styled(AppleBadge)`
  width: 160px;
  cursor: pointer;
  @media (max-width: 980px) {
    width: 110px;
  }
`;

const DownloadButtonsHolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    display: none;
  }
`;

const DownloadButtonsHolderDivMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
