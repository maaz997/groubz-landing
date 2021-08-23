import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ ChildComponent }) => {
  return (
    <Wrapper>
      <Header />
      <ChildComponent />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  margin-top: 80px;
`;
