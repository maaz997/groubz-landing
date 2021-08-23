import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import { HeaderLogoText, Tag3 } from "./fonts";

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoDiv>
          <LogoStyled />
          <HeaderLogoText>Groubz</HeaderLogoText>
        </LogoDiv>
        <FooterLinedDiv>
          <Tag3>CONTACT US</Tag3>
          <FooterLinedInnerDiv>
            <Tag3 style={{ fontSize: "12px" }}>hello@groubz.com</Tag3>
          </FooterLinedInnerDiv>
        </FooterLinedDiv>
        <FooterLinedDiv>
          <Tag3>FOLLOW US</Tag3>
          <FooterLinedInnerDiv>
            <Link href="https://www.facebook.com/groubz/">
              <SocialImage src="/images/Facebook.png" width={"30px"} />
            </Link>
            <Link href="https://www.instagram.com/groubz_italia/">
              <SocialImage src="/images/instagram.png" width={"32px"} />
            </Link>
          </FooterLinedInnerDiv>
        </FooterLinedDiv>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;

const LogoStyled = styled(Logo)`
  width: 45px;
  height: 45px;
`;

const SocialImage = styled.img`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8;
  padding-bottom: 8px;
  @media (max-width: 980px) {
    gap: 30px;
    flex-direction: column;
  }
`;

const LogoDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: -8px;
  @media (max-width: 980px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const FooterLinedDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

const FooterLinedInnerDiv = styled.div`
  display: flex;
  gap: 2%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-top: 1px solid black;
  padding-top: 20px;
  margin-top: 5px;
  width: 60%;
  @media (max-width: 980px) {
    padding-top: 10px;
    margin-top: 10px;
    width: 90%;
  }
`;
