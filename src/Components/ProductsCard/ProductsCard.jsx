import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { actionFetchProducts } from "../../Store/Slices/ProductsData/Action";
import { selectProducts } from "../../Store/Slices/ProductsData/ProductsDataSlice";
import { selectCurrentSlide } from "../../Store/Slices/CurrentSlide/CurrentSlideSlice";
import { actionCurrentSlide } from "../../Store/Slices/CurrentSlide/Action";

import Button from "../Button/Button";

import "./ProductsCard.css";

const ProductsCard = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const currentSlide = useSelector(selectCurrentSlide);

    useEffect(() => {
        dispatch(actionFetchProducts());
    }, []);

    return (
        <div className="productscard">
            {products
                .slice(currentSlide * 2, currentSlide * 2 + 2)
                .map((el) => {
                    return (
                        <motion.div
                            className="prodCard"
                            key={el.id}
                            initial={{ y: 130, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ amount: 0.1, once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="productImg">
                                <img src={el.image} alt="" />
                            </div>
                            <div className="priceBox">
                                <h3>{el.title}</h3>
                                <p>
                                    {el.price}֏ / <span>{el.time}</span>
                                </p>
                            </div>
                            <div className="prodCard_buttonBox">
                                <Button text={`Դիտել ${el.title}`} />
                            </div>
                        </motion.div>
                    );
                })}
            <div className="dots">
                {products.slice(6).map((el, index) => (
                    <span
                        key={index}
                        className={`dot ${
                            index === currentSlide ? "active" : ""
                        }`}
                        onClick={() => dispatch(actionCurrentSlide(index))}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ProductsCard;
