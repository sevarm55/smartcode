import { motion, useScroll } from "framer-motion"
import { NavLink } from "react-router-dom"

import Logo from "../../Util/Svg/Logo"
import Button from "../Button/Button"

import "./Header.css"

const Header = () => {
  const { scrollYProgress } = useScroll()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className="header">
      <motion.div
        className="progressBar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="header-sub-conent">
        <div className="logobox">
          <motion.div
            className="logocircle"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <NavLink to="/" onClick={scrollTop}>
              <Logo />
            </NavLink>
          </motion.div>
        </div>

        <div className="navBox">
          <nav>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <NavLink to="learn" onClick={scrollTop}>
                Դասընթացներ
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <NavLink to="advantages" onClick={scrollTop}>
                Առավելություններ
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <NavLink to="trainers" onClick={scrollTop}>
                Թրեյներներ
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <NavLink to="aboutus" onClick={scrollTop}>
                Մեր մասին
              </NavLink>
            </motion.div>
          </nav>
        </div>

        <div className="user_box">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button text="Սկսե՛լ ուսումը" />
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header
