import { Link } from "react-router-dom";

import card from "../../Util/Img/card.png";
import idram from "../../Util/Img/idram.png";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import SmartCode from "../../Util/Svg/SmartCode";

import "./Footer.css";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="footer">
            <div className="footer_box footerBox1">
                <div className="footerLogo">
                    <SmartCode />
                </div>
                <div className="footertext">
                    <span>
                        Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված
                        աշխատանք
                    </span>
                </div>
                <div className="footer_social">
                    <Link to="https://www.facebook.com/SmartCode.am/" target="blank">
                        <FaFacebook className="social" />
                    </Link>
                    <Link to="https://www.linkedin.com/company/smarttechnologyllc/" target="blank">
                        <FaLinkedin className="social" />
                    </Link>
                    <Link to="https://www.instagram.com/smartcode.am/" target="blank">
                        <AiFillInstagram className="social" />
                    </Link>
                </div>
            </div>
            <div className="footer_box footerBox2">
                <h2>Ընկերություն</h2>
                <Link to="learn" onClick={scrollTop}>
                    Դասընթացներ
                </Link>
                <Link to="advantages" onClick={scrollTop}>
                    Առավելություններ
                </Link>
                <Link to="trainers" onClick={scrollTop}>
                    Թրեյներներ
                </Link>
                <Link to="aboutus" onClick={scrollTop}>
                    Մեր մասին
                </Link>
                <div className="bank">
                    <Link>
                        <img src={card} alt="" />
                    </Link>
                    <Link>
                        <img src={idram} alt="" />
                    </Link>
                </div>
            </div>
            <div className="footer_box footerBox3">
                <h2>Կապ մեզ հետ</h2>
                <Link to="tel:+37441435344">+374 41 435344</Link>
                <Link to="tel:+37498435341">+374 98 435341</Link>
                <Link to="mailto:support@smartcode.am">support@smartcode.am</Link>
                <Link to="mailto:hr@smartcode.am">hr@smartcode.am</Link>
                <Link to="https://goo.gl/maps/vvj1Raoh6vwmKfvp7" target="blank">Հանրապետության 22</Link>
                <Link to="https://yandex.ru/maps/-/CKukn6IQ" target="blank">Երվանդ Քոչար 28/2</Link>
            </div>
        </div>
    );
};

export default Footer;
