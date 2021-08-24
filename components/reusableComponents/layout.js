import React from "react";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import styled from "styled-components";
import { useRouter } from "next/router";

const Layout = ({ ChildComponent }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Wrapper paddingExtra={router.pathname === "/" ? true : false}>
      {router.pathname === "/" ? <Header /> : <Navbar />}
      <ChildComponent />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  margin-top: ${({ paddingExtra }) => (paddingExtra ? "80px" : "120px")};
`;
