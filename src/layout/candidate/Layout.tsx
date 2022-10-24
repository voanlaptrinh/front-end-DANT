import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../../components/candidate/Header2";
import Footer from "../../components/Footer";
import '../../css/styles.css'
import '../../js/smoothproducts.js'

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <div>
        <Header2 />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
