import React from "react";
import Link from "next/link";
import LoginModal from "./loginModal";
import styled from "styled-components";
import SignUpModal from "./signUpModal";
import { HeaderLogoText } from "./fonts";
import Logo from "../../static/images/Logo-Transparent-BG.svg";
import Facebook from "../../static/images/iconmonstr-facebook.svg";
import Instagram from "../../static/images/iconmonstr-instagram.svg";

const Header = () => {
  const [signupModalEnabled, setSignupModalEnabled] = React.useState(false);
  const [loginModalEnabled, setLoginModalEnabled] = React.useState(false);

  return (
    <Wrapper modalOpened={signupModalEnabled || loginModalEnabled}>
      {signupModalEnabled ? (
        <SignUpModal
          enabled={signupModalEnabled}
          setEnabled={setSignupModalEnabled}
        />
      ) : null}
      {loginModalEnabled ? (
        <LoginModal
          enabled={loginModalEnabled}
          setEnabled={setLoginModalEnabled}
        />
      ) : null}
      <InnerWrapper>
        <LogoHolder>
          <LogoStyled />
          <HeaderLogoText>Groubz</HeaderLogoText>
        </LogoHolder>
        <SocialButtonsHolder>
          <ButtonHolderDiv
            mobileDisabled
            onClick={() => {
              setLoginModalEnabled(true);
            }}
          >
            <LoginButton>
              <HeaderLogoText>Login</HeaderLogoText>
            </LoginButton>
          </ButtonHolderDiv>
          <ButtonHolderDiv
            mobileDisabled
            onClick={() => {
              setSignupModalEnabled(true);
            }}
          >
            <LoginButton>
              <HeaderLogoText>Sign Up</HeaderLogoText>
            </LoginButton>
          </ButtonHolderDiv>

          <Link href="https://www.facebook.com/groubz/">
            <ButtonHolderDiv>
              <LoginButton>
                <FacebookButton className="cursor-pointer" />
              </LoginButton>
            </ButtonHolderDiv>
          </Link>
          <Link href="https://www.instagram.com/groubz_italia/">
            <ButtonHolderDiv>
              <LoginButton>
                <InstagramButton className="cursor-pointer" />
              </LoginButton>
            </ButtonHolderDiv>
          </Link>
        </SocialButtonsHolder>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;

const FacebookButton = styled(Facebook)`
  cursor: pointer;
`;

const InstagramButton = styled(Instagram)`
  cursor: pointer;
`;

const ButtonHolderDiv = styled.div`
  height: 30px;
  margin-top: 5px;
  @media (max-width: 980px) {
    display: ${({ mobileDisabled }) => (mobileDisabled ? "none" : "block")};
  }
`;

const LoginButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    border-bottom: 1px solid #146bf6;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  &:hover ${HeaderLogoText} {
    color: #146bf6;
    -moz-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
`;

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
  z-index: ${({ modalOpened }) => (modalOpened ? "0" : "10")};
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
