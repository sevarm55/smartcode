import { motion } from "framer-motion";

import { FiCoffee } from "react-icons/fi";
import { TbMoodHeart } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaHourglassEnd } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { FcAssistant } from "react-icons/fc";

import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";

import "./Section6.css";

const Section6 = () => {
    return (
        <div className="section6">
            <motion.div
                className="sec6-top"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
            >
                <h1>Ինչո՞ւ սովորել մեզ մոտ</h1>
                <span>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</span>
            </motion.div>
            <div className="sec6-bottom">
                <Card
                    title="Փորձառու մասնագետներ"
                    content="Դասավանդում են փորձառու մասնագետներ, ովքեր կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:"
                    icon={<FaUserAlt className="sec_6icon" />}
                />
                <Card
                    title="Փոքր խմբեր անհատական մոտեցում"
                    content="Դասընթացները անցկացվում են՝ 6-8 ուսանողից կազմված խմբերից, ապահովելով անհատական մոտեցում յուրաքանչյուր ուսանողին:"
                    icon={<TbMoodHeart className="sec_6icon" />}
                />
                <Card
                    title="Հարմարավետ կահավորված լսարաններ"
                    content="Մեր հարմարավետ կահավորված լսարաններում Ձեր ուսման պրոցեսը կդառնա էլ ավելի հաճելի։"
                    icon={<FiCoffee className="sec_6icon" />}
                />
                <Card
                    title="3 դասի անվճար մասնակցություն"
                    content="Բոլոր ուսանողներին կտրամադրվի 3 փարձնական անվճար դաս, որը Ձեզ հնարավորություն կտա փորձել Ձեր ուժերը և ծանոթանալ դասապրոցեսի ընթացքին։"
                    icon={<FaHandHoldingHeart className="sec_6icon" />}
                />
                <Card
                    title="Դասի ձայնագրություն"
                    content="Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝ տանը կրկնելու համար։"
                    icon={<FaVideo className="sec_6icon" />}
                />
                <Card
                    title="Օնլայն օգնական"
                    content="Կուրսի ամբողջ ընթացքում դուք կստանաք հեռավար աջակցություն` մասնագետի կողմից:"
                    icon={<FcAssistant className="sec_6icon" />}
                />
                <Card
                    title="Ապառիկ ուսուցում"
                    content="Շատ լավ հնարավորություն՝ սովորել ապառիկ պայմաններով և վճարել ուսման համար դասընթացի ավարտին՝ աշխատանքի անցնելուց հետո:"
                    icon={<FaHourglassEnd className="sec_6icon" />}
                />
                <Card
                    title="Կարիերային աճ"
                    content="Բոլոր ուսանողները կստանան 1 ամսյա անվճար թրեյնինգ մեր HR մասնագետի կողմից` հաջողակ կարիերա ստեղծելու համար"
                    icon={<FaBagShopping className="sec_6icon" />}
                />
                <Card
                    title="Աշխատանքի առաջարկ"
                    content="Դասընթացի ավարտին լավագույն արդյունք ցուցաբերած ուսանողներին կառաջարկվի աշխատանք գործընկեր կազմակերպություններում:"
                    icon={<FaHouseUser className="sec_6icon" />}
                />
                <br />
                <br />
                <br />
                <Button text="Սկսե՛լ ուսում" />
            </div>
        </div>
    );
};

export default Section6;
