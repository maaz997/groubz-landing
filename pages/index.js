import Head from "next/head";
import HeroSection from "../components/homepageComponents/heroSection";
import IdeaSection from "../components/homepageComponents/ideaSection";
import InformationCTASection from "../components/homepageComponents/informationCTASection";
import ScreenshotsSection from "../components/homepageComponents/screenshotsSection";
import FinalCTASection from "../components/homepageComponents/finalCTASection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Network | Groubz</title>
        <link rel="icon" href="/images/Logo-Transparent-BG.svg" />
      </Head>
      <HeroSection />
      <InformationCTASection />
      <ScreenshotsSection />
      <IdeaSection />
      <FinalCTASection />
    </div>
  );
}
