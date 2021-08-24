import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import FacebookCircle from "../../static/images/facebook-circle.svg";
import GoogleCircle from "../../static/images/google-circle.svg";
import LinkdinCircle from "../../static/images/linkdin-circle.svg";
import { useRouter } from "next/router";

import { H2, Tag3 } from "./fonts";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s",
  },
};
const LoginModal = ({ enabled, setEnabled }) => {
  const router = useRouter();
  const handleRerouteClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  const [opacity, setOpacity] = React.useState(0);
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => (document.body.style.overflowY = "overlay");
  }, []);
  return (
    <Modal
      isOpen={enabled}
      onRequestClose={() => {
        setTimeout(() => {
          setOpacity(0);
          setTimeout(() => {
            setEnabled(false);
          }, 280);
        }, 100);
      }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalMainDiv opacity={opacity}>
        <H2 style={{ color: "#1890ff", paddingBottom: "60px" }}>Login</H2>
        <UpperSectionDiv>
          <FieldHolderDiv>
            <Tag3>Email</Tag3>
            <StyledInput type="email" placeholder="Type your email" />
          </FieldHolderDiv>
          <FieldHolderDiv>
            <Tag3>Password</Tag3>
            <StyledInput type="password" placeholder="Type your password" />
          </FieldHolderDiv>
        </UpperSectionDiv>
        <MidSectionDiv>
          <MiniText active>Forgot Password?</MiniText>
        </MidSectionDiv>
        <LowerSectionDiv>
          <ModalStyledButton
            onClick={(e) => {
              handleRerouteClick(e, "/feed");
            }}
          >
            Let's Go!
          </ModalStyledButton>
          <MiniText>Or Sign Up Using</MiniText>
          <SocialButtonsDiv>
            <FacebookStyled />
            <GoogleStyled />
            <LinkdinStyled />
          </SocialButtonsDiv>
        </LowerSectionDiv>
      </ModalMainDiv>
    </Modal>
  );
};

export default LoginModal;

const MiniText = styled(Tag3)`
  -moz-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  font-size: 11px;
  color: #999999;
  cursor: ${({ active }) => (active ? "pointer" : "arrow")};

  &:hover {
    color: ${({ active }) => (active ? "rgb(24, 144, 255)" : "#999999")};
  }
`;

const ModalMainDiv = styled.div`
  opacity: ${({ opacity }) => opacity};
  -moz-transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
  align-items: center;
  gap: 30px;
`;

const ModalStyledButton = styled.button`
  margin-bottom: 20px;
  width: 180px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-image: linear-gradient(
    to right,
    #00c6ff 0%,
    #0072ff 51%,
    #00c6ff 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  background-size: 200% auto;
  color: white;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

const FacebookStyled = styled(FacebookCircle)`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const GoogleStyled = styled(GoogleCircle)`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const LinkdinStyled = styled(LinkdinCircle)`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const SocialButtonsDiv = styled.div``;

const MidSectionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 80%;
`;
const LowerSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FieldHolderDiv = styled.div`
  gap: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const UpperSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  border: none;
  outline: none;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid #999999;
  color: #999999;
  &:focus {
    color: #1890ff;
    border-bottom: 1px solid #1890ff;

    &::placeholder {
      transition: all 0.5s;
      -moz-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      color: #1890ff;
    }
  }
  &::placeholder {
    color: #cccccc;
  }

  margin: 0;
  padding: 0;
  font-family: Poppins SemiBold;
  font-style: normal;
  font-weight: normal;
  font-size: 14;
  line-height: 16px;
  letter-spacing: 0.05em;
  padding-left: 10px;
  margin-left: -4px;
  @media (max-width: 980px) {
    text-align: center;
    font-size: 14;
    line-height: 16px;
  }
`;
