import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

import "./Card.css";

import { useState } from "react";

const Card = ({ title, content, icon }) => {

    const [open, setOpen] = useState(false);
    
    return (
        <motion.div
            onClick={() => setOpen(!open)}
            className="sec6_card"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            layout
            transition={{
                layout: {
                    duration: 0.2,
                },
            }}
        >
            <div className="sec6_title">
                <motion.h2 layout="position">
                    {icon}
                    {title}
                </motion.h2>
                <motion.div
                    animate={{ rotate: open ? 135 : 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                    }}
                    className="ic"
                    layout="position"
                >
                    <AiOutlinePlus className="plusIcon" />
                </motion.div>
            </div>
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                >
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {content}
                    </motion.p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Card;
