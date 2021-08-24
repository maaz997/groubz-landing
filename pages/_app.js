import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
import Layout from "../components/reusableComponents/layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const TopProgressBar = dynamic(
  () => {
    return import("../components/reusableComponents/topProgressBar");
  },
  { ssr: false }
);
const GlobalStyle = createGlobalStyle`
html {
  @font-face {
    font-family: "Comfortaa";
    src: url("/fonts/Comfortaa-VariableFont_wght.ttf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Avenir Normal";
    src: url("/fonts/AvenirLTProBlack.otf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Avenir Light";
    src: url("/fonts/AvenirLTProLight.otf") ;
    font-display: block;
  }
  
  @font-face {
    font-family: "Avenir Medium";
    src: url("/fonts/AvenirLTProMedium.otf") ;
    font-display: block;
  }
  
  @font-face {
    font-family: "Avenir Bold";
    src: url("/fonts/AvenirLTProHeavy.otf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Black.ttf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat Light";
    src: url("/fonts/Montserrat-Light.ttf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat Medium";
    src: url("/fonts/Montserrat-Medium.ttf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat Bold";
    src: url("/fonts/Montserrat-Bold.ttf") ;
    font-display: block;
  }
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins-Black.ttf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Poppins Light";
    src: url("/fonts/Poppins-Light.ttf") ;
    font-display: block;
  }

  @font-face {
    font-family: "Poppins Medium";
    src: url("/fonts/Poppins-Medium.ttf") ;
    font-display: block;
  }
  @font-face {
    font-family: "Poppins SemiBold";
    src: url("/fonts/Poppins-SemiBold.ttf") ;
    font-display: block;
  }
  @font-face {
    font-family: "Poppins Bold";
    src: url("/fonts/Poppins-Bold.ttf") ;
    font-display: block;
  }

  
  box-sizing: border-box;
  background: #fffff;
  display:block;
  height: 100%;
  width:100vw;
  margin:auto;
  padding: auto; 
}

body {
  width:100vw;
  overflow-x: hidden;
  overflow-y: overlay;
  padding: 0;
  margin:0;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TopProgressBar />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout ChildComponent={() => <Component {...pageProps} />} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
