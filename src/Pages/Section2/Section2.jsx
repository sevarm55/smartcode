import { motion } from "framer-motion";

import ProductsCard from "../../Components/ProductsCard/ProductsCard";

import "./Section2.css";

const Section2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sec2"
        >
            <div className="sec2-header">
                <div className="sec2-sub-padding">
                    <div className="sec2-sub-head">
                        <div className="sec2-sub-left">
                            <div className="sec2-cirlbox">
                                <div
                                    className="sec2-sub-left-circle red"
                                    style={{ backgroundColor: "#EE6A5F" }}
                                ></div>
                                <div
                                    className="sec2-sub-left-circle yellow"
                                    style={{ backgroundColor: "#F5BE4F" }}
                                ></div>
                                <div
                                    className="sec2-sub-left-circle green"
                                    style={{ backgroundColor: "#61C555" }}
                                ></div>
                            </div>
                        </div>
                        <div className="sec2-sub-right">
                            <div className="sec2-link-box">
                                <p>https://smartcode.am/ դասընթացներ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec2-body">
                <div className="sec2-sub-body">
                    <ProductsCard />
                </div>
            </div>
        </motion.div>
    );
};

export default Section2;
