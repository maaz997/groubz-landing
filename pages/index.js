import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/homepageComponents/heroSection";
import IdeaSection from "../components/homepageComponents/ideaSection";
import FinalCTASection from "../components/homepageComponents/finalCTASection";
import ScreenshotsSection from "../components/homepageComponents/screenshotsSection";
import InformationCTASection from "../components/homepageComponents/informationCTASection";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Network | Groubz</title>
        <link rel="icon" href="/images/Logo-Transparent-BG.svg" />
      </Head>
      <HeroSection />
      <InformationCTASection />
      <ScreenshotsSection />
      <IdeaSection />
      <FinalCTASection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  padding-top: 20px;
`;
