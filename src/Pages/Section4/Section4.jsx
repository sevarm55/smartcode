import { motion } from "framer-motion";

import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import img from "../../Util/Img/laptop.png";

import "./Section4.css";

const Section4 = () => {
    return (
        <motion.div
            className="section4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="left">
                <ProductsCard />
            </div>
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ amount: 0.2 }}
                className="right"
            >
                <p>Ընտրեք դասընթացներ</p>
                <span>
                    Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար
                </span>
                <img style={{ width: "65%" }} src={img} alt="" />
            </motion.div>
        </motion.div>
    );
};

export default Section4;
