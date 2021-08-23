import React from "react";
import styled from "styled-components";
import { H2, Tag2 } from "../reusableComponents/fonts";

const IdeaSection = () => {
  return (
    <Wrapper>
      <PersonImageDiv>
        <img src="/images/large-image-person-phone.jpg" width={"100%"} />
      </PersonImageDiv>
      <H2>Why</H2>
      <LowerDiv>
        <UpperHolderDiv>
          <ButtonDiv>
            <ButtonCircleDiv>
              <img src="/images/cv-icon.png" width={"80px"} />
            </ButtonCircleDiv>
            <Tag2>Beyond your CV</Tag2>
          </ButtonDiv>
          <ButtonDiv>
            <ButtonCircleDiv>
              <img src="/images/cv-icon.png" width={"80px"} />
            </ButtonCircleDiv>
            <Tag2>Meet other professionals</Tag2>
          </ButtonDiv>
        </UpperHolderDiv>
        <LowerHolderDiv>
          <ButtonDiv>
            <ButtonCircleDiv>
              <img src="/images/cv-icon.png" width={"80px"} />
            </ButtonCircleDiv>
            <Tag2>Discover talents around you</Tag2>
          </ButtonDiv>
        </LowerHolderDiv>
      </LowerDiv>
    </Wrapper>
  );
};

export default IdeaSection;

const Wrapper = styled.div`
  background-color: #fcf6cc;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 30px;
  gap: 50px;
  @media (max-width: 980px) {
    padding-top: 0px;
    margin-top: 50px;
  }
`;

const UpperHolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 66.66%;
  @media (max-width: 980px) {
    width: 80%;
  }
`;

const LowerHolderDiv = styled.div`
  width: 33.33%;
  @media (max-width: 980px) {
    width: 30%;
  }
`;
const PersonImageDiv = styled.div`
  width: 90%;
  height: 100%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;
const LowerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const ButtonCircleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 8px;
  background: white;
  width: 100px;
  height: 100px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px;
`;
