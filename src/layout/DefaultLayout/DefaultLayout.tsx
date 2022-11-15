import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

import "../../assets/js/smoothproducts.js";
import "../../css/styles.css";
import Header from "./Header/Header";
import Header2 from "./Header2/Header2";
import { isAuthenticate } from "../../api/auth";
import { Router } from "react-bootstrap-icons";
import { die } from "immer/dist/internal";

type Props = {};

const DefaultLayout = (props: Props) => {
  // const navigate = useNavigate()
  // const user = isAuthenticate();
  // if (!user) {
    // console.log(1);
  //   navigate('/admin')
  // }
  // if (user.role_id != 2) {
  //   navigate('/admin')
  // }
  // if(!user || user.role_id != 2){
  //   console.log(1);
  // }

  return (
    <div>
      <div>
        <Header2 />
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
