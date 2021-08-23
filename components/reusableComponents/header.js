import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import Facebook from "../../static/images/iconmonstr-facebook.svg";
import Instagram from "../../static/images/iconmonstr-instagram.svg";
import { HeaderLogoText } from "./fonts";

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoHolder>
          <LogoStyled />
          <HeaderLogoText>Groubz</HeaderLogoText>
        </LogoHolder>
        <SocialButtonsHolder>
          <Link href="https://www.facebook.com/groubz/">
            <Facebook className="cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/groubz_italia/">
            <Instagram className="cursor-pointer" />
          </Link>
        </SocialButtonsHolder>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;

const LogoStyled = styled(Logo)`
  width: 45px;
  height: 45px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 980px) {
    width: 90%;
  }
`;
const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
`;
const SocialButtonsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
`;
