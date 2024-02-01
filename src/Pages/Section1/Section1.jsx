import { motion } from "framer-motion";

import SmartCode from "../../Util/Svg/SmartCode";
import Button from "../../Components/Button/Button";

import "./Section1.css";

const Section1 = () => {
    return (
        <div className="section1">
            <motion.div
                className="smartcode"
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 2.1,
                    type: "spring",
                    damping: 40,
                }}
            >
                <SmartCode />
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, x: 75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                }}
            >
                Սովորի՛ր ծրագրավորում <br /> Դարձի՛ր պահանջված մասնագետ
            </motion.h2>
            <motion.span
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                }}
            >
                Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։
            </motion.span>
            <motion.i
                initial={{ opacity: 0, x: 75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 1.5,
                    type: "spring",
                    stiffness: 200,
                }}
            >
                <Button text="Սկսե՛լ ուսումը" />
            </motion.i>
            <div className="light"></div>
        </div>
    );
};

export default Section1;
