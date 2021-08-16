import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ ChildComponent }) => {
  return (
    <div className="flex-col">
      <Header />
        <ChildComponent />
      <Footer />
    </div>
  );
};

export default Layout;
