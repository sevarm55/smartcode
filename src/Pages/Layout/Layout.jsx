import { Outlet } from "react-router";

import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";

import './Layout.css'
import News from "../../Components/News/News";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <News />
            <Footer />
        </div>
    );
};

export default Layout;
