import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUsers } from "../../Store/Slices/UsersData/UsersDataSlice";
import { actionFetchUsers } from "../../Store/Slices/UsersData/Action";
import { selectHoverId } from "../../Store/Slices/HoverId/HoverIdSlice";
import { actionHoverId } from "../../Store/Slices/HoverId/Action";

import "./Section5.css";

const Section5 = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const hoverId = useSelector(selectHoverId);

    useEffect(() => {
        dispatch(actionFetchUsers());
    }, []);

    return (
        <div className="section5">
            <motion.div
                className="sec5_top"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
            >
                <h1>Դասընթացավարներ</h1>
                <span>
                    Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող
                    ինֆորմացիան բավականին պարզեցված տեսքով:
                </span>
            </motion.div>
            <div className="sec5_bottom">
                {users.map((el, i) => {
                    return (
                        <motion.div
                            key={el.id}
                            className="userCard"
                            initial={{ y: 30, opacity: 0 }}
                            whileHover={{ y: -10 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            onMouseEnter={() => dispatch(actionHoverId(el.id))}
                            onMouseLeave={() => dispatch(actionHoverId(null))}
                        >
                            <div className="sec5_imgBox">
                                <img
                                    src={hoverId === el.id ? el.gif : el.image}
                                    alt=""
                                />
                            </div>
                            <div className="sec5_infobox">
                                <h3>{el.name}</h3>
                                <p>{el.teach}</p>
                                <p>{el.Trainer}</p>
                                <h2>{el.id}</h2>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Section5;
