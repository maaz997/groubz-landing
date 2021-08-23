import React from "react";
import Link from "next/link";
import styled from "styled-components";
import AppleBadge from "../../static/images/app-store.svg";
import { H2 } from "../reusableComponents/fonts";

const FinalCTASection = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <DownloadSectionDiv>
          <CustomH2>Download Groubz. It's free.</CustomH2>
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
        </DownloadSectionDiv>
      </InnerWrapper>
      <BottomSectionDiv>
        <Logo src="/images/agg-logo-per-sito.jpg" />
      </BottomSectionDiv>
    </Wrapper>
  );
};

export default FinalCTASection;

const CustomH2 = styled(H2)`
  line-height: 60px;
  @media (max-width: 980px) {
    line-height: 50px;
  }
`;

const Logo = styled.img`
  width: 60%;
  @media (max-width: 980px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 600px;
  margin-top: 60px;
  margin-bottom: 40px;
  @media (max-width: 980px) {
    margin-top: 30px;
    flex-direction: column;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;
const DownloadSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 40px;
  width: 55%;
  @media (max-width: 980px) {
    align-items: center;
    width: 75%;
  }
`;

const BottomSectionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 980px) {
    margin-top: 30px;
    width: 100%;
  }
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
  }
`;
