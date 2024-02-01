import { motion } from "framer-motion";

import img from "../../Util/Img/smart.jpeg";

import "./Section7.css";

const Section7 = () => {
    return (
        <div className="section7">
            <motion.div
                className="sec7_title"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ amount: 0.3 }}
            >
                <div className="sec7_title_left">
                    <span>Մեր պատմությունը</span>
                    <h2>
                        Ինչ պետք է իմանաք <br /> մեր մասին
                    </h2>
                </div>
                <div className="sec7_title_right">
                    <h4>Ընկերության գործունեության մասին</h4>
                </div>
            </motion.div>
            <div className="sec7_img">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ amount: 0.1 }}
                    src={img}
                    alt=""
                />
            </div>
            <div className="sec7_info">
                <span>
                    SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 7 տարի
                    է կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ,{" "}
                    <br />
                    նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:
                    Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և <br />
                    կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված
                    ծրագրի, տնային առաջադրանքների և անվճար փորձաշրջանի <br />
                    արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ:
                    Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք{" "}
                    <br />
                    մեր ուսանողների սերն ու վստահությունը: Համագործակցելով IT
                    ընկերությունների հետ՝ մենք Երաշխավորում ենք լավագույն <br />
                    ուսանողների փորձաշրջանն ու աշխատանքը: Դու էլ միացի՛ր մեզ,
                    դարձի՛ր մրցունակ ծրագրավորման ոլորտում և <br />
                    երաշխավորի՛ր աշխատանքդ SmartCode-ի օգնությամբ:
                </span>
            </div>
        </div>
    );
};

export default Section7;
