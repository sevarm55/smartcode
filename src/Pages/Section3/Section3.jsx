import { motion } from "framer-motion";

import img1 from "../../Util/Img/1.png";
import img2 from "../../Util/Img/2.png";
import img3 from "../../Util/Img/3.png";
import img4 from "../../Util/Img/4.png";
import img5 from "../../Util/Img/5.png";
import img6 from "../../Util/Img/6.png";
import img7 from "../../Util/Img/7.svg";

import "./Section3.css";

const Section3 = () => {
    return (
        <motion.div className="section3">
            <div className="sec3-title">
                <motion.span
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.1 }}
                >
                    Մեր գործընկերները
                </motion.span>
                <motion.p
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.5 }}
                >
                    Դասընթացի ավարտին կստանաք հնարավորություն անցնել աշխատանքի
                    մեր գործընկեր կազմակերպություններում
                </motion.p>
            </div>
            <div className="slider_perents">
                <motion.div
                    className="sliderlogo"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeatType: "loop",
                        repeat: Infinity,
                        type: "tween",
                    }}
                >
                    <div className="box">
                        <img src={img1} alt="" />
                    </div>
                    <div className="box">
                        <img src={img2} alt="" />
                    </div>
                    <div className="box">
                        <img src={img3} alt="" />
                    </div>
                    <div className="box">
                        <img src={img4} alt="" />
                    </div>
                    <div className="box">
                        <img src={img5} alt="" />
                    </div>
                    <div className="box">
                        <img src={img6} alt="" />
                    </div>
                    <div className="box">
                        <img src={img7} alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Section3;
