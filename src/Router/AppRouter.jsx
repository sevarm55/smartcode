import { Route, Routes } from "react-router";

import Home from "../Pages/Home/Home";
import Section4 from "../Pages/Section4/Section4";
import Section5 from "../Pages/Section5/Section5";
import Section6 from "../Pages/Section6/Section6";
import Section7 from "../Pages/Section7/Section7";

import Layout from "../Pages/Layout/Layout";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="learn" element={<Section4 />}/>
                    <Route path="advantages" element={<Section6 />}/>
                    <Route path="trainers" element={<Section5 />}/>
                    <Route path="aboutus" element={<Section7 />}/>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
