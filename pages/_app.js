import 'tailwindcss/tailwind.css'
import 'typeface-comfortaa'
import 'typeface-montserrat'
import 'typeface-poppins'
import Layout from "../components/reusableComponents/layout";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
const TopProgressBar = dynamic(
  () => {
    return import("../components/reusableComponents/topProgressBar");
  },
  { ssr: false }
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TopProgressBar />
      <Layout ChildComponent={() => <Component {...pageProps} />} />
    </>
  );
};

export default MyApp;
