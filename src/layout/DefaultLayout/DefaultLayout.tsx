
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from './Header/Header'
import '../../js/smoothproducts.js'
import './Header2/Header2.css';
import '../../css/styles.css'

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
