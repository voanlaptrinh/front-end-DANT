import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

import "../../assets/js/smoothproducts.js";
import "../../assets/styles.css";
import { isAuthenticate } from "../../api/auth";
import { Router } from "react-bootstrap-icons";
import { die } from "immer/dist/internal";
import Header from "./Header/Header";

type Props = {};

const DefaultLayout = (props: Props) => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="bg-light">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
